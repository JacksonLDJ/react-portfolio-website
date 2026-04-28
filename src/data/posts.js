// TEMPLATES
// basic, align-right

export const posts = [
  {
    title: "SolidState",
    slug: "SolidState",
    content: [
      {
        template: "",
        title: "",
        img: "https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/SolidState_Solved.png",
        className: "",
        content:
          `

Started this machine off with some basic enumeration with Gobuster and NMAP.

Gobuster revealed:

\`\`\`bash
┌──(kali㉿kali)-[~]
└─$ gobuster dir -u solidstate.htb --wordlist /usr/share/dirb/wordlists/common.txt
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://solidstate.htb
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/dirb/wordlists/common.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.8.2
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
.hta                 (Status: 403) [Size: 293]
.htaccess            (Status: 403) [Size: 298]
.htpasswd            (Status: 403) [Size: 298]
assets               (Status: 301) [Size: 317] [--> http://solidstate.htb/assets/]
images               (Status: 301) [Size: 317] [--> http://solidstate.htb/images/]
index.html           (Status: 200) [Size: 7776]
server-status        (Status: 403) [Size: 302]
Progress: 4613 / 4613 (100.00%)
===============================================================
Finished
===============================================================
\`\`\`


NMAP Revealed:
\`\`\`
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 7.4p1 Debian 10+deb9u1 (protocol 2.0)
| ssh-hostkey: 
|   2048 77:00:84:f5:78:b9:c7:d3:54:cf:71:2e:0d:52:6d:8b (RSA)
|_  256 78:b8:3a:f6:60:19:06:91:f5:53:92:1d:3f:48:ed:53 (ECDSA)
25/tcp   open  smtp        JAMES smtpd 2.3.2
|_smtp-commands: solidstate Hello nmap.scanme.org (10.10.14.232 [10.10.14.232]), 
80/tcp   open  http        Apache httpd 2.4.25 ((Debian))
|_http-server-header: Apache/2.4.25 (Debian)
|_http-title: Home - Solid State Security
110/tcp  open  pop3        JAMES pop3d 2.3.2
119/tcp  open  nntp        JAMES nntpd (posting ok)
4555/tcp open  james-admin JAMES Remote Admin 2.3.2
\`\`\`

Port 4555 was of interest, I did a bit of research into James Remote Admin 2.3.2 and a potential exploit and found that the default username and password for this was often 'root' 'root'.
I then attempted to connect to this port:


![James Admin Remote Access Tool](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/main/htb/SolidState/1_James_Admin.png "Logged into the admin panel")

At this point I ended up speaking with my mentor as I wasn't sure how to get the exploit I found working for this machine. He pointed out that there was more than one way around this machine and that it might be worth exploring the users in this and looking to see if there were some emails that revealed anything.

I then checked what users were present and began changing passwords and attempting to log in to their accounts via POP3 to see if I could find anything of use. I eventually found the user Mindy.

![Mindy Password Reset](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/2_password_change_mindy.png "Password reset for Mindy")

I then logged into her account and started to look through her inbox.

![Mindy Email](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/3_Mindy_email.png "First email for Mindy")

The second email revealed new SSH credentials.

![Mindy Second Email](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/4_Mindy_login_creds.png "Email revealing SSH creds")

With the newly acquired creds, I SSH'd into the machine and found the user flag.

![SSH @Mindy](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/5_user_flag.png "User Flag")

I then ran \`\`\`bash find / -writable -type f 2>/dev/null | grep -v "/proc"\`\`\` to try and find some files across the system that I had write permissions to, which could potentially be modified for privilege escalation or persistence.
Which pointed me to \`\`\`tmp.py\`\`\` which had the following permissions

![File Perms](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/6_file_perms.png "tmp.py perms")

The content of the file was:

\`\`\`bash
\${debian_chroot:+($debian_chroot)}mindy@solidstate:/opt$ cat tmp.py
#!/usr/bin/env python

import os
import sys
if not os.geteuid() == 0:
    sys.exit("\\nOnly root can run this script\\n")
\`\`\`

At this point I was slightly stuck, with this being one of my first few HTB machines, I didn't know where to go. I did some research and learned about cron.
Cron is basically Linux's built in task scheduler and it runs commands or scripts automically at set times, much like Windows Task Scheduler. The vast majority of my experience is in Windows so this useful to know.

I discovered that the crontab syntax worked as followed:

\`\`\`bash
* * * * * /path/to/script.sh
│ │ │ │ │
│ │ │ │ └── Day of week (0-7, Sun=0 or 7)
│ │ │ └──── Month (1-12)
│ │ └────── Day of month (1-31)
│ └──────── Hour (0-23)
└────────── Minute (0-59)
\`\`\`

After learning about cron and how scheduled tasks can execute scripts automatically, I began looking for files that might be used by such processes. I noticed a Python script located in /opt, which is commonly used to store custom or third-party applications.
Although I had not yet confirmed that the script was being executed by a scheduled task, its location and nature made it a good candidate for testing. As a result, I modified the script to include a reverse shell payload:

![Python Reverse](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/7_python_reverse_shell.png "Python Reverse Shell")

I then setup a listener on my Kali machine and waited to see if the script was run, thankfully it was and I was then given root access and was able to grab the final root flag for this lab.

![Root Shell](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/8_reverse_shell_root_flag.png "Root access and flag acquired")

Lab solved!

![Root Shell](https://raw.githubusercontent.com/JacksonLDJ/writeup-assets/refs/heads/main/htb/SolidState/SolidState_Solved.png "Solved!")
`
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          ""
      }
    ]
  },
    {
    title: "TBA",
    slug: "TBA",
    content: [
      {
        template: "TBA",
        title: "TBA",
        img: "",
        className: "",
        content:
          ""
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          ""
      }
    ]
  },
    {
    title: "TBA",
    slug: "TBA",
    content: [
      {
        template: "TBA",
        title: "TBA",
        img: "",
        className: "",
        content:
          ""
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          ""
      }
    ]
  },
    {
    title: "TBA",
    slug: "TBA",
    content: [
      {
        template: "TBA",
        title: "TBA",
        img: "",
        className: "",
        content:
          ""
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          "TBA"
      }
    ]
  },
    {
    title: "TBA",
    slug: "TBA",
    content: [
      {
        template: "TBA",
        title: "TBA",
        img: "",
        className: "",
        content:
          "TBA"
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          "TBA"
      }
    ]
  },
  
];

