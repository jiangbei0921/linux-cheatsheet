# -*- coding: utf-8 -*-
# 命令执行示例与输出解释数据层（与 command_intros.py / command_options.py 并列）。
# OUTPUTS: { 命令名: (output_sample, explanation) }
#   output_sample: 典型终端会话，以 "$ " 标输入行，其余为输出行（贴近真实风格，占位值合理）。
#   explanation:   逐行/逐项解释输出含义，使用 \n 换行；渲染时保留换行。
# 构建时由 build_commands.py 的 c() 合并进 sample 字段（{"output":..., "explain":...}，无则 None）。

OUTPUTS = {
    # ==================== file ====================
    "ls": (
        """$ ls -lh
total 48K
-rw-r--r-- 1 user user  12K Aug  4 10:21 report.txt
-rwxr-xr-x 1 user user 3.2K Aug  4 09:10 run.sh
drwxr-xr-x 2 user user 4.0K Aug  3 22:05 docs""",
        """第1行 `$ ls -lh` 为执行的命令（-l 长格式、-h 人类可读大小）。
第2行 `total 48K`：目录内文件占用的磁盘块合计约 48KB。
第3行首字符 - 表示普通文件；`rw-r--r--` 为权限（属主读写、组与其他只读）；`1` 是硬链接数；`user user` 是属主与属组；`12K` 为人类可读大小；`Aug 4 10:21` 为最后修改时间；`report.txt` 是文件名。
第4行 `rwxr-xr-x` 含 x，说明 run.sh 可执行。
第5行首字符 d 表示 docs 是目录。"""
    ),
    "cd": (
        """$ pwd
/home/user
$ cd projects
$ pwd
/home/user/projects""",
        """前两条展示初始位置 `/home/user`。
`cd projects` 切换到当前目录下的 projects 子目录。
最后 `pwd` 显示新位置 `/home/user/projects`，证明目录已切换。"""
    ),
    "pwd": (
        """$ pwd
/home/user/projects
$ pwd -P
/real/path/to/projects""",
        """第1行 `pwd` 显示当前工作目录的逻辑路径。
第2行 `pwd -P` 解析符号链接后输出真实物理路径（当当前目录经软链接进入时，两者可能不同）。"""
    ),
    "cp": (
        """$ cp -i a.txt b.txt
cp: overwrite 'b.txt'? n
$ cp -r src/ dst/""",
        """第1行 `cp -i a.txt b.txt`：因目标已存在，-i 触发询问 `overwrite 'b.txt'?`，输入 n 取消覆盖，保留原文件。
第2行 `cp -r src/ dst/`：递归复制整个目录（复制目录必须加 -r）。"""
    ),
    "mv": (
        """$ mv old.txt new.txt
$ ls
new.txt
$ mv new.txt backup/""",
        """第1行将 old.txt 重命名为 new.txt（同分区内仅改路径，极快）。
第2行 ls 确认旧名消失、新名出现。
第3行把 new.txt 移动到 backup/ 子目录。"""
    ),
    "rm": (
        """$ rm -i note.txt
rm: remove regular file 'note.txt'? y
$ rm -rf build/""",
        """第1行 `rm -i` 删除前询问确认，输入 y 才真正删除，降低误删风险。
第2行 `rm -rf build/`：`-r` 递归、`-f` 强制不询问，直接删除整个目录——此组合极具破坏性，路径务必先确认。"""
    ),
    "mkdir": (
        """$ mkdir -p a/b/c
$ ls -d a/b/c
a/b/c""",
        """第1行 `mkdir -p a/b/c`：一次性递归创建多级目录，父目录缺失时自动补建。
第2行 `ls -d` 确认最深目录已存在。"""
    ),
    "rmdir": (
        """$ rmdir empty_dir
$ rmdir full_dir
rmdir: failed to remove 'full_dir': Directory not empty""",
        """第1行删除一个空目录成功（无输出即成功）。
第2行 `rmdir full_dir` 因目录非空而失败并提示 `Directory not empty`；要连同内容删除需用 `rm -r`。"""
    ),
    "touch": (
        """$ touch newfile.log
$ ls -l newfile.log
-rw-r--r-- 1 user user 0 Aug  4 11:00 newfile.log""",
        """第1行 `touch newfile.log` 创建一个大小为 0 的空文件（若已存在则仅刷新时间戳）。
第2行 ls 显示该文件已生成，大小为 0 字节，时间更新为当前。"""
    ),
    "find": (
        """$ find . -name '*.log' -size +1M
./var/app.log
./cache/old.log""",
        """命令在 `.` 当前目录递归查找：`-name '*.log'` 匹配扩展名，`-size +1M` 仅保留大于 1MB 的文件。
输出两行即命中结果；可继续用 `-exec` 对它们操作。"""
    ),
    "ln": (
        """$ ln -s /opt/app/app bin/app
$ ls -l bin/app
lrwxrwxrwx 1 user user 13 Aug  4 11:05 bin/app -> /opt/app/app""",
        """第1行 `ln -s` 创建指向 /opt/app/app 的软链接 bin/app。
第2行首字符 l 表示链接，`->` 后显示其指向的真实路径；软链接可跨文件系统、可指向目录。"""
    ),
    "readlink": (
        """$ readlink bin/app
/opt/app/app""",
        """输出软链接 bin/app 指向的目标路径；用于快速查看链接去向、排查链接错乱。"""
    ),
    "realpath": (
        """$ realpath ../conf/app.conf
/home/user/conf/app.conf""",
        """将相对路径 `../conf/app.conf` 解析为规范绝对路径，自动展开 .. 与符号链接，便于脚本获取文件真实位置。"""
    ),
    "basename": (
        """$ basename /home/user/a/b.txt
b.txt
$ basename /home/user/a/b.txt .txt
b""",
        """第1行提取路径末端的文件名 `b.txt`。
第2行额外去掉后缀 `.txt`，得到纯名 `b`，常用于脚本拆分文件名与扩展名。"""
    ),
    "dirname": (
        """$ dirname /home/user/a/b.txt
/home/user/a""",
        """提取路径中的目录部分（去掉文件名），返回 `/home/user/a`，常与 basename 配合处理路径。"""
    ),
    "tree": (
        """$ tree -L 2 -a
.
├── .git
├── src
│   ├── main.py
│   └── util.py
└── README.md""",
        """以树状展示目录结构；`-L 2` 限制显示深度为 2 层，`-a` 包含隐藏文件（如 .git）。
输出直观呈现项目层级，适合快速总览布局。"""
    ),
    "stat": (
        """$ stat report.txt
  File: report.txt
  Size: 12288      Blocks: 24  IO Block: 4096  regular file
Access: 2026-08-04 10:21:00
Modify: 2026-08-04 10:21:00
Change: 2026-08-04 10:21:05
""",
        """`File` 为文件名；`Size` 12288 字节，`Blocks` 占用磁盘块数；`regular file` 表示普通文件。
`Access` 最后访问时间、`Modify` 内容最后修改时间、`Change` 元数据（如权限）最后变更时间——三者含义不同。"""
    ),
    "file": (
        """$ file unknown.bin
unknown.bin: PDF document, version 1.7
$ file run.sh
run.sh: Bourne-Again shell script, ASCII text executable""",
        """`file` 通过文件头魔数识别真实类型，不被扩展名误导。
第1行显示 unknown.bin 实为 PDF 文档；第2行显示 run.sh 是 bash 脚本（文本可执行）。"""
    ),
    "tee": (
        """$ ls -l | tee out.txt
total 4
-rw-r--r-- ... a.txt
$ cat out.txt
total 4
-rw-r--r-- ... a.txt""",
        """`ls -l` 的输出既显示在屏幕，又被 `tee out.txt` 同时写入 out.txt。
随后 `cat out.txt` 显示文件内容与屏幕一致，证明已落盘保存。"""
    ),
    "pushd": (
        """$ pushd /var/log
/var/log ~
$ dirs
/var/log ~""",
        """`pushd /var/log` 切换到 /var/log 并将其压入目录栈，输出栈内容（当前 + 原目录 ~）。
`dirs` 列出目录栈，便于用 `popd` 返回。"""
    ),
    "popd": (
        """$ dirs
/var/log ~
$ popd
~""",
        """`dirs` 显示栈顶为 /var/log。
`popd` 弹出栈顶并切回原目录 ~，输出剩余栈（仅 ~）。"""
    ),
    "eza": (
        """$ eza -l --icons
drwxr-xr-x  user 4.0k Aug 04 10:21  docs
.rwxr-xr-x  user 3.2k Aug 04 09:10  run.sh""",
        """`eza` 是 ls 的现代替代品，`-l` 长格式、`--icons` 显示图标。
输出含权限、属主、大小、时间，并以图标区分文件类型，比传统 ls 更直观。"""
    ),
    "fd": (
        """$ fd config
src/config.yaml
etc/app/config.json""",
        """`fd` 是 find 的更快替代，默认递归搜索文件名。
此处列出所有名为 config 的文件（含相对路径），忽略 .git 等隐藏目录。"""
    ),
    "mktemp": (
        """$ mktemp
/tmp/tmp.abc123
$ mktemp -d
/tmp/tmp.XyZ789""",
        """第1行 `mktemp` 在 /tmp 创建唯一命名的临时文件并返回路径。
第2行 `mktemp -d` 创建临时目录，适合脚本中安全存放中间产物。"""
    ),
    "shred": (
        """$ shred -u secret.txt
$ ls secret.txt
ls: cannot access 'secret.txt': No such file or directory""",
        """`shred -u` 多次覆写文件内容后再删除，使数据难以恢复。
随后 ls 确认文件已不存在，敏感文件应如此安全擦除而非普通 rm。"""
    ),
    "install": (
        """$ install -m 755 app /usr/local/bin/app
$ ls -l /usr/local/bin/app
-rwxr-xr-x 1 root root 12345 Aug  4 11:30 /usr/local/bin/app""",
        """`install` 复制文件并设置目标权限/属主，常用于 Makefile 安装阶段。
此处将 app 复制到 /usr/local/bin 并设为 755（属主可执行），ls 确认权限已生效。"""
    ),
    "rename": (
        """$ rename 's/\\.txt$/.md/' *.txt
$ ls
a.md b.md c.md""",
        """`rename` 用 Perl 表达式批量重命名：`s/\\.txt$/.md/` 把所有 .txt 改为 .md。
ls 显示原 .txt 文件已变为 .md。"""
    ),
    # ==================== view ====================
    "cat": (
        """$ cat a.txt
line one
line two
line three""",
        """`cat` 将文件内容原样输出到屏幕，按行依次显示 a.txt 的三行文本。
适合查看短文件；大文件建议用 less 分页。"""
    ),
    "less": (
        """$ less long.log
(line 1 of file shown; press SPACE to page down, q to quit)
...
(long.log)""",
        """`less` 进入分页浏览：显示一屏内容，空格下翻页、上下键滚动、`/` 搜索、`q` 退出。
不加载整个文件到内存，适合查看大日志。底部状态显示文件名。"""
    ),
    "more": (
        """$ more long.log
line one
line two
--More--(12%)""",
        """`more` 与 less 类似但功能更弱，逐屏显示并在底部提示 `--More--(12%)` 已浏览比例。
回车下滚一行、空格下滚一屏，`q` 退出。"""
    ),
    "head": (
        """$ head -n 3 access.log
10.0.0.1 GET /
10.0.0.2 POST /login
10.0.0.3 GET /home""",
        """`head -n 3` 只显示文件前 3 行；常用于快速预览日志头部或 CSV 表头。
缺省显示前 10 行。"""
    ),
    "tail": (
        """$ tail -n 3 access.log
10.0.0.9 GET /about
10.0.0.10 POST /cart
10.0.0.11 GET /checkout
$ tail -f access.log
(持续输出新追加的行...)""",
        """第1条 `tail -n 3` 显示末尾 3 行，常看最新日志。
第2条 `tail -f` 持续跟踪文件增长，监视实时写入（Ctrl+C 退出）。"""
    ),
    "nl": (
        """$ nl -ba a.txt
     1  line one
     2  line two
     3  line three""",
        """`nl` 为每行加行号输出；`-ba` 表示连空行也编号。
适合需要引用具体行号的场景（如代码评审）。"""
    ),
    "tac": (
        """$ tac a.txt
line three
line two
line one""",
        """`tac` 是 cat 的反向版，从最后一行倒序输出到第一行。
常配合日志分析，先看最新内容。"""
    ),
    "od": (
        """$ od -A x -t x1z sample.bin
000000 48 65 6c 6c 6f 0a                         |hello.|
000006""",
        """`od` 以八进制/十六进制转储二进制；`-A x` 地址用十六进制，`-t x1z` 每字节十六进制并附可读字符。
第1行 `48 65 6c 6c 6f` 是 "hello" 的 ASCII 十六进制，`0a` 是换行。"""
    ),
    "xxd": (
        """$ xxd sample.bin
00000000: 4865 6c6c 6f0a 0a                       hello..""",
        """`xxd` 生成十六进制转储：左侧为偏移，中间为十六进制字节，右侧为对应 ASCII。
`4865 6c6c 6f0a` 对应 "hello\n"，末尾 `0a` 是换行，便于分析二进制文件。"""
    ),
    "hexdump": (
        """$ hexdump -C sample.bin
00000000  48 65 6c 6c 6f 0a                              |hello.|
00000006""",
        """`hexdump -C` 以规范十六进制+ASCII 双栏显示；`48 65 6c 6c 6f 0a` 是 "hello\n" 的字节。
与 xxd 类似，用于二进制/编码排查。"""
    ),
    "strings": (
        """$ strings app.bin | head
/lib64/ld-linux-x86-64.so.2
GLIBC_2.2.5
Usage: app [options]""",
        """`strings` 从二进制文件中提取可打印的字符串。
输出中可见依赖的动态库名、版本符号与内置帮助文本，常用于快速了解未知可执行文件。"""
    ),
    "fold": (
        """$ fold -w 10 longline.txt
this is a
long line
that wraps""",
        """`fold -w 10` 将每行按宽度 10 字符折行，便于在窄屏/固定宽度下阅读长行。"""
    ),
    "pr": (
        """$ pr -2 -l 10 a.txt
2026-08-04 11:30  a.txt  Page 1
line one            line four
line two            line five
line three""",
        """`pr` 为打印格式化文本：`-2` 双栏、`-l 10` 每页 10 行，并加页眉（日期、文件名、页码）。
用于准备打印稿。"""
    ),
    "bat": (
        """$ bat a.py
├──┤ File: a.py
  1 │ def f():
  2 │     return 1
  3 │
  4 │ f()""",
        """`bat` 是 cat 的现代替代，带语法高亮、行号与 Git 改动标记（左侧 ├──┤ 指示文件信息）。
输出更易读，适合代码查看。"""
    ),
    "view": (
        """$ view readme.txt
(read-only Vim; press :q to quit)""",
        """`view` 以只读模式启动 Vim，防止误改文件；操作与 vim 相同，但写入会被拒绝。
`:q` 退出。"""
    ),
    # ==================== text ====================
    "grep": (
        """$ grep -n 'error' app.log
12:2026-08-04 ERROR: connection failed
47:2026-08-04 ERROR: timeout""",
        """`grep -n 'error' app.log` 在文件中搜索包含 error 的行；`-n` 显示行号。
输出 `12:`、`47:` 即命中行号，便于定位。"""
    ),
    "egrep": (
        """$ egrep 'warn|error' app.log
WARN: low memory
ERROR: disk full""",
        """`egrep`（等同 `grep -E`）支持扩展正则；此处用 `warn|error` 匹配 warn 或 error。
输出同时命中两类行。"""
    ),
    "fgrep": (
        """$ fgrep 'a.b' data.txt
x a.b y""",
        """`fgrep`（等同 `grep -F`）按字面字符串匹配，不解释正则。
此处把 `a.b` 当作普通文本，故只命中含字面 "a.b" 的行（. 不被当通配）。"""
    ),
    "sed": (
        """$ sed 's/foo/bar/g' a.txt
bar baz
$ sed -n '1,3p' a.txt
line one
line two
line three""",
        """第1条 `s/foo/bar/g` 把每行所有 foo 替换为 bar 并输出（不改动原文件）。
第2条 `-n '1,3p'` 静默模式仅打印第 1–3 行。"""
    ),
    "awk": (
        """$ awk '{sum+=$1} END{print sum}' nums.txt
150
$ awk -F: '$3>100{print $1}' /etc/passwd
nobody
systemd-resolve""",
        """第1条对第一列求和，END 块打印总和 150。
第2条 `-F:` 以冒号分隔，打印 UID(第3列)>100 的账号名，常用于分析 passwd。"""
    ),
    "sort": (
        """$ sort -n sizes.txt
3
15
128
$ sort -u names.txt
alice
bob""",
        """第1条 `-n` 按数值排序（避免 128 排在 15 前）。
第2条 `-u` 去重后按字典序输出唯一值。"""
    ),
    "uniq": (
        """$ sort access.log | uniq -c
  12 GET /
   3 POST /login""",
        """`uniq` 仅合并相邻重复行，故通常先 `sort`；`-c` 统计每行的重复次数。
输出显示 GET / 出现 12 次、POST /login 出现 3 次。"""
    ),
    "cut": (
        """$ cut -d: -f1 /etc/passwd | head -3
root
daemon
bin""",
        """`cut -d: -f1` 以冒号为分隔符，取第 1 字段；配合 head -3 取前 3 个账号名。
便于从结构化文本中抽列。"""
    ),
    "paste": (
        """$ paste a.txt b.txt
line one\tline A
line two\tline B""",
        """`paste` 将多个文件的对应行横向合并，默认以制表符分隔。
第1行把 a.txt 第1行与 b.txt 第1行并排，常用于字段拼接。"""
    ),
    "join": (
        """$ join id.txt name.txt
1 alice
2 bob""",
        """`join` 按共同字段（默认第1列）横向合并两个已排序文件；此处按 id 把姓名连上。"""
    ),
    "comm": (
        """$ comm <(sort a.txt) <(sort b.txt)
a
\tb
\t\tc""",
        """`comm` 比较两已排序文件：第1列仅在 A、第2列仅在 B、第3列共有。
输出中 `\t` 缩进区分三类；用于求差集/交集。"""
    ),
    "diff": (
        """$ diff a.txt b.txt
3c3
< line three old
---
> line three new""",
        """`diff` 显示两文件差异：`3c3` 表示第 3 行被替换。
`<` 为 a.txt 原行，`>` 为 b.txt 新行，`---` 分隔。"""
    ),
    "patch": (
        """$ patch old.txt < fix.diff
patching file old.txt""",
        """`patch` 按 diff 补丁修改文件；`patching file old.txt` 表示成功应用。
常用于应用他人提交的改动。"""
    ),
    "tr": (
        """$ echo 'Hello' | tr 'a-z' 'A-Z'
HELLO
$ echo 'a,b,c' | tr ',' '\n'
a
b
c""",
        """第1条 `tr 'a-z' 'A-Z'` 把小写转大写。
第2条把逗号替换为换行，实现简单分词。"""
    ),
    "wc": (
        """$ wc -lwc report.txt
  120  480 3120 report.txt""",
        """`wc -lwc` 同时统计行数、词数、字节数；输出 `120` 行、`480` 词、`3120` 字节。
单独 `-l` 仅行数，常用于统计代码行。"""
    ),
    "split": (
        """$ split -l 1000 big.log chunk_
$ ls chunk_*
chunk_aa chunk_ab chunk_ac""",
        """`split -l 1000` 每 1000 行切一个文件，前缀 chunk_；输出分块为 chunk_aa/ab/ac。
便于大文件拆分处理。"""
    ),
    "csplit": (
        """$ csplit app.log '/^===/' '{*}'
12
34
9""",
        """`csplit` 按内容模式切分；`/^===/` 以 === 开头的行作分隔，`{*}` 重复到末尾。
输出各分块的行数（12/34/9）。"""
    ),
    "fmt": (
        """$ fmt -w 40 longpara.txt
this is a paragraph that gets
wrapped at about forty columns
for readable width""",
        """`fmt -w 40` 把段落重排为每行约 40 列，提升可读性；用于规范化文本宽度。"""
    ),
    "expand": (
        """$ expand -t 4 tabs.txt > spaces.txt
$ cat -A spaces.txt
line    one$""",
        """`expand -t 4` 把制表符转成 4 个空格；`cat -A` 用 `$` 标行尾，确认制表符已被空格替代。"""
    ),
    "unexpand": (
        """$ unexpand -a spaces.txt > tabs.txt
$ cat -T tabs.txt
line^Ione""",
        """`unexpand -a` 把连续空格转回制表符；`cat -T` 用 `^I` 显示制表符，确认转换成功。"""
    ),
    "rg": (
        """$ rg -n 'TODO' src/
src/main.py:12:    # TODO refactor
src/util.py:45:    # TODO add test""",
        """`rg`（ripgrep）更快的递归搜索；`-n` 显示行号。
输出递归列出 src/ 下含 TODO 的文件与行，默认跳过 .git 与二进制。"""
    ),
    "yq": (
        """$ yq '.name' config.yaml
app-server""",
        """`yq` 像 jq 一样查询/转换 YAML；`.name` 取顶层 name 字段，输出其值为 app-server。"""
    ),
    "md5sum": (
        """$ md5sum file.iso
d41d8cd98f00b204e9800998ecf8427e  file.iso""",
        """输出 32 位十六进制 MD5 摘要与文件名，用于校验下载完整性（比对发布方公布的哈希）。"""
    ),
    "sha256sum": (
        """$ sha256sum file.iso
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  file.iso""",
        """输出 64 位 SHA-256 摘要，比 MD5 更安全，是当今主流的文件完整性校验方式。"""
    ),
    "sha1sum": (
        """$ sha1sum file.txt
da39a3ee5e6b4b0d3255bfef95601890afd80709  file.txt""",
        """输出 40 位 SHA-1 摘要；因已被证明可碰撞，仅用于兼容旧系统，新场景建议 SHA-256。"""
    ),
    "iconv": (
        """$ iconv -f GBK -t UTF-8 old.txt > new.txt
$ file new.txt
new.txt: Unicode text, UTF-8""",
        """`iconv -f GBK -t UTF-8` 把 GBK 编码转成 UTF-8；`file` 确认结果已为 UTF-8，解决乱码。"""
    ),
    "jq": (
        """$ echo '{"name":"alice","age":30}' | jq '.name'
"alice"
$ echo '{"users":[{"n":"a"},{"n":"b"}]}' | jq '.users[].n'
"a"
"b" """,
        """第1条 `jq '.name'` 取 JSON 的 name 字段，输出 "alice"。
第2条 `.users[].n` 遍历数组取每个元素的 n，输出 a、b。jq 是命令行处理 JSON 的利器。"""
    ),
    "rev": (
        """$ echo 'hello' | rev
olleh""",
        """`rev` 将每行字符顺序反转；hello → olleh，常用于简单字符串处理。"""
    ),
    "column": (
        """$ printf 'a 1\nb 2\n' | column -t
a  1
b  2""",
        """`column -t` 把输入按空白对齐成规整表格列，提升多列数据的可读性。"""
    ),
    "shuf": (
        """$ shuf -n 2 names.txt
bob
alice""",
        """`shuf -n 2` 从输入中随机取 2 行，用于随机抽样或打乱顺序。"""
    ),
    "numfmt": (
        """$ numfmt --to=si 1536
1.5K""",
        """`numfmt` 在数值与可读格式间转换；`--to=si` 把 1536 字节表示为 1.5K。"""
    ),
    "colrm": (
        """$ echo 'abcdef' | colrm 3 4
abef""",
        """`colrm 3 4` 删除每行的第 3–4 列（字符位置）；abcdef → 删掉 cd 得 abef。"""
    ),
    "look": (
        """$ look 'phone' dict.txt
phone
phoneme""",
        """`look` 在已排序的字典/文件中查找以给定前缀开头的行；此处列出 phone 开头词。"""
    ),
    "tsort": (
        """$ tsort <<'EOF'
a b
b c
EOF
a
b
c""",
        """`tsort` 对依赖关系做拓扑排序；输入 a→b、b→c，输出满足先后依赖的顺序 a,b,c。"""
    ),
    # ==================== perm ====================
    "chmod": (
        """$ chmod 755 script.sh
$ ls -l script.sh
-rwxr-xr-x 1 user user 123 Aug  4 11:30 script.sh
$ chmod u+x,go-w data.txt
-rwxr----- 1 user user 99 Aug  4 11:31 data.txt""",
        """`chmod 755` 用数字法设权限：属主 rwx(7)、组 r-x(5)、其他 r-x(5)；ls 确认脚本已可执行。
第2例 `u+x,go-w` 符号法：给属主加执行、去掉组与其他的写权限。"""
    ),
    "chown": (
        """$ chown root:root /srv/app
$ ls -ld /srv/app
drwxr-xr-x 1 root root 4096 Aug  4 11:32 /srv/app""",
        """`chown root:root` 把属主与属组同时改为 root；`ls -ld` 显示目录属主已变为 root root。
改属主通常需要 root 权限。"""
    ),
    "chgrp": (
        """$ chgrp developers app.conf
$ ls -l app.conf
-rw-r--r-- 1 user developers 256 Aug  4 11:33 app.conf""",
        """`chgrp developers` 仅修改文件的属组为 developers；ls 显示属组已变更，属主不变。"""
    ),
    "umask": (
        """$ umask
0022
$ umask -S
u=rwx,g=rx,o=rx""",
        """`umask` 显示当前掩码 0022（八进制），表示新建文件默认去掉组与其他的写位。
`-S` 以符号法展示：属主全权、组与其他读+执行。"""
    ),
    "chattr": (
        """$ chattr +i important.txt
$ lsattr important.txt
----i---------e----- important.txt""",
        """`chattr +i` 设不可修改位（immutable），连 root 也无法删除/改写，需 `-i` 解除。
`lsattr` 显示 i 标志已置位，用于防误删关键文件。"""
    ),
    "lsattr": (
        """$ lsattr /etc/shadow
----i---------e----- /etc/shadow""",
        """`lsattr` 列出文件扩展属性位；i 表示不可变，e 表示 extent 格式；用于排查异常属性。"""
    ),
    "setfacl": (
        """$ setfacl -m u:alice:rwx shared/
$ getfacl shared/
user:alice:rwx""",
        """`setfacl -m u:alice:rwx` 给 alice 对 shared/ 设精细 ACL 读写执行权（超越传统三类权限）。
`getfacl` 显示该 ACL 条目已生效。"""
    ),
    "getfacl": (
        """$ getfacl docs/
# file: docs/
user::rwx
user:alice:r-x
group::r-x
other::---""",
        """`getfacl` 输出目录的 ACL：属主 rwx、alice r-x、组 r-x、其他无权限。
比 `ls` 更细，能看到逐用户授权。"""
    ),
    "chcon": (
        """$ chcon -t httpd_sys_content_t /srv/www/index.html
$ ls -Z /srv/www/index.html
unconfined_u:object_r:httpd_sys_content_t:s0 index.html""",
        """`chcon` 临时修改 SELinux 安全上下文类型（此处设为 Web 内容类型），`ls -Z` 确认生效。
重启或 restorecon 可能还原。"""
    ),
    "restorecon": (
        """$ restorecon -v /srv/www/index.html
Relabeled /srv/www/index.html from unconfined_u:object_r:default_t:s0 to unconfined_u:object_r:httpd_sys_content_t:s0""",
        """`restorecon` 依据策略把文件上下文恢复为默认值；输出显示从 default_t 改回 httpd_sys_content_t。"""
    ),
    "getenforce": (
        """$ getenforce
Enforcing""",
        """显示 SELinux 当前模式：Enforcing（强制拦截违规）、Permissive（仅记录）、Disabled（关闭）。"""
    ),
    "setenforce": (
        """$ setenforce 0
$ getenforce
Permissive""",
        """`setenforce 0` 临时切到 Permissive（仅告警不拦截），`1` 切回 Enforcing；重启后失效，需改配置文件持久化。"""
    ),
    "setfattr": (
        """$ setfattr -n user.note -v 'reviewed' file.txt
$ getfattr -n user.note file.txt
user.note="reviewed" """,
        """`setfattr -n user.note -v 'reviewed'` 给文件加自定义扩展属性 user.note。
`getfattr` 读回该属性值 reviewed，适合附加元数据而不改文件内容。"""
    ),
    "getfattr": (
        """$ getfattr -d -m - file.txt
user.note="reviewed"
user.owner="alice" """,
        """`getfattr -d -m -` 列出文件全部用户扩展属性；输出 user.note 与 user.owner 等键值对。"""
    ),
    # ==================== user ====================
    "sudo": (
        """$ sudo -u postgres psql
[sudo] password for user: 
psql (14.5)""",
        """`sudo -u postgres psql` 以 postgres 身份运行命令；先提示输入当前用户密码，验证后切换身份执行。"""
    ),
    "su": (
        """$ su -
Password: 
# whoami
root""",
        """`su -` 切换到 root 并加载其环境；输入 root 密码后提示符变 `#`，`whoami` 确认已是 root。"""
    ),
    "useradd": (
        """$ useradd -m -s /bin/bash alice
$ id alice
uid=1001(alice) gid=1001(alice) groups=1001(alice)""",
        """`useradd -m` 创建家目录、`-s /bin/bash` 指定登录 shell；`id alice` 显示新账号 uid/gid 已生成。"""
    ),
    "userdel": (
        """$ userdel -r alice
$ id alice
id: 'alice': no such user""",
        """`userdel -r` 删除账号并连同家目录；`id` 返回无此用户，确认删除成功。"""
    ),
    "usermod": (
        """$ usermod -aG sudo alice
$ groups alice
alice : alice sudo""",
        """`usermod -aG sudo` 把 alice 追加到 sudo 组（注意 -a 避免覆盖原有组）；`groups` 显示已含 sudo。"""
    ),
    "groupadd": (
        """$ groupadd dev
$ getent group dev
dev:x:1002:""",
        """`groupadd dev` 新建 dev 组；`getent group` 显示组名、gid 1002，成员暂空。"""
    ),
    "groupdel": (
        """$ groupdel dev
$ getent group dev
(无输出，组已删除)""",
        """`groupdel dev` 删除组；`getent` 无输出即组不存在，删除成功。"""
    ),
    "passwd": (
        """$ passwd alice
New password: 
Retype new password: 
passwd: password updated successfully""",
        """以 root 改 alice 密码：输入两次后提示 `password updated successfully` 表示更新成功。"""
    ),
    "chpasswd": (
        """$ echo 'alice:NewPass123' | chpasswd
$ getent shadow alice | cut -d: -f1,2 | head -c 20
alice:$6$...""",
        """`chpasswd` 从 `user:password` 批量设置密码（常用于脚本）；getent shadow 显示密码已哈希存储。"""
    ),
    "newgrp": (
        """$ newgrp dev
$ id -gn
dev""",
        """`newgrp dev` 切换当前 shell 的有效组为 dev；`id -gn` 确认有效组已变。"""
    ),
    "gpasswd": (
        """$ gpasswd -a alice sudo
Adding user alice to group sudo
$ groups alice
alice : alice sudo""",
        """`gpasswd -a alice sudo` 把 alice 加入 sudo 组并回显确认；`groups` 验证已生效。"""
    ),
    "id": (
        """$ id
uid=1000(user) gid=1000(user) groups=1000(user),27(sudo),1001(docker)""",
        """显示当前用户的 uid、gid 及所属全部组；此处 user 属 sudo、docker 组，决定其可执行权限。"""
    ),
    "whoami": (
        """$ whoami
user""",
        """输出当前生效的用户名；在 sudo/su 后用来确认自己当前身份。"""
    ),
    "who": (
        """$ who
user     tty2         2026-08-04 09:10
user     pts/0        2026-08-04 10:05 (:0)""",
        """列出当前登录会话：用户名、终端(tty2/pts/0)、登录时间与来源(:0 表示本地桌面)。"""
    ),
    "w": (
        """$ w
 11:40:01 up 3 days,  1:20,  2 users,  load average: 0.10, 0.05, 0.01
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
user     pts/0    :0               10:05    3:21   0.12s  0.05s bash""",
        """首行含开机时长、用户数、负载均值；下方逐行显示每个会话的用户、终端、来源、空闲时间与正在运行的命令。"""
    ),
    "last": (
        """$ last -n 3
user     pts/0        :0               Mon Aug  4 10:05   still logged in
reboot   system boot  6.8.0-45         Mon Aug  4 09:10   still running
user     tty2         :0               Sun Aug  3 22:00 - 23:40  (01:40)""",
        """显示最近登录/重启记录；含用户、终端、来源、起止时间；`reboot` 行表示系统启动，可审计异常登录。"""
    ),
    "lastlog": (
        """$ lastlog -u alice
Username         Port     From             Latest
alice            pts/0    :0               Mon Aug  4 10:05:22 +0800 2026""",
        """`lastlog -u alice` 显示该用户最近一次登录时间/来源；若显示 `**Never logged in**` 说明从未登录。"""
    ),
    "groups": (
        """$ groups
user : user sudo docker""",
        """显示当前用户所属的全部组；`user sudo docker` 表明其拥有相应组权限。"""
    ),
    "visudo": (
        """$ visudo
(syntax-checked edit of /etc/sudoers; saved OK)""",
        """`visudo` 以受控编辑器修改 /etc/sudoers，保存时做语法校验，避免错误配置导致所有人无法提权。"""
    ),
    "finger": (
        """$ finger alice
Login: alice         Name: Alice Wang
Office: /dev/null
Last login Mon Aug  4 10:05 (CST) on pts/0""",
        """显示用户账户信息（全名、办公室、最近登录等）；依赖 fingerd 服务，现代系统常未启用。"""
    ),
    "adduser": (
        """$ adduser bob
Adding user 'bob' ...
New password: 
Adding new group 'bob' ...
$ id bob
uid=1002(bob) gid=1002(bob) groups=1002(bob)""",
        """Debian 系交互式建用户脚本：自动建家目录、同名组并提示设密码；`id` 验证账号已建好。"""
    ),
    "groupmod": (
        """$ groupmod -n developers dev
$ getent group developers
developers:x:1002:""",
        """`groupmod -n developers dev` 把组 dev 重命名为 developers；`getent` 显示新组名生效。"""
    ),
    "chage": (
        """$ chage -l alice
Last password change: Aug 01, 2026
Password expires: never
Account expires: never""",
        """`chage -l` 列出密码/账户过期策略；此处密码永不过期，用于审计账号安全设置。"""
    ),
    "chsh": (
        """$ chsh -s /bin/zsh
Password: 
Shell changed.""",
        """`chsh -s /bin/zsh` 把登录 shell 改为 zsh；输入密码后提示 Shell changed，下次登录生效。"""
    ),
    "chfn": (
        """$ chfn -f 'Alice Wang' alice
Password: 
finger information changed.""",
        """`chfn -f` 设置用户的全名(finger 信息)；保存后 finger 可查到该名称。"""
    ),
    "getent": (
        """$ getent passwd alice
alice:x:1001:1001:Alice:/home/alice:/bin/bash""",
        """`getent passwd alice` 通过系统名称服务(NSS)查询用户，兼容本地与 LDAP/SSSD 等后端，比直接读 /etc/passwd 更通用。"""
    ),
    "logname": (
        """$ logname
user""",
        """输出最初登录的用户名（不受 su/sudo 影响），区别于 whoami 的当前有效身份。"""
    ),
    "faillog": (
        """$ faillog -u alice
Username   Failures  Latest    On
alice         3       08/04/26   pts/0""",
        """`faillog -u alice` 显示该用户登录失败次数(3)与最近失败时间，用于发现暴力破解迹象。"""
    ),
    "nologin": (
        """$ nologin
This account is currently not available.""",
        """`nologin` 作为不可登录账号的 shell，执行即返回"账户不可用"提示并拒绝登录，常用于服务账号。"""
    ),
    "vipw": (
        """$ vipw
(locked /etc/passwd, syntax-checked edit; saved)""",
        """`vipw` 以加锁+语法校验方式编辑 /etc/passwd，防止并发写损坏导致无法登录。"""
    ),
    "pwck": (
        """$ pwck
user 'lp': directory '/var/spool/lpd' does not exist
pwck: no changes""",
        """`pwck` 校验 /etc/passwd 与 /etc/shadow 一致性（如家目录是否存在）；此处仅告警、未改动。"""
    ),
    # ==================== proc ====================
    "ps": (
        """$ ps aux | head -5
USER   PID %CPU %MEM    VSZ   RSS TTY  STAT START   TIME COMMAND
root     1  0.0  0.1 168k  9.2M ?    Ss   09:10   0:02 /sbin/init
user  1234  2.1  1.3 1.2g 210m pts/0 S    10:05   0:11 vim app.js""",
        """`ps aux` 列出全部进程；各列：USER 属主、PID 进程号、%CPU/%MEM 占用、VSZ 虚拟内存、RSS 常驻内存、STAT 状态(S 睡眠/R 运行)、TIME 累计 CPU、COMMAND 命令。
第3行 vim 占 2.1% CPU，便于定位高耗进程。"""
    ),
    "top": (
        """$ top -b -n1 | head -8
top - 11:45:00 up 3 days,  load average: 0.10, 0.05, 0.01
Tasks: 210 total,   1 running, 209 sleeping
%Cpu(s):  1.3 us,  0.3 sy, 98.3 id
MiB Mem :  15987.0 total,  10213.4 free
   PID USER  PR  NI    VIRT    RES  %CPU %MEM COMMAND
  1234 user  20   0 1234567 215000  2.1  1.3 vim""",
        """首行含运行时间、负载均值(1/5/15分钟)，值越低越空闲。
Tasks 显示进程总数与睡眠/运行数；%Cpu 中 id 高表示空闲；Mem 显示内存使用。
下方进程表按资源排序，可找最占 CPU 的进程（交互模式按 P 按 CPU、M 按内存排）。"""
    ),
    "htop": (
        """$ htop
  CPU[|||               5.2%]  Mem[|||||||      2.1G/15.6G]
  Tasks: 210, 1 running
  PID USER  PRI  NI  VIRT   RES  S  CPU% MEM% COMMAND
 1234 user  20   0 1204M  210M S   2.1  1.3 vim""",
        """htop 是 top 的交互增强版：顶部彩色条显示 CPU/内存占用，列表可鼠标点选、滚动、杀进程（F9）。
上手更友好，适合实时监控。"""
    ),
    "kill": (
        """$ kill 1234
$ kill -9 1234
$ ps -p 1234
(无输出，进程已终止)""",
        """`kill 1234` 发送 SIGTERM(15) 请求进程优雅退出；若无效用 `kill -9`(SIGKILL) 强制。
`ps -p` 无输出表示进程已不存在。"""
    ),
    "pkill": (
        """$ pkill -u alice chrome
$ pgrep -u alice chrome
(无输出，进程已结束)""",
        """`pkill -u alice chrome` 按"用户+命令名"批量结束匹配的进程；`pgrep` 无输出即已全部终止。"""
    ),
    "killall": (
        """$ killall -9 nginx
nginx: no process found
$ killall nginx
(nginx 进程已终止)""",
        """`killall nginx` 按进程名结束全部实例；首行因已无 nginx 报 not found，确认后再查已无残留。"""
    ),
    "pgrep": (
        """$ pgrep -a sshd
812 /usr/sbin/sshd -D
1050 /usr/sbin/sshd -D""",
        """`pgrep -a sshd` 列出 sshd 进程的 PID 与完整命令行；常用于先查再决定如何操作进程。"""
    ),
    "pidof": (
        """$ pidof nginx
812 1050""",
        """`pidof nginx` 直接返回同名进程的所有 PID（空格分隔），脚本中取 PID 很方便。"""
    ),
    "jobs": (
        """$ sleep 100 &
[1] 2345
$ jobs
[1]+  Running                 sleep 100 &""",
        """`sleep 100 &` 后台运行并分配作业号 [1] 与 PID 2345。
`jobs` 列出当前 shell 的后台作业及其状态(Running)。"""
    ),
    "bg": (
        """$ jobs
[1]+  Stopped                 sleep 100
$ bg %1
[1]+ sleep 100 &""",
        """`bg %1` 把暂停的作业 1 放到后台继续运行；状态由 Stopped 变为 Running(&)。"""
    ),
    "fg": (
        """$ jobs
[1]+  Running                 sleep 100 &
$ fg %1
(带回前台，可 Ctrl+Z 再次暂停)""",
        """`fg %1` 把后台作业 1 调回前台终端，便于交互或 Ctrl+Z 暂停。"""
    ),
    "nohup": (
        """$ nohup ./server.sh > server.log 2>&1 &
[1] 3456
$ tail -f server.log""",
        """`nohup ... &` 让进程忽略挂断信号，退出终端后仍继续运行；输出重定向到 server.log。
适合启动长期服务。"""
    ),
    "disown": (
        """$ sleep 100 &
[1] 2345
$ disown
$ exit
(进程在终端关闭后继续存活)""",
        """`disown` 把作业从 shell 作业表移除，关闭终端时不会被发 SIGHUP，进程得以存活。"""
    ),
    "nice": (
        """$ nice -n 10 backup.sh &
[1] 4001
$ ps -o pid,ni,cmd -p 4001
  PID  NI CMD
 4001  10 backup.sh""",
        """`nice -n 10` 以较低优先级(高 niceness)启动进程；`ps -o ni` 确认其 NI 为 10，避免抢占关键任务。"""
    ),
    "renice": (
        """$ renice -n 5 -p 4001
4001 (process ID) old priority 10, new priority 5
$ ps -o pid,ni -p 4001
  PID  NI
 4001   5""",
        """`renice -n 5 -p 4001` 把运行中进程 4001 的优先级改为 5；`ps` 确认 NI 已从 10 变为 5。"""
    ),
    "at": (
        """$ echo 'backup.sh' | at 23:00
job 7 at Mon Aug  4 23:00
$ atq
7 Mon Aug  4 23:00 a user""",
        """`at 23:00` 安排命令在指定时间一次性执行，返回作业号 7；`atq` 列出待执行队列。"""
    ),
    "batch": (
        """$ echo 'sync-data' | batch
job 8 at Mon Aug  4 11:50""",
        """`batch` 等同于 at，但仅在系统负载低于阈值(默认 0.8)时才执行，适合低峰跑批处理。"""
    ),
    "crontab": (
        """$ crontab -l
0 2 * * * /usr/bin/backup.sh
$ crontab -e
(crontab 已更新)""",
        """`crontab -l` 列出当前定时任务：`0 2 * * *` 表示每天 02:00 跑备份。
`crontab -e` 编辑；格式为 分 时 日 月 周 + 命令。"""
    ),
    "runlevel": (
        """$ runlevel
N 5""",
        """显示运行级别：前一个 N(无切换)，当前 5(多用户图形界面)；3 为纯多用户文本，6 重启。"""
    ),
    "init": (
        """$ init 6
(broadcast: system is rebooting)""",
        """`init 6` 切换到运行级别 6 触发重启；`init 0` 关机，`init 3` 进文本多用户。现代多用 systemctl 替代。"""
    ),
    "watch": (
        """$ watch -n 2 'df -h /'
Every 2.0s: df -h /
Filesystem  Size  Used  Avail  Use%  Mounted
/dev/sda1   50G   20G    28G   42%   /""",
        """`watch -n 2` 每 2 秒刷新执行一次命令；此处持续监视根分区使用率，便于观察变化。"""
    ),
    "lsof": (
        """$ lsof -i :8080
COMMAND  PID USER  FD  TYPE DEVICE SIZE/OFF NODE NAME
node    1234 user  12u IPv4  23456 0t0 TCP *:8080 (LISTEN)""",
        """`lsof -i :8080` 列出占用 8080 端口的进程；输出显示 node(PID 1234) 正在 LISTEN，便于排查端口冲突。"""
    ),
    "strace": (
        """$ strace -f -e trace=network curl -s localhost
connect(3, {sa_family=AF_INET,...port=80}, 16) = 0
sendto(3, "GET / HTTP/1.1\\r\\n"..., 75, 0, NULL, 0) = 75""",
        """`strace -e trace=network` 只跟踪网络相关系统调用；此处看到 connect 建立连接、sendto 发送 HTTP 请求，用于诊断程序行为。"""
    ),
    "time": (
        """$ time ./build.sh
real    0m12.345s
user    0m09.120s
sys     0m01.200s""",
        """`time` 统计命令耗时：real 实际墙钟、user 用户态 CPU、sys 内核态 CPU。
user+sys < real 说明有 I/O 等待；常用于性能分析。"""
    ),
    "timeout": (
        """$ timeout 5 slow.sh
(timed out after 5s, exit 124)
$ echo $?
124""",
        """`timeout 5` 在 5 秒后若命令未结束则杀掉并返回码 124；`echo $?` 读到 124 即超时触发。"""
    ),
    "pstree": (
        """$ pstree -p | head -5
systemd(1)─┬─sshd(812)───sshd(1050)───bash(1051)───vim(1234)
           └─nginx(900)─┬─nginx(901)
                        └─nginx(902)""",
        """`pstree -p` 以树状展示进程父子关系（含 PID）；可见 vim 由 bash 派生、nginx 多 worker 由主进程 fork。"""
    ),
    "fuser": (
        """$ fuser -m /mnt/data
/mnt/data:  1234c  1250m
$ fuser -k /mnt/data
(终止占用进程后卸载)""",
        """`fuser -m /mnt/data` 显示正在使用该挂载点的进程（c=当前目录、m=映射）；`-k` 杀死它们，便于安全卸载。"""
    ),
    "ionice": (
        """$ ionice -c 3 -p 4001
$ ionice -p 4001
none: prio 0""",
        """`ionice -c 3` 把进程设为 idle 磁盘调度类（仅在空闲时读写），避免拖慢系统；`-p` 作用于已运行 PID。"""
    ),
    "taskset": (
        """$ taskset -c 0,1 ./app
$ taskset -p 4001
pid 4001's current affinity mask: 3""",
        """`taskset -c 0,1` 把进程绑定到 CPU 0 和 1；`taskset -p` 显示亲和掩码 3(二进制 11)即第0/1核，用于 NUMA/性能调优。"""
    ),
    "pmap": (
        """$ pmap -x 1234 | tail -3
 total kB        1224000  215000  180000
$ pmap 1234 | head -3
1234:   vim app.js
000055d...  r-xp ... /usr/bin/vim""",
        """`pmap -x` 显示进程内存映射明细；total 行给出虚拟/常驻/可写内存总量(kB)，定位内存泄漏时有用。"""
    ),
    "service": (
        """$ service nginx status
* nginx is running
$ service nginx restart
* Restarting nginx... done.""",
        """`service nginx status` 查看服务状态；`restart` 重启。底层调用 SysV 脚本，systemd 系统建议用 systemctl。"""
    ),
    "tmux": (
        """$ tmux new -s dev
[detached (from session dev)]
$ tmux ls
dev: 1 windows (created Mon Aug 4 11:00)""",
        """`tmux new -s dev` 新建名为 dev 的会话并可 detach；`tmux ls` 列出会话，便于重连 `tmux attach -t dev`。"""
    ),
    "screen": (
        """$ screen -S work
[detached from 12345.work]
$ screen -ls
There is a screen on:
	12345.work	(Detached)""",
        """`screen -S work` 新建会话；可 Ctrl+A D 分离，`screen -ls` 查看，`screen -r work` 恢复，功能类似 tmux。"""
    ),
    # ==================== disk ====================
    "df": (
        """$ df -h
Filesystem  Size  Used Avail Use% Mounted on
/dev/sda1    50G   20G   28G  42% /
tmpfs       3.9G     0  3.9G   0% /dev/shm""",
        """`df -h` 以人类可读单位显示各文件系统容量；Used/Avail 已用可用，Use% 使用率，Mounted on 挂载点。
/dev/sda1 根分区用了 42%，尚有余量。"""
    ),
    "du": (
        """$ du -sh /var/log
245M  /var/log
$ du -h --max-depth=1 /home | sort -h
12K  /home/user/.cache
2.1G /home/user/data""",
        """`du -sh` 汇总目录总大小(245M)；`--max-depth=1` 看各级子目录并 `sort -h` 找出最占空间的目录。"""
    ),
    "mount": (
        """$ mount | grep sda1
/dev/sda1 on / type ext4 (rw,relatime)
$ mount -t tmpfs tmpfs /mnt/ram""",
        """`mount` 列出已挂载文件系统；首行显示 /dev/sda1 挂载为 /，ext4、可读写(rw)。
第二行示例把 tmpfs 挂到 /mnt/ram（内存盘）。"""
    ),
    "umount": (
        """$ umount /mnt/ram
$ mount | grep ram
(无输出，已卸载)""",
        """`umount /mnt/ram` 卸载挂载点；`mount | grep ram` 无输出即卸载成功。若提示 busy，先 `fuser -km` 杀占用进程。"""
    ),
    "fdisk": (
        """$ fdisk -l /dev/sdb
Disk /dev/sdb: 16 GiB, 17179869184 bytes, 33554432 sectors
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 33554431 33552384  16G 83 Linux""",
        """`fdisk -l /dev/sdb` 列出磁盘与分区表；显示磁盘容量、扇区数、分区 /dev/sdb1(16G, Linux 类型 83)。"""
    ),
    "parted": (
        """$ parted /dev/sdb print
Model: ATA Disk (scsi)
Disk /dev/sdb: 16.0GB
Number  Start   End     Size    File system  Name  Flags
 1      1049kB  16.0GB  16.0GB  ext4""",
        """`parted print` 以更易读方式显示分区：GPT/MBR、各分区起止、大小与文件系统；比 fdisk 更适合大磁盘与 GPT。"""
    ),
    "lsblk": (
        """$ lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   50G  0 disk
├─sda1   8:1    0   50G  0 part /
sdb      8:16   0   16G  0 disk
└─sdb1   8:17   0   16G  0 part /data""",
        """`lsblk` 树状列出块设备：磁盘(sda/sdb)与分区(sda1/sdb1)及挂载点；清晰展示磁盘→分区→挂载的层级。"""
    ),
    "blkid": (
        """$ blkid /dev/sda1
/dev/sda1: UUID="a1b2c3..." TYPE="ext4" PARTUUID="..." """,
        """`blkid` 显示块设备的 UUID、文件系统类型(TYPE)与 PARTUUID；fstab 中常用 UUID= 引用，避免设备名变动导致挂载错乱。"""
    ),
    "mkfs": (
        """$ mkfs -t ext4 /dev/sdb1
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 4096000 4k blocks
$ blkid /dev/sdb1
/dev/sdb1: UUID="..." TYPE="ext4" """,
        """`mkfs -t ext4` 在分区上创建 ext4 文件系统（会清空数据！）；`blkid` 确认 TYPE 已为 ext4。"""
    ),
    "dd": (
        """$ dd if=/dev/zero of=test.img bs=1M count=10
10+0 records in
10+0 records out
10485760 bytes (10 MB) copied, 0.01 s, 1.0 GB/s""",
        """`dd if=输入 of=输出 bs=块大小 count=块数`；此处用零填充生成 10MB 测试镜像。
`if=/dev/sda of=/dev/sdb` 可整盘克隆——极危险，务必核对 if/of 顺序！"""
    ),
    "fsck": (
        """$ fsck -y /dev/sdb1
fsck from util-linux 2.38
/dev/sdb1: clean, 12345/1048576 files, 234567/4194304 blocks""",
        """`fsck -y` 检查并自动修复文件系统；输出 clean 表示无错误。应在卸载状态下运行，否则可能损坏数据。"""
    ),
    "e2fsck": (
        """$ e2fsck -f /dev/sdb1
Pass 1: Checking inodes...
/dev/sdb1: 12345/1048576 files (0.1% non-contiguous), 234567/4194304 blocks""",
        """`e2fsck -f` 强制检查 ext2/3/4 文件系统各阶段(索引节点、块、目录)；输出文件/块数，用于 ext 专用修复。"""
    ),
    "tune2fs": (
        """$ tune2fs -l /dev/sdb1 | head
Filesystem volume name:   data
Inode count:              1048576
Block size:               4096
Filesystem state:         clean""",
        """`tune2fs -l` 显示 ext 文件系统参数（卷名、inode 数、块大小、状态）；也可 `-L` 改卷标、`-i` 调检查间隔。"""
    ),
    "badblocks": (
        """$ badblocks -v /dev/sdb1
Checking blocks 0 to 4194303
0 bad blocks found. (0/0/0 errors)""",
        """`badblocks -v` 扫描磁盘坏块；输出 0 bad blocks 表示无损。常与 `e2fsck -c` 配合标记坏块。"""
    ),
    "nvme": (
        """$ nvme list
Node             SN                   Model            Namespace Size
/dev/nvme0n1     S4...                Samsung 980      1.02  TB""",
        """`nvme list` 列出 NVMe 固态硬盘：设备节点、序列号、型号、容量；`nvme smart-log /dev/nvme0n1` 可查健康度。"""
    ),
    "losetup": (
        """$ losetup -f test.img
$ losetup -a
/dev/loop0: []: (/path/test.img)
$ losetup -d /dev/loop0""",
        """`losetup -f` 把镜像文件关联到空闲 loop 设备；`-a` 列出所有 loop；`-d` 解除。常用于挂载 .img 分区。"""
    ),
    "sync": (
        """$ sync
$ echo $?
0""",
        """`sync` 把内核缓存的写操作刷到磁盘，确保数据安全；返回 0 表示完成。卸载/关机前应执行。"""
    ),
    "mkswap": (
        """$ mkswap /swapfile
Setting up swapspace version 1, size = 2 GiB
$ swapon /swapfile
$ free -h | grep Swap
Swap:   2.0Gi   0B   2.0Gi""",
        """`mkswap` 初始化交换文件；`swapon` 启用；`free` 显示 Swap 已增 2G，提供额外虚拟内存。"""
    ),
    "swapon": (
        """$ swapon --show
NAME      TYPE SIZE USED PRIO
/swapfile file   2G   0B   -2""",
        """`swapon --show` 列出当前启用的交换空间；此处为 2G 文件型交换，USED 0 表示暂未使用。"""
    ),
    "swapoff": (
        """$ swapoff /swapfile
$ swapon --show
(无输出，交换已关闭)""",
        """`swapoff /swapfile` 关闭指定交换空间；`swapon --show` 无输出即已全部停用。"""
    ),
    "dumpe2fs": (
        """$ dumpe2fs -h /dev/sdb1
Inode count:              1048576
Block size:               4096
Filesystem state:         clean
Mount count:              12""",
        """`dumpe2fs -h` 仅打印超级块信息（inode 数、块大小、状态、挂载次数）；用于诊断 ext 文件系统元数据。"""
    ),
    "ncdu": (
        """$ ncdu /home
--- /home/user -------------------------------------------------
  2.1 GiB [##########] /data
 12.0 KiB [          ] /cache
 Total disk usage:   2.1 GiB""",
        """`ncdu` 交互式磁盘分析：按大小排序各目录，直观找出占用大户(/data 2.1G)，比 du 更易浏览。"""
    ),
    "duf": (
        """$ duf
╭─────────────────────────────╮
│ MOUNTED ON  SIZE  USED  AVAIL │
│ /           50G   20G   28G    │
╰─────────────────────────────╯""",
        """`duf` 是 df 的现代彩色替代，表格化显示各挂载点容量；一目了然看剩余空间。"""
    ),
    "dust": (
        """$ dust /home -d 1
 2.1G ┌── /home/user/data
12.0K ├── /home/user/cache
 2.1G ┌── /home/user""",
        """`dust` 以可视化条形展示目录占用；`-d 1` 仅看一级，快速定位哪个子目录最占空间。"""
    ),
    "quota": (
        """$ quota -s alice
Disk quotas for user alice:
  Filesystem  blocks  quota  limit  grace  files  quota  limit
  /dev/sda1   512000  1G     2G           1234   0      0""",
        """`quota -s` 显示用户磁盘配额(-s 人性化)；alice 已用 512M，软限 1G、硬限 2G，files 数未限制。"""
    ),
    "gdisk": (
        """$ gdisk -l /dev/sdb
Partition table: GPT
Number  Start End    Size   Code  Name
   1    2048  33554431 16.0G 8300  Linux""",
        """`gdisk` 是 GPT 分区表专用工具；`-l` 列出 GPT 分区（Code 8300=Linux）。比 fdisk 更适合 >2T 磁盘。"""
    ),
    "partprobe": (
        """$ partprobe /dev/sdb
$ lsblk /dev/sdb
sdb      8:16 0 16G 0 disk
└─sdb1   8:17 0 16G 0 part""",
        """`partprobe` 通知内核重新读取分区表（改完分区后无需重启）；`lsblk` 确认新分区 sdb1 已被内核识别。"""
    ),
    "findmnt": (
        """$ findmnt /data
TARGET SOURCE    FSTYPE OPTIONS
/data  /dev/sdb1 ext4   rw,relatime""",
        """`findmnt /data` 显示某挂载点的来源设备、文件系统类型与挂载选项；排查挂载问题很方便。"""
    ),
    "hdparm": (
        """$ hdparm -Tt /dev/sda
 Timing cached reads:   12345 MB in 2.00 seconds = 6172 MB/sec
 Timing buffered disk reads: 560 MB in 3.00 seconds = 186 MB/sec""",
        """`hdparm -Tt` 测磁盘速度：cached 为缓存读(反映 CPU/内存)、buffered 为实际盘读；此处顺序读约 186 MB/s。"""
    ),
    "smartctl": (
        """$ smartctl -H /dev/sda
SMART overall-health self-assessment test result: PASSED
$ smartctl -A /dev/sda | head -3
ID# ATTRIBUTE  FLAG  VALUE WORST THRESH
  5 Reallocated_Sector_Ct 0x0033 100 100 010""",
        """`smartctl -H` 给出硬盘健康总评 PASSED；`-A` 列出 SMART 属性(VALUE 越低越差)，提前预警磁盘故障。"""
    ),
    "cryptsetup": (
        """$ cryptsetup luksOpen /dev/sdb1 cryptdata
Enter passphrase: 
$ ls /dev/mapper/cryptdata
/dev/mapper/cryptdata""",
        """`cryptsetup luksOpen` 用密码解锁 LUKS 加密分区并映射到 /dev/mapper/cryptdata，之后可 mount 使用；保护磁盘数据。"""
    ),
    "mountpoint": (
        """$ mountpoint /data
/data is a mountpoint
$ mountpoint /home
/home is not a mountpoint""",
        """`mountpoint` 判断某路径是否为挂载点；/data 是(独立分区)，/home 不是(只是目录)，用于脚本条件判断。"""
    ),
    # ==================== net ====================
    "ping": (
        """$ ping -c 3 example.com
PING example.com (93.184.216.34): 56 data bytes
64 bytes from 93.184.216.34: icmp_seq=0 ttl=56 time=12.3 ms
--- example.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, avg rtt=12.4 ms""",
        """`ping -c 3` 发 3 个 ICMP 回显请求；每行显示往返时间(time)、TTL。
统计段给出丢包率(0% 正常)与平均 RTT(12.4ms)，用于测试连通性与延迟。"""
    ),
    "curl": (
        """$ curl -s -o /dev/null -w '%{http_code} %{time_total}\\n' https://example.com
200 0.412
$ curl -I https://example.com
HTTP/2 200
content-type: text/html""",
        """第1条用 `-w` 输出 HTTP 状态码 200 与总耗时 0.412s，适合脚本判断。
第2条 `-I` 仅取响应头，看到 HTTP/2 200 与内容类型。"""
    ),
    "wget": (
        """$ wget -q https://example.com/file.zip
$ ls -l file.zip
-rw-r--r-- 1 user user 1048576 Aug  4 12:00 file.zip""",
        """`wget -q` 安静地下载文件到当前目录；`ls` 确认 file.zip 已落地(1MB)。支持断点续传 `-c`。"""
    ),
    "ssh": (
        """$ ssh user@192.168.1.10
user@192.168.1.10's password: 
Welcome to Ubuntu 22.04
$ hostname
server01""",
        """`ssh user@host` 远程登录；输入密码后进入对端 shell，`hostname` 显示已连到 server01。"""
    ),
    "scp": (
        """$ scp file.txt user@192.168.1.10:/tmp/
file.txt                      100% 1024     1.0KB/s   00:01
$ ssh user@192.168.1.10 'ls /tmp/file.txt'
/tmp/file.txt""",
        """`scp` 安全复制文件到远端 /tmp/；进度条显示 100% 完成。再用 ssh 远端 `ls` 确认已送达。"""
    ),
    "sftp": (
        """$ sftp user@host
sftp> put local.txt
Uploading local.txt to /home/user/local.txt
sftp> ls
local.txt""",
        """`sftp` 交互式安全传输；`put` 上传文件，`ls` 确认远端已存在。适合无 scp 时的文件交换。"""
    ),
    "rsync": (
        """$ rsync -avh --progress src/ user@host:/backup/
sending incremental file list
a.txt
         1.02K 100%    0.00kB/s    0:00:00
sent 1.05K bytes  received 35 bytes  2.17K bytes/sec""",
        """`rsync -avh` 增量同步(只传变更)；`-a` 归档保留属性，`--progress` 显示进度。适合备份与镜像。"""
    ),
    "netstat": (
        """$ netstat -tunlp | head -4
Proto Recv-Q Send-Q Local Address  State   PID/Program
tcp        0      0 0.0.0.0:22     LISTEN  812/sshd
tcp        0      0 127.0.0.1:8080 LISTEN  1234/node""",
        """`netstat -tunlp` 列出监听端口：t=tcp,u=udp,n=数字, l=监听,p=进程。
sshd 监听 22、node 监听 127.0.0.1:8080，可查端口占用。"""
    ),
    "ss": (
        """$ ss -tlnp
State   Recv-Q Send-Q Local Address:Port  Process
LISTEN 0      128    0.0.0.0:22          users:(("sshd",pid=812))
LISTEN 0      128    127.0.0.1:8080      users:(("node",pid=1234))""",
        """`ss -tlnp` 是现代版 netstat，更快；显示 LISTEN 状态的 TCP 端口及对应进程(pid)。"""
    ),
    "ip": (
        """$ ip addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500
    inet 192.168.1.20/24 brd 192.168.1.255 scope global eth0
$ ip route
default via 192.168.1.1 dev eth0""",
        """`ip addr show` 显示网卡 IP(192.168.1.20/24)与状态 UP；`ip route` 显示默认网关 192.168.1.1。取代旧 ifconfig。"""
    ),
    "ifconfig": (
        """$ ifconfig eth0
eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500
      inet 192.168.1.20  netmask 255.255.255.0
      RX packets 12345  bytes 2.1M""",
        """旧式网卡配置查看；显示 inet 地址、掩码、收发统计。已过时，建议用 `ip` 替代，但很多脚本仍在用。"""
    ),
    "traceroute": (
        """$ traceroute example.com
 1  gateway (192.168.1.1)   1.2 ms
 2  10.0.0.1                5.4 ms
 3  93.184.216.34          12.3 ms""",
        """逐跳显示到目标的路径与每跳延迟；第1跳是网关，最后一跳到达目标(12.3ms)，用于定位网络瓶颈在哪一段。"""
    ),
    "mtr": (
        """$ mtr -r -c 10 example.com
HOST: local  Loss%  Snt  Last  Avg
  1. gateway  0.0%    10   1.2   1.5
  3. 93.184.. 0.0%    10  12.3 12.5""",
        """`mtr` 结合 ping+traceroute 并持续采样；`-c 10` 发 10 轮，显示每跳丢包率(Loss%)与平均延迟，比 traceroute 更稳。"""
    ),
    "dig": (
        """$ dig +short example.com
93.184.216.34
$ dig example.com A +noall +answer
example.com. 3600 IN A 93.184.216.34""",
        """`dig +short` 直接返回解析到的 IP；`+noall +answer` 精简只显示答案段(A 记录 IPv4、TTL 3600)。DNS 排障首选。"""
    ),
    "host": (
        """$ host example.com
example.com has address 93.184.216.34
example.com mail is handled by 0 .""",
        """`host` 简单 DNS 查询：返回 A 地址与 MX 邮件记录；比 dig 输出更友好，适合快速查域名。"""
    ),
    "whois": (
        """$ whois example.com | head -6
Domain Name: EXAMPLE.COM
Registrar: RESERVED-Internet
Creation Date: 1995-08-14
Expiration Date: 2026-08-13""",
        """`whois` 查询域名注册信息：注册商、创建/到期时间；用于确认域名归属与到期续费提醒。"""
    ),
    "nc": (
        """$ nc -l 1234 > recv.txt   # 接收端
$ nc 127.0.0.1 1234 < send.txt  # 发送端
$ cat recv.txt
hello nc""",
        """`nc`(netcat) 网络瑞士军刀；`-l 1234` 监听端口收数据，另一端连接发送，实现简易文件传输/端口探测。"""
    ),
    "nmap": (
        """$ nmap -sT 192.168.1.0/24
Nmap scan report for 192.168.1.10
Host is up (0.0021s latency).
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http""",
        """`nmap -sT` TCP 端口扫描；显示主机在线、开放端口(22 ssh、80 http)。用于安全自查与资产盘点。"""
    ),
    "tcpdump": (
        """$ tcpdump -i eth0 -n 'tcp port 80' -c 2
12:00:01 IP 192.168.1.20.55555 > 93.184.216.34.80: Flags [P]
12:00:01 IP 93.184.216.34.80 > 192.168.1.20.55555: Flags [.]""",
        """`tcpdump` 抓包；`-i eth0` 网卡、`port 80` 过滤、`-c 2` 只抓 2 个。输出显示源/目的 IP:端口与 TCP 标志，深度排障用。"""
    ),
    "iptables": (
        """$ iptables -A INPUT -p tcp --dport 22 -j ACCEPT
$ iptables -L -n -v | head
Chain INPUT (policy ACCEPT)
 pkts bytes target prot opt in  source  destination
    0     0 ACCEPT tcp  --  *    *   0.0.0.0/0  tcp dpt:22""",
        """`iptables -A INPUT -p tcp --dport 22 -j ACCEPT` 放行 SSH 入站；`-L -n -v` 列出规则(包/字节计数)，查看防火墙策略。"""
    ),
    "ufw": (
        """$ ufw allow 22/tcp
Rule added
$ ufw status
Status: active
22/tcp  ALLOW  Anywhere""",
        """`ufw` 是 iptables 的易用前端；`allow 22/tcp` 放行 SSH，`status` 显示已生效规则，适合个人防火墙快速配置。"""
    ),
    "arp": (
        """$ arp -n
Address      HWtype  HWaddress           Iface
192.168.1.1  ether   00:11:22:33:44:55  eth0""",
        """`arp -n` 显示 ARP 表：IP 与 MAC 地址的映射(192.168.1.1 → 00:11:22:...)，排查局域网连通与 MAC 绑定时用。"""
    ),
    "socat": (
        """$ socat TCP-LISTEN:1234,fork STDOUT &
$ echo hi | socat - TCP:127.0.0.1:1234
hi""",
        """`socat` 双向数据流工具；一端监听 1234 转发到标准输出，另一端连接发送 "hi"，实现端口转发/管道。"""
    ),
    "nslookup": (
        """$ nslookup example.com
Server:  192.168.1.1
Address: 93.184.216.34""",
        """`nslookup` 查询 DNS：显示使用的 DNS 服务器(Server)与解析结果地址；交互式也可查 MX/NS 等记录。"""
    ),
    "iwconfig": (
        """$ iwconfig wlan0
wlan0  IEEE 802.11  ESSID:"HomeWiFi"
       Link Quality=70/70  Signal level=-40 dBm""",
        """`iwconfig` 查看无线网卡状态：已连 ESSID、链路质量(70/70)、信号强度(-40dBm 越强越好)。"""
    ),
    "iw": (
        """$ iw dev wlan0 link
Connected to 00:11:22:33:44:55 (on wlan0)
SSID: HomeWiFi
signal: -40 dBm""",
        """`iw` 是新一代无线配置工具；`link` 显示连接到的 AP MAC、SSID 与信号，比 iwconfig 更现代。"""
    ),
    "sshfs": (
        """$ sshfs user@host:/remote /mnt/remote
$ ls /mnt/remote
file_on_server.txt""",
        """`sshfs` 把远端目录通过 SSH 挂载到本地 /mnt/remote，像本地文件一样访问；`ls` 可见远端文件。"""
    ),
    "http": (
        """$ python3 -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000...
$ curl -s localhost:8000 | head -1
<!DOCTYPE html>""",
        """`python3 -m http.server 8000` 在 8000 端口起一个临时静态文件服务器；`curl` 验证能取到页面，便于临时分享目录。"""
    ),
    "iftop": (
        """$ iftop -i eth0
192.168.1.20  => 93.184.216.34   1.2Mb  0.8Mb  0.6Mb
""",
        """`iftop` 实时显示各连接的带宽占用(类似 top for network)；可看哪些 IP 在大量收发，定位流量异常。"""
    ),
    "nethogs": (
        """$ nethogs eth0
PID  USER  PROGRAM                          DEV  SENT  RECEIVED
1234 user  /usr/bin/node                     eth0  12KB  45KB""",
        """`nethogs` 按进程(而非连接)统计网络流量；输出 node(PID 1234) 的发送/接收速率，找出耗带宽的进程。"""
    ),
    "ssh-keygen": (
        """$ ssh-keygen -t ed25519 -C 'user@host'
Generating public/private ed25519 key pair.
Your public key has been saved in ~/.ssh/id_ed25519.pub
$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAA... user@host""",
        """`ssh-keygen -t ed25519` 生成密钥对(更安全的 ed25519 算法)；公钥存 .pub，复制到服务器即可免密登录。"""
    ),
    "ssh-copy-id": (
        """$ ssh-copy-id user@192.168.1.10
Number of key(s) added: 1
$ ssh user@192.168.1.10 'echo ok'
ok""",
        """`ssh-copy-id` 把本地公钥自动追加到远端 ~/.ssh/authorized_keys；之后 ssh 无需输密码(返回 ok 验证免密成功)。"""
    ),
    "telnet": (
        """$ telnet smtp.example.com 25
Trying 93.184.216.34...
Connected to smtp.example.com.
220 mailserver ESMTP""",
        """`telnet host port` 建立原始 TCP 连接；此处连到 SMTP 25 端口并收到服务端横幅 220，常用于手动调试服务协议。"""
    ),
    "hostname": (
        """$ hostname
server01
$ hostnamectl set-hostname web01
$ hostname
web01""",
        """`hostname` 显示当前主机名；`hostnamectl set-hostname`(systemd) 永久修改，下次登录生效。"""
    ),
    "nmcli": (
        """$ nmcli device status
DEVICE  TYPE      STATE      CONNECTION
eth0    ethernet  connected  wired
wlan0   wifi      disconnected  --
$ nmcli con up wired""",
        """`nmcli device status` 列出网络设备及连接状态；`con up wired` 激活名为 wired 的连接，管理 NetworkManager 网络。"""
    ),
    "iperf3": (
        """$ iperf3 -s &   # 服务端
$ iperf3 -c 127.0.0.1
[ ID] Interval  Transfer  Bitrate
[  5] 0-1   sec 1.10 GBytes 9.45 Gbits/sec""",
        """`iperf3` 测网络吞吐；服务端 `-s`、客户端 `-c` 连接，结果约 9.45 Gbit/s，用于评估带宽上限。"""
    ),
    "ethtool": (
        """$ ethtool eth0
Settings for eth0:
	Speed: 1000Mb/s
	Duplex: Full
	Link detected: yes""",
        """`ethtool eth0` 显示网卡速率(1000Mb/s)、双工模式与链路状态(yes)；排查网速不达标时确认协商结果。"""
    ),
    "resolvectl": (
        """$ resolvectl status
Global
       DNS Servers: 8.8.8.8
        Protocols: +DNSSEC
Link 2 (eth0):  Current DNS Server: 192.168.1.1""",
        """`resolvectl status` 显示 systemd-resolved 的 DNS 配置：全局 8.8.8.8、网卡 eth0 当前 192.168.1.1，查 DNS 解析来源。"""
    ),
    "route": (
        """$ route -n
Kernel IP routing table
Destination  Gateway      Genmask        Flags Iface
0.0.0.0      192.168.1.1  0.0.0.0        UG    eth0
192.168.1.0  0.0.0.0      255.255.255.0  U     eth0""",
        """`route -n` 显示路由表；`0.0.0.0` 行即默认网关 192.168.1.1，`192.168.1.0` 为本地直连网段。已过时，建议 ip route。"""
    ),
    "ftp": (
        """$ ftp ftp.example.com
Name: anonymous
230 Login successful.
ftp> get file.txt
226 Transfer complete.""",
        """`ftp` 交互式文件传输；以 anonymous 登录成功(230)，`get` 下载文件并提示 226 传输完成。明文传输已不推荐。"""
    ),
    "nft": (
        """$ nft list ruleset
table inet filter {
    chain input { type filter hook input priority 0;
        tcp dport 22 accept } }
$ nft add rule inet filter input tcp dport 80 accept""",
        """`nft` 是 nftables(取代 iptables)工具；`list ruleset` 显示规则集，第二行动态添加放行 80 端口的规则。"""
    ),
    # ==================== archive ====================
    "tar": (
        """$ tar -czvf backup.tar.gz /home/user
/home/user/
/home/user/a.txt
$ tar -tzf backup.tar.gz | head
home/user/a.txt""",
        """`tar -czvf` 打包并用 gzip 压缩(-z)；`-t` 列出包内文件而不解压，确认内容。常用组合：压缩 c+z、解压 x+z。"""
    ),
    "gzip": (
        """$ gzip report.txt
$ ls report.txt.gz
report.txt.gz
$ gunzip report.txt.gz""",
        """`gzip` 压缩单个文件为 .gz(原文件被替换删除)；`gunzip` 解压还原。对目录需先 tar 再 gzip。"""
    ),
    "gunzip": (
        """$ gunzip data.gz
$ ls
data
$ file data
data: ASCII text""",
        """`gunzip data.gz` 解压得到 data；`file` 确认已还原为 ASCII 文本。"""
    ),
    "bzip2": (
        """$ bzip2 -k big.log
$ ls big.log.bz2
big.log.bz2
$ bunzip2 big.log.bz2""",
        """`bzip2 -k` 压缩(保留原文件)；比 gzip 压缩率更高但更慢。`.bz2` 解压用 bunzip2。"""
    ),
    "xz": (
        """$ xz -9 kernel.tar
$ ls kernel.tar.xz
kernel.tar.xz
$ unxz kernel.tar.xz""",
        """`xz -9` 最高压缩率(最慢)；常用于分发大文件。`.xz` 解压用 unxz。"""
    ),
    "zip": (
        """$ zip -r site.zip /var/www
  adding: var/www/index.html
$ unzip -l site.zip
Archive: site.zip
  var/www/index.html""",
        """`zip -r` 递归压缩目录；`unzip -l` 列出内容预览而不解压。zip 跨平台(Windows 友好)。"""
    ),
    "unzip": (
        """$ unzip site.zip -d /tmp/site
Archive: site.zip
 extracting: /tmp/site/var/www/index.html
$ ls /tmp/site/var/www
index.html""",
        """`unzip -d` 解压到指定目录；输出每文件提取进度，`ls` 确认已落地。"""
    ),
    "7z": (
        """$ 7z a arch.7z /data
Compressing  data/a.bin
Everything is Ok
$ 7z l arch.7z
Method = LZMA2
Path = data/a.bin""",
        """`7z a` 创建 7z 压缩包(高压缩率)；`l` 列出内容。支持多种格式，备份利器。"""
    ),
    "zstd": (
        """$ zstd -19 data.bin -o data.bin.zst
data.bin: 3.12%   (1234567 => 38512 bytes)
$ zstd -d data.bin.zst""",
        """`zstd -19` 高压缩、极快解压；显示压缩比 3.12%。`-d` 解压。现代首选(兼顾速度与比 gzip 更好的压缩)。"""
    ),
    "lz4": (
        """$ lz4 file file.lz4
Compressed 12345 bytes into 4321 bytes ==> 35%
$ lz4 -d file.lz4 file2""",
        """`lz4` 极快但压缩率一般(35%)；适合实时/大数据流压缩。`-d` 解压。"""
    ),
    "compress": (
        """$ compress data.txt
$ ls data.txt.Z
data.txt.Z""",
        """`compress` 生成 .Z(古老的 LZW 压缩)；现代很少用，仅兼容老旧系统。解压用 uncompress。"""
    ),
    "unrar": (
        """$ unrar x archive.rar /tmp/
Extracting  doc/readme.txt
All OK""",
        """`unrar x` 解压 rar 到目标目录；`All OK` 表示成功。需安装 unrar 非自由工具。"""
    ),
    "rar": (
        """$ rar a docs.rar *.pdf
Creating archive docs.rar
Adding    a.pdf  OK""",
        """`rar a` 创建 rar 压缩包；逐文件 Adding 提示 OK。rar 为专有格式。"""
    ),
    "zcat": (
        """$ zcat log.gz | head -3
line one
line two
line three""",
        """`zcat` 不解压直接将 .gz 内容输出到标准输出；配合 head/grep 直接查压缩日志，省去先解压。"""
    ),
    "brotli": (
        """$ brotli -q 11 data.js -o data.js.br
$ brotli -d data.js.br""",
        """`brotli -q 11` 高压缩(web 常用)；`.br` 可被 Web 服务器直接发送。`-d` 解压。"""
    ),
    "pigz": (
        """$ pigz -p 4 bigfile
$ ls bigfile.gz
bigfile.gz""",
        """`pigz` 是 gzip 的多线程版，`-p 4` 用 4 核并行，大文件压缩远快于 gzip。输出 .gz 兼容。"""
    ),
    "pax": (
        """$ pax -w -f archive.pax /home/user
$ pax -rvf archive.pax
/home/user/a.txt""",
        """`pax` POSIX 归档工具(可替代 tar/cpio)；`-w -f` 写归档，`-rvf` 读取并解包。跨平台归档更标准。"""
    ),
    "cpio": (
        """$ find . -name '*.txt' | cpio -o > txt.cpio
12 blocks
$ cpio -id < txt.cpio""",
        """`cpio` 把 find 输出打包成 cpio；`-o` 归档、`-id` 解包。RPM 等格式内部常用。"""
    ),
    "ar": (
        """$ ar r lib.a a.o b.o
$ ar t lib.a
a.o
b.o""",
        """`ar` 创建/管理 .a 静态库(归档目标文件)；`t` 列出成员。Linux 静态库本质就是 ar 归档。"""
    ),
    "bzcat": (
        """$ bzcat log.bz2 | grep ERROR
2026-08-04 ERROR: ... """,
        """`bzcat` 不解压直接输出 .bz2 内容；配合 grep 在压缩日志里搜 ERROR，省时省盘。"""
    ),
    "xzcat": (
        """$ xzcat kernel.tar.xz | tar -tv
drwxr-xr-x user/user 0 2026-08-04 a/""",
        """`xzcat` 解流 .xz 内容并管道给 tar 列出包内文件(`tar -tv`)，直接预览压缩包结构。"""
    ),
    "unxz": (
        """$ unxz kernel.tar.xz
$ ls
kernel.tar""",
        """`unxz` 解压 .xz 得到 kernel.tar；等同于 `xz -d`。"""
    ),
    "bunzip2": (
        """$ bunzip2 big.log.bz2
$ ls
big.log""",
        """`bunzip2` 解压 .bz2 得到原文件；等同于 `bzip2 -d`。"""
    ),
    # ==================== sys ====================
    "uname": (
        """$ uname -a
Linux server01 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux
$ uname -r
6.8.0-45-generic""",
        """`uname -a` 输出全部系统信息：内核名 Linux、主机 server01、内核版本 6.8.0-45、架构 x86_64。
`-r` 只取内核版本，编译内核模块时常需对应。"""
    ),
    "uptime": (
        """$ uptime
 11:50:00 up 3 days,  1:20,  2 users,  load average: 0.10, 0.05, 0.01""",
        """显示当前时间、已运行 3 天、2 个登录用户、负载均值(1/5/15分钟)；负载接近 CPU 核数即偏忙。"""
    ),
    "free": (
        """$ free -h
              total  used   free  shared  buff/cache  available
Mem:          15Gi   4.1Gi  6.2Gi  350Mi      5.3Gi      10Gi
Swap:        2.0Gi      0B  2.0Gi""",
        """`free -h` 以可读单位显示内存：total 15G、used 4.1G、available 真正可用 10G(含可回收缓存)。
Swap 未用，说明内存充足。"""
    ),
    "lscpu": (
        """$ lscpu | head -6
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
CPU(s):              8
Thread(s) per core:  2
Core(s) per socket:  4
Socket(s):           1""",
        """`lscpu` 汇总 CPU 拓扑：架构 x86_64、8 逻辑 CPU、每核 2 线程、每槽 4 核、1 插槽——即 4 核 8 线程。"""
    ),
    "lsmem": (
        """$ lsmem
RANGE                  SIZE  STATE   REMOVABLE  BLOCK
0x0000000000000000-...  16G   online        no       0-63""",
        """`lsmem` 显示物理内存范围与状态(16G online)；可看 NUMA 与可热插拔块，定位内存布局。"""
    ),
    "lsusb": (
        """$ lsusb
Bus 001 Device 002: ID 046d:c52b Logitech USB Receiver
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation Hub""",
        """`lsusb` 列出 USB 设备：总线/设备号、厂商 ID 与产品(Logitech 接收器、根 Hub)，排查外设时用。"""
    ),
    "lspci": (
        """$ lspci | grep -i vga
01:00.0 VGA compatible controller: NVIDIA Corporation GP107 [GeForce GTX 1050]""",
        """`lspci` 列出 PCI 设备；grep VGA 找到显卡为 NVIDIA GTX 1050，装驱动前先确认型号。"""
    ),
    "lshw": (
        """$ lshw -short | head -6
H/W path  Device  Class   Description
/0                system  Computer
/0/0              memory  16GiB System memory
/0/1              processor Intel Core i7""",
        """`lshw -short` 以简表列出硬件层级(系统/内存/处理器)；需 root 才完整，用于全面盘点硬件。"""
    ),
    "dmidecode": (
        """$ sudo dmidecode -t memory | head -8
Memory Device
  Size: 8192 MB
  Type: DDR4
  Speed: 2666 MT/s""",
        """`dmidecode -t memory` 读取 BIOS/固件中的内存信息：单条 8GB DDR4 2666，查物理内存规格用。需 root。"""
    ),
    "dmesg": (
        """$ dmesg | tail -3
[12345.678] usb 1-2: new high-speed USB device
[12346.000] sd 0:0:0:0: Attached scsi disk sda
$ dmesg -w  # 实时跟踪内核日志""",
        """`dmesg` 显示内核环形缓冲日志；可看硬件枚举(USB/sda 挂载)、驱动错误。加 `-w` 实时跟踪。排查启动/硬件故障首选。"""
    ),
    "journalctl": (
        """$ journalctl -u nginx -b --no-pager | tail -5
Aug 04 11:00 nginx[812]: start worker
$ journalctl -f -u nginx
(live log...)""",
        """`journalctl -u nginx -b` 只看本次启动的 nginx 日志；`-f` 实时跟随。systemd 系统统一日志入口。"""
    ),
    "hostnamectl": (
        """$ hostnamectl
 Static hostname: server01
       Operating System: Ubuntu 22.04 LTS
            Kernel: Linux 6.8.0-45""",
        """`hostnamectl`(无参) 显示主机名、操作系统、内核等；`set-hostname` 可改主机名。"""
    ),
    "timedatectl": (
        """$ timedatectl
               Local time: Mon 2026-08-04 12:00:00 CST
           Universal time: Mon 2026-08-04 04:00:00 UTC
                 Time zone: Asia/Shanghai (CST, +0800)
$ timedatectl set-timezone UTC""",
        """显示本地/UTC 时间与时区(Asia/Shanghai +0800)；`set-timezone UTC` 改时区。NTP 同步状态也在此。"""
    ),
    "localectl": (
        """$ localectl
   System Locale: LANG=en_US.UTF-8
       VC Keymap: us
      X11 Layout: us""",
        """`localectl` 显示系统语言(LANG)、键盘映射；`set-locale LANG=zh_CN.UTF-8` 可改系统语言。"""
    ),
    "loginctl": (
        """$ loginctl
SESSION UID USER SEAT TTY
      2 1000 user seat0
$ loginctl terminate-session 2""",
        """`loginctl` 列出登录会话；`terminate-session` 可结束指定会话。管理桌面/用户会话用。"""
    ),
    "iostat": (
        """$ iostat -x 1 2
avg-cpu:  %user  %system  %idle
           2.10    0.50   97.40
Device  r/s  w/s  await  rkB/s  wkB/s
sda    0.50 1.20  2.10   20.0   48.0""",
        """`iostat -x` 显示 CPU 与磁盘 I/O：CPU idle 97% 空闲；磁盘 sda 读写速率与 await(平均等待 ms)，排查 I/O 瓶颈。"""
    ),
    "vmstat": (
        """$ vmstat 1 3
procs --memory-- --io-- -system- ----cpu----
 r  b  swpd  free  si so  bi  bo  in  cs us sy id wa
 1  0     0  6200   0  0   2   8  45  60  2  1 97  0""",
        """`vmstat 1 3` 每 1 秒采样、共 3 次：procs(r 运行/b 阻塞)、memory(free/swap)、io(bi/bo 块读写)、cpu(us/sy/id/wa)。
id 97 表示 CPU 空闲，wa 0 无 I/O 等待。"""
    ),
    "sar": (
        """$ sar -u 1 2
Linux 6.8.0  (server01)
12:00:01  CPU  %user  %system  %idle
12:00:02  all    2.10    0.50   97.40""",
        """`sar -u` 报告 CPU 历史/实时使用率(%user/%system/%idle)；sysstat 套件，可查历史(`sar -u -f /var/log/sa/saXX`)。"""
    ),
    "mpstat": (
        """$ mpstat -P ALL 1 1
Linux 6.8.0  (server01)
12:00:01  CPU  %usr  %sys  %idle
12:00:02  all   2.10  0.50  97.40
12:00:02    0   3.00  0.80  96.20""",
        """`mpstat -P ALL` 按每个 CPU 核心分别报告利用率；可发现是否单核打满而其他空闲的负载不均问题。"""
    ),
    "nproc": (
        """$ nproc
8
$ nproc --all
8""",
        """`nproc` 输出可用逻辑 CPU 数(8)；编译/并行任务常用 `make -j$(nproc)` 充分利用多核。"""
    ),
    "sensors": (
        """$ sensors
coretemp-isa-0000
Package id 0:  +45.0°C
Core 0:        +42.0°C""",
        """`sensors`(lm-sensors) 显示 CPU/主板温度；Package 45°C 正常，过高需检查散热。监控硬件温度用。"""
    ),
    "lsb_release": (
        """$ lsb_release -a
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.4 LTS
Release:        22.04
Codename:       jammy""",
        """`lsb_release -a` 显示发行版信息：Ubuntu 22.04.4 LTS，代号 jammy。脚本中判断系统版本常用。"""
    ),
    "neofetch": (
        """$ neofetch
OS: Ubuntu 22.04 LTS
Host: ThinkPad T14
CPU: Intel i7 (8) @ 3.0GHz
Memory: 4123MiB / 15987MiB""",
        """`neofetch` 以美观方式汇总系统信息(OS/主机/CPU/内存)并配 ASCII logo，常用于截图展示。"""
    ),
    "btop": (
        """$ btop
CPU[|||       6.2%]  Mem[|||||   4.1G/15.6G]  Net[↓12KiB/s ↑3KiB/s]
Process: vim(2.1%)  node(1.3%)  ...""",
        """`btop` 现代化资源监控(继承 htop)，图形化显示 CPU/内存/网络与进程排行，交互友好。"""
    ),
    "glances": (
        """$ glances
CPU:  6.2%  Load: 0.10  Mem: 26%  Swap: 0%
Tasks: 210 (1 running)  Sensors: 45°C""",
        """`glances` 一站式监控：CPU/负载/内存/进程/传感器汇总一屏，还可 Web 模式远程查看。"""
    ),
    "systemd-analyze": (
        """$ systemd-analyze
Startup finished in 2.1s (kernel) + 5.3s (userspace) = 7.4s
$ systemd-analyze blame | head -3
  1.2s nginx.service""",
        """`systemd-analyze` 统计开机耗时(7.4s)；`blame` 列出各服务启动耗时，定位拖慢开机的罪魁。"""
    ),
    "lsipc": (
        """$ lsipc
TYPE  ID   KEY       OWNER  PERMS  BYTES
MSG    0 0x00000000 root    600    0""",
        """`lsipc` 列出 System V 进程间通信对象(消息队列/信号量/共享内存)；排查 IPC 资源耗尽时用。"""
    ),
    "lslocks": (
        """$ lslocks
COMMAND  PID  TYPE  SIZE  MODE  MNT          PATH
nginx   900  FLOCK 0B    WRITE /var/log/nginx/access.log""",
        """`lslocks` 列出当前文件锁；可见 nginx 对访问日志持写锁，排查"文件被占用"类问题。"""
    ),
    "lsns": (
        """$ lsns
NS TYPE  NPROCS  PID USER  COMMAND
4026531836 pid      210    1 root  /sbin/init
4026531840 mnt        3  900 root  nginx: master""",
        """`lsns` 列出命名空间(pid/mnt/net 等)及所属进程；容器/隔离环境排障时确认命名空间边界。"""
    ),
    "pidstat": (
        """$ pidstat -u 1 2
Linux 6.8.0
12:00:01 UID   PID  %usr %system  Command
12:00:02  1000 1234  2.10   0.50  vim""",
        """`pidstat -u` 按进程统计 CPU 使用；可加 `-r`(内存)/`-d`(I/O)，比 top 更适合做进程级性能采样。"""
    ),
    "dstat": (
        """$ dstat 1 2
----total-cpu-usage---- --dsk/total- --net/total-
usr sys idl  | read  writ  | recv  send
  2   1  97  | 20k   48k  | 12k   3k""",
        """`dstat` 综合实时统计 CPU/磁盘/网络/内存，一行刷新；替代 vmstat/iostat/netstat 组合，概览系统负载。"""
    ),
    # ==================== power ====================
    "shutdown": (
        """$ shutdown -h +10 '系统将维护'
Broadcast message: ... The system will halt in 10 min
$ shutdown -c
(取消已计划的关机)""",
        """`shutdown -h +10` 10 分钟后关机并广播通知；`shutdown -c` 取消。比直接 poweroff 更友好(可提前告警)。"""
    ),
    "reboot": (
        """$ reboot
(broadcast: system is rebooting; system restarts)""",
        """`reboot` 立即重启系统；等价于 `shutdown -r now`。远程操作前确认无未保存工作。"""
    ),
    "poweroff": (
        """$ poweroff
(broadcast: system is powering down; machine halts)""",
        """`poweroff` 立即关机断电；等价于 `shutdown -P now`。虚拟机/物理机均可。"""
    ),
    "halt": (
        """$ halt
(broadcast: system halted)""",
        """`halt` 停止 CPU(系统停摆但未必断电)；现代系统多与 poweroff 行为相近。维护时用。"""
    ),
    "systemctl": (
        """$ systemctl status nginx
● nginx.service - A high performance web server
     Active: active (running) since Mon 11:00; 1h ago
$ systemctl restart nginx""",
        """`systemctl status` 查看服务状态(active running)；`restart/reload/enable/disable` 管理服务。systemd 系统核心命令。"""
    ),
    "telinit": (
        """$ telinit 3
(switching to runlevel 3: multi-user text mode)""",
        """`telinit 3` 切换运行级别(3=多用户文本、5=图形)；在 systemd 下等价于 `systemctl isolate`。"""
    ),
    # ==================== pkg ====================
    "apt": (
        """$ apt update
Hit:1 http://archive.ubuntu.com jammy InRelease
$ apt install -y curl
Reading package lists... Done
The following NEW packages will be installed: curl""",
        """`apt update` 刷新软件源索引(Hit 表示已最新)；`apt install -y curl` 安装 curl 并确认将新增该包。Debian/Ubuntu 前端。"""
    ),
    "apt-get": (
        """$ apt-get install -y nginx
0 upgraded, 12 newly installed, 0 to remove
Processing triggers for nginx...""",
        """`apt-get` 是 apt 的低层命令，脚本中更稳定；输出显示将安装 12 个包，适合自动化部署。"""
    ),
    "dpkg": (
        """$ dpkg -i package.deb
Selecting previously unselected package demo.
Setting up demo (1.0) ...
$ dpkg -l | grep demo
ii  demo  1.0  amd64  demo package""",
        """`dpkg -i` 直接安装本地 .deb(不自动解决依赖)；`dpkg -l` 列出已装包，ii 表示正常安装。依赖缺失需手动 apt -f install 修复。"""
    ),
    "yum": (
        """$ yum install -y httpd
Dependencies resolved.
Installed: httpd-2.4.6
Complete!""",
        """`yum install` 解析依赖并安装 httpd，提示 Complete 完成。RHEL/CentOS 7 及以前默认包管理器。"""
    ),
    "dnf": (
        """$ dnf install -y git
Dependencies resolved.
Installed: git-2.40.0
Complete!""",
        """`dnf` 是 yum 的下一代(更快、更好依赖解算)；RHEL 8+ 默认。安装 git 显示 Complete。"""
    ),
    "rpm": (
        """$ rpm -ivh package.rpm
Preparing... ################################# [100%]
Updating / installing...
   1:demo-1.0-1 ################################# [100%]
$ rpm -qa | grep demo
demo-1.0-1.x86_64""",
        """`rpm -ivh` 安装本地 rpm(-v 详细 -h 进度条)；`rpm -qa` 查询已装包。不自动处理依赖。"""
    ),
    "pacman": (
        """$ pacman -Syu
:: Synchronizing package databases...
:: Starting full system upgrade...
resolving dependencies... done""",
        """`pacman -Syu` 同步源并全系统升级(Arch 风格)；`-S` 安装、`-R` 卸载。Arch/Manjaro 包管理器。"""
    ),
    "zypper": (
        """$ zypper install -y vim
Refreshing service 'repo'...
Resolving package dependencies...
The following NEW package is going to be installed: vim""",
        """`zypper install` openSUSE 包管理器；解析依赖并显示将安装的 vim。"""
    ),
    "apk": (
        """$ apk add curl
fetch https://dl-cdn.alpinelinux.org/.../curl-8.apk
OK: 12 MiB in 45 packages
$ apk update
fetch ... Index of /.../x86_64/APKINDEX.tar.gz""",
        """`apk add curl` Alpine 安装包(基于 musl，体积小)；`apk update` 刷新索引。容器镜像常用。"""
    ),
    "snap": (
        """$ snap install code --classic
code 1.90 from Visual Studio Code installed
$ snap list | grep code
code  1.90  latest/stable  canonical*  -""",
        """`snap install` 安装 snap 打包的应用(--classic 放宽沙箱)；`snap list` 查看已装。跨发行版的通用打包格式。"""
    ),
    "flatpak": (
        """$ flatpak install flathub org.gimp.GIMP
Looking for matches...
Installing org.gimp.GIMP
$ flatpak list | head -2
org.gimp.GIMP  stable  system""",
        """`flatpak install` 从 flathub 装桌面应用(沙箱隔离)；`flatpak list` 列出已装。桌面应用分发新方式。"""
    ),
    "brew": (
        """$ brew install wget
==> Downloading https://.../wget
==> Pouring wget--1.24.bottle
🍺  /opt/homebrew/Cellar/wget/1.24  (success)""",
        """`brew install wget` macOS/ Linux 的 Homebrew 包管理器；"Pour bottle" 表示用预编译二进制，安装快。"""
    ),
    "apt-cache": (
        """$ apt-cache search nginx
nginx - high performance web server
nginx-light - ...
$ apt-cache policy nginx
nginx: Installed: (none)  Candidate: 1.18.0""",
        """`apt-cache search` 按关键词搜包；`policy` 显示已装/候选版本。查询软件源信息用。"""
    ),
    "aptitude": (
        """$ aptitude search '~i~nnginx'
i   nginx  - high performance web server
$ aptitude install nginx
The following NEW packages will be installed: nginx""",
        """`aptitude` 是 apt 的更强前端，搜索支持 ~ 模式(如 ~i 已装)；依赖解算更智能，交互式 TUI。"""
    ),
    "emerge": (
        """$ emerge -av nginx
These are the packages that would be merged:
[ebuild  N] www-servers/nginx-1.24.0
Would you like to merge these packages? [Yes/No]""",
        """`emerge -av nginx` Gentoo 源码包管理器(-a 询问 -v 详细)；显示将编译安装 nginx，确认后从源码构建。"""
    ),
    "apt-file": (
        """$ apt-file update
$ apt-file search bin/ls
coreutils: /bin/ls
$ apt-file list nginx | head
nginx: /usr/sbin/nginx""",
        """`apt-file` 检索"哪个包提供某文件"；`search bin/ls` 得知来自 coreutils，`list nginx` 列出其所有文件。装包前找文件所属。"""
    ),
    "apt-mark": (
        """$ apt-mark hold nginx
nginx set on hold.
$ apt-mark showhold
nginx""",
        """`apt-mark hold nginx` 把包标记为"保持"避免被升级；`showhold` 列出被锁定的包。用于钉住关键版本。"""
    ),
    # ==================== kernel ====================
    "lsmod": (
        """$ lsmod | head -4
Module        Size  Used by
nvidia     12345678  102  drm
snd_hda_intel  90123  4  snd_hda_codec""",
        """`lsmod` 列出已加载内核模块；Size 大小、Used by 被哪些模块依赖。nvidia 模块被 102 处使用。"""
    ),
    "modprobe": (
        """$ modprobe vfat
$ lsmod | grep vfat
vfat    24576  0
$ modprobe -r vfat""",
        """`modprobe vfat` 加载 vfat 模块(自动处理依赖)；`lsmod` 确认已加载；`-r` 移除。比 insmod 智能。"""
    ),
    "insmod": (
        """$ insmod ./mymod.ko
$ lsmod | grep mymod
mymod  16384  0""",
        """`insmod` 直接插入指定 .ko 模块文件(不自动解决依赖)；`lsmod` 确认加载。一般优先用 modprobe。"""
    ),
    "rmmod": (
        """$ rmmod mymod
$ lsmod | grep mymod
(无输出，模块已卸载)""",
        """`rmmod` 移除指定模块；`lsmod` 无输出即已卸载。若被其他模块依赖会失败，需先 rmmod 依赖方。"""
    ),
    "depmod": (
        """$ depmod -a
(生成 /lib/modules/$(uname -r)/modules.dep)
$ cat /lib/modules/$(uname -r)/modules.dep | head -1
kernel/fs/vfat/vfat.ko: kernel/fs/fat/fat.ko""",
        """`depmod -a` 为当前内核重新生成模块依赖关系文件；输出显示 vfat 依赖 fat 模块，modprobe 据此自动加载。"""
    ),
    "modinfo": (
        """$ modinfo vfat | head -6
filename:       /lib/modules/.../vfat.ko
author:         ...
license:        GPL
description:     VFAT filesystem support
depends:        fat""",
        """`modinfo vfat` 显示模块信息：文件路径、作者、许可证、描述、依赖(depends: fat)。查模块详情用。"""
    ),
    "sysctl": (
        """$ sysctl net.ipv4.ip_forward
net.ipv4.ip_forward = 0
$ sysctl -w net.ipv4.ip_forward=1
net.ipv4.ip_forward = 1""",
        """`sysctl` 运行时读写内核参数；首行查看到 IP 转发当前为 0，`-w` 临时开启为 1(做路由器需此)。持久化写 /etc/sysctl.d/。"""
    ),
    "update-initramfs": (
        """$ update-initramfs -u
update-initramfs: Generating /boot/initrd.img-6.8.0-45
$ ls /boot/initrd.img-6.8.0-45
/boot/initrd.img-6.8.0-45""",
        """`update-initramfs -u` 更新当前内核的 initrd(启动初期用的临时根文件系统)；`ls` 确认生成。装驱动/改启动后需执行。"""
    ),
    "dracut": (
        """$ dracut -f /boot/initramfs-6.8.0-45.img 6.8.0-45
$ ls -l /boot/initramfs-6.8.0-45.img
-rw------- 1 root root 31234567 ... initramfs-6.8.0-45.img""",
        """`dracut -f` 在 RHEL 系生成/更新 initramfs；指定目标文件与内核版本。`ls` 确认文件已生成(约 31MB)。"""
    ),
    # ==================== shell ====================
    "echo": (
        """$ echo "Hello $USER"
Hello user
$ echo -e "a\\tb"
a    b""",
        """第1条输出变量 $USER 展开后的值(Hello user)。
第2条 `-e` 解释转义，`\\t` 变为制表符，实现简单格式化输出。"""
    ),
    "printf": (
        """$ printf '%-10s %d\\n' "alice" 30
alice      30
$ printf '%.2f\\n' 3.14159
3.14""",
        """`printf` 类 C 格式化：`%-10s` 左对齐占 10 列，`%d` 整数；`%.2f` 保留 2 位小数。比 echo 更可控。"""
    ),
    "declare": (
        """$ declare -x GREET=hi
$ echo $GREET
hi
$ declare -p GREET
declare -x GREET="hi"
$ declare -i N=3+4
$ echo $N
7""",
        """`declare -x` 声明并导出环境变量；`declare -p` 打印其定义与属性（-x 标记表示已导出）。`declare -i` 让赋值按整数算术求值。"""
    ),
    "typeset": (
        """$ typeset -i N=3+4
$ echo $N
7
$ typeset -r PI=3.14
$ echo $PI
3.14""",
        """`typeset -i` 声明整数变量，赋值自动算术求值；`typeset -r` 设为只读（ksh/zsh 中同 bash 的 declare）。"""
    ),
    "export": (
        """$ export API_KEY=abc123
$ echo $API_KEY
abc123
$ env | grep API_KEY
API_KEY=abc123""",
        """`export` 设置并导出环境变量(对子进程可见)；`env | grep` 确认已存在于环境。仅当前 shell 会话有效。"""
    ),
    "alias": (
        """$ alias ll='ls -lh'
$ ll
(以长可读格式列出)
$ alias
alias ll='ls -lh'""",
        """`alias ll='ls -lh'` 定义命令别名；之后 ll 即执行 ls -lh。`alias` 单独列出全部别名。"""
    ),
    "unalias": (
        """$ unalias ll
$ ll
bash: ll: command not found""",
        """`unalias ll` 移除别名；再执行 ll 报错 "command not found"，确认别名已失效。"""
    ),
    "source": (
        """$ source ./venv/bin/activate
(venv) $  # 提示符前缀出现 (venv)
$ echo $VIRTUAL_ENV
/path/venv""",
        """`source script` 在当前 shell 执行脚本(不启子进程)，故能修改当前环境；此处激活 Python 虚拟环境，VIRTUAL_ENV 已设。"""
    ),
    "history": (
        """$ history 5
  998  ls -l
  999  cd /tmp
 1000  vim a.txt
$ !999
cd /tmp""",
        """`history 5` 显示最近 5 条历史命令及编号；`!999` 重放第 999 条(cd /tmp)。"""
    ),
    "read": (
        """$ read -p 'Name: ' name; echo "Hi $name"
Name: alice
Hi alice""",
        """`read -p` 从标准输入读入变量 name；输入 alice 后 echo 显示，常用于脚本交互。"""
    ),
    "eval": (
        """$ cmd="ls -l"; eval $cmd
total 4
-rw-r--r-- ... a.txt""",
        """`eval` 把字符串当命令执行；此处展开 cmd 变量并运行 ls -l。慎用——拼接用户输入易引发注入。"""
    ),
    "exec": (
        """$ exec bash --login
(当前 shell 被新 bash 替换，PID 不变)""",
        """`exec` 用新程序替换当前 shell 进程(不创建子进程)；常用于在脚本末尾切换 shell 或重定向后替换。"""
    ),
    "trap": (
        """$ trap 'echo bye' EXIT
$ exit
bye""",
        """`trap 'echo bye' EXIT` 注册退出钩子；shell 退出时执行 echo bye。脚本清理(删临时文件)常用。"""
    ),
    "set": (
        """$ set -e
$ set -x; ls /tmp; set +x
+ ls /tmp
(跟踪打印执行的命令)""",
        """`set -e` 遇错即退出；`set -x` 开启命令回显(前缀 +)，便于调试脚本；`set +x` 关闭。"""
    ),
    "unset": (
        """$ unset API_KEY
$ echo $API_KEY

(空，变量已清除)""",
        """`unset` 删除变量或函数；`echo` 输出空，确认 API_KEY 已不存在。"""
    ),
    "shopt": (
        """$ shopt -s globstar
$ shopt globstar
globstar  on""",
        """`shopt -s globstar` 开启 globstar(`**` 递归匹配)；`shopt globstar` 显示其状态为 on。bash 高级通配开关。"""
    ),
    "type": (
        """$ type ls
ls is aliased to 'ls --color=auto'
$ type -t cd
builtin""",
        """`type` 说明命令类型：ls 是别名；`type -t cd` 返回 builtin(内置命令)，区分别名/函数/内置/外部程序。"""
    ),
    "command": (
        """$ command ls
(绕过别名，直接执行外部 ls)
$ command -v git
/usr/bin/git""",
        """`command` 忽略别名/函数直接执行原命令；`command -v git` 返回 git 的路径，脚本中取命令绝对路径。"""
    ),
    "builtin": (
        """$ builtin cd /tmp
$ pwd
/tmp""",
        """`builtin` 显式调用 shell 内置版命令(忽略同名函数/外部程序)；`cd` 本就是内置，此处直接执行内置切换目录。"""
    ),
    "let": (
        """$ let "a = 3 + 4"; echo $a
7
$ let "i++"; echo $i
1""",
        """`let` 在 bash 中做算术求值；`a=3+4` 得 7，`i++` 自增到 1。算术推荐用 `(( ))`，let 仍可。"""
    ),
    "wait": (
        """$ sleep 1 & sleep 2 & wait
[1]-  Done  sleep 1
[2]+  Done  sleep 2""",
        """`wait` 等待所有(或指定 PID)后台作业结束；两个 sleep 完成后提示 Done，脚本中用于顺序同步。"""
    ),
    "ulimit": (
        """$ ulimit -a | head -3
core file size          (blocks, -c) 0
max memory size         (kbytes, -m) unlimited
$ ulimit -n 4096""",
        """`ulimit -a` 显示资源限制(核心文件 0、内存 unlimited)；`ulimit -n 4096` 把打开文件数上限设为 4096，防句柄耗尽。"""
    ),
    "test": (
        """$ test -f a.txt && echo exists
exists
$ [ 5 -gt 3 ] && echo yes
yes""",
        """`test`(或 `[ ]`) 做条件判断：`-f` 文件存在、`-gt` 大于。配合 && 实现 if 逻辑，脚本判断基石。"""
    ),
    "fc": (
        """$ fc -l -5
 996  grep x
 997  cat a
 998  vim b
$ fc 998
(打开编辑器编辑并重执行第 998 条)""",
        """`fc -l -5` 列出最近 5 条历史；`fc 998` 把该命令载入编辑器，修改后重执行，修正长命令很方便。"""
    ),
    "[": (
        """$ [ -d /tmp ] && echo dir
dir
$ [ -z "$VAR" ] && echo empty
empty""",
        """`[` 是 test 的同义内置；`-d` 判目录、`-z` 判空串。上例 /tmp 是目录故输出 dir，VAR 空故输出 empty。"""
    ),
    "fzf": (
        """$ ls | fzf
(a.txt  |  b.txt  |  c.txt)  <- 交互模糊选择
$ cat $(ls | fzf)
(打开所选文件)""",
        """`fzf` 模糊查找过滤器；管道输入列表后交互高亮选择，回车输出选中项。常与 cd/vi/git 组合提效。"""
    ),
    "bind": (
        """$ bind '"\\C-x\\C-e": edit-and-execute-command'
$ bind -p | grep C-x
"\\C-x\\C-e": edit-and-execute-command""",
        """`bind` 绑定 readline 快捷键；此处把 Ctrl-X Ctrl-E 绑为"在编辑器编辑当前行"。`bind -p` 列出键绑定。"""
    ),
    "compgen": (
        """$ compgen -c | grep git | head
git
git-status
git-commit
$ compgen -W 'red green blue' -- bl
blue""",
        """`compgen` 在补全脚本中生成候选；`-c` 列命令、`-W` 给定词表并按已输入 bl 过滤出 blue。"""
    ),
    "complete": (
        """$ complete -W 'start stop restart' svc
$ svc <TAB><TAB>
restart  start  stop""",
        """`complete -W` 为 svc 命令注册补全词表；输入 svc 按 Tab 列出 start/stop/restart，提升命令行效率。"""
    ),
    "mapfile": (
        """$ mapfile -t lines < a.txt
$ echo ${#lines[@]}
3""",
        """`mapfile -t lines`(即 readarray) 把文件逐行读入数组 lines；`${#lines[@]}` 显示数组长度 3，即文件 3 行。"""
    ),
    "enable": (
        """$ enable -n echo
$ type echo
echo is a shell builtin (disabled)
$ enable echo""",
        """`enable -n echo` 禁用内置 echo(转用外部)；`enable echo` 重新启用。极少用，特殊场景隔离内置/外部命令。"""
    ),
    "help": (
        """$ help cd
cd: cd [-L|[-P [-e]] [-@]] [dir]
    Change the current directory...""",
        """`help` 显示 bash 内置命令用法(无参数列全部)；此处查 cd 的语法与说明，比 man 更聚焦内置。"""
    ),
    "getopts": (
        """$ cat get.sh
while getopts ":a:b:" o; do case $o in a) A=$OPTARG;; b) B=$OPTARG;; esac; done
$ bash get.sh -a x -b y; echo "$A $B"
x y""",
        """`getopts` 解析短选项(-a x -b y)，循环中把参数值赋给 A/B；脚本标准化处理命令行参数的标准做法。"""
    ),
    "times": (
        """$ times
0m0.012s 0m0.008s
0m0.004s 0m0.002s""",
        """`times` 显示当前 shell 及其子进程累计的用户/系统 CPU 时间(两行)；调试脚本性能用。"""
    ),
    # ==================== editor ====================
    "nano": (
        """$ nano a.txt
(底部显示 ^O 写入 ^X 退出；保存提示 [ Wrote 1 line ])""",
        """`nano` 简易终端编辑器；`^O`(Ctrl+O) 保存、`^X` 退出，底部有快捷键提示，新手友好。"""
    ),
    "emacs": (
        """$ emacs -nw a.txt
(文本界面；C-x C-s 保存，C-x C-c 退出)""",
        """`emacs -nw` 在终端(无窗口)打开；`C-x C-s` 保存、`C-x C-c` 退出。功能强大的可扩展编辑器。"""
    ),
    "ed": (
        """$ ed a.txt
a.txt: 3 lines
1p
line one
q""",
        """`ed` 行编辑器(无可视)：启动报 3 行；`1p` 打印第 1 行、`q` 退出。极简环境/脚本补丁用。"""
    ),
    "man": (
        """$ man ls | head -5
LS(1)  User Commands  LS(1)
NAME
   ls - list directory contents
SYNOPSIS
   ls [OPTION]... [FILE]...""",
        """`man` 查看命令手册：显示章节(1=用户命令)、NAME、SYNOPSIS(语法)；`/` 搜索、q 退出，是权威用法来源。"""
    ),
    "info": (
        """$ info coreutils 'ls invocation'
(next: dir, prev: ..., up: Top)  -- 超链接式文档""",
        """`info` GNU 超文本手册(比 man 结构化)：可节点间跳转，适合 GNU 工具(如 coreutils)的详尽文档。"""
    ),
    "which": (
        """$ which git python3
/usr/bin/git
/usr/bin/python3""",
        """`which` 显示可执行文件的路径(在 $PATH 中首个匹配)；确认实际调用的程序位置，排查"同名命令冲突"。"""
    ),
    "whereis": (
        """$ whereis ls
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz""",
        """`whereis` 同时定位二进制、源码与手册页；ls 的二进制在 /usr/bin、手册在 man1，比 which 信息更全。"""
    ),
    "whatis": (
        """$ whatis git
git (1)  - the stupid content tracker""",
        """`whatis` 从 whatis 数据库取一行命令简介；git 描述为内容追踪器，快速了解命令用途。需 updatedb 已建库。"""
    ),
    "locate": (
        """$ locate nginx.conf
/etc/nginx/nginx.conf
/usr/share/nginx/nginx.conf""",
        """`locate` 基于预建数据库秒搜文件名；列出所有 nginx.conf 路径。比 find 快但非实时(需 updatedb 更新)。"""
    ),
    "updatedb": (
        """$ updatedb
(无输出，更新 /var/lib/mlocate/mlocate.db)
$ locate newfile
/home/user/newfile""",
        """`updatedb` 重建 locate 数据库(通常 cron 每日跑)；之后 locate 能搜到新建的 newfile。"""
    ),
    "date": (
        """$ date
Mon Aug  4 12:00:00 CST 2026
$ date +%Y-%m-%d
2026-08-04
$ date -d 'next monday' +%F
2026-08-11""",
        """第1条显示当前日期时间；`+%Y-%m-%d` 自定义格式输出 2026-08-04；`-d` 做日期运算得下周一。脚本中常取时间戳。"""
    ),
    "cal": (
        """$ cal
   August 2026
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
...
$ cal 2026
(整年日历)""",
        """`cal` 显示当前月日历(高亮今日所在)；`cal 2026` 显示全年。快速查看日期与星期。"""
    ),
    "sleep": (
        """$ sleep 2 && echo done
(等待 2 秒)
done""",
        """`sleep 2` 暂停 2 秒；常与 && 配合在命令间插入延时，或用于轮询/定时脚本。"""
    ),
    "yes": (
        """$ yes | head -3
y
y
y
$ yes n | rm -ri dir""",
        """`yes` 持续输出 y(或指定串)；管道给需要确认的交互命令(如 rm -i)自动应答，批量操作省事。"""
    ),
    "clear": (
        """$ clear
(终端屏幕清屏，回到顶部)""",
        """`clear`(或 Ctrl+L) 清屏，隐藏历史输出，聚焦当前命令。"""
    ),
    "script": (
        """$ script session.log
Script started, file is session.log
$ ls
$ exit
Script done, file is session.log""",
        """`script` 把终端会话全程录制到文件；`exit` 结束后 session.log 含所有输入输出，便于复盘/教学。"""
    ),
    "wall": (
        """$ wall '系统将于 10 分钟后维护'
Broadcast message from user (pts/0):
系统将于 10 分钟后维护""",
        """`wall` 向所有登录用户终端广播消息；运维通知全体在线用户时用(需权限)。"""
    ),
    "mesg": (
        """$ mesg y
$ mesg
is y
$ mesg n
(拒绝他人 write/wall 消息)""",
        """`mesg y/n` 控制是否接收他人发来的终端消息(write/talk)；`mesg` 显示当前状态。隐私/演示时设为 n。"""
    ),
    "tldr": (
        """$ tldr tar
tar
Compress/extract archives.
- Create: tar -cf file.tar path
- Extract: tar -xf file.tar""",
        """`tldr` 提供命令的实用示例(社区维护，比 man 精简)；tar 直接给出常见压缩/解压模板，速查首选。"""
    ),
    "cheat": (
        """$ cheat git
# To stage all changes:
git add .
# To commit:
git commit -m 'msg'""",
        """`cheat` 显示命令速查备忘(社区 cheat-sheet)；git 列出常用片段，比 man 直达要点。"""
    ),
    "reset": (
        """$ reset
(重置终端到默认状态，清除乱码/异常显示)""",
        """`reset` 恢复终端设置(当输出二进制导致乱码、光标错位时)；比 clear 更彻底地重置。"""
    ),
    "xargs": (
        """$ find . -name '*.log' | xargs rm
$ find . -name '*.txt' -print0 | xargs -0 rm
(安全处理含空格文件名)""",
        """`xargs` 把标准输入转成命令参数；首例删除所有 .log。含空格文件名用 `-print0 | xargs -0` 防断词错误。"""
    ),
    "env": (
        """$ env | grep PATH
PATH=/usr/local/bin:/usr/bin:/bin
$ env -i bash --noprofile --norc
(在干净环境启动新 shell)""",
        """`env` 显示全部环境变量；`env -i` 以空环境启动命令，测试程序在无污染环境下行为用。"""
    ),
    "printenv": (
        """$ printenv HOME
/home/user
$ printenv | head -3
HOME=/home/user
PATH=/usr/local/bin:...""",
        """`printenv` 打印环境变量；单独加变量名(如 HOME)只取该值，比 env 更聚焦查询。"""
    ),
    "seq": (
        """$ seq 1 3
1
2
3
$ seq -s, 1 5 2
1,3,5""",
        """`seq` 生成数字序列；`1 3` 输出 1-3，`-s,` 用逗号分隔、`1 5 2` 步长 2 得 1,3,5，常用于循环。"""
    ),
    "expr": (
        """$ expr 5 + 3
8
$ expr length 'hello'
5
$ expr 'a.txt' : '.*\\.txt'
4""",
        """`expr` 做整数运算(length 求串长、正则 `:`)；`5 + 3`=8。注意运算符两边需空格。现代脚本多用 `$(( ))`。"""
    ),
    "xdg-open": (
        """$ xdg-open report.pdf
(在默认图形程序中打开 report.pdf)""",
        """`xdg-open` 用桌面默认应用打开文件/URL；无 GUI 时无效，适合桌面环境快速预览。"""
    ),
    "apropos": (
        """$ apropos copy
cp (1)  - copy files and directories
scp (1) - secure copy""",
        """`apropos`(等同 man -k) 按关键词搜 whatis 库；"copy" 列出 cp、scp 等，忘记命令名时按功能反查。"""
    ),
    "gpg": (
        """$ gpg -c secret.txt
(输入口令后生成 secret.txt.gpg)
$ gpg -d secret.txt.gpg > secret.txt
(解密需口令)""",
        """`gpg -c` 对称加密(口令保护)生成 .gpg；`-d` 解密。也可 `-e` 用接收方公钥加密，确保文件机密。"""
    ),
    # ==================== vim ====================
    "vim": (
        """$ vim report.txt
~                             (空行以 ~ 表示)
-- INSERT --                 (按 i 进入插入模式时显示)
'report.txt' 3L, 42C          (状态行: 3 行 42 字符)""",
        """启动 Vim 编辑 report.txt；行首 ~ 代表文件末尾之后的空行。`-- INSERT --` 提示处于插入模式；底部状态行列出行数与字符数。`:q!` 不保存退出，`:wq` 保存退出。"""
    ),
    "vim -d": (
        """$ vim -d a.txt b.txt
a.txt        | b.txt
line one     | line ONE
line two     | line two
[diff] 高亮两文件不同处""",
        """以 diff 模式同时打开两文件；Vim 并排显示并高亮差异(如 line one vs line ONE)，`do` 取对方、`dp` 推到对方，方便合并。"""
    ),
    "vim -R": (
        """$ vim -R config.cfg
-- VISUAL --  (只读, 写入会被拒绝)
"config.cfg" [readonly] 12L""",
        """以只读模式打开 config.cfg，状态行标 [readonly]；尝试写入会报 "readonly" 错误，防止误改重要配置。"""
    ),
    "view": (
        """$ view script.sh
(只读 Vim; :w 提示 E45: 'readonly' option is set)""",
        """`view` 等同 `vim -R`，只读编辑；`:w` 会被拒绝，适合查看不希望被改的文件。"""
    ),
    "vim -r": (
        """$ vim -r
Swap files found:
   .report.txt.swp  owned by: user
$ vim -r report.txt
(从交换文件恢复未保存内容)""",
        """崩溃/异常退出后可恢复：`vim -r` 列出可用交换文件(swp)，`vim -r report.txt` 从中恢复未保存的编辑。"""
    ),
    "i": (
        """插入前: Helo world
按 i 在光标前插入 -> 输入 'l' -> Hello world""",
        """普通模式下 `i` 进入插入模式，在**光标前**插入字符；常用于补字。左下角显示 `-- INSERT --`。"""
    ),
    "a": (
        """插入前: Hello orld
按 a 在光标后追加 -> 输入 'w' -> Hello world""",
        """`a` 在**光标后**追加插入(append)；与 i 相反，适合在字符右侧补字。"""
    ),
    "I": (
        """行:  world
按 I 跳到行首插入 -> 输入 'Hello' -> Hello world""",
        """`I`(大写 i) 跳到当前行**第一个非空白字符前**并插入；快速在行首补内容。"""
    ),
    "A": (
        """行: Hello 
按 A 跳到行尾插入 -> 输入 'world' -> Hello world""",
        """`A` 跳到当前行**行尾**并插入(append)；在一行末尾连续补充时极方便。"""
    ),
    "o": (
        """当前行: line one
按 o -> 在其下方新建一行并插入 -> 输入 line two""",
        """`o` 在**当前行下方**新建空行并进入插入模式；写列表/日志时常用。"""
    ),
    "O": (
        """当前行: line two
按 O -> 在其上方新建一行并插入 -> 输入 line one""",
        """`O` 在**当前行上方**新建空行并插入；与 o 相反。"""
    ),
    "s": (
        """字符: worXd
光标在 X -> 按 s -> 删除 X 并插入 -> 输入 'l' -> word""",
        """`s` 删除光标下**一个字符**并进入插入模式(substitute)；适合改单个错字。"""
    ),
    "S": (
        """行: old content
按 S -> 删除整行并插入 -> 输入 new line""",
        """`S`(等同 `cc`) 删除**整行**并进入插入模式，在原位置重写字行。"""
    ),
    "cc": (
        """行: foo bar baz
按 cc -> 整行清空并插入 -> 输入 new""",
        """`cc` 删除当前行并进入插入模式(change line)；与 S 完全相同。"""
    ),
    "R": (
        """文本: print 'old'
按 R 进入替换模式 -> 覆盖输入 new -> print 'new'""",
        """`R` 进入**替换模式**，输入的字符逐个覆盖原文本(而非插入)；改写一段内容时好用。"""
    ),
    "Esc": (
        """-- INSERT --  (插入中)
按 Esc -> 回到普通模式 (-- INSERT -- 消失)""",
        """`Esc`(或 Ctrl+[) 从插入/替换/可视模式退回**普通模式**；几乎所有操作前先按 Esc 确保回到普通模式。"""
    ),
    "v": (
        """按 v 进入字符可视 -> 移动光标 -> 选中 'hello' 高亮""",
        """`v` 进入**字符可视模式**，移动光标逐字符选择；可对选区做删除/复制/替换(y/d/c)。"""
    ),
    "V": (
        """按 V 进入行可视 -> 选中整行 (高亮整行)""",
        """`V`(大写) 进入**行可视模式**，整行整行选择；批量操作行(缩进/删除)方便。"""
    ),
    "Ctrl+v": (
        """按 Ctrl+v 进入块可视 -> 选矩形区域(如多行首列)高亮""",
        """`Ctrl+v` 进入**块(列)可视模式**，按矩形区域选择；在多行同列插入/删除(如注释)时神器。"""
    ),
    "h": (
        """光标: H[e]llo -> 按 h -> [H]ello""",
        """`h` 光标**左**移一格；方向键左等价。普通模式基础移动之一。"""
    ),
    "j": (
        """光标在第 1 行 -> 按 j -> 下移一行到第 2 行""",
        """`j` 光标**下**移一行；方向键下等价。"""
    ),
    "k": (
        """光标在第 3 行 -> 按 k -> 上移一行到第 2 行""",
        """`k` 光标**上**移一行；方向键上等价。"""
    ),
    "l": (
        """光标: [H]ello -> 按 l -> H[e]llo""",
        """`l` 光标**右**移一格；方向键右等价。"""
    ),
    "w（移动）": (
        """文本: foo bar baz
光标在 f -> 按 w -> 跳到 b(ar) 的词首""",
        """`w` 光标向前跳到**下一个词首**(word forward)；快速在词间移动。"""
    ),
    "W": (
        """文本: a.b.c  foo
按 W -> 按空格分隔跳到 foo 词首(忽略标点)""",
        """`W` 按**空格分隔的"大词"**向前跳(忽略标点)，与 w 的区别在于词的界定方式。"""
    ),
    "b": (
        """文本: foo bar baz
光标在 baz 的 z -> 按 b -> 跳回 b(ar) 词首""",
        """`b` 光标向后跳到**上一个词首**(back word)；与 w 相反。"""
    ),
    "e": (
        """文本: foo bar
光标在 f -> 按 e -> 跳到 foo 的词尾 o""",
        """`e` 光标跳到**当前/下一个词的末尾**(end)；便于在词尾插入。"""
    ),
    "0": (
        """行:   hello (前有两个空格)
光标在 o -> 按 0 -> 跳到行首第一个字符(含前导空格)""",
        """`0`(数字零) 跳到**行首第一个字符**(含前导空白)。"""
    ),
    "^": (
        """行:   hello
光标在 o -> 按 ^ -> 跳到第一个非空白字符 h""",
        """`^` 跳到行内**第一个非空白字符**(首个有效内容)；与 0 区别在跳过缩进。"""
    ),
    "$": (
        """行: hello world
光标在 h -> 按 $ -> 跳到行尾 d""",
        """`$` 跳到**行尾最后一个字符**；`d$` 可删除到行尾。"""
    ),
    "g_": (
        """行: hello world   
光标任意 -> 按 g_ -> 跳到行尾最后一个非空白字符(d 之前)""",
        """`g_` 跳到行内**最后一个非空白字符**(忽略尾部空格)，与 $ 区别在于不过尾随空格。"""
    ),
    "gg": (
        """光标在第 20 行 -> 按 gg -> 跳到文件第 1 行""",
        """`gg` 跳到**文件首行**；`5gg` 或 `:5` 跳到第 5 行。"""
    ),
    "G": (
        """光标在第 1 行 -> 按 G -> 跳到文件最后一行""",
        """`G` 跳到**文件末行**；`5G` 跳到第 5 行(与 :5 等同)。"""
    ),
    ":n": (
        """输入 :n 回车
(跳转到下一个文件, 多文件编辑时)""",
        """`:n` 在打开多个文件时跳到**下一个文件**；`:N`/`:prev` 跳上一个，`args` 查看列表。"""
    ),
    "H": (
        """当前在中间 -> 按 H -> 光标跳到屏幕顶部第一行""",
        """`H`(High) 跳到**当前屏幕可见区顶部**那一行(非文件首)。"""
    ),
    "M": (
        """按 M -> 光标跳到屏幕可见区中间行""",
        """`M`(Middle) 跳到屏幕可见区**中间**那一行。"""
    ),
    "L": (
        """按 L -> 光标跳到屏幕可见区底部行""",
        """`L`(Low) 跳到屏幕可见区**底部**那一行。"""
    ),
    "%": (
        """文本: if (a == b) { ... }
光标在 ( -> 按 % -> 跳到匹配的 )""",
        """`%` 在括号/花括号/方括号间**跳转配对**；检查括号是否匹配时极有用。"""
    ),
    "{": (
        """光标在段落中 -> 按 { -> 跳到上一段落开头(空行分隔)""",
        """`{` 向后跳到**段落起始**(以空行划分)；`}` 跳到段落结尾。"""
    ),
    "}": (
        """光标在段落中 -> 按 } -> 跳到下一段落结尾""",
        """`}` 向前跳到**段落结尾**(空行分隔)；与 { 相对。"""
    ),
    "(": (
        """光标在句中 -> 按 ( -> 跳到上一句开头""",
        """`(` 跳到**上一句**(按标点划分)；`)` 跳下一句，句子级移动。"""
    ),
    ")": (
        """光标在句中 -> 按 ) -> 跳到下一句开头""",
        """`)` 跳到**下一句**开头；与 ( 相对。"""
    ),
    "Ctrl+f": (
        """当前在第 1 屏 -> 按 Ctrl+f -> 向下翻一整页""",
        """`Ctrl+f` 向下翻**一页**(forward)；浏览长文档。"""
    ),
    "Ctrl+b": (
        """按 Ctrl+b -> 向上翻一整页(back)""",
        """`Ctrl+b` 向上翻**一页**；与 Ctrl+f 方向相反。"""
    ),
    "Ctrl+d": (
        """按 Ctrl+d -> 向下翻半页(down)""",
        """`Ctrl+d` 向下翻**半页**；幅度小于 Ctrl+f。"""
    ),
    "Ctrl+u": (
        """按 Ctrl+u -> 向上翻半页(up)""",
        """`Ctrl+u` 向上翻**半页**；与 Ctrl+d 相对。"""
    ),
    "zz": (
        """光标在某行 -> 按 zz -> 把该行滚到屏幕中央""",
        """`zz` 把**当前行滚动到屏幕中间**(不移动光标)；便于聚焦当前行。"""
    ),
    "fx": (
        """行: function x
光标在 f -> 按 fx -> 跳到本行下一个 x""",
        """`fx` 跳到**本行下一个字符 x**(find)；`Fx` 反向找，`tx` 跳到 x 前，`;` 重复、`;` 反向。"""
    ),
    "Fx": (
        """行: max value
光标在 e -> 按 Fv -> 跳到本行前一个 v""",
        """`Fx` 反向查找本行**前一个字符 x**；与 fx 方向相反。"""
    ),
    "tx": (
        """行: text x y
光标在 t -> 按 tx -> 跳到 x 的前一个字符""",
        """`tx` 跳到本行下一个 x 的**前一个字符**(till)；配合删除/插入在 x 前操作。"""
    ),
    ";": (
        """按 ; -> 重复上一次 f/F/t/T 查找(同方向)""",
        """`;` 重复最近一次 `f/F/t/T` 查找(同向)；`,` 以反方向重复。连续定位同字符时用。"""
    ),
    "*": (
        """光标在 word 上 -> 按 * -> 向下搜索该词并跳到下一处""",
        """`*` 以光标下**完整单词**为模式向下搜索并跳转；`#` 向上。`n/N` 继续。"""
    ),
    "#": (
        """光标在 word 上 -> 按 # -> 向上搜索该词并跳到上一处""",
        """`#` 以光标下单词为模式**向上**搜索；与 * 相反。"""
    ),
    "Ctrl+o": (
        """跳转历史中 -> 按 Ctrl+o -> 跳回上一次光标位置(old)""",
        """`Ctrl+o` 在**跳转列表**中后退一步(回到上次光标位置)；`Ctrl+i` 前进。"""
    ),
    "Ctrl+i": (
        """按 Ctrl+i -> 前进到跳转列表的下一位置""",
        """`Ctrl+i`(等同 Tab) 在跳转列表中**前进**；与 Ctrl+o 相对。"""
    ),
    "``": (
        """在 A 处按 `` -> 跳回跳转前的位置(同 Cursor 标记)""",
        """双反引号 `` 跳回**上一次光标所在位置**(与 Ctrl+o 不同，仅记最近一处)；`''` 跳回上次所在行的行首。"""
    ),
    "x": (
        """字符: wor[d]
光标在 d -> 按 x -> 删除 d -> wor""",
        """`x` 删除**光标下字符**(剪切)；`3x` 删 3 个。等同 `dl`。"""
    ),
    "X": (
        """字符: [w]ord
光标在 w -> 按 X -> 删除 w -> ord""",
        """`X` 删除**光标前一个字符**(退格删除)；与 x 方向相反。"""
    ),
    "dw": (
        """文本: remove this word
光标在 r -> 按 dw -> 删除单词 remove -> this word""",
        """`dw` 删除**从光标到下一个词首**(delete word)；光标在词首即删整词。"""
    ),
    "dd（删行）": (
        """第 3 行: obsolete line
光标在其上 -> 按 dd -> 删除整行""",
        """`dd` 删除**整行**(delete line)；`3dd` 删 3 行。被删内容进寄存器可 `p` 粘贴。"""
    ),
    "D": (
        """行: keep this DELETE
光标在 D -> 按 D -> 删除到行尾 -> keep this""",
        """`D` 删除**从光标到行尾**的内容(等同 `d$`)；保留行首。"""
    ),
    "cw": (
        """词: eror
光标在 e -> 按 cw -> 删词并插入 -> 输入 error""",
        """`cw` 删除**当前词**(change word)并进入插入模式；改单词首选。"""
    ),
    "C": (
        """行: print 'a' # fix
光标在 p -> 按 C -> 删除到行尾并插入""",
        """`C` 删除**从光标到行尾**并进入插入模式(等同 `c$`)；重写该行后半。"""
    ),
    "r": (
        """字符: heXo
光标在 X -> 按 r 再按 l -> 替换为 l -> helo""",
        """`r` 替换**光标下单个字符**(replace)后留在普通模式；快速改错字。"""
    ),
    "J": (
        """两行: line one
       line two
光标在第 1 行按 J -> 合并为 line one line two""",
        """`J` 把**下一行接到当前行尾**(join)；`3J` 合并 3 行。"""
    ),
    "~": (
        """字符: a
光标在 a -> 按 ~ -> 切换大小写 -> A""",
        """`~` 切换**光标下字符大小写**；选中后按 ~ 可整段切换。"""
    ),
    "gu": (
        """词: Word
光标在 W -> guw -> 转小写 -> word""",
        """`gu` 后接动作把文本转**小写**；`guw` 转当前词，`guG` 转到底部。"""
    ),
    "gU": (
        """词: word
光标在 w -> gUw -> 转大写 -> WORD""",
        """`gU` 把文本转**大写**；`gUiw` 转整个当前词。"""
    ),
    ".": (
        """删除一词后 -> 移到下一词按 . -> 重复该删除""",
        """`.` 重复**上一次修改操作**(不包含移动)；批量同操作(如多处删词)神器。"""
    ),
    "u": (
        """误删一行后 -> 按 u -> 撤销该删除""",
        """`u` 撤销**上一次修改**(undo)；连按逐步回退。"""
    ),
    "Ctrl+r": (
        """撤销过头 -> 按 Ctrl+r -> 重做(redo)恢复""",
        """`Ctrl+r` 重做(redo)被撤销的操作；与 u 相对。"""
    ),
    "U": (
        """行内多次修改后 -> 按 U -> 撤销本行所有修改""",
        """`U` 撤销**当前行的全部修改**(回到进入本行时的状态)；再按可恢复。"""
    ),
    "yy": (
        """第 5 行: copy me
光标在其上 -> 按 yy -> 复制到寄存器""",
        """`yy`(或 `Y`) 复制**整行**(yank)；`p` 粘贴到下一行。"""
    ),
    "yw": (
        """词: hello
光标在 h -> 按 yw -> 复制该词到寄存器""",
        """`yw` 复制**当前词**；`y$` 复制到行尾，`yib` 复制括号内。"""
    ),
    "y$": (
        """行: take this part
光标在 t -> 按 y$ -> 复制 t 到行尾""",
        """`y$` 复制**从光标到行尾**的文本；供后续 `p` 粘贴。"""
    ),
    "p": (
        """寄存器有 'line'
光标在第 2 行 -> 按 p -> 在下方粘贴该行""",
        """`p` 在**光标后/下一行**粘贴寄存器内容(整行则粘贴到下方)；`P` 粘贴到上方/前。"""
    ),
    "P": (
        """寄存器有 'x'
光标在 a -> 按 P -> 在光标前插入 x -> xa""",
        """`P` 在**光标前/上一行**粘贴；与 p 方向相反。"""
    ),
    "diw": (
        """词: mistake
光标在词内任意处 -> 按 diw -> 删除整个词(忽略空白)""",
        """`diw` 删除**内词**(inner word)——整词不含两侧空白；改词时比 dw 更准。"""
    ),
    "ciw": (
        """词: oldname
光标在词内 -> 按 ciw -> 删整词并插入 -> 输入 newname""",
        """`ciw` 修改**内词**(change inner word)；快速替换光标所在单词。"""
    ),
    "di\"": (
        """文本: name = \"value\"
光标在 value 内 -> 按 di\" -> 删除引号内容 -> name = \"\"""",
        """`di\"` 删除**双引号内的内容**(delete inner quote)，保留引号；改字符串值用。同理 di( 删括号内、di[ 删方括号内。"""
    ),
    "ci\"": (
        """文本: msg = \"old\"
光标在 old 内 -> 按 ci\" -> 删引号内容并插入 -> 输入 new""",
        """`ci\"` 修改**双引号内的内容**并进入插入；快速替换字符串。di( / ci( 同理作用于括号。"""
    ),
    "di(": (
        """文本: func(a, b)
光标在 a -> 按 di( -> 删除括号内 a, b -> func()""",
        """`di(` 删除**圆括号内的内容**(inner parenthesis)；改函数参数、删除 JSON 值常用。"""
    ),
    "dit": (
        """文本: <tag>content</tag>
光标在 content -> 按 dit -> 删除标签内容 -> <tag></tag>""",
        """`dit` 删除**标签内的内容**(inner tag，XML/HTML)；配合 ci{ 改花括号内。"""
    ),
    "/pattern": (
        """输入 /error 回车
高亮匹配, 跳到下一个 error""",
        """`/pattern` 向前搜索模式(支持正则)；回车后跳到首个匹配，`n` 下一处、`N` 上一处。"""
    ),
    "?pattern": (
        """输入 ?main 回车
向上搜索, 跳到上一个 main""",
        """`?pattern` 向上搜索模式；与 / 方向相反，`n`/`N` 仍继续相应方向。"""
    ),
    "n": (
        """已搜索 error -> 按 n -> 跳到下一个匹配""",
        """`n` 跳到**下一个**搜索匹配(沿 / 或 ? 当前方向)；连续浏览命中项。"""
    ),
    "N": (
        """已搜索 error -> 按 N -> 跳到上一个匹配""",
        """`N` 跳到**上一个**搜索匹配；与 n 相反。"""
    ),
    ":%s": (
        """输入 :%s/foo/bar/g 回车
3 substitutions on 3 lines""",
        """`:%s/foo/bar/g` 在**全文**把 foo 替换为 bar(g 全局、不止首处)；% 表示全部行。"""
    ),
    ":s": (
        """输入 :s/old/new 回车
仅替换当前行第一个 old -> new""",
        """`:s/old/new` 只替换**当前行首个**匹配；加 /g 才替换行内全部。"""
    ),
    ":5,20s": (
        """输入 :5,20s/err/ERR/g 回车
第 5-20 行内 err 全部改为 ERR""",
        """`:5,20s/.../g` 限定在**第 5 到 20 行**范围内替换；范围可写 %、.、$ 或可视选择。"""
    ),
    ":set ic": (
        """输入 :set ic 回车
(之后搜索不区分大小写)""",
        """`:set ic`(ignorecase) 让搜索**忽略大小写**；`:set noic` 恢复区分。"""
    ),
    ":set hls": (
        """输入 :set hls 回车
(搜索命中项全部高亮)""",
        """`:set hls`(hlsearch) 高亮**所有搜索匹配**；`:noh` 临时清除高亮。"""
    ),
    ":w": (
        """输入 :w 回车
"report.txt" 3L, 42C written""",
        """`:w` 保存文件；状态行回显行数与字节数 "3L, 42C written"。`:w new.txt` 另存为。"""
    ),
    ":q": (
        """输入 :q 回车
(无改动则退出; 有未保存改动会提示 E37)""",
        """`:q` 退出；若有未保存修改会拒绝并提示 E37，需 `:w` 或 `:q!`。"""
    ),
    ":q!": (
        """输入 :q! 回车
(放弃所有修改并强制退出)""",
        """`:q!` **强制退出不保存**；丢弃本次会话全部编辑，慎用。"""
    ),
    ":wq": (
        """输入 :wq 回车
"report.txt" 3L, 42C written
(保存并退出)""",
        """`:wq` 保存并退出(等同 ZZ)；写盘后离开 Vim。"""
    ),
    ":x": (
        """输入 :x 回车
(保存并退出, 功能同 :wq)""",
        """`:x` 保存并退出，与 :wq 几乎一致(区别: 仅当文件改动才更新修改时间)。"""
    ),
    "ZZ": (
        """普通模式按 ZZ
(保存并退出, 等价 :x)""",
        """`ZZ`(大写) 在普通模式**保存并退出**，无需冒号命令；`:x` 的快捷等价。"""
    ),
    ":e": (
        """输入 :e other.txt 回车
"other.txt" 12L 加载新文件""",
        """`:e file` 在当前窗口**打开/切换到另一文件**；未保存改动会先提示。"""
    ),
    ":e!": (
        """输入 :e! 回车
(丢弃当前文件改动并重新从磁盘载入)""",
        """`:e!` 放弃当前缓冲区改动，**重新从磁盘读取**文件；撤销本地编辑。"""
    ),
    ":qa": (
        """输入 :qa 回车
(所有窗口/文件一并退出; 有未保存会提示)""",
        """`:qa` 退出**全部**窗口(quit all)；有未保存改动会拒绝，需用 `:qa!`。"""
    ),
    ":ls": (
        """输入 :ls 回车
  1 %a   "report.txt"  line 3
  2  h   "notes.md"    line 1""",
        """`:ls` 列出**缓冲区列表**(已打开文件)；% 当前、# 交替、h 隐藏。`:b N` 跳到第 N 个。"""
    ),
    ":bn": (
        """输入 :bn 回车
(切换到缓冲区列表中的下一个文件)""",
        """`:bn`(buffer next) 切换到**下一个缓冲区**(已打开文件)；`:bp` 上一个。"""
    ),
    ":bp": (
        """输入 :bp 回车
(切换到上一个缓冲区)""",
        """`:bp`(buffer previous) 切换到上一个缓冲区；与 :bn 相对。"""
    ),
    ":bd": (
        """输入 :bd 回车
(关闭当前缓冲区, 但不退出 Vim)""",
        """`:bd`(buffer delete) 关闭当前缓冲区(文件)；仍留在 Vim 中可继续其他文件。"""
    ),
    ":sp": (
        """输入 :sp other.txt 回车
(上下分屏打开 other.txt)""",
        """`:sp file` **水平分屏**(split)打开文件；`Ctrl+w` 后再按方向键在窗格间移动。"""
    ),
    ":vsp": (
        """输入 :vsp other.txt 回车
(左右分屏打开 other.txt)""",
        """`:vsp file` **垂直分屏**(vertical split)打开文件；适合对照编辑。"""
    ),
    "Ctrl+w": (
        """分屏状态下按 Ctrl+w 再按 h/j/k/l
(在窗格间移动焦点)""",
        """`Ctrl+w` 后接方向在**分屏窗格间移动焦点**；`Ctrl+w =` 均分、`Ctrl+w o` 只留当前。"""
    ),
    ":tabnew": (
        """输入 :tabnew 回车
(新建一个标签页)""",
        """`:tabnew` 新建**标签页**(隔离不同任务/文件组)；`gt`/`gT` 切换，`tabclose` 关闭。"""
    ),
    "gt": (
        """多标签时按 gt
(切换到下一个标签页)""",
        """`gt` 切到**下一个标签页**；`gT` 上一个，`Ngt` 跳第 N 个。"""
    ),
    "gT": (
        """按 gT
(切换到上一个标签页)""",
        """`gT` 切到上一个标签页；与 gt 相对。"""
    ),
    "za": (
        """光标在折叠行 -> 按 za -> 展开/收起该折叠切换""",
        """`za` **切换**当前折叠的展/收状态(fold toggle)；`zo` 展开、`zc` 收起。"""
    ),
    "zo": (
        """光标在收起折叠 -> 按 zo -> 展开该折叠""",
        """`zo` **展开**当前折叠(open)；查看折叠内的内容。"""
    ),
    "zc": (
        """光标在展开折叠 -> 按 zc -> 收起该折叠""",
        """`zc` **收起**当前折叠(close)；用于隐藏细节聚焦大纲。"""
    ),
    "zR": (
        """按 zR
(展开所有折叠)""",
        """`zR` **展开全部**折叠；一览所有被折叠内容。"""
    ),
    "zM": (
        """按 zM
(收起所有折叠)""",
        """`zM` **收起全部**折叠；仅看大纲。"""
    ),
    "qa": (
        """普通模式按 qa -> 开始录制宏到寄存器 a
(操作序列被记录, 再按 q 停止)""",
        """`qa` 开始把后续按键**录制进宏寄存器 a**(quit to record)；结束再按 `q`，`@a` 回放。"""
    ),
    "@a": (
        """录制好宏 a 后按 @a
(在当前位置回放宏 a 的操作)""",
        """`@a` **回放寄存器 a 中的宏**；`@@` 重复上一次宏，批量处理多行利器。"""
    ),
    "ma": (
        """光标在第 10 行按 ma
(设置名为 a 的标记)""",
        """`ma` 在当前位置设置**标记 a**(mark)；`'a` 跳回该标记行首，``a` 跳精确位置。"""
    ),
    "Ctrl+n": (
        """插入模式输入 wor -> 按 Ctrl+n
(弹出补全: word / work / world...)""",
        """插入模式 `Ctrl+n` 触发**关键字补全**(next)，列出候选；`Ctrl+p` 反向。无需插件即用。"""
    ),
    "Ctrl+p": (
        """插入模式按 Ctrl+p
(向上反向补全候选)""",
        """`Ctrl+p` 在补全菜单中**向前**(previous)选择；与 Ctrl+n 相对。"""
    ),
    ":set nu": (
        """输入 :set nu 回车
  1 first line
  2 second line
(每行前显示行号)""",
        """`:set nu`(number) **显示行号**；`:set nonu` 关闭。定位与引用行号必备。"""
    ),
    ":set rnu": (
        """输入 :set rnu 回车
  2 first line
  1 second line  <- 光标行
(显示相对行号, 光标行标 0)""",
        """`:set rnu`(relativenumber) 显示**相对行号**(相对光标行)；配合 `5j`/`3k` 精确跳转。`:set nu rnu` 兼得。"""
    ),
    ":syntax on": (
        """输入 :syntax on 回车
(关键字/字符串/注释以不同颜色高亮)""",
        """`:syntax on` 开启**语法高亮**；不同语言元素着色，可读性大增。通常写进 vimrc 默认开启。"""
    ),
    ":set ai": (
        """输入 :set ai 回车
(新行自动沿用上一行缩进)""",
        """`:set ai`(autoindent) **自动缩进**——新行延续上一行缩进；写代码排版整齐。`:set noai` 关。"""
    ),
    ":set list": (
        """输入 :set list 回车
行尾以 $ 标出, 制表符显示为 ^I""",
        """`:set list` 显示**不可见字符**(行尾 $、Tab 为 ^I)；排查多余空格/混用 Tab 很直观。`:set nolist` 关。"""
    ),
    ":set wrap": (
        """输入 :set wrap 回车
(长行在窗口内自动折行显示)""",
        """`:set wrap` 让超长行**折行**显示(不横向滚动)；`:set nowrap` 关闭则一行到底需横向移动。"""
    ),
    ":retab": (
        """输入 :retab 回车
(按 expandtab 把 Tab 转为对应数量空格)""",
        """`:retab` 按当前 `tabstop`/`expandtab` 设置**重排缩进**(Tab↔空格互转)；统一缩进风格用。"""
    ),
    ":r": (
        """输入 :r other.txt 回车
(把 other.txt 内容插入到光标下方)""",
        """`:r file` 把指定文件**读入并插入到当前行下方**；`:r !cmd` 还可插入命令输出。"""
    ),
    ":!cmd": (
        """输入 :!ls 回车
file1.txt  file2.txt
(按 Enter 返回 Vim)""",
        """`:!cmd` 在 Vim 内**执行外部 shell 命令**(如 :!ls、:!make)；临时跑命令不退出编辑器。"""
    ),
    ":%!": (
        """输入 :%!sort 回车
(把全文作为 stdin 交给 sort, 结果替换全文)""",
        """`:%!cmd` 把**全文**管道给外部命令、用其输出**替换全文**；`:%!sort` 即把文档整篇排序。"""
    ),
    ":help": (
        """输入 :help :w 回车
(打开帮助窗口, 显示 :w 的说明)""",
        """`:help topic` 打开**内置帮助**(如 :help :w、:help pattern)；`Ctrl+]` 跳标签、`q` 关闭帮助窗。"""
    ),
    "vimtutor": (
        """$ vimtutor
(启动交互式 Vim 教程, 按步练习移动/编辑/保存)""",
        """`vimtutor` 在终端启动**官方交互教程**，约 30 分钟循序渐进练手 Vim 基础，新手最佳入口。"""
    ),
    # ==================== git: g_config ====================
    "git init": (
        """$ git init
Initialized empty Git repository in /home/user/project/.git/
$ ls -a | grep .git
.git""",
        """在当前目录创建 .git 仓库(Initialized empty)；`ls -a` 可见新增 .git 目录，此后该目录纳入版本控制。"""
    ),
    "git clone": (
        """$ git clone https://github.com/user/repo.git
Cloning into 'repo'...
remote: Enumerating objects: 120, done.
Receiving objects: 100% (120/120), done.""",
        """从远程 URL 克隆整个仓库到本地 repo/ 目录；显示枚举与接收对象进度，完成后得到完整仓库(含历史)。"""
    ),
    "git config": (
        """$ git config --global user.name "Alice"
$ git config --global user.email "alice@example.com"
$ git config --list | grep user
user.name=Alice
user.email=alice@example.com""",
        """`git config --global` 设置全局用户名/邮箱(提交者身份)；`--list` 查看，缺这两项会无法提交。"""
    ),
    "git help": (
        """$ git help commit
(打开 git-commit 手册页)
$ git help -a | head
available git commands... add commit clone""",
        """`git help <cmd>` 查某命令手册(man 页)；`-a` 列出全部可用子命令，适合回忆命令名。"""
    ),
    "git var": (
        """$ git var GIT_COMMITTER_IDENT
Alice <alice@example.com> 1722748800 +0800""",
        """`git var` 显示 Git 内部变量求值结果；此处输出提交者身份(名<邮箱> 时间戳 时区)，排查身份配置用。"""
    ),
    "git version": (
        """$ git version
git version 2.40.0""",
        """打印 Git 客户端版本号；确认特性支持或排错时先看版本。"""
    ),
    "git bugreport": (
        """$ git bugreport
(生成 git-bugreport-<日期>.txt 模板供填写)""",
        """交互生成 bug 报告模板文件，内含环境信息，便于向 Git 社区报问题。"""
    ),
    # ==================== git: g_commit ====================
    "git status": (
        """$ git status
On branch main
Changes to be committed:
  new file:   app.js
Changes not staged for commit:
  modified:   index.html""",
        """显示工作区状态：On branch main；`Changes to be committed` 是已暂存待提交，`Changes not staged` 是已改未暂存。据此决定 add/commit。"""
    ),
    "git add": (
        """$ git add index.html app.js
$ git status -s
A  app.js
 M index.html
$ git add -A""",
        """`git add` 把文件改动纳入暂存区；`status -s` 中 A=已加、M=已改。`-A` 暂存全部改动(含删改)。"""
    ),
    "git commit": (
        """$ git commit -m "feat: add login page"
[main 3a1b2c4] feat: add login page
 1 file changed, 12 insertions(+)""",
        """`-m` 指定提交说明；输出新提交短哈希 3a1b2c4、改动文件数与增删行数。提交即生成版本快照。"""
    ),
    "git rm": (
        """$ git rm old.js
rm 'old.js'
$ git status -s
D  old.js""",
        """`git rm` 同时删除工作区文件并暂存删除；status 显示 D(已删待提交)。仅删工作区用 `rm` 后 `git add`。"""
    ),
    "git mv": (
        """$ git mv a.js src/a.js
$ git status -s
R  a.js -> src/a.js""",
        """`git mv` 移动/重命名并暂存；status 以 R 标记重命名(保留历史关联)，优于手动 mv+add。"""
    ),
    "git clean": (
        """$ git clean -n
Would remove debug.log
$ git clean -f
Removing debug.log""",
        """`git clean -n` 预览将被删除的未跟踪文件；`-f` 真正删除(危险，不可恢复)。`-d` 含未跟踪目录。"""
    ),
    "git stage": (
        """$ git stage *.py
$ git status -s
A  main.py
A  util.py""",
        """`git stage` 是 `git add` 的同义别名，把改动加入暂存区；输出显示多个 .py 已暂存。"""
    ),
    # ==================== git: g_view ====================
    "git log": (
        """$ git log --oneline -3
3a1b2c4 feat: add login page
8f2d1a0 fix: header style
1c9e8b7 init project""",
        """`git log` 显示提交历史；`--oneline` 单行精简，每行=短哈希+说明。可加 `--graph --all` 看分支图。"""
    ),
    "git show": (
        """$ git show 3a1b2c4
commit 3a1b2c4...
Author: Alice <alice@example.com>
Date:   2026-08-04
    feat: add login page
diff --git a/app.js b/app.js
+ console.log('login')""",
        """`git show <commit>` 显示该次提交的元信息+完整 diff；便于查看某次改动的具体内容。"""
    ),
    "git diff": (
        """$ git diff
diff --git a/index.html b/index.html
-index.html
+<title>New</title>""",
        """`git diff` 显示**工作区 vs 暂存区**的差异；`git diff --cached` 看暂存区 vs 上次提交。`+` 新增、`-` 删除。"""
    ),
    "git blame": (
        """$ git blame -L 5,7 app.js
3a1b2c4 (Alice 2026-08-04 1) function f() {
3a1b2c4 (Alice 2026-08-04 2)   return 1;
8f2d1a0 (Bob   2026-08-03 3) }""",
        """`git blame -L 5,7` 逐行标注第 5-7 行是谁、何时、哪次提交写的；追溯"谁改了这行"利器。"""
    ),
    "git grep": (
        """$ git grep -n 'TODO' -- '*.py'
app/main.py:12:    # TODO refactor
util/helper.py:45:    # TODO add test""",
        """`git grep` 在**版本库内**搜索(不搜未跟踪文件)，`-n` 带行号，`-- '*.py'` 限定类型；比系统 grep 更贴合仓库。"""
    ),
    "git shortlog": (
        """$ git shortlog -sne
    12  Alice <alice@example.com>
     5  Bob <bob@example.com>""",
        """`git shortlog -sne` 按作者汇总提交数(s 计数、n 按提交数排序、e 显示邮箱)；看团队贡献分布。"""
    ),
    "git describe": (
        """$ git describe --tags
v1.2.0-3-g3a1b2c4""",
        """`git describe --tags` 用最近的标签+领先提交数+短哈希描述当前提交(如 v1.2.0 后第3个提交)；生成可读版本号。"""
    ),
    "git reflog": (
        """$ git reflog -3
3a1b2c4 HEAD@{0}: commit: feat: add login page
8f2d1a0 HEAD@{1}: checkout: moving from dev to main
1c9e8b7 HEAD@{2}: commit: init project""",
        """`git reflog` 记录 HEAD 的每一次移动(提交/切换/重置)；**找回误删提交**的救命绳，可 `git reset --hard HEAD@{n}` 回退。"""
    ),
    "git whatchanged": (
        """$ git whatchanged --oneline -2
3a1b2c4 feat: add login page
:000000 100644 0000000... a/app.js (A)
8f2d1a0 fix: header
:100644 100644 b1..c2  index.html (M)""",
        """`git whatchanged` 以"提交 + 受影响的文件及状态(A新增/M修改/D删除)"形式展示历史；类似 log 但聚焦文件变更。"""
    ),
    "git difftool": (
        """$ git difftool
(启动配置的可视化对比工具如 vimdiff 比对改动)""",
        """`git difftool` 用图形/外部对比工具(如 vimdiff、meld)替代纯文本 diff，直观比对工作区改动。"""
    ),
    # ==================== git: g_branch ====================
    "git branch": (
        """$ git branch
  dev
* main
$ git branch feature-x
$ git branch -d dev""",
        """`git branch` 列出本地分支(`*` 为当前)；`feature-x` 新建分支；`-d dev` 删除已合并分支。"""
    ),
    "git switch": (
        """$ git switch dev
Switched to branch 'dev'
$ git switch -c hotfix
Switched to a new branch 'hotfix'""",
        """`git switch dev` 切换分支；`-c hotfix` 新建并切换。比 checkout 语义更清晰(只管分支切换)。"""
    ),
    "git checkout": (
        """$ git checkout main
Switched to branch 'main'
$ git checkout -b feature
Switched to a new branch 'feature'
$ git checkout -- index.html""",
        """`git checkout` 多用途：切分支、`-b` 新建、`<file>` 丢弃工作区改动还原文件(危险)。现代建议 switch/restore 替代。"""
    ),
    "git merge": (
        """$ git merge feature
Updating 8f2d1a0..3a1b2c4
Fast-forward
 index.html | 2 +-
 1 file changed""",
        """`git merge feature` 把 feature 合并进当前分支；Fast-forward 表示可直接快进(无分叉)；有冲突会标记并暂停。"""
    ),
    "git mergetool": (
        """$ git mergetool
Merging: index.html
(打开 vimdiff 三方对比, 解决后保存退出)""",
        """合并冲突时 `git mergetool` 调起可视化工具(如 vimdiff)逐文件解决冲突；解决后 `git add` 标记完成。"""
    ),
    "git rebase": (
        """$ git rebase main
Successfully rebased and updated refs/heads/feature.
$ git rebase -i HEAD~3""",
        """`git rebase main` 把当前分支提交"重放"到 main 之上，得到线性历史；`-i` 交互改写最近 3 个提交(整理提交)。改写已推送历史需谨慎。"""
    ),
    "git cherry-pick": (
        """$ git cherry-pick 8f2d1a0
[feature 9c0d1e2] fix: header
 Date: 2026-08-03
 1 file changed""",
        """`git cherry-pick <commit>` 把某个已有提交的改动**复制**到当前分支；挑选个别提交而不合并整条分支。"""
    ),
    "git tag": (
        """$ git tag v1.2.0
$ git tag -a v1.2.0 -m "release 1.2"
$ git tag
v1.2.0""",
        """`git tag v1.2.0` 打轻量标签；`-a -m` 打附注标签(带说明)。`git tag` 列出；发布里程碑用。"""
    ),
    "git range-diff": (
        """$ git range-diff main~3..main feature~3..feature
1:  3a1b2c4 = 9c0d1e2  feat: add login""",
        """`git range-diff` 比较两个提交区间的差异(常用于 rebase 后核对是否一致)；`=` 表示两边提交等价。"""
    ),
    "git merge-tree": (
        """$ git merge-tree main feature
<<<<<<< .base
...三重冲突标记展示合并结果(不实际写入)""",
        """`git merge-tree` **不实际合并**地计算两分支合并结果(用于钩子/预览)；输出含冲突标记供分析。"""
    ),
    "git cherry": (
        """$ git cherry main feature
+ 9c0d1e2 fix: header
- 3a1b2c4 feat: add login""",
        """`git cherry` 比较两分支：`-` 表示已存在于上游、`+` 表示独有提交(尚未合并)；挑选要补的提交用。"""
    ),
    "git show-branch": (
        """$ git show-branch
! [dev] fix: x
 * [main] feat: y
--""",
        """`git show-branch` 以矩阵展示各分支的最近提交与分叉点；快速看清分支关系。"""
    ),
    # ==================== git: g_remote ====================
    "git remote": (
        """$ git remote -v
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)
$ git remote add upstream https://github.com/up/repo.git""",
        """`git remote -v` 列出远程仓库及 URL；`add upstream` 增一个上游远程，用于同步原项目更新。"""
    ),
    "git fetch": (
        """$ git fetch origin
remote: Enumerating objects: 15, done.
From github.com:user/repo
   8f2d1a0..3a1b2c4  main       -> origin/main""",
        """`git fetch` 从远程拉取**最新对象但不动工作区**；origin/main 指针更新，可再 review 后合并。比 pull 更安全。"""
    ),
    "git pull": (
        """$ git pull origin main
Updating 8f2d1a0..3a1b2c4
Fast-forward
 index.html | 2 +-
$ git pull --rebase""",
        """`git pull` = fetch + merge，直接更新工作区分支；`--rebase` 改为 rebase 保持线性历史。可能触发冲突。"""
    ),
    "git push": (
        """$ git push origin main
Enumerating objects: 12, done.
To github.com:user/repo.git
   8f2d1a0..3a1b2c4  main -> main
$ git push -u origin feature""",
        """`git push origin main` 把本地提交推到远程 main；`-u` 建立跟踪，之后可简写 `git push`。**已推送后勿用 --force 覆盖他人提交**。"""
    ),
    "git submodule": (
        """$ git submodule add https://github.com/x/lib lib
Cloning into 'lib'...
$ git submodule update --init --recursive""",
        """`git submodule add` 把另一仓库作为子模块挂入 lib/；`update --init --recursive` 拉取并初始化嵌套子模块。"""
    ),
    "git worktree": (
        """$ git worktree add ../hotfix main
Preparing worktree (checking out 'main')
$ git worktree list
/path/proj       abc123 [main]
/path/hotfix     def456 [hotfix]""",
        """`git worktree add` 在另一目录检出另一分支，多个工作区共享同一仓库；`list` 查看。避免频繁切换分支丢失改动。"""
    ),
    "git bundle": (
        """$ git bundle create repo.bundle main
$ git clone repo.bundle repo2""",
        """`git bundle create` 把仓库打包成单文件(适合无网络传输)；对方 `clone` 该 .bundle 即可复原，离线分发用。"""
    ),
    "git request-pull": (
        """$ git request-pull origin/main myfork feature
The following changes since commit 8f2d1a0:
  feat: add login (3a1b2c4)
are available in the git repository at:""",
        """`git request-pull` 生成发给上游维护者的拉取请求摘要(基于某基线、指向你的 fork)；用于邮件式协作。"""
    ),
    "git ls-remote": (
        """$ git ls-remote origin
3a1b2c4...  HEAD
3a1b2c4...  refs/heads/main
8f2d1a0...  refs/tags/v1.2.0""",
        """`git ls-remote` 列出远程仓库的引用(分支/标签及其哈希)而**不克隆**；快速查看远程有哪些分支/标签。"""
    ),
    # ==================== git: g_undo ====================
    "git reset": (
        """$ git reset --soft HEAD~1
(最近提交撤回暂存区, 文件改动保留)
$ git reset --hard HEAD~1
HEAD is now at 8f2d1a0 fix: header""",
        """`git reset` 移动分支指针：`--soft` 保留改动在暂存区、`--mixed`(默认) 留在工作区、`--hard` **丢弃改动**(危险)。"""
    ),
    "git restore": (
        """$ git restore index.html
(丢弃 index.html 工作区改动, 还原为上次提交)
$ git restore --staged app.js""",
        """`git restore <file>` 丢弃工作区改动；`--staged` 把文件移出暂存区(保留改动)。替代 checkout 的部分用途，语义清晰。"""
    ),
    "git revert": (
        """$ git revert 3a1b2c4
[main 7b8c9d0] Revert "feat: add login page"
$ git log --oneline -1
7b8c9d0 Revert "feat: add login page" """,
        """`git revert <commit>` **新建一个反向提交**来抵消某次改动；不改写历史，对公共分支安全(优于 reset)。"""
    ),
    "git stash": (
        """$ git stash
Saved working directory and index state WIP on main
$ git stash list
stash@{0}: WIP on main
$ git stash pop""",
        """`git stash` 暂存当前未提交改动(清理工作区)；`list` 查看；`pop` 恢复并删除栈顶暂存。临时切分支前好用。"""
    ),
    # ==================== git: g_patch ====================
    "git format-patch": (
        """$ git format-patch main..feature
0001-feat-add-login.patch
0002-fix-header.patch""",
        """`git format-patch` 把提交区间生成为 .patch 邮件文件(含提交信息+diff)；适合邮件列表提交补丁。"""
    ),
    "git am": (
        """$ git am 0001-feat-add-login.patch
Applying: feat: add login page""",
        """`git am` 应用 format-patch 生成的补丁(保留原作者与提交信息)；邮件工作流接收补丁用。失败会提示冲突。"""
    ),
    "git apply": (
        """$ git apply fix.patch
(无输出即应用成功)
$ git apply --check fix.patch""",
        """`git apply` 应用普通 diff 补丁(不创建提交)；`--check` 只校验能否应用而不实际改动。比 am 底层。"""
    ),
    "git send-email": (
        """$ git send-email --to dev@list 0001-*.patch
OK. Log says: Sent 1 message(s)""",
        """`git send-email` 直接把补丁邮件发送到指定地址；开源项目邮件贡献流程用。"""
    ),
    "git imap-send": (
        """$ git imap-send *.patch
(把补丁通过 IMAP 存入草稿箱待发送)""",
        """`git imap-send` 经 IMAP 把补丁存入邮件草稿(再于客户端发送)；与 send-email 互补的邮件提交方式。"""
    ),
    "git mailinfo": (
        """$ git mailinfo msg patch < email.txt
(从邮件原文拆分出提交说明 msg 与补丁 patch)""",
        """`git mailinfo` 解析邮件原文，抽出提交信息与 diff 到文件；`am` 内部即调用它，处理收到的补丁邮件用。"""
    ),
    # ==================== git: g_debug ====================
    "git bisect": (
        """$ git bisect start
$ git bisect bad
$ git bisect good 8f2d1a0
Bisecting: 3 revisions left to test after this
(二分定位引入 bug 的提交)""",
        """`git bisect` 二分查找：标记当前为 bad、某旧版为 good，Git 自动切到中间提交让你测试，逐轮缩小范围定位首个引入 bug 的提交。"""
    ),
    "git verify-commit": (
        """$ git verify-commit 3a1b2c4
Good signature from "Alice <alice@example.com>"
$ git verify-commit badhash
No signature found""",
        """`git verify-commit` 校验某提交是否带**合法 GPG 签名**；输出 Good signature 或 No signature，验证提交来源可信。"""
    ),
    "git verify-tag": (
        """$ git verify-tag v1.2.0
Good signature from "Alice <alice@example.com>" """,
        """`git verify-tag` 校验标签的 GPG 签名；发布版本用标签签名后，用户可验真防篡改。"""
    ),
    # ==================== git: g_maint ====================
    "git gc": (
        """$ git gc
Enumerating objects: 312, done.
Writing objects: 100% (312/312)
Total 312 (delta 80), reused 300 (delta 70)""",
        """`git gc` 垃圾回收：压缩松散对象、打包、清理不可达对象；减小 .git 体积、提升性能。通常自动触发。"""
    ),
    "git fsck": (
        """$ git fsck --full
Checking object directories: 100% (256/256)
dangling commit 7b8c9d0
$ git fsck --lost-found""",
        """`git fsck` 检查仓库完整性(对象是否损坏)；dangling commit 可能是误删提交，`--lost-found` 找回。仓库健康体检。"""
    ),
    "git prune": (
        """$ git prune -n
(预览将被删除的不可达对象)
$ git prune""",
        """`git prune` 删除**不可达**的松散对象(无引用指向)；通常配合 gc 自动执行。`-n` 先预览。"""
    ),
    "git repack": (
        """$ git repack -ad
(把松散对象重新打包进 pack 文件并删冗余)""",
        """`git repack -ad` 将对象重新打包、`-d` 删除被新包取代的旧包；精简存储，常由 gc 调用。"""
    ),
    "git maintenance": (
        """$ git maintenance start
(注册后台定时任务: prefetch/loose-objects/incremental-repack)
$ git maintenance run --task=gc""",
        """`git maintenance` 管理后台自动维护任务(预取、垃圾回收等)；`start` 注册定时，`run --task=gc` 立即跑某项。"""
    ),
    "git count-objects": (
        """$ git count-objects -vH
count: 12
size: 24.00 KiB
in-pack: 300
packs: 2""",
        """`git count-objects -vH` 显示松散对象数/大小与已打包情况(-H 人类可读)；判断是否需要 gc。"""
    ),
    "git check-ignore": (
        """$ git check-ignore -v node_modules
.gitignore:3:node_modules/  node_modules
$ echo "debug.log" >> .gitignore; git check-ignore debug.log
debug.log""",
        """`git check-ignore -v` 解释某文件为何被忽略(显示匹配的规则与所在 .gitignore 行)；排查"该忽略却没忽略"用。"""
    ),
    # ==================== git: g_other ====================
    "git archive": (
        """$ git archive --format=zip -o rel.zip v1.2.0
$ unzip -l rel.zip | head
Archive: rel.zip
  src/main.py""",
        """`git archive` 把某提交/标签导出为 tar/zip(不含 .git)；发版交付源码快照用，比 clone 干净。"""
    ),
    "git check-attr": (
        """$ git check-attr text .gitattributes
.gitattributes: text: auto
$ git check-attr -a main.py
main.py: text: auto""",
        """`git check-attr` 查询某文件应用的 .gitattributes 属性(text/eol/export-ignore 等)；确认换行/处理规则生效。"""
    ),
    "git svn": (
        """$ git svn clone https://svn/repo
(从 Subversion 仓库克隆为 Git)
$ git svn rebase""",
        """`git svn` 桥接 Subversion：把 SVN 仓库当 Git 操作；`rebase` 从 SVN 同步最新。迁移遗留 SVN 用。"""
    ),
    "git ls-files": (
        """$ git ls-files
README.md
src/main.py
$ git ls-files -m
index.html""",
        """`git ls-files` 列出版本库跟踪的全部文件；`-m` 仅列已修改的，快速看当前改动范围。"""
    ),
    "git rev-parse": (
        """$ git rev-parse HEAD
3a1b2c4f5e6d7...  (40 位完整 SHA)
$ git rev-parse --abbrev-ref HEAD
main""",
        """`git rev-parse` 解析引用为对象名(哈希)；`HEAD` 得完整 40 位 SHA，`--abbrev-ref HEAD` 得分支名。脚本取信息用。"""
    ),
    "git rev-list": (
        """$ git rev-list --count main
142
$ git rev-list --count main..feature
3""",
        """`git rev-list` 列出提交(沿逆向)；`--count` 统计提交数，main..feature 得 feature 领先 main 的提交数(3)。"""
    ),
    # ==================== git: g_plumb ====================
    "git cat-file": (
        """$ git cat-file -t 3a1b2c4
commit
$ git cat-file -p HEAD
tree 9c0d...
author Alice ...
feat: add login""",
        """`git cat-file` 查看任意对象的类型(-t)与内容(-p)；底层探查工具，确认对象结构与数据。"""
    ),
    "git hash-object": (
        """$ git hash-object -w hello.txt
2d832d...  (生成并写入该文件的 blob SHA)
$ git hash-object hello.txt
2d832d...  (仅计算不写入)""",
        """`git hash-object` 计算(或 `-w` 写入)文件的 blob 哈希(SHA-1)；理解 Git 如何以内容寻址存储文件。"""
    ),
    "git update-index": (
        """$ git update-index --add hello.txt
(把文件加入索引/暂存区, 偏底层)
$ git update-index --assume-unchanged big.bin""",
        """`git update-index` 直接操作索引；`--add` 暂存文件，`--assume-unchanged` 让 Git 忽略某文件后续改动(加速大仓)。"""
    ),
    "git write-tree": (
        """$ git write-tree
9c0d1e2...  (根据当前索引生成 tree 对象 SHA)""",
        """`git write-tree` 把暂存区当前状态序列化为一个 tree 对象并返回其 SHA；构建提交时由 commit-tree 引用。"""
    ),
    "git commit-tree": (
        """$ git commit-tree 9c0d1e2 -p HEAD -m "msg"
3a1b2c4...  (生成新 commit 对象)""",
        """`git commit-tree` 用给定 tree、父提交与说明**直接创建提交对象**；底层命令，`git commit` 即在其上封装。"""
    ),
    "git update-ref": (
        """$ git update-ref refs/heads/dev 3a1b2c4
(把 dev 分支指针移动到某提交)""",
        """`git update-ref` 直接改写引用(分支/标签)指向；等价于底层移动分支指针，脚本与高级操作使用。"""
    ),
    "git show-ref": (
        """$ git show-ref
3a1b2c4 refs/heads/main
3a1b2c4 refs/remotes/origin/main""",
        """`git show-ref` 列出所有本地与远程引用的 SHA；核对分支/标签指向，底层排查用。"""
    ),
    "git symbolic-ref": (
        """$ git symbolic-ref HEAD
refs/heads/main
$ git symbolic-ref HEAD refs/heads/dev""",
        """`git symbolic-ref` 读写符号引用(如 HEAD 指向哪个分支)；可改当前分支指向而不切工作区。"""
    ),
    "git name-rev": (
        """$ git name-rev 3a1b2c4
3a1b2c4 main~2""",
        """`git name-rev` 把提交哈希反解为可读引用名(如 main~2)；日志/报错里看到裸哈希时定位用。"""
    ),
    "git for-each-ref": (
        """$ git for-each-ref --format='%(refname) %(objectname:short)' refs/tags
refs/tags/v1.2.0 3a1b2c4""",
        """`git for-each-ref` 遍历引用并按格式输出(分支/标签/远程)；生成自定义列表，CI/脚本取数据用。"""
    ),
    "git verify-pack": (
        """$ git verify-pack -v .git/objects/pack/*.idx | head
3a1b2c4... commit 1234 1 1""",
        """`git verify-pack` 校验 pack 索引完整性并列出其中对象；`-v` 详列每个对象的类型/大小/偏移。"""
    ),
    "git pack-objects": (
        """$ echo HEAD | git pack-objects pack
(把所列对象打包生成 pack-<SHA>.pack/.idx)""",
        """`git pack-objects` 把对象列表打包成 pack 文件(传输/存储优化)；`git push` 内部即打包后发送。"""
    ),
    "git index-pack": (
        """$ git index-pack downloaded.pack
(为收到的 pack 生成 .idx 索引)""",
        """`git index-pack` 为 pack 文件建立索引(.idx)；接收端拿到 pack 后必须建索引才能使用，fetch 内部调用。"""
    ),
    "git unpack-objects": (
        """$ git unpack-objects < packfile
(把 pack 流解包为松散对象)""",
        """`git unpack-objects` 从 pack 流还原出单独对象文件；少量对象解包时用(大规模建议 index-pack)。"""
    ),
    "git pack-refs": (
        """$ git pack-refs --all
(把 refs/heads 下松散引用打包进 packed-refs 文件)""",
        """`git pack-refs --all` 将大量分支/标签引用合并为单个 packed-refs 文件，减少目录项、提升性能。"""
    ),
    "git read-tree": (
        """$ git read-tree HEAD
(把某 tree 读入索引/暂存区, 不碰工作区)""",
        """`git read-tree` 把 tree 对象载入索引；底层操作，常用于 merge/checkout 的暂存区构建。"""
    ),
    "git ls-tree": (
        """$ git ls-tree HEAD
100644 blob 2d832d...  hello.txt
040000 tree 9c0d1e2...  src""",
        """`git ls-tree` 列出某 tree(提交/目录)下的条目及类型(100644 文件/040000 目录)与对象哈希；看目录结构用。"""
    ),
    "git mktree": (
        """$ git mktree < entries.txt
9c0d1e2...  (由条目清单生成 tree 对象 SHA)""",
        """`git mktree` 从"模式 类型 哈希 文件名"条目清单构建 tree 对象；脚本化构造树结构用。"""
    ),
    "git notes": (
        """$ git notes add -m "reviewed by Bob" HEAD
$ git notes show HEAD
reviewed by Bob""",
        """`git notes` 给提交附加**额外备注**(不改动提交本身)；审阅意见、补充背景可存此处，独立于历史。"""
    ),
    "git replace": (
        """$ git replace 3a1b2c4 7b8c9d0
(用 7b8c9d0 替换 3a1b2c4 在历史中的出现, 便于调试不改原历史)""",
        """`git replace` 建立替换引用：让某对象在遍历历史时显示为另一对象；调试旧提交而不改写原历史(注意推送需 --force-with-lease)。"""
    ),
    # ==================== git: g_adv ====================
    "git filter-repo": (
        """$ git filter-repo --path src/ --force
(重写整个历史, 仅保留 src/ 目录, 移除其他)
$ git filter-repo --replace-text secrets.txt""",
        """`git filter-repo` 重写历史的现代工具(比 filter-branch 快且安全)；可清洗大文件/密钥、仅留子目录。会改所有提交哈希。"""
    ),
    "git filter-branch": (
        """$ git filter-branch --tree-filter 'rm -f secrets' HEAD
(逐提交执行删除, 重写历史; 已不推荐)""",
        """`git filter-branch` 旧式历史重写(删除某文件/改作者等)；功能强但慢且易错，**新项目优先用 filter-repo**。"""
    ),
    "git subtree": (
        """$ git subtree add --prefix=vendor/lib https://.../lib main
(把外部仓库作为子目录并入本仓库历史)
$ git subtree pull --prefix=vendor/lib main""",
        """`git subtree` 把另一仓库合并为子目录(区别于 submodule，无独立 .gitmodules)；`pull` 同步更新。单一仓库管理依赖用。"""
    ),
    "git sparse-checkout": (
        """$ git sparse-checkout init --cone
$ git sparse-checkout set src docs
(只检出 src/ 与 docs/ 目录, 其余不落地)""",
        """`git sparse-checkout` 只检出需要的目录(大仓提速)；`set src docs` 限定工作区仅含这两目录，减少文件数量。"""
    ),
    "git rerere": (
        """$ git config rerere.enabled true
(启用"重用记录的冲突解决方案")
(下次相同冲突自动复用上次解法)""",
        """`git rerere`(reuse recorded resolution) 记录你解决过的冲突，重演时自动套用；频繁 rebase/merge 时省去重复解冲突。"""
    ),
    "git instaweb": (
        """$ git instaweb -d webrick
(启动本地 Web 服务浏览仓库, 默认 http://127.0.0.1:1234)""",
        """`git instaweb` 起一个本地 Web 界面浏览仓库(提交/差异)；临时查看仓库用，Ctrl+C 关闭。"""
    ),
    "git credential": (
        """$ git credential fill
protocol=https
host=github.com
(回显并缓存该主机的凭据, 免去重复输入密码)""",
        """`git credential` 管理凭据助手(填充/存储/清除)；`fill` 按协议主机返回账号密码，配合缓存避免反复输入。"""
    ),
    "git fast-export": (
        """$ git fast-export main > main.fe
(把 main 分支导出为可读的流式格式)""",
        """`git fast-export` 将提交历史导出为流格式(便于迁移/转换)；`git fast-import` 可再导入，跨系统搬家用。"""
    ),
    "git fast-import": (
        """$ git fast-import < main.fe
(从流格式快速重建仓库历史)""",
        """`git fast-import` 从 fast-export 生成的流**批量重建**提交/分支；大数据量迁移比逐条 commit 快得多。"""
    ),
    # ==================== git: g_transport ====================
    "git daemon": (
        """$ git daemon --base-path=/srv/git --export-all
(启动 Git 协议守护进程, 供 git:// 克隆访问)""",
        """`git daemon` 提供 `git://` 只读协议服务；`--export-all` 导出目录下所有仓库，局域网共享用。"""
    ),
    "git upload-pack": (
        """$ git upload-pack /srv/git/repo
(服务端进程, 响应 clone/fetch 发送对象; 通常由守护进程/SSH 调起)""",
        """`git upload-pack` 服务端组件，处理客户端的 clone/fetch，打包并发送对象；通常经 git daemon 或 SSH 自动触发。"""
    ),
    "git receive-pack": (
        """$ git receive-pack /srv/git/repo
(服务端进程, 接收 push 并写入对象/更新引用)""",
        """`git receive-pack` 服务端组件，接收客户端的 push、写入对象并更新分支引用；push 时由远程自动调用。"""
    ),
    "git http-backend": (
        """$ git http-backend
(CGI 程序, 使普通 Web 服务器经 HTTP/HTTPS 提供 Git 服务)""",
        """`git http-backend` 作为 CGI 运行，让 Apache/Nginx 通过 HTTP(S) 提供 Git 读写；无 SSH 环境下的标准部署方式。"""
    ),
    "git send-pack": (
        """$ git send-pack ssh://host/repo main
(底层把本地引用/对象推送到远端, 被 git push 调用)""",
        """`git send-pack` 是 `git push` 的底层实现，建立连接、协商并推送对象与引用；一般用 push 即可。"""
    ),
    "git shell": (
        """$ git shell -c 'git-receive-pack \"/srv/git/repo\"'
(受限登录 shell, 仅允许 Git 操作, 用作 SSH 账号的登录 shell)""",
        """`git shell` 作为受限 shell 分配给仅做 Git 的账号；只能跑 Git 服务命令，无法获得普通 shell，提升安全。"""
    ),
    "git upload-archive": (
        """$ git upload-archive /srv/git/repo
(响应 git archive --remote, 经协议打包远端仓库)""",
        """`git upload-archive` 服务端组件，处理 `git archive --remote` 请求，把远端指定提交打包传回客户端。"""
    ),
}
