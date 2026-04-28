// TEMPLATES
// basic, align-right

export const posts = [
  {
    title: "First",
    slug: "First",
    content: [
      {
        template: "First",
        title: "First",
        img: "",
        className: "",
        content:
          `
## Recon:

To start this lab I started with some basic enumeration of directories and open ports using gobuster and NMAP.

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
`
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

