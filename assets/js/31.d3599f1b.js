(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{263:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"scp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[s._v("#")]),s._v(" scp")]),s._v(" "),a("p",[s._v("加密的方式在本地主机和远程主机之间复制文件")]),s._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[s._v("#")]),s._v(" 补充说明")]),s._v(" "),a("p",[a("strong",[s._v("scp 命令")]),s._v(" 用于在 Linux 下进行远程拷贝文件的命令，和它类似的命令有 cp，不过 cp 只是在本机进行拷贝不能跨服务器，而且 scp 传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读 read only system 时，用 scp 可以帮你把文件移出来。另外，scp 还非常不占资源，不会提高多少系统负荷，在这一点上，rsync 就远远不及它了。虽然  rsync 比 scp 会快一点，但当小文件众多的情况下，rsync 会导致硬盘 I/O 非常高，而 scp 基本不影响系统正常使用。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("scp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-1：使用ssh协议版本1；\n-2：使用ssh协议版本2；\n-4：使用ipv4；\n-6：使用ipv6；\n-B：以批处理模式运行；\n-C：使用压缩；\n-F：指定ssh配置文件；\n-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如亚马逊云pem），此参数直接传递给ssh；\n-l：指定宽带限制；\n-o：指定使用的ssh选项；\n-P：指定远程主机的端口号；\n-p：保留文件的最后修改时间，最后访问时间和权限模式；\n-q：不显示复制进度；\n-r：以递归方式复制。\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("ul",[a("li",[s._v("源文件：指定要复制的源文件。")]),s._v(" "),a("li",[s._v("目标文件：目标文件。格式为"),a("code",[s._v("user@host：filename")]),s._v("（文件名为目标文件的名称）。")])]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("从远程复制到本地的 scp 命令与上面的命令雷同，只要将从本地复制到远程的命令后面 2 个参数互换顺序就行了。")]),s._v(" "),a("p",[a("strong",[s._v("从远处复制文件到本地目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/\n")])])]),a("p",[s._v("从 10.10.10.10 机器上的"),a("code",[s._v("/opt/soft/")]),s._v("的目录中下载 nginx-0.5.38.tar.gz  文件到本地"),a("code",[s._v("/opt/soft/")]),s._v("目录中。")]),s._v(" "),a("p",[a("strong",[s._v("从亚马逊云复制 OpenVPN 到本地目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -i amazon.pem ubuntu@10.10.10.10:/usr/local/openvpn_as/etc/exe/openvpn-connect-2.1.3.110.dmg openvpn-connect-2.1.3.110.dmg\n")])])]),a("p",[s._v("从 10.10.10.10 机器上下载 openvpn 安装文件到本地当前目录来。")]),s._v(" "),a("p",[a("strong",[s._v("从远处复制到本地")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r root@10.10.10.10:/opt/soft/mongodb /opt/soft/\n")])])]),a("p",[s._v("从 10.10.10.10 机器上的"),a("code",[s._v("/opt/soft/")]),s._v("中下载 mongodb 目录到本地的"),a("code",[s._v("/opt/soft/")]),s._v("目录来。")]),s._v(" "),a("p",[a("strong",[s._v("上传本地文件到远程机器指定目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定端口 2222")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -rp -P "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v(" /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest\n")])])]),a("p",[s._v("复制本地"),a("code",[s._v("/opt/soft/")]),s._v("目录下的文件 nginx-0.5.38.tar.gz 到远程机器 10.10.10.10 的"),a("code",[s._v("opt/soft/scptest")]),s._v("目录。")]),s._v(" "),a("p",[a("strong",[s._v("上传本地目录到远程机器指定目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest\n")])])]),a("p",[s._v("上传本地目录"),a("code",[s._v("/opt/soft/mongodb")]),s._v("到远程机器 10.10.10.10 上"),a("code",[s._v("/opt/soft/scptest")]),s._v("的目录中去。")])])}),[],!1,null,null,null);t.default=n.exports}}]);