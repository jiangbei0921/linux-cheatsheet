window.COMMAND_DATA = {
  "categories": [
    {
      "id": "file",
      "name": "文件与目录操作",
      "group": "linux"
    },
    {
      "id": "view",
      "name": "文件查看",
      "group": "linux"
    },
    {
      "id": "text",
      "name": "文本处理",
      "group": "linux"
    },
    {
      "id": "perm",
      "name": "文件权限与属性",
      "group": "linux"
    },
    {
      "id": "user",
      "name": "用户与用户组",
      "group": "linux"
    },
    {
      "id": "proc",
      "name": "进程管理",
      "group": "linux"
    },
    {
      "id": "disk",
      "name": "磁盘与文件系统",
      "group": "linux"
    },
    {
      "id": "net",
      "name": "网络",
      "group": "linux"
    },
    {
      "id": "archive",
      "name": "压缩与归档",
      "group": "linux"
    },
    {
      "id": "sys",
      "name": "系统信息与监控",
      "group": "linux"
    },
    {
      "id": "power",
      "name": "关机与系统控制",
      "group": "linux"
    },
    {
      "id": "pkg",
      "name": "软件包管理",
      "group": "linux"
    },
    {
      "id": "kernel",
      "name": "内核模块",
      "group": "linux"
    },
    {
      "id": "shell",
      "name": "Shell 内建命令",
      "group": "linux"
    },
    {
      "id": "editor",
      "name": "编辑器与工具",
      "group": "linux"
    },
    {
      "id": "vim",
      "name": "Vim 编辑器",
      "group": "linux"
    },
    {
      "id": "g_config",
      "name": "仓库与配置",
      "group": "git"
    },
    {
      "id": "g_commit",
      "name": "暂存与提交",
      "group": "git"
    },
    {
      "id": "g_view",
      "name": "查看与比较",
      "group": "git"
    },
    {
      "id": "g_branch",
      "name": "分支与合并",
      "group": "git"
    },
    {
      "id": "g_remote",
      "name": "远程协作",
      "group": "git"
    },
    {
      "id": "g_undo",
      "name": "撤销与重置",
      "group": "git"
    },
    {
      "id": "g_patch",
      "name": "补丁与邮件",
      "group": "git"
    },
    {
      "id": "g_debug",
      "name": "调试",
      "group": "git"
    },
    {
      "id": "g_maint",
      "name": "维护",
      "group": "git"
    },
    {
      "id": "g_other",
      "name": "脚本与其他",
      "group": "git"
    },
    {
      "id": "g_plumb",
      "name": "底层命令 plumbing",
      "group": "git"
    },
    {
      "id": "g_adv",
      "name": "进阶工作流",
      "group": "git"
    },
    {
      "id": "g_transport",
      "name": "传输与服务",
      "group": "git"
    }
  ],
  "commands": [
    {
      "name": "ls",
      "category": "file",
      "description": "列出目录内容。配合 -l 显示权限、大小与时间，配合 -a 包含隐藏文件，是日常浏览文件最常用的命令。",
      "keywords": [
        "列出",
        "目录",
        "文件列表",
        "ls"
      ],
      "examples": [
        {
          "cmd": "ls -la",
          "desc": "长格式显示全部文件（含隐藏文件）"
        },
        {
          "cmd": "ls -lh",
          "desc": "以人类可读大小显示"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "默认不显示隐藏文件（以 . 开头），需加 -a",
      "compare": "ls 列目录；ll 多为 ls -l 别名",
      "options": [
        {
          "flag": "-l",
          "default": "关闭",
          "desc": "以长格式输出，显示权限、链接数、属主、属组、大小、时间。适用于确认权限与属主。默认输出为按列紧凑排列，仅含文件名。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "显示全部条目，含以 . 开头的隐藏文件及 . 与 .. 两个特殊目录。适用于检查配置文件。边界：会让目录数量看起来多出 2 条。"
        },
        {
          "flag": "-A, --almost-all",
          "default": "关闭",
          "desc": "同 -a 但不显示 . 与 ..。适用于脚本中统计真实条目数。与 -a 同时给出时后出现者生效。"
        },
        {
          "flag": "-h, --human-readable",
          "default": "关闭",
          "desc": "大小以 K/M/G 为单位显示。仅在配合 -l 或 -s 时有效，单独使用无任何效果。"
        },
        {
          "flag": "-t",
          "default": "按名称排序",
          "desc": "按修改时间排序，最新的在前。适用于找刚改过的文件。配合 -r 可让最旧的在前。"
        },
        {
          "flag": "-S",
          "default": "按名称排序",
          "desc": "按文件大小排序，最大的在前。适用于排查大文件。目录本身大小不代表其内容总量。"
        },
        {
          "flag": "-r, --reverse",
          "default": "关闭",
          "desc": "反转当前排序结果。它不独立排序，只翻转 -t/-S 或默认字典序的结果。"
        },
        {
          "flag": "-R, --recursive",
          "default": "关闭",
          "desc": "递归列出所有子目录内容。适用于查看目录树。边界：深层目录可能输出极多，建议配合 less。"
        },
        {
          "flag": "-d, --directory",
          "default": "关闭",
          "desc": "只列出目录自身而非其内容。适用于查看目录本身的权限，如 ls -ld /tmp。"
        },
        {
          "flag": "-i, --inode",
          "default": "关闭",
          "desc": "显示 inode 号。适用于判断两个路径是否为同一硬链接。"
        },
        {
          "flag": "-1",
          "default": "终端下多列",
          "desc": "每行只输出一个名称。管道或重定向时本就是该行为，显式指定用于脚本可读性。"
        },
        {
          "flag": "--color=<when>",
          "default": "多数发行版为 auto",
          "desc": "着色时机，取值 always/auto/never。auto 表示仅输出到终端时着色。重定向到文件时用 always 会写入转义码。"
        }
      ],
      "sample": {
        "output": "$ ls -lh\ntotal 48K\n-rw-r--r-- 1 user user  12K Aug  4 10:21 report.txt\n-rwxr-xr-x 1 user user 3.2K Aug  4 09:10 run.sh\ndrwxr-xr-x 2 user user 4.0K Aug  3 22:05 docs",
        "explain": "第1行 `$ ls -lh` 为执行的命令（-l 长格式、-h 人类可读大小）。\n第2行 `total 48K`：目录内文件占用的磁盘块合计约 48KB。\n第3行首字符 - 表示普通文件；`rw-r--r--` 为权限（属主读写、组与其他只读）；`1` 是硬链接数；`user user` 是属主与属组；`12K` 为人类可读大小；`Aug 4 10:21` 为最后修改时间；`report.txt` 是文件名。\n第4行 `rwxr-xr-x` 含 x，说明 run.sh 可执行。\n第5行首字符 d 表示 docs 是目录。"
      }
    },
    {
      "name": "cd",
      "category": "file",
      "description": "切换当前工作目录。cd ~ 回主目录，cd - 回到上一次所在目录，cd .. 进入上级目录。",
      "keywords": [
        "切换",
        "目录",
        "cd"
      ],
      "examples": [
        {
          "cmd": "cd ~",
          "desc": "回到家目录"
        },
        {
          "cmd": "cd -",
          "desc": "回到上次所在目录"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-",
          "default": "无",
          "desc": "切换到上一次所在目录，并打印新路径。适用于两个目录间来回切换。连续执行会在两者之间往返。"
        },
        {
          "flag": "-P",
          "default": "关闭",
          "desc": "遇到符号链接时进入其真实物理路径。适用于需要真实路径的场景。此后 pwd 显示解析后的路径。"
        },
        {
          "flag": "-L",
          "default": "开启",
          "desc": "遇到符号链接时保留逻辑路径（默认行为）。与 -P 互斥，同时给出时后者生效。"
        },
        {
          "flag": "（无参数）",
          "default": "$HOME",
          "desc": "不带参数时回到当前用户家目录，等价于 cd ~。若 HOME 未设置则报错。"
        }
      ],
      "sample": {
        "output": "$ pwd\n/home/user\n$ cd projects\n$ pwd\n/home/user/projects",
        "explain": "前两条展示初始位置 `/home/user`。\n`cd projects` 切换到当前目录下的 projects 子目录。\n最后 `pwd` 显示新位置 `/home/user/projects`，证明目录已切换。"
      }
    },
    {
      "name": "pwd",
      "category": "file",
      "description": "显示当前所在目录的绝对路径，常用于在脚本或终端中确认自己所处的确切位置。",
      "keywords": [
        "当前目录",
        "路径",
        "pwd"
      ],
      "examples": [
        {
          "cmd": "pwd",
          "desc": "打印工作目录"
        },
        {
          "cmd": "pwd -P",
          "desc": "解析符号链接后的真实路径"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-L",
          "default": "开启",
          "desc": "输出逻辑路径，保留进入时经过的符号链接（默认）。与 shell 内建变量 PWD 一致。"
        },
        {
          "flag": "-P",
          "default": "关闭",
          "desc": "输出解析所有符号链接后的物理真实路径。适用于脚本中需要唯一路径标识时。"
        }
      ],
      "sample": {
        "output": "$ pwd\n/home/user/projects\n$ pwd -P\n/real/path/to/projects",
        "explain": "第1行 `pwd` 显示当前工作目录的逻辑路径。\n第2行 `pwd -P` 解析符号链接后输出真实物理路径（当当前目录经软链接进入时，两者可能不同）。"
      }
    },
    {
      "name": "cp",
      "category": "file",
      "description": "复制文件或目录。复制目录需加 -r，加 -i 可在覆盖前询问，避免误删已有文件。",
      "keywords": [
        "复制",
        "拷贝",
        "cp"
      ],
      "examples": [
        {
          "cmd": "cp a.txt b.txt",
          "desc": "复制文件"
        },
        {
          "cmd": "cp -r src/ dst/",
          "desc": "递归复制目录"
        },
        {
          "cmd": "cp -a src/ dst/",
          "desc": "归档复制保留属性"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "复制目录必须加 -r；目标同名会被静默覆盖，建议 -i 或 -n",
      "compare": "cp 复制出独立副本，源文件保留；mv 是移动/改名，源位置不再有该文件。大量数据跨盘移动注意中断风险。",
      "options": [
        {
          "flag": "-r, -R, --recursive",
          "default": "关闭",
          "desc": "递归复制目录及其全部内容。复制目录时必须指定，否则报错并跳过。"
        },
        {
          "flag": "-a, --archive",
          "default": "关闭",
          "desc": "归档模式，等价于 -dR --preserve=all，保留权限、属主、时间戳与链接。适用于备份迁移。需要 root 才能完整保留属主。"
        },
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "覆盖目标前逐个询问。适用于手动操作防误覆盖。在脚本中因无人应答会挂起。"
        },
        {
          "flag": "-n, --no-clobber",
          "default": "关闭",
          "desc": "目标已存在时跳过且不报错。与 -i 互斥，同时给出时后出现者生效。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "目标无法打开时先删除再复制。注意它不能覆盖 -i 的询问行为。"
        },
        {
          "flag": "-u, --update",
          "default": "关闭",
          "desc": "仅当源比目标新或目标不存在时才复制。适用于增量同步小目录。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "保留修改时间、访问时间、权限与属主。是 --preserve=mode,ownership,timestamps 的简写。"
        },
        {
          "flag": "-l, --link",
          "default": "关闭",
          "desc": "创建硬链接而非复制内容。仅在同一文件系统内有效，跨设备会失败。"
        },
        {
          "flag": "-s, --symbolic-link",
          "default": "关闭",
          "desc": "创建符号链接而非复制。源路径须为绝对路径，否则链接可能失效。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "打印每个被复制的文件。适用于确认实际复制范围。"
        },
        {
          "flag": "--preserve=<属性>",
          "default": "mode,ownership,timestamps",
          "desc": "指定保留的属性列表，可选 mode/ownership/timestamps/links/xattr/all。"
        }
      ],
      "sample": {
        "output": "$ cp -i a.txt b.txt\ncp: overwrite 'b.txt'? n\n$ cp -r src/ dst/",
        "explain": "第1行 `cp -i a.txt b.txt`：因目标已存在，-i 触发询问 `overwrite 'b.txt'?`，输入 n 取消覆盖，保留原文件。\n第2行 `cp -r src/ dst/`：递归复制整个目录（复制目录必须加 -r）。"
      }
    },
    {
      "name": "mv",
      "category": "file",
      "description": "移动或重命名文件/目录。同分区内重命名本质上是改路径，不会重写数据，速度很快。",
      "keywords": [
        "移动",
        "重命名",
        "mv"
      ],
      "examples": [
        {
          "cmd": "mv a.txt b.txt",
          "desc": "重命名文件"
        },
        {
          "cmd": "mv f.txt dir/",
          "desc": "移动到目录"
        },
        {
          "cmd": "mv -i src dst",
          "desc": "覆盖前询问"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "跨文件系统移动实为复制后删除，大文件较慢；目标同名会被静默覆盖，建议加 -i",
      "compare": "mv 同分区只改路径（快、不复制数据），跨文件系统则实际复制后删源；cp 始终复制出独立副本，源不受影响。",
      "options": [
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "覆盖目标前询问。适用于交互操作。默认覆盖是静默的，原文件不可恢复。"
        },
        {
          "flag": "-n, --no-clobber",
          "default": "关闭",
          "desc": "目标存在时不覆盖并静默跳过。与 -i 互斥，后出现者生效。"
        },
        {
          "flag": "-f, --force",
          "default": "开启（默认即不提示）",
          "desc": "覆盖前不做任何提示。用于显式抵消先前的 -i 或 alias 中的 -i。"
        },
        {
          "flag": "-u, --update",
          "default": "关闭",
          "desc": "仅当源比目标新或目标不存在时才移动。适用于合并两份目录。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "打印每一步移动操作。适用于批量重命名时核对结果。"
        },
        {
          "flag": "-b, --backup",
          "default": "关闭",
          "desc": "覆盖前为目标创建备份，默认加 ~ 后缀。可配合 --suffix 自定义后缀。"
        },
        {
          "flag": "-t <目录>",
          "default": "无",
          "desc": "显式指定目标目录，使源文件参数可放在最后。适用于配合 xargs 批量移动。"
        },
        {
          "flag": "-T, --no-target-directory",
          "default": "关闭",
          "desc": "把目标当作普通文件而非目录。可避免目标恰为同名目录时误移入其中。"
        }
      ],
      "sample": {
        "output": "$ mv old.txt new.txt\n$ ls\nnew.txt\n$ mv new.txt backup/",
        "explain": "第1行将 old.txt 重命名为 new.txt（同分区内仅改路径，极快）。\n第2行 ls 确认旧名消失、新名出现。\n第3行把 new.txt 移动到 backup/ 子目录。"
      }
    },
    {
      "name": "rm",
      "category": "file",
      "description": "删除文件或目录。-r 递归删除目录，-f 强制且不询问；删除不可恢复，执行前务必确认路径。",
      "keywords": [
        "删除",
        "移除",
        "rm"
      ],
      "examples": [
        {
          "cmd": "rm file.txt",
          "desc": "删除文件"
        },
        {
          "cmd": "rm -rf dir",
          "desc": "递归强制删除目录（危险）"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "rm -rf / 或 rm -rf ~ 会销毁系统/家目录数据，务必先确认路径",
      "compare": null,
      "options": [
        {
          "flag": "-r, -R, --recursive",
          "default": "关闭",
          "desc": "递归删除目录及全部内容。删除目录必须指定。这是造成误删的主要选项。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "忽略不存在的文件，不做任何询问，且退出码为 0。会掩盖路径写错的错误。"
        },
        {
          "flag": "-i",
          "default": "关闭",
          "desc": "每删除一个文件都询问。适用于清理不确定的文件。"
        },
        {
          "flag": "-I",
          "default": "关闭",
          "desc": "删除超过 3 个文件或递归删除时只询问一次。比 -i 干扰小，推荐日常使用。"
        },
        {
          "flag": "-d, --dir",
          "default": "关闭",
          "desc": "删除空目录。等价于 rmdir，但可与文件参数混用。目录非空时报错。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "打印每个被删除的路径。建议与 -r 同用以便核对删除范围。"
        },
        {
          "flag": "--preserve-root",
          "default": "开启",
          "desc": "拒绝对 / 递归操作（默认）。用 --no-preserve-root 可解除，属极危险操作。"
        },
        {
          "flag": "--one-file-system",
          "default": "关闭",
          "desc": "递归时跳过位于其他文件系统上的目录。适用于避免误删挂载点内容。"
        }
      ],
      "sample": {
        "output": "$ rm -i note.txt\nrm: remove regular file 'note.txt'? y\n$ rm -rf build/",
        "explain": "第1行 `rm -i` 删除前询问确认，输入 y 才真正删除，降低误删风险。\n第2行 `rm -rf build/`：`-r` 递归、`-f` 强制不询问，直接删除整个目录——此组合极具破坏性，路径务必先确认。"
      }
    },
    {
      "name": "mkdir",
      "category": "file",
      "description": "创建新目录。-p 可一次创建多级缺失的父目录，避免逐级手动建立。",
      "keywords": [
        "创建目录",
        "新建文件夹",
        "mkdir"
      ],
      "examples": [
        {
          "cmd": "mkdir foo",
          "desc": "创建单级目录"
        },
        {
          "cmd": "mkdir -p a/b/c",
          "desc": "递归创建多级目录"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "父目录不存在时需 -p，否则失败",
      "compare": null,
      "options": [
        {
          "flag": "-p, --parents",
          "default": "关闭",
          "desc": "按需创建各级父目录，且目录已存在时不报错。适用于脚本中保证路径存在。"
        },
        {
          "flag": "-m <权限>, --mode=<权限>",
          "default": "0777 减去 umask",
          "desc": "创建时直接设定权限。适用于创建敏感目录如 -m 700。注意 -p 创建的中间父目录不套用该权限。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "为每个创建的目录打印一条消息。可确认哪些层级是新建的。"
        }
      ],
      "sample": {
        "output": "$ mkdir -p a/b/c\n$ ls -d a/b/c\na/b/c",
        "explain": "第1行 `mkdir -p a/b/c`：一次性递归创建多级目录，父目录缺失时自动补建。\n第2行 `ls -d` 确认最深目录已存在。"
      }
    },
    {
      "name": "rmdir",
      "category": "file",
      "description": "删除空目录。目录内有内容时会拒绝，需要连同内容删除时用 rm -r。",
      "keywords": [
        "删除空目录",
        "rmdir"
      ],
      "examples": [
        {
          "cmd": "rmdir empty/",
          "desc": "删除空目录"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "rmdir 仅删空目录；rm -r 可删非空目录",
      "options": [
        {
          "flag": "-p, --parents",
          "default": "关闭",
          "desc": "删除目录后，若父目录也变空则继续向上删除。遇到非空父目录时停止。"
        },
        {
          "flag": "--ignore-fail-on-non-empty",
          "default": "关闭",
          "desc": "目录非空导致的失败不视为错误。适用于脚本中批量清理。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "输出每一步删除动作。"
        }
      ],
      "sample": {
        "output": "$ rmdir empty_dir\n$ rmdir full_dir\nrmdir: failed to remove 'full_dir': Directory not empty",
        "explain": "第1行删除一个空目录成功（无输出即成功）。\n第2行 `rmdir full_dir` 因目录非空而失败并提示 `Directory not empty`；要连同内容删除需用 `rm -r`。"
      }
    },
    {
      "name": "touch",
      "category": "file",
      "description": "创建空文件，或更新已有文件的访问/修改时间戳；常用于占位或刷新缓存时间。",
      "keywords": [
        "创建文件",
        "时间戳",
        "touch"
      ],
      "examples": [
        {
          "cmd": "touch new.txt",
          "desc": "新建空文件"
        },
        {
          "cmd": "touch -c old.txt",
          "desc": "仅更新时间不新建"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "只更新访问时间 atime，保持修改时间不变。"
        },
        {
          "flag": "-m",
          "default": "关闭",
          "desc": "只更新修改时间 mtime。不指定 -a/-m 时两者都更新。"
        },
        {
          "flag": "-c, --no-create",
          "default": "关闭",
          "desc": "文件不存在时不创建，仅对已存在文件更新时间。"
        },
        {
          "flag": "-d <时间>, --date=<时间>",
          "default": "当前时间",
          "desc": "使用自然语言时间字符串，如 \"2 hours ago\"、\"2026-01-01\"。"
        },
        {
          "flag": "-t <[[CC]YY]MMDDhhmm[.ss]>",
          "default": "当前时间",
          "desc": "以固定数字格式指定时间戳。适用于精确构造测试文件时间。"
        },
        {
          "flag": "-r <参照文件>, --reference",
          "default": "无",
          "desc": "使用参照文件的时间戳。适用于让多个文件时间保持一致。"
        }
      ],
      "sample": {
        "output": "$ touch newfile.log\n$ ls -l newfile.log\n-rw-r--r-- 1 user user 0 Aug  4 11:00 newfile.log",
        "explain": "第1行 `touch newfile.log` 创建一个大小为 0 的空文件（若已存在则仅刷新时间戳）。\n第2行 ls 显示该文件已生成，大小为 0 字节，时间更新为当前。"
      }
    },
    {
      "name": "find",
      "category": "file",
      "description": "按名称、类型、大小、时间等条件递归查找文件，功能极强，常与 -exec 联动处理命中结果。",
      "keywords": [
        "查找文件",
        "搜索",
        "find"
      ],
      "examples": [
        {
          "cmd": "find . -name '*.py'",
          "desc": "按名查找"
        },
        {
          "cmd": "find . -mtime -7",
          "desc": "查找 7 天内修改的文件"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "路径放最前；-delete 误用会删文件，先不加该参数确认",
      "compare": null,
      "options": [
        {
          "flag": "-name <模式>",
          "default": "无",
          "desc": "按文件名匹配，区分大小写，支持 * ? [] 通配。模式含通配符时须加引号，否则会被 shell 提前展开。"
        },
        {
          "flag": "-iname <模式>",
          "default": "无",
          "desc": "同 -name 但忽略大小写。适用于不确定命名习惯时。"
        },
        {
          "flag": "-type <类型>",
          "default": "全部类型",
          "desc": "按类型过滤：f 普通文件、d 目录、l 符号链接、s 套接字、b/c 设备。"
        },
        {
          "flag": "-size <大小>",
          "default": "无",
          "desc": "按大小过滤，+ 表示大于、- 表示小于；单位 c 字节、k、M、G。注意不带单位时以 512 字节块计。"
        },
        {
          "flag": "-mtime <天数>",
          "default": "无",
          "desc": "按修改时间过滤，+7 表示 7 天前，-7 表示 7 天内。-mmin 以分钟为单位。"
        },
        {
          "flag": "-maxdepth <层数>",
          "default": "无限",
          "desc": "限制递归深度，1 表示仅当前目录。须放在其他判断条件之前，否则 find 会警告。"
        },
        {
          "flag": "-mindepth <层数>",
          "default": "0",
          "desc": "跳过浅于指定层数的结果。常用 1 来排除起始目录自身。"
        },
        {
          "flag": "-delete",
          "default": "关闭",
          "desc": "直接删除匹配项，不可恢复。必须置于条件之后，否则会先删空再匹配。建议先用 -print 验证。"
        },
        {
          "flag": "-exec <命令> {} \\;",
          "default": "无",
          "desc": "对每个结果执行一次命令。{} 为占位符，结尾 \\; 必须转义。逐个执行，量大时慢。"
        },
        {
          "flag": "-exec <命令> {} +",
          "default": "无",
          "desc": "把多个结果拼成一条命令执行，效率远高于 \\;。要求命令支持多参数。"
        },
        {
          "flag": "-empty",
          "default": "关闭",
          "desc": "匹配空文件或空目录。适用于清理无效文件。"
        },
        {
          "flag": "-perm <模式>",
          "default": "无",
          "desc": "按权限过滤，-perm 644 精确匹配，-perm -644 表示至少包含这些权限。"
        },
        {
          "flag": "-user <用户> / -group <组>",
          "default": "无",
          "desc": "按属主或属组过滤。适用于清理特定用户遗留文件。"
        },
        {
          "flag": "-prune",
          "default": "关闭",
          "desc": "剪枝，跳过匹配的目录不再深入。常与 -path 配合排除 node_modules 等目录。"
        },
        {
          "flag": "-print0",
          "default": "-print",
          "desc": "以 NUL 分隔输出。必须配合 xargs -0，用于安全处理含空格的文件名。"
        }
      ],
      "sample": {
        "output": "$ find . -name '*.log' -size +1M\n./var/app.log\n./cache/old.log",
        "explain": "命令在 `.` 当前目录递归查找：`-name '*.log'` 匹配扩展名，`-size +1M` 仅保留大于 1MB 的文件。\n输出两行即命中结果；可继续用 `-exec` 对它们操作。"
      }
    },
    {
      "name": "ln",
      "category": "file",
      "description": "创建链接。-s 建软链接（可跨文件系统、指向路径），不加则为硬链接（共享同一 inode）。",
      "keywords": [
        "链接",
        "软链接",
        "硬链接",
        "ln"
      ],
      "examples": [
        {
          "cmd": "ln -s target link",
          "desc": "创建软链接"
        },
        {
          "cmd": "ln f hard",
          "desc": "创建硬链接"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "软链接用 -s；源路径建议用绝对路径，否则移动后失效",
      "compare": null,
      "options": [
        {
          "flag": "-s, --symbolic",
          "default": "关闭（默认创建硬链接）",
          "desc": "创建符号链接。可跨文件系统、可指向目录，但源被删除后链接失效。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "目标已存在时先删除再创建。注意会静默覆盖同名文件。"
        },
        {
          "flag": "-n, --no-dereference",
          "default": "关闭",
          "desc": "当目标是指向目录的符号链接时，替换该链接本身而非写入其内部。更新软链时必备。"
        },
        {
          "flag": "-r, --relative",
          "default": "关闭",
          "desc": "创建相对路径的符号链接。适用于整个目录树可能被整体移动的场景。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "打印创建的链接关系。"
        },
        {
          "flag": "-T, --no-target-directory",
          "default": "关闭",
          "desc": "始终把目标视为普通文件，避免误创建到同名目录内部。"
        }
      ],
      "sample": {
        "output": "$ ln -s /opt/app/app bin/app\n$ ls -l bin/app\nlrwxrwxrwx 1 user user 13 Aug  4 11:05 bin/app -> /opt/app/app",
        "explain": "第1行 `ln -s` 创建指向 /opt/app/app 的软链接 bin/app。\n第2行首字符 l 表示链接，`->` 后显示其指向的真实路径；软链接可跨文件系统、可指向目录。"
      }
    },
    {
      "name": "readlink",
      "category": "file",
      "description": "显示软链接指向的真实路径，会解析中间的链接链，排查链接错乱时很有用。",
      "keywords": [
        "链接指向",
        "readlink"
      ],
      "examples": [
        {
          "cmd": "readlink link",
          "desc": "打印链接目标"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ readlink bin/app\n/opt/app/app",
        "explain": "输出软链接 bin/app 指向的目标路径；用于快速查看链接去向、排查链接错乱。"
      }
    },
    {
      "name": "realpath",
      "category": "file",
      "description": "把相对路径、含 .. 的路径解析为规范的绝对路径，脚本中提取文件真实位置很方便。",
      "keywords": [
        "绝对路径",
        "realpath"
      ],
      "examples": [
        {
          "cmd": "realpath f.txt",
          "desc": "输出规范绝对路径"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ realpath ../conf/app.conf\n/home/user/conf/app.conf",
        "explain": "将相对路径 `../conf/app.conf` 解析为规范绝对路径，自动展开 .. 与符号链接，便于脚本获取文件真实位置。"
      }
    },
    {
      "name": "basename",
      "category": "file",
      "description": "从完整路径中提取文件名部分（去掉目录前缀），常用于脚本拆分路径。",
      "keywords": [
        "文件名",
        "basename"
      ],
      "examples": [
        {
          "cmd": "basename /a/b/c.txt",
          "desc": "得到 c.txt"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ basename /home/user/a/b.txt\nb.txt\n$ basename /home/user/a/b.txt .txt\nb",
        "explain": "第1行提取路径末端的文件名 `b.txt`。\n第2行额外去掉后缀 `.txt`，得到纯名 `b`，常用于脚本拆分文件名与扩展名。"
      }
    },
    {
      "name": "dirname",
      "category": "file",
      "description": "从完整路径中提取目录部分（去掉文件名），常与 basename 配合处理路径。",
      "keywords": [
        "目录名",
        "dirname"
      ],
      "examples": [
        {
          "cmd": "dirname /a/b/c.txt",
          "desc": "得到 /a/b"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ dirname /home/user/a/b.txt\n/home/user/a",
        "explain": "提取路径中的目录部分（去掉文件名），返回 `/home/user/a`，常与 basename 配合处理路径。"
      }
    },
    {
      "name": "tree",
      "category": "file",
      "description": "以树状图展示目录结构。-L 限制深度，-a 包含隐藏文件，快速总览项目布局。",
      "keywords": [
        "树状",
        "目录结构",
        "tree"
      ],
      "examples": [
        {
          "cmd": "tree -L 2",
          "desc": "显示两层"
        },
        {
          "cmd": "tree -a",
          "desc": "包含隐藏文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-L <层数>",
          "default": "无限",
          "desc": "限制显示深度。适用于大型项目只看顶层结构。取值须为正整数。"
        },
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "显示隐藏文件。默认忽略以 . 开头的条目。"
        },
        {
          "flag": "-d",
          "default": "关闭",
          "desc": "只显示目录，忽略文件。适用于快速了解目录组织。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "每个条目显示完整相对路径。适用于复制路径。"
        },
        {
          "flag": "-I <模式>",
          "default": "无",
          "desc": "排除匹配的条目，多个模式用 | 分隔，如 -I 'node_modules|.git'。"
        },
        {
          "flag": "-P <模式>",
          "default": "无",
          "desc": "只显示匹配的文件，目录结构仍保留。"
        },
        {
          "flag": "--du -h",
          "default": "关闭",
          "desc": "统计并以可读单位显示各目录累计大小。会显著增加扫描耗时。"
        },
        {
          "flag": "-C",
          "default": "随环境",
          "desc": "强制彩色输出。管道时默认关闭颜色。"
        }
      ],
      "sample": {
        "output": "$ tree -L 2 -a\n.\n├── .git\n├── src\n│   ├── main.py\n│   └── util.py\n└── README.md",
        "explain": "以树状展示目录结构；`-L 2` 限制显示深度为 2 层，`-a` 包含隐藏文件（如 .git）。\n输出直观呈现项目层级，适合快速总览布局。"
      }
    },
    {
      "name": "stat",
      "category": "file",
      "description": "显示文件或文件系统的详细元数据：大小、权限、inode、三个时间戳等。",
      "keywords": [
        "文件状态",
        "stat"
      ],
      "examples": [
        {
          "cmd": "stat file.txt",
          "desc": "查看大小/权限/时间"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-c <格式>, --format",
          "default": "完整多行输出",
          "desc": "按指定格式输出，如 %s 大小、%n 名称、%U 属主、%a 八进制权限、%y 修改时间。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "显示文件所在文件系统的信息而非文件本身。适用于查看剩余 inode。"
        },
        {
          "flag": "-L, --dereference",
          "default": "关闭",
          "desc": "跟随符号链接，显示目标文件信息。默认显示链接自身的信息。"
        },
        {
          "flag": "-t, --terse",
          "default": "关闭",
          "desc": "以单行紧凑格式输出全部字段。适用于脚本解析。"
        },
        {
          "flag": "--printf=<格式>",
          "default": "无",
          "desc": "同 -c 但不自动换行，支持 \\n \\t 转义。"
        }
      ],
      "sample": {
        "output": "$ stat report.txt\n  File: report.txt\n  Size: 12288      Blocks: 24  IO Block: 4096  regular file\nAccess: 2026-08-04 10:21:00\nModify: 2026-08-04 10:21:00\nChange: 2026-08-04 10:21:05\n",
        "explain": "`File` 为文件名；`Size` 12288 字节，`Blocks` 占用磁盘块数；`regular file` 表示普通文件。\n`Access` 最后访问时间、`Modify` 内容最后修改时间、`Change` 元数据（如权限）最后变更时间——三者含义不同。"
      }
    },
    {
      "name": "file",
      "category": "file",
      "description": "探测文件实际类型（文本/二进制/压缩/可执行），不被扩展名误导，适合识别未知文件。",
      "keywords": [
        "文件类型",
        "file"
      ],
      "examples": [
        {
          "cmd": "file a.bin",
          "desc": "识别为 ELF/文本等"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-b, --brief",
          "default": "关闭",
          "desc": "只输出类型描述，不输出文件名前缀。适用于脚本取值。"
        },
        {
          "flag": "-i, --mime",
          "default": "关闭",
          "desc": "输出 MIME 类型，如 text/plain; charset=utf-8。适用于判断编码。"
        },
        {
          "flag": "-L, --dereference",
          "default": "关闭",
          "desc": "跟随符号链接检测目标文件。默认报告链接本身。"
        },
        {
          "flag": "-z",
          "default": "关闭",
          "desc": "尝试探测压缩包内部文件的类型。"
        },
        {
          "flag": "-f <列表文件>",
          "default": "无",
          "desc": "从文件中批量读取待检测路径，每行一个。"
        },
        {
          "flag": "-s",
          "default": "关闭",
          "desc": "读取块设备或字符设备内容。适用于识别磁盘分区上的文件系统。"
        }
      ],
      "sample": {
        "output": "$ file unknown.bin\nunknown.bin: PDF document, version 1.7\n$ file run.sh\nrun.sh: Bourne-Again shell script, ASCII text executable",
        "explain": "`file` 通过文件头魔数识别真实类型，不被扩展名误导。\n第1行显示 unknown.bin 实为 PDF 文档；第2行显示 run.sh 是 bash 脚本（文本可执行）。"
      }
    },
    {
      "name": "tee",
      "category": "file",
      "description": "从标准输入读取并同时输出到屏幕与一个/多个文件，常用于边查看边保存日志。",
      "keywords": [
        "分流输出",
        "tee"
      ],
      "examples": [
        {
          "cmd": "cmd | tee out.txt",
          "desc": "既显示又保存"
        },
        {
          "cmd": "cmd | tee -a out.txt",
          "desc": "追加保存"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "默认覆盖目标文件，追加需 -a",
      "compare": null,
      "options": [
        {
          "flag": "-a, --append",
          "default": "关闭（默认截断覆盖）",
          "desc": "追加到文件末尾而非覆盖。这是保留原有日志的关键选项。"
        },
        {
          "flag": "-i, --ignore-interrupts",
          "default": "关闭",
          "desc": "忽略中断信号 SIGINT。适用于长时间任务防止 Ctrl+C 丢失输出。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "对写入错误采取诊断而不立即退出。适用于写多个目标时容忍部分失败。"
        },
        {
          "flag": "（多个文件）",
          "default": "无",
          "desc": "可同时写入多个文件加标准输出。配合 sudo tee 可向无权限文件写入。"
        }
      ],
      "sample": {
        "output": "$ ls -l | tee out.txt\ntotal 4\n-rw-r--r-- ... a.txt\n$ cat out.txt\ntotal 4\n-rw-r--r-- ... a.txt",
        "explain": "`ls -l` 的输出既显示在屏幕，又被 `tee out.txt` 同时写入 out.txt。\n随后 `cat out.txt` 显示文件内容与屏幕一致，证明已落盘保存。"
      }
    },
    {
      "name": "pushd",
      "category": "file",
      "description": "将目录压入目录栈并切换过去，配合 popd 在多个目录间快速往返。",
      "keywords": [
        "目录栈",
        "pushd"
      ],
      "examples": [
        {
          "cmd": "pushd dir",
          "desc": "切换并压栈"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pushd /var/log\n/var/log ~\n$ dirs\n/var/log ~",
        "explain": "`pushd /var/log` 切换到 /var/log 并将其压入目录栈，输出栈内容（当前 + 原目录 ~）。\n`dirs` 列出目录栈，便于用 `popd` 返回。"
      }
    },
    {
      "name": "popd",
      "category": "file",
      "description": "弹出目录栈栈顶并切换回该目录，与 pushd 配合实现目录间的快速切换。",
      "keywords": [
        "目录栈",
        "popd"
      ],
      "examples": [
        {
          "cmd": "popd",
          "desc": "回到上一个目录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ dirs\n/var/log ~\n$ popd\n~",
        "explain": "`dirs` 显示栈顶为 /var/log。\n`popd` 弹出栈顶并切回原目录 ~，输出剩余栈（仅 ~）。"
      }
    },
    {
      "name": "eza",
      "category": "file",
      "description": "现代 ls 替代，带颜色、图标、Git 状态与树状视图，信息更直观美观。",
      "keywords": [
        "列表",
        "eza",
        "ls替代"
      ],
      "examples": [
        {
          "cmd": "eza -la",
          "desc": "长格式含隐藏文件"
        },
        {
          "cmd": "eza -T",
          "desc": "树状展示目录"
        },
        {
          "cmd": "eza -a --git-ignore",
          "desc": "含隐藏但忽略 Git 忽略项"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装；等价于增强版 ls，适合日常浏览",
      "compare": null,
      "options": [
        {
          "flag": "-l",
          "default": "关闭",
          "desc": "长格式输出。是 ls -l 的现代替代，默认带颜色与图标对齐。"
        },
        {
          "flag": "-a / -aa",
          "default": "关闭",
          "desc": "-a 显示隐藏文件；-aa 额外显示 . 与 ..。"
        },
        {
          "flag": "--tree",
          "default": "关闭",
          "desc": "以树状显示。配合 --level 限制深度，替代 tree 命令。"
        },
        {
          "flag": "--level=<n>, -L",
          "default": "无限",
          "desc": "树状模式下的最大深度。仅在 --tree 或 -R 时有效。"
        },
        {
          "flag": "--git",
          "default": "关闭",
          "desc": "显示每个文件的 Git 状态列。仅在 Git 仓库内有效。"
        },
        {
          "flag": "--icons",
          "default": "关闭",
          "desc": "显示文件类型图标。需要终端安装 Nerd Font，否则显示乱码。"
        },
        {
          "flag": "-s <字段>, --sort",
          "default": "name",
          "desc": "排序字段，可选 name/size/modified/created/extension。"
        },
        {
          "flag": "-h, --header",
          "default": "关闭",
          "desc": "长格式下显示列标题。"
        }
      ],
      "sample": {
        "output": "$ eza -l --icons\ndrwxr-xr-x  user 4.0k Aug 04 10:21  docs\n.rwxr-xr-x  user 3.2k Aug 04 09:10  run.sh",
        "explain": "`eza` 是 ls 的现代替代品，`-l` 长格式、`--icons` 显示图标。\n输出含权限、属主、大小、时间，并以图标区分文件类型，比传统 ls 更直观。"
      }
    },
    {
      "name": "fd",
      "category": "file",
      "description": "更简单快速的 find 替代，默认递归、彩色输出、智能大小写，并忽略隐藏目录与 .gitignore。",
      "keywords": [
        "查找",
        "fd",
        "find替代"
      ],
      "examples": [
        {
          "cmd": "fd '*.py'",
          "desc": "按名查找"
        },
        {
          "cmd": "fd -e rs src/",
          "desc": "按扩展名在 src 查找"
        },
        {
          "cmd": "fd -i pattern",
          "desc": "忽略大小写"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "默认递归且彩色输出；比 find 更直观，但需安装",
      "compare": null,
      "options": [
        {
          "flag": "-e <扩展名>",
          "default": "无",
          "desc": "按扩展名过滤，不需写点，如 -e md。可重复指定多个。"
        },
        {
          "flag": "-t <类型>, --type",
          "default": "全部",
          "desc": "类型过滤：f 文件、d 目录、l 链接、x 可执行、e 空文件。"
        },
        {
          "flag": "-H, --hidden",
          "default": "关闭",
          "desc": "包含隐藏文件。fd 默认跳过隐藏文件，这与 find 相反。"
        },
        {
          "flag": "-I, --no-ignore",
          "default": "关闭",
          "desc": "不遵循 .gitignore 规则。fd 默认会忽略被 git 忽略的文件。"
        },
        {
          "flag": "-x <命令>, --exec",
          "default": "无",
          "desc": "对每个结果并行执行命令，{} 为占位。比 find -exec 快很多。"
        },
        {
          "flag": "-X, --exec-batch",
          "default": "无",
          "desc": "把所有结果一次性传给命令，等价 find 的 {} +。"
        },
        {
          "flag": "-d <深度>, --max-depth",
          "default": "无限",
          "desc": "限制搜索深度。"
        },
        {
          "flag": "-g, --glob",
          "default": "正则模式",
          "desc": "改用 glob 通配语法而非默认的正则语法。"
        },
        {
          "flag": "-s, --case-sensitive",
          "default": "智能大小写",
          "desc": "强制区分大小写。默认为智能模式：全小写则忽略大小写。"
        }
      ],
      "sample": {
        "output": "$ fd config\nsrc/config.yaml\netc/app/config.json",
        "explain": "`fd` 是 find 的更快替代，默认递归搜索文件名。\n此处列出所有名为 config 的文件（含相对路径），忽略 .git 等隐藏目录。"
      }
    },
    {
      "name": "cat",
      "category": "view",
      "description": "查看或拼接文件内容并输出到终端，小文件快速浏览首选。",
      "keywords": [
        "查看文件",
        "拼接",
        "cat"
      ],
      "examples": [
        {
          "cmd": "cat f.txt",
          "desc": "打印全部内容"
        },
        {
          "cmd": "cat a b > c",
          "desc": "拼接两文件"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "大文件会刷屏，改用 less",
      "compare": null,
      "options": [
        {
          "flag": "-n, --number",
          "default": "关闭",
          "desc": "为所有输出行编号，从 1 开始。适用于定位报错行号。"
        },
        {
          "flag": "-b, --number-nonblank",
          "default": "关闭",
          "desc": "只为非空行编号。与 -n 同时给出时 -b 优先。"
        },
        {
          "flag": "-A, --show-all",
          "default": "关闭",
          "desc": "等价于 -vET，显示所有不可见字符。适用于排查行尾 CRLF 与制表符。"
        },
        {
          "flag": "-E, --show-ends",
          "default": "关闭",
          "desc": "在每行末尾显示 $。可发现意外的行尾空格。"
        },
        {
          "flag": "-T, --show-tabs",
          "default": "关闭",
          "desc": "把制表符显示为 ^I。适用于区分空格与 Tab。"
        },
        {
          "flag": "-s, --squeeze-blank",
          "default": "关闭",
          "desc": "把连续多个空行压缩为一个。"
        },
        {
          "flag": "-v",
          "default": "关闭",
          "desc": "显示非打印字符（除 Tab 与换行）。"
        }
      ],
      "sample": {
        "output": "$ cat a.txt\nline one\nline two\nline three",
        "explain": "`cat` 将文件内容原样输出到屏幕，按行依次显示 a.txt 的三行文本。\n适合查看短文件；大文件建议用 less 分页。"
      }
    },
    {
      "name": "less",
      "category": "view",
      "description": "分页查看文件，支持上下翻、搜索与跳转，大文件查看首选。",
      "keywords": [
        "分页查看",
        "less"
      ],
      "examples": [
        {
          "cmd": "less f.txt",
          "desc": "上下翻页查看"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "less 可上下翻；more 基本只能下翻",
      "options": [
        {
          "flag": "-N",
          "default": "关闭",
          "desc": "显示行号。大文件下开启会略微变慢。"
        },
        {
          "flag": "-S",
          "default": "关闭",
          "desc": "长行不折行，超出部分横向滚动。适用于查看宽表格或日志。"
        },
        {
          "flag": "-i",
          "default": "关闭",
          "desc": "搜索时忽略大小写；若搜索词含大写则自动区分。"
        },
        {
          "flag": "-F, --quit-if-one-screen",
          "default": "关闭",
          "desc": "内容不足一屏时直接输出并退出，行为类似 cat。"
        },
        {
          "flag": "-X",
          "default": "关闭",
          "desc": "退出后保留屏幕内容，不清屏。"
        },
        {
          "flag": "-R",
          "default": "关闭",
          "desc": "正确解释 ANSI 颜色转义序列。查看带颜色的日志时必备。"
        },
        {
          "flag": "+F",
          "default": "关闭",
          "desc": "启动后进入跟随模式，效果同 tail -f，按 Ctrl+C 退回浏览。"
        },
        {
          "flag": "+<行号>",
          "default": "1",
          "desc": "启动时直接跳转到指定行，如 +100。"
        }
      ],
      "sample": {
        "output": "$ less long.log\n(line 1 of file shown; press SPACE to page down, q to quit)\n...\n(long.log)",
        "explain": "`less` 进入分页浏览：显示一屏内容，空格下翻页、上下键滚动、`/` 搜索、`q` 退出。\n不加载整个文件到内存，适合查看大日志。底部状态显示文件名。"
      }
    },
    {
      "name": "more",
      "category": "view",
      "description": "逐屏查看文件内容（较老），space 翻页，q 退出。",
      "keywords": [
        "逐屏查看",
        "more"
      ],
      "examples": [
        {
          "cmd": "more f.txt",
          "desc": "逐屏显示"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-<数字>",
          "default": "屏幕高度",
          "desc": "指定每屏显示的行数。"
        },
        {
          "flag": "+<行号>",
          "default": "1",
          "desc": "从指定行开始显示。"
        },
        {
          "flag": "-d",
          "default": "关闭",
          "desc": "在提示中显示操作说明而非响铃。适用于新手。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "按实际行计数而非屏幕折行数计数。"
        },
        {
          "flag": "-s",
          "default": "关闭",
          "desc": "把连续空行压缩为一行。"
        }
      ],
      "sample": {
        "output": "$ more long.log\nline one\nline two\n--More--(12%)",
        "explain": "`more` 与 less 类似但功能更弱，逐屏显示并在底部提示 `--More--(12%)` 已浏览比例。\n回车下滚一行、空格下滚一屏，`q` 退出。"
      }
    },
    {
      "name": "head",
      "category": "view",
      "description": "查看文件开头若干行，-n 20 取前 20 行，看日志头部。",
      "keywords": [
        "开头",
        "head"
      ],
      "examples": [
        {
          "cmd": "head -n 20 f",
          "desc": "看前 20 行"
        },
        {
          "cmd": "head -c 100 f",
          "desc": "看前 100 字节"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "默认显示前 10 行；head -n -5 表示「除末尾 5 行外全部」",
      "compare": null,
      "options": [
        {
          "flag": "-n <行数>",
          "default": "10",
          "desc": "输出前 N 行。写作 -n -5 时表示输出除末尾 5 行外的全部内容。"
        },
        {
          "flag": "-c <字节数>",
          "default": "无",
          "desc": "按字节输出，支持 K/M/G 后缀。与 -n 互斥，后出现者生效。"
        },
        {
          "flag": "-q, --quiet",
          "default": "多文件时显示文件名",
          "desc": "多文件时不打印文件名标题。适用于拼接输出。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "即使只有一个文件也打印文件名标题。"
        },
        {
          "flag": "-z",
          "default": "关闭",
          "desc": "以 NUL 而非换行作为行分隔符。"
        }
      ],
      "sample": {
        "output": "$ head -n 3 access.log\n10.0.0.1 GET /\n10.0.0.2 POST /login\n10.0.0.3 GET /home",
        "explain": "`head -n 3` 只显示文件前 3 行；常用于快速预览日志头部或 CSV 表头。\n缺省显示前 10 行。"
      }
    },
    {
      "name": "tail",
      "category": "view",
      "description": "查看文件末尾若干行，-f 实时跟随新增内容，盯日志必备。",
      "keywords": [
        "末尾",
        "tail"
      ],
      "examples": [
        {
          "cmd": "tail -n 20 f",
          "desc": "看后 20 行"
        },
        {
          "cmd": "tail -f f",
          "desc": "实时跟踪新增内容"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "跟踪日志首选 tail -f",
      "compare": null,
      "options": [
        {
          "flag": "-n <行数>",
          "default": "10",
          "desc": "输出末尾 N 行。写作 -n +5 时表示从第 5 行开始输出到结尾。"
        },
        {
          "flag": "-f, --follow",
          "default": "关闭",
          "desc": "持续跟踪文件新增内容。文件被日志轮转后会失效，此时应用 -F。"
        },
        {
          "flag": "-F",
          "default": "关闭",
          "desc": "等价于 --follow=name --retry，文件被轮转或重建后自动重新打开。跟踪日志推荐用它。"
        },
        {
          "flag": "-c <字节数>",
          "default": "无",
          "desc": "按字节而非行输出。"
        },
        {
          "flag": "--pid=<PID>",
          "default": "无",
          "desc": "配合 -f，当指定进程结束时自动停止跟踪。"
        },
        {
          "flag": "-s <秒>, --sleep-interval",
          "default": "1.0",
          "desc": "跟踪模式的轮询间隔秒数。调小更实时但更耗 CPU。"
        },
        {
          "flag": "-q / -v",
          "default": "多文件时显示文件名",
          "desc": "分别为不显示与强制显示文件名标题。"
        }
      ],
      "sample": {
        "output": "$ tail -n 3 access.log\n10.0.0.9 GET /about\n10.0.0.10 POST /cart\n10.0.0.11 GET /checkout\n$ tail -f access.log\n(持续输出新追加的行...)",
        "explain": "第1条 `tail -n 3` 显示末尾 3 行，常看最新日志。\n第2条 `tail -f` 持续跟踪文件增长，监视实时写入（Ctrl+C 退出）。"
      }
    },
    {
      "name": "nl",
      "category": "view",
      "description": "带行号输出文件，便于引用具体行，比 cat -n 更规整。",
      "keywords": [
        "行号",
        "nl"
      ],
      "examples": [
        {
          "cmd": "nl f.txt",
          "desc": "输出带行号"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nl -ba a.txt\n     1  line one\n     2  line two\n     3  line three",
        "explain": "`nl` 为每行加行号输出；`-ba` 表示连空行也编号。\n适合需要引用具体行号的场景（如代码评审）。"
      }
    },
    {
      "name": "tac",
      "category": "view",
      "description": "逆序输出文件行（最后一行先出），偶尔用于倒序查看。",
      "keywords": [
        "逆序",
        "tac"
      ],
      "examples": [
        {
          "cmd": "tac f.txt",
          "desc": "从末尾到开头"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ tac a.txt\nline three\nline two\nline one",
        "explain": "`tac` 是 cat 的反向版，从最后一行倒序输出到第一行。\n常配合日志分析，先看最新内容。"
      }
    },
    {
      "name": "od",
      "category": "view",
      "description": "以八进制/十六进制/字符方式查看二进制文件，分析原始字节。",
      "keywords": [
        "二进制查看",
        "od"
      ],
      "examples": [
        {
          "cmd": "od -c f",
          "desc": "以字符显示"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ od -A x -t x1z sample.bin\n000000 48 65 6c 6c 6f 0a                         |hello.|\n000006",
        "explain": "`od` 以八进制/十六进制转储二进制；`-A x` 地址用十六进制，`-t x1z` 每字节十六进制并附可读字符。\n第1行 `48 65 6c 6c 6f` 是 \"hello\" 的 ASCII 十六进制，`0a` 是换行。"
      }
    },
    {
      "name": "xxd",
      "category": "view",
      "description": "生成十六进制转储并可反向还原，二进制分析与补丁常用。",
      "keywords": [
        "十六进制",
        "xxd"
      ],
      "examples": [
        {
          "cmd": "xxd f.bin",
          "desc": "十六进制+ASCII"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ xxd sample.bin\n00000000: 4865 6c6c 6f0a 0a                       hello..",
        "explain": "`xxd` 生成十六进制转储：左侧为偏移，中间为十六进制字节，右侧为对应 ASCII。\n`4865 6c6c 6f0a` 对应 \"hello\n\"，末尾 `0a` 是换行，便于分析二进制文件。"
      }
    },
    {
      "name": "hexdump",
      "category": "view",
      "description": "十六进制转储查看器，-C 经典 hex+ASCII 双栏布局。",
      "keywords": [
        "十六进制",
        "hexdump"
      ],
      "examples": [
        {
          "cmd": "hexdump -C f",
          "desc": "规范十六进制格式"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ hexdump -C sample.bin\n00000000  48 65 6c 6c 6f 0a                              |hello.|\n00000006",
        "explain": "`hexdump -C` 以规范十六进制+ASCII 双栏显示；`48 65 6c 6c 6f 0a` 是 \"hello\n\" 的字节。\n与 xxd 类似，用于二进制/编码排查。"
      }
    },
    {
      "name": "strings",
      "category": "view",
      "description": "从二进制或可执行文件中提取可打印字符串，找内嵌文本。",
      "keywords": [
        "字符串",
        "strings"
      ],
      "examples": [
        {
          "cmd": "strings a.out",
          "desc": "查看二进制中的字符串"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ strings app.bin | head\n/lib64/ld-linux-x86-64.so.2\nGLIBC_2.2.5\nUsage: app [options]",
        "explain": "`strings` 从二进制文件中提取可打印的字符串。\n输出中可见依赖的动态库名、版本符号与内置帮助文本，常用于快速了解未知可执行文件。"
      }
    },
    {
      "name": "fold",
      "category": "view",
      "description": "按指定宽度折行，把长行拆成易读的多行。",
      "keywords": [
        "折行",
        "fold"
      ],
      "examples": [
        {
          "cmd": "fold -w 80 f",
          "desc": "每行 80 列"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ fold -w 10 longline.txt\nthis is a\nlong line\nthat wraps",
        "explain": "`fold -w 10` 将每行按宽度 10 字符折行，便于在窄屏/固定宽度下阅读长行。"
      }
    },
    {
      "name": "pr",
      "category": "view",
      "description": "把文件格式化为带页眉页脚的分页输出，打印前排版用。",
      "keywords": [
        "格式化",
        "pr"
      ],
      "examples": [
        {
          "cmd": "pr f.txt",
          "desc": "加页眉分页"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pr -2 -l 10 a.txt\n2026-08-04 11:30  a.txt  Page 1\nline one            line four\nline two            line five\nline three",
        "explain": "`pr` 为打印格式化文本：`-2` 双栏、`-l 10` 每页 10 行，并加页眉（日期、文件名、页码）。\n用于准备打印稿。"
      }
    },
    {
      "name": "bat",
      "category": "view",
      "description": "带语法高亮与行号的 cat 替代，查看代码更舒服。",
      "keywords": [
        "查看",
        "高亮",
        "bat",
        "cat替代"
      ],
      "examples": [
        {
          "cmd": "bat file.sh",
          "desc": "高亮显示文件"
        },
        {
          "cmd": "bat -n file",
          "desc": "显示行号"
        },
        {
          "cmd": "bat --paging=never file",
          "desc": "不分页一次输出"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装；可作 man 分页器或配合 --style 控制显示",
      "compare": null,
      "options": [
        {
          "flag": "-n, --number",
          "default": "关闭",
          "desc": "只显示行号，不显示其他装饰。"
        },
        {
          "flag": "-p, --plain",
          "default": "关闭",
          "desc": "纯净输出，无行号、无边框、无分页。等价于 --style=plain --paging=never，便于管道。"
        },
        {
          "flag": "-l <语言>, --language",
          "default": "按扩展名自动识别",
          "desc": "强制指定语法高亮语言。适用于无扩展名的文件。"
        },
        {
          "flag": "-A, --show-all",
          "default": "关闭",
          "desc": "显示不可见字符，类似 cat -A。"
        },
        {
          "flag": "--style=<组件>",
          "default": "auto",
          "desc": "控制显示组件，可组合 numbers/grid/header/changes/plain。"
        },
        {
          "flag": "--paging=<when>",
          "default": "auto",
          "desc": "分页时机，取值 auto/never/always。管道输出时应设 never。"
        },
        {
          "flag": "--theme=<主题>",
          "default": "随环境",
          "desc": "指定配色主题，用 bat --list-themes 查看可选值。"
        },
        {
          "flag": "-d, --diff",
          "default": "关闭",
          "desc": "只显示相对 Git 索引有改动的行及其上下文。"
        }
      ],
      "sample": {
        "output": "$ bat a.py\n├──┤ File: a.py\n  1 │ def f():\n  2 │     return 1\n  3 │\n  4 │ f()",
        "explain": "`bat` 是 cat 的现代替代，带语法高亮、行号与 Git 改动标记（左侧 ├──┤ 指示文件信息）。\n输出更易读，适合代码查看。"
      }
    },
    {
      "name": "grep",
      "category": "text",
      "description": "在文本中按模式（支持正则）搜索并打印匹配行，是日志分析与代码检索的核心工具。",
      "keywords": [
        "搜索文本",
        "匹配",
        "grep"
      ],
      "examples": [
        {
          "cmd": "grep -rn 'TODO' src/",
          "desc": "递归搜索含 TODO 的文件"
        },
        {
          "cmd": "grep -i error log",
          "desc": "忽略大小写"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "正则默认识别基础语法；用 -E 启用扩展正则",
      "compare": null,
      "options": [
        {
          "flag": "-i, --ignore-case",
          "default": "关闭",
          "desc": "忽略大小写匹配。适用于不确定日志大小写风格时。"
        },
        {
          "flag": "-v, --invert-match",
          "default": "关闭",
          "desc": "反向匹配，输出不含模式的行。适用于过滤噪声行。"
        },
        {
          "flag": "-r / -R, --recursive",
          "default": "关闭",
          "desc": "递归搜索目录。-R 会跟随符号链接，-r 不会。"
        },
        {
          "flag": "-n, --line-number",
          "default": "关闭",
          "desc": "显示匹配行号。适用于定位源码位置。"
        },
        {
          "flag": "-l, --files-with-matches",
          "default": "关闭",
          "desc": "只输出含匹配的文件名，每个文件最多一次。适用于配合 xargs 批处理。"
        },
        {
          "flag": "-L, --files-without-match",
          "default": "关闭",
          "desc": "只输出不含匹配的文件名，与 -l 相反。"
        },
        {
          "flag": "-c, --count",
          "default": "关闭",
          "desc": "只输出每个文件的匹配行数，而非匹配次数。同一行多次匹配仍计为 1。"
        },
        {
          "flag": "-w, --word-regexp",
          "default": "关闭",
          "desc": "整词匹配，避免 cat 匹配到 category。"
        },
        {
          "flag": "-x, --line-regexp",
          "default": "关闭",
          "desc": "整行完全匹配。"
        },
        {
          "flag": "-E, --extended-regexp",
          "default": "关闭",
          "desc": "使用扩展正则，+ ? | () 无需反斜杠转义。等价于 egrep。"
        },
        {
          "flag": "-F, --fixed-strings",
          "default": "关闭",
          "desc": "按字面字符串匹配，不解释正则元字符。速度最快，适用于搜索含特殊符号的文本。"
        },
        {
          "flag": "-o, --only-matching",
          "default": "关闭",
          "desc": "只输出匹配到的部分而非整行。适用于提取字段。"
        },
        {
          "flag": "-A <n> / -B <n> / -C <n>",
          "default": "0",
          "desc": "分别输出匹配行之后、之前、前后各 n 行上下文。"
        },
        {
          "flag": "-q, --quiet",
          "default": "关闭",
          "desc": "静默模式，只用退出码表示是否匹配。找到即刻退出，适用于脚本判断。"
        },
        {
          "flag": "-s, --no-messages",
          "default": "关闭",
          "desc": "抑制文件不存在或无权限的错误信息。"
        },
        {
          "flag": "--include=<模式> / --exclude=<模式>",
          "default": "无",
          "desc": "递归时限定或排除文件名模式，如 --include='*.py'。"
        },
        {
          "flag": "--exclude-dir=<目录>",
          "default": "无",
          "desc": "递归时跳过指定目录，如 --exclude-dir=.git。"
        },
        {
          "flag": "-P, --perl-regexp",
          "default": "关闭",
          "desc": "使用 PCRE 正则，支持 \\d \\s 与前后向断言。部分系统未编译该支持。"
        }
      ],
      "sample": {
        "output": "$ grep -n 'error' app.log\n12:2026-08-04 ERROR: connection failed\n47:2026-08-04 ERROR: timeout",
        "explain": "`grep -n 'error' app.log` 在文件中搜索包含 error 的行；`-n` 显示行号。\n输出 `12:`、`47:` 即命中行号，便于定位。"
      }
    },
    {
      "name": "egrep",
      "category": "text",
      "description": "等同 grep -E，使用扩展正则（无需给 |、()、{} 转义），写复杂模式更省事。",
      "keywords": [
        "扩展正则",
        "egrep"
      ],
      "examples": [
        {
          "cmd": "egrep 'a|b' f",
          "desc": "匹配 a 或 b"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "egrep 等价于 grep -E",
      "options": [
        {
          "flag": "（等价于 grep -E）",
          "default": "无",
          "desc": "扩展正则模式，+ ? | () {} 直接生效无需转义。现已废弃，官方建议改用 grep -E。"
        },
        {
          "flag": "-i / -v / -n / -c / -o",
          "default": "关闭",
          "desc": "与 grep 同名选项含义完全一致。"
        },
        {
          "flag": "-r, --recursive",
          "default": "关闭",
          "desc": "递归搜索目录。"
        }
      ],
      "sample": {
        "output": "$ egrep 'warn|error' app.log\nWARN: low memory\nERROR: disk full",
        "explain": "`egrep`（等同 `grep -E`）支持扩展正则；此处用 `warn|error` 匹配 warn 或 error。\n输出同时命中两类行。"
      }
    },
    {
      "name": "fgrep",
      "category": "text",
      "description": "等同 grep -F，按固定字符串搜索（不解释正则），查找含特殊符号的文本更安全。",
      "keywords": [
        "固定字符串",
        "fgrep"
      ],
      "examples": [
        {
          "cmd": "fgrep 'a$b' f",
          "desc": "按字面量匹配"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "fgrep 不解释正则，等价于 grep -F",
      "options": null,
      "sample": {
        "output": "$ fgrep 'a.b' data.txt\nx a.b y",
        "explain": "`fgrep`（等同 `grep -F`）按字面字符串匹配，不解释正则。\n此处把 `a.b` 当作普通文本，故只命中含字面 \"a.b\" 的行（. 不被当通配）。"
      }
    },
    {
      "name": "sed",
      "category": "text",
      "description": "流式文本编辑器，按行应用替换/删除/插入等命令，常用于批量文本转换与流水线处理。",
      "keywords": [
        "流编辑",
        "替换",
        "sed"
      ],
      "examples": [
        {
          "cmd": "sed 's/foo/bar/g' f",
          "desc": "全局替换"
        },
        {
          "cmd": "sed -i 's/a/b/g' f",
          "desc": "就地修改文件"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "-i 直接改文件，先备份；macOS 需 -i ''",
      "compare": null,
      "options": [
        {
          "flag": "-n, --quiet",
          "default": "关闭（默认打印每行）",
          "desc": "抑制自动打印，只输出 p 命令显式指定的内容。与 p 配合是最常见用法。"
        },
        {
          "flag": "-i[后缀], --in-place",
          "default": "关闭（默认输出到标准输出）",
          "desc": "就地修改文件。不带后缀则不备份，一旦出错无法恢复；GNU 与 BSD 语法不同，macOS 需写 -i ''。"
        },
        {
          "flag": "-e <脚本>",
          "default": "无",
          "desc": "追加一段脚本，可多次给出以执行多条命令。"
        },
        {
          "flag": "-f <脚本文件>",
          "default": "无",
          "desc": "从文件读取 sed 脚本。适用于复杂替换逻辑复用。"
        },
        {
          "flag": "-E, -r, --regexp-extended",
          "default": "关闭",
          "desc": "使用扩展正则，分组与量词无需转义。-E 更具可移植性。"
        },
        {
          "flag": "-s, --separate",
          "default": "关闭（多文件视为一个流）",
          "desc": "把多个文件作为独立流处理，各自的行号从 1 重新计数。"
        },
        {
          "flag": "-z, --null-data",
          "default": "关闭",
          "desc": "以 NUL 分隔行。适用于处理含换行的文件名。"
        },
        {
          "flag": "s/旧/新/g",
          "default": "无 g 时只replace每行第一处",
          "desc": "替换命令。加 g 替换全部，加 i 忽略大小写，加数字 2 表示只替换第 2 处。"
        },
        {
          "flag": "<行号>d / <范围>d",
          "default": "无",
          "desc": "删除指定行，如 1d 删首行、'$d' 删末行、'2,5d' 删 2 到 5 行。"
        }
      ],
      "sample": {
        "output": "$ sed 's/foo/bar/g' a.txt\nbar baz\n$ sed -n '1,3p' a.txt\nline one\nline two\nline three",
        "explain": "第1条 `s/foo/bar/g` 把每行所有 foo 替换为 bar 并输出（不改动原文件）。\n第2条 `-n '1,3p'` 静默模式仅打印第 1–3 行。"
      }
    },
    {
      "name": "awk",
      "category": "text",
      "description": "功能完整的文本处理语言，按字段（列）处理结构化文本，适合统计与报表生成。",
      "keywords": [
        "字段处理",
        "awk"
      ],
      "examples": [
        {
          "cmd": "awk '{print $1}' f",
          "desc": "打印第一列"
        },
        {
          "cmd": "awk -F: '$3>100' /etc/passwd",
          "desc": "按 : 分割筛选"
        }
      ],
      "frequency": "高",
      "difficulty": "进阶",
      "pitfalls": "默认空格分隔；$0 整行、$1 第一列",
      "compare": null,
      "options": [
        {
          "flag": "-F <分隔符>",
          "default": "空白字符（连续空格制表符）",
          "desc": "指定输入字段分隔符。可用正则如 -F '[,;]'。注意默认会忽略行首空白并合并连续空格。"
        },
        {
          "flag": "-v <变量>=<值>",
          "default": "无",
          "desc": "在程序开始前传入外部变量。这是把 shell 变量安全传给 awk 的推荐方式。"
        },
        {
          "flag": "-f <程序文件>",
          "default": "无",
          "desc": "从文件读取 awk 程序。适用于长脚本。"
        },
        {
          "flag": "BEGIN{...}",
          "default": "无",
          "desc": "读取任何输入前执行一次。常用于打印表头或设置 OFS/FS。"
        },
        {
          "flag": "END{...}",
          "default": "无",
          "desc": "全部输入处理完后执行一次。常用于输出汇总统计。"
        },
        {
          "flag": "$0 / $1..$n",
          "default": "无",
          "desc": "$0 为整行，$n 为第 n 个字段。超出字段数的引用返回空字符串而不报错。"
        },
        {
          "flag": "NR / NF",
          "default": "无",
          "desc": "NR 为已读记录总行号，NF 为当前行字段数。$NF 表示最后一个字段。"
        },
        {
          "flag": "OFS / ORS",
          "default": "空格 / 换行",
          "desc": "输出字段与记录分隔符。修改 OFS 后需对 $0 赋值才会重建行。"
        }
      ],
      "sample": {
        "output": "$ awk '{sum+=$1} END{print sum}' nums.txt\n150\n$ awk -F: '$3>100{print $1}' /etc/passwd\nnobody\nsystemd-resolve",
        "explain": "第1条对第一列求和，END 块打印总和 150。\n第2条 `-F:` 以冒号分隔，打印 UID(第3列)>100 的账号名，常用于分析 passwd。"
      }
    },
    {
      "name": "sort",
      "category": "text",
      "description": "对文本行排序。-n 按数值，-k 指定列，-r 逆序，-u 去重，常配合其他命令。",
      "keywords": [
        "排序",
        "sort"
      ],
      "examples": [
        {
          "cmd": "sort f.txt",
          "desc": "字典序排序"
        },
        {
          "cmd": "sort -n -k2 f",
          "desc": "按第 2 列数值排序"
        },
        {
          "cmd": "sort -u f",
          "desc": "排序并去重"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "默认字典序；数值用 -n、反序 -r、按列 -k、去重 -u（常与 uniq 配合）",
      "compare": null,
      "options": [
        {
          "flag": "-n, --numeric-sort",
          "default": "按字典序",
          "desc": "按数值大小排序。字典序下 10 会排在 9 前面，处理数字必须加它。"
        },
        {
          "flag": "-h, --human-numeric-sort",
          "default": "关闭",
          "desc": "识别 1K、2M、3G 等带单位数值排序。适用于排序 du -h 的输出。"
        },
        {
          "flag": "-r, --reverse",
          "default": "关闭",
          "desc": "降序输出。"
        },
        {
          "flag": "-k <起始[,结束]>",
          "default": "整行",
          "desc": "按指定字段排序，如 -k2 从第 2 字段到行尾，-k2,2 仅第 2 字段。不写结束位置是常见误区。"
        },
        {
          "flag": "-t <分隔符>",
          "default": "空白过渡处",
          "desc": "指定字段分隔符。默认规则为「非空白到空白的过渡」，与 cut 不同。"
        },
        {
          "flag": "-u, --unique",
          "default": "关闭",
          "desc": "排序后去除重复行。仅比较排序键，未参与排序的字段差异会被忽略。"
        },
        {
          "flag": "-f, --ignore-case",
          "default": "关闭",
          "desc": "忽略大小写比较。"
        },
        {
          "flag": "-b, --ignore-leading-blanks",
          "default": "关闭",
          "desc": "忽略每行前导空白。字段定位不准时常需要它。"
        },
        {
          "flag": "-s, --stable",
          "default": "关闭",
          "desc": "稳定排序，保持相同键的原有相对顺序。"
        },
        {
          "flag": "-o <文件>",
          "default": "标准输出",
          "desc": "输出到文件。它支持与输入同名，可安全实现就地排序。"
        },
        {
          "flag": "-c, --check",
          "default": "关闭",
          "desc": "只检查是否已排序，不输出内容，用退出码表示结果。"
        },
        {
          "flag": "-V, --version-sort",
          "default": "关闭",
          "desc": "按版本号规则排序，如 v1.9 排在 v1.10 之前。"
        }
      ],
      "sample": {
        "output": "$ sort -n sizes.txt\n3\n15\n128\n$ sort -u names.txt\nalice\nbob",
        "explain": "第1条 `-n` 按数值排序（避免 128 排在 15 前）。\n第2条 `-u` 去重后按字典序输出唯一值。"
      }
    },
    {
      "name": "uniq",
      "category": "text",
      "description": "去除相邻重复行，因此通常先 sort 再 uniq；-c 计出现次数，-d 只显示重复行。",
      "keywords": [
        "去重",
        "uniq"
      ],
      "examples": [
        {
          "cmd": "sort f | uniq",
          "desc": "去重"
        },
        {
          "cmd": "uniq -c",
          "desc": "统计出现次数"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "uniq 只去相邻重复，通常先 sort",
      "compare": null,
      "options": [
        {
          "flag": "-c, --count",
          "default": "关闭",
          "desc": "在每行前显示重复次数。统计前必须先 sort，否则只合并相邻重复行。"
        },
        {
          "flag": "-d, --repeated",
          "default": "关闭",
          "desc": "只输出有重复的行，每组一次。适用于找出重复项。"
        },
        {
          "flag": "-D",
          "default": "关闭",
          "desc": "输出全部重复行而非每组一行。"
        },
        {
          "flag": "-u, --unique",
          "default": "关闭",
          "desc": "只输出从未重复的行。与 -d 互补。"
        },
        {
          "flag": "-i, --ignore-case",
          "default": "关闭",
          "desc": "比较时忽略大小写。"
        },
        {
          "flag": "-f <n>, --skip-fields",
          "default": "0",
          "desc": "比较时跳过前 n 个字段。适用于忽略行首时间戳。"
        },
        {
          "flag": "-s <n>, --skip-chars",
          "default": "0",
          "desc": "比较时跳过前 n 个字符。"
        },
        {
          "flag": "-w <n>, --check-chars",
          "default": "整行",
          "desc": "只比较每行前 n 个字符。"
        }
      ],
      "sample": {
        "output": "$ sort access.log | uniq -c\n  12 GET /\n   3 POST /login",
        "explain": "`uniq` 仅合并相邻重复行，故通常先 `sort`；`-c` 统计每行的重复次数。\n输出显示 GET / 出现 12 次、POST /login 出现 3 次。"
      }
    },
    {
      "name": "cut",
      "category": "text",
      "description": "按列（分隔符 -d 与字段 -f）或字符位置截取文本，适合提取 CSV/密码文件中的某一列。",
      "keywords": [
        "截取列",
        "cut"
      ],
      "examples": [
        {
          "cmd": "cut -d: -f1 /etc/passwd",
          "desc": "取第一字段"
        },
        {
          "cmd": "cut -c1-10 f",
          "desc": "取 1-10 字符"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-d <分隔符>",
          "default": "制表符",
          "desc": "指定字段分隔符，只能是单个字符。这是它不如 awk 灵活的主要限制。"
        },
        {
          "flag": "-f <字段列表>",
          "default": "无",
          "desc": "选择字段，支持 1,3、2-4、3- 等写法。行内不含分隔符时默认整行输出。"
        },
        {
          "flag": "-c <字符范围>",
          "default": "无",
          "desc": "按字符位置截取，如 -c1-10。对多字节中文可能截断字符。"
        },
        {
          "flag": "-b <字节范围>",
          "default": "无",
          "desc": "按字节截取。处理 UTF-8 中文时应改用 -c。"
        },
        {
          "flag": "--complement",
          "default": "关闭",
          "desc": "反选，输出未被选中的部分。适用于剔除某一列。"
        },
        {
          "flag": "-s, --only-delimited",
          "default": "关闭",
          "desc": "跳过不含分隔符的行，而非原样输出。"
        },
        {
          "flag": "--output-delimiter=<串>",
          "default": "同输入分隔符",
          "desc": "指定输出分隔符，可与输入不同。"
        }
      ],
      "sample": {
        "output": "$ cut -d: -f1 /etc/passwd | head -3\nroot\ndaemon\nbin",
        "explain": "`cut -d: -f1` 以冒号为分隔符，取第 1 字段；配合 head -3 取前 3 个账号名。\n便于从结构化文本中抽列。"
      }
    },
    {
      "name": "paste",
      "category": "text",
      "description": "将多个文件按列横向合并，默认以制表符分隔，常用于拼装多列数据。",
      "keywords": [
        "合并列",
        "paste"
      ],
      "examples": [
        {
          "cmd": "paste a.txt b.txt",
          "desc": "并排合并"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ paste a.txt b.txt\nline one\tline A\nline two\tline B",
        "explain": "`paste` 将多个文件的对应行横向合并，默认以制表符分隔。\n第1行把 a.txt 第1行与 b.txt 第1行并排，常用于字段拼接。"
      }
    },
    {
      "name": "join",
      "category": "text",
      "description": "类似数据库 join，按共同字段横向合并两个已排序文件，做关联查询。",
      "keywords": [
        "连接",
        "join"
      ],
      "examples": [
        {
          "cmd": "join a.txt b.txt",
          "desc": "按公共字段连接"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ join id.txt name.txt\n1 alice\n2 bob",
        "explain": "`join` 按共同字段（默认第1列）横向合并两个已排序文件；此处按 id 把姓名连上。"
      }
    },
    {
      "name": "comm",
      "category": "text",
      "description": "逐行比较两份已排序文件，输出三列分别表示仅在 A、仅在 B、以及两者共有。",
      "keywords": [
        "比较文件",
        "comm"
      ],
      "examples": [
        {
          "cmd": "comm a.txt b.txt",
          "desc": "显示交集/差集"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ comm <(sort a.txt) <(sort b.txt)\na\n\tb\n\t\tc",
        "explain": "`comm` 比较两已排序文件：第1列仅在 A、第2列仅在 B、第3列共有。\n输出中 `\t` 缩进区分三类；用于求差集/交集。"
      }
    },
    {
      "name": "diff",
      "category": "text",
      "description": "逐行比较文件差异并输出改动位置；-u 生成统一格式补丁，常用于代码评审。",
      "keywords": [
        "比较差异",
        "diff"
      ],
      "examples": [
        {
          "cmd": "diff a.txt b.txt",
          "desc": "逐行比较"
        },
        {
          "cmd": "diff -u a b > p.patch",
          "desc": "生成补丁"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-u, --unified[=n]",
          "default": "3 行上下文",
          "desc": "统一格式输出，是生成补丁的标准格式。可被 patch 直接应用。"
        },
        {
          "flag": "-c",
          "default": "关闭",
          "desc": "上下文格式，比 -u 冗长，兼容老工具。"
        },
        {
          "flag": "-r, --recursive",
          "default": "关闭",
          "desc": "递归比较目录下所有同名文件。"
        },
        {
          "flag": "-q, --brief",
          "default": "关闭",
          "desc": "只报告文件是否不同，不显示具体差异。适用于快速批量比对。"
        },
        {
          "flag": "-i, --ignore-case",
          "default": "关闭",
          "desc": "忽略大小写差异。"
        },
        {
          "flag": "-w, --ignore-all-space",
          "default": "关闭",
          "desc": "忽略所有空白差异。适用于跨平台缩进不一致时。"
        },
        {
          "flag": "-b, --ignore-space-change",
          "default": "关闭",
          "desc": "忽略空白数量变化，但不忽略空白有无。比 -w 保守。"
        },
        {
          "flag": "-B, --ignore-blank-lines",
          "default": "关闭",
          "desc": "忽略纯空行的增删。"
        },
        {
          "flag": "-N, --new-file",
          "default": "关闭",
          "desc": "把不存在的文件视为空文件。生成补丁含新增文件时必备。"
        },
        {
          "flag": "--color=<when>",
          "default": "never",
          "desc": "着色输出，取值 never/always/auto。"
        },
        {
          "flag": "-y, --side-by-side",
          "default": "关闭",
          "desc": "左右并排显示。配合 -W 指定总宽度。"
        }
      ],
      "sample": {
        "output": "$ diff a.txt b.txt\n3c3\n< line three old\n---\n> line three new",
        "explain": "`diff` 显示两文件差异：`3c3` 表示第 3 行被替换。\n`<` 为 a.txt 原行，`>` 为 b.txt 新行，`---` 分隔。"
      }
    },
    {
      "name": "patch",
      "category": "text",
      "description": "读取 diff 生成的补丁并应用到文件，把改动应用到另一份相同或相近的代码。",
      "keywords": [
        "打补丁",
        "patch"
      ],
      "examples": [
        {
          "cmd": "patch < p.patch",
          "desc": "应用补丁"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "打错可能损坏文件，先 --dry-run 预览",
      "compare": null,
      "options": [
        {
          "flag": "-p<n>, --strip=<n>",
          "default": "无（须显式指定）",
          "desc": "剥离补丁路径中的前 n 级目录。git 生成的补丁通常用 -p1。"
        },
        {
          "flag": "-R, --reverse",
          "default": "关闭",
          "desc": "反向应用，即撤销补丁。用于回滚已打的补丁。"
        },
        {
          "flag": "-i <补丁文件>, --input",
          "default": "标准输入",
          "desc": "指定补丁文件。"
        },
        {
          "flag": "--dry-run",
          "default": "关闭",
          "desc": "只试运行不实际修改。应用不确定的补丁前建议先跑一次。"
        },
        {
          "flag": "-b, --backup",
          "default": "关闭",
          "desc": "修改前备份原文件，默认加 .orig 后缀。"
        },
        {
          "flag": "-N, --forward",
          "default": "关闭",
          "desc": "忽略看起来已经应用过的补丁块，避免重复应用。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "不询问，尽量应用。失败块会写入 .rej 文件。"
        }
      ],
      "sample": {
        "output": "$ patch old.txt < fix.diff\npatching file old.txt",
        "explain": "`patch` 按 diff 补丁修改文件；`patching file old.txt` 表示成功应用。\n常用于应用他人提交的改动。"
      }
    },
    {
      "name": "tr",
      "category": "text",
      "description": "逐字符转换或删除，如大小写互换、压缩空白、删除控制字符，适合轻量字符处理。",
      "keywords": [
        "字符替换",
        "tr"
      ],
      "examples": [
        {
          "cmd": "tr 'a-z' 'A-Z'",
          "desc": "转大写"
        },
        {
          "cmd": "tr -d '\r'",
          "desc": "删除回车符"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-d, --delete",
          "default": "关闭",
          "desc": "删除属于指定集合的所有字符。如 tr -d '\\r' 清除 Windows 行尾。"
        },
        {
          "flag": "-s, --squeeze-repeats",
          "default": "关闭",
          "desc": "把连续重复的字符压缩为一个。常用 tr -s ' ' 规整空格。"
        },
        {
          "flag": "-c, --complement",
          "default": "关闭",
          "desc": "取字符集的补集，即操作未列出的字符。"
        },
        {
          "flag": "-t, --truncate-set1",
          "default": "关闭",
          "desc": "把集合 1 截断到与集合 2 等长。默认会用集合 2 末字符补齐。"
        },
        {
          "flag": "字符类",
          "default": "无",
          "desc": "支持 [:alpha:] [:digit:] [:space:] [:upper:] [:lower:] [:punct:] 等 POSIX 类。"
        },
        {
          "flag": "（仅处理标准输入）",
          "default": "无",
          "desc": "tr 不接受文件参数，必须用重定向或管道输入。这是最常见的使用错误。"
        }
      ],
      "sample": {
        "output": "$ echo 'Hello' | tr 'a-z' 'A-Z'\nHELLO\n$ echo 'a,b,c' | tr ',' '\n'\na\nb\nc",
        "explain": "第1条 `tr 'a-z' 'A-Z'` 把小写转大写。\n第2条把逗号替换为换行，实现简单分词。"
      }
    },
    {
      "name": "wc",
      "category": "text",
      "description": "统计行数、词数、字节/字符数；-l/-w/-c 分别取其一，常配合管道统计输出规模。",
      "keywords": [
        "统计",
        "wc"
      ],
      "examples": [
        {
          "cmd": "wc -l f.txt",
          "desc": "统计行数"
        },
        {
          "cmd": "wc -w f",
          "desc": "统计词数"
        },
        {
          "cmd": "wc -c f",
          "desc": "统计字节数"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "-l 行 / -w 词 / -c 字节 / -m 字符；不指定选项时依次给出三者",
      "compare": null,
      "options": [
        {
          "flag": "-l, --lines",
          "default": "关闭",
          "desc": "统计行数，实际统计的是换行符个数。文件末尾无换行时会少算一行。"
        },
        {
          "flag": "-w, --words",
          "default": "关闭",
          "desc": "统计单词数，以空白分隔。"
        },
        {
          "flag": "-c, --bytes",
          "default": "关闭",
          "desc": "统计字节数。中文 UTF-8 每字通常占 3 字节。"
        },
        {
          "flag": "-m, --chars",
          "default": "关闭",
          "desc": "统计字符数。统计中文字数应使用它而非 -c。"
        },
        {
          "flag": "-L, --max-line-length",
          "default": "关闭",
          "desc": "输出最长行的显示宽度。适用于检查代码行宽。"
        },
        {
          "flag": "（无选项）",
          "default": "-l -w -c",
          "desc": "不带选项时同时输出行数、单词数、字节数三列。"
        }
      ],
      "sample": {
        "output": "$ wc -lwc report.txt\n  120  480 3120 report.txt",
        "explain": "`wc -lwc` 同时统计行数、词数、字节数；输出 `120` 行、`480` 词、`3120` 字节。\n单独 `-l` 仅行数，常用于统计代码行。"
      }
    },
    {
      "name": "split",
      "category": "text",
      "description": "按行数或体积把大文件拆成多个小文件，便于传输或并行处理。",
      "keywords": [
        "拆分",
        "split"
      ],
      "examples": [
        {
          "cmd": "split -l 1000 f",
          "desc": "每 1000 行拆分"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ split -l 1000 big.log chunk_\n$ ls chunk_*\nchunk_aa chunk_ab chunk_ac",
        "explain": "`split -l 1000` 每 1000 行切一个文件，前缀 chunk_；输出分块为 chunk_aa/ab/ac。\n便于大文件拆分处理。"
      }
    },
    {
      "name": "csplit",
      "category": "text",
      "description": "按行号或正则匹配上下文把文件拆分成多段，适合按章节切分文档。",
      "keywords": [
        "拆分",
        "csplit"
      ],
      "examples": [
        {
          "cmd": "csplit f '/pattern/'",
          "desc": "按模式拆分"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ csplit app.log '/^===/' '{*}'\n12\n34\n9",
        "explain": "`csplit` 按内容模式切分；`/^===/` 以 === 开头的行作分隔，`{*}` 重复到末尾。\n输出各分块的行数（12/34/9）。"
      }
    },
    {
      "name": "fmt",
      "category": "text",
      "description": "把段落重新排版为指定宽度的整齐文本，便于阅读或进一步处理。",
      "keywords": [
        "格式化",
        "fmt"
      ],
      "examples": [
        {
          "cmd": "fmt -w 60 f",
          "desc": "每行 60 列"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ fmt -w 40 longpara.txt\nthis is a paragraph that gets\nwrapped at about forty columns\nfor readable width",
        "explain": "`fmt -w 40` 把段落重排为每行约 40 列，提升可读性；用于规范化文本宽度。"
      }
    },
    {
      "name": "expand",
      "category": "text",
      "description": "将制表符转换为空格（默认 8 列），统一缩进风格，避免对齐错乱。",
      "keywords": [
        "制表符",
        "expand"
      ],
      "examples": [
        {
          "cmd": "expand f.txt",
          "desc": "tab 转空格"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ expand -t 4 tabs.txt > spaces.txt\n$ cat -A spaces.txt\nline    one$",
        "explain": "`expand -t 4` 把制表符转成 4 个空格；`cat -A` 用 `$` 标行尾，确认制表符已被空格替代。"
      }
    },
    {
      "name": "unexpand",
      "category": "text",
      "description": "把连续的空格压缩回制表符，-a 处理所有而非仅行首，反向标准化缩进。",
      "keywords": [
        "制表符",
        "unexpand"
      ],
      "examples": [
        {
          "cmd": "unexpand -a f",
          "desc": "空格转 tab"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ unexpand -a spaces.txt > tabs.txt\n$ cat -T tabs.txt\nline^Ione",
        "explain": "`unexpand -a` 把连续空格转回制表符；`cat -T` 用 `^I` 显示制表符，确认转换成功。"
      }
    },
    {
      "name": "rg",
      "category": "text",
      "description": "ripgrep，极快的递归搜索，默认尊重 .gitignore 且搜索当前目录，日常代码检索首选。",
      "keywords": [
        "搜索",
        "rg",
        "ripgrep",
        "grep替代"
      ],
      "examples": [
        {
          "cmd": "rg 'TODO'",
          "desc": "递归搜索当前目录"
        },
        {
          "cmd": "rg -i 'foo' src",
          "desc": "忽略大小写"
        },
        {
          "cmd": "rg -n --hidden pat",
          "desc": "含隐藏文件搜索"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "默认递归且跳过隐藏/忽略文件；-u 取消忽略、-F 按字面量匹配",
      "compare": null,
      "options": [
        {
          "flag": "-i, --ignore-case",
          "default": "智能大小写关闭",
          "desc": "忽略大小写。配合 -S 可启用智能模式。"
        },
        {
          "flag": "-S, --smart-case",
          "default": "关闭",
          "desc": "模式全小写时忽略大小写，含大写则区分。日常推荐常开。"
        },
        {
          "flag": "-t <类型>, --type",
          "default": "全部",
          "desc": "只搜索指定语言类型文件，如 -t py。用 rg --type-list 查看全部类型。"
        },
        {
          "flag": "-g <通配>, --glob",
          "default": "无",
          "desc": "按通配符包含或排除，前缀 ! 表示排除，如 -g '!*.min.js'。"
        },
        {
          "flag": "-l, --files-with-matches",
          "default": "关闭",
          "desc": "只列出匹配的文件名。"
        },
        {
          "flag": "-n / -N",
          "default": "-n 开启",
          "desc": "显示或隐藏行号。rg 默认显示行号，与 grep 相反。"
        },
        {
          "flag": "-A/-B/-C <n>",
          "default": "0",
          "desc": "输出后置、前置、前后上下文行数。"
        },
        {
          "flag": "--hidden",
          "default": "关闭",
          "desc": "搜索隐藏文件。rg 默认跳过隐藏文件与 .gitignore 中的条目。"
        },
        {
          "flag": "-u / -uu / -uuu",
          "default": "关闭",
          "desc": "逐级降低过滤：-u 忽略 gitignore，-uu 额外含隐藏文件，-uuu 连二进制也搜。"
        },
        {
          "flag": "--no-ignore",
          "default": "关闭",
          "desc": "不读取 .gitignore/.ignore 规则。"
        },
        {
          "flag": "-F, --fixed-strings",
          "default": "关闭",
          "desc": "按字面匹配，不解析正则。"
        },
        {
          "flag": "-r <替换>, --replace",
          "default": "无",
          "desc": "输出时用替换文本呈现匹配部分。它不会修改文件。"
        }
      ],
      "sample": {
        "output": "$ rg -n 'TODO' src/\nsrc/main.py:12:    # TODO refactor\nsrc/util.py:45:    # TODO add test",
        "explain": "`rg`（ripgrep）更快的递归搜索；`-n` 显示行号。\n输出递归列出 src/ 下含 TODO 的文件与行，默认跳过 .git 与二进制。"
      }
    },
    {
      "name": "yq",
      "category": "text",
      "description": "命令行处理 YAML/XML/CSV/JSON 的工具（jq 的 YAML 版），便于在管道中读写配置。",
      "keywords": [
        "yaml",
        "yq",
        "处理"
      ],
      "examples": [
        {
          "cmd": "yq '.service.port' f.yaml",
          "desc": "读取字段"
        },
        {
          "cmd": "yq -i '.x=1' f.yaml",
          "desc": "原地修改"
        },
        {
          "cmd": "yq -o=json f.yaml",
          "desc": "转 JSON 输出"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "此处指 mikefarah/yq；与 Python 的 yq（jq 包装）不是同一工具",
      "compare": null,
      "options": [
        {
          "flag": "-i, --inplace",
          "default": "关闭",
          "desc": "就地修改文件。修改前建议先不加 -i 预览结果。"
        },
        {
          "flag": "-o <格式>, --output-format",
          "default": "yaml",
          "desc": "输出格式，可选 yaml/json/props/csv/xml。用于格式互转。"
        },
        {
          "flag": "-P, --prettyPrint",
          "default": "关闭",
          "desc": "美化输出，规整缩进。"
        },
        {
          "flag": "-r, --raw-output",
          "default": "关闭",
          "desc": "输出裸字符串，去掉外层引号。适用于取值给 shell 变量。"
        },
        {
          "flag": "-n, --null-input",
          "default": "关闭",
          "desc": "不读取输入，用于从零构造文档。"
        },
        {
          "flag": "eval / eval-all",
          "default": "eval",
          "desc": "eval 逐文档处理；eval-all 把所有输入合并后一次处理，跨文件合并时需要它。"
        },
        {
          "flag": "'.a.b'",
          "default": "无",
          "desc": "路径表达式语法同 jq。数组用 .[0]，全部元素用 .[]。"
        }
      ],
      "sample": {
        "output": "$ yq '.name' config.yaml\napp-server",
        "explain": "`yq` 像 jq 一样查询/转换 YAML；`.name` 取顶层 name 字段，输出其值为 app-server。"
      }
    },
    {
      "name": "chmod",
      "category": "perm",
      "description": "修改文件/目录的读/写/执行权限，可用数字（755）或符号（u+x）表示，控制谁能访问。",
      "keywords": [
        "权限",
        "chmod"
      ],
      "examples": [
        {
          "cmd": "chmod 644 f",
          "desc": "所有者读写他人只读"
        },
        {
          "cmd": "chmod +x script.sh",
          "desc": "加可执行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "误用 777 会导致全网可写，存在安全风险",
      "compare": null,
      "options": [
        {
          "flag": "-R, --recursive",
          "default": "关闭",
          "desc": "递归修改目录及其内容。对目录树用 777 会造成安全隐患，应区分目录与文件分别处理。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "输出每个被修改文件的变更详情。"
        },
        {
          "flag": "-c, --changes",
          "default": "关闭",
          "desc": "只输出真正发生变化的文件，比 -v 安静。"
        },
        {
          "flag": "-f, --silent",
          "default": "关闭",
          "desc": "抑制大部分错误信息。"
        },
        {
          "flag": "--reference=<文件>",
          "default": "无",
          "desc": "复用参照文件的权限。适用于批量对齐权限。"
        },
        {
          "flag": "八进制模式",
          "default": "无",
          "desc": "三位数字分别对应属主/属组/其他，4 读 2 写 1 执行。如 644 表示属主读写、其他只读。"
        },
        {
          "flag": "符号模式",
          "default": "无",
          "desc": "形如 u+x、go-w、a=r。u 属主、g 属组、o 其他、a 全部；+ 增加、- 移除、= 精确设置。"
        },
        {
          "flag": "X（大写）",
          "default": "无",
          "desc": "仅当目标是目录或已有任一执行位时才加执行权限。递归修改时用 a+X 可避免给普通文件加执行位。"
        },
        {
          "flag": "特殊位 4/2/1",
          "default": "无",
          "desc": "4 为 setuid、2 为 setgid、1 为 sticky。如 1777 用于 /tmp 这类公共可写目录。"
        }
      ],
      "sample": {
        "output": "$ chmod 755 script.sh\n$ ls -l script.sh\n-rwxr-xr-x 1 user user 123 Aug  4 11:30 script.sh\n$ chmod u+x,go-w data.txt\n-rwxr----- 1 user user 99 Aug  4 11:31 data.txt",
        "explain": "`chmod 755` 用数字法设权限：属主 rwx(7)、组 r-x(5)、其他 r-x(5)；ls 确认脚本已可执行。\n第2例 `u+x,go-w` 符号法：给属主加执行、去掉组与其他的写权限。"
      }
    },
    {
      "name": "chown",
      "category": "perm",
      "description": "修改文件属主（用户）与属组，需 root 权限；-R 递归处理整个目录树。",
      "keywords": [
        "属主",
        "chown"
      ],
      "examples": [
        {
          "cmd": "sudo chown u:g f",
          "desc": "改用户和组"
        },
        {
          "cmd": "chown -R u dir",
          "desc": "递归修改"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "改他人文件需 sudo；递归 -R 谨慎",
      "compare": null,
      "options": [
        {
          "flag": "-R, --recursive",
          "default": "关闭",
          "desc": "递归修改目录下全部文件的属主。"
        },
        {
          "flag": "-v / -c",
          "default": "关闭",
          "desc": "输出全部变更或仅输出实际发生的变更。"
        },
        {
          "flag": "--reference=<文件>",
          "default": "无",
          "desc": "复用参照文件的属主与属组。"
        },
        {
          "flag": "-h, --no-dereference",
          "default": "关闭",
          "desc": "修改符号链接自身而非其指向的目标。递归处理含链接的目录时需注意。"
        },
        {
          "flag": "用户:组",
          "default": "无",
          "desc": "同时改属主与属组。只写 user: 表示属组改为该用户的默认组；只写 :group 表示仅改属组。"
        },
        {
          "flag": "--from=<原属主>",
          "default": "无",
          "desc": "仅当当前属主匹配时才修改。适用于精确批量迁移。"
        }
      ],
      "sample": {
        "output": "$ chown root:root /srv/app\n$ ls -ld /srv/app\ndrwxr-xr-x 1 root root 4096 Aug  4 11:32 /srv/app",
        "explain": "`chown root:root` 把属主与属组同时改为 root；`ls -ld` 显示目录属主已变为 root root。\n改属主通常需要 root 权限。"
      }
    },
    {
      "name": "chgrp",
      "category": "perm",
      "description": "仅修改文件所属组，常用于把文件交给某个团队共享访问。",
      "keywords": [
        "属组",
        "chgrp"
      ],
      "examples": [
        {
          "cmd": "chgrp dev f",
          "desc": "改组为 dev"
        },
        {
          "cmd": "chgrp -R dev dir",
          "desc": "递归改组"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需是目标组成员或用 sudo；递归改组用 -R",
      "compare": null,
      "options": [
        {
          "flag": "-R, --recursive",
          "default": "关闭",
          "desc": "递归修改属组。"
        },
        {
          "flag": "-v / -c",
          "default": "关闭",
          "desc": "输出全部或仅实际变更。"
        },
        {
          "flag": "--reference=<文件>",
          "default": "无",
          "desc": "复用参照文件的属组。"
        },
        {
          "flag": "-h, --no-dereference",
          "default": "关闭",
          "desc": "作用于符号链接本身。"
        },
        {
          "flag": "（权限要求）",
          "default": "无",
          "desc": "非 root 用户只能把文件改到自己所属的组，且必须是文件属主。"
        }
      ],
      "sample": {
        "output": "$ chgrp developers app.conf\n$ ls -l app.conf\n-rw-r--r-- 1 user developers 256 Aug  4 11:33 app.conf",
        "explain": "`chgrp developers` 仅修改文件的属组为 developers；ls 显示属组已变更，属主不变。"
      }
    },
    {
      "name": "umask",
      "category": "perm",
      "description": "设置新建文件/目录的默认权限掩码，决定它们初始的访问范围，影响安全基线。",
      "keywords": [
        "默认权限",
        "umask"
      ],
      "examples": [
        {
          "cmd": "umask 022",
          "desc": "新建文件默认 755/644"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "显示当前掩码值。默认通常为 022。"
        },
        {
          "flag": "-S",
          "default": "关闭",
          "desc": "以符号形式显示，如 u=rwx,g=rx,o=rx，比八进制直观。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "输出可直接复用的赋值语句，适用于保存和恢复。"
        },
        {
          "flag": "<八进制值>",
          "default": "022",
          "desc": "设置掩码。它是「屏蔽位」：文件最终权限为 666 减掩码，目录为 777 减掩码。"
        },
        {
          "flag": "（作用范围）",
          "default": "无",
          "desc": "只影响当前 shell 及其之后创建的文件，对已存在文件无效；需持久化应写入 shell 配置文件。"
        }
      ],
      "sample": {
        "output": "$ umask\n0022\n$ umask -S\nu=rwx,g=rx,o=rx",
        "explain": "`umask` 显示当前掩码 0022（八进制），表示新建文件默认去掉组与其他的写位。\n`-S` 以符号法展示：属主全权、组与其他读+执行。"
      }
    },
    {
      "name": "chattr",
      "category": "perm",
      "description": "修改 Linux 文件扩展属性，如 +i 让文件连 root 都无法改删，-a 仅允许追加。",
      "keywords": [
        "扩展属性",
        "chattr"
      ],
      "examples": [
        {
          "cmd": "chattr +i f",
          "desc": "不可修改/删除（immutable）"
        },
        {
          "cmd": "chattr +a f",
          "desc": "仅可追加"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "需 root；+i 后连 root 也删不掉，用 -i 解除",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ chattr +i important.txt\n$ lsattr important.txt\n----i---------e----- important.txt",
        "explain": "`chattr +i` 设不可修改位（immutable），连 root 也无法删除/改写，需 `-i` 解除。\n`lsattr` 显示 i 标志已置位，用于防误删关键文件。"
      }
    },
    {
      "name": "lsattr",
      "category": "perm",
      "description": "查看文件的扩展属性标记，配合 chattr 确认文件是否被设为不可变等。",
      "keywords": [
        "扩展属性",
        "lsattr"
      ],
      "examples": [
        {
          "cmd": "lsattr f",
          "desc": "查看 chattr 属性"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsattr /etc/shadow\n----i---------e----- /etc/shadow",
        "explain": "`lsattr` 列出文件扩展属性位；i 表示不可变，e 表示 extent 格式；用于排查异常属性。"
      }
    },
    {
      "name": "setfacl",
      "category": "perm",
      "description": "设置 ACL，对特定用户/组授予超出传统所有者/组/其他三类的细粒度权限。",
      "keywords": [
        "ACL",
        "setfacl"
      ],
      "examples": [
        {
          "cmd": "setfacl -m u:alice:r f",
          "desc": "给用户 alice 读权限"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ setfacl -m u:alice:rwx shared/\n$ getfacl shared/\nuser:alice:rwx",
        "explain": "`setfacl -m u:alice:rwx` 给 alice 对 shared/ 设精细 ACL 读写执行权（超越传统三类权限）。\n`getfacl` 显示该 ACL 条目已生效。"
      }
    },
    {
      "name": "getfacl",
      "category": "perm",
      "description": "查看文件/目录的 ACL 规则，排查「为何某人能/不能访问」时很有用。",
      "keywords": [
        "ACL",
        "getfacl"
      ],
      "examples": [
        {
          "cmd": "getfacl f",
          "desc": "查看详细 ACL"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ getfacl docs/\n# file: docs/\nuser::rwx\nuser:alice:r-x\ngroup::r-x\nother::---",
        "explain": "`getfacl` 输出目录的 ACL：属主 rwx、alice r-x、组 r-x、其他无权限。\n比 `ls` 更细，能看到逐用户授权。"
      }
    },
    {
      "name": "sudo",
      "category": "user",
      "description": "以其他用户（默认 root）身份执行命令，按 /etc/sudoers 授权。",
      "keywords": [
        "提权",
        "sudo"
      ],
      "examples": [
        {
          "cmd": "sudo apt update",
          "desc": "以 root 执行"
        },
        {
          "cmd": "sudo -u www cmd",
          "desc": "以 www 执行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "滥用 sudo 有风险；用 sudo -l 查看可执行的命令",
      "compare": null,
      "options": [
        {
          "flag": "-u <用户>",
          "default": "root",
          "desc": "以指定用户身份执行，而非默认的 root。"
        },
        {
          "flag": "-i, --login",
          "default": "关闭",
          "desc": "模拟目标用户完整登录，加载其环境与家目录。与 su - 效果接近。"
        },
        {
          "flag": "-s, --shell",
          "default": "关闭",
          "desc": "以目标用户身份启动 shell，但保留当前环境变量。"
        },
        {
          "flag": "-E, --preserve-env",
          "default": "关闭",
          "desc": "保留当前环境变量。受 sudoers 的 env_reset 策略限制，可能被拒绝。"
        },
        {
          "flag": "-k, --reset-timestamp",
          "default": "关闭",
          "desc": "立即失效已缓存的认证，下次需重新输密码。"
        },
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "列出当前用户被允许执行的命令。适用于排查权限配置。"
        },
        {
          "flag": "-n, --non-interactive",
          "default": "关闭",
          "desc": "不提示输密码，需要密码时直接失败。脚本中应使用它避免挂起。"
        },
        {
          "flag": "-v, --validate",
          "default": "关闭",
          "desc": "仅刷新认证有效期而不执行命令。"
        },
        {
          "flag": "（认证缓存）",
          "default": "15 分钟",
          "desc": "首次输入密码后在同一终端内默认缓存 15 分钟，由 sudoers 的 timestamp_timeout 控制。"
        }
      ],
      "sample": {
        "output": "$ sudo -u postgres psql\n[sudo] password for user: \npsql (14.5)",
        "explain": "`sudo -u postgres psql` 以 postgres 身份运行命令；先提示输入当前用户密码，验证后切换身份执行。"
      }
    },
    {
      "name": "su",
      "category": "user",
      "description": "切换用户身份，su - 同时加载目标用户环境，常用于切到 root。",
      "keywords": [
        "切换用户",
        "su"
      ],
      "examples": [
        {
          "cmd": "su -",
          "desc": "切换到 root 并加载环境"
        },
        {
          "cmd": "su alice",
          "desc": "切到 alice"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "su - 加载目标用户环境；su 不加载",
      "options": [
        {
          "flag": "-, -l, --login",
          "default": "关闭",
          "desc": "以完整登录方式切换，重置环境变量并进入目标用户家目录。不加短横线是常见错误来源。"
        },
        {
          "flag": "-c <命令>, --command",
          "default": "无",
          "desc": "以目标用户身份执行单条命令后立即退出。"
        },
        {
          "flag": "-s <shell>, --shell",
          "default": "目标用户默认 shell",
          "desc": "指定使用的 shell。适用于目标用户 shell 为 nologin 时。"
        },
        {
          "flag": "-m, -p, --preserve-environment",
          "default": "关闭",
          "desc": "保留当前环境变量，不重置 HOME 与 PATH。"
        },
        {
          "flag": "（无参数）",
          "default": "root",
          "desc": "不指定用户名时切换到 root，需要输入 root 密码而非当前用户密码。"
        }
      ],
      "sample": {
        "output": "$ su -\nPassword: \n# whoami\nroot",
        "explain": "`su -` 切换到 root 并加载其环境；输入 root 密码后提示符变 `#`，`whoami` 确认已是 root。"
      }
    },
    {
      "name": "useradd",
      "category": "user",
      "description": "新建用户，-m 建主目录、-s 指定 shell、-G 加入附加组。",
      "keywords": [
        "新建用户",
        "useradd"
      ],
      "examples": [
        {
          "cmd": "sudo useradd -m alice",
          "desc": "建用户并建家目录"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "不加 -m 可能不建家目录；用 useradd -m -s /bin/bash",
      "compare": null,
      "options": [
        {
          "flag": "-m, --create-home",
          "default": "关闭（部分发行版默认开启）",
          "desc": "创建家目录。不加时用户可登录但无家目录，是最常见的遗漏。"
        },
        {
          "flag": "-d <路径>, --home-dir",
          "default": "/home/用户名",
          "desc": "指定家目录路径。"
        },
        {
          "flag": "-s <shell>, --shell",
          "default": "/bin/sh 或系统默认",
          "desc": "指定登录 shell。设为 /usr/sbin/nologin 可创建不可登录的服务账号。"
        },
        {
          "flag": "-G <组列表>, --groups",
          "default": "无",
          "desc": "附加组，多个用逗号分隔。注意它会覆盖原有附加组，追加应配合 usermod -aG。"
        },
        {
          "flag": "-g <组>, --gid",
          "default": "同名新建组",
          "desc": "指定主组。"
        },
        {
          "flag": "-u <UID>, --uid",
          "default": "自动分配",
          "desc": "指定用户 ID。"
        },
        {
          "flag": "-r, --system",
          "default": "关闭",
          "desc": "创建系统账号，UID 取自系统保留区间且默认不创建家目录。"
        },
        {
          "flag": "-e <日期>, --expiredate",
          "default": "永不过期",
          "desc": "账号过期日期，格式 YYYY-MM-DD。"
        },
        {
          "flag": "-c <描述>, --comment",
          "default": "空",
          "desc": "备注字段，通常填全名。"
        },
        {
          "flag": "（密码状态）",
          "default": "锁定",
          "desc": "新建用户默认无密码且处于锁定态，须再执行 passwd 设置后才能登录。"
        }
      ],
      "sample": {
        "output": "$ useradd -m -s /bin/bash alice\n$ id alice\nuid=1001(alice) gid=1001(alice) groups=1001(alice)",
        "explain": "`useradd -m` 创建家目录、`-s /bin/bash` 指定登录 shell；`id alice` 显示新账号 uid/gid 已生成。"
      }
    },
    {
      "name": "userdel",
      "category": "user",
      "description": "删除用户，-r 连同主目录一起删，清理离职账号用。",
      "keywords": [
        "删除用户",
        "userdel"
      ],
      "examples": [
        {
          "cmd": "sudo userdel -r alice",
          "desc": "删用户并清家目录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "-r 才会删家目录，否则残留",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ userdel -r alice\n$ id alice\nid: 'alice': no such user",
        "explain": "`userdel -r` 删除账号并连同家目录；`id` 返回无此用户，确认删除成功。"
      }
    },
    {
      "name": "usermod",
      "category": "user",
      "description": "修改用户属性，-aG 追加附加组、-s 改登录 shell。",
      "keywords": [
        "修改用户",
        "usermod"
      ],
      "examples": [
        {
          "cmd": "sudo usermod -aG sudo alice",
          "desc": "加入 sudo 组"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-aG <组列表>",
          "default": "无",
          "desc": "追加附加组。必须 -a 与 -G 连用，单独用 -G 会清空用户原有的其他附加组。"
        },
        {
          "flag": "-G <组列表>, --groups",
          "default": "无",
          "desc": "设置附加组为给定列表，未列出的组会被移除。"
        },
        {
          "flag": "-g <组>, --gid",
          "default": "无",
          "desc": "更改主组。"
        },
        {
          "flag": "-l <新名>, --login",
          "default": "无",
          "desc": "修改登录名。它不会同时改家目录名与属主，需手动处理。"
        },
        {
          "flag": "-d <路径> -m",
          "default": "无",
          "desc": "更改家目录；加 -m 才会同时迁移原有文件。"
        },
        {
          "flag": "-s <shell>, --shell",
          "default": "无",
          "desc": "更改登录 shell。"
        },
        {
          "flag": "-L, --lock",
          "default": "关闭",
          "desc": "锁定账号，在密码前加 !。不影响已建立的 SSH 密钥登录。"
        },
        {
          "flag": "-U, --unlock",
          "default": "关闭",
          "desc": "解锁账号。"
        },
        {
          "flag": "-e <日期>, --expiredate",
          "default": "无",
          "desc": "设置账号过期日期，留空字符串表示取消过期。"
        },
        {
          "flag": "(生效范围)",
          "default": "无",
          "desc": "对已登录会话不生效，用户需重新登录；修改中的用户不能有正在运行的进程。"
        }
      ],
      "sample": {
        "output": "$ usermod -aG sudo alice\n$ groups alice\nalice : alice sudo",
        "explain": "`usermod -aG sudo` 把 alice 追加到 sudo 组（注意 -a 避免覆盖原有组）；`groups` 显示已含 sudo。"
      }
    },
    {
      "name": "groupadd",
      "category": "user",
      "description": "新建用户组，配合权限分配把多人归入同一组。",
      "keywords": [
        "新建组",
        "groupadd"
      ],
      "examples": [
        {
          "cmd": "sudo groupadd dev",
          "desc": "建 dev 组"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ groupadd dev\n$ getent group dev\ndev:x:1002:",
        "explain": "`groupadd dev` 新建 dev 组；`getent group` 显示组名、gid 1002，成员暂空。"
      }
    },
    {
      "name": "groupdel",
      "category": "user",
      "description": "删除用户组，组内有成员时通常需先处理成员。",
      "keywords": [
        "删除组",
        "groupdel"
      ],
      "examples": [
        {
          "cmd": "sudo groupdel dev",
          "desc": "删 dev 组"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ groupdel dev\n$ getent group dev\n(无输出，组已删除)",
        "explain": "`groupdel dev` 删除组；`getent` 无输出即组不存在，删除成功。"
      }
    },
    {
      "name": "passwd",
      "category": "user",
      "description": "修改用户密码（自己或 root 改他人），设置认证凭据。",
      "keywords": [
        "密码",
        "passwd"
      ],
      "examples": [
        {
          "cmd": "passwd",
          "desc": "改自己密码"
        },
        {
          "cmd": "sudo passwd alice",
          "desc": "改他人密码"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "当前用户",
          "desc": "修改自己的密码，需先输入原密码。"
        },
        {
          "flag": "<用户名>",
          "default": "无",
          "desc": "修改指定用户密码，仅 root 可用且无需原密码。"
        },
        {
          "flag": "-l, --lock",
          "default": "关闭",
          "desc": "锁定用户密码。仅禁用密码登录，密钥登录仍可用。"
        },
        {
          "flag": "-u, --unlock",
          "default": "关闭",
          "desc": "解锁密码。"
        },
        {
          "flag": "-d, --delete",
          "default": "关闭",
          "desc": "删除密码使其为空。多数系统会因此禁止该用户登录，属危险操作。"
        },
        {
          "flag": "-e, --expire",
          "default": "关闭",
          "desc": "使密码立即过期，强制用户下次登录时修改。"
        },
        {
          "flag": "-S, --status",
          "default": "关闭",
          "desc": "显示密码状态：是否设置、最后修改日期、有效期。"
        },
        {
          "flag": "-n <天> / -x <天>",
          "default": "无",
          "desc": "分别设置密码最短与最长有效天数。"
        },
        {
          "flag": "-w <天> / -i <天>",
          "default": "无",
          "desc": "分别设置到期前警告天数与到期后宽限天数。"
        }
      ],
      "sample": {
        "output": "$ passwd alice\nNew password: \nRetype new password: \npasswd: password updated successfully",
        "explain": "以 root 改 alice 密码：输入两次后提示 `password updated successfully` 表示更新成功。"
      }
    },
    {
      "name": "chpasswd",
      "category": "user",
      "description": "从标准输入批量设置密码（user:passwd 格式），批量建用户提供。",
      "keywords": [
        "批量密码",
        "chpasswd"
      ],
      "examples": [
        {
          "cmd": "echo 'alice:new' | chpasswd",
          "desc": "批量设置"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo 'alice:NewPass123' | chpasswd\n$ getent shadow alice | cut -d: -f1,2 | head -c 20\nalice:$6$...",
        "explain": "`chpasswd` 从 `user:password` 批量设置密码（常用于脚本）；getent shadow 显示密码已哈希存储。"
      }
    },
    {
      "name": "newgrp",
      "category": "user",
      "description": "切换当前 shell 的有效组，临时以某组成员身份操作。",
      "keywords": [
        "切换组",
        "newgrp"
      ],
      "examples": [
        {
          "cmd": "newgrp dev",
          "desc": "临时切换有效组"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ newgrp dev\n$ id -gn\ndev",
        "explain": "`newgrp dev` 切换当前 shell 的有效组为 dev；`id -gn` 确认有效组已变。"
      }
    },
    {
      "name": "gpasswd",
      "category": "user",
      "description": "管理组成员与组管理员，-a 添加、 -d 移除成员。",
      "keywords": [
        "组成员",
        "gpasswd"
      ],
      "examples": [
        {
          "cmd": "sudo gpasswd -a alice dev",
          "desc": "加用户到组"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ gpasswd -a alice sudo\nAdding user alice to group sudo\n$ groups alice\nalice : alice sudo",
        "explain": "`gpasswd -a alice sudo` 把 alice 加入 sudo 组并回显确认；`groups` 验证已生效。"
      }
    },
    {
      "name": "id",
      "category": "user",
      "description": "显示当前用户/指定用户的 UID、GID 及所属组，确认身份。",
      "keywords": [
        "用户ID",
        "id"
      ],
      "examples": [
        {
          "cmd": "id",
          "desc": "看当前 uid/gid"
        },
        {
          "cmd": "id alice",
          "desc": "看指定用户"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "当前用户",
          "desc": "输出 UID、GID 及全部所属组。"
        },
        {
          "flag": "-u, --user",
          "default": "关闭",
          "desc": "只输出 UID 数字。脚本中判断是否为 root 常用 id -u 是否等于 0。"
        },
        {
          "flag": "-g, --group",
          "default": "关闭",
          "desc": "只输出主组 GID。"
        },
        {
          "flag": "-G, --groups",
          "default": "关闭",
          "desc": "输出全部所属组的 GID 列表。"
        },
        {
          "flag": "-n, --name",
          "default": "关闭",
          "desc": "配合 -u/-g/-G 输出名称而非数字 ID，不能单独使用。"
        },
        {
          "flag": "-r, --real",
          "default": "关闭",
          "desc": "输出真实 ID 而非有效 ID。在 setuid 程序中两者不同。"
        }
      ],
      "sample": {
        "output": "$ id\nuid=1000(user) gid=1000(user) groups=1000(user),27(sudo),1001(docker)",
        "explain": "显示当前用户的 uid、gid 及所属全部组；此处 user 属 sudo、docker 组，决定其可执行权限。"
      }
    },
    {
      "name": "whoami",
      "category": "user",
      "description": "打印当前有效用户名，脚本中确认是以谁在运行。",
      "keywords": [
        "当前用户",
        "whoami"
      ],
      "examples": [
        {
          "cmd": "whoami",
          "desc": "打印当前用户名"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无选项）",
          "default": "无",
          "desc": "输出当前有效用户名，等价于 id -un。在 sudo 环境下返回 root 而非原用户。"
        },
        {
          "flag": "（对比 logname）",
          "default": "无",
          "desc": "logname 返回最初登录的用户名，sudo 后仍是原用户，可用于区分真实操作者。"
        }
      ],
      "sample": {
        "output": "$ whoami\nuser",
        "explain": "输出当前生效的用户名；在 sudo/su 后用来确认自己当前身份。"
      }
    },
    {
      "name": "who",
      "category": "user",
      "description": "显示当前登录的用户、终端与登录时间。",
      "keywords": [
        "登录用户",
        "who"
      ],
      "examples": [
        {
          "cmd": "who",
          "desc": "看谁在线"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ who\nuser     tty2         2026-08-04 09:10\nuser     pts/0        2026-08-04 10:05 (:0)",
        "explain": "列出当前登录会话：用户名、终端(tty2/pts/0)、登录时间与来源(:0 表示本地桌面)。"
      }
    },
    {
      "name": "w",
      "category": "user",
      "description": "显示登录用户及其正在运行的进程与负载，比 who 更详细。",
      "keywords": [
        "登录用户",
        "w"
      ],
      "examples": [
        {
          "cmd": "w",
          "desc": "看用户与正在运行的命令"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ w\n 11:40:01 up 3 days,  1:20,  2 users,  load average: 0.10, 0.05, 0.01\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\nuser     pts/0    :0               10:05    3:21   0.12s  0.05s bash",
        "explain": "首行含开机时长、用户数、负载均值；下方逐行显示每个会话的用户、终端、来源、空闲时间与正在运行的命令。"
      }
    },
    {
      "name": "last",
      "category": "user",
      "description": "显示最近登录/登出记录（含重启），审计与排障用。",
      "keywords": [
        "登录记录",
        "last"
      ],
      "examples": [
        {
          "cmd": "last",
          "desc": "查看登录历史"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ last -n 3\nuser     pts/0        :0               Mon Aug  4 10:05   still logged in\nreboot   system boot  6.8.0-45         Mon Aug  4 09:10   still running\nuser     tty2         :0               Sun Aug  3 22:00 - 23:40  (01:40)",
        "explain": "显示最近登录/重启记录；含用户、终端、来源、起止时间；`reboot` 行表示系统启动，可审计异常登录。"
      }
    },
    {
      "name": "lastlog",
      "category": "user",
      "description": "显示每个用户最后一次登录的时间与来源，发现长期未登录账号。",
      "keywords": [
        "最后登录",
        "lastlog"
      ],
      "examples": [
        {
          "cmd": "lastlog",
          "desc": "各用户末次登录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lastlog -u alice\nUsername         Port     From             Latest\nalice            pts/0    :0               Mon Aug  4 10:05:22 +0800 2026",
        "explain": "`lastlog -u alice` 显示该用户最近一次登录时间/来源；若显示 `**Never logged in**` 说明从未登录。"
      }
    },
    {
      "name": "groups",
      "category": "user",
      "description": "显示某用户所属的全部组，确认其权限来源。",
      "keywords": [
        "所属组",
        "groups"
      ],
      "examples": [
        {
          "cmd": "groups alice",
          "desc": "看 alice 的组"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ groups\nuser : user sudo docker",
        "explain": "显示当前用户所属的全部组；`user sudo docker` 表明其拥有相应组权限。"
      }
    },
    {
      "name": "visudo",
      "category": "user",
      "description": "安全编辑 sudoers 文件，保存时做语法校验，防止锁死 sudo。",
      "keywords": [
        "sudoers",
        "visudo"
      ],
      "examples": [
        {
          "cmd": "sudo visudo",
          "desc": "编辑 sudo 配置（带语法检查）"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "务必用 visudo 而非直接改，避免锁死 sudo",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ visudo\n(syntax-checked edit of /etc/sudoers; saved OK)",
        "explain": "`visudo` 以受控编辑器修改 /etc/sudoers，保存时做语法校验，避免错误配置导致所有人无法提权。"
      }
    },
    {
      "name": "finger",
      "category": "user",
      "description": "查询用户信息（全名、shell、登录状况），老式目录工具。",
      "keywords": [
        "用户信息",
        "finger"
      ],
      "examples": [
        {
          "cmd": "finger alice",
          "desc": "查看用户详情"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ finger alice\nLogin: alice         Name: Alice Wang\nOffice: /dev/null\nLast login Mon Aug  4 10:05 (CST) on pts/0",
        "explain": "显示用户账户信息（全名、办公室、最近登录等）；依赖 fingerd 服务，现代系统常未启用。"
      }
    },
    {
      "name": "adduser",
      "category": "user",
      "description": "Debian 系对 useradd 的交互式封装，引导式创建用户更友好。",
      "keywords": [
        "新增用户",
        "adduser"
      ],
      "examples": [
        {
          "cmd": "sudo adduser alice",
          "desc": "交互式创建并建家目录"
        },
        {
          "cmd": "sudo adduser --disabled-login bob",
          "desc": "创建禁登录账户"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "Red Hat 系常无此命令，改用 useradd -m；比 useradd 更友好",
      "compare": null,
      "options": [
        {
          "flag": "<用户名>",
          "default": "无",
          "desc": "交互式创建用户，自动创建家目录、设置密码并询问备注信息。是 useradd 的友好封装（Debian 系）。"
        },
        {
          "flag": "--system",
          "default": "关闭",
          "desc": "创建系统账号，不创建家目录、不设置密码。"
        },
        {
          "flag": "--home <路径>",
          "default": "/home/用户名",
          "desc": "指定家目录。"
        },
        {
          "flag": "--shell <shell>",
          "default": "/bin/bash",
          "desc": "指定登录 shell。"
        },
        {
          "flag": "--ingroup <组>",
          "default": "同名新建组",
          "desc": "指定主组。"
        },
        {
          "flag": "--disabled-password",
          "default": "关闭",
          "desc": "不设置密码且不提示输入，适用于仅用密钥登录的账号。"
        },
        {
          "flag": "<用户名> <组名>",
          "default": "无",
          "desc": "两个参数连用时表示把用户加入指定组，而非创建用户。"
        },
        {
          "flag": "（可移植性）",
          "default": "无",
          "desc": "为 Debian/Ubuntu 专有的 Perl 脚本，RHEL 系上通常是 useradd 的软链，行为不同。"
        }
      ],
      "sample": {
        "output": "$ adduser bob\nAdding user 'bob' ...\nNew password: \nAdding new group 'bob' ...\n$ id bob\nuid=1002(bob) gid=1002(bob) groups=1002(bob)",
        "explain": "Debian 系交互式建用户脚本：自动建家目录、同名组并提示设密码；`id` 验证账号已建好。"
      }
    },
    {
      "name": "ps",
      "category": "proc",
      "description": "查看当前进程的快照。ps aux 显示全部用户进程详情，是排查进程状态的第一步。",
      "keywords": [
        "进程",
        "ps"
      ],
      "examples": [
        {
          "cmd": "ps aux",
          "desc": "看全部进程"
        },
        {
          "cmd": "ps -ef | grep nginx",
          "desc": "查 nginx"
        },
        {
          "cmd": "ps -u root",
          "desc": "看指定用户进程"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "aux 为 BSD 风格、-ef 为 UNIX 风格；配合 grep 过滤、--sort 排序",
      "compare": null,
      "options": [
        {
          "flag": "aux",
          "default": "无",
          "desc": "BSD 风格，显示所有用户的所有进程含终端外进程。最常用组合，注意前面不加短横线。"
        },
        {
          "flag": "-ef",
          "default": "无",
          "desc": "UNIX 风格全量显示，输出含父进程 PPID。与 aux 信息侧重不同。"
        },
        {
          "flag": "-e, -A",
          "default": "关闭",
          "desc": "显示所有进程。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "完整格式，含 UID、PPID、启动时间与完整命令行。"
        },
        {
          "flag": "-u <用户>",
          "default": "无",
          "desc": "按用户过滤。BSD 风格的 u 则表示以用户为中心的输出格式，二者含义不同。"
        },
        {
          "flag": "-p <PID>",
          "default": "无",
          "desc": "只显示指定 PID，可用逗号分隔多个。"
        },
        {
          "flag": "-o <字段列表>",
          "default": "默认字段集",
          "desc": "自定义输出列，如 -o pid,ppid,%cpu,%mem,cmd。适用于脚本提取。"
        },
        {
          "flag": "--sort=<字段>",
          "default": "无",
          "desc": "排序，前缀 - 为降序，如 --sort=-%cpu。"
        },
        {
          "flag": "-L",
          "default": "关闭",
          "desc": "显示线程。适用于排查多线程程序。"
        },
        {
          "flag": "--forest / f",
          "default": "关闭",
          "desc": "以树状展示父子进程关系。"
        },
        {
          "flag": "（快照特性）",
          "default": "无",
          "desc": "ps 只输出执行瞬间的快照，%CPU 为进程生命周期均值而非瞬时值，看瞬时负载应用 top。"
        }
      ],
      "sample": {
        "output": "$ ps aux | head -5\nUSER   PID %CPU %MEM    VSZ   RSS TTY  STAT START   TIME COMMAND\nroot     1  0.0  0.1 168k  9.2M ?    Ss   09:10   0:02 /sbin/init\nuser  1234  2.1  1.3 1.2g 210m pts/0 S    10:05   0:11 vim app.js",
        "explain": "`ps aux` 列出全部进程；各列：USER 属主、PID 进程号、%CPU/%MEM 占用、VSZ 虚拟内存、RSS 常驻内存、STAT 状态(S 睡眠/R 运行)、TIME 累计 CPU、COMMAND 命令。\n第3行 vim 占 2.1% CPU，便于定位高耗进程。"
      }
    },
    {
      "name": "top",
      "category": "proc",
      "description": "实时动态刷新显示进程与资源占用，按 CPU/内存排序，监控系统负载的常用工具。",
      "keywords": [
        "实时监控",
        "top"
      ],
      "examples": [
        {
          "cmd": "top",
          "desc": "动态查看资源占用"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "top 实时；htop 更友好（需安装）",
      "options": [
        {
          "flag": "-d <秒>",
          "default": "3.0",
          "desc": "刷新间隔秒数，支持小数。"
        },
        {
          "flag": "-p <PID>",
          "default": "全部",
          "desc": "只监控指定进程，最多 20 个。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "只显示指定用户的进程。"
        },
        {
          "flag": "-n <次数>",
          "default": "无限",
          "desc": "刷新指定次数后自动退出。配合 -b 用于脚本采样。"
        },
        {
          "flag": "-b, --batch",
          "default": "关闭",
          "desc": "批处理模式，输出纯文本无交互。重定向到文件时必须使用。"
        },
        {
          "flag": "-H",
          "default": "关闭",
          "desc": "显示线程而非进程。"
        },
        {
          "flag": "-o <字段>",
          "default": "%CPU",
          "desc": "指定排序字段。"
        },
        {
          "flag": "交互键 P/M/T",
          "default": "P（按CPU）",
          "desc": "运行中按键切换排序：P 按 CPU、M 按内存、T 按累计时间。"
        },
        {
          "flag": "交互键 k / r",
          "default": "无",
          "desc": "k 杀死指定进程，r 调整 nice 值。"
        },
        {
          "flag": "交互键 1",
          "default": "关闭",
          "desc": "展开显示每个 CPU 核心的独立占用。"
        },
        {
          "flag": "（负载含义）",
          "default": "无",
          "desc": "load average 三个数分别为 1/5/15 分钟平均值，应与 CPU 核心数对比判断是否过载。"
        }
      ],
      "sample": {
        "output": "$ top -b -n1 | head -8\ntop - 11:45:00 up 3 days,  load average: 0.10, 0.05, 0.01\nTasks: 210 total,   1 running, 209 sleeping\n%Cpu(s):  1.3 us,  0.3 sy, 98.3 id\nMiB Mem :  15987.0 total,  10213.4 free\n   PID USER  PR  NI    VIRT    RES  %CPU %MEM COMMAND\n  1234 user  20   0 1234567 215000  2.1  1.3 vim",
        "explain": "首行含运行时间、负载均值(1/5/15分钟)，值越低越空闲。\nTasks 显示进程总数与睡眠/运行数；%Cpu 中 id 高表示空闲；Mem 显示内存使用。\n下方进程表按资源排序，可找最占 CPU 的进程（交互模式按 P 按 CPU、M 按内存排）。"
      }
    },
    {
      "name": "htop",
      "category": "proc",
      "description": "增强版 top，支持彩色、鼠标、树状视图与方向键操作，交互更友好。",
      "keywords": [
        "进程监控",
        "htop"
      ],
      "examples": [
        {
          "cmd": "htop",
          "desc": "彩色可交互监控"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-d <十分之一秒>",
          "default": "15",
          "desc": "刷新间隔，单位为 0.1 秒，故 -d 10 表示 1 秒。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "只显示指定用户的进程。"
        },
        {
          "flag": "-p <PID列表>",
          "default": "全部",
          "desc": "只显示指定 PID。"
        },
        {
          "flag": "-t, --tree",
          "default": "关闭",
          "desc": "以树状显示进程层级。运行中按 F5 可切换。"
        },
        {
          "flag": "-s <字段>, --sort-key",
          "default": "无",
          "desc": "按指定字段排序，如 -s PERCENT_CPU。"
        },
        {
          "flag": "F6 / F4",
          "default": "无",
          "desc": "运行中 F6 选择排序列，F4 按名称过滤。"
        },
        {
          "flag": "F9",
          "default": "无",
          "desc": "对选中进程发送信号，可选择具体信号编号。"
        },
        {
          "flag": "（相比 top）",
          "default": "无",
          "desc": "支持鼠标操作、彩色条形图与横向滚动查看完整命令行。"
        }
      ],
      "sample": {
        "output": "$ htop\n  CPU[|||               5.2%]  Mem[|||||||      2.1G/15.6G]\n  Tasks: 210, 1 running\n  PID USER  PRI  NI  VIRT   RES  S  CPU% MEM% COMMAND\n 1234 user  20   0 1204M  210M S   2.1  1.3 vim",
        "explain": "htop 是 top 的交互增强版：顶部彩色条显示 CPU/内存占用，列表可鼠标点选、滚动、杀进程（F9）。\n上手更友好，适合实时监控。"
      }
    },
    {
      "name": "kill",
      "category": "proc",
      "description": "向进程发送信号（默认 TERM）以终止它；-9 强制杀死无响应的进程。",
      "keywords": [
        "结束进程",
        "kill"
      ],
      "examples": [
        {
          "cmd": "kill 1234",
          "desc": "默认 SIGTERM"
        },
        {
          "cmd": "kill -9 1234",
          "desc": "强制 SIGKILL"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "先 SIGTERM(-15)，不行再 -9；-9 可能丢数据",
      "compare": null,
      "options": [
        {
          "flag": "-15, -TERM",
          "default": "默认信号",
          "desc": "请求进程优雅退出，允许其保存状态与清理资源。不指定信号时即为此值。"
        },
        {
          "flag": "-9, -KILL",
          "default": "无",
          "desc": "强制终止，进程无法捕获或忽略。会导致数据丢失与临时文件残留，应作为最后手段。"
        },
        {
          "flag": "-2, -INT",
          "default": "无",
          "desc": "等价于 Ctrl+C 的中断信号。"
        },
        {
          "flag": "-1, -HUP",
          "default": "无",
          "desc": "挂起信号，多数守护进程用它触发重新加载配置而不重启。"
        },
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "列出全部信号名与编号对应关系。"
        },
        {
          "flag": "-s <信号>, --signal",
          "default": "TERM",
          "desc": "以名称形式指定信号，如 -s SIGKILL。"
        },
        {
          "flag": "-0",
          "default": "无",
          "desc": "不发送信号，仅检测进程是否存在及是否有权限操作，用退出码表示。"
        },
        {
          "flag": "（僵尸进程）",
          "default": "无",
          "desc": "对 Z 状态的僵尸进程无效，须终止其父进程才能回收。"
        }
      ],
      "sample": {
        "output": "$ kill 1234\n$ kill -9 1234\n$ ps -p 1234\n(无输出，进程已终止)",
        "explain": "`kill 1234` 发送 SIGTERM(15) 请求进程优雅退出；若无效用 `kill -9`(SIGKILL) 强制。\n`ps -p` 无输出表示进程已不存在。"
      }
    },
    {
      "name": "pkill",
      "category": "proc",
      "description": "按进程名匹配并发送信号，比 kill 更方便批量结束某一类进程。",
      "keywords": [
        "按名结束",
        "pkill"
      ],
      "examples": [
        {
          "cmd": "pkill nginx",
          "desc": "结束所有 nginx"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "误杀同名进程，先 pkill -l 预览",
      "compare": null,
      "options": [
        {
          "flag": "<模式>",
          "default": "无",
          "desc": "按进程名正则匹配并发送信号，默认 TERM。默认只匹配进程名而非完整命令行。"
        },
        {
          "flag": "-f, --full",
          "default": "关闭",
          "desc": "匹配完整命令行而非仅进程名。杀死带特定参数的进程时必备，但误伤风险更高。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "限定用户，避免误杀其他用户的同名进程。"
        },
        {
          "flag": "-9",
          "default": "TERM",
          "desc": "强制终止。"
        },
        {
          "flag": "-e, --echo",
          "default": "关闭",
          "desc": "显示被杀死的进程名与 PID。建议常开以确认实际影响范围。"
        },
        {
          "flag": "-x, --exact",
          "default": "关闭",
          "desc": "要求进程名完全匹配，不做子串匹配。可显著降低误杀。"
        },
        {
          "flag": "-n / -o",
          "default": "全部匹配",
          "desc": "分别只作用于最新或最旧的一个匹配进程。"
        },
        {
          "flag": "（建议流程）",
          "default": "无",
          "desc": "先用同参数的 pgrep 确认命中范围，再换成 pkill 执行。"
        }
      ],
      "sample": {
        "output": "$ pkill -u alice chrome\n$ pgrep -u alice chrome\n(无输出，进程已结束)",
        "explain": "`pkill -u alice chrome` 按\"用户+命令名\"批量结束匹配的进程；`pgrep` 无输出即已全部终止。"
      }
    },
    {
      "name": "killall",
      "category": "proc",
      "description": "按进程名结束所有匹配的进程，常用于重启某服务相关的全部实例。",
      "keywords": [
        "按名结束",
        "killall"
      ],
      "examples": [
        {
          "cmd": "killall python",
          "desc": "结束所有 python"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<进程名>",
          "default": "无",
          "desc": "按精确进程名终止全部同名进程，默认发送 TERM。"
        },
        {
          "flag": "-9, -KILL",
          "default": "TERM",
          "desc": "强制终止。"
        },
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "逐个询问后再终止。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "只终止指定用户的进程。"
        },
        {
          "flag": "-w, --wait",
          "default": "关闭",
          "desc": "等待进程真正结束后才返回。适用于脚本中需确保退出。"
        },
        {
          "flag": "-r, --regexp",
          "default": "关闭",
          "desc": "把进程名当作正则表达式处理。"
        },
        {
          "flag": "-s <信号>",
          "default": "TERM",
          "desc": "指定信号。"
        },
        {
          "flag": "（平台差异）",
          "default": "无",
          "desc": "Linux 上按进程名匹配；Solaris/BSD 上 killall 会终止所有进程，跨平台脚本须谨慎。"
        }
      ],
      "sample": {
        "output": "$ killall -9 nginx\nnginx: no process found\n$ killall nginx\n(nginx 进程已终止)",
        "explain": "`killall nginx` 按进程名结束全部实例；首行因已无 nginx 报 not found，确认后再查已无残留。"
      }
    },
    {
      "name": "pgrep",
      "category": "proc",
      "description": "按名查找进程并返回其 PID，常配合 xargs 或脚本使用。",
      "keywords": [
        "查找PID",
        "pgrep"
      ],
      "examples": [
        {
          "cmd": "pgrep nginx",
          "desc": "找 nginx 的 PID"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<模式>",
          "default": "无",
          "desc": "按进程名正则匹配并输出 PID。默认只匹配名称的一部分。"
        },
        {
          "flag": "-f, --full",
          "default": "关闭",
          "desc": "匹配完整命令行。适用于区分参数不同的同名进程。"
        },
        {
          "flag": "-l, --list-name",
          "default": "关闭",
          "desc": "同时输出进程名。"
        },
        {
          "flag": "-a, --list-full",
          "default": "关闭",
          "desc": "输出完整命令行，便于确认匹配是否准确。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "按有效用户过滤。"
        },
        {
          "flag": "-x, --exact",
          "default": "关闭",
          "desc": "进程名完全匹配。"
        },
        {
          "flag": "-n / -o",
          "default": "全部",
          "desc": "只输出最新或最旧的匹配进程。"
        },
        {
          "flag": "-c, --count",
          "default": "关闭",
          "desc": "只输出匹配数量。"
        },
        {
          "flag": "-P <PPID>",
          "default": "无",
          "desc": "按父进程 ID 过滤，用于找出某进程的子进程。"
        }
      ],
      "sample": {
        "output": "$ pgrep -a sshd\n812 /usr/sbin/sshd -D\n1050 /usr/sbin/sshd -D",
        "explain": "`pgrep -a sshd` 列出 sshd 进程的 PID 与完整命令行；常用于先查再决定如何操作进程。"
      }
    },
    {
      "name": "pidof",
      "category": "proc",
      "description": "查询指定程序名的进程 PID，脚本中判断是否已在运行很方便。",
      "keywords": [
        "PID",
        "pidof"
      ],
      "examples": [
        {
          "cmd": "pidof nginx",
          "desc": "返回 nginx PID"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pidof nginx\n812 1050",
        "explain": "`pidof nginx` 直接返回同名进程的所有 PID（空格分隔），脚本中取 PID 很方便。"
      }
    },
    {
      "name": "jobs",
      "category": "proc",
      "description": "列出当前 shell 的后台任务及其编号，配合 bg/fg 管理它们。",
      "keywords": [
        "后台任务",
        "jobs"
      ],
      "examples": [
        {
          "cmd": "jobs",
          "desc": "列出当前 shell 的后台任务"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "列出当前 shell 的后台与暂停任务。作用域仅限当前 shell 会话。"
        },
        {
          "flag": "-l",
          "default": "关闭",
          "desc": "同时显示每个任务的 PID。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "只显示 PID，适用于传给 kill。"
        },
        {
          "flag": "-r / -s",
          "default": "全部",
          "desc": "分别只显示运行中或已暂停的任务。"
        },
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "只显示状态自上次通知后发生变化的任务。"
        },
        {
          "flag": "（任务编号）",
          "default": "无",
          "desc": "用 %1、%2 引用任务；%+ 或 %% 为当前任务，%- 为上一个任务。"
        }
      ],
      "sample": {
        "output": "$ sleep 100 &\n[1] 2345\n$ jobs\n[1]+  Running                 sleep 100 &",
        "explain": "`sleep 100 &` 后台运行并分配作业号 [1] 与 PID 2345。\n`jobs` 列出当前 shell 的后台作业及其状态(Running)。"
      }
    },
    {
      "name": "bg",
      "category": "proc",
      "description": "把暂停的后台任务放到后台继续运行，如 bg %1。",
      "keywords": [
        "后台",
        "bg"
      ],
      "examples": [
        {
          "cmd": "bg %1",
          "desc": "把任务 1 放后台"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "%<任务号>",
          "default": "当前任务",
          "desc": "让暂停的任务在后台继续运行。不指定时作用于最近暂停的任务。"
        },
        {
          "flag": "（典型流程）",
          "default": "无",
          "desc": "先 Ctrl+Z 暂停前台任务，再 bg 转入后台。"
        },
        {
          "flag": "（终端依赖）",
          "default": "无",
          "desc": "后台任务仍属于当前终端，关闭终端会收到 SIGHUP 而终止；需持久运行应改用 nohup 或 setsid。"
        }
      ],
      "sample": {
        "output": "$ jobs\n[1]+  Stopped                 sleep 100\n$ bg %1\n[1]+ sleep 100 &",
        "explain": "`bg %1` 把暂停的作业 1 放到后台继续运行；状态由 Stopped 变为 Running(&)。"
      }
    },
    {
      "name": "fg",
      "category": "proc",
      "description": "把后台任务调回前台运行，便于交互式操作，如 fg %1。",
      "keywords": [
        "前台",
        "fg"
      ],
      "examples": [
        {
          "cmd": "fg %1",
          "desc": "把任务 1 调回前台"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "%<任务号>",
          "default": "当前任务",
          "desc": "把后台任务调回前台。不指定时作用于最近的任务。"
        },
        {
          "flag": "（输入控制）",
          "default": "无",
          "desc": "回到前台后进程才能接收键盘输入与 Ctrl+C。"
        },
        {
          "flag": "（限制）",
          "default": "无",
          "desc": "只能操作当前 shell 启动的任务，无法接管其他终端的进程。"
        }
      ],
      "sample": {
        "output": "$ jobs\n[1]+  Running                 sleep 100 &\n$ fg %1\n(带回前台，可 Ctrl+Z 再次暂停)",
        "explain": "`fg %1` 把后台作业 1 调回前台终端，便于交互或 Ctrl+Z 暂停。"
      }
    },
    {
      "name": "nohup",
      "category": "proc",
      "description": "让命令在退出终端后仍继续运行，输出默认重定向到 nohup.out。",
      "keywords": [
        "后台运行",
        "nohup"
      ],
      "examples": [
        {
          "cmd": "nohup cmd &",
          "desc": "断开终端仍运行"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<命令>",
          "default": "无",
          "desc": "忽略挂断信号运行命令，使其在终端关闭后继续存活。"
        },
        {
          "flag": "（输出重定向）",
          "default": "nohup.out",
          "desc": "未重定向时标准输出与错误自动追加到当前目录的 nohup.out；无写权限则写入 $HOME/nohup.out。"
        },
        {
          "flag": "&",
          "default": "无",
          "desc": "结尾加 & 才会转入后台，否则仍占据当前终端。这是最常见的遗漏。"
        },
        {
          "flag": "> file 2>&1",
          "default": "无",
          "desc": "推荐显式重定向输出，避免 nohup.out 无限增长。"
        },
        {
          "flag": "（对比 setsid）",
          "default": "无",
          "desc": "nohup 仅忽略 SIGHUP，进程仍属原会话；setsid 会创建新会话，脱离更彻底。"
        }
      ],
      "sample": {
        "output": "$ nohup ./server.sh > server.log 2>&1 &\n[1] 3456\n$ tail -f server.log",
        "explain": "`nohup ... &` 让进程忽略挂断信号，退出终端后仍继续运行；输出重定向到 server.log。\n适合启动长期服务。"
      }
    },
    {
      "name": "disown",
      "category": "proc",
      "description": "把任务从 shell 作业表中移除，使其不受终端关闭影响。",
      "keywords": [
        "脱离作业",
        "disown"
      ],
      "examples": [
        {
          "cmd": "disown",
          "desc": "移除作业防 HUP 信号"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sleep 100 &\n[1] 2345\n$ disown\n$ exit\n(进程在终端关闭后继续存活)",
        "explain": "`disown` 把作业从 shell 作业表移除，关闭终端时不会被发 SIGHUP，进程得以存活。"
      }
    },
    {
      "name": "nice",
      "category": "proc",
      "description": "以指定优先级启动进程，-n 值越大优先级越低，避免抢占关键资源。",
      "keywords": [
        "优先级",
        "nice"
      ],
      "examples": [
        {
          "cmd": "nice -n 10 cmd",
          "desc": "低优先级运行"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nice -n 10 backup.sh &\n[1] 4001\n$ ps -o pid,ni,cmd -p 4001\n  PID  NI CMD\n 4001  10 backup.sh",
        "explain": "`nice -n 10` 以较低优先级(高 niceness)启动进程；`ps -o ni` 确认其 NI 为 10，避免抢占关键任务。"
      }
    },
    {
      "name": "renice",
      "category": "proc",
      "description": "调整已运行进程的调度优先级，临时给重要进程让出更多 CPU。",
      "keywords": [
        "优先级",
        "renice"
      ],
      "examples": [
        {
          "cmd": "renice -n 5 -p 1234",
          "desc": "改 PID 优先级"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ renice -n 5 -p 4001\n4001 (process ID) old priority 10, new priority 5\n$ ps -o pid,ni -p 4001\n  PID  NI\n 4001   5",
        "explain": "`renice -n 5 -p 4001` 把运行中进程 4001 的优先级改为 5；`ps` 确认 NI 已从 10 变为 5。"
      }
    },
    {
      "name": "at",
      "category": "proc",
      "description": "在指定时间执行一次性任务，如 echo cmd | at 18:00，适合延时作业。",
      "keywords": [
        "定时任务",
        "at"
      ],
      "examples": [
        {
          "cmd": "echo 'cmd' | at 18:00",
          "desc": "18 点执行"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo 'backup.sh' | at 23:00\njob 7 at Mon Aug  4 23:00\n$ atq\n7 Mon Aug  4 23:00 a user",
        "explain": "`at 23:00` 安排命令在指定时间一次性执行，返回作业号 7；`atq` 列出待执行队列。"
      }
    },
    {
      "name": "batch",
      "category": "proc",
      "description": "在系统负载较低时执行排队任务，无需指定具体时间。",
      "keywords": [
        "空闲执行",
        "batch"
      ],
      "examples": [
        {
          "cmd": "batch",
          "desc": "负载低时运行"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo 'sync-data' | batch\njob 8 at Mon Aug  4 11:50",
        "explain": "`batch` 等同于 at，但仅在系统负载低于阈值(默认 0.8)时才执行，适合低峰跑批处理。"
      }
    },
    {
      "name": "crontab",
      "category": "proc",
      "description": "管理周期性计划任务，-e 编辑、-l 列出，按分/时/日/月/周调度。",
      "keywords": [
        "定时任务",
        "crontab"
      ],
      "examples": [
        {
          "cmd": "crontab -e",
          "desc": "编辑计划任务"
        },
        {
          "cmd": "crontab -l",
          "desc": "列出任务"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "格式 分 时 日 月 周；注意环境变量可能缺失",
      "compare": null,
      "options": [
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "列出当前用户的定时任务。"
        },
        {
          "flag": "-e, --edit",
          "default": "关闭",
          "desc": "编辑定时任务，保存时会做语法校验。使用 EDITOR 环境变量指定的编辑器。"
        },
        {
          "flag": "-r, --remove",
          "default": "关闭",
          "desc": "删除当前用户的全部任务，无二次确认。极易误操作，建议先 -l 备份。"
        },
        {
          "flag": "-u <用户>",
          "default": "当前用户",
          "desc": "操作指定用户的任务，需 root 权限。"
        },
        {
          "flag": "-i",
          "default": "关闭",
          "desc": "配合 -r 时删除前询问确认。"
        },
        {
          "flag": "时间字段",
          "default": "无",
          "desc": "五个字段依次为 分 时 日 月 周，星期中 0 与 7 都表示周日。"
        },
        {
          "flag": "特殊串",
          "default": "无",
          "desc": "支持 @reboot、@daily、@hourly、@weekly、@monthly 等简写。"
        },
        {
          "flag": "（环境差异）",
          "default": "无",
          "desc": "cron 的 PATH 极简且不加载 shell 配置文件，命令须写绝对路径，否则常出现「手动能跑、定时不跑」。"
        },
        {
          "flag": "（百分号）",
          "default": "无",
          "desc": "命令中的 % 会被解释为换行，必须转义为 \\%，date 格式串中尤其常见。"
        }
      ],
      "sample": {
        "output": "$ crontab -l\n0 2 * * * /usr/bin/backup.sh\n$ crontab -e\n(crontab 已更新)",
        "explain": "`crontab -l` 列出当前定时任务：`0 2 * * *` 表示每天 02:00 跑备份。\n`crontab -e` 编辑；格式为 分 时 日 月 周 + 命令。"
      }
    },
    {
      "name": "runlevel",
      "category": "proc",
      "description": "查看当前与上一运行级别（传统 SysV 初始化体系）。",
      "keywords": [
        "运行级别",
        "runlevel"
      ],
      "examples": [
        {
          "cmd": "runlevel",
          "desc": "显示当前/上一级别"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ runlevel\nN 5",
        "explain": "显示运行级别：前一个 N(无切换)，当前 5(多用户图形界面)；3 为纯多用户文本，6 重启。"
      }
    },
    {
      "name": "init",
      "category": "proc",
      "description": "切换系统运行级别，或关机/重启（如 init 0 关机、init 6 重启）。",
      "keywords": [
        "运行级别",
        "init"
      ],
      "examples": [
        {
          "cmd": "sudo init 0",
          "desc": "关机（旧式）"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ init 6\n(broadcast: system is rebooting)",
        "explain": "`init 6` 切换到运行级别 6 触发重启；`init 0` 关机，`init 3` 进文本多用户。现代多用 systemctl 替代。"
      }
    },
    {
      "name": "watch",
      "category": "proc",
      "description": "周期性执行命令并全屏刷新显示，适合盯着变化的值（如 watch -n1 ls）。",
      "keywords": [
        "周期执行",
        "watch"
      ],
      "examples": [
        {
          "cmd": "watch -n 1 'ls -l'",
          "desc": "每秒刷新"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-n <秒>, --interval",
          "default": "2.0",
          "desc": "刷新间隔秒数，支持小数。"
        },
        {
          "flag": "-d, --differences",
          "default": "关闭",
          "desc": "高亮相邻两次输出的差异部分。适用于观察变化趋势。"
        },
        {
          "flag": "-t, --no-title",
          "default": "关闭",
          "desc": "隐藏顶部标题栏，腾出一行显示空间。"
        },
        {
          "flag": "-g, --chgexit",
          "default": "关闭",
          "desc": "输出发生变化时立即退出。适用于等待某状态改变。"
        },
        {
          "flag": "-e, --errexit",
          "default": "关闭",
          "desc": "命令返回非零时退出并提示。"
        },
        {
          "flag": "-x, --exec",
          "default": "关闭",
          "desc": "不经 shell 直接执行命令。含复杂引号时更可控。"
        },
        {
          "flag": "（引号）",
          "default": "无",
          "desc": "含管道或变量的命令须整体加单引号，否则管道会作用于 watch 自身。"
        }
      ],
      "sample": {
        "output": "$ watch -n 2 'df -h /'\nEvery 2.0s: df -h /\nFilesystem  Size  Used  Avail  Use%  Mounted\n/dev/sda1   50G   20G    28G   42%   /",
        "explain": "`watch -n 2` 每 2 秒刷新执行一次命令；此处持续监视根分区使用率，便于观察变化。"
      }
    },
    {
      "name": "lsof",
      "category": "proc",
      "description": "列出进程打开的文件与端口，排查「端口被占用」「文件被删仍写入」很有用。",
      "keywords": [
        "打开文件",
        "端口",
        "lsof"
      ],
      "examples": [
        {
          "cmd": "lsof -i :80",
          "desc": "看 80 端口占用"
        },
        {
          "cmd": "lsof /var/log",
          "desc": "谁在写该文件"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-i",
          "default": "全部",
          "desc": "列出网络连接。可细化为 -i:80 指定端口、-i TCP 指定协议、-i@1.2.3.4 指定地址。"
        },
        {
          "flag": "-p <PID>",
          "default": "全部",
          "desc": "只列出指定进程打开的文件。"
        },
        {
          "flag": "-u <用户>",
          "default": "全部",
          "desc": "按用户过滤，^ 前缀表示排除，如 -u ^root。"
        },
        {
          "flag": "+D <目录>",
          "default": "无",
          "desc": "递归列出目录下被打开的文件。比 -D 慢但结果完整。"
        },
        {
          "flag": "-t, --terse",
          "default": "关闭",
          "desc": "只输出 PID。适用于配合 kill 使用。"
        },
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "不做 IP 反向解析主机名，可大幅提速。"
        },
        {
          "flag": "-P",
          "default": "关闭",
          "desc": "不把端口号转换为服务名，输出数字端口。"
        },
        {
          "flag": "-c <进程名>",
          "default": "全部",
          "desc": "按进程名前缀过滤。"
        },
        {
          "flag": "（权限）",
          "default": "无",
          "desc": "非 root 只能看到自己的进程，排查端口占用通常需要 sudo。"
        }
      ],
      "sample": {
        "output": "$ lsof -i :8080\nCOMMAND  PID USER  FD  TYPE DEVICE SIZE/OFF NODE NAME\nnode    1234 user  12u IPv4  23456 0t0 TCP *:8080 (LISTEN)",
        "explain": "`lsof -i :8080` 列出占用 8080 端口的进程；输出显示 node(PID 1234) 正在 LISTEN，便于排查端口冲突。"
      }
    },
    {
      "name": "strace",
      "category": "proc",
      "description": "跟踪进程的系统调用与信号，诊断程序卡住、权限拒绝等底层问题。",
      "keywords": [
        "系统调用",
        "strace"
      ],
      "examples": [
        {
          "cmd": "strace -p 1234",
          "desc": "跟踪进程系统调用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ strace -f -e trace=network curl -s localhost\nconnect(3, {sa_family=AF_INET,...port=80}, 16) = 0\nsendto(3, \"GET / HTTP/1.1\\r\\n\"..., 75, 0, NULL, 0) = 75",
        "explain": "`strace -e trace=network` 只跟踪网络相关系统调用；此处看到 connect 建立连接、sendto 发送 HTTP 请求，用于诊断程序行为。"
      }
    },
    {
      "name": "time",
      "category": "proc",
      "description": "统计命令的实际/用户/系统耗时，评估性能开销。",
      "keywords": [
        "耗时",
        "time"
      ],
      "examples": [
        {
          "cmd": "time ./build.sh",
          "desc": "测运行时间"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（shell 内建）",
          "default": "无",
          "desc": "bash 内建版本输出 real/user/sys 三行，不支持大部分选项。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "/usr/bin/time 的详细模式，额外输出峰值内存、上下文切换、缺页次数。"
        },
        {
          "flag": "-f <格式>, --format",
          "default": "无",
          "desc": "自定义输出格式，如 %e 实际秒数、%M 峰值内存 KB、%P CPU 占比。"
        },
        {
          "flag": "-o <文件>, --output",
          "default": "标准错误",
          "desc": "把统计结果写入文件，避免与命令自身输出混杂。"
        },
        {
          "flag": "-a, --append",
          "default": "关闭",
          "desc": "配合 -o 追加而非覆盖。"
        },
        {
          "flag": "（调用区别）",
          "default": "无",
          "desc": "要使用选项必须写完整路径 /usr/bin/time，直接写 time 会命中 shell 内建版本。"
        },
        {
          "flag": "（三值含义）",
          "default": "无",
          "desc": "real 为墙钟耗时，user 与 sys 分别为用户态和内核态 CPU 时间；多核并行时两者之和可超过 real。"
        }
      ],
      "sample": {
        "output": "$ time ./build.sh\nreal    0m12.345s\nuser    0m09.120s\nsys     0m01.200s",
        "explain": "`time` 统计命令耗时：real 实际墙钟、user 用户态 CPU、sys 内核态 CPU。\nuser+sys < real 说明有 I/O 等待；常用于性能分析。"
      }
    },
    {
      "name": "timeout",
      "category": "proc",
      "description": "限时运行命令，超时则终止，防止某步卡死拖垮整个脚本。",
      "keywords": [
        "超时",
        "timeout"
      ],
      "examples": [
        {
          "cmd": "timeout 10 cmd",
          "desc": "10 秒后终止"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ timeout 5 slow.sh\n(timed out after 5s, exit 124)\n$ echo $?\n124",
        "explain": "`timeout 5` 在 5 秒后若命令未结束则杀掉并返回码 124；`echo $?` 读到 124 即超时触发。"
      }
    },
    {
      "name": "df",
      "category": "disk",
      "description": "显示各挂载点的磁盘总空间、已用与可用容量；-h 以易读单位显示，监控空间首选。",
      "keywords": [
        "磁盘空间",
        "df"
      ],
      "examples": [
        {
          "cmd": "df -h",
          "desc": "人类可读显示各分区"
        },
        {
          "cmd": "df -i",
          "desc": "查看 inode 使用"
        },
        {
          "cmd": "df -T",
          "desc": "显示文件系统类型"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "空间满但文件不多时，可能是 inode 耗尽，用 df -i 排查",
      "compare": "df 看各挂载点的磁盘总/用/余空间；du 看具体目录/文件占了多少，二者配合定位空间问题。",
      "options": [
        {
          "flag": "-h, --human-readable",
          "default": "关闭（默认 1K 块）",
          "desc": "以 K/M/G 显示。按 1024 进制换算。"
        },
        {
          "flag": "-H, --si",
          "default": "关闭",
          "desc": "同 -h 但按 1000 进制换算，与硬盘厂商标称容量一致。"
        },
        {
          "flag": "-T, --print-type",
          "default": "关闭",
          "desc": "显示文件系统类型。适用于区分 tmpfs 与真实磁盘。"
        },
        {
          "flag": "-i, --inodes",
          "default": "关闭",
          "desc": "显示 inode 使用情况。磁盘明明有空间却报「No space left」时应查它。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "包含伪文件系统与 0 块的挂载项。"
        },
        {
          "flag": "-t <类型> / -x <类型>",
          "default": "无",
          "desc": "只显示或排除指定文件系统类型，如 -x tmpfs 过滤临时文件系统。"
        },
        {
          "flag": "--total",
          "default": "关闭",
          "desc": "在末尾输出合计行。"
        },
        {
          "flag": "<路径>",
          "default": "全部挂载点",
          "desc": "指定路径时显示其所在文件系统的用量。"
        },
        {
          "flag": "（可用量差异）",
          "default": "无",
          "desc": "ext4 默认为 root 保留 5% 空间，故普通用户可用量小于「总量减已用」。"
        }
      ],
      "sample": {
        "output": "$ df -h\nFilesystem  Size  Used Avail Use% Mounted on\n/dev/sda1    50G   20G   28G  42% /\ntmpfs       3.9G     0  3.9G   0% /dev/shm",
        "explain": "`df -h` 以人类可读单位显示各文件系统容量；Used/Avail 已用可用，Use% 使用率，Mounted on 挂载点。\n/dev/sda1 根分区用了 42%，尚有余量。"
      }
    },
    {
      "name": "du",
      "category": "disk",
      "description": "估算目录或文件的磁盘占用；-sh 看总计、-h 易读，定位「谁占空间」的利器。",
      "keywords": [
        "目录大小",
        "du"
      ],
      "examples": [
        {
          "cmd": "du -sh *",
          "desc": "当前各子项总大小"
        },
        {
          "cmd": "du -h --max-depth=1",
          "desc": "一层深度"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "du 统计文件实际占用；df 看分区整体",
      "compare": null,
      "options": [
        {
          "flag": "-h, --human-readable",
          "default": "关闭",
          "desc": "以可读单位显示。"
        },
        {
          "flag": "-s, --summarize",
          "default": "关闭",
          "desc": "只输出每个参数的总计，不逐层展开。"
        },
        {
          "flag": "-d <层数>, --max-depth",
          "default": "无限",
          "desc": "限制统计深度，-d 1 只看当前目录下各子目录合计。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "对文件也单独计数，而非只统计目录。"
        },
        {
          "flag": "-c, --total",
          "default": "关闭",
          "desc": "末尾输出总计行。"
        },
        {
          "flag": "-x, --one-file-system",
          "default": "关闭",
          "desc": "跳过其他文件系统。统计根目录时可避免把网络挂载算进来。"
        },
        {
          "flag": "--exclude=<模式>",
          "default": "无",
          "desc": "排除匹配的路径。"
        },
        {
          "flag": "--apparent-size",
          "default": "关闭",
          "desc": "显示表观大小而非实际磁盘占用。稀疏文件两者差异极大。"
        },
        {
          "flag": "--time",
          "default": "关闭",
          "desc": "同时显示最后修改时间。"
        },
        {
          "flag": "（与 df 不一致）",
          "default": "无",
          "desc": "已删除但仍被进程占用的文件不计入 du 却计入 df，两者对不上时用 lsof 排查。"
        }
      ],
      "sample": {
        "output": "$ du -sh /var/log\n245M  /var/log\n$ du -h --max-depth=1 /home | sort -h\n12K  /home/user/.cache\n2.1G /home/user/data",
        "explain": "`du -sh` 汇总目录总大小(245M)；`--max-depth=1` 看各级子目录并 `sort -h` 找出最占空间的目录。"
      }
    },
    {
      "name": "mount",
      "category": "disk",
      "description": "把文件系统（分区/共享/镜像）挂载到目录树的某一点，使其内容可访问。",
      "keywords": [
        "挂载",
        "mount"
      ],
      "examples": [
        {
          "cmd": "sudo mount /dev/sdb1 /mnt",
          "desc": "挂载到 /mnt"
        },
        {
          "cmd": "sudo mount -a",
          "desc": "挂载 fstab 中全部"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "mount 挂载；umount 卸载；可加 -o ro 只读、loop 挂镜像",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "列出当前所有挂载点。输出冗长，建议配合 findmnt 查看。"
        },
        {
          "flag": "-t <类型>",
          "default": "自动探测",
          "desc": "指定文件系统类型，如 ext4、xfs、nfs、cifs。"
        },
        {
          "flag": "-o <选项列表>",
          "default": "defaults",
          "desc": "挂载选项，多个用逗号分隔。常用 ro 只读、rw 读写、noexec 禁执行、nosuid、noatime 提升性能。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "挂载 /etc/fstab 中所有标注为自动的条目。改完 fstab 后用它验证配置是否可用。"
        },
        {
          "flag": "-r, --read-only",
          "default": "关闭",
          "desc": "以只读方式挂载。适用于取证或修复受损文件系统。"
        },
        {
          "flag": "-o remount",
          "default": "无",
          "desc": "在不卸载的前提下重新挂载并更改选项，如 -o remount,rw。"
        },
        {
          "flag": "--bind <源> <目标>",
          "default": "无",
          "desc": "把已有目录挂载到另一位置，两处内容同步。适用于容器与 chroot。"
        },
        {
          "flag": "-o loop",
          "default": "无",
          "desc": "挂载镜像文件，如 ISO。新版本可自动识别无需显式指定。"
        },
        {
          "flag": "（持久化）",
          "default": "无",
          "desc": "命令行挂载重启后失效，需写入 /etc/fstab；fstab 写错可能导致系统无法启动，建议先 mount -a 验证。"
        }
      ],
      "sample": {
        "output": "$ mount | grep sda1\n/dev/sda1 on / type ext4 (rw,relatime)\n$ mount -t tmpfs tmpfs /mnt/ram",
        "explain": "`mount` 列出已挂载文件系统；首行显示 /dev/sda1 挂载为 /，ext4、可读写(rw)。\n第二行示例把 tmpfs 挂到 /mnt/ram（内存盘）。"
      }
    },
    {
      "name": "umount",
      "category": "disk",
      "description": "卸载已挂载的文件系统；设备忙时可用懒卸载，或先结束占用它的进程。",
      "keywords": [
        "卸载",
        "umount"
      ],
      "examples": [
        {
          "cmd": "sudo umount /mnt",
          "desc": "卸载"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "设备忙时无法卸载，先关闭占用进程",
      "compare": null,
      "options": [
        {
          "flag": "<挂载点或设备>",
          "default": "无",
          "desc": "卸载文件系统。两种写法均可。"
        },
        {
          "flag": "-l, --lazy",
          "default": "关闭",
          "desc": "延迟卸载，立即从目录树摘除，待引用释放后真正卸载。设备忙时的常用解法。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制卸载，主要用于无响应的网络文件系统。可能造成数据丢失。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "卸载 /etc/mtab 中的全部文件系统。"
        },
        {
          "flag": "-R, --recursive",
          "default": "关闭",
          "desc": "递归卸载指定挂载点及其下所有子挂载。"
        },
        {
          "flag": "（target is busy）",
          "default": "无",
          "desc": "报忙时先用 lsof +D <挂载点> 或 fuser -vm <挂载点> 找出占用进程，注意当前 shell 不能处于该目录内。"
        }
      ],
      "sample": {
        "output": "$ umount /mnt/ram\n$ mount | grep ram\n(无输出，已卸载)",
        "explain": "`umount /mnt/ram` 卸载挂载点；`mount | grep ram` 无输出即卸载成功。若提示 busy，先 `fuser -km` 杀占用进程。"
      }
    },
    {
      "name": "fdisk",
      "category": "disk",
      "description": "交互式磁盘分区工具，管理 MBR 分区表；操作会改动分区结构，务必小心。",
      "keywords": [
        "分区",
        "fdisk"
      ],
      "examples": [
        {
          "cmd": "sudo fdisk /dev/sdb",
          "desc": "交互式分区"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "操作分区有数据丢失风险",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ fdisk -l /dev/sdb\nDisk /dev/sdb: 16 GiB, 17179869184 bytes, 33554432 sectors\nDevice     Boot Start      End  Sectors Size Id Type\n/dev/sdb1  *     2048 33554431 33552384  16G 83 Linux",
        "explain": "`fdisk -l /dev/sdb` 列出磁盘与分区表；显示磁盘容量、扇区数、分区 /dev/sdb1(16G, Linux 类型 83)。"
      }
    },
    {
      "name": "parted",
      "category": "disk",
      "description": "支持 GPT 与现代大磁盘的分区工具，命令式操作，适合脚本与大于 2T 的盘。",
      "keywords": [
        "分区",
        "parted"
      ],
      "examples": [
        {
          "cmd": "sudo parted /dev/sdb",
          "desc": "分区（支持大盘）"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ parted /dev/sdb print\nModel: ATA Disk (scsi)\nDisk /dev/sdb: 16.0GB\nNumber  Start   End     Size    File system  Name  Flags\n 1      1049kB  16.0GB  16.0GB  ext4",
        "explain": "`parted print` 以更易读方式显示分区：GPT/MBR、各分区起止、大小与文件系统；比 fdisk 更适合大磁盘与 GPT。"
      }
    },
    {
      "name": "lsblk",
      "category": "disk",
      "description": "以树状列出所有块设备（磁盘与分区）及其挂载点，概览存储拓扑一目了然。",
      "keywords": [
        "块设备",
        "lsblk"
      ],
      "examples": [
        {
          "cmd": "lsblk",
          "desc": "树状显示磁盘与分区"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "以树状列出所有块设备及其分区。不显示未分区的空闲空间。"
        },
        {
          "flag": "-f, --fs",
          "default": "关闭",
          "desc": "显示文件系统类型、卷标、UUID 与挂载点。写 fstab 取 UUID 时常用。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "包含空设备。"
        },
        {
          "flag": "-o <列名>, --output",
          "default": "默认列集",
          "desc": "自定义输出列，如 -o NAME,SIZE,TYPE,MOUNTPOINT,UUID。"
        },
        {
          "flag": "-p, --paths",
          "default": "关闭",
          "desc": "显示完整设备路径，如 /dev/sda1 而非 sda1。"
        },
        {
          "flag": "-d, --nodeps",
          "default": "关闭",
          "desc": "只显示设备本身，不展开其分区。"
        },
        {
          "flag": "-J, --json",
          "default": "关闭",
          "desc": "以 JSON 输出，便于脚本解析。"
        },
        {
          "flag": "-m, --perms",
          "default": "关闭",
          "desc": "显示设备节点的属主、属组与权限。"
        }
      ],
      "sample": {
        "output": "$ lsblk\nNAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda      8:0    0   50G  0 disk\n├─sda1   8:1    0   50G  0 part /\nsdb      8:16   0   16G  0 disk\n└─sdb1   8:17   0   16G  0 part /data",
        "explain": "`lsblk` 树状列出块设备：磁盘(sda/sdb)与分区(sda1/sdb1)及挂载点；清晰展示磁盘→分区→挂载的层级。"
      }
    },
    {
      "name": "blkid",
      "category": "disk",
      "description": "显示块设备的 UUID、文件系统类型与标签，写 fstab 时常用来获取稳定标识。",
      "keywords": [
        "设备UUID",
        "blkid"
      ],
      "examples": [
        {
          "cmd": "sudo blkid",
          "desc": "显示设备 UUID/文件系统"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ blkid /dev/sda1\n/dev/sda1: UUID=\"a1b2c3...\" TYPE=\"ext4\" PARTUUID=\"...\" ",
        "explain": "`blkid` 显示块设备的 UUID、文件系统类型(TYPE)与 PARTUUID；fstab 中常用 UUID= 引用，避免设备名变动导致挂载错乱。"
      }
    },
    {
      "name": "mkfs",
      "category": "disk",
      "description": "在分区上创建文件系统（格式化）；需指定类型如 ext4/xfs，会清空原有数据。",
      "keywords": [
        "格式化",
        "mkfs"
      ],
      "examples": [
        {
          "cmd": "sudo mkfs.ext4 /dev/sdb1",
          "desc": "格式化为 ext4"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "格式化会清空数据！",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mkfs -t ext4 /dev/sdb1\nmke2fs 1.46.5 (30-Dec-2021)\nCreating filesystem with 4096000 4k blocks\n$ blkid /dev/sdb1\n/dev/sdb1: UUID=\"...\" TYPE=\"ext4\" ",
        "explain": "`mkfs -t ext4` 在分区上创建 ext4 文件系统（会清空数据！）；`blkid` 确认 TYPE 已为 ext4。"
      }
    },
    {
      "name": "dd",
      "category": "disk",
      "description": "按块复制原始数据，常用于制作启动盘、磁盘镜像或备份；参数错误会覆写整盘。",
      "keywords": [
        "块复制",
        "dd"
      ],
      "examples": [
        {
          "cmd": "dd if=in of=out bs=4M",
          "desc": "克隆/备份"
        },
        {
          "cmd": "dd if=/dev/zero of=disk.img",
          "desc": "造镜像"
        },
        {
          "cmd": "dd if=in of=out bs=4M status=progress",
          "desc": "显示进度"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "if=/dev/sda 写错 of= 会毁盘，务必核对；bs 越大越快但更占内存",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ dd if=/dev/zero of=test.img bs=1M count=10\n10+0 records in\n10+0 records out\n10485760 bytes (10 MB) copied, 0.01 s, 1.0 GB/s",
        "explain": "`dd if=输入 of=输出 bs=块大小 count=块数`；此处用零填充生成 10MB 测试镜像。\n`if=/dev/sda of=/dev/sdb` 可整盘克隆——极危险，务必核对 if/of 顺序！"
      }
    },
    {
      "name": "fsck",
      "category": "disk",
      "description": "检查并尝试修复文件系统错误，应在卸载后运行，避免损坏数据。",
      "keywords": [
        "文件系统检查",
        "fsck"
      ],
      "examples": [
        {
          "cmd": "sudo fsck /dev/sdb1",
          "desc": "检查并修复"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "需在卸载状态下运行",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ fsck -y /dev/sdb1\nfsck from util-linux 2.38\n/dev/sdb1: clean, 12345/1048576 files, 234567/4194304 blocks",
        "explain": "`fsck -y` 检查并自动修复文件系统；输出 clean 表示无错误。应在卸载状态下运行，否则可能损坏数据。"
      }
    },
    {
      "name": "e2fsck",
      "category": "disk",
      "description": "专用于 ext2/3/4 文件系统的检查与修复，是 fsck 对 ext 的底层实现。",
      "keywords": [
        "ext检查",
        "e2fsck"
      ],
      "examples": [
        {
          "cmd": "sudo e2fsck -f /dev/sdb1",
          "desc": "强制检查"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ e2fsck -f /dev/sdb1\nPass 1: Checking inodes...\n/dev/sdb1: 12345/1048576 files (0.1% non-contiguous), 234567/4194304 blocks",
        "explain": "`e2fsck -f` 强制检查 ext2/3/4 文件系统各阶段(索引节点、块、目录)；输出文件/块数，用于 ext 专用修复。"
      }
    },
    {
      "name": "tune2fs",
      "category": "disk",
      "description": "调整 ext 文件系统的可调参数（如保留块比例、挂载计数、标签）。",
      "keywords": [
        "ext参数",
        "tune2fs"
      ],
      "examples": [
        {
          "cmd": "sudo tune2fs -l /dev/sdb1",
          "desc": "查看参数"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ tune2fs -l /dev/sdb1 | head\nFilesystem volume name:   data\nInode count:              1048576\nBlock size:               4096\nFilesystem state:         clean",
        "explain": "`tune2fs -l` 显示 ext 文件系统参数（卷名、inode 数、块大小、状态）；也可 `-L` 改卷标、`-i` 调检查间隔。"
      }
    },
    {
      "name": "badblocks",
      "category": "disk",
      "description": "扫描磁盘坏块；常与文件系统工具配合，检测介质是否可靠。",
      "keywords": [
        "坏块",
        "badblocks"
      ],
      "examples": [
        {
          "cmd": "sudo badblocks -v /dev/sdb",
          "desc": "扫描坏块"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ badblocks -v /dev/sdb1\nChecking blocks 0 to 4194303\n0 bad blocks found. (0/0/0 errors)",
        "explain": "`badblocks -v` 扫描磁盘坏块；输出 0 bad blocks 表示无损。常与 `e2fsck -c` 配合标记坏块。"
      }
    },
    {
      "name": "nvme",
      "category": "disk",
      "description": "管理 NVMe 固态硬盘：列出设备、查看健康与固件，现代 SSD 维护工具。",
      "keywords": [
        "nvme",
        "nvme"
      ],
      "examples": [
        {
          "cmd": "sudo nvme list",
          "desc": "列出 nvme 设备"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nvme list\nNode             SN                   Model            Namespace Size\n/dev/nvme0n1     S4...                Samsung 980      1.02  TB",
        "explain": "`nvme list` 列出 NVMe 固态硬盘：设备节点、序列号、型号、容量；`nvme smart-log /dev/nvme0n1` 可查健康度。"
      }
    },
    {
      "name": "losetup",
      "category": "disk",
      "description": "将文件关联为回环设备，使磁盘镜像可像真实分区一样挂载。",
      "keywords": [
        "回环设备",
        "losetup"
      ],
      "examples": [
        {
          "cmd": "sudo losetup -f disk.img",
          "desc": "挂载镜像为设备"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ losetup -f test.img\n$ losetup -a\n/dev/loop0: []: (/path/test.img)\n$ losetup -d /dev/loop0",
        "explain": "`losetup -f` 把镜像文件关联到空闲 loop 设备；`-a` 列出所有 loop；`-d` 解除。常用于挂载 .img 分区。"
      }
    },
    {
      "name": "sync",
      "category": "disk",
      "description": "强制把内存中的写入缓存刷到磁盘，安全卸载或断电前执行以防数据丢失。",
      "keywords": [
        "同步",
        "sync"
      ],
      "examples": [
        {
          "cmd": "sync",
          "desc": "强制写入磁盘（卸载前用）"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sync\n$ echo $?\n0",
        "explain": "`sync` 把内核缓存的写操作刷到磁盘，确保数据安全；返回 0 表示完成。卸载/关机前应执行。"
      }
    },
    {
      "name": "mkswap",
      "category": "disk",
      "description": "在分区或文件上建立交换空间，供系统把内存页换出到磁盘。",
      "keywords": [
        "交换分区",
        "mkswap"
      ],
      "examples": [
        {
          "cmd": "sudo mkswap /dev/sdb2",
          "desc": "建 swap"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mkswap /swapfile\nSetting up swapspace version 1, size = 2 GiB\n$ swapon /swapfile\n$ free -h | grep Swap\nSwap:   2.0Gi   0B   2.0Gi",
        "explain": "`mkswap` 初始化交换文件；`swapon` 启用；`free` 显示 Swap 已增 2G，提供额外虚拟内存。"
      }
    },
    {
      "name": "swapon",
      "category": "disk",
      "description": "启用交换分区/文件，把它加入系统可用交换池。",
      "keywords": [
        "启用swap",
        "swapon"
      ],
      "examples": [
        {
          "cmd": "sudo swapon /dev/sdb2",
          "desc": "启用 swap"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ swapon --show\nNAME      TYPE SIZE USED PRIO\n/swapfile file   2G   0B   -2",
        "explain": "`swapon --show` 列出当前启用的交换空间；此处为 2G 文件型交换，USED 0 表示暂未使用。"
      }
    },
    {
      "name": "swapoff",
      "category": "disk",
      "description": "关闭交换空间，常在做内存紧张的操作前先关掉交换以强制使用物理内存。",
      "keywords": [
        "关闭swap",
        "swapoff"
      ],
      "examples": [
        {
          "cmd": "sudo swapoff /dev/sdb2",
          "desc": "关闭"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ swapoff /swapfile\n$ swapon --show\n(无输出，交换已关闭)",
        "explain": "`swapoff /swapfile` 关闭指定交换空间；`swapon --show` 无输出即已全部停用。"
      }
    },
    {
      "name": "dumpe2fs",
      "category": "disk",
      "description": "导出 ext 文件系统的超级块与块组描述信息，诊断文件系统结构用。",
      "keywords": [
        "ext信息",
        "dumpe2fs"
      ],
      "examples": [
        {
          "cmd": "sudo dumpe2fs /dev/sdb1",
          "desc": "看超级块"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ dumpe2fs -h /dev/sdb1\nInode count:              1048576\nBlock size:               4096\nFilesystem state:         clean\nMount count:              12",
        "explain": "`dumpe2fs -h` 仅打印超级块信息（inode 数、块大小、状态、挂载次数）；用于诊断 ext 文件系统元数据。"
      }
    },
    {
      "name": "ncdu",
      "category": "disk",
      "description": "基于终端的交互式磁盘用量分析器，可下钻定位大目录，比 du 更直观。",
      "keywords": [
        "磁盘分析",
        "ncdu",
        "大文件"
      ],
      "examples": [
        {
          "cmd": "ncdu /",
          "desc": "扫描根目录用量"
        },
        {
          "cmd": "ncdu -x /",
          "desc": "不跨文件系统"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装；方向键浏览，d 删除、q 退出",
      "compare": null,
      "options": [
        {
          "flag": "<目录>",
          "default": "当前目录",
          "desc": "扫描并进入交互式磁盘用量浏览界面。"
        },
        {
          "flag": "-x",
          "default": "关闭",
          "desc": "不跨越文件系统边界。扫描 / 时建议开启。"
        },
        {
          "flag": "-o <文件>",
          "default": "无",
          "desc": "把扫描结果导出到文件，供之后离线分析。"
        },
        {
          "flag": "-f <文件>",
          "default": "无",
          "desc": "从导出文件加载结果，无需重新扫描。"
        },
        {
          "flag": "-q",
          "default": "关闭",
          "desc": "静默模式，降低刷新频率。通过 SSH 远程运行时推荐。"
        },
        {
          "flag": "--exclude <模式>",
          "default": "无",
          "desc": "排除匹配路径，可重复指定。"
        },
        {
          "flag": "交互键 d / n / s / C",
          "default": "无",
          "desc": "d 删除选中项，n 按名称排序，s 按大小排序，C 按条目数排序。"
        },
        {
          "flag": "（删除风险）",
          "default": "无",
          "desc": "界面内按 d 会真实删除文件，仅有一次确认，操作需谨慎。"
        }
      ],
      "sample": {
        "output": "$ ncdu /home\n--- /home/user -------------------------------------------------\n  2.1 GiB [##########] /data\n 12.0 KiB [          ] /cache\n Total disk usage:   2.1 GiB",
        "explain": "`ncdu` 交互式磁盘分析：按大小排序各目录，直观找出占用大户(/data 2.1G)，比 du 更易浏览。"
      }
    },
    {
      "name": "duf",
      "category": "disk",
      "description": "人性化的 df 替代，用表格与颜色展示各挂载点的容量与使用情况。",
      "keywords": [
        "磁盘",
        "duf",
        "df替代"
      ],
      "examples": [
        {
          "cmd": "duf",
          "desc": "列出所有挂载点"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ duf\n╭─────────────────────────────╮\n│ MOUNTED ON  SIZE  USED  AVAIL │\n│ /           50G   20G   28G    │\n╰─────────────────────────────╯",
        "explain": "`duf` 是 df 的现代彩色替代，表格化显示各挂载点容量；一目了然看剩余空间。"
      }
    },
    {
      "name": "dust",
      "category": "disk",
      "description": "树状展示目录大小的 du 替代，直观看出各分支占用，快速定位空间大户。",
      "keywords": [
        "目录大小",
        "dust",
        "du替代"
      ],
      "examples": [
        {
          "cmd": "dust",
          "desc": "当前目录大小树"
        },
        {
          "cmd": "dust -d 2",
          "desc": "显示两层"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ dust /home -d 1\n 2.1G ┌── /home/user/data\n12.0K ├── /home/user/cache\n 2.1G ┌── /home/user",
        "explain": "`dust` 以可视化条形展示目录占用；`-d 1` 仅看一级，快速定位哪个子目录最占空间。"
      }
    },
    {
      "name": "quota",
      "category": "disk",
      "description": "查看用户或组的磁盘配额用量，了解是否接近限制。",
      "keywords": [
        "配额",
        "quota"
      ],
      "examples": [
        {
          "cmd": "quota -s",
          "desc": "人类可读显示当前用户配额"
        },
        {
          "cmd": "quota -v user",
          "desc": "查看指定用户"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需文件系统启用配额并在挂载时配置（usrquota/grpquota）",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ quota -s alice\nDisk quotas for user alice:\n  Filesystem  blocks  quota  limit  grace  files  quota  limit\n  /dev/sda1   512000  1G     2G           1234   0      0",
        "explain": "`quota -s` 显示用户磁盘配额(-s 人性化)；alice 已用 512M，软限 1G、硬限 2G，files 数未限制。"
      }
    },
    {
      "name": "ping",
      "category": "net",
      "description": "向目标发送 ICMP 回显请求，测试网络连通性与往返时延，-c 指定次数。",
      "keywords": [
        "连通测试",
        "ping"
      ],
      "examples": [
        {
          "cmd": "ping -c 4 example.com",
          "desc": "发 4 个包"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-c <次数>",
          "default": "无限（须 Ctrl+C 终止）",
          "desc": "发送指定数量后退出。脚本中必须指定，否则会永久阻塞。"
        },
        {
          "flag": "-i <秒>",
          "default": "1",
          "desc": "发包间隔。小于 0.2 秒需要 root 权限。"
        },
        {
          "flag": "-W <秒>",
          "default": "随系统",
          "desc": "单个响应的等待超时。"
        },
        {
          "flag": "-w <秒>",
          "default": "无",
          "desc": "整体截止时间，无论收到多少响应都在此后退出。"
        },
        {
          "flag": "-s <字节>",
          "default": "56",
          "desc": "ICMP 负载大小。加 8 字节头部即为实际包长，可用于探测 MTU。"
        },
        {
          "flag": "-M do",
          "default": "无",
          "desc": "禁止分片。配合 -s 二分查找可确定路径 MTU。"
        },
        {
          "flag": "-4 / -6",
          "default": "随解析结果",
          "desc": "强制使用 IPv4 或 IPv6。"
        },
        {
          "flag": "-I <接口或地址>",
          "default": "路由决定",
          "desc": "指定源接口或源地址。适用于多网卡主机验证特定链路。"
        },
        {
          "flag": "-q, --quiet",
          "default": "关闭",
          "desc": "只输出开头与最终统计，省略每包详情。"
        },
        {
          "flag": "-f, --flood",
          "default": "关闭",
          "desc": "洪泛模式，需 root。会产生极大流量，仅限本地压测。"
        },
        {
          "flag": "（不通的含义）",
          "default": "无",
          "desc": "ping 不通不代表主机宕机，很多防火墙默认丢弃 ICMP，应改用 TCP 探测确认。"
        }
      ],
      "sample": {
        "output": "$ ping -c 3 example.com\nPING example.com (93.184.216.34): 56 data bytes\n64 bytes from 93.184.216.34: icmp_seq=0 ttl=56 time=12.3 ms\n--- example.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, avg rtt=12.4 ms",
        "explain": "`ping -c 3` 发 3 个 ICMP 回显请求；每行显示往返时间(time)、TTL。\n统计段给出丢包率(0% 正常)与平均 RTT(12.4ms)，用于测试连通性与延迟。"
      }
    },
    {
      "name": "curl",
      "category": "net",
      "description": "用 URL 传输数据，支持 HTTP/FTP 等数十种协议，-O 下载、-d 提交、-I 看头部。",
      "keywords": [
        "下载",
        "HTTP",
        "curl"
      ],
      "examples": [
        {
          "cmd": "curl -O url",
          "desc": "下载并保留远程文件名"
        },
        {
          "cmd": "curl -L -o f url",
          "desc": "跟随重定向下载"
        },
        {
          "cmd": "curl -I url",
          "desc": "只看响应头"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "管道执行下载脚本前先确认来源可信；-L 跟随重定向、-sS 静默但显示错误",
      "compare": null,
      "options": [
        {
          "flag": "-X <方法>, --request",
          "default": "GET（带 -d 时为 POST）",
          "desc": "指定 HTTP 方法。使用 -d 时会自动改为 POST，无需重复指定。"
        },
        {
          "flag": "-d <数据>, --data",
          "default": "无",
          "desc": "发送请求体，默认 Content-Type 为 application/x-www-form-urlencoded。@file 可从文件读取。"
        },
        {
          "flag": "-H <头>, --header",
          "default": "无",
          "desc": "添加请求头，可重复。如 -H 'Content-Type: application/json'。"
        },
        {
          "flag": "-o <文件>, --output",
          "default": "标准输出",
          "desc": "保存到指定文件名。"
        },
        {
          "flag": "-O, --remote-name",
          "default": "关闭",
          "desc": "以 URL 中的文件名保存到当前目录。"
        },
        {
          "flag": "-L, --location",
          "default": "关闭",
          "desc": "跟随 301/302 重定向。默认不跟随，这是下载到空文件的常见原因。"
        },
        {
          "flag": "-s, --silent",
          "default": "关闭",
          "desc": "静默模式，隐藏进度条与错误。常配合 -S 保留错误提示。"
        },
        {
          "flag": "-i / -I",
          "default": "关闭",
          "desc": "-i 输出响应头加正文；-I 只发 HEAD 请求仅取响应头。"
        },
        {
          "flag": "-u <用户:密码>, --user",
          "default": "无",
          "desc": "HTTP 基本认证凭据。"
        },
        {
          "flag": "-k, --insecure",
          "default": "关闭",
          "desc": "跳过 TLS 证书校验。仅限调试自签证书，生产环境使用等于放弃传输安全。"
        },
        {
          "flag": "-w <格式>, --write-out",
          "default": "无",
          "desc": "请求完成后输出指定变量，如 %{http_code}、%{time_total}。适用于探测与计时。"
        },
        {
          "flag": "--connect-timeout <秒> / -m <秒>",
          "default": "无",
          "desc": "分别限制连接阶段与整个请求的最长耗时。脚本中应始终设置。"
        },
        {
          "flag": "-f, --fail",
          "default": "关闭",
          "desc": "HTTP 错误码时不输出正文并返回非零退出码。脚本判断成功与否时必备。"
        },
        {
          "flag": "-C -, --continue-at",
          "default": "关闭",
          "desc": "断点续传，自动判断续传位置。"
        },
        {
          "flag": "-x <代理>, --proxy",
          "default": "无",
          "desc": "通过代理访问，如 -x http://127.0.0.1:7890。"
        }
      ],
      "sample": {
        "output": "$ curl -s -o /dev/null -w '%{http_code} %{time_total}\\n' https://example.com\n200 0.412\n$ curl -I https://example.com\nHTTP/2 200\ncontent-type: text/html",
        "explain": "第1条用 `-w` 输出 HTTP 状态码 200 与总耗时 0.412s，适合脚本判断。\n第2条 `-I` 仅取响应头，看到 HTTP/2 200 与内容类型。"
      }
    },
    {
      "name": "wget",
      "category": "net",
      "description": "从网络下载文件，支持递归与断点续传，适合脚本中稳定拉取资源。",
      "keywords": [
        "下载",
        "wget"
      ],
      "examples": [
        {
          "cmd": "wget url",
          "desc": "下载到当前目录"
        },
        {
          "cmd": "wget -c url",
          "desc": "断点续传"
        },
        {
          "cmd": "wget -P /tmp url",
          "desc": "指定保存目录"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "-O 指定文件名、-P 指定目录、-r 整站镜像（谨慎使用）",
      "compare": null,
      "options": [
        {
          "flag": "-O <文件>",
          "default": "URL 中的文件名",
          "desc": "指定保存文件名。-O - 表示输出到标准输出。"
        },
        {
          "flag": "-c, --continue",
          "default": "关闭",
          "desc": "断点续传。服务器需支持 Range 请求。"
        },
        {
          "flag": "-b, --background",
          "default": "关闭",
          "desc": "转入后台下载，日志写入 wget-log。"
        },
        {
          "flag": "-r, --recursive",
          "default": "关闭",
          "desc": "递归下载。默认深度为 5，配合 -l 调整。"
        },
        {
          "flag": "-l <深度>, --level",
          "default": "5",
          "desc": "递归深度，0 表示无限。"
        },
        {
          "flag": "-np, --no-parent",
          "default": "关闭",
          "desc": "递归时不回溯到父目录。镜像子站点时必备。"
        },
        {
          "flag": "-k, --convert-links",
          "default": "关闭",
          "desc": "下载后把链接改为本地相对路径，便于离线浏览。"
        },
        {
          "flag": "-P <目录>, --directory-prefix",
          "default": "当前目录",
          "desc": "指定保存目录。"
        },
        {
          "flag": "-q / -nv",
          "default": "关闭",
          "desc": "分别为完全静默与精简输出。"
        },
        {
          "flag": "--limit-rate=<速率>",
          "default": "无限制",
          "desc": "限速，如 --limit-rate=200k。避免占满带宽。"
        },
        {
          "flag": "-t <次数>, --tries",
          "default": "20",
          "desc": "失败重试次数，0 表示无限重试。"
        },
        {
          "flag": "-T <秒>, --timeout",
          "default": "900",
          "desc": "读取超时秒数。"
        },
        {
          "flag": "--no-check-certificate",
          "default": "关闭",
          "desc": "跳过证书校验，存在中间人风险。"
        },
        {
          "flag": "-U <标识>, --user-agent",
          "default": "Wget/版本号",
          "desc": "伪装 User-Agent，用于绕过部分站点的拦截。"
        },
        {
          "flag": "-i <文件>, --input-file",
          "default": "无",
          "desc": "从文件批量读取待下载 URL，每行一个。"
        }
      ],
      "sample": {
        "output": "$ wget -q https://example.com/file.zip\n$ ls -l file.zip\n-rw-r--r-- 1 user user 1048576 Aug  4 12:00 file.zip",
        "explain": "`wget -q` 安静地下载文件到当前目录；`ls` 确认 file.zip 已落地(1MB)。支持断点续传 `-c`。"
      }
    },
    {
      "name": "ssh",
      "category": "net",
      "description": "通过加密通道远程登录并执行命令，是管理服务器最基础的工具。",
      "keywords": [
        "远程登录",
        "ssh"
      ],
      "examples": [
        {
          "cmd": "ssh user@host",
          "desc": "登录远程"
        },
        {
          "cmd": "ssh -p 2222 user@host",
          "desc": "指定端口"
        },
        {
          "cmd": "ssh -i key.pem user@host",
          "desc": "指定密钥"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "首次连接会确认主机指纹；推荐密钥登录并禁用密码（sshd_config）",
      "compare": null,
      "options": [
        {
          "flag": "-p <端口>",
          "default": "22",
          "desc": "指定端口。注意 scp 用大写 -P，容易混淆。"
        },
        {
          "flag": "-i <私钥文件>",
          "default": "~/.ssh/id_* 依次尝试",
          "desc": "指定私钥。私钥权限须为 600，否则会被拒绝使用。"
        },
        {
          "flag": "-l <用户>",
          "default": "当前本地用户名",
          "desc": "指定登录用户，等价于 user@host 写法。"
        },
        {
          "flag": "-v / -vv / -vvv",
          "default": "关闭",
          "desc": "递增的调试输出。排查认证失败与连接问题的首选。"
        },
        {
          "flag": "-N",
          "default": "关闭",
          "desc": "不执行远程命令，仅建立连接。做端口转发时配合使用。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "认证完成后转入后台。常与 -N 组合用于常驻隧道。"
        },
        {
          "flag": "-L <本地端口:目标主机:目标端口>",
          "default": "无",
          "desc": "本地端口转发，把本地端口的流量经跳板转到目标。适用于访问内网服务。"
        },
        {
          "flag": "-R <远程端口:目标主机:目标端口>",
          "default": "无",
          "desc": "远程端口转发，把远端端口暴露到本地网络。需服务端允许 GatewayPorts。"
        },
        {
          "flag": "-D <端口>",
          "default": "无",
          "desc": "建立 SOCKS5 动态代理。"
        },
        {
          "flag": "-J <跳板机>",
          "default": "无",
          "desc": "通过跳板机连接，可写多级用逗号分隔。比旧的 ProxyCommand 简洁。"
        },
        {
          "flag": "-o <配置项>",
          "default": "无",
          "desc": "临时覆盖配置，如 -o StrictHostKeyChecking=no。自动化中常用但会削弱安全校验。"
        },
        {
          "flag": "-t",
          "default": "关闭",
          "desc": "强制分配伪终端。执行需要交互的远程命令时必需。"
        },
        {
          "flag": "-X / -Y",
          "default": "关闭",
          "desc": "启用 X11 转发，-Y 为信任模式限制更少。"
        },
        {
          "flag": "-C",
          "default": "关闭",
          "desc": "启用压缩。仅在低带宽链路上有收益。"
        }
      ],
      "sample": {
        "output": "$ ssh user@192.168.1.10\nuser@192.168.1.10's password: \nWelcome to Ubuntu 22.04\n$ hostname\nserver01",
        "explain": "`ssh user@host` 远程登录；输入密码后进入对端 shell，`hostname` 显示已连到 server01。"
      }
    },
    {
      "name": "scp",
      "category": "net",
      "description": "基于 SSH 安全复制文件/目录，-P 指定端口，-r 递归目录。",
      "keywords": [
        "远程复制",
        "scp"
      ],
      "examples": [
        {
          "cmd": "scp f.txt user@host:/tmp",
          "desc": "上传"
        },
        {
          "cmd": "scp -r dir user@host:~/",
          "desc": "递归上传"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-r",
          "default": "关闭",
          "desc": "递归复制目录。复制目录时必须指定。"
        },
        {
          "flag": "-P <端口>",
          "default": "22",
          "desc": "指定端口。这里是大写 P，与 ssh 的小写 -p 不同，是高频错误点。"
        },
        {
          "flag": "-i <私钥>",
          "default": "默认密钥",
          "desc": "指定私钥文件。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "保留原文件的修改时间与权限。注意与大写 -P 含义完全不同。"
        },
        {
          "flag": "-C",
          "default": "关闭",
          "desc": "传输时压缩。"
        },
        {
          "flag": "-l <限速>",
          "default": "无限制",
          "desc": "限制带宽，单位 Kbit/s。"
        },
        {
          "flag": "-q",
          "default": "关闭",
          "desc": "隐藏进度条。"
        },
        {
          "flag": "-3",
          "default": "关闭",
          "desc": "两台远程主机之间复制时，让数据经由本地中转。"
        },
        {
          "flag": "-o <配置项>",
          "default": "无",
          "desc": "传递 ssh 配置项。"
        },
        {
          "flag": "（现状）",
          "default": "无",
          "desc": "OpenSSH 9 起 scp 默认改用 SFTP 协议，且官方推荐改用 rsync 或 sftp。"
        }
      ],
      "sample": {
        "output": "$ scp file.txt user@192.168.1.10:/tmp/\nfile.txt                      100% 1024     1.0KB/s   00:01\n$ ssh user@192.168.1.10 'ls /tmp/file.txt'\n/tmp/file.txt",
        "explain": "`scp` 安全复制文件到远端 /tmp/；进度条显示 100% 完成。再用 ssh 远端 `ls` 确认已送达。"
      }
    },
    {
      "name": "sftp",
      "category": "net",
      "description": "交互式 SFTP 客户端，像 ftp 一样在远程传文件，但走加密通道。",
      "keywords": [
        "安全传输",
        "sftp"
      ],
      "examples": [
        {
          "cmd": "sftp user@host",
          "desc": "交互传文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-P <端口>",
          "default": "22",
          "desc": "指定端口，注意为大写。"
        },
        {
          "flag": "-i <私钥>",
          "default": "默认密钥",
          "desc": "指定私钥。"
        },
        {
          "flag": "-b <批处理文件>",
          "default": "无",
          "desc": "从文件读取命令批量执行，适用于自动化。遇错即停，除非命令前加 -。"
        },
        {
          "flag": "-r",
          "default": "关闭",
          "desc": "在 get/put 时递归传输目录。"
        },
        {
          "flag": "交互命令 get / put",
          "default": "无",
          "desc": "分别为下载与上传，加 -r 可递归。"
        },
        {
          "flag": "交互命令 lcd / lls",
          "default": "无",
          "desc": "带 l 前缀的命令作用于本地，不带的作用于远程。"
        },
        {
          "flag": "-o <配置项>",
          "default": "无",
          "desc": "传递 ssh 配置项。"
        }
      ],
      "sample": {
        "output": "$ sftp user@host\nsftp> put local.txt\nUploading local.txt to /home/user/local.txt\nsftp> ls\nlocal.txt",
        "explain": "`sftp` 交互式安全传输；`put` 上传文件，`ls` 确认远端已存在。适合无 scp 时的文件交换。"
      }
    },
    {
      "name": "rsync",
      "category": "net",
      "description": "增量同步文件/目录，只传差异部分，-a 保留属性、-z 压缩，备份首选。",
      "keywords": [
        "增量同步",
        "rsync"
      ],
      "examples": [
        {
          "cmd": "rsync -avz src/ host:/dst",
          "desc": "远程增量备份"
        },
        {
          "cmd": "rsync -a --delete src/ dst/",
          "desc": "镜像同步"
        }
      ],
      "frequency": "高",
      "difficulty": "进阶",
      "pitfalls": "--delete 会删目标多余文件，先 --dry-run",
      "compare": null,
      "options": [
        {
          "flag": "-a, --archive",
          "default": "关闭",
          "desc": "归档模式，等价 -rlptgoD，保留权限、属主、时间与符号链接。最常用的基础选项。"
        },
        {
          "flag": "-v / -vv",
          "default": "关闭",
          "desc": "输出传输的文件列表，重复可增加详细度。"
        },
        {
          "flag": "-z, --compress",
          "default": "关闭",
          "desc": "传输时压缩。跨公网有收益，局域网可能反而变慢。"
        },
        {
          "flag": "-P",
          "default": "关闭",
          "desc": "等价 --partial --progress，显示进度并保留部分传输结果以便续传。"
        },
        {
          "flag": "--delete",
          "default": "关闭",
          "desc": "删除目标端源端已不存在的文件，实现严格镜像。误用会造成大量删除，务必先 -n 演练。"
        },
        {
          "flag": "-n, --dry-run",
          "default": "关闭",
          "desc": "只演练不实际传输。使用 --delete 前的必备步骤。"
        },
        {
          "flag": "--exclude=<模式>",
          "default": "无",
          "desc": "排除匹配路径，可重复。也可用 --exclude-from 从文件读取。"
        },
        {
          "flag": "-e <命令>",
          "default": "ssh",
          "desc": "指定远程 shell，如 -e 'ssh -p 2222'。"
        },
        {
          "flag": "-u, --update",
          "default": "关闭",
          "desc": "跳过目标端更新的文件。"
        },
        {
          "flag": "--bwlimit=<KB/s>",
          "default": "无限制",
          "desc": "限制带宽占用。"
        },
        {
          "flag": "-h",
          "default": "关闭",
          "desc": "以可读单位显示数字。"
        },
        {
          "flag": "（尾部斜杠）",
          "default": "无",
          "desc": "源路径带 / 表示复制目录内容，不带 / 表示复制目录本身。这是最经典的语义陷阱。"
        }
      ],
      "sample": {
        "output": "$ rsync -avh --progress src/ user@host:/backup/\nsending incremental file list\na.txt\n         1.02K 100%    0.00kB/s    0:00:00\nsent 1.05K bytes  received 35 bytes  2.17K bytes/sec",
        "explain": "`rsync -avh` 增量同步(只传变更)；`-a` 归档保留属性，`--progress` 显示进度。适合备份与镜像。"
      }
    },
    {
      "name": "netstat",
      "category": "net",
      "description": "显示网络连接、路由与端口监听（较旧），排查端口占用仍常用。",
      "keywords": [
        "网络状态",
        "netstat"
      ],
      "examples": [
        {
          "cmd": "netstat -tunlp",
          "desc": "看监听端口"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "netstat 已过时，推荐 ss",
      "options": [
        {
          "flag": "-t / -u",
          "default": "全部",
          "desc": "分别只显示 TCP 或 UDP 连接。"
        },
        {
          "flag": "-l, --listening",
          "default": "关闭",
          "desc": "只显示监听状态的套接字。"
        },
        {
          "flag": "-n, --numeric",
          "default": "关闭",
          "desc": "不解析主机名与服务名，直接显示数字。可显著提速。"
        },
        {
          "flag": "-p, --program",
          "default": "关闭",
          "desc": "显示占用套接字的进程 PID 与名称。查看他人进程需 root。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "显示所有连接，含监听与非监听。"
        },
        {
          "flag": "-r, --route",
          "default": "关闭",
          "desc": "显示路由表，等价于 route -n。"
        },
        {
          "flag": "-i, --interfaces",
          "default": "关闭",
          "desc": "显示网卡统计信息。"
        },
        {
          "flag": "-s, --statistics",
          "default": "关闭",
          "desc": "按协议输出汇总统计。"
        },
        {
          "flag": "（常用组合）",
          "default": "无",
          "desc": "-tulnp 是查看本机监听端口的经典组合。"
        },
        {
          "flag": "（弃用状态）",
          "default": "无",
          "desc": "netstat 属于已废弃的 net-tools，新系统可能未预装，建议改用 ss。"
        }
      ],
      "sample": {
        "output": "$ netstat -tunlp | head -4\nProto Recv-Q Send-Q Local Address  State   PID/Program\ntcp        0      0 0.0.0.0:22     LISTEN  812/sshd\ntcp        0      0 127.0.0.1:8080 LISTEN  1234/node",
        "explain": "`netstat -tunlp` 列出监听端口：t=tcp,u=udp,n=数字, l=监听,p=进程。\nsshd 监听 22、node 监听 127.0.0.1:8080，可查端口占用。"
      }
    },
    {
      "name": "ss",
      "category": "net",
      "description": "现代版 netstat，查看套接字/连接/监听端口更快更全，推荐替代 netstat。",
      "keywords": [
        "套接字",
        "ss"
      ],
      "examples": [
        {
          "cmd": "ss -tunlp",
          "desc": "看监听端口（替代 netstat）"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "ss 比 netstat 更快更全",
      "options": [
        {
          "flag": "-t / -u",
          "default": "全部",
          "desc": "分别筛选 TCP 或 UDP。"
        },
        {
          "flag": "-l, --listening",
          "default": "关闭",
          "desc": "只显示监听套接字。"
        },
        {
          "flag": "-n, --numeric",
          "default": "关闭",
          "desc": "不解析服务名。"
        },
        {
          "flag": "-p, --processes",
          "default": "关闭",
          "desc": "显示所属进程。需要相应权限。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "显示全部套接字。"
        },
        {
          "flag": "-s, --summary",
          "default": "关闭",
          "desc": "输出各协议的连接数摘要。"
        },
        {
          "flag": "-4 / -6",
          "default": "全部",
          "desc": "只显示 IPv4 或 IPv6。"
        },
        {
          "flag": "-o, --options",
          "default": "关闭",
          "desc": "显示计时器信息，如重传与保活倒计时。"
        },
        {
          "flag": "state <状态>",
          "default": "全部",
          "desc": "按连接状态过滤，如 state established、state time-wait。"
        },
        {
          "flag": "'( dport = :80 )'",
          "default": "无",
          "desc": "按端口过滤的表达式语法，支持 sport 与 dport。"
        },
        {
          "flag": "（相比 netstat）",
          "default": "无",
          "desc": "直接读取内核 netlink 接口，在连接数上万时速度优势明显。"
        }
      ],
      "sample": {
        "output": "$ ss -tlnp\nState   Recv-Q Send-Q Local Address:Port  Process\nLISTEN 0      128    0.0.0.0:22          users:((\"sshd\",pid=812))\nLISTEN 0      128    127.0.0.1:8080      users:((\"node\",pid=1234))",
        "explain": "`ss -tlnp` 是现代版 netstat，更快；显示 LISTEN 状态的 TCP 端口及对应进程(pid)。"
      }
    },
    {
      "name": "ip",
      "category": "net",
      "description": "功能全面的网络配置工具（ip addr/link/route），管理地址、接口与路由。",
      "keywords": [
        "网络配置",
        "ip"
      ],
      "examples": [
        {
          "cmd": "ip addr",
          "desc": "看网卡 IP"
        },
        {
          "cmd": "ip route",
          "desc": "看路由表"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "ip 取代 ifconfig/route",
      "options": [
        {
          "flag": "addr show, a",
          "default": "无",
          "desc": "查看网卡与 IP 地址，替代 ifconfig。可简写 ip a。"
        },
        {
          "flag": "addr add <IP/掩码> dev <网卡>",
          "default": "无",
          "desc": "添加 IP 地址。重启后失效，持久化需写入网络配置。"
        },
        {
          "flag": "link set <网卡> up|down",
          "default": "无",
          "desc": "启用或关闭网卡。远程操作时关闭正在使用的网卡会立即断连。"
        },
        {
          "flag": "route show, r",
          "default": "无",
          "desc": "查看路由表。"
        },
        {
          "flag": "route add default via <网关>",
          "default": "无",
          "desc": "添加默认路由。"
        },
        {
          "flag": "neigh show, n",
          "default": "无",
          "desc": "查看 ARP 邻居表，替代 arp -a。"
        },
        {
          "flag": "-br, -brief",
          "default": "关闭",
          "desc": "以精简表格输出，如 ip -br a，可读性远好于默认格式。"
        },
        {
          "flag": "-c, -color",
          "default": "关闭",
          "desc": "彩色输出。"
        },
        {
          "flag": "-4 / -6",
          "default": "全部",
          "desc": "只显示对应地址族。"
        },
        {
          "flag": "-s, -stats",
          "default": "关闭",
          "desc": "显示收发包与错误统计。"
        },
        {
          "flag": "-j, -json",
          "default": "关闭",
          "desc": "输出 JSON，便于脚本解析。"
        }
      ],
      "sample": {
        "output": "$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.20/24 brd 192.168.1.255 scope global eth0\n$ ip route\ndefault via 192.168.1.1 dev eth0",
        "explain": "`ip addr show` 显示网卡 IP(192.168.1.20/24)与状态 UP；`ip route` 显示默认网关 192.168.1.1。取代旧 ifconfig。"
      }
    },
    {
      "name": "ifconfig",
      "category": "net",
      "description": "配置与查看网络接口（较旧），新建系统多被 ip 取代，但仍在用。",
      "keywords": [
        "网卡配置",
        "ifconfig"
      ],
      "examples": [
        {
          "cmd": "ifconfig",
          "desc": "看接口信息"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "已被 ip 命令取代",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "显示所有已启用网卡。默认不显示已关闭的网卡。"
        },
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "显示全部网卡，含未启用的。"
        },
        {
          "flag": "<网卡> up / down",
          "default": "无",
          "desc": "启用或关闭网卡。"
        },
        {
          "flag": "<网卡> <IP> netmask <掩码>",
          "default": "无",
          "desc": "配置 IP 与子网掩码。重启后失效。"
        },
        {
          "flag": "<网卡>:<n>",
          "default": "无",
          "desc": "配置别名网卡以绑定多个 IP，如 eth0:1。"
        },
        {
          "flag": "mtu <值>",
          "default": "1500",
          "desc": "设置最大传输单元。"
        },
        {
          "flag": "（弃用状态）",
          "default": "无",
          "desc": "属 net-tools 已废弃，不显示同一网卡的全部 IP，多地址场景请改用 ip addr。"
        }
      ],
      "sample": {
        "output": "$ ifconfig eth0\neth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500\n      inet 192.168.1.20  netmask 255.255.255.0\n      RX packets 12345  bytes 2.1M",
        "explain": "旧式网卡配置查看；显示 inet 地址、掩码、收发统计。已过时，建议用 `ip` 替代，但很多脚本仍在用。"
      }
    },
    {
      "name": "traceroute",
      "category": "net",
      "description": "逐跳显示到目标经过的路由，定位网络在哪一跳变慢或中断。",
      "keywords": [
        "路由追踪",
        "traceroute"
      ],
      "examples": [
        {
          "cmd": "traceroute example.com",
          "desc": "显示路径跳数"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "不做反向 DNS 解析，输出纯 IP。可明显加快速度。"
        },
        {
          "flag": "-m <跳数>, --max-hops",
          "default": "30",
          "desc": "最大跳数上限。"
        },
        {
          "flag": "-q <次数>",
          "default": "3",
          "desc": "每跳发送的探测包数量。"
        },
        {
          "flag": "-w <秒>",
          "default": "5",
          "desc": "每跳的等待超时。"
        },
        {
          "flag": "-I",
          "default": "关闭",
          "desc": "使用 ICMP 探测而非默认的 UDP。部分网络只放行 ICMP。"
        },
        {
          "flag": "-T",
          "default": "关闭",
          "desc": "使用 TCP SYN 探测，配合 -p 指定端口。穿透防火墙效果最好。"
        },
        {
          "flag": "-p <端口>",
          "default": "33434 起递增",
          "desc": "指定目标端口。"
        },
        {
          "flag": "-4 / -6",
          "default": "随解析",
          "desc": "指定地址族。"
        },
        {
          "flag": "（星号含义）",
          "default": "无",
          "desc": "* 表示该跳未响应，通常是路由器禁用了 ICMP 回应，并不必然代表链路中断。"
        }
      ],
      "sample": {
        "output": "$ traceroute example.com\n 1  gateway (192.168.1.1)   1.2 ms\n 2  10.0.0.1                5.4 ms\n 3  93.184.216.34          12.3 ms",
        "explain": "逐跳显示到目标的路径与每跳延迟；第1跳是网关，最后一跳到达目标(12.3ms)，用于定位网络瓶颈在哪一段。"
      }
    },
    {
      "name": "mtr",
      "category": "net",
      "description": "结合 ping 与 traceroute，实时持续诊断各跳的丢包与延迟。",
      "keywords": [
        "路由诊断",
        "mtr"
      ],
      "examples": [
        {
          "cmd": "mtr example.com",
          "desc": "持续监控路径"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mtr -r -c 10 example.com\nHOST: local  Loss%  Snt  Last  Avg\n  1. gateway  0.0%    10   1.2   1.5\n  3. 93.184.. 0.0%    10  12.3 12.5",
        "explain": "`mtr` 结合 ping+traceroute 并持续采样；`-c 10` 发 10 轮，显示每跳丢包率(Loss%)与平均延迟，比 traceroute 更稳。"
      }
    },
    {
      "name": "dig",
      "category": "net",
      "description": "强大的 DNS 查询工具，返回详细解析记录与 TTL，排域名解析首选。",
      "keywords": [
        "DNS查询",
        "dig"
      ],
      "examples": [
        {
          "cmd": "dig example.com",
          "desc": "查 A 记录"
        },
        {
          "cmd": "dig @8.8.8.8 example.com",
          "desc": "指定 DNS"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<域名>",
          "default": "无",
          "desc": "查询 A 记录。默认使用 /etc/resolv.conf 中的解析器。"
        },
        {
          "flag": "<域名> <类型>",
          "default": "A",
          "desc": "指定记录类型，如 A、AAAA、MX、TXT、NS、CNAME、SOA。"
        },
        {
          "flag": "@<DNS服务器>",
          "default": "系统默认",
          "desc": "指定解析服务器，如 @8.8.8.8。用于排查本地 DNS 缓存污染。"
        },
        {
          "flag": "+short",
          "default": "关闭",
          "desc": "只输出结果值，省略全部元信息。脚本取值首选。"
        },
        {
          "flag": "+trace",
          "default": "关闭",
          "desc": "从根域名服务器起逐级追踪解析过程。诊断解析链路问题的利器。"
        },
        {
          "flag": "+noall +answer",
          "default": "关闭",
          "desc": "只显示应答段，比默认输出简洁。"
        },
        {
          "flag": "-x <IP>",
          "default": "无",
          "desc": "反向解析，由 IP 查域名。"
        },
        {
          "flag": "+dnssec",
          "default": "关闭",
          "desc": "请求并显示 DNSSEC 签名记录。"
        },
        {
          "flag": "+tcp",
          "default": "关闭（默认 UDP）",
          "desc": "强制使用 TCP 查询。应答超过 512 字节时需要。"
        },
        {
          "flag": "（TTL 含义）",
          "default": "无",
          "desc": "输出中的数字为剩余缓存秒数，可据此判断记录是否来自缓存。"
        }
      ],
      "sample": {
        "output": "$ dig +short example.com\n93.184.216.34\n$ dig example.com A +noall +answer\nexample.com. 3600 IN A 93.184.216.34",
        "explain": "`dig +short` 直接返回解析到的 IP；`+noall +answer` 精简只显示答案段(A 记录 IPv4、TTL 3600)。DNS 排障首选。"
      }
    },
    {
      "name": "host",
      "category": "net",
      "description": "简易 DNS 查询，快速把域名解析为 IP 或反向查询，输出易读。",
      "keywords": [
        "DNS查询",
        "host"
      ],
      "examples": [
        {
          "cmd": "host example.com",
          "desc": "解析域名"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "host 简单；dig 更详细",
      "options": null,
      "sample": {
        "output": "$ host example.com\nexample.com has address 93.184.216.34\nexample.com mail is handled by 0 .",
        "explain": "`host` 简单 DNS 查询：返回 A 地址与 MX 邮件记录；比 dig 输出更友好，适合快速查域名。"
      }
    },
    {
      "name": "whois",
      "category": "net",
      "description": "查询域名或 IP 的注册信息（所有者、注册商、到期时间）。",
      "keywords": [
        "whois",
        "whois"
      ],
      "examples": [
        {
          "cmd": "whois example.com",
          "desc": "查注册信息"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ whois example.com | head -6\nDomain Name: EXAMPLE.COM\nRegistrar: RESERVED-Internet\nCreation Date: 1995-08-14\nExpiration Date: 2026-08-13",
        "explain": "`whois` 查询域名注册信息：注册商、创建/到期时间；用于确认域名归属与到期续费提醒。"
      }
    },
    {
      "name": "nc",
      "category": "net",
      "description": "网络瑞士军刀，可做端口监听、转发、文件传输与原型测试。",
      "keywords": [
        "网络工具",
        "nc"
      ],
      "examples": [
        {
          "cmd": "nc -l 1234",
          "desc": "监听端口"
        },
        {
          "cmd": "nc host 1234 < f",
          "desc": "传文件"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nc -l 1234 > recv.txt   # 接收端\n$ nc 127.0.0.1 1234 < send.txt  # 发送端\n$ cat recv.txt\nhello nc",
        "explain": "`nc`(netcat) 网络瑞士军刀；`-l 1234` 监听端口收数据，另一端连接发送，实现简易文件传输/端口探测。"
      }
    },
    {
      "name": "nmap",
      "category": "net",
      "description": "端口扫描与网络探测，识别主机开放的服务与版本，安全审计常用。",
      "keywords": [
        "端口扫描",
        "nmap"
      ],
      "examples": [
        {
          "cmd": "nmap -sV host",
          "desc": "扫描服务版本"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "扫描他人系统可能违法，仅用于自有资产",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nmap -sT 192.168.1.0/24\nNmap scan report for 192.168.1.10\nHost is up (0.0021s latency).\nPORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http",
        "explain": "`nmap -sT` TCP 端口扫描；显示主机在线、开放端口(22 ssh、80 http)。用于安全自查与资产盘点。"
      }
    },
    {
      "name": "tcpdump",
      "category": "net",
      "description": "抓包分析网络流量，按端口/主机/协议过滤，定位协议层问题。",
      "keywords": [
        "抓包",
        "tcpdump"
      ],
      "examples": [
        {
          "cmd": "sudo tcpdump -i eth0 port 80",
          "desc": "抓 80 端口"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ tcpdump -i eth0 -n 'tcp port 80' -c 2\n12:00:01 IP 192.168.1.20.55555 > 93.184.216.34.80: Flags [P]\n12:00:01 IP 93.184.216.34.80 > 192.168.1.20.55555: Flags [.]",
        "explain": "`tcpdump` 抓包；`-i eth0` 网卡、`port 80` 过滤、`-c 2` 只抓 2 个。输出显示源/目的 IP:端口与 TCP 标志，深度排障用。"
      }
    },
    {
      "name": "iptables",
      "category": "net",
      "description": "传统的 Linux 防火墙规则管理，控制进出包的过滤与转发（较底层）。",
      "keywords": [
        "防火墙",
        "iptables"
      ],
      "examples": [
        {
          "cmd": "sudo iptables -L",
          "desc": "列出规则"
        },
        {
          "cmd": "sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
          "desc": "放行 22"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "规则重启会丢失，需 iptables-save 持久化；改动可能断连，谨慎；新系统多用 nftables/ufw",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ iptables -A INPUT -p tcp --dport 22 -j ACCEPT\n$ iptables -L -n -v | head\nChain INPUT (policy ACCEPT)\n pkts bytes target prot opt in  source  destination\n    0     0 ACCEPT tcp  --  *    *   0.0.0.0/0  tcp dpt:22",
        "explain": "`iptables -A INPUT -p tcp --dport 22 -j ACCEPT` 放行 SSH 入站；`-L -n -v` 列出规则(包/字节计数)，查看防火墙策略。"
      }
    },
    {
      "name": "ufw",
      "category": "net",
      "description": "简易防火墙前端，封装 iptables，一句话即可放行或拒绝端口。",
      "keywords": [
        "防火墙",
        "ufw"
      ],
      "examples": [
        {
          "cmd": "sudo ufw enable",
          "desc": "启用"
        },
        {
          "cmd": "sudo ufw allow 22",
          "desc": "放行 22"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "ufw 是 iptables 的友好封装",
      "options": null,
      "sample": {
        "output": "$ ufw allow 22/tcp\nRule added\n$ ufw status\nStatus: active\n22/tcp  ALLOW  Anywhere",
        "explain": "`ufw` 是 iptables 的易用前端；`allow 22/tcp` 放行 SSH，`status` 显示已生效规则，适合个人防火墙快速配置。"
      }
    },
    {
      "name": "arp",
      "category": "net",
      "description": "查看/操作 ARP 缓存（IP 与 MAC 的对应），排查局域网连通问题。",
      "keywords": [
        "ARP",
        "arp"
      ],
      "examples": [
        {
          "cmd": "arp -n",
          "desc": "看 IP-MAC 映射"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ arp -n\nAddress      HWtype  HWaddress           Iface\n192.168.1.1  ether   00:11:22:33:44:55  eth0",
        "explain": "`arp -n` 显示 ARP 表：IP 与 MAC 地址的映射(192.168.1.1 → 00:11:22:...)，排查局域网连通与 MAC 绑定时用。"
      }
    },
    {
      "name": "socat",
      "category": "net",
      "description": "多协议中继，可在 TCP/UDP/UNIX socket/文件间灵活转发数据。",
      "keywords": [
        "中继",
        "socat"
      ],
      "examples": [
        {
          "cmd": "socat TCP-LISTEN:1234,fork TCP:host:80",
          "desc": "端口转发"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ socat TCP-LISTEN:1234,fork STDOUT &\n$ echo hi | socat - TCP:127.0.0.1:1234\nhi",
        "explain": "`socat` 双向数据流工具；一端监听 1234 转发到标准输出，另一端连接发送 \"hi\"，实现端口转发/管道。"
      }
    },
    {
      "name": "nslookup",
      "category": "net",
      "description": "DNS 查询工具（较旧），快速查询域名解析结果。",
      "keywords": [
        "DNS查询",
        "nslookup"
      ],
      "examples": [
        {
          "cmd": "nslookup example.com",
          "desc": "查解析"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "已被 dig/host 取代",
      "options": null,
      "sample": {
        "output": "$ nslookup example.com\nServer:  192.168.1.1\nAddress: 93.184.216.34",
        "explain": "`nslookup` 查询 DNS：显示使用的 DNS 服务器(Server)与解析结果地址；交互式也可查 MX/NS 等记录。"
      }
    },
    {
      "name": "iwconfig",
      "category": "net",
      "description": "配置无线网卡接口（已逐步被 iw 取代），设置 essid/密钥等。",
      "keywords": [
        "无线",
        "iwconfig",
        "wifi"
      ],
      "examples": [
        {
          "cmd": "iwconfig wlan0",
          "desc": "查看无线接口状态"
        },
        {
          "cmd": "iwconfig wlan0 essid MYWIFI",
          "desc": "连接热点"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "老旧工具；新系统推荐 iw，部分发行版已不含 iwconfig",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ iwconfig wlan0\nwlan0  IEEE 802.11  ESSID:\"HomeWiFi\"\n       Link Quality=70/70  Signal level=-40 dBm",
        "explain": "`iwconfig` 查看无线网卡状态：已连 ESSID、链路质量(70/70)、信号强度(-40dBm 越强越好)。"
      }
    },
    {
      "name": "iw",
      "category": "net",
      "description": "现代无线设备配置工具，取代 iwconfig，查看/连接 Wi-Fi 更规范。",
      "keywords": [
        "无线",
        "iw",
        "wifi"
      ],
      "examples": [
        {
          "cmd": "iw dev",
          "desc": "列出无线设备"
        },
        {
          "cmd": "iw dev wlan0 link",
          "desc": "查看连接信息"
        },
        {
          "cmd": "iw wlan0 scan",
          "desc": "扫描附近热点"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ iw dev wlan0 link\nConnected to 00:11:22:33:44:55 (on wlan0)\nSSID: HomeWiFi\nsignal: -40 dBm",
        "explain": "`iw` 是新一代无线配置工具；`link` 显示连接到的 AP MAC、SSID 与信号，比 iwconfig 更现代。"
      }
    },
    {
      "name": "sshfs",
      "category": "net",
      "description": "通过 SSH 把远程目录挂载到本地（FUSE），像操作本地文件一样用远程文件。",
      "keywords": [
        "挂载",
        "sshfs",
        "远程目录"
      ],
      "examples": [
        {
          "cmd": "sshfs user@host:/path /mnt",
          "desc": "挂载远程目录"
        },
        {
          "cmd": "fusermount -u /mnt",
          "desc": "卸载"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "基于 FUSE，需安装 sshfs；卸载用 fusermount -u（非 umount）",
      "compare": null,
      "options": [
        {
          "flag": "<用户@主机:远程路径> <本地挂载点>",
          "default": "无",
          "desc": "通过 SSH 把远程目录挂载到本地。挂载点须已存在。"
        },
        {
          "flag": "-p <端口>",
          "default": "22",
          "desc": "指定 SSH 端口。"
        },
        {
          "flag": "-o reconnect",
          "default": "关闭",
          "desc": "断线后自动重连。长期挂载强烈建议开启。"
        },
        {
          "flag": "-o allow_other",
          "default": "关闭",
          "desc": "允许其他用户访问该挂载点。需在 /etc/fuse.conf 中启用 user_allow_other。"
        },
        {
          "flag": "-o IdentityFile=<路径>",
          "default": "默认密钥",
          "desc": "指定私钥。"
        },
        {
          "flag": "-o ServerAliveInterval=15",
          "default": "关闭",
          "desc": "定期发送保活包，避免 NAT 超时导致挂载僵死。"
        },
        {
          "flag": "-o ro",
          "default": "读写",
          "desc": "以只读方式挂载。"
        },
        {
          "flag": "（卸载）",
          "default": "无",
          "desc": "使用 fusermount -u <挂载点> 卸载；网络中断可能导致挂载点僵死，需加 -z 强制卸载。"
        }
      ],
      "sample": {
        "output": "$ sshfs user@host:/remote /mnt/remote\n$ ls /mnt/remote\nfile_on_server.txt",
        "explain": "`sshfs` 把远端目录通过 SSH 挂载到本地 /mnt/remote，像本地文件一样访问；`ls` 可见远端文件。"
      }
    },
    {
      "name": "http",
      "category": "net",
      "description": "HTTPie：人性化的命令行 HTTP 客户端，语法直观、彩色输出，curl 友好替代。",
      "keywords": [
        "http",
        "httpie",
        "请求"
      ],
      "examples": [
        {
          "cmd": "http GET example.com",
          "desc": "发送 GET"
        },
        {
          "cmd": "http POST example.com name=Joe",
          "desc": "发送 POST 表单"
        },
        {
          "cmd": "http -a user:pw GET url",
          "desc": "带基本认证"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装 httpie；注意与 Python 的 http 模块无关",
      "compare": null,
      "options": [
        {
          "flag": "<方法> <URL>",
          "default": "GET",
          "desc": "HTTPie 语法，方法可省略。带数据时自动变为 POST。"
        },
        {
          "flag": "key=value",
          "default": "无",
          "desc": "构造 JSON 字段。默认发送 JSON，无需手写 Content-Type。"
        },
        {
          "flag": "key==value",
          "default": "无",
          "desc": "构造 URL 查询参数，自动完成 URL 编码。"
        },
        {
          "flag": "key:value",
          "default": "无",
          "desc": "设置请求头。"
        },
        {
          "flag": "-f, --form",
          "default": "关闭",
          "desc": "以表单方式而非 JSON 提交。"
        },
        {
          "flag": "-a <用户:密码>, --auth",
          "default": "无",
          "desc": "HTTP 基本认证。"
        },
        {
          "flag": "--json / --body / --headers",
          "default": "全部输出",
          "desc": "分别控制输出内容，--body 只输出响应体。"
        },
        {
          "flag": "-d, --download",
          "default": "关闭",
          "desc": "下载模式，带进度条，类似 wget。"
        },
        {
          "flag": "--verify=no",
          "default": "开启校验",
          "desc": "跳过证书校验。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "同时打印完整的请求与响应，调试接口时非常直观。"
        }
      ],
      "sample": {
        "output": "$ python3 -m http.server 8000\nServing HTTP on 0.0.0.0 port 8000...\n$ curl -s localhost:8000 | head -1\n<!DOCTYPE html>",
        "explain": "`python3 -m http.server 8000` 在 8000 端口起一个临时静态文件服务器；`curl` 验证能取到页面，便于临时分享目录。"
      }
    },
    {
      "name": "iftop",
      "category": "net",
      "description": "实时显示各网络连接的带宽占用，看谁在大量耗流量。",
      "keywords": [
        "带宽",
        "iftop",
        "流量"
      ],
      "examples": [
        {
          "cmd": "sudo iftop -i eth0",
          "desc": "监控网卡流量"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需 root 且安装；按 h 看帮助、q 退出",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ iftop -i eth0\n192.168.1.20  => 93.184.216.34   1.2Mb  0.8Mb  0.6Mb\n",
        "explain": "`iftop` 实时显示各连接的带宽占用(类似 top for network)；可看哪些 IP 在大量收发，定位流量异常。"
      }
    },
    {
      "name": "nethogs",
      "category": "net",
      "description": "按进程显示实时网络流量占用，定位是哪一个程序在联网。",
      "keywords": [
        "进程流量",
        "nethogs"
      ],
      "examples": [
        {
          "cmd": "sudo nethogs",
          "desc": "按进程查看流量"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需 root 且安装",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nethogs eth0\nPID  USER  PROGRAM                          DEV  SENT  RECEIVED\n1234 user  /usr/bin/node                     eth0  12KB  45KB",
        "explain": "`nethogs` 按进程(而非连接)统计网络流量；输出 node(PID 1234) 的发送/接收速率，找出耗带宽的进程。"
      }
    },
    {
      "name": "tar",
      "category": "archive",
      "description": "将多个文件/目录打包（归档）成一个文件，常配合 gzip/xz 压缩；-c 建、-x 解、-t 列。",
      "keywords": [
        "打包",
        "tar"
      ],
      "examples": [
        {
          "cmd": "tar -czf a.tar.gz dir/",
          "desc": "gzip 打包"
        },
        {
          "cmd": "tar -cjf a.tar.bz2 dir/",
          "desc": "bzip2 打包"
        },
        {
          "cmd": "tar -xzf a.tar.gz -C /tmp",
          "desc": "解压到 /tmp"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "z=gzip/j=bzip2/J=xz；顺序敏感：f 后紧跟文件名；解压前先 tar -tzf 看内容",
      "compare": "tar 只归档不压缩（常配 gzip/xz）；zip 打包即压缩且跨平台。需要高压缩用 tar -J（xz），需要 Windows 兼容用 zip。",
      "options": [
        {
          "flag": "-c, --create",
          "default": "无",
          "desc": "创建新归档。c/x/t 三者互斥，必须且只能选其一。"
        },
        {
          "flag": "-x, --extract",
          "default": "无",
          "desc": "解开归档。"
        },
        {
          "flag": "-t, --list",
          "default": "无",
          "desc": "只列出内容不解压。解压陌生压缩包前应先用它确认结构。"
        },
        {
          "flag": "-f <文件>",
          "default": "无",
          "desc": "指定归档文件名。必须紧邻文件名，写成 -zcvf 时 f 必须在最后。"
        },
        {
          "flag": "-z, --gzip",
          "default": "关闭",
          "desc": "使用 gzip 压缩，对应 .tar.gz。速度与压缩率均衡。"
        },
        {
          "flag": "-j, --bzip2",
          "default": "关闭",
          "desc": "使用 bzip2，压缩率更高但更慢，对应 .tar.bz2。"
        },
        {
          "flag": "-J, --xz",
          "default": "关闭",
          "desc": "使用 xz，压缩率最高、最慢，对应 .tar.xz。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "显示处理的文件列表。大量文件时会明显拖慢速度。"
        },
        {
          "flag": "-C <目录>, --directory",
          "default": "当前目录",
          "desc": "切换到指定目录后再操作。解压到指定位置的标准做法。"
        },
        {
          "flag": "--exclude=<模式>",
          "default": "无",
          "desc": "排除匹配路径，可重复。须置于待打包路径之前才生效。"
        },
        {
          "flag": "-p, --preserve-permissions",
          "default": "root 解压时默认开启",
          "desc": "保留原始权限。"
        },
        {
          "flag": "--strip-components=<n>",
          "default": "0",
          "desc": "解压时剥离前 n 级目录。用于去掉压缩包多余的顶层目录。"
        },
        {
          "flag": "-a, --auto-compress",
          "default": "关闭",
          "desc": "按文件扩展名自动选择压缩算法。"
        },
        {
          "flag": "（绝对路径）",
          "default": "无",
          "desc": "默认会剥离路径开头的 /，解压时是相对当前目录展开，不会覆盖系统根目录。"
        }
      ],
      "sample": {
        "output": "$ tar -czvf backup.tar.gz /home/user\n/home/user/\n/home/user/a.txt\n$ tar -tzf backup.tar.gz | head\nhome/user/a.txt",
        "explain": "`tar -czvf` 打包并用 gzip 压缩(-z)；`-t` 列出包内文件而不解压，确认内容。常用组合：压缩 c+z、解压 x+z。"
      }
    },
    {
      "name": "gzip",
      "category": "archive",
      "description": "用 DEFLATE 算法压缩文件（后缀 .gz），压缩率高；-d 解压，常与 tar 组合使用。",
      "keywords": [
        "压缩",
        "gzip"
      ],
      "examples": [
        {
          "cmd": "gzip f.txt",
          "desc": "压缩为 f.txt.gz（删原文件）"
        },
        {
          "cmd": "gzip -k f.txt",
          "desc": "保留原文件"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "默认删除源文件，保留用 -k 或 gzip -c > ",
      "compare": "gzip 单文件压缩、速度快；bzip2/xz 压缩比更高但更慢；zstd 在速度与压缩比间均衡，现代分发常用。",
      "options": [
        {
          "flag": "-d, --decompress",
          "default": "关闭",
          "desc": "解压，等价于 gunzip。"
        },
        {
          "flag": "-k, --keep",
          "default": "关闭",
          "desc": "保留原文件。gzip 默认会删除源文件，这是最容易踩的坑。"
        },
        {
          "flag": "-<1-9>",
          "default": "6",
          "desc": "压缩级别，1 最快、9 最小。差异在大文件上才明显。"
        },
        {
          "flag": "-c, --stdout",
          "default": "关闭",
          "desc": "输出到标准输出并保留原文件。适用于管道。"
        },
        {
          "flag": "-r, --recursive",
          "default": "关闭",
          "desc": "递归压缩目录中的每个文件。注意它逐个压缩而非打包成单一归档。"
        },
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "显示压缩率与原始大小。"
        },
        {
          "flag": "-t, --test",
          "default": "关闭",
          "desc": "校验压缩文件完整性。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制覆盖已存在的同名文件。"
        },
        {
          "flag": "（单文件限制）",
          "default": "无",
          "desc": "gzip 只能压缩单个文件，压缩目录须先用 tar 打包。"
        }
      ],
      "sample": {
        "output": "$ gzip report.txt\n$ ls report.txt.gz\nreport.txt.gz\n$ gunzip report.txt.gz",
        "explain": "`gzip` 压缩单个文件为 .gz(原文件被替换删除)；`gunzip` 解压还原。对目录需先 tar 再 gzip。"
      }
    },
    {
      "name": "gunzip",
      "category": "archive",
      "description": "解压 .gz 文件，等同 gzip -d；解压后默认删除原压缩包。",
      "keywords": [
        "解压",
        "gunzip"
      ],
      "examples": [
        {
          "cmd": "gunzip f.gz",
          "desc": "解压"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "gunzip 即 gzip -d",
      "options": null,
      "sample": {
        "output": "$ gunzip data.gz\n$ ls\ndata\n$ file data\ndata: ASCII text",
        "explain": "`gunzip data.gz` 解压得到 data；`file` 确认已还原为 ASCII 文本。"
      }
    },
    {
      "name": "bzip2",
      "category": "archive",
      "description": "用 Burrows-Wheeler 压缩，通常比 gzip 压得更小但更慢，后缀 .bz2。",
      "keywords": [
        "压缩",
        "bzip2"
      ],
      "examples": [
        {
          "cmd": "bzip2 f.txt",
          "desc": "更高压缩率更慢"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ bzip2 -k big.log\n$ ls big.log.bz2\nbig.log.bz2\n$ bunzip2 big.log.bz2",
        "explain": "`bzip2 -k` 压缩(保留原文件)；比 gzip 压缩率更高但更慢。`.bz2` 解压用 bunzip2。"
      }
    },
    {
      "name": "xz",
      "category": "archive",
      "description": "基于 LZMA2 的高压缩比工具，常用于分发软件；-9 最高压缩、-d 解压、后缀 .xz。",
      "keywords": [
        "压缩",
        "xz"
      ],
      "examples": [
        {
          "cmd": "xz -9 f.txt",
          "desc": "极高压缩率"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ xz -9 kernel.tar\n$ ls kernel.tar.xz\nkernel.tar.xz\n$ unxz kernel.tar.xz",
        "explain": "`xz -9` 最高压缩率(最慢)；常用于分发大文件。`.xz` 解压用 unxz。"
      }
    },
    {
      "name": "zip",
      "category": "archive",
      "description": "把文件打包并压缩为 .zip（跨平台兼容），-r 递归包含子目录。",
      "keywords": [
        "zip",
        "zip"
      ],
      "examples": [
        {
          "cmd": "zip -r a.zip dir/",
          "desc": "递归打包"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-r",
          "default": "关闭",
          "desc": "递归包含目录。压缩目录时必须指定，否则只生成空包。"
        },
        {
          "flag": "-<0-9>",
          "default": "6",
          "desc": "压缩级别，0 表示仅打包不压缩。"
        },
        {
          "flag": "-e, --encrypt",
          "default": "关闭",
          "desc": "设置密码。ZipCrypto 加密强度很弱，不适合保护敏感数据。"
        },
        {
          "flag": "-P <密码>",
          "default": "无",
          "desc": "在命令行直接给出密码。会残留在 shell 历史中，不推荐。"
        },
        {
          "flag": "-x <模式>",
          "default": "无",
          "desc": "排除匹配的文件，如 -x '*.log'。"
        },
        {
          "flag": "-q / -v",
          "default": "关闭",
          "desc": "分别为安静与详细模式。"
        },
        {
          "flag": "-j, --junk-paths",
          "default": "关闭",
          "desc": "不保留目录结构，所有文件平铺到压缩包根部。"
        },
        {
          "flag": "-u, --update",
          "default": "关闭",
          "desc": "只添加新文件或更新已变化的文件。"
        },
        {
          "flag": "-s <大小>",
          "default": "无",
          "desc": "分卷压缩，如 -s 100m。"
        },
        {
          "flag": "（中文文件名）",
          "default": "无",
          "desc": "跨平台易出现乱码，建议加 -UN=UTF8 或改用 tar。"
        }
      ],
      "sample": {
        "output": "$ zip -r site.zip /var/www\n  adding: var/www/index.html\n$ unzip -l site.zip\nArchive: site.zip\n  var/www/index.html",
        "explain": "`zip -r` 递归压缩目录；`unzip -l` 列出内容预览而不解压。zip 跨平台(Windows 友好)。"
      }
    },
    {
      "name": "unzip",
      "category": "archive",
      "description": "解压 .zip 文件，-d 指定目标目录，-l 先列出内容预览。",
      "keywords": [
        "解压zip",
        "unzip"
      ],
      "examples": [
        {
          "cmd": "unzip a.zip -d out/",
          "desc": "解压到 out"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-d <目录>",
          "default": "当前目录",
          "desc": "指定解压目标目录，目录不存在会自动创建。"
        },
        {
          "flag": "-l",
          "default": "关闭",
          "desc": "只列出内容不解压。解压前确认结构的推荐做法。"
        },
        {
          "flag": "-o",
          "default": "关闭",
          "desc": "覆盖已有文件且不询问。批量脚本中常用。"
        },
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "已存在的文件一律跳过，与 -o 相反。"
        },
        {
          "flag": "-q",
          "default": "关闭",
          "desc": "安静模式，不输出文件列表。"
        },
        {
          "flag": "-j",
          "default": "关闭",
          "desc": "忽略目录结构，全部平铺解压。"
        },
        {
          "flag": "-P <密码>",
          "default": "无",
          "desc": "提供解压密码。"
        },
        {
          "flag": "-t",
          "default": "关闭",
          "desc": "测试压缩包完整性而不解压。"
        },
        {
          "flag": "-O <编码>",
          "default": "无",
          "desc": "指定文件名编码，如 -O GBK 可解决 Windows 压缩包中文乱码。"
        },
        {
          "flag": "（覆盖询问）",
          "default": "无",
          "desc": "默认逐个询问是否覆盖，脚本中不加 -o 或 -n 会导致挂起。"
        }
      ],
      "sample": {
        "output": "$ unzip site.zip -d /tmp/site\nArchive: site.zip\n extracting: /tmp/site/var/www/index.html\n$ ls /tmp/site/var/www\nindex.html",
        "explain": "`unzip -d` 解压到指定目录；输出每文件提取进度，`ls` 确认已落地。"
      }
    },
    {
      "name": "7z",
      "category": "archive",
      "description": "7-Zip 的命令行，支持多种格式且压缩比高；a 添加、x 解压，适合归档大目录。",
      "keywords": [
        "7z",
        "7z"
      ],
      "examples": [
        {
          "cmd": "7z a a.7z dir/",
          "desc": "压缩"
        },
        {
          "cmd": "7z x a.7z",
          "desc": "解压"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ 7z a arch.7z /data\nCompressing  data/a.bin\nEverything is Ok\n$ 7z l arch.7z\nMethod = LZMA2\nPath = data/a.bin",
        "explain": "`7z a` 创建 7z 压缩包(高压缩率)；`l` 列出内容。支持多种格式，备份利器。"
      }
    },
    {
      "name": "zstd",
      "category": "archive",
      "description": "Zstandard 压缩，速度极快且压缩比可调，兼顾性能与体积，现代分发常用。",
      "keywords": [
        "zstd",
        "zstd"
      ],
      "examples": [
        {
          "cmd": "zstd f.txt",
          "desc": "快速高压缩"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ zstd -19 data.bin -o data.bin.zst\ndata.bin: 3.12%   (1234567 => 38512 bytes)\n$ zstd -d data.bin.zst",
        "explain": "`zstd -19` 高压缩、极快解压；显示压缩比 3.12%。`-d` 解压。现代首选(兼顾速度与比 gzip 更好的压缩)。"
      }
    },
    {
      "name": "lz4",
      "category": "archive",
      "description": "极速压缩（解压尤其快），压缩比偏低，适合对速度敏感的大数据管道。",
      "keywords": [
        "lz4",
        "lz4"
      ],
      "examples": [
        {
          "cmd": "lz4 f.txt",
          "desc": "极快压缩"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lz4 file file.lz4\nCompressed 12345 bytes into 4321 bytes ==> 35%\n$ lz4 -d file.lz4 file2",
        "explain": "`lz4` 极快但压缩率一般(35%)；适合实时/大数据流压缩。`-d` 解压。"
      }
    },
    {
      "name": "compress",
      "category": "archive",
      "description": "老式 Unix 压缩（.Z），已基本被 gzip 取代，仅用于兼容旧系统。",
      "keywords": [
        "压缩",
        "compress"
      ],
      "examples": [
        {
          "cmd": "compress f",
          "desc": "生成 .f.Z"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ compress data.txt\n$ ls data.txt.Z\ndata.txt.Z",
        "explain": "`compress` 生成 .Z(古老的 LZW 压缩)；现代很少用，仅兼容老旧系统。解压用 uncompress。"
      }
    },
    {
      "name": "unrar",
      "category": "archive",
      "description": "解压 RAR 归档，x 保留路径解压；免费版通常只能解不能创建。",
      "keywords": [
        "解压rar",
        "unrar"
      ],
      "examples": [
        {
          "cmd": "unrar x a.rar",
          "desc": "解压 rar"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ unrar x archive.rar /tmp/\nExtracting  doc/readme.txt\nAll OK",
        "explain": "`unrar x` 解压 rar 到目标目录；`All OK` 表示成功。需安装 unrar 非自由工具。"
      }
    },
    {
      "name": "rar",
      "category": "archive",
      "description": "创建 RAR 压缩包，a 添加文件；RAR 压缩比与分卷功能较好但有授权限制。",
      "keywords": [
        "rar",
        "rar"
      ],
      "examples": [
        {
          "cmd": "rar a a.rar dir/",
          "desc": "打包为 rar（需安装）"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ rar a docs.rar *.pdf\nCreating archive docs.rar\nAdding    a.pdf  OK",
        "explain": "`rar a` 创建 rar 压缩包；逐文件 Adding 提示 OK。rar 为专有格式。"
      }
    },
    {
      "name": "zcat",
      "category": "archive",
      "description": "不解压直接查看 .gz 文件内容（等同 gunzip -c | cat），快速浏览压缩日志。",
      "keywords": [
        "查看压缩",
        "zcat"
      ],
      "examples": [
        {
          "cmd": "zcat f.gz",
          "desc": "不解压直接看"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "zcat 即 gzip -dc",
      "options": null,
      "sample": {
        "output": "$ zcat log.gz | head -3\nline one\nline two\nline three",
        "explain": "`zcat` 不解压直接将 .gz 内容输出到标准输出；配合 head/grep 直接查压缩日志，省去先解压。"
      }
    },
    {
      "name": "brotli",
      "category": "archive",
      "description": "Google 的 Brotli 压缩（.br），Web 传输常用、压缩比高；-q 调质量、-d 解压。",
      "keywords": [
        "压缩",
        "brotli"
      ],
      "examples": [
        {
          "cmd": "brotli -q 11 -o f.br f",
          "desc": "最高压缩"
        },
        {
          "cmd": "brotli -d f.br",
          "desc": "解压"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ brotli -q 11 data.js -o data.js.br\n$ brotli -d data.js.br",
        "explain": "`brotli -q 11` 高压缩(web 常用)；`.br` 可被 Web 服务器直接发送。`-d` 解压。"
      }
    },
    {
      "name": "pigz",
      "category": "archive",
      "description": "并行版 gzip，利用多核加速压缩/解压大文件，接口与 gzip 基本兼容。",
      "keywords": [
        "并行压缩",
        "pigz",
        "gzip"
      ],
      "examples": [
        {
          "cmd": "tar -cf - dir | pigz > d.tgz",
          "desc": "并行压缩 tar 流"
        },
        {
          "cmd": "pigz -d d.tgz",
          "desc": "解压"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "接口与 gzip 兼容；多文件/大文件时比 gzip 快很多",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pigz -p 4 bigfile\n$ ls bigfile.gz\nbigfile.gz",
        "explain": "`pigz` 是 gzip 的多线程版，`-p 4` 用 4 核并行，大文件压缩远快于 gzip。输出 .gz 兼容。"
      }
    },
    {
      "name": "pax",
      "category": "archive",
      "description": "POSIX 标准归档工具，可处理 tar 与 cpio 格式，跨平台归档的稳妥选择。",
      "keywords": [
        "归档",
        "pax"
      ],
      "examples": [
        {
          "cmd": "pax -w -f a.pax dir/",
          "desc": "打包目录"
        },
        {
          "cmd": "pax -r -f a.pax",
          "desc": "解包"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "可跨 cpio/tar 格式互换；-r 读、-w 写、-f 指定文件",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pax -w -f archive.pax /home/user\n$ pax -rvf archive.pax\n/home/user/a.txt",
        "explain": "`pax` POSIX 归档工具(可替代 tar/cpio)；`-w -f` 写归档，`-rvf` 读取并解包。跨平台归档更标准。"
      }
    },
    {
      "name": "uname",
      "category": "sys",
      "description": "显示系统内核与硬件信息，-a 给出全部，-r 仅内核版本，判断环境用。",
      "keywords": [
        "内核信息",
        "uname"
      ],
      "examples": [
        {
          "cmd": "uname -a",
          "desc": "全部系统信息"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "输出全部信息。默认只输出内核名称。"
        },
        {
          "flag": "-r, --kernel-release",
          "default": "关闭",
          "desc": "只输出内核版本号。安装内核模块时常用。"
        },
        {
          "flag": "-m, --machine",
          "default": "关闭",
          "desc": "输出硬件架构，如 x86_64、aarch64。判断该下载哪个安装包时用它。"
        },
        {
          "flag": "-s, --kernel-name",
          "default": "开启（默认）",
          "desc": "输出内核名称，如 Linux。"
        },
        {
          "flag": "-n, --nodename",
          "default": "关闭",
          "desc": "输出主机名，等价于 hostname。"
        },
        {
          "flag": "-o, --operating-system",
          "default": "关闭",
          "desc": "输出操作系统名称，如 GNU/Linux。"
        },
        {
          "flag": "（发行版信息）",
          "default": "无",
          "desc": "uname 不提供发行版名称与版本，应查看 /etc/os-release 或用 lsb_release。"
        }
      ],
      "sample": {
        "output": "$ uname -a\nLinux server01 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux\n$ uname -r\n6.8.0-45-generic",
        "explain": "`uname -a` 输出全部系统信息：内核名 Linux、主机 server01、内核版本 6.8.0-45、架构 x86_64。\n`-r` 只取内核版本，编译内核模块时常需对应。"
      }
    },
    {
      "name": "uptime",
      "category": "sys",
      "description": "显示系统运行时长、当前用户数与平均负载，快速了解繁忙程度。",
      "keywords": [
        "运行时长",
        "uptime"
      ],
      "examples": [
        {
          "cmd": "uptime",
          "desc": "看运行时间与负载"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "输出当前时间、运行时长、登录用户数与三个平均负载值。"
        },
        {
          "flag": "-p, --pretty",
          "default": "关闭",
          "desc": "以自然语言输出运行时长，如 up 3 weeks, 2 days。"
        },
        {
          "flag": "-s, --since",
          "default": "关闭",
          "desc": "输出系统启动的具体时间点。"
        },
        {
          "flag": "（负载解读）",
          "default": "无",
          "desc": "三个数为 1/5/15 分钟平均值，需与 CPU 核心数比较：等于核心数即满载，持续高于则存在排队。"
        },
        {
          "flag": "（负载包含 D 状态）",
          "default": "无",
          "desc": "Linux 的负载还计入不可中断睡眠进程，磁盘或网络阻塞也会推高负载而 CPU 未必繁忙。"
        }
      ],
      "sample": {
        "output": "$ uptime\n 11:50:00 up 3 days,  1:20,  2 users,  load average: 0.10, 0.05, 0.01",
        "explain": "显示当前时间、已运行 3 天、2 个登录用户、负载均值(1/5/15分钟)；负载接近 CPU 核数即偏忙。"
      }
    },
    {
      "name": "free",
      "category": "sys",
      "description": "查看内存与交换区使用情况，-h 易读，判断内存是否吃紧。",
      "keywords": [
        "内存",
        "free"
      ],
      "examples": [
        {
          "cmd": "free -h",
          "desc": "人类可读内存"
        },
        {
          "cmd": "free -h -s 2",
          "desc": "每 2 秒刷新"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "关注 available 列（真正可用内存）；buff/cache 可被回收",
      "compare": null,
      "options": [
        {
          "flag": "-h, --human",
          "default": "关闭（默认 KB）",
          "desc": "以可读单位显示。"
        },
        {
          "flag": "-m / -g",
          "default": "关闭",
          "desc": "分别以 MB 与 GB 为单位。"
        },
        {
          "flag": "-s <秒>, --seconds",
          "default": "无",
          "desc": "按间隔持续刷新输出。需配合 Ctrl+C 终止。"
        },
        {
          "flag": "-c <次数>, --count",
          "default": "无限",
          "desc": "配合 -s 指定刷新次数后退出。"
        },
        {
          "flag": "-t, --total",
          "default": "关闭",
          "desc": "增加一行内存与交换分区的合计。"
        },
        {
          "flag": "-w, --wide",
          "default": "关闭",
          "desc": "宽格式，把 buffers 与 cache 拆成两列显示。"
        },
        {
          "flag": "（available 才是关键）",
          "default": "无",
          "desc": "应看 available 而非 free：缓存可被随时回收，free 偏低属正常现象，不代表内存不足。"
        }
      ],
      "sample": {
        "output": "$ free -h\n              total  used   free  shared  buff/cache  available\nMem:          15Gi   4.1Gi  6.2Gi  350Mi      5.3Gi      10Gi\nSwap:        2.0Gi      0B  2.0Gi",
        "explain": "`free -h` 以可读单位显示内存：total 15G、used 4.1G、available 真正可用 10G(含可回收缓存)。\nSwap 未用，说明内存充足。"
      }
    },
    {
      "name": "lscpu",
      "category": "sys",
      "description": "显示 CPU 架构、核心数、型号与厂商信息，了解算力。",
      "keywords": [
        "CPU信息",
        "lscpu"
      ],
      "examples": [
        {
          "cmd": "lscpu",
          "desc": "看 CPU 架构/核数"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "输出 CPU 架构、核心数、线程数、缓存与型号等完整信息。"
        },
        {
          "flag": "-e, --extended",
          "default": "关闭",
          "desc": "以表格形式列出每个逻辑 CPU 及其 NUMA 与缓存归属。"
        },
        {
          "flag": "-p, --parse",
          "default": "关闭",
          "desc": "输出为逗号分隔格式，便于脚本解析。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "同时包含离线的 CPU。"
        },
        {
          "flag": "-J, --json",
          "default": "关闭",
          "desc": "输出 JSON。"
        },
        {
          "flag": "（核心数计算）",
          "default": "无",
          "desc": "总逻辑核数 = 插槽数 × 每插槽核心数 × 每核心线程数；超线程使线程数为物理核数的两倍。"
        }
      ],
      "sample": {
        "output": "$ lscpu | head -6\nArchitecture:        x86_64\nCPU op-mode(s):      32-bit, 64-bit\nCPU(s):              8\nThread(s) per core:  2\nCore(s) per socket:  4\nSocket(s):           1",
        "explain": "`lscpu` 汇总 CPU 拓扑：架构 x86_64、8 逻辑 CPU、每核 2 线程、每槽 4 核、1 插槽——即 4 核 8 线程。"
      }
    },
    {
      "name": "lsmem",
      "category": "sys",
      "description": "显示物理内存的拓扑与可分配区间，排查内存布局。",
      "keywords": [
        "内存",
        "lsmem"
      ],
      "examples": [
        {
          "cmd": "lsmem",
          "desc": "看内存块布局"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsmem\nRANGE                  SIZE  STATE   REMOVABLE  BLOCK\n0x0000000000000000-...  16G   online        no       0-63",
        "explain": "`lsmem` 显示物理内存范围与状态(16G online)；可看 NUMA 与可热插拔块，定位内存布局。"
      }
    },
    {
      "name": "lsusb",
      "category": "sys",
      "description": "列出 USB 总线上的设备，排查外设是否被识别。",
      "keywords": [
        "USB",
        "lsusb"
      ],
      "examples": [
        {
          "cmd": "lsusb",
          "desc": "列出 USB 设备"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsusb\nBus 001 Device 002: ID 046d:c52b Logitech USB Receiver\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation Hub",
        "explain": "`lsusb` 列出 USB 设备：总线/设备号、厂商 ID 与产品(Logitech 接收器、根 Hub)，排查外设时用。"
      }
    },
    {
      "name": "lspci",
      "category": "sys",
      "description": "列出 PCI/PCIe 设备（显卡、网卡等），看硬件清单。",
      "keywords": [
        "PCI",
        "lspci"
      ],
      "examples": [
        {
          "cmd": "lspci",
          "desc": "列出 PCI 设备"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lspci | grep -i vga\n01:00.0 VGA compatible controller: NVIDIA Corporation GP107 [GeForce GTX 1050]",
        "explain": "`lspci` 列出 PCI 设备；grep VGA 找到显卡为 NVIDIA GTX 1050，装驱动前先确认型号。"
      }
    },
    {
      "name": "lshw",
      "category": "sys",
      "description": "输出详尽硬件信息（需 root），涵盖 CPU/内存/磁盘/网卡等。",
      "keywords": [
        "硬件",
        "lshw"
      ],
      "examples": [
        {
          "cmd": "sudo lshw",
          "desc": "完整硬件信息"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lshw -short | head -6\nH/W path  Device  Class   Description\n/0                system  Computer\n/0/0              memory  16GiB System memory\n/0/1              processor Intel Core i7",
        "explain": "`lshw -short` 以简表列出硬件层级(系统/内存/处理器)；需 root 才完整，用于全面盘点硬件。"
      }
    },
    {
      "name": "dmidecode",
      "category": "sys",
      "description": "读取 DMI/BIOS 信息（如内存条规格、主板），硬件盘点用。",
      "keywords": [
        "硬件",
        "dmidecode"
      ],
      "examples": [
        {
          "cmd": "sudo dmidecode -t memory",
          "desc": "内存信息"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sudo dmidecode -t memory | head -8\nMemory Device\n  Size: 8192 MB\n  Type: DDR4\n  Speed: 2666 MT/s",
        "explain": "`dmidecode -t memory` 读取 BIOS/固件中的内存信息：单条 8GB DDR4 2666，查物理内存规格用。需 root。"
      }
    },
    {
      "name": "dmesg",
      "category": "sys",
      "description": "显示内核环形缓冲区消息，查看启动与硬件/驱动报错。",
      "keywords": [
        "内核日志",
        "dmesg"
      ],
      "examples": [
        {
          "cmd": "dmesg | tail",
          "desc": "看最近内核消息"
        },
        {
          "cmd": "sudo dmesg -w",
          "desc": "实时"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-T, --ctime",
          "default": "关闭（默认为开机秒数）",
          "desc": "把时间戳转为可读日期。默认的相对秒数极难解读，建议常加。"
        },
        {
          "flag": "-w, --follow",
          "default": "关闭",
          "desc": "持续跟踪新消息，类似 tail -f。适用于热插拔调试。"
        },
        {
          "flag": "-l <级别>, --level",
          "default": "全部",
          "desc": "按级别过滤，如 -l err,warn。"
        },
        {
          "flag": "-k / -u",
          "default": "全部",
          "desc": "分别只显示内核消息或用户空间消息。"
        },
        {
          "flag": "-H, --human",
          "default": "关闭",
          "desc": "人类友好格式，带颜色与相对时间，自动分页。"
        },
        {
          "flag": "-c, --clear",
          "default": "关闭",
          "desc": "读取后清空环形缓冲区。清空后历史不可恢复。"
        },
        {
          "flag": "--since / --until",
          "default": "无",
          "desc": "按时间范围过滤，需内核支持。"
        },
        {
          "flag": "（权限限制）",
          "default": "无",
          "desc": "多数发行版限制非特权用户读取，通常需要 sudo。"
        }
      ],
      "sample": {
        "output": "$ dmesg | tail -3\n[12345.678] usb 1-2: new high-speed USB device\n[12346.000] sd 0:0:0:0: Attached scsi disk sda\n$ dmesg -w  # 实时跟踪内核日志",
        "explain": "`dmesg` 显示内核环形缓冲日志；可看硬件枚举(USB/sda 挂载)、驱动错误。加 `-w` 实时跟踪。排查启动/硬件故障首选。"
      }
    },
    {
      "name": "journalctl",
      "category": "sys",
      "description": "查看 systemd 日志，-xe 看最近错误，排查服务失败首选。",
      "keywords": [
        "系统日志",
        "journalctl"
      ],
      "examples": [
        {
          "cmd": "journalctl -xe",
          "desc": "看错误日志"
        },
        {
          "cmd": "journalctl -u nginx",
          "desc": "某服务日志"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-u <单元>, --unit",
          "default": "全部",
          "desc": "按 systemd 单元过滤，如 -u nginx。排查服务问题的首选。"
        },
        {
          "flag": "-f, --follow",
          "default": "关闭",
          "desc": "实时跟踪新日志。"
        },
        {
          "flag": "-n <行数>, --lines",
          "default": "10",
          "desc": "显示最后 N 行。"
        },
        {
          "flag": "-r, --reverse",
          "default": "关闭",
          "desc": "倒序显示，最新的在最上方。"
        },
        {
          "flag": "--since / --until",
          "default": "无",
          "desc": "按时间过滤，支持 \"today\"、\"1 hour ago\"、\"2026-01-01 10:00\" 等写法。"
        },
        {
          "flag": "-p <优先级>, --priority",
          "default": "全部",
          "desc": "按级别过滤，如 -p err 只看错误及更严重的。"
        },
        {
          "flag": "-b [偏移], --boot",
          "default": "本次启动",
          "desc": "只看某次启动的日志，-b -1 表示上一次启动。排查异常重启时必用。"
        },
        {
          "flag": "-k, --dmesg",
          "default": "关闭",
          "desc": "只显示内核消息。"
        },
        {
          "flag": "-o <格式>, --output",
          "default": "short",
          "desc": "输出格式，可选 short/json/json-pretty/cat/verbose。"
        },
        {
          "flag": "--no-pager",
          "default": "关闭",
          "desc": "不使用分页器，直接输出全部。脚本中必备。"
        },
        {
          "flag": "--disk-usage / --vacuum-size",
          "default": "无",
          "desc": "查看日志占用空间与按大小清理，如 --vacuum-size=200M。"
        }
      ],
      "sample": {
        "output": "$ journalctl -u nginx -b --no-pager | tail -5\nAug 04 11:00 nginx[812]: start worker\n$ journalctl -f -u nginx\n(live log...)",
        "explain": "`journalctl -u nginx -b` 只看本次启动的 nginx 日志；`-f` 实时跟随。systemd 系统统一日志入口。"
      }
    },
    {
      "name": "hostnamectl",
      "category": "sys",
      "description": "查看与设置主机名及相关的机器信息（systemd）。",
      "keywords": [
        "主机名",
        "hostnamectl"
      ],
      "examples": [
        {
          "cmd": "hostnamectl",
          "desc": "查看/设置主机名"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ hostnamectl\n Static hostname: server01\n       Operating System: Ubuntu 22.04 LTS\n            Kernel: Linux 6.8.0-45",
        "explain": "`hostnamectl`(无参) 显示主机名、操作系统、内核等；`set-hostname` 可改主机名。"
      }
    },
    {
      "name": "timedatectl",
      "category": "sys",
      "description": "查看与设置系统时间、时区与 NTP，保证时间准确。",
      "keywords": [
        "时间",
        "timedatectl"
      ],
      "examples": [
        {
          "cmd": "timedatectl",
          "desc": "看时钟与 NTP"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ timedatectl\n               Local time: Mon 2026-08-04 12:00:00 CST\n           Universal time: Mon 2026-08-04 04:00:00 UTC\n                 Time zone: Asia/Shanghai (CST, +0800)\n$ timedatectl set-timezone UTC",
        "explain": "显示本地/UTC 时间与时区(Asia/Shanghai +0800)；`set-timezone UTC` 改时区。NTP 同步状态也在此。"
      }
    },
    {
      "name": "localectl",
      "category": "sys",
      "description": "查看与设置系统本地化（语言、键盘布局）。",
      "keywords": [
        "本地化",
        "localectl"
      ],
      "examples": [
        {
          "cmd": "localectl",
          "desc": "看语言/键盘设置"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ localectl\n   System Locale: LANG=en_US.UTF-8\n       VC Keymap: us\n      X11 Layout: us",
        "explain": "`localectl` 显示系统语言(LANG)、键盘映射；`set-locale LANG=zh_CN.UTF-8` 可改系统语言。"
      }
    },
    {
      "name": "loginctl",
      "category": "sys",
      "description": "管理登录会话与用户（systemd），查看谁在线、可注销会话。",
      "keywords": [
        "会话",
        "loginctl"
      ],
      "examples": [
        {
          "cmd": "loginctl",
          "desc": "查看登录会话"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ loginctl\nSESSION UID USER SEAT TTY\n      2 1000 user seat0\n$ loginctl terminate-session 2",
        "explain": "`loginctl` 列出登录会话；`terminate-session` 可结束指定会话。管理桌面/用户会话用。"
      }
    },
    {
      "name": "iostat",
      "category": "sys",
      "description": "统计 CPU 与磁盘 I/O 使用率，-x 1 每秒刷新，看磁盘瓶颈。",
      "keywords": [
        "IO统计",
        "iostat"
      ],
      "examples": [
        {
          "cmd": "iostat -x 1",
          "desc": "每秒扩展 IO 统计"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ iostat -x 1 2\navg-cpu:  %user  %system  %idle\n           2.10    0.50   97.40\nDevice  r/s  w/s  await  rkB/s  wkB/s\nsda    0.50 1.20  2.10   20.0   48.0",
        "explain": "`iostat -x` 显示 CPU 与磁盘 I/O：CPU idle 97% 空闲；磁盘 sda 读写速率与 await(平均等待 ms)，排查 I/O 瓶颈。"
      }
    },
    {
      "name": "vmstat",
      "category": "sys",
      "description": "报告虚拟内存、进程、IO 与 CPU 的整体状态，1 秒采样看趋势。",
      "keywords": [
        "内存统计",
        "vmstat"
      ],
      "examples": [
        {
          "cmd": "vmstat 1",
          "desc": "每秒系统统计"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ vmstat 1 3\nprocs --memory-- --io-- -system- ----cpu----\n r  b  swpd  free  si so  bi  bo  in  cs us sy id wa\n 1  0     0  6200   0  0   2   8  45  60  2  1 97  0",
        "explain": "`vmstat 1 3` 每 1 秒采样、共 3 次：procs(r 运行/b 阻塞)、memory(free/swap)、io(bi/bo 块读写)、cpu(us/sy/id/wa)。\nid 97 表示 CPU 空闲，wa 0 无 I/O 等待。"
      }
    },
    {
      "name": "sar",
      "category": "sys",
      "description": "系统活动报告，记录并回放 CPU/内存/IO 历史，性能分析利器。",
      "keywords": [
        "系统报告",
        "sar"
      ],
      "examples": [
        {
          "cmd": "sar -u 1 3",
          "desc": "CPU 使用率采样"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sar -u 1 2\nLinux 6.8.0  (server01)\n12:00:01  CPU  %user  %system  %idle\n12:00:02  all    2.10    0.50   97.40",
        "explain": "`sar -u` 报告 CPU 历史/实时使用率(%user/%system/%idle)；sysstat 套件，可查历史(`sar -u -f /var/log/sa/saXX`)。"
      }
    },
    {
      "name": "mpstat",
      "category": "sys",
      "description": "按 CPU 核心统计利用率，mpstat -P ALL 1 看各核负载是否均衡。",
      "keywords": [
        "CPU统计",
        "mpstat"
      ],
      "examples": [
        {
          "cmd": "mpstat -P ALL 1",
          "desc": "每核使用率"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mpstat -P ALL 1 1\nLinux 6.8.0  (server01)\n12:00:01  CPU  %usr  %sys  %idle\n12:00:02  all   2.10  0.50  97.40\n12:00:02    0   3.00  0.80  96.20",
        "explain": "`mpstat -P ALL` 按每个 CPU 核心分别报告利用率；可发现是否单核打满而其他空闲的负载不均问题。"
      }
    },
    {
      "name": "nproc",
      "category": "sys",
      "description": "输出可用 CPU 核心数，脚本中据此决定并行度。",
      "keywords": [
        "核心数",
        "nproc"
      ],
      "examples": [
        {
          "cmd": "nproc",
          "desc": "输出逻辑核心数"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nproc\n8\n$ nproc --all\n8",
        "explain": "`nproc` 输出可用逻辑 CPU 数(8)；编译/并行任务常用 `make -j$(nproc)` 充分利用多核。"
      }
    },
    {
      "name": "sensors",
      "category": "sys",
      "description": "读取硬件传感器温度/电压（需 lm-sensors），监控过热。",
      "keywords": [
        "温度",
        "sensors"
      ],
      "examples": [
        {
          "cmd": "sensors",
          "desc": "看 CPU/主板温度"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sensors\ncoretemp-isa-0000\nPackage id 0:  +45.0°C\nCore 0:        +42.0°C",
        "explain": "`sensors`(lm-sensors) 显示 CPU/主板温度；Package 45°C 正常，过高需检查散热。监控硬件温度用。"
      }
    },
    {
      "name": "lsb_release",
      "category": "sys",
      "description": "显示发行版信息（如 Ubuntu 22.04），判断系统版本。",
      "keywords": [
        "发行版",
        "lsb_release"
      ],
      "examples": [
        {
          "cmd": "lsb_release -a",
          "desc": "显示全部信息"
        },
        {
          "cmd": "lsb_release -cs",
          "desc": "显示代号（如 jammy）"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "部分精简系统需安装 lsb-release 包",
      "compare": null,
      "options": [
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "输出全部信息，含发行商、版本号与代号。"
        },
        {
          "flag": "-d, --description",
          "default": "关闭",
          "desc": "只输出发行版描述行。"
        },
        {
          "flag": "-r, --release",
          "default": "关闭",
          "desc": "只输出版本号。"
        },
        {
          "flag": "-c, --codename",
          "default": "关闭",
          "desc": "只输出代号，如 jammy、bookworm。配置软件源时常用。"
        },
        {
          "flag": "-i, --id",
          "default": "关闭",
          "desc": "只输出发行商 ID，如 Ubuntu、Debian。"
        },
        {
          "flag": "-s, --short",
          "default": "关闭",
          "desc": "精简输出，去掉字段名前缀，便于脚本取值。"
        },
        {
          "flag": "（可用性）",
          "default": "无",
          "desc": "许多最小化安装未预装该命令，更可靠的做法是读取 /etc/os-release。"
        }
      ],
      "sample": {
        "output": "$ lsb_release -a\nDistributor ID: Ubuntu\nDescription:    Ubuntu 22.04.4 LTS\nRelease:        22.04\nCodename:       jammy",
        "explain": "`lsb_release -a` 显示发行版信息：Ubuntu 22.04.4 LTS，代号 jammy。脚本中判断系统版本常用。"
      }
    },
    {
      "name": "neofetch",
      "category": "sys",
      "description": "美观地展示系统信息与 ASCII logo，截图晒配置常用。",
      "keywords": [
        "系统信息",
        "neofetch"
      ],
      "examples": [
        {
          "cmd": "neofetch",
          "desc": "显示系统概览"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装；fastfetch 为更快的替代品",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ neofetch\nOS: Ubuntu 22.04 LTS\nHost: ThinkPad T14\nCPU: Intel i7 (8) @ 3.0GHz\nMemory: 4123MiB / 15987MiB",
        "explain": "`neofetch` 以美观方式汇总系统信息(OS/主机/CPU/内存)并配 ASCII logo，常用于截图展示。"
      }
    },
    {
      "name": "btop",
      "category": "sys",
      "description": "现代化资源监控，彩色 UI 展示 CPU/内存/网络/磁盘，交互流畅。",
      "keywords": [
        "监控",
        "btop",
        "资源"
      ],
      "examples": [
        {
          "cmd": "btop",
          "desc": "启动监控界面"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装；htop 的增强版",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ btop\nCPU[|||       6.2%]  Mem[|||||   4.1G/15.6G]  Net[↓12KiB/s ↑3KiB/s]\nProcess: vim(2.1%)  node(1.3%)  ...",
        "explain": "`btop` 现代化资源监控(继承 htop)，图形化显示 CPU/内存/网络与进程排行，交互友好。"
      }
    },
    {
      "name": "glances",
      "category": "sys",
      "description": "跨平台系统监控，含传感器与告警阈值，web 界面也可用。",
      "keywords": [
        "监控",
        "glances"
      ],
      "examples": [
        {
          "cmd": "glances",
          "desc": "启动监控"
        },
        {
          "cmd": "glances -w",
          "desc": "开启 Web 模式"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装；可配合 -s 作服务端",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ glances\nCPU:  6.2%  Load: 0.10  Mem: 26%  Swap: 0%\nTasks: 210 (1 running)  Sensors: 45°C",
        "explain": "`glances` 一站式监控：CPU/负载/内存/进程/传感器汇总一屏，还可 Web 模式远程查看。"
      }
    },
    {
      "name": "shutdown",
      "category": "power",
      "description": "关机或重启，-h 关机、-r 重启，可指定时间或现在（now）。",
      "keywords": [
        "关机",
        "shutdown"
      ],
      "examples": [
        {
          "cmd": "sudo shutdown -h now",
          "desc": "立即关机"
        },
        {
          "cmd": "sudo shutdown -r 20:00",
          "desc": "20 点重启"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": "远程机器慎用，确认不会断错",
      "compare": null,
      "options": [
        {
          "flag": "now",
          "default": "无",
          "desc": "立即执行。"
        },
        {
          "flag": "+<分钟>",
          "default": "+1",
          "desc": "延迟指定分钟后执行。不带时间参数时默认为 +1 分钟。"
        },
        {
          "flag": "<hh:mm>",
          "default": "无",
          "desc": "在指定时刻执行。"
        },
        {
          "flag": "-h",
          "default": "关闭",
          "desc": "关机，等价于 --poweroff。"
        },
        {
          "flag": "-r, --reboot",
          "default": "关闭",
          "desc": "重启而非关机。"
        },
        {
          "flag": "-c, --cancel",
          "default": "关闭",
          "desc": "取消已安排但尚未执行的关机计划。"
        },
        {
          "flag": "-k",
          "default": "关闭",
          "desc": "只广播警告消息，不真正关机。适用于演练通知。"
        },
        {
          "flag": "\"<消息>\"",
          "default": "无",
          "desc": "附加广播给所有登录用户的提示信息，须放在时间参数之后。"
        }
      ],
      "sample": {
        "output": "$ shutdown -h +10 '系统将维护'\nBroadcast message: ... The system will halt in 10 min\n$ shutdown -c\n(取消已计划的关机)",
        "explain": "`shutdown -h +10` 10 分钟后关机并广播通知；`shutdown -c` 取消。比直接 poweroff 更友好(可提前告警)。"
      }
    },
    {
      "name": "reboot",
      "category": "power",
      "description": "重启系统，等同 shutdown -r now，需 root 权限。",
      "keywords": [
        "重启",
        "reboot"
      ],
      "examples": [
        {
          "cmd": "sudo reboot",
          "desc": "立即重启"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "正常重启，会通知 systemd 依次停止服务。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "跳过服务停止流程直接重启。可能造成文件系统损坏与数据丢失。"
        },
        {
          "flag": "--halt",
          "default": "关闭",
          "desc": "停机而不断电。"
        },
        {
          "flag": "-p, --poweroff",
          "default": "关闭",
          "desc": "关机而非重启。"
        },
        {
          "flag": "-w, --wtmp-only",
          "default": "关闭",
          "desc": "只写关机记录不实际执行。"
        },
        {
          "flag": "（与 shutdown -r 的差别）",
          "default": "无",
          "desc": "reboot 立即执行且不通知登录用户，多用户环境建议改用 shutdown -r +5 并附带提示。"
        }
      ],
      "sample": {
        "output": "$ reboot\n(broadcast: system is rebooting; system restarts)",
        "explain": "`reboot` 立即重启系统；等价于 `shutdown -r now`。远程操作前确认无未保存工作。"
      }
    },
    {
      "name": "poweroff",
      "category": "power",
      "description": "立即关机，等同 shutdown -h now。",
      "keywords": [
        "关机",
        "poweroff"
      ],
      "examples": [
        {
          "cmd": "sudo poweroff",
          "desc": "立即关机"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "关闭系统并切断电源。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制关闭，不停止服务。有数据损坏风险。"
        },
        {
          "flag": "--halt",
          "default": "关闭",
          "desc": "只停机不断电。"
        },
        {
          "flag": "-w",
          "default": "关闭",
          "desc": "仅写入关机记录。"
        },
        {
          "flag": "（权限）",
          "default": "无",
          "desc": "通常需要 root；桌面环境下普通用户可能被 polkit 策略允许。"
        }
      ],
      "sample": {
        "output": "$ poweroff\n(broadcast: system is powering down; machine halts)",
        "explain": "`poweroff` 立即关机断电；等价于 `shutdown -P now`。虚拟机/物理机均可。"
      }
    },
    {
      "name": "halt",
      "category": "power",
      "description": "停止 CPU 运行（常需配合断电），现代多等同于 poweroff。",
      "keywords": [
        "停机",
        "halt"
      ],
      "examples": [
        {
          "cmd": "sudo halt",
          "desc": "停止 CPU（需断电）"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ halt\n(broadcast: system halted)",
        "explain": "`halt` 停止 CPU(系统停摆但未必断电)；现代系统多与 poweroff 行为相近。维护时用。"
      }
    },
    {
      "name": "systemctl",
      "category": "power",
      "description": "systemd 服务管理核心，start/stop/restart/enable 控制开机自启。",
      "keywords": [
        "服务管理",
        "systemctl"
      ],
      "examples": [
        {
          "cmd": "sudo systemctl restart nginx",
          "desc": "重启服务"
        },
        {
          "cmd": "systemctl status nginx",
          "desc": "看状态"
        },
        {
          "cmd": "systemctl enable nginx",
          "desc": "开机自启"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "enable 才开机自启；改配置后 daemon-reload",
      "compare": null,
      "options": [
        {
          "flag": "start / stop / restart <单元>",
          "default": "无",
          "desc": "启动、停止、重启服务。restart 会先停后起，中间存在服务中断窗口。"
        },
        {
          "flag": "reload <单元>",
          "default": "无",
          "desc": "重新加载配置而不重启进程。需服务本身支持，可避免中断。"
        },
        {
          "flag": "status <单元>",
          "default": "无",
          "desc": "查看运行状态与最近日志。排障第一步。"
        },
        {
          "flag": "enable / disable <单元>",
          "default": "无",
          "desc": "设置或取消开机自启。它不影响当前运行状态。"
        },
        {
          "flag": "enable --now <单元>",
          "default": "无",
          "desc": "同时设置自启并立即启动，等价于 enable 加 start。"
        },
        {
          "flag": "is-active / is-enabled",
          "default": "无",
          "desc": "仅用退出码与单词表示状态，适合脚本判断。"
        },
        {
          "flag": "list-units --type=service",
          "default": "无",
          "desc": "列出所有服务单元。加 --all 含未激活的。"
        },
        {
          "flag": "list-unit-files --state=enabled",
          "default": "无",
          "desc": "列出已设为自启的单元。"
        },
        {
          "flag": "daemon-reload",
          "default": "无",
          "desc": "重新加载 systemd 配置。修改 .service 文件后必须执行，否则改动不生效。"
        },
        {
          "flag": "mask / unmask <单元>",
          "default": "无",
          "desc": "彻底屏蔽单元，使其无法被任何方式启动。比 disable 更强。"
        },
        {
          "flag": "--user",
          "default": "系统级",
          "desc": "操作当前用户的 systemd 实例而非系统级。"
        },
        {
          "flag": "-n <行数> / --no-pager",
          "default": "10 / 关闭",
          "desc": "status 时控制日志行数与是否分页。"
        }
      ],
      "sample": {
        "output": "$ systemctl status nginx\n● nginx.service - A high performance web server\n     Active: active (running) since Mon 11:00; 1h ago\n$ systemctl restart nginx",
        "explain": "`systemctl status` 查看服务状态(active running)；`restart/reload/enable/disable` 管理服务。systemd 系统核心命令。"
      }
    },
    {
      "name": "telinit",
      "category": "power",
      "description": "切换运行级别（传统 SysV），如 telinit 3 进入多用户文本模式。",
      "keywords": [
        "运行级别",
        "telinit"
      ],
      "examples": [
        {
          "cmd": "sudo telinit 3",
          "desc": "切到多用户"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "现代多用 systemctl 的 target",
      "options": null,
      "sample": {
        "output": "$ telinit 3\n(switching to runlevel 3: multi-user text mode)",
        "explain": "`telinit 3` 切换运行级别(3=多用户文本、5=图形)；在 systemd 下等价于 `systemctl isolate`。"
      }
    },
    {
      "name": "apt",
      "category": "pkg",
      "description": "Debian/Ubuntu 系的包管理前端，apt update 刷新索引、apt install 安装。",
      "keywords": [
        "包管理",
        "apt"
      ],
      "examples": [
        {
          "cmd": "sudo apt update",
          "desc": "更新索引"
        },
        {
          "cmd": "sudo apt install -y nginx",
          "desc": "安装"
        },
        {
          "cmd": "sudo apt remove nginx",
          "desc": "卸载"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "update",
          "default": "无",
          "desc": "刷新软件源索引。它不升级任何软件包，只更新可用版本列表。安装前应先执行。"
        },
        {
          "flag": "upgrade",
          "default": "无",
          "desc": "升级已安装的包，但不会删除现有包。有依赖冲突的升级会被保留而跳过。"
        },
        {
          "flag": "full-upgrade",
          "default": "无",
          "desc": "允许为解决依赖而删除软件包的升级方式。"
        },
        {
          "flag": "install <包>",
          "default": "无",
          "desc": "安装软件包。可用 <包>=<版本> 指定版本，用 <包>- 表示同时卸载该包。"
        },
        {
          "flag": "remove <包>",
          "default": "无",
          "desc": "卸载软件包但保留配置文件。"
        },
        {
          "flag": "purge <包>",
          "default": "无",
          "desc": "卸载并删除配置文件。彻底清理时使用。"
        },
        {
          "flag": "autoremove",
          "default": "无",
          "desc": "删除不再被依赖的自动安装包。可回收较多空间。"
        },
        {
          "flag": "search <关键词> / show <包>",
          "default": "无",
          "desc": "搜索软件包与查看详情。"
        },
        {
          "flag": "list --installed / --upgradable",
          "default": "无",
          "desc": "列出已安装或可升级的包。"
        },
        {
          "flag": "-y, --yes",
          "default": "关闭",
          "desc": "自动确认所有提示。脚本中必备，但会跳过危险操作的警示。"
        },
        {
          "flag": "--no-install-recommends",
          "default": "关闭",
          "desc": "不安装推荐包，可显著减少体积。适用于容器镜像。"
        },
        {
          "flag": "（与 apt-get 区别）",
          "default": "无",
          "desc": "apt 面向交互使用，输出带进度条与颜色，但接口稳定性弱于 apt-get，脚本中推荐用后者。"
        }
      ],
      "sample": {
        "output": "$ apt update\nHit:1 http://archive.ubuntu.com jammy InRelease\n$ apt install -y curl\nReading package lists... Done\nThe following NEW packages will be installed: curl",
        "explain": "`apt update` 刷新软件源索引(Hit 表示已最新)；`apt install -y curl` 安装 curl 并确认将新增该包。Debian/Ubuntu 前端。"
      }
    },
    {
      "name": "apt-get",
      "category": "pkg",
      "description": "底层 apt 工具，行为更稳定可预测，脚本与 CI 中常用。",
      "keywords": [
        "包管理",
        "apt-get"
      ],
      "examples": [
        {
          "cmd": "sudo apt-get update",
          "desc": "更新索引"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "交互/脚本推荐 apt；apt-get 兼容旧脚本",
      "options": [
        {
          "flag": "update / upgrade / dist-upgrade",
          "default": "无",
          "desc": "分别为刷新索引、升级、允许增删包的升级。dist-upgrade 对应 apt full-upgrade。"
        },
        {
          "flag": "install <包>",
          "default": "无",
          "desc": "安装。--reinstall 可重新安装已装的包。"
        },
        {
          "flag": "remove / purge <包>",
          "default": "无",
          "desc": "卸载与彻底卸载。"
        },
        {
          "flag": "autoremove / autoclean / clean",
          "default": "无",
          "desc": "分别清理无用依赖、过期的缓存包、全部缓存包。"
        },
        {
          "flag": "-y",
          "default": "关闭",
          "desc": "自动确认。"
        },
        {
          "flag": "-s, --simulate",
          "default": "关闭",
          "desc": "只模拟不实际执行。执行有风险的操作前建议先跑一次。"
        },
        {
          "flag": "-f, --fix-broken",
          "default": "关闭",
          "desc": "尝试修复依赖损坏的状态。dpkg 安装失败后的标准补救手段。"
        },
        {
          "flag": "-d, --download-only",
          "default": "关闭",
          "desc": "只下载不安装。适用于离线部署准备。"
        },
        {
          "flag": "--allow-downgrades",
          "default": "关闭",
          "desc": "允许降级到更低版本。"
        },
        {
          "flag": "（脚本适用性）",
          "default": "无",
          "desc": "命令行接口向后兼容有保证，是自动化脚本的推荐选择。"
        }
      ],
      "sample": {
        "output": "$ apt-get install -y nginx\n0 upgraded, 12 newly installed, 0 to remove\nProcessing triggers for nginx...",
        "explain": "`apt-get` 是 apt 的低层命令，脚本中更稳定；输出显示将安装 12 个包，适合自动化部署。"
      }
    },
    {
      "name": "dpkg",
      "category": "pkg",
      "description": "Debian 底层包操作，直接安装 .deb；不自动解决依赖。",
      "keywords": [
        "包管理",
        "dpkg"
      ],
      "examples": [
        {
          "cmd": "sudo dpkg -i pkg.deb",
          "desc": "装本地 deb"
        },
        {
          "cmd": "dpkg -l",
          "desc": "列出已装包"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "dpkg 不解决依赖；apt 会",
      "options": [
        {
          "flag": "-i <deb文件>, --install",
          "default": "无",
          "desc": "安装本地 deb 包。它不自动解决依赖，失败后需用 apt-get -f install 修复。"
        },
        {
          "flag": "-r <包>, --remove",
          "default": "无",
          "desc": "卸载但保留配置。"
        },
        {
          "flag": "-P <包>, --purge",
          "default": "无",
          "desc": "彻底卸载含配置文件。"
        },
        {
          "flag": "-l [模式], --list",
          "default": "无",
          "desc": "列出已安装包，支持通配符过滤。"
        },
        {
          "flag": "-L <包>, --listfiles",
          "default": "无",
          "desc": "列出某个包安装的所有文件路径。"
        },
        {
          "flag": "-S <路径>, --search",
          "default": "无",
          "desc": "反查某个文件属于哪个包。排查文件来源时非常有用。"
        },
        {
          "flag": "-s <包>, --status",
          "default": "无",
          "desc": "查看包的详细状态。"
        },
        {
          "flag": "--configure -a",
          "default": "无",
          "desc": "配置所有已解包但未配置的包。中断安装后的修复手段。"
        },
        {
          "flag": "--get-selections",
          "default": "无",
          "desc": "导出已安装包列表，可用于在新机器上批量还原。"
        },
        {
          "flag": "（层级定位）",
          "default": "无",
          "desc": "dpkg 是底层工具，只处理本地包与依赖检查，不访问软件源。"
        }
      ],
      "sample": {
        "output": "$ dpkg -i package.deb\nSelecting previously unselected package demo.\nSetting up demo (1.0) ...\n$ dpkg -l | grep demo\nii  demo  1.0  amd64  demo package",
        "explain": "`dpkg -i` 直接安装本地 .deb(不自动解决依赖)；`dpkg -l` 列出已装包，ii 表示正常安装。依赖缺失需手动 apt -f install 修复。"
      }
    },
    {
      "name": "yum",
      "category": "pkg",
      "description": "RHEL/CentOS 旧版包管理器，install/update 管理软件（新版转 dnf）。",
      "keywords": [
        "包管理",
        "yum"
      ],
      "examples": [
        {
          "cmd": "sudo yum install nginx",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ yum install -y httpd\nDependencies resolved.\nInstalled: httpd-2.4.6\nComplete!",
        "explain": "`yum install` 解析依赖并安装 httpd，提示 Complete 完成。RHEL/CentOS 7 及以前默认包管理器。"
      }
    },
    {
      "name": "dnf",
      "category": "pkg",
      "description": "RHEL/CentOS 新版包管理器，依赖求解更快，取代 yum。",
      "keywords": [
        "包管理",
        "dnf"
      ],
      "examples": [
        {
          "cmd": "sudo dnf install nginx",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "dnf 取代 yum",
      "options": null,
      "sample": {
        "output": "$ dnf install -y git\nDependencies resolved.\nInstalled: git-2.40.0\nComplete!",
        "explain": "`dnf` 是 yum 的下一代(更快、更好依赖解算)；RHEL 8+ 默认。安装 git 显示 Complete。"
      }
    },
    {
      "name": "rpm",
      "category": "pkg",
      "description": "RHEL 底层包管理，rpm -qa 列出已装、rpm -i 安装 .rpm。",
      "keywords": [
        "包管理",
        "rpm"
      ],
      "examples": [
        {
          "cmd": "rpm -qa",
          "desc": "列出已装包"
        },
        {
          "cmd": "sudo rpm -ivh pkg.rpm",
          "desc": "装 rpm"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ rpm -ivh package.rpm\nPreparing... ################################# [100%]\nUpdating / installing...\n   1:demo-1.0-1 ################################# [100%]\n$ rpm -qa | grep demo\ndemo-1.0-1.x86_64",
        "explain": "`rpm -ivh` 安装本地 rpm(-v 详细 -h 进度条)；`rpm -qa` 查询已装包。不自动处理依赖。"
      }
    },
    {
      "name": "pacman",
      "category": "pkg",
      "description": "Arch Linux 的包管理器，-Syu 同步并升级整个系统。",
      "keywords": [
        "包管理",
        "pacman"
      ],
      "examples": [
        {
          "cmd": "sudo pacman -Syu",
          "desc": "更新系统"
        },
        {
          "cmd": "sudo pacman -S pkg",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pacman -Syu\n:: Synchronizing package databases...\n:: Starting full system upgrade...\nresolving dependencies... done",
        "explain": "`pacman -Syu` 同步源并全系统升级(Arch 风格)；`-S` 安装、`-R` 卸载。Arch/Manjaro 包管理器。"
      }
    },
    {
      "name": "zypper",
      "category": "pkg",
      "description": "openSUSE 的包管理器，install 安装、refresh 刷新仓库。",
      "keywords": [
        "包管理",
        "zypper"
      ],
      "examples": [
        {
          "cmd": "sudo zypper install pkg",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ zypper install -y vim\nRefreshing service 'repo'...\nResolving package dependencies...\nThe following NEW package is going to be installed: vim",
        "explain": "`zypper install` openSUSE 包管理器；解析依赖并显示将安装的 vim。"
      }
    },
    {
      "name": "apk",
      "category": "pkg",
      "description": "Alpine Linux 的轻量包管理器，容器镜像里常见。",
      "keywords": [
        "包管理",
        "apk"
      ],
      "examples": [
        {
          "cmd": "apk add pkg",
          "desc": "安装（容器常用）"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ apk add curl\nfetch https://dl-cdn.alpinelinux.org/.../curl-8.apk\nOK: 12 MiB in 45 packages\n$ apk update\nfetch ... Index of /.../x86_64/APKINDEX.tar.gz",
        "explain": "`apk add curl` Alpine 安装包(基于 musl，体积小)；`apk update` 刷新索引。容器镜像常用。"
      }
    },
    {
      "name": "snap",
      "category": "pkg",
      "description": "通用快照包格式，沙盒隔离、跨发行版，sudo snap install 安装。",
      "keywords": [
        "snap",
        "snap"
      ],
      "examples": [
        {
          "cmd": "sudo snap install code",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ snap install code --classic\ncode 1.90 from Visual Studio Code installed\n$ snap list | grep code\ncode  1.90  latest/stable  canonical*  -",
        "explain": "`snap install` 安装 snap 打包的应用(--classic 放宽沙箱)；`snap list` 查看已装。跨发行版的通用打包格式。"
      }
    },
    {
      "name": "flatpak",
      "category": "pkg",
      "description": "沙盒化应用分发，权限可控，适合桌面图形程序。",
      "keywords": [
        "flatpak",
        "flatpak"
      ],
      "examples": [
        {
          "cmd": "flatpak install app",
          "desc": "安装"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ flatpak install flathub org.gimp.GIMP\nLooking for matches...\nInstalling org.gimp.GIMP\n$ flatpak list | head -2\norg.gimp.GIMP  stable  system",
        "explain": "`flatpak install` 从 flathub 装桌面应用(沙箱隔离)；`flatpak list` 列出已装。桌面应用分发新方式。"
      }
    },
    {
      "name": "brew",
      "category": "pkg",
      "description": "macOS/Homebrew 包管理器（Linux 也可用），安装开发工具方便。",
      "keywords": [
        "brew",
        "brew"
      ],
      "examples": [
        {
          "cmd": "brew install wget",
          "desc": "macOS 装包"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ brew install wget\n==> Downloading https://.../wget\n==> Pouring wget--1.24.bottle\n🍺  /opt/homebrew/Cellar/wget/1.24  (success)",
        "explain": "`brew install wget` macOS/ Linux 的 Homebrew 包管理器；\"Pour bottle\" 表示用预编译二进制，安装快。"
      }
    },
    {
      "name": "apt-cache",
      "category": "pkg",
      "description": "查询 apt 包信息，apt-cache search 按关键词找包。",
      "keywords": [
        "包查询",
        "apt-cache"
      ],
      "examples": [
        {
          "cmd": "apt-cache search nginx",
          "desc": "搜索包"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ apt-cache search nginx\nnginx - high performance web server\nnginx-light - ...\n$ apt-cache policy nginx\nnginx: Installed: (none)  Candidate: 1.18.0",
        "explain": "`apt-cache search` 按关键词搜包；`policy` 显示已装/候选版本。查询软件源信息用。"
      }
    },
    {
      "name": "aptitude",
      "category": "pkg",
      "description": "Debian/Ubuntu 高级包管理，带依赖求解与文本界面。",
      "keywords": [
        "aptitude",
        "包管理"
      ],
      "examples": [
        {
          "cmd": "sudo aptitude install pkg",
          "desc": "安装包"
        },
        {
          "cmd": "sudo aptitude search kw",
          "desc": "搜索"
        },
        {
          "cmd": "sudo aptitude safe-upgrade",
          "desc": "安全升级"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需安装；能更好地处理依赖冲突，优于 apt-get",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ aptitude search '~i~nnginx'\ni   nginx  - high performance web server\n$ aptitude install nginx\nThe following NEW packages will be installed: nginx",
        "explain": "`aptitude` 是 apt 的更强前端，搜索支持 ~ 模式(如 ~i 已装)；依赖解算更智能，交互式 TUI。"
      }
    },
    {
      "name": "emerge",
      "category": "pkg",
      "description": "Gentoo 的源码包管理器，按 USE 标志从源码编译安装。",
      "keywords": [
        "emerge",
        "gentoo",
        "包管理"
      ],
      "examples": [
        {
          "cmd": "sudo emerge --ask pkg",
          "desc": "安装包"
        },
        {
          "cmd": "sudo emerge --sync",
          "desc": "同步 Portage 树"
        },
        {
          "cmd": "sudo emerge -uDN @world",
          "desc": "更新整个系统"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "编译安装耗时；--ask 先预览、--oneshot 不写入 world",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ emerge -av nginx\nThese are the packages that would be merged:\n[ebuild  N] www-servers/nginx-1.24.0\nWould you like to merge these packages? [Yes/No]",
        "explain": "`emerge -av nginx` Gentoo 源码包管理器(-a 询问 -v 详细)；显示将编译安装 nginx，确认后从源码构建。"
      }
    },
    {
      "name": "lsmod",
      "category": "kernel",
      "description": "列出当前已加载的内核模块，看哪些驱动/功能已启用。",
      "keywords": [
        "内核模块",
        "lsmod"
      ],
      "examples": [
        {
          "cmd": "lsmod",
          "desc": "看已加载模块"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsmod | head -4\nModule        Size  Used by\nnvidia     12345678  102  drm\nsnd_hda_intel  90123  4  snd_hda_codec",
        "explain": "`lsmod` 列出已加载内核模块；Size 大小、Used by 被哪些模块依赖。nvidia 模块被 102 处使用。"
      }
    },
    {
      "name": "modprobe",
      "category": "kernel",
      "description": "加载或卸载模块并自动处理依赖，比 insmod 更聪明。",
      "keywords": [
        "模块加载",
        "modprobe"
      ],
      "examples": [
        {
          "cmd": "sudo modprobe kvm",
          "desc": "加载模块"
        },
        {
          "cmd": "sudo modprobe -r kvm",
          "desc": "卸载"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "修改需谨慎，错误模块可致系统不稳",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ modprobe vfat\n$ lsmod | grep vfat\nvfat    24576  0\n$ modprobe -r vfat",
        "explain": "`modprobe vfat` 加载 vfat 模块(自动处理依赖)；`lsmod` 确认已加载；`-r` 移除。比 insmod 智能。"
      }
    },
    {
      "name": "insmod",
      "category": "kernel",
      "description": "把指定的 .ko 模块文件直接插入内核，不处理依赖。",
      "keywords": [
        "模块插入",
        "insmod"
      ],
      "examples": [
        {
          "cmd": "sudo insmod drv.ko",
          "desc": "加载指定 .ko"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "insmod 不自动解决依赖；modprobe 会",
      "options": null,
      "sample": {
        "output": "$ insmod ./mymod.ko\n$ lsmod | grep mymod\nmymod  16384  0",
        "explain": "`insmod` 直接插入指定 .ko 模块文件(不自动解决依赖)；`lsmod` 确认加载。一般优先用 modprobe。"
      }
    },
    {
      "name": "rmmod",
      "category": "kernel",
      "description": "从内核移除已加载的模块，模块被占用时失败。",
      "keywords": [
        "模块移除",
        "rmmod"
      ],
      "examples": [
        {
          "cmd": "sudo rmmod drv",
          "desc": "移除模块"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ rmmod mymod\n$ lsmod | grep mymod\n(无输出，模块已卸载)",
        "explain": "`rmmod` 移除指定模块；`lsmod` 无输出即已卸载。若被其他模块依赖会失败，需先 rmmod 依赖方。"
      }
    },
    {
      "name": "depmod",
      "category": "kernel",
      "description": "分析模块依赖并生成 modules.dep，加载前通常需先运行。",
      "keywords": [
        "模块依赖",
        "depmod"
      ],
      "examples": [
        {
          "cmd": "sudo depmod",
          "desc": "更新依赖映射"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ depmod -a\n(生成 /lib/modules/$(uname -r)/modules.dep)\n$ cat /lib/modules/$(uname -r)/modules.dep | head -1\nkernel/fs/vfat/vfat.ko: kernel/fs/fat/fat.ko",
        "explain": "`depmod -a` 为当前内核重新生成模块依赖关系文件；输出显示 vfat 依赖 fat 模块，modprobe 据此自动加载。"
      }
    },
    {
      "name": "modinfo",
      "category": "kernel",
      "description": "查看模块的详细信息（作者、参数、依赖、别名）。",
      "keywords": [
        "模块信息",
        "modinfo"
      ],
      "examples": [
        {
          "cmd": "modinfo kvm",
          "desc": "看模块详情/参数"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ modinfo vfat | head -6\nfilename:       /lib/modules/.../vfat.ko\nauthor:         ...\nlicense:        GPL\ndescription:     VFAT filesystem support\ndepends:        fat",
        "explain": "`modinfo vfat` 显示模块信息：文件路径、作者、许可证、描述、依赖(depends: fat)。查模块详情用。"
      }
    },
    {
      "name": "echo",
      "category": "shell",
      "description": "输出文本或变量到标准输出，脚本中打印信息或写文件最常见。",
      "keywords": [
        "输出",
        "echo"
      ],
      "examples": [
        {
          "cmd": "echo hello",
          "desc": "打印文本"
        },
        {
          "cmd": "echo $PATH",
          "desc": "打印变量"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "不输出末尾换行。适用于拼接输出或提示符。"
        },
        {
          "flag": "-e",
          "default": "关闭",
          "desc": "解释反斜杠转义，如 \\n 换行、\\t 制表符。bash 内建默认不解释。"
        },
        {
          "flag": "-E",
          "default": "开启（默认）",
          "desc": "不解释转义序列。"
        },
        {
          "flag": "（引号差异）",
          "default": "无",
          "desc": "双引号内变量会展开，单引号内原样输出。含特殊字符时务必加引号。"
        },
        {
          "flag": "（可移植性）",
          "default": "无",
          "desc": "不同 shell 与 /bin/echo 对 -e 的处理不一致，脚本中建议改用 printf。"
        }
      ],
      "sample": {
        "output": "$ echo \"Hello $USER\"\nHello user\n$ echo -e \"a\\tb\"\na    b",
        "explain": "第1条输出变量 $USER 展开后的值(Hello user)。\n第2条 `-e` 解释转义，`\\t` 变为制表符，实现简单格式化输出。"
      }
    },
    {
      "name": "printf",
      "category": "shell",
      "description": "按格式字符串输出，比 echo 更可控（对齐、进制、转义），适合生成规整输出。",
      "keywords": [
        "格式化输出",
        "printf"
      ],
      "examples": [
        {
          "cmd": "printf '%s\n' a b",
          "desc": "格式输出"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "printf 更可控；echo 简单",
      "options": [
        {
          "flag": "<格式串> <参数...>",
          "default": "无",
          "desc": "按格式输出。不会自动换行，需显式写 \\n。"
        },
        {
          "flag": "%s / %d / %f",
          "default": "无",
          "desc": "分别为字符串、整数、浮点。%.2f 可控制小数位数。"
        },
        {
          "flag": "%-10s / %10s",
          "default": "无",
          "desc": "左对齐与右对齐并指定宽度。用于输出对齐的表格。"
        },
        {
          "flag": "%q",
          "default": "无",
          "desc": "以可被 shell 重新解析的安全形式输出，适用于生成脚本。"
        },
        {
          "flag": "（参数复用）",
          "default": "无",
          "desc": "参数多于格式占位时，格式串会被重复套用，可用于批量格式化列表。"
        },
        {
          "flag": "（相比 echo）",
          "default": "无",
          "desc": "行为在各平台高度一致，是脚本中输出的推荐方式。"
        }
      ],
      "sample": {
        "output": "$ printf '%-10s %d\\n' \"alice\" 30\nalice      30\n$ printf '%.2f\\n' 3.14159\n3.14",
        "explain": "`printf` 类 C 格式化：`%-10s` 左对齐占 10 列，`%d` 整数；`%.2f` 保留 2 位小数。比 echo 更可控。"
      }
    },
    {
      "name": "export",
      "category": "shell",
      "description": "把变量导出为环境变量，使其对子进程可见，如 export PATH=$PATH:/opt/bin。",
      "keywords": [
        "环境变量",
        "export"
      ],
      "examples": [
        {
          "cmd": "export PATH=$PATH:/opt/bin",
          "desc": "追加 PATH"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<变量>=<值>",
          "default": "无",
          "desc": "定义并导出为环境变量，使子进程可继承。"
        },
        {
          "flag": "<已有变量>",
          "default": "无",
          "desc": "把已存在的 shell 变量标记为导出。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "列出所有导出的变量。"
        },
        {
          "flag": "-n <变量>",
          "default": "无",
          "desc": "取消导出属性，变量仍存在于当前 shell 但不再传给子进程。"
        },
        {
          "flag": "-f <函数名>",
          "default": "关闭",
          "desc": "导出函数而非变量。"
        },
        {
          "flag": "（作用域）",
          "default": "无",
          "desc": "只影响当前 shell 及其子进程，无法反向影响父进程；关闭终端即失效，持久化需写入 ~/.bashrc 等配置。"
        }
      ],
      "sample": {
        "output": "$ export API_KEY=abc123\n$ echo $API_KEY\nabc123\n$ env | grep API_KEY\nAPI_KEY=abc123",
        "explain": "`export` 设置并导出环境变量(对子进程可见)；`env | grep` 确认已存在于环境。仅当前 shell 会话有效。"
      }
    },
    {
      "name": "alias",
      "category": "shell",
      "description": "为命令定义别名，如 alias ll='ls -la'，简化常用长命令。",
      "keywords": [
        "别名",
        "alias"
      ],
      "examples": [
        {
          "cmd": "alias ll='ls -la'",
          "desc": "设别名"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<名称>='<命令>'",
          "default": "无",
          "desc": "定义别名。等号两侧不能有空格，这是最常见的语法错误。"
        },
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "列出所有已定义的别名。"
        },
        {
          "flag": "<名称>",
          "default": "无",
          "desc": "查看单个别名的定义。"
        },
        {
          "flag": "unalias <名称>",
          "default": "无",
          "desc": "删除别名；unalias -a 清除全部。"
        },
        {
          "flag": "\\<命令>",
          "default": "无",
          "desc": "在命令前加反斜杠可临时绕过别名，执行原始命令。"
        },
        {
          "flag": "（持久化与局限）",
          "default": "无",
          "desc": "仅在当前交互式 shell 有效，需写入 ~/.bashrc 才持久；别名不接受参数，需要参数应改用函数。"
        }
      ],
      "sample": {
        "output": "$ alias ll='ls -lh'\n$ ll\n(以长可读格式列出)\n$ alias\nalias ll='ls -lh'",
        "explain": "`alias ll='ls -lh'` 定义命令别名；之后 ll 即执行 ls -lh。`alias` 单独列出全部别名。"
      }
    },
    {
      "name": "unalias",
      "category": "shell",
      "description": "取消已定义的别名，恢复原始命令行为。",
      "keywords": [
        "取消别名",
        "unalias"
      ],
      "examples": [
        {
          "cmd": "unalias ll",
          "desc": "删除别名"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ unalias ll\n$ ll\nbash: ll: command not found",
        "explain": "`unalias ll` 移除别名；再执行 ll 报错 \"command not found\"，确认别名已失效。"
      }
    },
    {
      "name": "source",
      "category": "shell",
      "description": "在当前 shell 中执行脚本（不另开子进程），常用于加载配置文件如 ~/.bashrc。",
      "keywords": [
        "执行脚本",
        "source"
      ],
      "examples": [
        {
          "cmd": "source ~/.bashrc",
          "desc": "重载配置"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "source 在当前 shell 执行；./script 在子 shell",
      "options": [
        {
          "flag": "<文件>",
          "default": "无",
          "desc": "在当前 shell 中执行脚本，等价于点命令 . 。"
        },
        {
          "flag": "（与直接执行的区别）",
          "default": "无",
          "desc": "直接执行会开子进程，其中的变量与目录切换不影响当前 shell；source 则会真实生效。"
        },
        {
          "flag": "（典型用途）",
          "default": "无",
          "desc": "重新加载 ~/.bashrc、载入环境变量文件、激活 Python 虚拟环境。"
        },
        {
          "flag": "（路径查找）",
          "default": "无",
          "desc": "不含斜杠的文件名会先在 PATH 中查找，建议写成 ./file 明确指向当前目录。"
        },
        {
          "flag": "（副作用风险）",
          "default": "无",
          "desc": "脚本中的 exit 会直接退出当前 shell 而非仅退出脚本。"
        }
      ],
      "sample": {
        "output": "$ source ./venv/bin/activate\n(venv) $  # 提示符前缀出现 (venv)\n$ echo $VIRTUAL_ENV\n/path/venv",
        "explain": "`source script` 在当前 shell 执行脚本(不启子进程)，故能修改当前环境；此处激活 Python 虚拟环境，VIRTUAL_ENV 已设。"
      }
    },
    {
      "name": "history",
      "category": "shell",
      "description": "显示命令历史记录，!n 可重新执行第 n 条，方便复用。",
      "keywords": [
        "历史",
        "history"
      ],
      "examples": [
        {
          "cmd": "history",
          "desc": "列出历史"
        },
        {
          "cmd": "!123",
          "desc": "执行第 123 条"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "列出历史命令及其编号。"
        },
        {
          "flag": "<数字>",
          "default": "全部",
          "desc": "只显示最近 N 条。"
        },
        {
          "flag": "-c",
          "default": "关闭",
          "desc": "清空当前会话的历史列表。不影响已写入历史文件的内容。"
        },
        {
          "flag": "-w",
          "default": "关闭",
          "desc": "把当前历史立即写入历史文件。默认仅在退出时写入。"
        },
        {
          "flag": "-d <编号>",
          "default": "无",
          "desc": "删除指定编号的一条历史。用于清除误输入的密码。"
        },
        {
          "flag": "!<编号> / !!",
          "default": "无",
          "desc": "重新执行指定编号的命令；!! 表示上一条，sudo !! 是常用组合。"
        },
        {
          "flag": "HISTSIZE / HISTFILESIZE",
          "default": "500 / 500",
          "desc": "分别控制内存中与文件中保存的条数。"
        },
        {
          "flag": "HISTCONTROL=ignorespace",
          "default": "无",
          "desc": "设置后，以空格开头的命令不会被记入历史，适用于输入敏感信息。"
        }
      ],
      "sample": {
        "output": "$ history 5\n  998  ls -l\n  999  cd /tmp\n 1000  vim a.txt\n$ !999\ncd /tmp",
        "explain": "`history 5` 显示最近 5 条历史命令及编号；`!999` 重放第 999 条(cd /tmp)。"
      }
    },
    {
      "name": "read",
      "category": "shell",
      "description": "从标准输入读取一行赋值给变量，编写交互式脚本时常用。",
      "keywords": [
        "读取输入",
        "read"
      ],
      "examples": [
        {
          "cmd": "read name",
          "desc": "读入变量"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ read -p 'Name: ' name; echo \"Hi $name\"\nName: alice\nHi alice",
        "explain": "`read -p` 从标准输入读入变量 name；输入 alice 后 echo 显示，常用于脚本交互。"
      }
    },
    {
      "name": "eval",
      "category": "shell",
      "description": "把字符串当作命令执行，灵活但需谨慎拼接不可信输入以防注入。",
      "keywords": [
        "执行字符串",
        "eval"
      ],
      "examples": [
        {
          "cmd": "eval \"$cmd\"",
          "desc": "动态执行"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "拼接用户输入执行有注入风险",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ cmd=\"ls -l\"; eval $cmd\ntotal 4\n-rw-r--r-- ... a.txt",
        "explain": "`eval` 把字符串当命令执行；此处展开 cmd 变量并运行 ls -l。慎用——拼接用户输入易引发注入。"
      }
    },
    {
      "name": "exec",
      "category": "shell",
      "description": "用新命令替换当前 shell 进程，常用于脚本结尾切换为指定程序。",
      "keywords": [
        "替换进程",
        "exec"
      ],
      "examples": [
        {
          "cmd": "exec bash",
          "desc": "替换当前 shell"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ exec bash --login\n(当前 shell 被新 bash 替换，PID 不变)",
        "explain": "`exec` 用新程序替换当前 shell 进程(不创建子进程)；常用于在脚本末尾切换 shell 或重定向后替换。"
      }
    },
    {
      "name": "trap",
      "category": "shell",
      "description": "捕获信号或事件（如 EXIT/ERR）并指定处理函数，做清理与容错。",
      "keywords": [
        "信号捕获",
        "trap"
      ],
      "examples": [
        {
          "cmd": "trap 'clean' EXIT",
          "desc": "退出时清理"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ trap 'echo bye' EXIT\n$ exit\nbye",
        "explain": "`trap 'echo bye' EXIT` 注册退出钩子；shell 退出时执行 echo bye。脚本清理(删临时文件)常用。"
      }
    },
    {
      "name": "set",
      "category": "shell",
      "description": "设置 shell 选项，如 set -e 遇错即停、set -x 打印执行的命令。",
      "keywords": [
        "shell选项",
        "set"
      ],
      "examples": [
        {
          "cmd": "set -e",
          "desc": "遇错即停"
        },
        {
          "cmd": "set -x",
          "desc": "打印执行命令"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ set -e\n$ set -x; ls /tmp; set +x\n+ ls /tmp\n(跟踪打印执行的命令)",
        "explain": "`set -e` 遇错即退出；`set -x` 开启命令回显(前缀 +)，便于调试脚本；`set +x` 关闭。"
      }
    },
    {
      "name": "unset",
      "category": "shell",
      "description": "删除变量或函数，释放不再需要的内容，避免误用旧值。",
      "keywords": [
        "删除变量",
        "unset"
      ],
      "examples": [
        {
          "cmd": "unset VAR",
          "desc": "删除变量"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ unset API_KEY\n$ echo $API_KEY\n\n(空，变量已清除)",
        "explain": "`unset` 删除变量或函数；`echo` 输出空，确认 API_KEY 已不存在。"
      }
    },
    {
      "name": "shopt",
      "category": "shell",
      "description": "开关 bash 的行为选项，如 shopt -s globstar 开启 ** 递归匹配。",
      "keywords": [
        "shell选项",
        "shopt"
      ],
      "examples": [
        {
          "cmd": "shopt -s globstar",
          "desc": "启用 ** 递归匹配"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ shopt -s globstar\n$ shopt globstar\nglobstar  on",
        "explain": "`shopt -s globstar` 开启 globstar(`**` 递归匹配)；`shopt globstar` 显示其状态为 on。bash 高级通配开关。"
      }
    },
    {
      "name": "type",
      "category": "shell",
      "description": "显示命令的类型（别名/内建/函数/文件），判断到底执行的是哪一个。",
      "keywords": [
        "命令类型",
        "type"
      ],
      "examples": [
        {
          "cmd": "type ls",
          "desc": "显示是别名/内建/文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<命令名>",
          "default": "无",
          "desc": "判断命令的类型：别名、内建、函数、外部程序或关键字。"
        },
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "列出所有同名匹配，含被覆盖的路径。可发现 PATH 中的同名冲突。"
        },
        {
          "flag": "-t",
          "default": "关闭",
          "desc": "只输出类型单词，如 file/alias/builtin/function。适合脚本判断。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "只在命令为外部程序时输出其路径。"
        },
        {
          "flag": "-P",
          "default": "关闭",
          "desc": "强制在 PATH 中查找，忽略别名与内建。"
        },
        {
          "flag": "（相比 which）",
          "default": "无",
          "desc": "which 是外部程序且不识别别名与内建，type 是 shell 内建，判断结果更准确。"
        }
      ],
      "sample": {
        "output": "$ type ls\nls is aliased to 'ls --color=auto'\n$ type -t cd\nbuiltin",
        "explain": "`type` 说明命令类型：ls 是别名；`type -t cd` 返回 builtin(内置命令)，区分别名/函数/内置/外部程序。"
      }
    },
    {
      "name": "command",
      "category": "shell",
      "description": "绕过别名与函数直接执行原命令，避免被覆盖的同名别名干扰。",
      "keywords": [
        "绕过别名",
        "command"
      ],
      "examples": [
        {
          "cmd": "command ls",
          "desc": "忽略 ls 别名"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ command ls\n(绕过别名，直接执行外部 ls)\n$ command -v git\n/usr/bin/git",
        "explain": "`command` 忽略别名/函数直接执行原命令；`command -v git` 返回 git 的路径，脚本中取命令绝对路径。"
      }
    },
    {
      "name": "builtin",
      "category": "shell",
      "description": "显式调用 shell 内建命令，同名外部命令不会抢先。",
      "keywords": [
        "内建",
        "builtin"
      ],
      "examples": [
        {
          "cmd": "builtin cd",
          "desc": "强制用内建 cd"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ builtin cd /tmp\n$ pwd\n/tmp",
        "explain": "`builtin` 显式调用 shell 内置版命令(忽略同名函数/外部程序)；`cd` 本就是内置，此处直接执行内置切换目录。"
      }
    },
    {
      "name": "let",
      "category": "shell",
      "description": "进行整数算术运算，如 let x=x+1，脚本中做计数很方便。",
      "keywords": [
        "算术",
        "let"
      ],
      "examples": [
        {
          "cmd": "let x=x+1",
          "desc": "整数运算"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ let \"a = 3 + 4\"; echo $a\n7\n$ let \"i++\"; echo $i\n1",
        "explain": "`let` 在 bash 中做算术求值；`a=3+4` 得 7，`i++` 自增到 1。算术推荐用 `(( ))`，let 仍可。"
      }
    },
    {
      "name": "wait",
      "category": "shell",
      "description": "等待后台作业或指定 PID 结束，再继续后续步骤。",
      "keywords": [
        "等待",
        "wait"
      ],
      "examples": [
        {
          "cmd": "wait %1",
          "desc": "等任务完成"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sleep 1 & sleep 2 & wait\n[1]-  Done  sleep 1\n[2]+  Done  sleep 2",
        "explain": "`wait` 等待所有(或指定 PID)后台作业结束；两个 sleep 完成后提示 Done，脚本中用于顺序同步。"
      }
    },
    {
      "name": "ulimit",
      "category": "shell",
      "description": "设置 shell 及子进程的资源限制（如打开文件数 -n、栈大小）。",
      "keywords": [
        "资源限制",
        "ulimit"
      ],
      "examples": [
        {
          "cmd": "ulimit -n 65535",
          "desc": "提高打开文件数上限"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ulimit -a | head -3\ncore file size          (blocks, -c) 0\nmax memory size         (kbytes, -m) unlimited\n$ ulimit -n 4096",
        "explain": "`ulimit -a` 显示资源限制(核心文件 0、内存 unlimited)；`ulimit -n 4096` 把打开文件数上限设为 4096，防句柄耗尽。"
      }
    },
    {
      "name": "test",
      "category": "shell",
      "description": "条件测试（文件/字符串/数值），[ 是其别名，常用于 if 判断。",
      "keywords": [
        "条件测试",
        "test"
      ],
      "examples": [
        {
          "cmd": "test -f f.txt",
          "desc": "判断文件存在"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "test 即 [ ... ]",
      "options": null,
      "sample": {
        "output": "$ test -f a.txt && echo exists\nexists\n$ [ 5 -gt 3 ] && echo yes\nyes",
        "explain": "`test`(或 `[ ]`) 做条件判断：`-f` 文件存在、`-gt` 大于。配合 && 实现 if 逻辑，脚本判断基石。"
      }
    },
    {
      "name": "fc",
      "category": "shell",
      "description": "编辑并重新执行历史命令，快速修正上一条命令的拼写。",
      "keywords": [
        "历史",
        "fc"
      ],
      "examples": [
        {
          "cmd": "fc",
          "desc": "编辑上条命令"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ fc -l -5\n 996  grep x\n 997  cat a\n 998  vim b\n$ fc 998\n(打开编辑器编辑并重执行第 998 条)",
        "explain": "`fc -l -5` 列出最近 5 条历史；`fc 998` 把该命令载入编辑器，修改后重执行，修正长命令很方便。"
      }
    },
    {
      "name": "[",
      "category": "shell",
      "description": "条件测试内建命令（即 test 的别名），[ -d dir ] 判断目录是否存在。",
      "keywords": [
        "条件测试",
        "["
      ],
      "examples": [
        {
          "cmd": "[ -d dir ]",
          "desc": "判断目录存在"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "[ 是 test 的同名内建，注意收尾 ]",
      "options": null,
      "sample": {
        "output": "$ [ -d /tmp ] && echo dir\ndir\n$ [ -z \"$VAR\" ] && echo empty\nempty",
        "explain": "`[` 是 test 的同义内置；`-d` 判目录、`-z` 判空串。上例 /tmp 是目录故输出 dir，VAR 空故输出 empty。"
      }
    },
    {
      "name": "fzf",
      "category": "shell",
      "description": "通用模糊查找器，可与任意管道配合，交互式筛选文件/历史/进程。",
      "keywords": [
        "模糊查找",
        "fzf"
      ],
      "examples": [
        {
          "cmd": "fzf",
          "desc": "交互式查找文件"
        },
        {
          "cmd": "history | fzf",
          "desc": "在历史中查找"
        },
        {
          "cmd": "vim $(fzf)",
          "desc": "选文件用 vim 打开"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装；常配合 **<Tab> 补全与 Ctrl-T 插入文件路径",
      "compare": null,
      "options": [
        {
          "flag": "（管道输入）",
          "default": "无",
          "desc": "从标准输入读取候选项并提供交互式模糊筛选，选中项输出到标准输出。"
        },
        {
          "flag": "-m, --multi",
          "default": "关闭",
          "desc": "允许用 Tab 多选。"
        },
        {
          "flag": "-q <查询>, --query",
          "default": "无",
          "desc": "以预设查询词启动。"
        },
        {
          "flag": "--preview '<命令>'",
          "default": "无",
          "desc": "为当前高亮项显示预览，{} 代表选中内容，如 --preview 'bat {}'。"
        },
        {
          "flag": "--height <值>",
          "default": "全屏",
          "desc": "限制界面高度，如 --height 40%，避免清屏。"
        },
        {
          "flag": "--layout=reverse",
          "default": "默认自下而上",
          "desc": "改为自上而下布局，配合 --height 更自然。"
        },
        {
          "flag": "-e, --exact",
          "default": "模糊匹配",
          "desc": "改用精确匹配模式。"
        },
        {
          "flag": "-f <查询>, --filter",
          "default": "无",
          "desc": "非交互模式，直接输出筛选结果。适用于脚本。"
        },
        {
          "flag": "--bind <键>:<动作>",
          "default": "无",
          "desc": "自定义快捷键绑定。"
        },
        {
          "flag": "（快捷键集成）",
          "default": "无",
          "desc": "安装 shell 集成后，Ctrl+R 搜索历史、Ctrl+T 选择文件、Alt+C 切换目录。"
        }
      ],
      "sample": {
        "output": "$ ls | fzf\n(a.txt  |  b.txt  |  c.txt)  <- 交互模糊选择\n$ cat $(ls | fzf)\n(打开所选文件)",
        "explain": "`fzf` 模糊查找过滤器；管道输入列表后交互高亮选择，回车输出选中项。常与 cd/vi/git 组合提效。"
      }
    },
    {
      "name": "nano",
      "category": "editor",
      "description": "简易易上手的终端编辑器，底部有快捷键提示，新手友好。",
      "keywords": [
        "编辑器",
        "nano"
      ],
      "examples": [
        {
          "cmd": "nano f.txt",
          "desc": "新手友好编辑"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-l, --linenumbers",
          "default": "关闭",
          "desc": "显示行号。"
        },
        {
          "flag": "-m, --mouse",
          "default": "关闭",
          "desc": "启用鼠标支持。"
        },
        {
          "flag": "-w, --nowrap",
          "default": "关闭",
          "desc": "禁用自动换行。编辑配置文件时建议开启，避免长行被拆断写回。"
        },
        {
          "flag": "-B, --backup",
          "default": "关闭",
          "desc": "保存时生成备份文件。"
        },
        {
          "flag": "-i, --autoindent",
          "default": "关闭",
          "desc": "自动缩进新行。"
        },
        {
          "flag": "+<行号>",
          "default": "1",
          "desc": "启动时定位到指定行。"
        },
        {
          "flag": "Ctrl+O / Ctrl+X",
          "default": "无",
          "desc": "保存与退出。底部提示中的 ^ 代表 Ctrl 键。"
        },
        {
          "flag": "Ctrl+W / Ctrl+K / Ctrl+U",
          "default": "无",
          "desc": "搜索、剪切当前行、粘贴。"
        },
        {
          "flag": "（权限提示）",
          "default": "无",
          "desc": "编辑系统文件需 sudo，否则退出时才会发现无法保存。"
        }
      ],
      "sample": {
        "output": "$ nano a.txt\n(底部显示 ^O 写入 ^X 退出；保存提示 [ Wrote 1 line ])",
        "explain": "`nano` 简易终端编辑器；`^O`(Ctrl+O) 保存、`^X` 退出，底部有快捷键提示，新手友好。"
      }
    },
    {
      "name": "emacs",
      "category": "editor",
      "description": "功能极其强大的编辑器/环境，可扩展成邮件、IDE 等。",
      "keywords": [
        "编辑器",
        "emacs"
      ],
      "examples": [
        {
          "cmd": "emacs f.txt",
          "desc": "打开"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ emacs -nw a.txt\n(文本界面；C-x C-s 保存，C-x C-c 退出)",
        "explain": "`emacs -nw` 在终端(无窗口)打开；`C-x C-s` 保存、`C-x C-c` 退出。功能强大的可扩展编辑器。"
      }
    },
    {
      "name": "ed",
      "category": "editor",
      "description": "最古老的行编辑器，脚本与受限环境中仍有用。",
      "keywords": [
        "行编辑器",
        "ed"
      ],
      "examples": [
        {
          "cmd": "ed f.txt",
          "desc": "行编辑"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ed a.txt\na.txt: 3 lines\n1p\nline one\nq",
        "explain": "`ed` 行编辑器(无可视)：启动报 3 行；`1p` 打印第 1 行、`q` 退出。极简环境/脚本补丁用。"
      }
    },
    {
      "name": "man",
      "category": "editor",
      "description": "查看命令的手册页，是了解用法与参数的权威来源。",
      "keywords": [
        "手册",
        "man"
      ],
      "examples": [
        {
          "cmd": "man ls",
          "desc": "看 ls 手册"
        },
        {
          "cmd": "man -k keyword",
          "desc": "按关键词搜手册"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<章节号> <命令>",
          "default": "自动选第一个匹配章节",
          "desc": "指定手册章节。1 用户命令、2 系统调用、3 库函数、5 文件格式、8 管理命令。"
        },
        {
          "flag": "-k <关键词>, --apropos",
          "default": "无",
          "desc": "按关键词搜索手册标题，等价于 apropos。不知道命令名时使用。"
        },
        {
          "flag": "-f <命令>, --whatis",
          "default": "无",
          "desc": "显示命令的一行简介，等价于 whatis。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "依次显示所有章节中的同名手册。"
        },
        {
          "flag": "-w, --where",
          "default": "关闭",
          "desc": "只输出手册文件路径而不显示内容。"
        },
        {
          "flag": "-P <分页器>",
          "default": "less",
          "desc": "指定分页程序。"
        },
        {
          "flag": "（页内操作）",
          "default": "无",
          "desc": "使用 less 的按键：/ 搜索、n 下一处、q 退出、g/G 跳到首尾。"
        },
        {
          "flag": "（中文手册）",
          "default": "无",
          "desc": "多数系统默认英文，可安装 manpages-zh 并设置 LANG 获取中文版，但内容常滞后。"
        }
      ],
      "sample": {
        "output": "$ man ls | head -5\nLS(1)  User Commands  LS(1)\nNAME\n   ls - list directory contents\nSYNOPSIS\n   ls [OPTION]... [FILE]...",
        "explain": "`man` 查看命令手册：显示章节(1=用户命令)、NAME、SYNOPSIS(语法)；`/` 搜索、q 退出，是权威用法来源。"
      }
    },
    {
      "name": "info",
      "category": "editor",
      "description": "GNU 信息文档，比 man 更结构化、带节点跳转。",
      "keywords": [
        "文档",
        "info"
      ],
      "examples": [
        {
          "cmd": "info coreutils",
          "desc": "看 GNU 文档"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ info coreutils 'ls invocation'\n(next: dir, prev: ..., up: Top)  -- 超链接式文档",
        "explain": "`info` GNU 超文本手册(比 man 结构化)：可节点间跳转，适合 GNU 工具(如 coreutils)的详尽文档。"
      }
    },
    {
      "name": "which",
      "category": "editor",
      "description": "显示命令对应的可执行文件路径，确认实际调用的是哪一个。",
      "keywords": [
        "命令路径",
        "which"
      ],
      "examples": [
        {
          "cmd": "which python",
          "desc": "看 python 位置"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<命令>",
          "default": "无",
          "desc": "在 PATH 中查找可执行文件的完整路径。"
        },
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "列出所有匹配项而非仅第一个。可发现同名程序冲突。"
        },
        {
          "flag": "（局限）",
          "default": "无",
          "desc": "不识别 shell 别名、函数与内建命令，结果可能与实际执行的不一致。"
        },
        {
          "flag": "（推荐替代）",
          "default": "无",
          "desc": "bash 中优先使用 type -a 或 command -v，能正确反映实际会执行的对象。"
        },
        {
          "flag": "（退出码）",
          "default": "无",
          "desc": "未找到时返回非零，可用于脚本中检测命令是否存在。"
        }
      ],
      "sample": {
        "output": "$ which git python3\n/usr/bin/git\n/usr/bin/python3",
        "explain": "`which` 显示可执行文件的路径(在 $PATH 中首个匹配)；确认实际调用的程序位置，排查\"同名命令冲突\"。"
      }
    },
    {
      "name": "whereis",
      "category": "editor",
      "description": "定位命令的二进制、源码与手册位置，比 which 更全面。",
      "keywords": [
        "定位",
        "whereis"
      ],
      "examples": [
        {
          "cmd": "whereis ls",
          "desc": "找 ls 相关文件"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ whereis ls\nls: /usr/bin/ls /usr/share/man/man1/ls.1.gz",
        "explain": "`whereis` 同时定位二进制、源码与手册页；ls 的二进制在 /usr/bin、手册在 man1，比 which 信息更全。"
      }
    },
    {
      "name": "whatis",
      "category": "editor",
      "description": "用一行话简短描述命令，来自 whatis 数据库。",
      "keywords": [
        "描述",
        "whatis"
      ],
      "examples": [
        {
          "cmd": "whatis ls",
          "desc": "看简介"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ whatis git\ngit (1)  - the stupid content tracker",
        "explain": "`whatis` 从 whatis 数据库取一行命令简介；git 描述为内容追踪器，快速了解命令用途。需 updatedb 已建库。"
      }
    },
    {
      "name": "locate",
      "category": "editor",
      "description": "基于数据库快速搜索文件路径，比 find 快得多，需 updatedb。",
      "keywords": [
        "文件搜索",
        "locate"
      ],
      "examples": [
        {
          "cmd": "locate nginx.conf",
          "desc": "从数据库搜"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "依赖 updatedb；新文件可能搜不到",
      "compare": null,
      "options": [
        {
          "flag": "<模式>",
          "default": "无",
          "desc": "从预建数据库中快速查找文件名，速度远快于 find。"
        },
        {
          "flag": "-i, --ignore-case",
          "default": "关闭",
          "desc": "忽略大小写。"
        },
        {
          "flag": "-l <数量>, --limit",
          "default": "无限",
          "desc": "限制输出结果数量。"
        },
        {
          "flag": "-c, --count",
          "default": "关闭",
          "desc": "只输出匹配数量。"
        },
        {
          "flag": "-b, --basename",
          "default": "关闭",
          "desc": "只匹配文件名部分而非完整路径。"
        },
        {
          "flag": "-r <正则>, --regexp",
          "default": "关闭",
          "desc": "使用正则匹配。"
        },
        {
          "flag": "-e, --existing",
          "default": "关闭",
          "desc": "只输出当前确实存在的文件，过滤掉数据库中的过期记录。"
        },
        {
          "flag": "（数据库时效）",
          "default": "无",
          "desc": "结果来自定期更新的索引，新建文件可能查不到，需先执行 sudo updatedb。"
        }
      ],
      "sample": {
        "output": "$ locate nginx.conf\n/etc/nginx/nginx.conf\n/usr/share/nginx/nginx.conf",
        "explain": "`locate` 基于预建数据库秒搜文件名；列出所有 nginx.conf 路径。比 find 快但非实时(需 updatedb 更新)。"
      }
    },
    {
      "name": "updatedb",
      "category": "editor",
      "description": "更新 locate 的索引数据库，新建文件后搜不到时先跑它。",
      "keywords": [
        "更新数据库",
        "updatedb"
      ],
      "examples": [
        {
          "cmd": "sudo updatedb",
          "desc": "重建 locate 索引"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ updatedb\n(无输出，更新 /var/lib/mlocate/mlocate.db)\n$ locate newfile\n/home/user/newfile",
        "explain": "`updatedb` 重建 locate 数据库(通常 cron 每日跑)；之后 locate 能搜到新建的 newfile。"
      }
    },
    {
      "name": "date",
      "category": "editor",
      "description": "显示或设置系统日期时间，-s 设置、+格式 自定义输出。",
      "keywords": [
        "日期",
        "date"
      ],
      "examples": [
        {
          "cmd": "date",
          "desc": "当前时间"
        },
        {
          "cmd": "date +%Y%m%d",
          "desc": "格式化"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "+<格式串>",
          "default": "无",
          "desc": "自定义输出格式，如 +%Y-%m-%d %H:%M:%S。含空格时须加引号。"
        },
        {
          "flag": "-d <时间描述>, --date",
          "default": "当前时间",
          "desc": "解析并显示指定时间，支持 \"yesterday\"、\"+3 days\"、\"2026-01-01\" 等。做日期计算时非常方便。"
        },
        {
          "flag": "-s <时间>, --set",
          "default": "无",
          "desc": "设置系统时间，需 root。启用了 NTP 时会被自动校正回去。"
        },
        {
          "flag": "-u, --utc",
          "default": "本地时区",
          "desc": "以 UTC 显示或解析。"
        },
        {
          "flag": "-R, --rfc-email",
          "default": "关闭",
          "desc": "输出 RFC 5322 格式，适用于邮件头。"
        },
        {
          "flag": "--iso-8601[=精度]",
          "default": "关闭",
          "desc": "输出 ISO 8601 格式，精度可为 date/hours/seconds/ns。"
        },
        {
          "flag": "-r <文件>, --reference",
          "default": "无",
          "desc": "显示文件的最后修改时间。"
        },
        {
          "flag": "+%s",
          "default": "无",
          "desc": "输出 Unix 时间戳；反向可用 date -d @1700000000 还原为可读时间。"
        }
      ],
      "sample": {
        "output": "$ date\nMon Aug  4 12:00:00 CST 2026\n$ date +%Y-%m-%d\n2026-08-04\n$ date -d 'next monday' +%F\n2026-08-11",
        "explain": "第1条显示当前日期时间；`+%Y-%m-%d` 自定义格式输出 2026-08-04；`-d` 做日期运算得下周一。脚本中常取时间戳。"
      }
    },
    {
      "name": "cal",
      "category": "editor",
      "description": "显示日历，cal 看当月、cal 2026 看全年。",
      "keywords": [
        "日历",
        "cal"
      ],
      "examples": [
        {
          "cmd": "cal",
          "desc": "当月日历"
        },
        {
          "cmd": "cal 2026",
          "desc": "全年"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ cal\n   August 2026\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n...\n$ cal 2026\n(整年日历)",
        "explain": "`cal` 显示当前月日历(高亮今日所在)；`cal 2026` 显示全年。快速查看日期与星期。"
      }
    },
    {
      "name": "sleep",
      "category": "editor",
      "description": "暂停指定秒数再继续，脚本中延时或限流常用。",
      "keywords": [
        "暂停",
        "sleep"
      ],
      "examples": [
        {
          "cmd": "sleep 5",
          "desc": "等 5 秒"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<数字>",
          "default": "无",
          "desc": "暂停指定秒数。GNU 版本支持小数，如 0.5。"
        },
        {
          "flag": "<数字>s/m/h/d",
          "default": "秒",
          "desc": "带单位的写法：s 秒、m 分、h 小时、d 天。"
        },
        {
          "flag": "（多参数）",
          "default": "无",
          "desc": "可写多个时长，总时长为其累加，如 sleep 1m 30s。"
        },
        {
          "flag": "（信号响应）",
          "default": "无",
          "desc": "会被信号中断并返回非零退出码，脚本中需考虑该情况。"
        },
        {
          "flag": "（轮询建议）",
          "default": "无",
          "desc": "在等待条件的循环中使用时应设置最大重试次数，避免无限阻塞。"
        }
      ],
      "sample": {
        "output": "$ sleep 2 && echo done\n(等待 2 秒)\ndone",
        "explain": "`sleep 2` 暂停 2 秒；常与 && 配合在命令间插入延时，或用于轮询/定时脚本。"
      }
    },
    {
      "name": "yes",
      "category": "editor",
      "description": "持续输出某字符串（默认 y），配合管道自动确认交互式命令。",
      "keywords": [
        "持续输出",
        "yes"
      ],
      "examples": [
        {
          "cmd": "yes | cmd",
          "desc": "自动确认"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ yes | head -3\ny\ny\ny\n$ yes n | rm -ri dir",
        "explain": "`yes` 持续输出 y(或指定串)；管道给需要确认的交互命令(如 rm -i)自动应答，批量操作省事。"
      }
    },
    {
      "name": "clear",
      "category": "editor",
      "description": "清屏，把光标移到顶端，终端整洁些。",
      "keywords": [
        "清屏",
        "clear"
      ],
      "examples": [
        {
          "cmd": "clear",
          "desc": "清屏"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "清空屏幕并把光标移到左上角。"
        },
        {
          "flag": "-x",
          "default": "关闭",
          "desc": "只清屏而不清除滚动回看缓冲区。"
        },
        {
          "flag": "（与 Ctrl+L）",
          "default": "无",
          "desc": "效果相同，Ctrl+L 是 readline 快捷键，无需回车即可执行。"
        },
        {
          "flag": "（内容仍可回看）",
          "default": "无",
          "desc": "默认只是滚屏，向上滚动仍能看到历史输出；彻底清除需用 reset 或 printf '\\033c'。"
        }
      ],
      "sample": {
        "output": "$ clear\n(终端屏幕清屏，回到顶部)",
        "explain": "`clear`(或 Ctrl+L) 清屏，隐藏历史输出，聚焦当前命令。"
      }
    },
    {
      "name": "script",
      "category": "editor",
      "description": "记录整个终端会话到文件，做操作回放或教学留档。",
      "keywords": [
        "记录会话",
        "script"
      ],
      "examples": [
        {
          "cmd": "script session.log",
          "desc": "记录全部输出"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ script session.log\nScript started, file is session.log\n$ ls\n$ exit\nScript done, file is session.log",
        "explain": "`script` 把终端会话全程录制到文件；`exit` 结束后 session.log 含所有输入输出，便于复盘/教学。"
      }
    },
    {
      "name": "wall",
      "category": "editor",
      "description": "向系统所有登录终端广播消息，通知维护等。",
      "keywords": [
        "广播",
        "wall"
      ],
      "examples": [
        {
          "cmd": "wall '维护通知'",
          "desc": "群发消息"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ wall '系统将于 10 分钟后维护'\nBroadcast message from user (pts/0):\n系统将于 10 分钟后维护",
        "explain": "`wall` 向所有登录用户终端广播消息；运维通知全体在线用户时用(需权限)。"
      }
    },
    {
      "name": "mesg",
      "category": "editor",
      "description": "控制是否接收其他用户发来的 wall 消息。",
      "keywords": [
        "消息",
        "mesg"
      ],
      "examples": [
        {
          "cmd": "mesg n",
          "desc": "拒收 wall 消息"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mesg y\n$ mesg\nis y\n$ mesg n\n(拒绝他人 write/wall 消息)",
        "explain": "`mesg y/n` 控制是否接收他人发来的终端消息(write/talk)；`mesg` 显示当前状态。隐私/演示时设为 n。"
      }
    },
    {
      "name": "tldr",
      "category": "editor",
      "description": "简化版 man，直接给出命令的常见示例，快速上手首选。",
      "keywords": [
        "tldr",
        "示例",
        "帮助"
      ],
      "examples": [
        {
          "cmd": "tldr tar",
          "desc": "查看 tar 常用示例"
        },
        {
          "cmd": "tldr -p linux grep",
          "desc": "指定平台"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先安装；覆盖命令的最常用场景，比 man 更直给",
      "compare": null,
      "options": [
        {
          "flag": "<命令>",
          "default": "无",
          "desc": "显示该命令的常用示例，比 man 精简得多。"
        },
        {
          "flag": "-u, --update",
          "default": "无",
          "desc": "更新本地缓存的示例库。"
        },
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "列出当前平台所有可用的命令页面。"
        },
        {
          "flag": "-p <平台>, --platform",
          "default": "自动识别",
          "desc": "查看指定平台的版本，如 linux、osx、windows。"
        },
        {
          "flag": "-L <语言>, --language",
          "default": "en",
          "desc": "指定语言，部分命令有中文页面。"
        },
        {
          "flag": "（定位）",
          "default": "无",
          "desc": "只给常用示例，不含完整选项说明，需要精确语义仍应查 man。"
        }
      ],
      "sample": {
        "output": "$ tldr tar\ntar\nCompress/extract archives.\n- Create: tar -cf file.tar path\n- Extract: tar -xf file.tar",
        "explain": "`tldr` 提供命令的实用示例(社区维护，比 man 精简)；tar 直接给出常见压缩/解压模板，速查首选。"
      }
    },
    {
      "name": "cheat",
      "category": "editor",
      "description": "查看社区维护的命令速查表，场景化示例很实用。",
      "keywords": [
        "cheat",
        "速查"
      ],
      "examples": [
        {
          "cmd": "cheat ssh",
          "desc": "查看 ssh 速查"
        },
        {
          "cmd": "cheat -l",
          "desc": "列出可用速查表"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "需先安装",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ cheat git\n# To stage all changes:\ngit add .\n# To commit:\ngit commit -m 'msg'",
        "explain": "`cheat` 显示命令速查备忘(社区 cheat-sheet)；git 列出常用片段，比 man 直达要点。"
      }
    },
    {
      "name": "reset",
      "category": "editor",
      "description": "重置终端状态，乱码或卡死后恢复正常显示。",
      "keywords": [
        "终端重置",
        "reset"
      ],
      "examples": [
        {
          "cmd": "reset",
          "desc": "恢复终端到默认状态"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "比 clear 更彻底；终端显示异常（如二进制文件刷屏）时可用",
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "完全重新初始化终端，恢复默认设置并清空屏幕与缓冲区。"
        },
        {
          "flag": "（典型场景）",
          "default": "无",
          "desc": "cat 了二进制文件导致乱码、终端不回显输入、颜色错乱时使用。"
        },
        {
          "flag": "（输入不可见时）",
          "default": "无",
          "desc": "即使看不到自己输入的字符，直接盲打 reset 并回车通常也能恢复。"
        },
        {
          "flag": "（相比 clear）",
          "default": "无",
          "desc": "clear 只是滚屏，reset 会重置终端全部状态，代价是耗时略长。"
        },
        {
          "flag": "（替代方案）",
          "default": "无",
          "desc": "stty sane 可修复输入设置而不清屏。"
        }
      ],
      "sample": {
        "output": "$ reset\n(重置终端到默认状态，清除乱码/异常显示)",
        "explain": "`reset` 恢复终端设置(当输出二进制导致乱码、光标错位时)；比 clear 更彻底地重置。"
      }
    },
    {
      "name": "vim",
      "category": "vim",
      "description": "启动 Vim 文本编辑器并打开文件；功能强大的模态编辑器，适合长期编程。",
      "keywords": [
        "启动",
        "打开文件",
        "编辑器",
        "vim"
      ],
      "examples": [
        {
          "cmd": "vim file.txt",
          "desc": "打开文件"
        },
        {
          "cmd": "vim +42 file.txt",
          "desc": "打开并跳到第 42 行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": ":q! 强制退出不保存会丢失改动；只读可用 vim -R",
      "compare": "vim 是 vi 的增强版；nano 更简单但功能弱",
      "options": null,
      "sample": {
        "output": "$ vim report.txt\n~                             (空行以 ~ 表示)\n-- INSERT --                 (按 i 进入插入模式时显示)\n'report.txt' 3L, 42C          (状态行: 3 行 42 字符)",
        "explain": "启动 Vim 编辑 report.txt；行首 ~ 代表文件末尾之后的空行。`-- INSERT --` 提示处于插入模式；底部状态行列出行数与字符数。`:q!` 不保存退出，`:wq` 保存退出。"
      }
    },
    {
      "name": "vim -d",
      "category": "vim",
      "description": "以差异比对模式（vimdiff）打开多个文件，并排高亮不同之处。",
      "keywords": [
        "差异",
        "比对",
        "vimdiff",
        "vim -d"
      ],
      "examples": [
        {
          "cmd": "vim -d a.txt b.txt",
          "desc": "并排对比两个文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ vim -d a.txt b.txt\na.txt        | b.txt\nline one     | line ONE\nline two     | line two\n[diff] 高亮两文件不同处",
        "explain": "以 diff 模式同时打开两文件；Vim 并排显示并高亮差异(如 line one vs line ONE)，`do` 取对方、`dp` 推到对方，方便合并。"
      }
    },
    {
      "name": "vim -R",
      "category": "vim",
      "description": "以只读模式打开文件，避免误修改，仅用于查看。",
      "keywords": [
        "只读",
        "view",
        "vim -R"
      ],
      "examples": [
        {
          "cmd": "vim -R file.txt",
          "desc": "只读防误写"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ vim -R config.cfg\n-- VISUAL --  (只读, 写入会被拒绝)\n\"config.cfg\" [readonly] 12L",
        "explain": "以只读模式打开 config.cfg，状态行标 [readonly]；尝试写入会报 \"readonly\" 错误，防止误改重要配置。"
      }
    },
    {
      "name": "view",
      "category": "vim",
      "description": "只读模式查看文件，等同 vim -R，打开即不可写。",
      "keywords": [
        "只读",
        "view"
      ],
      "examples": [
        {
          "cmd": "view file.txt",
          "desc": "只读查看"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ view script.sh\n(只读 Vim; :w 提示 E45: 'readonly' option is set)",
        "explain": "`view` 等同 `vim -R`，只读编辑；`:w` 会被拒绝，适合查看不希望被改的文件。"
      }
    },
    {
      "name": "vim -r",
      "category": "vim",
      "description": "恢复因崩溃遗留的交换文件（.swp），找回未保存的内容。",
      "keywords": [
        "恢复",
        "交换文件",
        "vim -r"
      ],
      "examples": [
        {
          "cmd": "vim -r .file.txt.swp",
          "desc": "崩溃后恢复未保存内容"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ vim -r\nSwap files found:\n   .report.txt.swp  owned by: user\n$ vim -r report.txt\n(从交换文件恢复未保存内容)",
        "explain": "崩溃/异常退出后可恢复：`vim -r` 列出可用交换文件(swp)，`vim -r report.txt` 从中恢复未保存的编辑。"
      }
    },
    {
      "name": "i",
      "category": "vim",
      "description": "进入插入模式，在光标前开始输入文本。",
      "keywords": [
        "插入",
        "输入",
        "i"
      ],
      "examples": [
        {
          "cmd": "i",
          "desc": "在光标前开始输入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "插入前: Helo world\n按 i 在光标前插入 -> 输入 'l' -> Hello world",
        "explain": "普通模式下 `i` 进入插入模式，在**光标前**插入字符；常用于补字。左下角显示 `-- INSERT --`。"
      }
    },
    {
      "name": "a",
      "category": "vim",
      "description": "进入插入模式，在光标后开始输入文本。",
      "keywords": [
        "插入后",
        "a"
      ],
      "examples": [
        {
          "cmd": "a",
          "desc": "在光标后开始输入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "插入前: Hello orld\n按 a 在光标后追加 -> 输入 'w' -> Hello world",
        "explain": "`a` 在**光标后**追加插入(append)；与 i 相反，适合在字符右侧补字。"
      }
    },
    {
      "name": "I",
      "category": "vim",
      "description": "在行首（首个非空白字符）前进入插入模式。",
      "keywords": [
        "行首插入",
        "I"
      ],
      "examples": [
        {
          "cmd": "I",
          "desc": "跳到行首非空白处插入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行:  world\n按 I 跳到行首插入 -> 输入 'Hello' -> Hello world",
        "explain": "`I`(大写 i) 跳到当前行**第一个非空白字符前**并插入；快速在行首补内容。"
      }
    },
    {
      "name": "A",
      "category": "vim",
      "description": "在行尾进入插入模式，快速在行末追加内容。",
      "keywords": [
        "行尾插入",
        "A"
      ],
      "examples": [
        {
          "cmd": "A",
          "desc": "跳到行尾插入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: Hello \n按 A 跳到行尾插入 -> 输入 'world' -> Hello world",
        "explain": "`A` 跳到当前行**行尾**并插入(append)；在一行末尾连续补充时极方便。"
      }
    },
    {
      "name": "o",
      "category": "vim",
      "description": "在光标下方新建一行并进入插入模式。",
      "keywords": [
        "新行",
        "下方",
        "o"
      ],
      "examples": [
        {
          "cmd": "o",
          "desc": "下方开新行输入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "当前行: line one\n按 o -> 在其下方新建一行并插入 -> 输入 line two",
        "explain": "`o` 在**当前行下方**新建空行并进入插入模式；写列表/日志时常用。"
      }
    },
    {
      "name": "O",
      "category": "vim",
      "description": "在光标上方新建一行并进入插入模式。",
      "keywords": [
        "新行",
        "上方",
        "O"
      ],
      "examples": [
        {
          "cmd": "O",
          "desc": "上方开新行输入"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "当前行: line two\n按 O -> 在其上方新建一行并插入 -> 输入 line one",
        "explain": "`O` 在**当前行上方**新建空行并插入；与 o 相反。"
      }
    },
    {
      "name": "s",
      "category": "vim",
      "description": "删除光标下字符并进入插入模式，替换单个字符。",
      "keywords": [
        "替换字符",
        "s"
      ],
      "examples": [
        {
          "cmd": "s",
          "desc": "删字符并插入"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "字符: worXd\n光标在 X -> 按 s -> 删除 X 并插入 -> 输入 'l' -> word",
        "explain": "`s` 删除光标下**一个字符**并进入插入模式(substitute)；适合改单个错字。"
      }
    },
    {
      "name": "S",
      "category": "vim",
      "description": "删除整行并进入插入模式，重写整行内容。",
      "keywords": [
        "替换行",
        "S"
      ],
      "examples": [
        {
          "cmd": "S",
          "desc": "删整行并插入"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "S 等同 cc（修改整行）",
      "options": null,
      "sample": {
        "output": "行: old content\n按 S -> 删除整行并插入 -> 输入 new line",
        "explain": "`S`(等同 `cc`) 删除**整行**并进入插入模式，在原位置重写字行。"
      }
    },
    {
      "name": "cc",
      "category": "vim",
      "description": "修改（change）整行：删除整行并进入插入模式。",
      "keywords": [
        "修改行",
        "cc"
      ],
      "examples": [
        {
          "cmd": "cc",
          "desc": "清空当前行并插入"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "cc 等同 S；与 dd 区别：cc 保留行、进入插入",
      "options": null,
      "sample": {
        "output": "行: foo bar baz\n按 cc -> 整行清空并插入 -> 输入 new",
        "explain": "`cc` 删除当前行并进入插入模式(change line)；与 S 完全相同。"
      }
    },
    {
      "name": "R",
      "category": "vim",
      "description": "进入替换模式，逐字符覆盖原有文本而非插入。",
      "keywords": [
        "替换模式",
        "R"
      ],
      "examples": [
        {
          "cmd": "R",
          "desc": "覆盖输入而非插入"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "R 与 r 区别：R 持续替换，r 只换一个字符",
      "options": null,
      "sample": {
        "output": "文本: print 'old'\n按 R 进入替换模式 -> 覆盖输入 new -> print 'new'",
        "explain": "`R` 进入**替换模式**，输入的字符逐个覆盖原文本(而非插入)；改写一段内容时好用。"
      }
    },
    {
      "name": "Esc",
      "category": "vim",
      "description": "从任意模式返回普通模式，是 Vim 操作的「 home 键」。",
      "keywords": [
        "退出插入",
        "普通模式",
        "Esc"
      ],
      "examples": [
        {
          "cmd": "Esc",
          "desc": "从任意模式回到普通模式"
        },
        {
          "cmd": "Ctrl+[",
          "desc": "Esc 的等价键"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "插入模式下忘了按 Esc 会直接把字母写进文件",
      "compare": null,
      "options": null,
      "sample": {
        "output": "-- INSERT --  (插入中)\n按 Esc -> 回到普通模式 (-- INSERT -- 消失)",
        "explain": "`Esc`(或 Ctrl+[) 从插入/替换/可视模式退回**普通模式**；几乎所有操作前先按 Esc 确保回到普通模式。"
      }
    },
    {
      "name": "v",
      "category": "vim",
      "description": "进入字符可视化模式，按字符选区。",
      "keywords": [
        "选择",
        "可视化",
        "v"
      ],
      "examples": [
        {
          "cmd": "v",
          "desc": "逐字符选择"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 v 进入字符可视 -> 移动光标 -> 选中 'hello' 高亮",
        "explain": "`v` 进入**字符可视模式**，移动光标逐字符选择；可对选区做删除/复制/替换(y/d/c)。"
      }
    },
    {
      "name": "V",
      "category": "vim",
      "description": "进入行可视化模式，整行整行地选区。",
      "keywords": [
        "行选择",
        "V"
      ],
      "examples": [
        {
          "cmd": "V",
          "desc": "整行选择"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 V 进入行可视 -> 选中整行 (高亮整行)",
        "explain": "`V`(大写) 进入**行可视模式**，整行整行选择；批量操作行(缩进/删除)方便。"
      }
    },
    {
      "name": "Ctrl+v",
      "category": "vim",
      "description": "进入块（列）可视化模式，可纵向选中矩形区域批量编辑。",
      "keywords": [
        "列选择",
        "块选择",
        "Ctrl+v"
      ],
      "examples": [
        {
          "cmd": "Ctrl+v",
          "desc": "按列选择矩形区域"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "Windows 下 Ctrl+v 可能被剪贴板占用，可用 Ctrl+q 代替",
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 Ctrl+v 进入块可视 -> 选矩形区域(如多行首列)高亮",
        "explain": "`Ctrl+v` 进入**块(列)可视模式**，按矩形区域选择；在多行同列插入/删除(如注释)时神器。"
      }
    },
    {
      "name": "h",
      "category": "vim",
      "description": "光标左移一格（普通模式）。",
      "keywords": [
        "左移",
        "h"
      ],
      "examples": [
        {
          "cmd": "h",
          "desc": "←"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标: H[e]llo -> 按 h -> [H]ello",
        "explain": "`h` 光标**左**移一格；方向键左等价。普通模式基础移动之一。"
      }
    },
    {
      "name": "j",
      "category": "vim",
      "description": "光标下移一行（普通模式）。",
      "keywords": [
        "下移",
        "j"
      ],
      "examples": [
        {
          "cmd": "j",
          "desc": "↓"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在第 1 行 -> 按 j -> 下移一行到第 2 行",
        "explain": "`j` 光标**下**移一行；方向键下等价。"
      }
    },
    {
      "name": "k",
      "category": "vim",
      "description": "光标上移一行（普通模式）。",
      "keywords": [
        "上移",
        "k"
      ],
      "examples": [
        {
          "cmd": "k",
          "desc": "↑"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在第 3 行 -> 按 k -> 上移一行到第 2 行",
        "explain": "`k` 光标**上**移一行；方向键上等价。"
      }
    },
    {
      "name": "l",
      "category": "vim",
      "description": "光标右移一格（普通模式）。",
      "keywords": [
        "右移",
        "l"
      ],
      "examples": [
        {
          "cmd": "l",
          "desc": "→"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标: [H]ello -> 按 l -> H[e]llo",
        "explain": "`l` 光标**右**移一格；方向键右等价。"
      }
    },
    {
      "name": "w（移动）",
      "category": "vim",
      "description": "跳到下一个词首，快速在单词间前进。",
      "keywords": [
        "词首",
        "移动",
        "w"
      ],
      "examples": [
        {
          "cmd": "w",
          "desc": "下一词开头"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "w 按标点分词；W 按空格分 WORD",
      "options": null,
      "sample": {
        "output": "文本: foo bar baz\n光标在 f -> 按 w -> 跳到 b(ar) 的词首",
        "explain": "`w` 光标向前跳到**下一个词首**(word forward)；快速在词间移动。"
      }
    },
    {
      "name": "W",
      "category": "vim",
      "description": "跳到下一个 WORD 首（以空白分隔，忽略标点）。",
      "keywords": [
        "WORD",
        "W"
      ],
      "examples": [
        {
          "cmd": "W",
          "desc": "跳过标点，按空格跳"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: a.b.c  foo\n按 W -> 按空格分隔跳到 foo 词首(忽略标点)",
        "explain": "`W` 按**空格分隔的\"大词\"**向前跳(忽略标点)，与 w 的区别在于词的界定方式。"
      }
    },
    {
      "name": "b",
      "category": "vim",
      "description": "跳到上一个词首（普通模式），在单词间向前移动光标。",
      "keywords": [
        "上一词",
        "b"
      ],
      "examples": [
        {
          "cmd": "b",
          "desc": "回退一词"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: foo bar baz\n光标在 baz 的 z -> 按 b -> 跳回 b(ar) 词首",
        "explain": "`b` 光标向后跳到**上一个词首**(back word)；与 w 相反。"
      }
    },
    {
      "name": "e",
      "category": "vim",
      "description": "跳到当前/下一个词尾。",
      "keywords": [
        "词尾",
        "e"
      ],
      "examples": [
        {
          "cmd": "e",
          "desc": "到词末尾"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: foo bar\n光标在 f -> 按 e -> 跳到 foo 的词尾 o",
        "explain": "`e` 光标跳到**当前/下一个词的末尾**(end)；便于在词尾插入。"
      }
    },
    {
      "name": "0",
      "category": "vim",
      "description": "跳到行首（含前导空白）。",
      "keywords": [
        "行首",
        "0"
      ],
      "examples": [
        {
          "cmd": "0",
          "desc": "绝对行首"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "0 到行首；^ 到首个非空白字符",
      "options": null,
      "sample": {
        "output": "行:   hello (前有两个空格)\n光标在 o -> 按 0 -> 跳到行首第一个字符(含前导空格)",
        "explain": "`0`(数字零) 跳到**行首第一个字符**(含前导空白)。"
      }
    },
    {
      "name": "^",
      "category": "vim",
      "description": "跳到行首第一个非空白字符。",
      "keywords": [
        "软行首",
        "^"
      ],
      "examples": [
        {
          "cmd": "^",
          "desc": "跳过行首缩进"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行:   hello\n光标在 o -> 按 ^ -> 跳到第一个非空白字符 h",
        "explain": "`^` 跳到行内**第一个非空白字符**(首个有效内容)；与 0 区别在跳过缩进。"
      }
    },
    {
      "name": "$",
      "category": "vim",
      "description": "跳到当前行行尾（普通模式），配合 d$ 可删除到行尾。",
      "keywords": [
        "行尾",
        "$"
      ],
      "examples": [
        {
          "cmd": "$",
          "desc": "到行末"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: hello world\n光标在 h -> 按 $ -> 跳到行尾 d",
        "explain": "`$` 跳到**行尾最后一个字符**；`d$` 可删除到行尾。"
      }
    },
    {
      "name": "g_",
      "category": "vim",
      "description": "跳到行尾最后一个非空白字符。",
      "keywords": [
        "行尾非空白",
        "g_"
      ],
      "examples": [
        {
          "cmd": "g_",
          "desc": "到最末非空字符"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: hello world   \n光标任意 -> 按 g_ -> 跳到行尾最后一个非空白字符(d 之前)",
        "explain": "`g_` 跳到行内**最后一个非空白字符**(忽略尾部空格)，与 $ 区别在于不过尾随空格。"
      }
    },
    {
      "name": "gg",
      "category": "vim",
      "description": "跳到文件首行（普通模式）；5gg 可一步跳到第 5 行。",
      "keywords": [
        "文件首",
        "gg"
      ],
      "examples": [
        {
          "cmd": "gg",
          "desc": "到第一行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在第 20 行 -> 按 gg -> 跳到文件第 1 行",
        "explain": "`gg` 跳到**文件首行**；`5gg` 或 `:5` 跳到第 5 行。"
      }
    },
    {
      "name": "G",
      "category": "vim",
      "description": "跳到文件尾行，5G 跳到第 5 行。",
      "keywords": [
        "文件尾",
        "G"
      ],
      "examples": [
        {
          "cmd": "G",
          "desc": "到最后一行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在第 1 行 -> 按 G -> 跳到文件最后一行",
        "explain": "`G` 跳到**文件末行**；`5G` 跳到第 5 行(与 :5 等同)。"
      }
    },
    {
      "name": ":n",
      "category": "vim",
      "description": "跳到第 n 行，如 :42 定位到第 42 行。",
      "keywords": [
        "跳行",
        "行号",
        ":n"
      ],
      "examples": [
        {
          "cmd": ":42",
          "desc": "跳到第 42 行"
        },
        {
          "cmd": "42G",
          "desc": "等价写法"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :n 回车\n(跳转到下一个文件, 多文件编辑时)",
        "explain": "`:n` 在打开多个文件时跳到**下一个文件**；`:N`/`:prev` 跳上一个，`args` 查看列表。"
      }
    },
    {
      "name": "H",
      "category": "vim",
      "description": "光标移到当前屏幕顶部行。",
      "keywords": [
        "屏幕顶",
        "H"
      ],
      "examples": [
        {
          "cmd": "H",
          "desc": "到屏幕第一行"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "当前在中间 -> 按 H -> 光标跳到屏幕顶部第一行",
        "explain": "`H`(High) 跳到**当前屏幕可见区顶部**那一行(非文件首)。"
      }
    },
    {
      "name": "M",
      "category": "vim",
      "description": "光标移到当前屏幕中部行。",
      "keywords": [
        "屏幕中",
        "M"
      ],
      "examples": [
        {
          "cmd": "M",
          "desc": "到屏幕中间行"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 M -> 光标跳到屏幕可见区中间行",
        "explain": "`M`(Middle) 跳到屏幕可见区**中间**那一行。"
      }
    },
    {
      "name": "L",
      "category": "vim",
      "description": "光标移到当前屏幕底部行。",
      "keywords": [
        "屏幕底",
        "L"
      ],
      "examples": [
        {
          "cmd": "L",
          "desc": "到屏幕最后行"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 L -> 光标跳到屏幕可见区底部行",
        "explain": "`L`(Low) 跳到屏幕可见区**底部**那一行。"
      }
    },
    {
      "name": "%",
      "category": "vim",
      "description": "在匹配的括号或引号间跳转，核对配对很方便。",
      "keywords": [
        "匹配括号",
        "%"
      ],
      "examples": [
        {
          "cmd": "%",
          "desc": "在 () [] {} 间跳转"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: if (a == b) { ... }\n光标在 ( -> 按 % -> 跳到匹配的 )",
        "explain": "`%` 在括号/花括号/方括号间**跳转配对**；检查括号是否匹配时极有用。"
      }
    },
    {
      "name": "{",
      "category": "vim",
      "description": "跳到上一段落（空行分隔）。",
      "keywords": [
        "上一段",
        "{"
      ],
      "examples": [
        {
          "cmd": "{",
          "desc": "到前一段开头"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在段落中 -> 按 { -> 跳到上一段落开头(空行分隔)",
        "explain": "`{` 向后跳到**段落起始**(以空行划分)；`}` 跳到段落结尾。"
      }
    },
    {
      "name": "}",
      "category": "vim",
      "description": "跳到下一个段落（空行分隔），在段落块间快速移动。",
      "keywords": [
        "下一段",
        "}"
      ],
      "examples": [
        {
          "cmd": "}",
          "desc": "到后一段开头"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在段落中 -> 按 } -> 跳到下一段落结尾",
        "explain": "`}` 向前跳到**段落结尾**(空行分隔)；与 { 相对。"
      }
    },
    {
      "name": "(",
      "category": "vim",
      "description": "跳到上一句（以标点划分），在句子间移动光标。",
      "keywords": [
        "上一句",
        "("
      ],
      "examples": [
        {
          "cmd": "(",
          "desc": "到前一句"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在句中 -> 按 ( -> 跳到上一句开头",
        "explain": "`(` 跳到**上一句**(按标点划分)；`)` 跳下一句，句子级移动。"
      }
    },
    {
      "name": ")",
      "category": "vim",
      "description": "跳到下一句（以标点划分），在句子间移动光标。",
      "keywords": [
        "下一句",
        ")"
      ],
      "examples": [
        {
          "cmd": ")",
          "desc": "到后一句"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在句中 -> 按 ) -> 跳到下一句开头",
        "explain": "`)` 跳到**下一句**开头；与 ( 相对。"
      }
    },
    {
      "name": "Ctrl+f",
      "category": "vim",
      "description": "向下翻一页（普通模式），浏览长文档时常用。",
      "keywords": [
        "下页",
        "Ctrl+f"
      ],
      "examples": [
        {
          "cmd": "Ctrl+f",
          "desc": "整页下翻"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "当前在第 1 屏 -> 按 Ctrl+f -> 向下翻一整页",
        "explain": "`Ctrl+f` 向下翻**一页**(forward)；浏览长文档。"
      }
    },
    {
      "name": "Ctrl+b",
      "category": "vim",
      "description": "向上翻一页（普通模式），与 Ctrl+f 方向相反。",
      "keywords": [
        "上页",
        "Ctrl+b"
      ],
      "examples": [
        {
          "cmd": "Ctrl+b",
          "desc": "整页上翻"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 Ctrl+b -> 向上翻一整页(back)",
        "explain": "`Ctrl+b` 向上翻**一页**；与 Ctrl+f 方向相反。"
      }
    },
    {
      "name": "Ctrl+d",
      "category": "vim",
      "description": "向下翻半页（普通模式），小幅滚动视图。",
      "keywords": [
        "下半页",
        "Ctrl+d"
      ],
      "examples": [
        {
          "cmd": "Ctrl+d",
          "desc": "半页下翻"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 Ctrl+d -> 向下翻半页(down)",
        "explain": "`Ctrl+d` 向下翻**半页**；幅度小于 Ctrl+f。"
      }
    },
    {
      "name": "Ctrl+u",
      "category": "vim",
      "description": "向上翻半页（普通模式），与 Ctrl+d 方向相反。",
      "keywords": [
        "上半页",
        "Ctrl+u"
      ],
      "examples": [
        {
          "cmd": "Ctrl+u",
          "desc": "半页上翻"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 Ctrl+u -> 向上翻半页(up)",
        "explain": "`Ctrl+u` 向上翻**半页**；与 Ctrl+d 相对。"
      }
    },
    {
      "name": "zz",
      "category": "vim",
      "description": "把当前行滚到屏幕中央，便于聚焦。",
      "keywords": [
        "居中",
        "zz"
      ],
      "examples": [
        {
          "cmd": "zz",
          "desc": "当前行居中"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在某行 -> 按 zz -> 把该行滚到屏幕中央",
        "explain": "`zz` 把**当前行滚动到屏幕中间**(不移动光标)；便于聚焦当前行。"
      }
    },
    {
      "name": "fx",
      "category": "vim",
      "description": "在当前行向后查找字符 x，fa 跳到下一个 a。",
      "keywords": [
        "查找字符",
        "fx"
      ],
      "examples": [
        {
          "cmd": "fa",
          "desc": "跳到本行下一个 a"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: function x\n光标在 f -> 按 fx -> 跳到本行下一个 x",
        "explain": "`fx` 跳到**本行下一个字符 x**(find)；`Fx` 反向找，`tx` 跳到 x 前，`;` 重复、`;` 反向。"
      }
    },
    {
      "name": "Fx",
      "category": "vim",
      "description": "在当前行向前查找字符 x。",
      "keywords": [
        "向前查找字符",
        "Fx"
      ],
      "examples": [
        {
          "cmd": "Fa",
          "desc": "跳到本行上一个 a"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: max value\n光标在 e -> 按 Fv -> 跳到本行前一个 v",
        "explain": "`Fx` 反向查找本行**前一个字符 x**；与 fx 方向相反。"
      }
    },
    {
      "name": "tx",
      "category": "vim",
      "description": "跳到字符 x 之前（向后），便于在 x 前插入。",
      "keywords": [
        "前移字符",
        "tx"
      ],
      "examples": [
        {
          "cmd": "ta",
          "desc": "停在 a 前"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: text x y\n光标在 t -> 按 tx -> 跳到 x 的前一个字符",
        "explain": "`tx` 跳到本行下一个 x 的**前一个字符**(till)；配合删除/插入在 x 前操作。"
      }
    },
    {
      "name": ";",
      "category": "vim",
      "description": "重复上一次的字符查找。",
      "keywords": [
        "重复查找",
        ";"
      ],
      "examples": [
        {
          "cmd": ";",
          "desc": "同向再找一次"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 ; -> 重复上一次 f/F/t/T 查找(同方向)",
        "explain": "`;` 重复最近一次 `f/F/t/T` 查找(同向)；`,` 以反方向重复。连续定位同字符时用。"
      }
    },
    {
      "name": "*",
      "category": "vim",
      "description": "向下搜索光标下的单词。",
      "keywords": [
        "搜索单词",
        "*"
      ],
      "examples": [
        {
          "cmd": "*",
          "desc": "查找当前词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在 word 上 -> 按 * -> 向下搜索该词并跳到下一处",
        "explain": "`*` 以光标下**完整单词**为模式向下搜索并跳转；`#` 向上。`n/N` 继续。"
      }
    },
    {
      "name": "#",
      "category": "vim",
      "description": "向上搜索光标下的单词。",
      "keywords": [
        "向上搜索单词",
        "#"
      ],
      "examples": [
        {
          "cmd": "#",
          "desc": "向上找当前词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在 word 上 -> 按 # -> 向上搜索该词并跳到上一处",
        "explain": "`#` 以光标下单词为模式**向上**搜索；与 * 相反。"
      }
    },
    {
      "name": "Ctrl+o",
      "category": "vim",
      "description": "在跳转历史中后退一步。",
      "keywords": [
        "跳转后退",
        "Ctrl+o"
      ],
      "examples": [
        {
          "cmd": "Ctrl+o",
          "desc": "回到上次光标位置"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "跳转历史中 -> 按 Ctrl+o -> 跳回上一次光标位置(old)",
        "explain": "`Ctrl+o` 在**跳转列表**中后退一步(回到上次光标位置)；`Ctrl+i` 前进。"
      }
    },
    {
      "name": "Ctrl+i",
      "category": "vim",
      "description": "在跳转历史中前进一步。",
      "keywords": [
        "跳转前进",
        "Ctrl+i"
      ],
      "examples": [
        {
          "cmd": "Ctrl+i",
          "desc": "前进到下一处光标位置"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 Ctrl+i -> 前进到跳转列表的下一位置",
        "explain": "`Ctrl+i`(等同 Tab) 在跳转列表中**前进**；与 Ctrl+o 相对。"
      }
    },
    {
      "name": "``",
      "category": "vim",
      "description": "跳回上一次光标所在位置。",
      "keywords": [
        "上次位置",
        "``"
      ],
      "examples": [
        {
          "cmd": "``",
          "desc": "回到上一次停留处"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "在 A 处按 `` -> 跳回跳转前的位置(同 Cursor 标记)",
        "explain": "双反引号 `` 跳回**上一次光标所在位置**(与 Ctrl+o 不同，仅记最近一处)；`''` 跳回上次所在行的行首。"
      }
    },
    {
      "name": "x",
      "category": "vim",
      "description": "删除光标下的字符，存入无名寄存器。",
      "keywords": [
        "删除字符",
        "x"
      ],
      "examples": [
        {
          "cmd": "x",
          "desc": "删一个字符"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "字符: wor[d]\n光标在 d -> 按 x -> 删除 d -> wor",
        "explain": "`x` 删除**光标下字符**(剪切)；`3x` 删 3 个。等同 `dl`。"
      }
    },
    {
      "name": "X",
      "category": "vim",
      "description": "删除光标前的字符（普通模式），等同退格删除。",
      "keywords": [
        "删除前字符",
        "X"
      ],
      "examples": [
        {
          "cmd": "X",
          "desc": "删光标左边字符"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "字符: [w]ord\n光标在 w -> 按 X -> 删除 w -> ord",
        "explain": "`X` 删除**光标前一个字符**(退格删除)；与 x 方向相反。"
      }
    },
    {
      "name": "dw",
      "category": "vim",
      "description": "删除一个单词（从光标到词尾）。",
      "keywords": [
        "删除词",
        "dw"
      ],
      "examples": [
        {
          "cmd": "dw",
          "desc": "删到词尾"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: remove this word\n光标在 r -> 按 dw -> 删除单词 remove -> this word",
        "explain": "`dw` 删除**从光标到下一个词首**(delete word)；光标在词首即删整词。"
      }
    },
    {
      "name": "dd（删行）",
      "category": "vim",
      "description": "删除（剪切）整行，可配合 p 粘贴实现移动。",
      "keywords": [
        "删除行",
        "删行",
        "dd"
      ],
      "examples": [
        {
          "cmd": "dd",
          "desc": "删一行（可 p 粘贴）"
        },
        {
          "cmd": "3dd",
          "desc": "删 3 行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "dd 实际是剪切，删后可用 p 粘贴；误删用 u 撤销",
      "compare": null,
      "options": null,
      "sample": {
        "output": "第 3 行: obsolete line\n光标在其上 -> 按 dd -> 删除整行",
        "explain": "`dd` 删除**整行**(delete line)；`3dd` 删 3 行。被删内容进寄存器可 `p` 粘贴。"
      }
    },
    {
      "name": "D",
      "category": "vim",
      "description": "删除从光标到行尾的内容。",
      "keywords": [
        "删除到行尾",
        "D"
      ],
      "examples": [
        {
          "cmd": "D",
          "desc": "清空光标到行末"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "D 等同 d$；d0 删到行首",
      "options": null,
      "sample": {
        "output": "行: keep this DELETE\n光标在 D -> 按 D -> 删除到行尾 -> keep this",
        "explain": "`D` 删除**从光标到行尾**的内容(等同 `d$`)；保留行首。"
      }
    },
    {
      "name": "cw",
      "category": "vim",
      "description": "修改一个词：删除该词并进入插入模式。",
      "keywords": [
        "修改词",
        "cw"
      ],
      "examples": [
        {
          "cmd": "cw",
          "desc": "改一个词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: eror\n光标在 e -> 按 cw -> 删词并插入 -> 输入 error",
        "explain": "`cw` 删除**当前词**(change word)并进入插入模式；改单词首选。"
      }
    },
    {
      "name": "C",
      "category": "vim",
      "description": "修改从光标到行尾：删除并进入插入模式。",
      "keywords": [
        "修改到行尾",
        "C"
      ],
      "examples": [
        {
          "cmd": "C",
          "desc": "改光标到行末"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: print 'a' # fix\n光标在 p -> 按 C -> 删除到行尾并插入",
        "explain": "`C` 删除**从光标到行尾**并进入插入模式(等同 `c$`)；重写该行后半。"
      }
    },
    {
      "name": "r",
      "category": "vim",
      "description": "替换单个字符为指定字符，如 rx 把当前字符改成 x。",
      "keywords": [
        "替换字符",
        "r"
      ],
      "examples": [
        {
          "cmd": "rx",
          "desc": "把光标字符换成 x"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "r 只换一个字符；R 进入持续替换模式",
      "options": null,
      "sample": {
        "output": "字符: heXo\n光标在 X -> 按 r 再按 l -> 替换为 l -> helo",
        "explain": "`r` 替换**光标下单个字符**(replace)后留在普通模式；快速改错字。"
      }
    },
    {
      "name": "J",
      "category": "vim",
      "description": "把下一行合并到当前行，去掉中间换行。",
      "keywords": [
        "合并行",
        "J"
      ],
      "examples": [
        {
          "cmd": "J",
          "desc": "两行合成一行"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "两行: line one\n       line two\n光标在第 1 行按 J -> 合并为 line one line two",
        "explain": "`J` 把**下一行接到当前行尾**(join)；`3J` 合并 3 行。"
      }
    },
    {
      "name": "~",
      "category": "vim",
      "description": "切换光标字符的大小写。",
      "keywords": [
        "大小写",
        "~"
      ],
      "examples": [
        {
          "cmd": "~",
          "desc": "反转大小写"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "字符: a\n光标在 a -> 按 ~ -> 切换大小写 -> A",
        "explain": "`~` 切换**光标下字符大小写**；选中后按 ~ 可整段切换。"
      }
    },
    {
      "name": "gu",
      "category": "vim",
      "description": "将选中文本转为小写，guw 转一个词。",
      "keywords": [
        "转小写",
        "gu"
      ],
      "examples": [
        {
          "cmd": "guw",
          "desc": "当前词转小写"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: Word\n光标在 W -> guw -> 转小写 -> word",
        "explain": "`gu` 后接动作把文本转**小写**；`guw` 转当前词，`guG` 转到底部。"
      }
    },
    {
      "name": "gU",
      "category": "vim",
      "description": "将选中文本转为大写，gUiw 可只转换当前词。",
      "keywords": [
        "转大写",
        "gU"
      ],
      "examples": [
        {
          "cmd": "gUw",
          "desc": "当前词转大写"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: word\n光标在 w -> gUw -> 转大写 -> WORD",
        "explain": "`gU` 把文本转**大写**；`gUiw` 转整个当前词。"
      }
    },
    {
      "name": ".",
      "category": "vim",
      "description": "重复上一次修改操作，高效编辑的杀手锏。",
      "keywords": [
        "重复",
        "."
      ],
      "examples": [
        {
          "cmd": ".",
          "desc": "再执行一次上次编辑"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "配合动作使用最强，如 dw. 连续删词",
      "compare": null,
      "options": null,
      "sample": {
        "output": "删除一词后 -> 移到下一词按 . -> 重复该删除",
        "explain": "`.` 重复**上一次修改操作**(不包含移动)；批量同操作(如多处删词)神器。"
      }
    },
    {
      "name": "u",
      "category": "vim",
      "description": "撤销上一次修改（普通模式），连按可逐步回退。",
      "keywords": [
        "撤销",
        "u"
      ],
      "examples": [
        {
          "cmd": "u",
          "desc": "撤销一步"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "误删一行后 -> 按 u -> 撤销该删除",
        "explain": "`u` 撤销**上一次修改**(undo)；连按逐步回退。"
      }
    },
    {
      "name": "Ctrl+r",
      "category": "vim",
      "description": "重做（反撤销），恢复被 u 撤销的改动。",
      "keywords": [
        "重做",
        "Ctrl+r"
      ],
      "examples": [
        {
          "cmd": "Ctrl+r",
          "desc": "恢复被撤销的改动"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "撤销过头 -> 按 Ctrl+r -> 重做(redo)恢复",
        "explain": "`Ctrl+r` 重做(redo)被撤销的操作；与 u 相对。"
      }
    },
    {
      "name": "U",
      "category": "vim",
      "description": "撤销当前行的全部改动，回到行最初状态。",
      "keywords": [
        "撤销整行",
        "U"
      ],
      "examples": [
        {
          "cmd": "U",
          "desc": "还原本行到最初"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行内多次修改后 -> 按 U -> 撤销本行所有修改",
        "explain": "`U` 撤销**当前行的全部修改**(回到进入本行时的状态)；再按可恢复。"
      }
    },
    {
      "name": "yy",
      "category": "vim",
      "description": "复制（yank）整行到寄存器。",
      "keywords": [
        "复制行",
        "yy"
      ],
      "examples": [
        {
          "cmd": "yy",
          "desc": "复制一行"
        },
        {
          "cmd": "3yy",
          "desc": "复制 3 行"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "Y 在部分配置等同 yy；y 是复制操作符",
      "compare": null,
      "options": null,
      "sample": {
        "output": "第 5 行: copy me\n光标在其上 -> 按 yy -> 复制到寄存器",
        "explain": "`yy`(或 `Y`) 复制**整行**(yank)；`p` 粘贴到下一行。"
      }
    },
    {
      "name": "yw",
      "category": "vim",
      "description": "复制一个词到寄存器（普通模式），供后续 p 粘贴。",
      "keywords": [
        "复制词",
        "yw"
      ],
      "examples": [
        {
          "cmd": "yw",
          "desc": "复制光标所在词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: hello\n光标在 h -> 按 yw -> 复制该词到寄存器",
        "explain": "`yw` 复制**当前词**；`y$` 复制到行尾，`yib` 复制括号内。"
      }
    },
    {
      "name": "y$",
      "category": "vim",
      "description": "复制到行尾（普通模式），复制光标到行末的内容。",
      "keywords": [
        "复制到行尾",
        "y$"
      ],
      "examples": [
        {
          "cmd": "y$",
          "desc": "复制光标到行末"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "行: take this part\n光标在 t -> 按 y$ -> 复制 t 到行尾",
        "explain": "`y$` 复制**从光标到行尾**的文本；供后续 `p` 粘贴。"
      }
    },
    {
      "name": "p",
      "category": "vim",
      "description": "粘贴到光标后（或下方），普通模式常用。",
      "keywords": [
        "粘贴",
        "p"
      ],
      "examples": [
        {
          "cmd": "p",
          "desc": "在光标后/下一行粘贴"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "寄存器有 'line'\n光标在第 2 行 -> 按 p -> 在下方粘贴该行",
        "explain": "`p` 在**光标后/下一行**粘贴寄存器内容(整行则粘贴到下方)；`P` 粘贴到上方/前。"
      }
    },
    {
      "name": "P",
      "category": "vim",
      "description": "粘贴到光标前（或上方）。",
      "keywords": [
        "粘贴前",
        "P"
      ],
      "examples": [
        {
          "cmd": "P",
          "desc": "在光标前/上一行粘贴"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "寄存器有 'x'\n光标在 a -> 按 P -> 在光标前插入 x -> xa",
        "explain": "`P` 在**光标前/上一行**粘贴；与 p 方向相反。"
      }
    },
    {
      "name": "diw",
      "category": "vim",
      "description": "删除光标所在词（不含周围空格），delete inner word。",
      "keywords": [
        "删词",
        "diw"
      ],
      "examples": [
        {
          "cmd": "diw",
          "desc": "删除 inner word"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "文本对象：d/c/y + i/a + 对象；i 不含边界，a 含边界",
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: mistake\n光标在词内任意处 -> 按 diw -> 删除整个词(忽略空白)",
        "explain": "`diw` 删除**内词**(inner word)——整词不含两侧空白；改词时比 dw 更准。"
      }
    },
    {
      "name": "ciw",
      "category": "vim",
      "description": "修改光标所在词，delete+insert inner word。",
      "keywords": [
        "改词",
        "ciw"
      ],
      "examples": [
        {
          "cmd": "ciw",
          "desc": "清空当前词并输入"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "词: oldname\n光标在词内 -> 按 ciw -> 删整词并插入 -> 输入 newname",
        "explain": "`ciw` 修改**内词**(change inner word)；快速替换光标所在单词。"
      }
    },
    {
      "name": "di\"",
      "category": "vim",
      "description": "删除引号内的文本，不加引号本身（delete inner quote）。",
      "keywords": [
        "删引号内",
        "di\""
      ],
      "examples": [
        {
          "cmd": "di\"",
          "desc": "删除 \"...\" 内容"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: name = \"value\"\n光标在 value 内 -> 按 di\" -> 删除引号内容 -> name = \"\"",
        "explain": "`di\"` 删除**双引号内的内容**(delete inner quote)，保留引号；改字符串值用。同理 di( 删括号内、di[ 删方括号内。"
      }
    },
    {
      "name": "ci\"",
      "category": "vim",
      "description": "修改引号内的文本，保留引号。",
      "keywords": [
        "改引号内",
        "ci\""
      ],
      "examples": [
        {
          "cmd": "ci\"",
          "desc": "改 \"...\" 内容"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: msg = \"old\"\n光标在 old 内 -> 按 ci\" -> 删引号内容并插入 -> 输入 new",
        "explain": "`ci\"` 修改**双引号内的内容**并进入插入；快速替换字符串。di( / ci( 同理作用于括号。"
      }
    },
    {
      "name": "di(",
      "category": "vim",
      "description": "删除括号内的文本，保留括号（delete inner paren）。",
      "keywords": [
        "删括号内",
        "di("
      ],
      "examples": [
        {
          "cmd": "di(",
          "desc": "删除 (...) 内容"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: func(a, b)\n光标在 a -> 按 di( -> 删除括号内 a, b -> func()",
        "explain": "`di(` 删除**圆括号内的内容**(inner parenthesis)；改函数参数、删除 JSON 值常用。"
      }
    },
    {
      "name": "dit",
      "category": "vim",
      "description": "删除标签（如 XML/HTML 标签）内的文本。",
      "keywords": [
        "删标签内",
        "dit"
      ],
      "examples": [
        {
          "cmd": "dit",
          "desc": "删除 <tag>...</tag> 内容"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "文本: <tag>content</tag>\n光标在 content -> 按 dit -> 删除标签内容 -> <tag></tag>",
        "explain": "`dit` 删除**标签内的内容**(inner tag，XML/HTML)；配合 ci{ 改花括号内。"
      }
    },
    {
      "name": "/pattern",
      "category": "vim",
      "description": "向下搜索模式（支持正则），回车后 n 跳下一个。",
      "keywords": [
        "搜索",
        "查找",
        "/pattern"
      ],
      "examples": [
        {
          "cmd": "/foo",
          "desc": "向下找 foo"
        },
        {
          "cmd": "/the\\<",
          "desc": "正则匹配词首"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "n 下一个，N 上一个；:noh 取消高亮",
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 /error 回车\n高亮匹配, 跳到下一个 error",
        "explain": "`/pattern` 向前搜索模式(支持正则)；回车后跳到首个匹配，`n` 下一处、`N` 上一处。"
      }
    },
    {
      "name": "?pattern",
      "category": "vim",
      "description": "向上搜索模式（支持正则），n/N 在匹配间前后跳转。",
      "keywords": [
        "向上搜索",
        "?pattern"
      ],
      "examples": [
        {
          "cmd": "?foo",
          "desc": "向上找 foo"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 ?main 回车\n向上搜索, 跳到上一个 main",
        "explain": "`?pattern` 向上搜索模式；与 / 方向相反，`n`/`N` 仍继续相应方向。"
      }
    },
    {
      "name": "n",
      "category": "vim",
      "description": "跳到下一个搜索匹配，配合 / 或 ? 使用。",
      "keywords": [
        "下一个匹配",
        "n"
      ],
      "examples": [
        {
          "cmd": "n",
          "desc": "同向下一处"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "已搜索 error -> 按 n -> 跳到下一个匹配",
        "explain": "`n` 跳到**下一个**搜索匹配(沿 / 或 ? 当前方向)；连续浏览命中项。"
      }
    },
    {
      "name": "N",
      "category": "vim",
      "description": "跳到上一个搜索匹配，与 n 方向相反。",
      "keywords": [
        "上一个匹配",
        "N"
      ],
      "examples": [
        {
          "cmd": "N",
          "desc": "反向上一处"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "已搜索 error -> 按 N -> 跳到上一个匹配",
        "explain": "`N` 跳到**上一个**搜索匹配；与 n 相反。"
      }
    },
    {
      "name": ":%s",
      "category": "vim",
      "description": "全局查找替换，:%s/foo/bar/g 替换全文件所有匹配。",
      "keywords": [
        "替换",
        "查找替换",
        ":%s"
      ],
      "examples": [
        {
          "cmd": ":%s/foo/bar/g",
          "desc": "全文把 foo 换成 bar"
        },
        {
          "cmd": ":%s/foo/bar/gc",
          "desc": "每处确认"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "漏写 g 只换每行首个；c 逐个确认更安全",
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :%s/foo/bar/g 回车\n3 substitutions on 3 lines",
        "explain": "`:%s/foo/bar/g` 在**全文**把 foo 替换为 bar(g 全局、不止首处)；% 表示全部行。"
      }
    },
    {
      "name": ":s",
      "category": "vim",
      "description": "当前行查找替换，:s/old/new/g 替换本行全部。",
      "keywords": [
        "行内替换",
        ":s"
      ],
      "examples": [
        {
          "cmd": ":s/old/new/g",
          "desc": "本行替换"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :s/old/new 回车\n仅替换当前行第一个 old -> new",
        "explain": "`:s/old/new` 只替换**当前行首个**匹配；加 /g 才替换行内全部。"
      }
    },
    {
      "name": ":5,20s",
      "category": "vim",
      "description": "在指定行范围（5~20 行）内查找替换。",
      "keywords": [
        "区间替换",
        ":5,20s"
      ],
      "examples": [
        {
          "cmd": ":5,20s/old/new/g",
          "desc": "第 5–20 行替换"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :5,20s/err/ERR/g 回车\n第 5-20 行内 err 全部改为 ERR",
        "explain": "`:5,20s/.../g` 限定在**第 5 到 20 行**范围内替换；范围可写 %、.、$ 或可视选择。"
      }
    },
    {
      "name": ":set ic",
      "category": "vim",
      "description": "搜索时忽略大小写（ignorecase）。",
      "keywords": [
        "忽略大小写",
        ":set ic"
      ],
      "examples": [
        {
          "cmd": ":set ic",
          "desc": "搜索不区分大小写"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set ic 回车\n(之后搜索不区分大小写)",
        "explain": "`:set ic`(ignorecase) 让搜索**忽略大小写**；`:set noic` 恢复区分。"
      }
    },
    {
      "name": ":set hls",
      "category": "vim",
      "description": "高亮所有搜索匹配结果（hlsearch）。",
      "keywords": [
        "高亮搜索",
        ":set hls"
      ],
      "examples": [
        {
          "cmd": ":set hls",
          "desc": "开启搜索高亮"
        },
        {
          "cmd": ":noh",
          "desc": "临时关闭高亮"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set hls 回车\n(搜索命中项全部高亮)",
        "explain": "`:set hls`(hlsearch) 高亮**所有搜索匹配**；`:noh` 临时清除高亮。"
      }
    },
    {
      "name": ":w",
      "category": "vim",
      "description": "保存（写入）当前文件。",
      "keywords": [
        "保存",
        "写盘",
        ":w"
      ],
      "examples": [
        {
          "cmd": ":w",
          "desc": "保存"
        },
        {
          "cmd": ":w new.txt",
          "desc": "另存为"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :w 回车\n\"report.txt\" 3L, 42C written",
        "explain": "`:w` 保存文件；状态行回显行数与字节数 \"3L, 42C written\"。`:w new.txt` 另存为。"
      }
    },
    {
      "name": ":q",
      "category": "vim",
      "description": "退出 Vim；有未保存改动时会拒绝。",
      "keywords": [
        "退出",
        ":q"
      ],
      "examples": [
        {
          "cmd": ":q",
          "desc": "退出（有改动会报错）"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :q 回车\n(无改动则退出; 有未保存改动会提示 E37)",
        "explain": "`:q` 退出；若有未保存修改会拒绝并提示 E37，需 `:w` 或 `:q!`。"
      }
    },
    {
      "name": ":q!",
      "category": "vim",
      "description": "强制退出且不保存任何改动。",
      "keywords": [
        "强制退出",
        ":q!"
      ],
      "examples": [
        {
          "cmd": ":q!",
          "desc": "丢弃改动退出"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "会丢失所有未保存改动，慎用",
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :q! 回车\n(放弃所有修改并强制退出)",
        "explain": "`:q!` **强制退出不保存**；丢弃本次会话全部编辑，慎用。"
      }
    },
    {
      "name": ":wq",
      "category": "vim",
      "description": "保存并退出 Vim，等同 ZZ，写盘后离开编辑器。",
      "keywords": [
        "保存退出",
        ":wq"
      ],
      "examples": [
        {
          "cmd": ":wq",
          "desc": "保存后退出"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": ":wq / :x / ZZ 都保存退出；:x 仅在改动时写盘",
      "options": null,
      "sample": {
        "output": "输入 :wq 回车\n\"report.txt\" 3L, 42C written\n(保存并退出)",
        "explain": "`:wq` 保存并退出(等同 ZZ)；写盘后离开 Vim。"
      }
    },
    {
      "name": ":x",
      "category": "vim",
      "description": "保存并退出，仅在有改动时才写盘。",
      "keywords": [
        "保存退出",
        ":x"
      ],
      "examples": [
        {
          "cmd": ":x",
          "desc": "等同 ZZ"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": ":x 比 :wq 更优：未改动不更新 mtime",
      "options": null,
      "sample": {
        "output": "输入 :x 回车\n(保存并退出, 功能同 :wq)",
        "explain": "`:x` 保存并退出，与 :wq 几乎一致(区别: 仅当文件改动才更新修改时间)。"
      }
    },
    {
      "name": "ZZ",
      "category": "vim",
      "description": "普通模式下保存并退出，等同 :wq。",
      "keywords": [
        "保存退出",
        "ZZ"
      ],
      "examples": [
        {
          "cmd": "ZZ",
          "desc": "按两次 Z 退出"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "普通模式按 ZZ\n(保存并退出, 等价 :x)",
        "explain": "`ZZ`(大写) 在普通模式**保存并退出**，无需冒号命令；`:x` 的快捷等价。"
      }
    },
    {
      "name": ":e",
      "category": "vim",
      "description": "打开或切换到另一个文件编辑。",
      "keywords": [
        "打开文件",
        ":e"
      ],
      "examples": [
        {
          "cmd": ":e other.txt",
          "desc": "切换到另一文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :e other.txt 回车\n\"other.txt\" 12L 加载新文件",
        "explain": "`:e file` 在当前窗口**打开/切换到另一文件**；未保存改动会先提示。"
      }
    },
    {
      "name": ":e!",
      "category": "vim",
      "description": "从磁盘重新加载当前文件，放弃内存中的改动。",
      "keywords": [
        "重新加载",
        ":e!"
      ],
      "examples": [
        {
          "cmd": ":e!",
          "desc": "放弃改动重读磁盘"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :e! 回车\n(丢弃当前文件改动并重新从磁盘载入)",
        "explain": "`:e!` 放弃当前缓冲区改动，**重新从磁盘读取**文件；撤销本地编辑。"
      }
    },
    {
      "name": ":qa",
      "category": "vim",
      "description": "退出所有缓冲区（窗口/标签页中的文件）。",
      "keywords": [
        "退出全部",
        ":qa"
      ],
      "examples": [
        {
          "cmd": ":qa",
          "desc": "关闭所有"
        },
        {
          "cmd": ":qa!",
          "desc": "强制关闭全部"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :qa 回车\n(所有窗口/文件一并退出; 有未保存会提示)",
        "explain": "`:qa` 退出**全部**窗口(quit all)；有未保存改动会拒绝，需用 `:qa!`。"
      }
    },
    {
      "name": ":ls",
      "category": "vim",
      "description": "列出当前打开的缓冲区（文件列表）。",
      "keywords": [
        "缓冲区列表",
        ":ls"
      ],
      "examples": [
        {
          "cmd": ":ls",
          "desc": "查看已打开文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :ls 回车\n  1 %a   \"report.txt\"  line 3\n  2  h   \"notes.md\"    line 1",
        "explain": "`:ls` 列出**缓冲区列表**(已打开文件)；% 当前、# 交替、h 隐藏。`:b N` 跳到第 N 个。"
      }
    },
    {
      "name": ":bn",
      "category": "vim",
      "description": "切换到下一个缓冲区（已打开的文件）。",
      "keywords": [
        "下一缓冲区",
        ":bn"
      ],
      "examples": [
        {
          "cmd": ":bn",
          "desc": "下一个文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :bn 回车\n(切换到缓冲区列表中的下一个文件)",
        "explain": "`:bn`(buffer next) 切换到**下一个缓冲区**(已打开文件)；`:bp` 上一个。"
      }
    },
    {
      "name": ":bp",
      "category": "vim",
      "description": "切换到上一个缓冲区（已打开的文件）。",
      "keywords": [
        "上一缓冲区",
        ":bp"
      ],
      "examples": [
        {
          "cmd": ":bp",
          "desc": "上一个文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :bp 回车\n(切换到上一个缓冲区)",
        "explain": "`:bp`(buffer previous) 切换到上一个缓冲区；与 :bn 相对。"
      }
    },
    {
      "name": ":bd",
      "category": "vim",
      "description": "关闭当前缓冲区（文件），但不退出 Vim。",
      "keywords": [
        "关闭缓冲区",
        ":bd"
      ],
      "examples": [
        {
          "cmd": ":bd",
          "desc": "关掉当前文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :bd 回车\n(关闭当前缓冲区, 但不退出 Vim)",
        "explain": "`:bd`(buffer delete) 关闭当前缓冲区(文件)；仍留在 Vim 中可继续其他文件。"
      }
    },
    {
      "name": ":sp",
      "category": "vim",
      "description": "横向（上下）分屏打开文件。",
      "keywords": [
        "水平分屏",
        ":sp"
      ],
      "examples": [
        {
          "cmd": ":sp",
          "desc": "上下分屏同文件"
        },
        {
          "cmd": ":sp new.txt",
          "desc": "分屏打开新文件"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :sp other.txt 回车\n(上下分屏打开 other.txt)",
        "explain": "`:sp file` **水平分屏**(split)打开文件；`Ctrl+w` 后再按方向键在窗格间移动。"
      }
    },
    {
      "name": ":vsp",
      "category": "vim",
      "description": "纵向（左右）分屏打开文件。",
      "keywords": [
        "垂直分屏",
        ":vsp"
      ],
      "examples": [
        {
          "cmd": ":vsp",
          "desc": "左右分屏"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :vsp other.txt 回车\n(左右分屏打开 other.txt)",
        "explain": "`:vsp file` **垂直分屏**(vertical split)打开文件；适合对照编辑。"
      }
    },
    {
      "name": "Ctrl+w",
      "category": "vim",
      "description": "窗口操作前缀键，Ctrl+w h/j/k/l 在分屏间移动光标。",
      "keywords": [
        "窗口切换",
        "Ctrl+w"
      ],
      "examples": [
        {
          "cmd": "Ctrl+w h/j/k/l",
          "desc": "四向切换窗口"
        },
        {
          "cmd": "Ctrl+w =",
          "desc": "等分窗口"
        },
        {
          "cmd": "Ctrl+w +",
          "desc": "增高"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "所有窗口操作都以 Ctrl+w 开头；误按会触发切换",
      "compare": null,
      "options": null,
      "sample": {
        "output": "分屏状态下按 Ctrl+w 再按 h/j/k/l\n(在窗格间移动焦点)",
        "explain": "`Ctrl+w` 后接方向在**分屏窗格间移动焦点**；`Ctrl+w =` 均分、`Ctrl+w o` 只留当前。"
      }
    },
    {
      "name": ":tabnew",
      "category": "vim",
      "description": "新建一个标签页，用于隔离不同任务/文件。",
      "keywords": [
        "新标签",
        ":tabnew"
      ],
      "examples": [
        {
          "cmd": ":tabnew",
          "desc": "开新标签"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :tabnew 回车\n(新建一个标签页)",
        "explain": "`:tabnew` 新建**标签页**(隔离不同任务/文件组)；`gt`/`gT` 切换，`tabclose` 关闭。"
      }
    },
    {
      "name": "gt",
      "category": "vim",
      "description": "切换到下一个标签页（普通模式）。",
      "keywords": [
        "下一标签",
        "gt"
      ],
      "examples": [
        {
          "cmd": "gt",
          "desc": "下一标签"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "多标签时按 gt\n(切换到下一个标签页)",
        "explain": "`gt` 切到**下一个标签页**；`gT` 上一个，`Ngt` 跳第 N 个。"
      }
    },
    {
      "name": "gT",
      "category": "vim",
      "description": "切换到上一个标签页（普通模式）。",
      "keywords": [
        "上一标签",
        "gT"
      ],
      "examples": [
        {
          "cmd": "gT",
          "desc": "上一标签"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 gT\n(切换到上一个标签页)",
        "explain": "`gT` 切到上一个标签页；与 gt 相对。"
      }
    },
    {
      "name": "za",
      "category": "vim",
      "description": "切换折叠的展开/收起（toggle fold）。",
      "keywords": [
        "折叠",
        "za"
      ],
      "examples": [
        {
          "cmd": "za",
          "desc": "开/关当前折叠"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在折叠行 -> 按 za -> 展开/收起该折叠切换",
        "explain": "`za` **切换**当前折叠的展/收状态(fold toggle)；`zo` 展开、`zc` 收起。"
      }
    },
    {
      "name": "zo",
      "category": "vim",
      "description": "打开（展开）一处折叠。",
      "keywords": [
        "展开折叠",
        "zo"
      ],
      "examples": [
        {
          "cmd": "zo",
          "desc": "展开一层"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在收起折叠 -> 按 zo -> 展开该折叠",
        "explain": "`zo` **展开**当前折叠(open)；查看折叠内的内容。"
      }
    },
    {
      "name": "zc",
      "category": "vim",
      "description": "关闭（收起）一处折叠。",
      "keywords": [
        "收起折叠",
        "zc"
      ],
      "examples": [
        {
          "cmd": "zc",
          "desc": "收起一层"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在展开折叠 -> 按 zc -> 收起该折叠",
        "explain": "`zc` **收起**当前折叠(close)；用于隐藏细节聚焦大纲。"
      }
    },
    {
      "name": "zR",
      "category": "vim",
      "description": "展开全部折叠，一次性显示所有被收起的内容。",
      "keywords": [
        "全部展开",
        "zR"
      ],
      "examples": [
        {
          "cmd": "zR",
          "desc": "递归展开"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 zR\n(展开所有折叠)",
        "explain": "`zR` **展开全部**折叠；一览所有被折叠内容。"
      }
    },
    {
      "name": "zM",
      "category": "vim",
      "description": "收起全部折叠，把所有可折叠块收起便于总览。",
      "keywords": [
        "全部收起",
        "zM"
      ],
      "examples": [
        {
          "cmd": "zM",
          "desc": "递归收起"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "按 zM\n(收起所有折叠)",
        "explain": "`zM` **收起全部**折叠；仅看大纲。"
      }
    },
    {
      "name": "qa",
      "category": "vim",
      "description": "录制宏到寄存器 a：先 qa 开始、操作完再 q 结束。",
      "keywords": [
        "录制宏",
        "qa"
      ],
      "examples": [
        {
          "cmd": "qa ... q",
          "desc": "录动作到 a"
        },
        {
          "cmd": "@a",
          "desc": "回放 a"
        },
        {
          "cmd": "20@a",
          "desc": "回放 20 次"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "录制以 q 开始、以 q 结束；注意 q 也是退出键",
      "compare": null,
      "options": null,
      "sample": {
        "output": "普通模式按 qa -> 开始录制宏到寄存器 a\n(操作序列被记录, 再按 q 停止)",
        "explain": "`qa` 开始把后续按键**录制进宏寄存器 a**(quit to record)；结束再按 `q`，`@a` 回放。"
      }
    },
    {
      "name": "@a",
      "category": "vim",
      "description": "回放寄存器 a 中录制的宏，批量重复操作。",
      "keywords": [
        "回放宏",
        "@a"
      ],
      "examples": [
        {
          "cmd": "@a",
          "desc": "执行宏 a"
        },
        {
          "cmd": "@@",
          "desc": "重复上次宏"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "录制好宏 a 后按 @a\n(在当前位置回放宏 a 的操作)",
        "explain": "`@a` **回放寄存器 a 中的宏**；`@@` 重复上一次宏，批量处理多行利器。"
      }
    },
    {
      "name": "ma",
      "category": "vim",
      "description": "设置标记 a，可跳转回该位置（m 后跟任意字母）。",
      "keywords": [
        "设置标记",
        "ma"
      ],
      "examples": [
        {
          "cmd": "ma",
          "desc": "在当前位置记 a"
        },
        {
          "cmd": "`a",
          "desc": "跳回标记 a"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "光标在第 10 行按 ma\n(设置名为 a 的标记)",
        "explain": "`ma` 在当前位置设置**标记 a**(mark)；`'a` 跳回该标记行首，``a` 跳精确位置。"
      }
    },
    {
      "name": "Ctrl+n",
      "category": "vim",
      "description": "插入模式下按单词补全（下一个候选）。",
      "keywords": [
        "补全",
        "Ctrl+n"
      ],
      "examples": [
        {
          "cmd": "Ctrl+n",
          "desc": "向下补全单词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "插入模式输入 wor -> 按 Ctrl+n\n(弹出补全: word / work / world...)",
        "explain": "插入模式 `Ctrl+n` 触发**关键字补全**(next)，列出候选；`Ctrl+p` 反向。无需插件即用。"
      }
    },
    {
      "name": "Ctrl+p",
      "category": "vim",
      "description": "插入模式下按单词补全（上一个候选）。",
      "keywords": [
        "补全",
        "Ctrl+p"
      ],
      "examples": [
        {
          "cmd": "Ctrl+p",
          "desc": "向上补全单词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "插入模式按 Ctrl+p\n(向上反向补全候选)",
        "explain": "`Ctrl+p` 在补全菜单中**向前**(previous)选择；与 Ctrl+n 相对。"
      }
    },
    {
      "name": ":set nu",
      "category": "vim",
      "description": "显示行号，便于定位与引用具体行。",
      "keywords": [
        "行号",
        ":set nu"
      ],
      "examples": [
        {
          "cmd": ":set nu",
          "desc": "显示行号"
        },
        {
          "cmd": ":set nonu",
          "desc": "隐藏行号"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set nu 回车\n  1 first line\n  2 second line\n(每行前显示行号)",
        "explain": "`:set nu`(number) **显示行号**；`:set nonu` 关闭。定位与引用行号必备。"
      }
    },
    {
      "name": ":set rnu",
      "category": "vim",
      "description": "显示相对行号，配合跳转更高效。",
      "keywords": [
        "相对行号",
        ":set rnu"
      ],
      "examples": [
        {
          "cmd": ":set rnu",
          "desc": "配合 5j/3k 跳转更方便"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set rnu 回车\n  2 first line\n  1 second line  <- 光标行\n(显示相对行号, 光标行标 0)",
        "explain": "`:set rnu`(relativenumber) 显示**相对行号**(相对光标行)；配合 `5j`/`3k` 精确跳转。`:set nu rnu` 兼得。"
      }
    },
    {
      "name": ":syntax on",
      "category": "vim",
      "description": "开启语法高亮，不同语言元素以颜色区分更易读。",
      "keywords": [
        "语法高亮",
        ":syntax on"
      ],
      "examples": [
        {
          "cmd": ":syntax on",
          "desc": "彩色显示代码"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :syntax on 回车\n(关键字/字符串/注释以不同颜色高亮)",
        "explain": "`:syntax on` 开启**语法高亮**；不同语言元素着色，可读性大增。通常写进 vimrc 默认开启。"
      }
    },
    {
      "name": ":set ai",
      "category": "vim",
      "description": "开启自动缩进，保持代码层级。",
      "keywords": [
        "自动缩进",
        ":set ai"
      ],
      "examples": [
        {
          "cmd": ":set ai",
          "desc": "新行沿用缩进"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set ai 回车\n(新行自动沿用上一行缩进)",
        "explain": "`:set ai`(autoindent) **自动缩进**——新行延续上一行缩进；写代码排版整齐。`:set noai` 关。"
      }
    },
    {
      "name": ":set list",
      "category": "vim",
      "description": "显示不可见字符（制表符、行尾 $ 等）。",
      "keywords": [
        "不可见字符",
        ":set list"
      ],
      "examples": [
        {
          "cmd": ":set list",
          "desc": "显示制表符与行尾符"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set list 回车\n行尾以 $ 标出, 制表符显示为 ^I",
        "explain": "`:set list` 显示**不可见字符**(行尾 $、Tab 为 ^I)；排查多余空格/混用 Tab 很直观。`:set nolist` 关。"
      }
    },
    {
      "name": ":set wrap",
      "category": "vim",
      "description": "开启长行自动换行显示。",
      "keywords": [
        "换行显示",
        ":set wrap"
      ],
      "examples": [
        {
          "cmd": ":set wrap",
          "desc": "长行折行"
        },
        {
          "cmd": ":set nowrap",
          "desc": "不折行"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :set wrap 回车\n(长行在窗口内自动折行显示)",
        "explain": "`:set wrap` 让超长行**折行**显示(不横向滚动)；`:set nowrap` 关闭则一行到底需横向移动。"
      }
    },
    {
      "name": ":retab",
      "category": "vim",
      "description": "按当前设置把制表符与空格互相转换。",
      "keywords": [
        "转换制表符",
        ":retab"
      ],
      "examples": [
        {
          "cmd": ":retab",
          "desc": "统一缩进风格"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :retab 回车\n(按 expandtab 把 Tab 转为对应数量空格)",
        "explain": "`:retab` 按当前 `tabstop`/`expandtab` 设置**重排缩进**(Tab↔空格互转)；统一缩进风格用。"
      }
    },
    {
      "name": ":r",
      "category": "vim",
      "description": "把外部文件内容读入到当前缓冲区光标后。",
      "keywords": [
        "读入文件",
        ":r"
      ],
      "examples": [
        {
          "cmd": ":r other.txt",
          "desc": "把文件内容插入光标下"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :r other.txt 回车\n(把 other.txt 内容插入到光标下方)",
        "explain": "`:r file` 把指定文件**读入并插入到当前行下方**；`:r !cmd` 还可插入命令输出。"
      }
    },
    {
      "name": ":!cmd",
      "category": "vim",
      "description": "在 Vim 内临时执行一条外部 shell 命令。",
      "keywords": [
        "执行命令",
        ":!cmd"
      ],
      "examples": [
        {
          "cmd": ":!ls",
          "desc": "查看目录"
        },
        {
          "cmd": ":r !date",
          "desc": "插入命令输出"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :!ls 回车\nfile1.txt  file2.txt\n(按 Enter 返回 Vim)",
        "explain": "`:!cmd` 在 Vim 内**执行外部 shell 命令**(如 :!ls、:!make)；临时跑命令不退出编辑器。"
      }
    },
    {
      "name": ":%!",
      "category": "vim",
      "description": "用外部命令过滤全部内容，如 :%!sort 对全文排序。",
      "keywords": [
        "外部过滤",
        ":%!"
      ],
      "examples": [
        {
          "cmd": ":%!sort",
          "desc": "全文排序"
        },
        {
          "cmd": ":%!grep foo",
          "desc": "只保留含 foo 的行"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :%!sort 回车\n(把全文作为 stdin 交给 sort, 结果替换全文)",
        "explain": "`:%!cmd` 把**全文**管道给外部命令、用其输出**替换全文**；`:%!sort` 即把文档整篇排序。"
      }
    },
    {
      "name": ":help",
      "category": "vim",
      "description": "打开 Vim 内置帮助，:help :w 查看某命令详解。",
      "keywords": [
        "帮助",
        ":help"
      ],
      "examples": [
        {
          "cmd": ":help :w",
          "desc": "查某命令帮助"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "输入 :help :w 回车\n(打开帮助窗口, 显示 :w 的说明)",
        "explain": "`:help topic` 打开**内置帮助**(如 :help :w、:help pattern)；`Ctrl+]` 跳标签、`q` 关闭帮助窗。"
      }
    },
    {
      "name": "vimtutor",
      "category": "vim",
      "description": "启动交互式 Vim 教程，新手练手的最佳入口。",
      "keywords": [
        "教程",
        "vimtutor"
      ],
      "examples": [
        {
          "cmd": "vimtutor",
          "desc": "终端输入学习基础"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ vimtutor\n(启动交互式 Vim 教程, 按步练习移动/编辑/保存)",
        "explain": "`vimtutor` 在终端启动**官方交互教程**，约 30 分钟循序渐进练手 Vim 基础，新手最佳入口。"
      }
    },
    {
      "name": "mktemp",
      "category": "file",
      "description": "在临时目录安全地创建唯一命名的临时文件或目录，避免文件名冲突与竞态条件。",
      "keywords": [
        "临时文件",
        "临时目录",
        "mktemp"
      ],
      "examples": [
        {
          "cmd": "mktemp",
          "desc": "创建随机名临时文件"
        },
        {
          "cmd": "mktemp -d",
          "desc": "创建临时目录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mktemp\n/tmp/tmp.abc123\n$ mktemp -d\n/tmp/tmp.XyZ789",
        "explain": "第1行 `mktemp` 在 /tmp 创建唯一命名的临时文件并返回路径。\n第2行 `mktemp -d` 创建临时目录，适合脚本中安全存放中间产物。"
      }
    },
    {
      "name": "shred",
      "category": "file",
      "description": "反复覆写后再删除文件，使数据难以恢复；比 rm 更适合销毁敏感文件。",
      "keywords": [
        "安全删除",
        "擦除",
        "shred"
      ],
      "examples": [
        {
          "cmd": "shred -u file",
          "desc": "覆盖后删除文件"
        },
        {
          "cmd": "shred -n 3 -z file",
          "desc": "覆写3次再填零"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "默认仅覆盖不删除，需 -u 才真正删除；SSD/日志类存储仍可能残留",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ shred -u secret.txt\n$ ls secret.txt\nls: cannot access 'secret.txt': No such file or directory",
        "explain": "`shred -u` 多次覆写文件内容后再删除，使数据难以恢复。\n随后 ls 确认文件已不存在，敏感文件应如此安全擦除而非普通 rm。"
      }
    },
    {
      "name": "install",
      "category": "file",
      "description": "复制文件的同时设置权限与属主，常用于 Makefile/安装脚本部署可执行文件。",
      "keywords": [
        "安装文件",
        "install"
      ],
      "examples": [
        {
          "cmd": "install -m 755 a.sh /usr/local/bin/",
          "desc": "复制并设可执行权限"
        },
        {
          "cmd": "install -d dir",
          "desc": "创建目录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ install -m 755 app /usr/local/bin/app\n$ ls -l /usr/local/bin/app\n-rwxr-xr-x 1 root root 12345 Aug  4 11:30 /usr/local/bin/app",
        "explain": "`install` 复制文件并设置目标权限/属主，常用于 Makefile 安装阶段。\n此处将 app 复制到 /usr/local/bin 并设为 755（属主可执行），ls 确认权限已生效。"
      }
    },
    {
      "name": "rename",
      "category": "file",
      "description": "按 Perl 正则规则批量重命名文件，适合对大量文件做统一的命名变换。",
      "keywords": [
        "批量重命名",
        "rename"
      ],
      "examples": [
        {
          "cmd": "rename 's/.txt/.md/' *.txt",
          "desc": "扩展名批量改"
        },
        {
          "cmd": "rename 'y/A-Z/a-z/' *",
          "desc": "文件名转小写"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "多为 Perl 版 rename，语法是表达式；使用前确认本地版本",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ rename 's/\\.txt$/.md/' *.txt\n$ ls\na.md b.md c.md",
        "explain": "`rename` 用 Perl 表达式批量重命名：`s/\\.txt$/.md/` 把所有 .txt 改为 .md。\nls 显示原 .txt 文件已变为 .md。"
      }
    },
    {
      "name": "view",
      "category": "view",
      "description": "只读模式查看文件，等同 vim -R，打开即不可写。",
      "keywords": [
        "只读查看",
        "view"
      ],
      "examples": [
        {
          "cmd": "view file.txt",
          "desc": "只读打开，禁止修改保存"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "view 等价于 vim -R，改后无法 :w 保存",
      "options": null,
      "sample": {
        "output": "$ view script.sh\n(只读 Vim; :w 提示 E45: 'readonly' option is set)",
        "explain": "`view` 等同 `vim -R`，只读编辑；`:w` 会被拒绝，适合查看不希望被改的文件。"
      }
    },
    {
      "name": "md5sum",
      "category": "text",
      "description": "计算或校验文件的 MD5 摘要，常用于下载后验证完整性（安全性已不推荐用于校验）。",
      "keywords": [
        "md5",
        "校验和",
        "md5sum"
      ],
      "examples": [
        {
          "cmd": "md5sum file.iso",
          "desc": "计算摘要"
        },
        {
          "cmd": "md5sum -c file.iso.md5",
          "desc": "校验文件完整性"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<文件>",
          "default": "无",
          "desc": "计算 MD5 校验值。输出为「校验值 两个空格 文件名」。"
        },
        {
          "flag": "-c <校验文件>, --check",
          "default": "关闭",
          "desc": "按校验文件逐项验证。校验文件须为该命令生成的格式。"
        },
        {
          "flag": "-b / -t",
          "default": "文本模式",
          "desc": "分别为二进制与文本模式。Linux 上两者无区别，跨 Windows 时有意义。"
        },
        {
          "flag": "--quiet",
          "default": "关闭",
          "desc": "校验时只报告失败项，成功项不输出。"
        },
        {
          "flag": "--status",
          "default": "关闭",
          "desc": "校验时不输出任何内容，只用退出码表示结果。适合脚本。"
        },
        {
          "flag": "--ignore-missing",
          "default": "关闭",
          "desc": "忽略校验文件中不存在的条目。"
        },
        {
          "flag": "（安全性）",
          "default": "无",
          "desc": "MD5 已被证实可构造碰撞，只适合校验传输完整性，绝不可用于安全签名。"
        }
      ],
      "sample": {
        "output": "$ md5sum file.iso\nd41d8cd98f00b204e9800998ecf8427e  file.iso",
        "explain": "输出 32 位十六进制 MD5 摘要与文件名，用于校验下载完整性（比对发布方公布的哈希）。"
      }
    },
    {
      "name": "sha256sum",
      "category": "text",
      "description": "计算或校验 SHA-256 摘要，验证文件完整性与防篡改，比 MD5 更可靠。",
      "keywords": [
        "sha256",
        "校验和",
        "sha256sum"
      ],
      "examples": [
        {
          "cmd": "sha256sum file.iso",
          "desc": "计算 SHA-256"
        },
        {
          "cmd": "sha256sum -c file.iso.sha256",
          "desc": "校验"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<文件>",
          "default": "无",
          "desc": "计算 SHA-256 校验值。当前推荐的完整性校验算法。"
        },
        {
          "flag": "-c <校验文件>, --check",
          "default": "关闭",
          "desc": "按校验文件验证。"
        },
        {
          "flag": "--status",
          "default": "关闭",
          "desc": "不输出内容，仅用退出码表示校验结果。"
        },
        {
          "flag": "--quiet",
          "default": "关闭",
          "desc": "只报告校验失败的条目。"
        },
        {
          "flag": "--ignore-missing",
          "default": "关闭",
          "desc": "忽略缺失的文件条目。"
        },
        {
          "flag": "-b",
          "default": "文本模式",
          "desc": "二进制模式，输出中以 * 标记。"
        },
        {
          "flag": "（对比 md5sum）",
          "default": "无",
          "desc": "同系列还有 sha1sum、sha512sum，用法一致；SHA-1 亦已不安全，新场景应选 SHA-256 及以上。"
        }
      ],
      "sample": {
        "output": "$ sha256sum file.iso\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  file.iso",
        "explain": "输出 64 位 SHA-256 摘要，比 MD5 更安全，是当今主流的文件完整性校验方式。"
      }
    },
    {
      "name": "sha1sum",
      "category": "text",
      "description": "计算或校验 SHA-1 摘要；安全性不足，仅用于兼容性校验，不建议用于安全场景。",
      "keywords": [
        "sha1",
        "校验和",
        "sha1sum"
      ],
      "examples": [
        {
          "cmd": "sha1sum file",
          "desc": "计算 SHA-1"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ sha1sum file.txt\nda39a3ee5e6b4b0d3255bfef95601890afd80709  file.txt",
        "explain": "输出 40 位 SHA-1 摘要；因已被证明可碰撞，仅用于兼容旧系统，新场景建议 SHA-256。"
      }
    },
    {
      "name": "iconv",
      "category": "text",
      "description": "在不同字符编码间转换文本（如 GBK 与 UTF-8），处理乱码文件时必备。",
      "keywords": [
        "编码转换",
        "iconv"
      ],
      "examples": [
        {
          "cmd": "iconv -f gbk -t utf-8 in.txt -o out.txt",
          "desc": "GBK 转 UTF-8"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-f <编码>, --from-code",
          "default": "无",
          "desc": "源编码，必须显式指定。"
        },
        {
          "flag": "-t <编码>, --to-code",
          "default": "无",
          "desc": "目标编码。常用 UTF-8、GBK、GB18030、ISO-8859-1。"
        },
        {
          "flag": "-o <文件>, --output",
          "default": "标准输出",
          "desc": "输出到文件。切勿把输出重定向到输入文件，会导致内容被清空。"
        },
        {
          "flag": "-l, --list",
          "default": "关闭",
          "desc": "列出全部支持的编码名称。"
        },
        {
          "flag": "-c",
          "default": "关闭",
          "desc": "丢弃无法转换的字符继续处理，而非中途报错退出。"
        },
        {
          "flag": "//IGNORE",
          "default": "无",
          "desc": "附加在目标编码后，作用同 -c，如 -t UTF-8//IGNORE。"
        },
        {
          "flag": "//TRANSLIT",
          "default": "无",
          "desc": "无法表示的字符用近似字符替代，如带音标字母转为普通字母。"
        },
        {
          "flag": "（编码探测）",
          "default": "无",
          "desc": "iconv 不会自动识别源编码，可先用 file -i 或 chardet 判断。"
        }
      ],
      "sample": {
        "output": "$ iconv -f GBK -t UTF-8 old.txt > new.txt\n$ file new.txt\nnew.txt: Unicode text, UTF-8",
        "explain": "`iconv -f GBK -t UTF-8` 把 GBK 编码转成 UTF-8；`file` 确认结果已为 UTF-8，解决乱码。"
      }
    },
    {
      "name": "jq",
      "category": "text",
      "description": "解析、过滤与重构 JSON 数据，支持路径表达式与管道，是处理 API 响应的利器。",
      "keywords": [
        "json",
        "json处理",
        "jq"
      ],
      "examples": [
        {
          "cmd": "cat data.json | jq '.name'",
          "desc": "提取字段"
        },
        {
          "cmd": "jq '.[] | .id' list.json",
          "desc": "遍历取 id"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "jq 表达式用单引号包裹，避免被 shell 展开",
      "compare": null,
      "options": [
        {
          "flag": "'.'",
          "default": "无",
          "desc": "输出并美化整个 JSON。最简单的格式化用法。"
        },
        {
          "flag": "'.key' / '.a.b'",
          "default": "无",
          "desc": "按路径取值。路径不存在返回 null 而不报错。"
        },
        {
          "flag": "'.[]'",
          "default": "无",
          "desc": "遍历数组的每个元素；.[0] 取指定下标。"
        },
        {
          "flag": "-r, --raw-output",
          "default": "关闭",
          "desc": "输出裸字符串，去掉外层引号。取值赋给 shell 变量时必备。"
        },
        {
          "flag": "-c, --compact-output",
          "default": "关闭",
          "desc": "紧凑单行输出，适用于逐行处理。"
        },
        {
          "flag": "-e, --exit-status",
          "default": "关闭",
          "desc": "结果为 null 或 false 时返回非零退出码，便于脚本判断。"
        },
        {
          "flag": "-n, --null-input",
          "default": "关闭",
          "desc": "不读输入，用于从零构造 JSON。"
        },
        {
          "flag": "--arg <名> <值>",
          "default": "无",
          "desc": "传入字符串变量，避免手工拼接引号导致注入。"
        },
        {
          "flag": "-s, --slurp",
          "default": "关闭",
          "desc": "把多个输入对象收集为一个数组后再处理。"
        },
        {
          "flag": "select(<条件>)",
          "default": "无",
          "desc": "过滤，如 '.[] | select(.age > 30)'。"
        },
        {
          "flag": "（错误处理）",
          "default": "无",
          "desc": "对 null 使用对象取值会报错，可用 '.a?' 或 // 提供默认值来容错。"
        }
      ],
      "sample": {
        "output": "$ echo '{\"name\":\"alice\",\"age\":30}' | jq '.name'\n\"alice\"\n$ echo '{\"users\":[{\"n\":\"a\"},{\"n\":\"b\"}]}' | jq '.users[].n'\n\"a\"\n\"b\" ",
        "explain": "第1条 `jq '.name'` 取 JSON 的 name 字段，输出 \"alice\"。\n第2条 `.users[].n` 遍历数组取每个元素的 n，输出 a、b。jq 是命令行处理 JSON 的利器。"
      }
    },
    {
      "name": "rev",
      "category": "text",
      "description": "将每一行字符顺序反转，偶尔用于特殊文本处理或巧妙的格式判断。",
      "keywords": [
        "反转",
        "rev"
      ],
      "examples": [
        {
          "cmd": "rev file.txt",
          "desc": "逐行逆序输出"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo 'hello' | rev\nolleh",
        "explain": "`rev` 将每行字符顺序反转；hello → olleh，常用于简单字符串处理。"
      }
    },
    {
      "name": "column",
      "category": "text",
      "description": "把文本按列对齐成表格，配合 -t 自动识别分隔符，让输出更易读。",
      "keywords": [
        "列对齐",
        "column"
      ],
      "examples": [
        {
          "cmd": "column -t file.txt",
          "desc": "按空白对齐成表"
        },
        {
          "cmd": "ls | column",
          "desc": "多列显示"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ printf 'a 1\nb 2\n' | column -t\na  1\nb  2",
        "explain": "`column -t` 把输入按空白对齐成规整表格列，提升多列数据的可读性。"
      }
    },
    {
      "name": "shuf",
      "category": "text",
      "description": "随机打乱文本行，-n 取前 N 行，可用于随机抽样或生成随机顺序。",
      "keywords": [
        "随机",
        "shuffle",
        "shuf"
      ],
      "examples": [
        {
          "cmd": "shuf -n 3 file.txt",
          "desc": "随机取3行"
        },
        {
          "cmd": "shuf file.txt",
          "desc": "全量洗牌"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ shuf -n 2 names.txt\nbob\nalice",
        "explain": "`shuf -n 2` 从输入中随机取 2 行，用于随机抽样或打乱顺序。"
      }
    },
    {
      "name": "numfmt",
      "category": "text",
      "description": "在人类可读数（如 1K/1.5M）与原始整数之间互转，便于展示与计算。",
      "keywords": [
        "数字格式化",
        "numfmt"
      ],
      "examples": [
        {
          "cmd": "numfmt --to=iec 1048576",
          "desc": "转为 1.0M"
        },
        {
          "cmd": "echo 1K | numfmt --from=iec",
          "desc": "转为 1024"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ numfmt --to=si 1536\n1.5K",
        "explain": "`numfmt` 在数值与可读格式间转换；`--to=si` 把 1536 字节表示为 1.5K。"
      }
    },
    {
      "name": "colrm",
      "category": "text",
      "description": "删除每行指定列范围（从起始列到结束列）的字符，简单裁剪固定宽度文本。",
      "keywords": [
        "删除列",
        "colrm"
      ],
      "examples": [
        {
          "cmd": "colrm 10 20 < file",
          "desc": "删第10-20列"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo 'abcdef' | colrm 3 4\nabef",
        "explain": "`colrm 3 4` 删除每行的第 3–4 列（字符位置）；abcdef → 删掉 cd 得 abef。"
      }
    },
    {
      "name": "look",
      "category": "text",
      "description": "在排序字典中查找以某前缀开头的单词/行，做补全或词表查询很方便。",
      "keywords": [
        "前缀查找",
        "look"
      ],
      "examples": [
        {
          "cmd": "look foo",
          "desc": "找以 foo 开头的词"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ look 'phone' dict.txt\nphone\nphoneme",
        "explain": "`look` 在已排序的字典/文件中查找以给定前缀开头的行；此处列出 phone 开头词。"
      }
    },
    {
      "name": "tsort",
      "category": "text",
      "description": "按「A 必须在 B 之前」的依赖关系做拓扑排序，常用于构建顺序求解。",
      "keywords": [
        "拓扑排序",
        "tsort"
      ],
      "examples": [
        {
          "cmd": "tsort deps.txt",
          "desc": "按依赖排序"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ tsort <<'EOF'\na b\nb c\nEOF\na\nb\nc",
        "explain": "`tsort` 对依赖关系做拓扑排序；输入 a→b、b→c，输出满足先后依赖的顺序 a,b,c。"
      }
    },
    {
      "name": "chcon",
      "category": "perm",
      "description": "临时修改 SELinux 安全上下文，让文件匹配服务所需类型以解除访问拒绝。",
      "keywords": [
        "selinux",
        "上下文",
        "chcon"
      ],
      "examples": [
        {
          "cmd": "chcon -t httpd_sys_content_t /srv/www",
          "desc": "改文件上下文"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "重启或 restorecon 可能还原上下文，需配合 semanage 持久化",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ chcon -t httpd_sys_content_t /srv/www/index.html\n$ ls -Z /srv/www/index.html\nunconfined_u:object_r:httpd_sys_content_t:s0 index.html",
        "explain": "`chcon` 临时修改 SELinux 安全上下文类型（此处设为 Web 内容类型），`ls -Z` 确认生效。\n重启或 restorecon 可能还原。"
      }
    },
    {
      "name": "restorecon",
      "category": "perm",
      "description": "按 SELinux 策略把文件上下文恢复到默认值，修复因拷贝导致的上下文错误。",
      "keywords": [
        "selinux",
        "restorecon"
      ],
      "examples": [
        {
          "cmd": "restorecon -Rv /srv/www",
          "desc": "递归恢复目录上下文"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ restorecon -v /srv/www/index.html\nRelabeled /srv/www/index.html from unconfined_u:object_r:default_t:s0 to unconfined_u:object_r:httpd_sys_content_t:s0",
        "explain": "`restorecon` 依据策略把文件上下文恢复为默认值；输出显示从 default_t 改回 httpd_sys_content_t。"
      }
    },
    {
      "name": "getenforce",
      "category": "perm",
      "description": "查看 SELinux 当前模式（Enforcing/Permissive/Disabled），判断访问被拒是否源于它。",
      "keywords": [
        "selinux",
        "模式",
        "getenforce"
      ],
      "examples": [
        {
          "cmd": "getenforce",
          "desc": "显示 Enforcing/Permissive"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ getenforce\nEnforcing",
        "explain": "显示 SELinux 当前模式：Enforcing（强制拦截违规）、Permissive（仅记录）、Disabled（关闭）。"
      }
    },
    {
      "name": "setenforce",
      "category": "perm",
      "description": "临时切换 SELinux 模式（0=Permissive，1=Enforcing），排查策略问题时常用。",
      "keywords": [
        "selinux",
        "setenforce"
      ],
      "examples": [
        {
          "cmd": "setenforce 0",
          "desc": "临时置 Permissive"
        },
        {
          "cmd": "setenforce 1",
          "desc": "置 Enforcing"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "仅临时生效，重启后恢复；永久需改 /etc/selinux/config",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ setenforce 0\n$ getenforce\nPermissive",
        "explain": "`setenforce 0` 临时切到 Permissive（仅告警不拦截），`1` 切回 Enforcing；重启后失效，需改配置文件持久化。"
      }
    },
    {
      "name": "setfattr",
      "category": "perm",
      "description": "设置用户自定义扩展属性（xattr），把元数据（如备注）附加到文件上。",
      "keywords": [
        "扩展属性",
        "xattr",
        "setfattr"
      ],
      "examples": [
        {
          "cmd": "setfattr -n user.remark -v 'test' file",
          "desc": "写入扩展属性"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ setfattr -n user.note -v 'reviewed' file.txt\n$ getfattr -n user.note file.txt\nuser.note=\"reviewed\" ",
        "explain": "`setfattr -n user.note -v 'reviewed'` 给文件加自定义扩展属性 user.note。\n`getfattr` 读回该属性值 reviewed，适合附加元数据而不改文件内容。"
      }
    },
    {
      "name": "getfattr",
      "category": "perm",
      "description": "查看文件的扩展属性（xattr）键值，读取 setfattr 写入的自定义元数据。",
      "keywords": [
        "扩展属性",
        "xattr",
        "getfattr"
      ],
      "examples": [
        {
          "cmd": "getfattr -d file",
          "desc": "显示全部扩展属性"
        },
        {
          "cmd": "getfattr -n user.remark file",
          "desc": "查看指定属性"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ getfattr -d -m - file.txt\nuser.note=\"reviewed\"\nuser.owner=\"alice\" ",
        "explain": "`getfattr -d -m -` 列出文件全部用户扩展属性；输出 user.note 与 user.owner 等键值对。"
      }
    },
    {
      "name": "groupmod",
      "category": "user",
      "description": "修改用户组属性，如 -n 重命名组。",
      "keywords": [
        "修改组",
        "groupmod"
      ],
      "examples": [
        {
          "cmd": "groupmod -n newname oldname",
          "desc": "重命名组"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ groupmod -n developers dev\n$ getent group developers\ndevelopers:x:1002:",
        "explain": "`groupmod -n developers dev` 把组 dev 重命名为 developers；`getent` 显示新组名生效。"
      }
    },
    {
      "name": "chage",
      "category": "user",
      "description": "设置/查看密码有效期（最长使用期、过期告警），强制定期改密。",
      "keywords": [
        "密码过期",
        "chage"
      ],
      "examples": [
        {
          "cmd": "chage -l alice",
          "desc": "查看过期信息"
        },
        {
          "cmd": "chage -M 90 alice",
          "desc": "密码最长90天"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ chage -l alice\nLast password change: Aug 01, 2026\nPassword expires: never\nAccount expires: never",
        "explain": "`chage -l` 列出密码/账户过期策略；此处密码永不过期，用于审计账号安全设置。"
      }
    },
    {
      "name": "chsh",
      "category": "user",
      "description": "修改用户的登录 shell，如切到 /bin/zsh。",
      "keywords": [
        "修改shell",
        "chsh"
      ],
      "examples": [
        {
          "cmd": "chsh -s /bin/bash alice",
          "desc": "改登录 Shell"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ chsh -s /bin/zsh\nPassword: \nShell changed.",
        "explain": "`chsh -s /bin/zsh` 把登录 shell 改为 zsh；输入密码后提示 Shell changed，下次登录生效。"
      }
    },
    {
      "name": "chfn",
      "category": "user",
      "description": "修改用户的 finger 信息（全名、电话等），更新目录资料。",
      "keywords": [
        "finger信息",
        "chfn"
      ],
      "examples": [
        {
          "cmd": "chfn -f 'Alice Li' alice",
          "desc": "改真实姓名"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ chfn -f 'Alice Wang' alice\nPassword: \nfinger information changed.",
        "explain": "`chfn -f` 设置用户的全名(finger 信息)；保存后 finger 可查到该名称。"
      }
    },
    {
      "name": "getent",
      "category": "user",
      "description": "查询系统管理数据库（passwd/group/hosts 等），兼容 NSS 配置。",
      "keywords": [
        "查询数据库",
        "getent"
      ],
      "examples": [
        {
          "cmd": "getent passwd alice",
          "desc": "查用户信息"
        },
        {
          "cmd": "getent hosts example.com",
          "desc": "解析主机"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "getent 综合本地文件与 NSS(如 LDAP)，比直接读 /etc/passwd 更准",
      "options": [
        {
          "flag": "passwd [用户]",
          "default": "无",
          "desc": "查询用户信息。会同时查本地文件与 LDAP 等网络数据源，比直接读 /etc/passwd 更完整。"
        },
        {
          "flag": "group [组名]",
          "default": "无",
          "desc": "查询用户组信息。"
        },
        {
          "flag": "hosts <主机名>",
          "default": "无",
          "desc": "按系统解析顺序查询主机，含 /etc/hosts 与 DNS。"
        },
        {
          "flag": "services <服务名或端口>",
          "default": "无",
          "desc": "查询服务与端口的对应关系。"
        },
        {
          "flag": "ahosts <主机名>",
          "default": "无",
          "desc": "同时返回 IPv4 与 IPv6 结果。"
        },
        {
          "flag": "（退出码）",
          "default": "无",
          "desc": "未找到条目时返回 2，可用于脚本判断用户或组是否存在。"
        },
        {
          "flag": "（数据源）",
          "default": "无",
          "desc": "遵循 /etc/nsswitch.conf 中配置的查询顺序。"
        }
      ],
      "sample": {
        "output": "$ getent passwd alice\nalice:x:1001:1001:Alice:/home/alice:/bin/bash",
        "explain": "`getent passwd alice` 通过系统名称服务(NSS)查询用户，兼容本地与 LDAP/SSSD 等后端，比直接读 /etc/passwd 更通用。"
      }
    },
    {
      "name": "logname",
      "category": "user",
      "description": "显示当前登录的初始用户名（不受 su 影响）。",
      "keywords": [
        "登录名",
        "logname"
      ],
      "examples": [
        {
          "cmd": "logname",
          "desc": "打印登录账号"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ logname\nuser",
        "explain": "输出最初登录的用户名（不受 su/sudo 影响），区别于 whoami 的当前有效身份。"
      }
    },
    {
      "name": "faillog",
      "category": "user",
      "description": "查看登录失败记录，-u 指定用户，发现暴力破解迹象。",
      "keywords": [
        "失败登录",
        "faillog"
      ],
      "examples": [
        {
          "cmd": "faillog -u alice",
          "desc": "查看某用户失败记录"
        },
        {
          "cmd": "faillog -a",
          "desc": "全部用户"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ faillog -u alice\nUsername   Failures  Latest    On\nalice         3       08/04/26   pts/0",
        "explain": "`faillog -u alice` 显示该用户登录失败次数(3)与最近失败时间，用于发现暴力破解迹象。"
      }
    },
    {
      "name": "nologin",
      "category": "user",
      "description": "设为不可交互登录的 shell，用于仅跑服务的系统账号。",
      "keywords": [
        "禁止登录",
        "nologin"
      ],
      "examples": [
        {
          "cmd": "usermod -s /usr/sbin/nologin alice",
          "desc": "禁止该用户交互登录"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ nologin\nThis account is currently not available.",
        "explain": "`nologin` 作为不可登录账号的 shell，执行即返回\"账户不可用\"提示并拒绝登录，常用于服务账号。"
      }
    },
    {
      "name": "vipw",
      "category": "user",
      "description": "安全编辑 /etc/passwd（带锁与校验），避免并发写坏文件。",
      "keywords": [
        "编辑passwd",
        "vipw"
      ],
      "examples": [
        {
          "cmd": "vipw",
          "desc": "锁定并编辑口令文件"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "vipw 编辑时加锁避免并发损坏；对应组文件用 vigr",
      "options": null,
      "sample": {
        "output": "$ vipw\n(locked /etc/passwd, syntax-checked edit; saved)",
        "explain": "`vipw` 以加锁+语法校验方式编辑 /etc/passwd，防止并发写损坏导致无法登录。"
      }
    },
    {
      "name": "pwck",
      "category": "user",
      "description": "校验 /etc/passwd 与 /etc/shadow 的一致性，发现异常条目。",
      "keywords": [
        "校验passwd",
        "pwck"
      ],
      "examples": [
        {
          "cmd": "pwck",
          "desc": "检查账号文件完整性"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pwck\nuser 'lp': directory '/var/spool/lpd' does not exist\npwck: no changes",
        "explain": "`pwck` 校验 /etc/passwd 与 /etc/shadow 一致性（如家目录是否存在）；此处仅告警、未改动。"
      }
    },
    {
      "name": "pstree",
      "category": "proc",
      "description": "以树状显示进程间父子关系，直观看清谁启动了谁。",
      "keywords": [
        "进程树",
        "pstree"
      ],
      "examples": [
        {
          "cmd": "pstree",
          "desc": "树状列出进程"
        },
        {
          "cmd": "pstree -p",
          "desc": "附带 PID"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "pstree 直观展示父子关系；ps 更偏表格字段",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "以树状显示进程父子关系，默认合并相同名称的进程。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "显示 PID。开启后不再合并同名进程。"
        },
        {
          "flag": "-u",
          "default": "关闭",
          "desc": "在用户发生变化处显示用户名。"
        },
        {
          "flag": "-a",
          "default": "关闭",
          "desc": "显示完整命令行参数。"
        },
        {
          "flag": "-h",
          "default": "关闭",
          "desc": "高亮当前进程及其祖先链。"
        },
        {
          "flag": "-s <PID>",
          "default": "无",
          "desc": "只显示指定进程的父级链路。追溯进程来源时很有用。"
        },
        {
          "flag": "-T",
          "default": "关闭",
          "desc": "隐藏线程，只显示进程。"
        },
        {
          "flag": "<用户名>",
          "default": "全部",
          "desc": "只显示指定用户的进程树。"
        }
      ],
      "sample": {
        "output": "$ pstree -p | head -5\nsystemd(1)─┬─sshd(812)───sshd(1050)───bash(1051)───vim(1234)\n           └─nginx(900)─┬─nginx(901)\n                        └─nginx(902)",
        "explain": "`pstree -p` 以树状展示进程父子关系（含 PID）；可见 vim 由 bash 派生、nginx 多 worker 由主进程 fork。"
      }
    },
    {
      "name": "fuser",
      "category": "proc",
      "description": "识别正占用某文件/端口/文件系统的进程，-k 可直接结束它们。",
      "keywords": [
        "占用进程",
        "fuser"
      ],
      "examples": [
        {
          "cmd": "fuser -k /mnt",
          "desc": "杀掉占用该目录的进程"
        },
        {
          "cmd": "fuser -n tcp 80",
          "desc": "查占用 80 端口的进程"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "fuser -k 会直接发 SIGKILL，慎用",
      "compare": null,
      "options": [
        {
          "flag": "<文件或目录>",
          "default": "无",
          "desc": "列出正在使用该文件的进程 PID。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "详细模式，显示用户、PID、访问类型与命令名。"
        },
        {
          "flag": "-m <挂载点>, --mount",
          "default": "无",
          "desc": "列出使用该文件系统的所有进程。umount 报「device is busy」时用它定位。"
        },
        {
          "flag": "-k, --kill",
          "default": "关闭",
          "desc": "杀死占用该文件的所有进程。影响面大，务必先用 -v 确认。"
        },
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "配合 -k 时逐个询问确认。"
        },
        {
          "flag": "-n tcp <端口>",
          "default": "无",
          "desc": "查询占用指定 TCP 端口的进程。"
        },
        {
          "flag": "-u",
          "default": "关闭",
          "desc": "在 PID 后附加所属用户名。"
        },
        {
          "flag": "（访问类型字母）",
          "default": "无",
          "desc": "输出中 c 为当前目录、e 为可执行文件、f 为打开的文件、r 为根目录、m 为映射文件。"
        }
      ],
      "sample": {
        "output": "$ fuser -m /mnt/data\n/mnt/data:  1234c  1250m\n$ fuser -k /mnt/data\n(终止占用进程后卸载)",
        "explain": "`fuser -m /mnt/data` 显示正在使用该挂载点的进程（c=当前目录、m=映射）；`-k` 杀死它们，便于安全卸载。"
      }
    },
    {
      "name": "ionice",
      "category": "proc",
      "description": "设置进程的 I/O 调度优先级，降低后台任务的磁盘争抢。",
      "keywords": [
        "io优先级",
        "ionice"
      ],
      "examples": [
        {
          "cmd": "ionice -c 3 -p 1234",
          "desc": "设为空闲级"
        },
        {
          "cmd": "ionice -c 2 -n 0 tar cf x.tar /data",
          "desc": "高优执行"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ionice -c 3 -p 4001\n$ ionice -p 4001\nnone: prio 0",
        "explain": "`ionice -c 3` 把进程设为 idle 磁盘调度类（仅在空闲时读写），避免拖慢系统；`-p` 作用于已运行 PID。"
      }
    },
    {
      "name": "taskset",
      "category": "proc",
      "description": "把进程绑定到指定 CPU 核心，提升缓存命中或隔离负载。",
      "keywords": [
        "cpu亲和性",
        "taskset"
      ],
      "examples": [
        {
          "cmd": "taskset -c 0,1 ./app",
          "desc": "限定用 CPU0/1"
        },
        {
          "cmd": "taskset -p 0x3 1234",
          "desc": "查看/设置掩码"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ taskset -c 0,1 ./app\n$ taskset -p 4001\npid 4001's current affinity mask: 3",
        "explain": "`taskset -c 0,1` 把进程绑定到 CPU 0 和 1；`taskset -p` 显示亲和掩码 3(二进制 11)即第0/1核，用于 NUMA/性能调优。"
      }
    },
    {
      "name": "pmap",
      "category": "proc",
      "description": "显示进程的内存映射，分析内存占用分布与泄漏线索。",
      "keywords": [
        "内存映射",
        "pmap"
      ],
      "examples": [
        {
          "cmd": "pmap 1234",
          "desc": "查看进程内存分布"
        },
        {
          "cmd": "pmap -x 1234",
          "desc": "含详细扩展信息"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ pmap -x 1234 | tail -3\n total kB        1224000  215000  180000\n$ pmap 1234 | head -3\n1234:   vim app.js\n000055d...  r-xp ... /usr/bin/vim",
        "explain": "`pmap -x` 显示进程内存映射明细；total 行给出虚拟/常驻/可写内存总量(kB)，定位内存泄漏时有用。"
      }
    },
    {
      "name": "service",
      "category": "proc",
      "description": "SysV 风格的服务管理（start/stop/restart/status），老系统常用。",
      "keywords": [
        "服务管理",
        "service"
      ],
      "examples": [
        {
          "cmd": "service nginx restart",
          "desc": "重启服务"
        },
        {
          "cmd": "service ssh status",
          "desc": "查状态"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "systemd 系统下 service 多为兼容封装，建议优先用 systemctl",
      "options": [
        {
          "flag": "<服务名> start|stop|restart|status",
          "default": "无",
          "desc": "SysV 风格的服务操作。在 systemd 系统上会被自动转发给 systemctl。"
        },
        {
          "flag": "--status-all",
          "default": "无",
          "desc": "列出所有服务的状态概览。"
        },
        {
          "flag": "<服务名> reload",
          "default": "无",
          "desc": "重新加载配置。"
        },
        {
          "flag": "（局限）",
          "default": "无",
          "desc": "无法管理开机自启，也不显示 systemd 的详细状态与日志，新系统建议直接用 systemctl。"
        }
      ],
      "sample": {
        "output": "$ service nginx status\n* nginx is running\n$ service nginx restart\n* Restarting nginx... done.",
        "explain": "`service nginx status` 查看服务状态；`restart` 重启。底层调用 SysV 脚本，systemd 系统建议用 systemctl。"
      }
    },
    {
      "name": "tmux",
      "category": "proc",
      "description": "终端复用器，在一个终端里管理多个会话/窗口，断开后任务仍在后台运行。",
      "keywords": [
        "终端复用",
        "会话",
        "tmux"
      ],
      "examples": [
        {
          "cmd": "tmux new -s work",
          "desc": "新建会话"
        },
        {
          "cmd": "tmux attach -t work",
          "desc": "重连会话"
        },
        {
          "cmd": "tmux ls",
          "desc": "列出会话"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "脱离会话用 Ctrl+b d；关闭终端不会杀死 tmux 内进程",
      "compare": null,
      "options": [
        {
          "flag": "new -s <名称>",
          "default": "无",
          "desc": "创建具名会话。具名后便于之后精确 attach。"
        },
        {
          "flag": "ls, list-sessions",
          "default": "无",
          "desc": "列出所有会话。"
        },
        {
          "flag": "a -t <名称>, attach",
          "default": "无",
          "desc": "接入已有会话。SSH 断线后恢复工作现场的关键。"
        },
        {
          "flag": "detach（前缀 + d）",
          "default": "无",
          "desc": "从会话分离但保持其后台运行。"
        },
        {
          "flag": "kill-session -t <名称>",
          "default": "无",
          "desc": "终止指定会话。"
        },
        {
          "flag": "前缀键 Ctrl+b",
          "default": "Ctrl+b",
          "desc": "所有快捷键都需先按前缀键。可在配置中改为 Ctrl+a。"
        },
        {
          "flag": "前缀 + c / n / p / <数字>",
          "default": "无",
          "desc": "新建窗口、切到下一个、上一个、指定编号窗口。"
        },
        {
          "flag": "前缀 + % / \"",
          "default": "无",
          "desc": "分别为垂直与水平分割窗格。"
        },
        {
          "flag": "前缀 + 方向键",
          "default": "无",
          "desc": "在窗格间移动焦点。"
        },
        {
          "flag": "前缀 + [",
          "default": "无",
          "desc": "进入复制模式，可用方向键翻阅历史输出，按 q 退出。"
        }
      ],
      "sample": {
        "output": "$ tmux new -s dev\n[detached (from session dev)]\n$ tmux ls\ndev: 1 windows (created Mon Aug 4 11:00)",
        "explain": "`tmux new -s dev` 新建名为 dev 的会话并可 detach；`tmux ls` 列出会话，便于重连 `tmux attach -t dev`。"
      }
    },
    {
      "name": "screen",
      "category": "proc",
      "description": "终端复用器，功能类似 tmux，可 detached 方式保持远程任务存活。",
      "keywords": [
        "终端复用",
        "screen"
      ],
      "examples": [
        {
          "cmd": "screen -S work",
          "desc": "新建会话"
        },
        {
          "cmd": "screen -r work",
          "desc": "恢复会话"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "screen 较老牌；tmux 更现代，二者择一即可",
      "options": [
        {
          "flag": "-S <名称>",
          "default": "无",
          "desc": "创建具名会话。"
        },
        {
          "flag": "-ls, --list",
          "default": "无",
          "desc": "列出所有会话及其状态。"
        },
        {
          "flag": "-r <名称>",
          "default": "无",
          "desc": "恢复已分离的会话。"
        },
        {
          "flag": "-x <名称>",
          "default": "无",
          "desc": "接入一个已被接入的会话，实现多人共享同一屏幕。"
        },
        {
          "flag": "-d -r <名称>",
          "default": "无",
          "desc": "先强制分离他处连接再接入。会话显示为 Attached 却连不上时使用。"
        },
        {
          "flag": "-dm <命令>",
          "default": "无",
          "desc": "以分离状态直接启动会话并执行命令。适用于脚本后台任务。"
        },
        {
          "flag": "前缀 Ctrl+a",
          "default": "Ctrl+a",
          "desc": "默认前缀键，与 bash 的行首快捷键冲突，是常见困扰点。"
        },
        {
          "flag": "前缀 + d / c / n / p",
          "default": "无",
          "desc": "分离会话、新建窗口、下一个、上一个窗口。"
        },
        {
          "flag": "（相比 tmux）",
          "default": "无",
          "desc": "screen 更老且几乎所有系统预装；tmux 分屏与配置能力更强，新环境优先选 tmux。"
        }
      ],
      "sample": {
        "output": "$ screen -S work\n[detached from 12345.work]\n$ screen -ls\nThere is a screen on:\n\t12345.work\t(Detached)",
        "explain": "`screen -S work` 新建会话；可 Ctrl+A D 分离，`screen -ls` 查看，`screen -r work` 恢复，功能类似 tmux。"
      }
    },
    {
      "name": "gdisk",
      "category": "disk",
      "description": "交互式 GPT 分区表工具，类似 fdisk 但面向现代 GUID 分区表。",
      "keywords": [
        "gpt分区",
        "gdisk"
      ],
      "examples": [
        {
          "cmd": "gdisk /dev/sda",
          "desc": "交互管理 GPT 分区"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "gdisk 用于 GPT；fdisk 主要用于 MBR",
      "options": [
        {
          "flag": "<设备>",
          "default": "无",
          "desc": "对 GPT 分区表进行交互式编辑，如 gdisk /dev/sdb。"
        },
        {
          "flag": "-l",
          "default": "关闭",
          "desc": "只列出分区表，不进入交互模式。"
        },
        {
          "flag": "交互键 p / n / d",
          "default": "无",
          "desc": "p 打印分区表，n 新建分区，d 删除分区。"
        },
        {
          "flag": "交互键 w",
          "default": "无",
          "desc": "写入更改并退出。在此之前所有修改都只存在于内存中。"
        },
        {
          "flag": "交互键 q",
          "default": "无",
          "desc": "不保存直接退出，是发现操作有误时的退路。"
        },
        {
          "flag": "交互键 t",
          "default": "无",
          "desc": "更改分区类型代码，如 8300 Linux、8200 swap、ef00 EFI。"
        },
        {
          "flag": "（与 fdisk 区别）",
          "default": "无",
          "desc": "gdisk 面向 GPT，fdisk 传统上面向 MBR；超过 2TB 的磁盘必须用 GPT。"
        }
      ],
      "sample": {
        "output": "$ gdisk -l /dev/sdb\nPartition table: GPT\nNumber  Start End    Size   Code  Name\n   1    2048  33554431 16.0G 8300  Linux",
        "explain": "`gdisk` 是 GPT 分区表专用工具；`-l` 列出 GPT 分区（Code 8300=Linux）。比 fdisk 更适合 >2T 磁盘。"
      }
    },
    {
      "name": "partprobe",
      "category": "disk",
      "description": "通知内核重新读取分区表，分区改动后让系统识别新分区而无需重启。",
      "keywords": [
        "重读分区表",
        "partprobe"
      ],
      "examples": [
        {
          "cmd": "partprobe /dev/sda",
          "desc": "分区后刷新内核"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "分区后未 partprobe 可能导致设备节点未生成",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ partprobe /dev/sdb\n$ lsblk /dev/sdb\nsdb      8:16 0 16G 0 disk\n└─sdb1   8:17 0 16G 0 part",
        "explain": "`partprobe` 通知内核重新读取分区表（改完分区后无需重启）；`lsblk` 确认新分区 sdb1 已被内核识别。"
      }
    },
    {
      "name": "findmnt",
      "category": "disk",
      "description": "列出或查找已挂载的文件系统，按设备/挂载点/类型过滤，排查挂载很方便。",
      "keywords": [
        "挂载查看",
        "findmnt"
      ],
      "examples": [
        {
          "cmd": "findmnt",
          "desc": "树状显示挂载"
        },
        {
          "cmd": "findmnt /mnt",
          "desc": "查某挂载点"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "findmnt 信息比 mount 更易读，源自 util-linux",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "以树状列出所有挂载点，比 mount 的输出清晰得多。"
        },
        {
          "flag": "-t <类型>",
          "default": "全部",
          "desc": "按文件系统类型过滤。"
        },
        {
          "flag": "-S <源> / -T <目标>",
          "default": "无",
          "desc": "分别按源设备或挂载目标查询，-T 支持任意子路径反查所属挂载点。"
        },
        {
          "flag": "--fstab",
          "default": "关闭",
          "desc": "读取 /etc/fstab 而非当前挂载状态。可对比配置与实际是否一致。"
        },
        {
          "flag": "-D, --df",
          "default": "关闭",
          "desc": "以类似 df 的格式输出用量。"
        },
        {
          "flag": "-o <列名>",
          "default": "默认列集",
          "desc": "自定义输出列。"
        },
        {
          "flag": "-J, --json",
          "default": "关闭",
          "desc": "输出 JSON。"
        },
        {
          "flag": "-x, --verify",
          "default": "关闭",
          "desc": "校验 fstab 配置的正确性。修改 fstab 后重启前建议执行。"
        }
      ],
      "sample": {
        "output": "$ findmnt /data\nTARGET SOURCE    FSTYPE OPTIONS\n/data  /dev/sdb1 ext4   rw,relatime",
        "explain": "`findmnt /data` 显示某挂载点的来源设备、文件系统类型与挂载选项；排查挂载问题很方便。"
      }
    },
    {
      "name": "hdparm",
      "category": "disk",
      "description": "查看/设置 IDE 与 SATA 硬盘参数（如缓存、省电、安全擦除），需谨慎。",
      "keywords": [
        "硬盘参数",
        "hdparm"
      ],
      "examples": [
        {
          "cmd": "hdparm -I /dev/sda",
          "desc": "查看盘信息"
        },
        {
          "cmd": "hdparm -t /dev/sda",
          "desc": "测顺序读速"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "写参数类选项有风险，只读查询更安全",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ hdparm -Tt /dev/sda\n Timing cached reads:   12345 MB in 2.00 seconds = 6172 MB/sec\n Timing buffered disk reads: 560 MB in 3.00 seconds = 186 MB/sec",
        "explain": "`hdparm -Tt` 测磁盘速度：cached 为缓存读(反映 CPU/内存)、buffered 为实际盘读；此处顺序读约 186 MB/s。"
      }
    },
    {
      "name": "smartctl",
      "category": "disk",
      "description": "读取硬盘 SMART 自检与健康数据，可提前预警磁盘故障。",
      "keywords": [
        "smart",
        "磁盘健康",
        "smartctl"
      ],
      "examples": [
        {
          "cmd": "smartctl -a /dev/sda",
          "desc": "查看健康与属性"
        },
        {
          "cmd": "smartctl -H /dev/sda",
          "desc": "整体健康自检"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "输出设备的全部 SMART 信息。最常用的总览方式。"
        },
        {
          "flag": "-H, --health",
          "default": "关闭",
          "desc": "只输出健康状态总评，PASSED 或 FAILED。适用于脚本巡检。"
        },
        {
          "flag": "-i, --info",
          "default": "关闭",
          "desc": "显示设备型号、序列号、固件与容量。"
        },
        {
          "flag": "-t <类型>",
          "default": "无",
          "desc": "启动自检，short 约 2 分钟，long 可能数小时。后台执行不影响使用。"
        },
        {
          "flag": "-l selftest",
          "default": "无",
          "desc": "查看自检历史记录与结果。"
        },
        {
          "flag": "-d <类型>",
          "default": "自动探测",
          "desc": "指定设备类型，如 sat、nvme、megaraid。RAID 卡后的磁盘必须显式指定。"
        },
        {
          "flag": "-s on",
          "default": "关闭",
          "desc": "启用 SMART 功能。部分设备出厂默认关闭。"
        },
        {
          "flag": "（关键指标）",
          "default": "无",
          "desc": "重点关注 Reallocated_Sector_Ct、Current_Pending_Sector、Offline_Uncorrectable，非零即预示磁盘退化。"
        }
      ],
      "sample": {
        "output": "$ smartctl -H /dev/sda\nSMART overall-health self-assessment test result: PASSED\n$ smartctl -A /dev/sda | head -3\nID# ATTRIBUTE  FLAG  VALUE WORST THRESH\n  5 Reallocated_Sector_Ct 0x0033 100 100 010",
        "explain": "`smartctl -H` 给出硬盘健康总评 PASSED；`-A` 列出 SMART 属性(VALUE 越低越差)，提前预警磁盘故障。"
      }
    },
    {
      "name": "cryptsetup",
      "category": "disk",
      "description": "管理 LUKS 磁盘加密，打开加密卷、格式化与改密，保护离线数据。",
      "keywords": [
        "加密",
        "luks",
        "cryptsetup"
      ],
      "examples": [
        {
          "cmd": "cryptsetup luksOpen /dev/sdb1 enc",
          "desc": "打开加密卷"
        },
        {
          "cmd": "cryptsetup luksFormat /dev/sdb1",
          "desc": "格式化加密"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "luksFormat 会清空分区数据，确认无误再执行",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ cryptsetup luksOpen /dev/sdb1 cryptdata\nEnter passphrase: \n$ ls /dev/mapper/cryptdata\n/dev/mapper/cryptdata",
        "explain": "`cryptsetup luksOpen` 用密码解锁 LUKS 加密分区并映射到 /dev/mapper/cryptdata，之后可 mount 使用；保护磁盘数据。"
      }
    },
    {
      "name": "mountpoint",
      "category": "disk",
      "description": "判断某个目录是否为挂载点，脚本中根据该结果决定后续操作。",
      "keywords": [
        "挂载点判断",
        "mountpoint"
      ],
      "examples": [
        {
          "cmd": "mountpoint /mnt",
          "desc": "返回是否为挂载点"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ mountpoint /data\n/data is a mountpoint\n$ mountpoint /home\n/home is not a mountpoint",
        "explain": "`mountpoint` 判断某路径是否为挂载点；/data 是(独立分区)，/home 不是(只是目录)，用于脚本条件判断。"
      }
    },
    {
      "name": "ssh-keygen",
      "category": "net",
      "description": "生成与管理 SSH 密钥对，-t ed25519 推荐，用于免密登录与身份认证。",
      "keywords": [
        "ssh密钥",
        "密钥生成",
        "ssh-keygen"
      ],
      "examples": [
        {
          "cmd": "ssh-keygen -t ed25519 -C 'me@x.com'",
          "desc": "生成 Ed25519 密钥"
        },
        {
          "cmd": "ssh-keygen -t rsa -b 4096",
          "desc": "生成 RSA 4096 密钥"
        },
        {
          "cmd": "ssh-keygen -p -f ~/.ssh/id_rsa",
          "desc": "修改私钥密码"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "私钥(~/.ssh/id_*)权限须为 600，过宽会被 ssh 拒绝",
      "compare": null,
      "options": [
        {
          "flag": "-t <类型>",
          "default": "rsa（新版为 ed25519）",
          "desc": "密钥类型，推荐 ed25519，安全性高且密钥短。"
        },
        {
          "flag": "-b <位数>",
          "default": "rsa 为 3072",
          "desc": "密钥长度。ed25519 长度固定，指定该选项无效。"
        },
        {
          "flag": "-C <注释>",
          "default": "user@host",
          "desc": "注释字段，通常填邮箱用于标识密钥归属。"
        },
        {
          "flag": "-f <文件>",
          "default": "~/.ssh/id_<类型>",
          "desc": "指定输出文件路径。生成多套密钥时必须区分。"
        },
        {
          "flag": "-N <密码>",
          "default": "交互式询问",
          "desc": "指定私钥保护口令，-N '' 表示无口令，适用于自动化但风险更高。"
        },
        {
          "flag": "-p",
          "default": "关闭",
          "desc": "更改已有私钥的口令，不重新生成密钥。"
        },
        {
          "flag": "-y",
          "default": "关闭",
          "desc": "由私钥重新导出公钥。适用于公钥丢失的情况。"
        },
        {
          "flag": "-l -f <公钥>",
          "default": "关闭",
          "desc": "显示密钥指纹。用于核对服务器指纹是否一致。"
        },
        {
          "flag": "-R <主机>",
          "default": "无",
          "desc": "从 known_hosts 中删除指定主机记录。服务器重装后报密钥变更时使用。"
        },
        {
          "flag": "（权限要求）",
          "default": "无",
          "desc": "私钥权限必须为 600、.ssh 目录为 700，否则 SSH 会拒绝使用该密钥。"
        }
      ],
      "sample": {
        "output": "$ ssh-keygen -t ed25519 -C 'user@host'\nGenerating public/private ed25519 key pair.\nYour public key has been saved in ~/.ssh/id_ed25519.pub\n$ cat ~/.ssh/id_ed25519.pub\nssh-ed25519 AAAA... user@host",
        "explain": "`ssh-keygen -t ed25519` 生成密钥对(更安全的 ed25519 算法)；公钥存 .pub，复制到服务器即可免密登录。"
      }
    },
    {
      "name": "ssh-copy-id",
      "category": "net",
      "description": "把本地公钥拷贝到远程主机的 authorized_keys，实现免密登录。",
      "keywords": [
        "拷贝公钥",
        "ssh-copy-id"
      ],
      "examples": [
        {
          "cmd": "ssh-copy-id user@host",
          "desc": "免密登录配置"
        },
        {
          "cmd": "ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host",
          "desc": "指定公钥"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<用户@主机>",
          "default": "无",
          "desc": "把本地公钥追加到远程 ~/.ssh/authorized_keys。首次需输入密码。"
        },
        {
          "flag": "-i <公钥文件>",
          "default": "~/.ssh/id_*.pub",
          "desc": "指定要上传的公钥。务必指向 .pub 文件，误传私钥会造成严重安全事故。"
        },
        {
          "flag": "-p <端口>",
          "default": "22",
          "desc": "指定 SSH 端口。"
        },
        {
          "flag": "-f",
          "default": "关闭",
          "desc": "跳过检查直接追加。可能造成 authorized_keys 中出现重复条目。"
        },
        {
          "flag": "-o <配置项>",
          "default": "无",
          "desc": "传递 ssh 配置项，如指定跳板机。"
        },
        {
          "flag": "（幂等性）",
          "default": "无",
          "desc": "默认会检测公钥是否已存在，重复执行不会新增重复行。"
        },
        {
          "flag": "（失败排查）",
          "default": "无",
          "desc": "若配置后仍要求密码，多为远程家目录或 .ssh 权限过宽，用 ssh -v 可看到具体拒绝原因。"
        }
      ],
      "sample": {
        "output": "$ ssh-copy-id user@192.168.1.10\nNumber of key(s) added: 1\n$ ssh user@192.168.1.10 'echo ok'\nok",
        "explain": "`ssh-copy-id` 把本地公钥自动追加到远端 ~/.ssh/authorized_keys；之后 ssh 无需输密码(返回 ok 验证免密成功)。"
      }
    },
    {
      "name": "telnet",
      "category": "net",
      "description": "Telnet 远程登录或做端口连通性探测（明文不安全，仅用于测试）。",
      "keywords": [
        "telnet",
        "端口测试"
      ],
      "examples": [
        {
          "cmd": "telnet host 23",
          "desc": "登录远程"
        },
        {
          "cmd": "telnet example.com 80",
          "desc": "手动探测 80 端口"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "明文传输不安全，仅建议用于端口连通性测试",
      "compare": null,
      "options": [
        {
          "flag": "<主机> <端口>",
          "default": "23",
          "desc": "连接指定端口。现主要用于测试 TCP 端口连通性，而非远程登录。"
        },
        {
          "flag": "（退出方式）",
          "default": "无",
          "desc": "按 Ctrl+] 进入命令模式后输入 quit；直接 Ctrl+C 常常无法退出。"
        },
        {
          "flag": "-l <用户>",
          "default": "无",
          "desc": "指定登录用户名。"
        },
        {
          "flag": "（安全风险）",
          "default": "无",
          "desc": "全程明文传输，包括密码，绝不可用于生产环境登录，应使用 ssh。"
        },
        {
          "flag": "（替代方案）",
          "default": "无",
          "desc": "仅测端口可用 nc -zv host port 或 timeout 3 bash -c '</dev/tcp/host/port'。"
        }
      ],
      "sample": {
        "output": "$ telnet smtp.example.com 25\nTrying 93.184.216.34...\nConnected to smtp.example.com.\n220 mailserver ESMTP",
        "explain": "`telnet host port` 建立原始 TCP 连接；此处连到 SMTP 25 端口并收到服务端横幅 220，常用于手动调试服务协议。"
      }
    },
    {
      "name": "hostname",
      "category": "net",
      "description": "查看或设置系统的主机名，脚本中常用 ${HOSTNAME} 等价方式获取。",
      "keywords": [
        "主机名",
        "hostname"
      ],
      "examples": [
        {
          "cmd": "hostname",
          "desc": "显示主机名"
        },
        {
          "cmd": "hostnamectl set-hostname web1",
          "desc": "永久设置(配合 systemd)"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "hostname 临时改；持久改主机名用 hostnamectl(无 systemd 时改 /etc/hostname)",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "显示当前主机名。"
        },
        {
          "flag": "-f, --fqdn",
          "default": "关闭",
          "desc": "显示完全限定域名。依赖 /etc/hosts 或 DNS 正确配置。"
        },
        {
          "flag": "-i / -I",
          "default": "关闭",
          "desc": "-i 显示解析出的 IP；-I 显示全部网卡地址，更可靠且不依赖 DNS。"
        },
        {
          "flag": "-s, --short",
          "default": "关闭",
          "desc": "只显示第一个点之前的短名称。"
        },
        {
          "flag": "<新主机名>",
          "default": "无",
          "desc": "临时设置主机名，重启后失效，需 root。"
        },
        {
          "flag": "（持久化）",
          "default": "无",
          "desc": "永久修改应使用 hostnamectl set-hostname 或写入 /etc/hostname。"
        }
      ],
      "sample": {
        "output": "$ hostname\nserver01\n$ hostnamectl set-hostname web01\n$ hostname\nweb01",
        "explain": "`hostname` 显示当前主机名；`hostnamectl set-hostname`(systemd) 永久修改，下次登录生效。"
      }
    },
    {
      "name": "nmcli",
      "category": "net",
      "description": "NetworkManager 的命令行管理，配置连接、Wi-Fi 与设备状态。",
      "keywords": [
        "网络管理",
        "nmcli"
      ],
      "examples": [
        {
          "cmd": "nmcli device status",
          "desc": "查看网卡状态"
        },
        {
          "cmd": "nmcli con up 'Wired'",
          "desc": "启用连接"
        },
        {
          "cmd": "nmcli radio wifi off",
          "desc": "关 Wi-Fi"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "device status, d",
          "default": "无",
          "desc": "查看所有网络设备的连接状态。"
        },
        {
          "flag": "connection show, c s",
          "default": "无",
          "desc": "列出所有连接配置；加连接名可查看该配置的全部参数。"
        },
        {
          "flag": "connection up / down <名称>",
          "default": "无",
          "desc": "启用或停用指定连接。"
        },
        {
          "flag": "device wifi list",
          "default": "无",
          "desc": "扫描并列出可用 Wi-Fi 热点。"
        },
        {
          "flag": "device wifi connect <SSID> password <密码>",
          "default": "无",
          "desc": "连接 Wi-Fi 并自动保存配置。"
        },
        {
          "flag": "connection modify <名称> <属性> <值>",
          "default": "无",
          "desc": "修改连接属性，如 ipv4.addresses、ipv4.gateway。"
        },
        {
          "flag": "-t, --terse",
          "default": "关闭",
          "desc": "精简输出，字段以冒号分隔，便于脚本解析。"
        },
        {
          "flag": "-f <字段>, --fields",
          "default": "全部",
          "desc": "只输出指定字段。"
        },
        {
          "flag": "（生效时机）",
          "default": "无",
          "desc": "modify 后需执行一次 down 再 up 才会应用，或使用 nmcli connection reload。"
        }
      ],
      "sample": {
        "output": "$ nmcli device status\nDEVICE  TYPE      STATE      CONNECTION\neth0    ethernet  connected  wired\nwlan0   wifi      disconnected  --\n$ nmcli con up wired",
        "explain": "`nmcli device status` 列出网络设备及连接状态；`con up wired` 激活名为 wired 的连接，管理 NetworkManager 网络。"
      }
    },
    {
      "name": "iperf3",
      "category": "net",
      "description": "网络带宽性能测试，一端做服务端、一端做客户端，测真实吞吐。",
      "keywords": [
        "带宽测试",
        "iperf3"
      ],
      "examples": [
        {
          "cmd": "iperf3 -s",
          "desc": "服务端"
        },
        {
          "cmd": "iperf3 -c server",
          "desc": "客户端测速"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需两端分别起 -s 与 -c；防火墙放行端口",
      "compare": null,
      "options": [
        {
          "flag": "-s, --server",
          "default": "关闭",
          "desc": "以服务端模式运行，默认监听 5201 端口。"
        },
        {
          "flag": "-c <服务端地址>, --client",
          "default": "无",
          "desc": "以客户端模式连接服务端发起测试。"
        },
        {
          "flag": "-p <端口>",
          "default": "5201",
          "desc": "指定端口，两端必须一致。"
        },
        {
          "flag": "-t <秒>, --time",
          "default": "10",
          "desc": "测试持续时间。"
        },
        {
          "flag": "-P <数量>, --parallel",
          "default": "1",
          "desc": "并发流数量。单流受窗口限制时，多流更能压满带宽。"
        },
        {
          "flag": "-u, --udp",
          "default": "关闭（默认 TCP）",
          "desc": "使用 UDP 测试，可测丢包与抖动。需配合 -b 指定目标速率。"
        },
        {
          "flag": "-b <带宽>, --bandwidth",
          "default": "TCP 无限 / UDP 1M",
          "desc": "限定目标带宽，如 -b 100M。"
        },
        {
          "flag": "-R, --reverse",
          "default": "关闭",
          "desc": "反向测试，由服务端向客户端发送，用于测下行速率。"
        },
        {
          "flag": "-i <秒>, --interval",
          "default": "1",
          "desc": "中间报告的输出间隔。"
        },
        {
          "flag": "-J, --json",
          "default": "关闭",
          "desc": "以 JSON 输出，便于自动化采集。"
        }
      ],
      "sample": {
        "output": "$ iperf3 -s &   # 服务端\n$ iperf3 -c 127.0.0.1\n[ ID] Interval  Transfer  Bitrate\n[  5] 0-1   sec 1.10 GBytes 9.45 Gbits/sec",
        "explain": "`iperf3` 测网络吞吐；服务端 `-s`、客户端 `-c` 连接，结果约 9.45 Gbit/s，用于评估带宽上限。"
      }
    },
    {
      "name": "ethtool",
      "category": "net",
      "description": "查看/配置网卡参数（速率、双工、驱动），排网络降速问题。",
      "keywords": [
        "网卡",
        "ethtool"
      ],
      "examples": [
        {
          "cmd": "ethtool eth0",
          "desc": "查速率/双工"
        },
        {
          "cmd": "ethtool -i eth0",
          "desc": "查驱动"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ethtool eth0\nSettings for eth0:\n\tSpeed: 1000Mb/s\n\tDuplex: Full\n\tLink detected: yes",
        "explain": "`ethtool eth0` 显示网卡速率(1000Mb/s)、双工模式与链路状态(yes)；排查网速不达标时确认协商结果。"
      }
    },
    {
      "name": "resolvectl",
      "category": "net",
      "description": "systemd 解析服务的管理与查询，查 DNS 解析与缓存。",
      "keywords": [
        "dns解析",
        "resolvectl"
      ],
      "examples": [
        {
          "cmd": "resolvectl query example.com",
          "desc": "DNS 查询"
        },
        {
          "cmd": "resolvectl status",
          "desc": "查看解析状态"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "无 systemd-resolved 的系统用 nslookup/dig 替代",
      "options": null,
      "sample": {
        "output": "$ resolvectl status\nGlobal\n       DNS Servers: 8.8.8.8\n        Protocols: +DNSSEC\nLink 2 (eth0):  Current DNS Server: 192.168.1.1",
        "explain": "`resolvectl status` 显示 systemd-resolved 的 DNS 配置：全局 8.8.8.8、网卡 eth0 当前 192.168.1.1，查 DNS 解析来源。"
      }
    },
    {
      "name": "route",
      "category": "net",
      "description": "查看或设置路由表，决定数据包走哪个网关（新系统多用 ip route）。",
      "keywords": [
        "路由",
        "route"
      ],
      "examples": [
        {
          "cmd": "route -n",
          "desc": "数字形式显示路由"
        },
        {
          "cmd": "route add default gw 192.168.1.1",
          "desc": "添加默认网关"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "route 偏传统；现代多用 ip route",
      "options": [
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "以数字形式显示，不做 DNS 反查。可避免长时间卡顿。"
        },
        {
          "flag": "add default gw <网关>",
          "default": "无",
          "desc": "添加默认网关。"
        },
        {
          "flag": "add -net <网段> netmask <掩码> gw <网关>",
          "default": "无",
          "desc": "添加指定网段的静态路由。"
        },
        {
          "flag": "del <目标>",
          "default": "无",
          "desc": "删除路由条目。"
        },
        {
          "flag": "-e / -ee",
          "default": "关闭",
          "desc": "显示更多字段，如 MSS 与窗口大小。"
        },
        {
          "flag": "（弃用状态）",
          "default": "无",
          "desc": "属 net-tools 已废弃，新系统请使用 ip route；命令行添加的路由重启后均会丢失。"
        }
      ],
      "sample": {
        "output": "$ route -n\nKernel IP routing table\nDestination  Gateway      Genmask        Flags Iface\n0.0.0.0      192.168.1.1  0.0.0.0        UG    eth0\n192.168.1.0  0.0.0.0      255.255.255.0  U     eth0",
        "explain": "`route -n` 显示路由表；`0.0.0.0` 行即默认网关 192.168.1.1，`192.168.1.0` 为本地直连网段。已过时，建议 ip route。"
      }
    },
    {
      "name": "ftp",
      "category": "net",
      "description": "FTP 文件传输客户端（明文），适合对接只提供 FTP 的旧服务。",
      "keywords": [
        "ftp",
        "文件传输"
      ],
      "examples": [
        {
          "cmd": "ftp ftp.example.com",
          "desc": "交互登录"
        },
        {
          "cmd": "ftp> get file",
          "desc": "下载文件"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "明文传输，敏感场景优先 scp/sftp",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ftp ftp.example.com\nName: anonymous\n230 Login successful.\nftp> get file.txt\n226 Transfer complete.",
        "explain": "`ftp` 交互式文件传输；以 anonymous 登录成功(230)，`get` 下载文件并提示 226 传输完成。明文传输已不推荐。"
      }
    },
    {
      "name": "nft",
      "category": "net",
      "description": "nftables 防火墙规则管理，取代 iptables 的现代包过滤框架。",
      "keywords": [
        "防火墙",
        "nftables",
        "nft"
      ],
      "examples": [
        {
          "cmd": "nft list ruleset",
          "desc": "查看规则"
        },
        {
          "cmd": "nft add rule inet filter input tcp dport 22 accept",
          "desc": "放行 SSH"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "nftables 是 iptables 的现代替代；二者规则语法不兼容",
      "options": null,
      "sample": {
        "output": "$ nft list ruleset\ntable inet filter {\n    chain input { type filter hook input priority 0;\n        tcp dport 22 accept } }\n$ nft add rule inet filter input tcp dport 80 accept",
        "explain": "`nft` 是 nftables(取代 iptables)工具；`list ruleset` 显示规则集，第二行动态添加放行 80 端口的规则。"
      }
    },
    {
      "name": "cpio",
      "category": "archive",
      "description": "把文件复制进/出 cpio 归档，常与 find 配合备份；linux 启动镜像中也常见。",
      "keywords": [
        "cpio",
        "归档"
      ],
      "examples": [
        {
          "cmd": "find . | cpio -o > a.cpio",
          "desc": "打包"
        },
        {
          "cmd": "cpio -id < a.cpio",
          "desc": "解包"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ find . -name '*.txt' | cpio -o > txt.cpio\n12 blocks\n$ cpio -id < txt.cpio",
        "explain": "`cpio` 把 find 输出打包成 cpio；`-o` 归档、`-id` 解包。RPM 等格式内部常用。"
      }
    },
    {
      "name": "ar",
      "category": "archive",
      "description": "创建与管理 .a 静态库及 .deb 内的归档，是编译与打包链路的底层工具。",
      "keywords": [
        "归档",
        "静态库",
        "ar"
      ],
      "examples": [
        {
          "cmd": "ar rcs lib.a a.o b.o",
          "desc": "打包静态库"
        },
        {
          "cmd": "ar t lib.a",
          "desc": "列成员"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ ar r lib.a a.o b.o\n$ ar t lib.a\na.o\nb.o",
        "explain": "`ar` 创建/管理 .a 静态库(归档目标文件)；`t` 列出成员。Linux 静态库本质就是 ar 归档。"
      }
    },
    {
      "name": "bzcat",
      "category": "archive",
      "description": "不解压直接查看 .bz2 内容，等同 bzip2 -dc | cat，看压缩日志很方便。",
      "keywords": [
        "bz2查看",
        "bzcat"
      ],
      "examples": [
        {
          "cmd": "bzcat a.txt.bz2",
          "desc": "输出解压内容"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ bzcat log.bz2 | grep ERROR\n2026-08-04 ERROR: ... ",
        "explain": "`bzcat` 不解压直接输出 .bz2 内容；配合 grep 在压缩日志里搜 ERROR，省时省盘。"
      }
    },
    {
      "name": "xzcat",
      "category": "archive",
      "description": "不解压直接查看 .xz 内容，等同 xz -dc | cat。",
      "keywords": [
        "xz查看",
        "xzcat"
      ],
      "examples": [
        {
          "cmd": "xzcat a.txt.xz",
          "desc": "输出解压内容"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ xzcat kernel.tar.xz | tar -tv\ndrwxr-xr-x user/user 0 2026-08-04 a/",
        "explain": "`xzcat` 解流 .xz 内容并管道给 tar 列出包内文件(`tar -tv`)，直接预览压缩包结构。"
      }
    },
    {
      "name": "unxz",
      "category": "archive",
      "description": "解压 .xz 文件，等同 xz -d。",
      "keywords": [
        "xz解压",
        "unxz"
      ],
      "examples": [
        {
          "cmd": "unxz a.txt.xz",
          "desc": "解压为 a.txt"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ unxz kernel.tar.xz\n$ ls\nkernel.tar",
        "explain": "`unxz` 解压 .xz 得到 kernel.tar；等同于 `xz -d`。"
      }
    },
    {
      "name": "bunzip2",
      "category": "archive",
      "description": "解压 .bz2 文件，等同 bzip2 -d。",
      "keywords": [
        "bz2解压",
        "bunzip2"
      ],
      "examples": [
        {
          "cmd": "bunzip2 a.txt.bz2",
          "desc": "解压为 a.txt"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ bunzip2 big.log.bz2\n$ ls\nbig.log",
        "explain": "`bunzip2` 解压 .bz2 得到原文件；等同于 `bzip2 -d`。"
      }
    },
    {
      "name": "systemd-analyze",
      "category": "sys",
      "description": "分析系统与服务的启动耗时，定位开机慢的原因。",
      "keywords": [
        "启动分析",
        "systemd-analyze"
      ],
      "examples": [
        {
          "cmd": "systemd-analyze",
          "desc": "总启动耗时"
        },
        {
          "cmd": "systemd-analyze blame",
          "desc": "各服务耗时排序"
        },
        {
          "cmd": "systemd-analyze critical-chain",
          "desc": "关键路径"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ systemd-analyze\nStartup finished in 2.1s (kernel) + 5.3s (userspace) = 7.4s\n$ systemd-analyze blame | head -3\n  1.2s nginx.service",
        "explain": "`systemd-analyze` 统计开机耗时(7.4s)；`blame` 列出各服务启动耗时，定位拖慢开机的罪魁。"
      }
    },
    {
      "name": "lsipc",
      "category": "sys",
      "description": "查看 IPC 资源（消息队列/信号量/共享内存）。",
      "keywords": [
        "ipc",
        "lsipc"
      ],
      "examples": [
        {
          "cmd": "lsipc",
          "desc": "列出全部 IPC"
        },
        {
          "cmd": "lsipc -m",
          "desc": "仅共享内存"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsipc\nTYPE  ID   KEY       OWNER  PERMS  BYTES\nMSG    0 0x00000000 root    600    0",
        "explain": "`lsipc` 列出 System V 进程间通信对象(消息队列/信号量/共享内存)；排查 IPC 资源耗尽时用。"
      }
    },
    {
      "name": "lslocks",
      "category": "sys",
      "description": "列出系统当前的文件锁，看哪些资源被占用。",
      "keywords": [
        "文件锁",
        "lslocks"
      ],
      "examples": [
        {
          "cmd": "lslocks",
          "desc": "查看当前锁"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lslocks\nCOMMAND  PID  TYPE  SIZE  MODE  MNT          PATH\nnginx   900  FLOCK 0B    WRITE /var/log/nginx/access.log",
        "explain": "`lslocks` 列出当前文件锁；可见 nginx 对访问日志持写锁，排查\"文件被占用\"类问题。"
      }
    },
    {
      "name": "lsns",
      "category": "sys",
      "description": "列出命名空间（namespaces），容器与隔离相关排查用。",
      "keywords": [
        "命名空间",
        "lsns"
      ],
      "examples": [
        {
          "cmd": "lsns",
          "desc": "列出全部 ns"
        },
        {
          "cmd": "lsns -t pid",
          "desc": "按类型过滤"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ lsns\nNS TYPE  NPROCS  PID USER  COMMAND\n4026531836 pid      210    1 root  /sbin/init\n4026531840 mnt        3  900 root  nginx: master",
        "explain": "`lsns` 列出命名空间(pid/mnt/net 等)及所属进程；容器/隔离环境排障时确认命名空间边界。"
      }
    },
    {
      "name": "pidstat",
      "category": "sys",
      "description": "按进程统计 CPU/内存/IO，定位某个进程的资源消耗。",
      "keywords": [
        "进程统计",
        "pidstat"
      ],
      "examples": [
        {
          "cmd": "pidstat 1",
          "desc": "每秒刷新"
        },
        {
          "cmd": "pidstat -u -p 1234",
          "desc": "指定进程 CPU"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-u",
          "default": "开启（默认）",
          "desc": "报告 CPU 使用率。"
        },
        {
          "flag": "-r",
          "default": "关闭",
          "desc": "报告内存使用与缺页情况。"
        },
        {
          "flag": "-d",
          "default": "关闭",
          "desc": "报告磁盘 I/O 读写速率。定位 I/O 密集进程时使用。"
        },
        {
          "flag": "-p <PID>",
          "default": "全部",
          "desc": "只监控指定进程，ALL 表示全部含空闲进程。"
        },
        {
          "flag": "-t",
          "default": "关闭",
          "desc": "展开显示线程级数据。"
        },
        {
          "flag": "<间隔> <次数>",
          "default": "无",
          "desc": "两个位置参数分别为采样间隔秒数与采样次数，如 pidstat 2 5。"
        },
        {
          "flag": "-h",
          "default": "关闭",
          "desc": "所有指标显示在同一行，便于后续解析。"
        },
        {
          "flag": "（首次采样）",
          "default": "无",
          "desc": "第一次输出为自启动以来的平均值，观察实时情况应看第二次及以后的数据。"
        }
      ],
      "sample": {
        "output": "$ pidstat -u 1 2\nLinux 6.8.0\n12:00:01 UID   PID  %usr %system  Command\n12:00:02  1000 1234  2.10   0.50  vim",
        "explain": "`pidstat -u` 按进程统计 CPU 使用；可加 `-r`(内存)/`-d`(I/O)，比 top 更适合做进程级性能采样。"
      }
    },
    {
      "name": "dstat",
      "category": "sys",
      "description": "综合实时资源监控，同时看 CPU/IO/网络，替代 vmstat/iostat 组合。",
      "keywords": [
        "综合监控",
        "dstat"
      ],
      "examples": [
        {
          "cmd": "dstat",
          "desc": "默认多指标"
        },
        {
          "cmd": "dstat -c -d -n 1",
          "desc": "CPU/磁盘/网络"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "dstat 聚合了 vmstat/iostat/ifstat 等信息，一行看全",
      "options": [
        {
          "flag": "-c / -d / -n / -m",
          "default": "关闭",
          "desc": "分别显示 CPU、磁盘、网络、内存统计，可任意组合。"
        },
        {
          "flag": "-a, --all",
          "default": "开启（默认组合）",
          "desc": "等价于 -cdngy，为默认输出。"
        },
        {
          "flag": "--top-cpu / --top-io",
          "default": "关闭",
          "desc": "显示当前占用 CPU 或 I/O 最高的进程。快速定位瓶颈来源。"
        },
        {
          "flag": "<间隔> <次数>",
          "default": "1 无限",
          "desc": "采样间隔与次数。"
        },
        {
          "flag": "--output <文件>",
          "default": "无",
          "desc": "同时写入 CSV 文件，便于后续绘图分析。"
        },
        {
          "flag": "-f, --full",
          "default": "关闭",
          "desc": "展开显示每个设备或每个核心的独立数据。"
        },
        {
          "flag": "（维护状态）",
          "default": "无",
          "desc": "原版已停止维护，新发行版多提供 dool 作为替代实现。"
        }
      ],
      "sample": {
        "output": "$ dstat 1 2\n----total-cpu-usage---- --dsk/total- --net/total-\nusr sys idl  | read  writ  | recv  send\n  2   1  97  | 20k   48k  | 12k   3k",
        "explain": "`dstat` 综合实时统计 CPU/磁盘/网络/内存，一行刷新；替代 vmstat/iostat/netstat 组合，概览系统负载。"
      }
    },
    {
      "name": "apt-file",
      "category": "pkg",
      "description": "按文件名反查所属软件包，apt-file update 后 search 可用。",
      "keywords": [
        "包文件搜索",
        "apt-file"
      ],
      "examples": [
        {
          "cmd": "apt-file update",
          "desc": "更新索引"
        },
        {
          "cmd": "apt-file search bin/ls",
          "desc": "查命令所属包"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ apt-file update\n$ apt-file search bin/ls\ncoreutils: /bin/ls\n$ apt-file list nginx | head\nnginx: /usr/sbin/nginx",
        "explain": "`apt-file` 检索\"哪个包提供某文件\"；`search bin/ls` 得知来自 coreutils，`list nginx` 列出其所有文件。装包前找文件所属。"
      }
    },
    {
      "name": "apt-mark",
      "category": "pkg",
      "description": "标记包为手动或自动安装，控制依赖清理行为。",
      "keywords": [
        "包标记",
        "apt-mark"
      ],
      "examples": [
        {
          "cmd": "apt-mark manual nginx",
          "desc": "标记为手动"
        },
        {
          "cmd": "apt-mark showhold",
          "desc": "查看被锁定的包"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ apt-mark hold nginx\nnginx set on hold.\n$ apt-mark showhold\nnginx",
        "explain": "`apt-mark hold nginx` 把包标记为\"保持\"避免被升级；`showhold` 列出被锁定的包。用于钉住关键版本。"
      }
    },
    {
      "name": "sysctl",
      "category": "kernel",
      "description": "运行时查看或设置内核参数，-w 临时改、-p 从配置加载。",
      "keywords": [
        "内核参数",
        "sysctl"
      ],
      "examples": [
        {
          "cmd": "sysctl -a",
          "desc": "列出全部参数"
        },
        {
          "cmd": "sysctl net.ipv4.ip_forward=1",
          "desc": "临时开启转发"
        },
        {
          "cmd": "sysctl -p",
          "desc": "从 /etc/sysctl.conf 加载"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "sysctl 直接修改仅临时生效；持久化需写入 /etc/sysctl.d/*.conf",
      "compare": "sysctl 对应 /proc/sys 下的内核运行参数",
      "options": [
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "列出全部内核参数。数量很多，建议配合 grep 过滤。"
        },
        {
          "flag": "<参数名>",
          "default": "无",
          "desc": "查询单个参数值，如 sysctl net.ipv4.ip_forward。"
        },
        {
          "flag": "-w <参数>=<值>",
          "default": "无",
          "desc": "临时修改参数，重启后失效。"
        },
        {
          "flag": "-p [文件], --load",
          "default": "/etc/sysctl.conf",
          "desc": "从配置文件加载参数使其生效。"
        },
        {
          "flag": "--system",
          "default": "关闭",
          "desc": "加载所有标准位置的配置文件，含 /etc/sysctl.d/ 目录。"
        },
        {
          "flag": "-n",
          "default": "关闭",
          "desc": "只输出值不输出参数名，便于脚本取值。"
        },
        {
          "flag": "（持久化）",
          "default": "无",
          "desc": "-w 的修改重启即丢失，永久生效须写入 /etc/sysctl.d/ 下的 .conf 文件。"
        }
      ],
      "sample": {
        "output": "$ sysctl net.ipv4.ip_forward\nnet.ipv4.ip_forward = 0\n$ sysctl -w net.ipv4.ip_forward=1\nnet.ipv4.ip_forward = 1",
        "explain": "`sysctl` 运行时读写内核参数；首行查看到 IP 转发当前为 0，`-w` 临时开启为 1(做路由器需此)。持久化写 /etc/sysctl.d/。"
      }
    },
    {
      "name": "update-initramfs",
      "category": "kernel",
      "description": "更新 Debian 系的早期启动内存盘（initramfs）。",
      "keywords": [
        "initramfs",
        "update-initramfs"
      ],
      "examples": [
        {
          "cmd": "update-initramfs -u",
          "desc": "更新当前内核"
        },
        {
          "cmd": "update-initramfs -c -k all",
          "desc": "全部重建"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ update-initramfs -u\nupdate-initramfs: Generating /boot/initrd.img-6.8.0-45\n$ ls /boot/initrd.img-6.8.0-45\n/boot/initrd.img-6.8.0-45",
        "explain": "`update-initramfs -u` 更新当前内核的 initrd(启动初期用的临时根文件系统)；`ls` 确认生成。装驱动/改启动后需执行。"
      }
    },
    {
      "name": "dracut",
      "category": "kernel",
      "description": "生成/管理 initramfs 的通用工具（多发行版可用）。",
      "keywords": [
        "initramfs",
        "dracut"
      ],
      "examples": [
        {
          "cmd": "dracut",
          "desc": "为当前内核生成"
        },
        {
          "cmd": "dracut -f",
          "desc": "覆盖生成"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "dracut 多见于 RHEL 系；Debian/Ubuntu 用 update-initramfs",
      "options": null,
      "sample": {
        "output": "$ dracut -f /boot/initramfs-6.8.0-45.img 6.8.0-45\n$ ls -l /boot/initramfs-6.8.0-45.img\n-rw------- 1 root root 31234567 ... initramfs-6.8.0-45.img",
        "explain": "`dracut -f` 在 RHEL 系生成/更新 initramfs；指定目标文件与内核版本。`ls` 确认文件已生成(约 31MB)。"
      }
    },
    {
      "name": "bind",
      "category": "shell",
      "description": "绑定或查看 readline 的按键映射（bash），自定义快捷键。",
      "keywords": [
        "按键绑定",
        "bind"
      ],
      "examples": [
        {
          "cmd": "bind -p",
          "desc": "查看绑定"
        },
        {
          "cmd": "bind '\\C-f:forward-char'",
          "desc": "绑定 Ctrl+f 前进"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ bind '\"\\C-x\\C-e\": edit-and-execute-command'\n$ bind -p | grep C-x\n\"\\C-x\\C-e\": edit-and-execute-command",
        "explain": "`bind` 绑定 readline 快捷键；此处把 Ctrl-X Ctrl-E 绑为\"在编辑器编辑当前行\"。`bind -p` 列出键绑定。"
      }
    },
    {
      "name": "compgen",
      "category": "shell",
      "description": "生成补全候选（bash 内建），编写自定义补全逻辑时用到。",
      "keywords": [
        "补全",
        "compgen"
      ],
      "examples": [
        {
          "cmd": "compgen -c",
          "desc": "列出命令"
        },
        {
          "cmd": "compgen -f",
          "desc": "列出文件"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ compgen -c | grep git | head\ngit\ngit-status\ngit-commit\n$ compgen -W 'red green blue' -- bl\nblue",
        "explain": "`compgen` 在补全脚本中生成候选；`-c` 列命令、`-W` 给定词表并按已输入 bl 过滤出 blue。"
      }
    },
    {
      "name": "complete",
      "category": "shell",
      "description": "定义命令的补全规则（bash 内建），让 Tab 补全更智能。",
      "keywords": [
        "补全",
        "complete"
      ],
      "examples": [
        {
          "cmd": "complete -c gcc",
          "desc": "按命令补全 gcc"
        },
        {
          "cmd": "complete -F _my mcmd",
          "desc": "用函数补全"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ complete -W 'start stop restart' svc\n$ svc <TAB><TAB>\nrestart  start  stop",
        "explain": "`complete -W` 为 svc 命令注册补全词表；输入 svc 按 Tab 列出 start/stop/restart，提升命令行效率。"
      }
    },
    {
      "name": "mapfile",
      "category": "shell",
      "description": "将输入按行读入数组（bash 内建），便于后续逐行处理。",
      "keywords": [
        "读数组",
        "mapfile",
        "readarray"
      ],
      "examples": [
        {
          "cmd": "mapfile -t arr < file.txt",
          "desc": "逐行读入数组"
        },
        {
          "cmd": "mapfile -n 3 arr < f",
          "desc": "只读前3行"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": "mapfile 别名 readarray；适合脚本中批量读行",
      "options": null,
      "sample": {
        "output": "$ mapfile -t lines < a.txt\n$ echo ${#lines[@]}\n3",
        "explain": "`mapfile -t lines`(即 readarray) 把文件逐行读入数组 lines；`${#lines[@]}` 显示数组长度 3，即文件 3 行。"
      }
    },
    {
      "name": "enable",
      "category": "shell",
      "description": "启用或停用内建命令（bash 内建），如 enable -n echo 暂时禁用。",
      "keywords": [
        "内建开关",
        "enable"
      ],
      "examples": [
        {
          "cmd": "enable -n echo",
          "desc": "临时禁用 echo 内建"
        },
        {
          "cmd": "enable echo",
          "desc": "重新启用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ enable -n echo\n$ type echo\necho is a shell builtin (disabled)\n$ enable echo",
        "explain": "`enable -n echo` 禁用内置 echo(转用外部)；`enable echo` 重新启用。极少用，特殊场景隔离内置/外部命令。"
      }
    },
    {
      "name": "help",
      "category": "shell",
      "description": "查看 bash 内建命令的帮助（bash 内建），比 man 更聚焦。",
      "keywords": [
        "内建帮助",
        "help"
      ],
      "examples": [
        {
          "cmd": "help cd",
          "desc": "查看 cd 内建说明"
        },
        {
          "cmd": "help -m read",
          "desc": "详细格式"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": "help 仅对内建有效；外部命令用 man",
      "options": null,
      "sample": {
        "output": "$ help cd\ncd: cd [-L|[-P [-e]] [-@]] [dir]\n    Change the current directory...",
        "explain": "`help` 显示 bash 内置命令用法(无参数列全部)；此处查 cd 的语法与说明，比 man 更聚焦内置。"
      }
    },
    {
      "name": "getopts",
      "category": "shell",
      "description": "解析命令行选项（bash 内建），编写带 -a -b 参数的脚本用。",
      "keywords": [
        "解析选项",
        "getopts"
      ],
      "examples": [
        {
          "cmd": "while getopts ':ab:' o; do :; done",
          "desc": "循环读取 -a/-b"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ cat get.sh\nwhile getopts \":a:b:\" o; do case $o in a) A=$OPTARG;; b) B=$OPTARG;; esac; done\n$ bash get.sh -a x -b y; echo \"$A $B\"\nx y",
        "explain": "`getopts` 解析短选项(-a x -b y)，循环中把参数值赋给 A/B；脚本标准化处理命令行参数的标准做法。"
      }
    },
    {
      "name": "times",
      "category": "shell",
      "description": "显示 shell 及其子进程的累计 CPU 时间（bash 内建）。",
      "keywords": [
        "cpu时间",
        "times"
      ],
      "examples": [
        {
          "cmd": "times",
          "desc": "打印 shell 及子进程耗时"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ times\n0m0.012s 0m0.008s\n0m0.004s 0m0.002s",
        "explain": "`times` 显示当前 shell 及其子进程累计的用户/系统 CPU 时间(两行)；调试脚本性能用。"
      }
    },
    {
      "name": "xargs",
      "category": "editor",
      "description": "把标准输入转为命令的参数，常与 find/管道配合批量执行。",
      "keywords": [
        "参数构造",
        "xargs"
      ],
      "examples": [
        {
          "cmd": "find . -name '*.log' | xargs rm",
          "desc": "批量删除"
        },
        {
          "cmd": "cat list | xargs -I{} cp {} /bak",
          "desc": "逐个拷贝"
        },
        {
          "cmd": "xargs -P4 -n1 cmd",
          "desc": "并行4路"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "文件名含空格/换行易出错，建议配合 find -print0 | xargs -0",
      "compare": "xargs 把输入拼成参数；并行能力弱于 GNU parallel",
      "options": [
        {
          "flag": "-n <数量>",
          "default": "尽可能多",
          "desc": "每次传递给命令的参数个数。-n 1 表示逐个执行。"
        },
        {
          "flag": "-I <占位符>",
          "default": "无",
          "desc": "指定占位符，如 -I {}，可把参数放在命令的任意位置。启用后隐含 -n 1，会降低效率。"
        },
        {
          "flag": "-0, --null",
          "default": "关闭",
          "desc": "以 NUL 作为输入分隔符。必须与 find -print0 配对，用于安全处理含空格的文件名。"
        },
        {
          "flag": "-d <分隔符>, --delimiter",
          "default": "空白与换行",
          "desc": "自定义输入分隔符。"
        },
        {
          "flag": "-P <并发数>, --max-procs",
          "default": "1",
          "desc": "并行执行的进程数。-P 0 表示尽可能多，可大幅加速批处理。"
        },
        {
          "flag": "-p, --interactive",
          "default": "关闭",
          "desc": "每次执行前询问确认。执行危险命令前建议开启。"
        },
        {
          "flag": "-t, --verbose",
          "default": "关闭",
          "desc": "执行前把命令打印到标准错误。便于确认实际执行内容。"
        },
        {
          "flag": "-r, --no-run-if-empty",
          "default": "关闭",
          "desc": "输入为空时不执行命令。可避免误执行不带参数的命令。"
        },
        {
          "flag": "（默认行为陷阱）",
          "default": "无",
          "desc": "默认按空白分隔，含空格的文件名会被拆散；同时会引发对引号的解释，务必配合 -0 使用。"
        }
      ],
      "sample": {
        "output": "$ find . -name '*.log' | xargs rm\n$ find . -name '*.txt' -print0 | xargs -0 rm\n(安全处理含空格文件名)",
        "explain": "`xargs` 把标准输入转成命令参数；首例删除所有 .log。含空格文件名用 `-print0 | xargs -0` 防断词错误。"
      }
    },
    {
      "name": "env",
      "category": "editor",
      "description": "在指定环境变量下运行命令，或打印当前环境，env -i 干净启动。",
      "keywords": [
        "环境变量",
        "env"
      ],
      "examples": [
        {
          "cmd": "env",
          "desc": "打印全部环境变量"
        },
        {
          "cmd": "env VAR=1 cmd",
          "desc": "临时设变量运行"
        },
        {
          "cmd": "env -i bash",
          "desc": "清空环境启动"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "打印当前所有环境变量。"
        },
        {
          "flag": "<变量>=<值> <命令>",
          "default": "无",
          "desc": "在临时修改的环境中执行命令，不影响当前 shell。"
        },
        {
          "flag": "-i, --ignore-environment",
          "default": "关闭",
          "desc": "以完全空白的环境执行命令。适用于测试脚本对环境的依赖。"
        },
        {
          "flag": "-u <变量>, --unset",
          "default": "无",
          "desc": "执行前移除指定变量。"
        },
        {
          "flag": "-0, --null",
          "default": "关闭",
          "desc": "输出以 NUL 分隔，可安全处理含换行的变量值。"
        },
        {
          "flag": "（shebang 用法）",
          "default": "无",
          "desc": "#!/usr/bin/env python3 会在 PATH 中查找解释器，比写死路径更可移植。"
        }
      ],
      "sample": {
        "output": "$ env | grep PATH\nPATH=/usr/local/bin:/usr/bin:/bin\n$ env -i bash --noprofile --norc\n(在干净环境启动新 shell)",
        "explain": "`env` 显示全部环境变量；`env -i` 以空环境启动命令，测试程序在无污染环境下行为用。"
      }
    },
    {
      "name": "printenv",
      "category": "editor",
      "description": "打印环境变量，确认 PATH 等配置是否生效。",
      "keywords": [
        "打印环境",
        "printenv"
      ],
      "examples": [
        {
          "cmd": "printenv",
          "desc": "列出全部"
        },
        {
          "cmd": "printenv PATH",
          "desc": "查看单个"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "printenv 专注环境变量；set 还能看 shell 变量与函数",
      "options": [
        {
          "flag": "（无参数）",
          "default": "无",
          "desc": "打印所有环境变量，输出与 env 基本一致。"
        },
        {
          "flag": "<变量名>",
          "default": "无",
          "desc": "只打印指定变量的值。变量不存在时退出码为非零，可用于判断是否设置。"
        },
        {
          "flag": "-0, --null",
          "default": "关闭",
          "desc": "以 NUL 分隔输出。"
        },
        {
          "flag": "（与 echo $VAR 的差别）",
          "default": "无",
          "desc": "printenv 只能读到导出的环境变量，未 export 的 shell 局部变量读不到，可据此区分两类变量。"
        }
      ],
      "sample": {
        "output": "$ printenv HOME\n/home/user\n$ printenv | head -3\nHOME=/home/user\nPATH=/usr/local/bin:...",
        "explain": "`printenv` 打印环境变量；单独加变量名(如 HOME)只取该值，比 env 更聚焦查询。"
      }
    },
    {
      "name": "seq",
      "category": "editor",
      "description": "生成整数数列，seq 1 5 输出 1~5，配合循环或拼接路径。",
      "keywords": [
        "数列",
        "seq"
      ],
      "examples": [
        {
          "cmd": "seq 1 5",
          "desc": "1 到 5"
        },
        {
          "cmd": "seq -w 1 10",
          "desc": "等宽补零"
        },
        {
          "cmd": "seq 2 2 10",
          "desc": "步长2"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<结束>",
          "default": "从 1 开始",
          "desc": "生成 1 到结束值的整数序列。"
        },
        {
          "flag": "<起始> <结束>",
          "default": "步长 1",
          "desc": "生成指定范围的序列。"
        },
        {
          "flag": "<起始> <步长> <结束>",
          "default": "无",
          "desc": "指定步长，支持小数与负数步长。"
        },
        {
          "flag": "-s <分隔符>, --separator",
          "default": "换行",
          "desc": "指定分隔符，如 -s , 生成逗号分隔的一行。"
        },
        {
          "flag": "-w, --equal-width",
          "default": "关闭",
          "desc": "用前导零补齐等宽，如 01 02 ... 10。便于生成有序文件名。"
        },
        {
          "flag": "-f <格式>, --format",
          "default": "无",
          "desc": "使用 printf 风格格式，如 -f 'file%02g.txt'。"
        },
        {
          "flag": "（相比 brace 展开）",
          "default": "无",
          "desc": "bash 的 {1..10} 更快但不支持变量，seq 可接受变量作为边界。"
        }
      ],
      "sample": {
        "output": "$ seq 1 3\n1\n2\n3\n$ seq -s, 1 5 2\n1,3,5",
        "explain": "`seq` 生成数字序列；`1 3` 输出 1-3，`-s,` 用逗号分隔、`1 5 2` 步长 2 得 1,3,5，常用于循环。"
      }
    },
    {
      "name": "expr",
      "category": "editor",
      "description": "计算算术/字符串/逻辑表达式，脚本里做简单运算。",
      "keywords": [
        "表达式",
        "expr"
      ],
      "examples": [
        {
          "cmd": "expr 3 + 5",
          "desc": "算术"
        },
        {
          "cmd": "expr length 'abc'",
          "desc": "字符串长度"
        },
        {
          "cmd": "expr 'a.txt' : '.*\\.txt'",
          "desc": "匹配 .txt 结尾"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "运算符两侧需空格；乘号 * 要转义或用引号",
      "compare": "expr 较老旧；脚本里优先用 $(( )) 做算术",
      "options": [
        {
          "flag": "<数> <运算符> <数>",
          "default": "无",
          "desc": "整数四则运算。运算符两侧必须有空格，否则会被当作字符串。"
        },
        {
          "flag": "\\*",
          "default": "无",
          "desc": "乘法的星号必须转义，否则会被 shell 展开为文件名。"
        },
        {
          "flag": "length <字符串>",
          "default": "无",
          "desc": "返回字符串长度。"
        },
        {
          "flag": "substr <串> <起始> <长度>",
          "default": "无",
          "desc": "截取子串，起始位置从 1 开始计数。"
        },
        {
          "flag": "index <串> <字符集>",
          "default": "无",
          "desc": "返回任一字符首次出现的位置，未找到返回 0。"
        },
        {
          "flag": "<串> : <正则>",
          "default": "无",
          "desc": "正则匹配并返回匹配长度或捕获组内容。"
        },
        {
          "flag": "（退出码陷阱）",
          "default": "无",
          "desc": "结果为 0 或空时退出码为 1，在 set -e 的脚本中会导致意外退出。"
        },
        {
          "flag": "（现代替代）",
          "default": "无",
          "desc": "bash 中推荐用 $((...)) 做算术、${#var} 取长度，比 expr 更快且无需转义。"
        }
      ],
      "sample": {
        "output": "$ expr 5 + 3\n8\n$ expr length 'hello'\n5\n$ expr 'a.txt' : '.*\\.txt'\n4",
        "explain": "`expr` 做整数运算(length 求串长、正则 `:`)；`5 + 3`=8。注意运算符两边需空格。现代脚本多用 `$(( ))`。"
      }
    },
    {
      "name": "xdg-open",
      "category": "editor",
      "description": "用系统默认程序打开文件或 URL，桌面环境里一键打开。",
      "keywords": [
        "打开文件",
        "xdg-open"
      ],
      "examples": [
        {
          "cmd": "xdg-open report.pdf",
          "desc": "用默认程序打开"
        },
        {
          "cmd": "xdg-open https://x.com",
          "desc": "浏览器打开"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ xdg-open report.pdf\n(在默认图形程序中打开 report.pdf)",
        "explain": "`xdg-open` 用桌面默认应用打开文件/URL；无 GUI 时无效，适合桌面环境快速预览。"
      }
    },
    {
      "name": "apropos",
      "category": "editor",
      "description": "按关键词搜索手册页名称与描述，忘了命令名时找命令。",
      "keywords": [
        "手册搜索",
        "apropos"
      ],
      "examples": [
        {
          "cmd": "apropos network",
          "desc": "搜含 network 的手册"
        },
        {
          "cmd": "apropos -a copy file",
          "desc": "同时满足多关键词"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "apropos 等价于 man -k",
      "options": [
        {
          "flag": "<关键词>",
          "default": "无",
          "desc": "按关键词搜索手册页的简介部分，等价于 man -k。"
        },
        {
          "flag": "-e, --exact",
          "default": "关闭",
          "desc": "精确匹配关键词而非子串匹配。"
        },
        {
          "flag": "-a, --and",
          "default": "关闭",
          "desc": "多个关键词需同时满足，默认为任一满足即可。"
        },
        {
          "flag": "-s <章节>, --sections",
          "default": "全部",
          "desc": "限定搜索的手册章节。"
        },
        {
          "flag": "-r, --regex",
          "default": "开启（默认）",
          "desc": "把关键词当作正则处理。"
        },
        {
          "flag": "（数据库依赖）",
          "default": "无",
          "desc": "依赖 mandb 索引，新装软件后若搜不到，需先执行 sudo mandb 更新。"
        }
      ],
      "sample": {
        "output": "$ apropos copy\ncp (1)  - copy files and directories\nscp (1) - secure copy",
        "explain": "`apropos`(等同 man -k) 按关键词搜 whatis 库；\"copy\" 列出 cp、scp 等，忘记命令名时按功能反查。"
      }
    },
    {
      "name": "gpg",
      "category": "editor",
      "description": "GnuPG 加密与签名工具，可加密文件、管理密钥与验证签名。",
      "keywords": [
        "加密",
        "签名",
        "gpg"
      ],
      "examples": [
        {
          "cmd": "gpg -c file",
          "desc": "对称加密"
        },
        {
          "cmd": "gpg -d file.gpg",
          "desc": "解密"
        },
        {
          "cmd": "gpg --gen-key",
          "desc": "生成密钥对"
        },
        {
          "cmd": "gpg --verify file.sig",
          "desc": "验证签名"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "私钥务必备份；--armor 生成文本格式(.asc)便于传输",
      "compare": null,
      "options": [
        {
          "flag": "--gen-key / --full-generate-key",
          "default": "无",
          "desc": "生成密钥对，后者可完整指定算法、长度与有效期。"
        },
        {
          "flag": "-e, --encrypt",
          "default": "无",
          "desc": "加密文件，需配合 -r 指定接收者。"
        },
        {
          "flag": "-d, --decrypt",
          "default": "无",
          "desc": "解密文件。"
        },
        {
          "flag": "-r <收件人>, --recipient",
          "default": "无",
          "desc": "指定用哪个公钥加密。可重复以支持多人解密。"
        },
        {
          "flag": "-s, --sign",
          "default": "无",
          "desc": "对文件签名；--clearsign 生成明文可读的签名文本。"
        },
        {
          "flag": "--verify <签名文件>",
          "default": "无",
          "desc": "验证签名有效性。校验下载的软件包时使用。"
        },
        {
          "flag": "-c, --symmetric",
          "default": "无",
          "desc": "使用口令对称加密，无需密钥对。适合临时加密单个文件。"
        },
        {
          "flag": "-a, --armor",
          "default": "关闭",
          "desc": "输出 ASCII 文本格式而非二进制，便于邮件粘贴。"
        },
        {
          "flag": "--list-keys / --list-secret-keys",
          "default": "无",
          "desc": "列出公钥与私钥。"
        },
        {
          "flag": "--export / --import",
          "default": "无",
          "desc": "导出与导入密钥，通常配合 -a 使用。"
        },
        {
          "flag": "（私钥备份）",
          "default": "无",
          "desc": "私钥一旦丢失，用其加密的数据将永久无法恢复，务必备份并妥善保管吊销证书。"
        }
      ],
      "sample": {
        "output": "$ gpg -c secret.txt\n(输入口令后生成 secret.txt.gpg)\n$ gpg -d secret.txt.gpg > secret.txt\n(解密需口令)",
        "explain": "`gpg -c` 对称加密(口令保护)生成 .gpg；`-d` 解密。也可 `-e` 用接收方公钥加密，确保文件机密。"
      }
    },
    {
      "name": "git init",
      "category": "g_config",
      "description": "在当前目录初始化一个新的 Git 仓库（生成 .git），开始版本管理。",
      "keywords": [
        "初始化",
        "仓库",
        "git init"
      ],
      "examples": [
        {
          "cmd": "git init",
          "desc": "当前目录建仓库"
        },
        {
          "cmd": "git init --bare",
          "desc": "建裸仓库（服务端）"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "--bare",
          "default": "关闭",
          "desc": "创建裸仓库（无工作区），用作远程中心仓库。本地开发无需此选项。"
        },
        {
          "flag": "--initial-branch=<分支>, -b <分支>",
          "default": "随配置",
          "desc": "指定初始分支名（如 main）；旧版默认 master，新仓库建议显式指定。"
        },
        {
          "flag": "--object-format=<格式>",
          "default": "sha1",
          "desc": "指定对象哈希算法（sha1/sha256）。新建后难以更改，影响所有提交指纹，慎选。"
        },
        {
          "flag": "-q, --quiet",
          "default": "关闭",
          "desc": "只输出错误，抑制初始化提示。"
        },
        {
          "flag": "（目录）",
          "default": "当前目录",
          "desc": "在指定目录而非当前目录初始化仓库。"
        }
      ],
      "sample": {
        "output": "$ git init\nInitialized empty Git repository in /home/user/project/.git/\n$ ls -a | grep .git\n.git",
        "explain": "在当前目录创建 .git 仓库(Initialized empty)；`ls -a` 可见新增 .git 目录，此后该目录纳入版本控制。"
      }
    },
    {
      "name": "git clone",
      "category": "g_config",
      "description": "把远程仓库完整复制到本地，含历史与分支，是参与项目的第一步。",
      "keywords": [
        "克隆",
        "git clone"
      ],
      "examples": [
        {
          "cmd": "git clone url",
          "desc": "克隆到同名目录"
        },
        {
          "cmd": "git clone -b dev url",
          "desc": "克隆指定分支"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<仓库> [<目录>]",
          "default": "无",
          "desc": "源地址与可选目标目录；不填目录则用仓库名。"
        },
        {
          "flag": "--depth <深度>",
          "default": "无",
          "desc": "浅克隆，仅取最近 N 个提交。CI/临时查看省空间，但无法回溯完整历史。"
        },
        {
          "flag": "-b <分支>, --branch=<分支>",
          "default": "HEAD",
          "desc": "克隆后检出的分支，而非默认 HEAD 指向的分支。"
        },
        {
          "flag": "--single-branch",
          "default": "关闭",
          "desc": "只克隆指定分支（配合 -b），显著减小体积。"
        },
        {
          "flag": "--recursive / --recurse-submodules",
          "default": "关闭",
          "desc": "一并初始化并拉取子模块，否则子模块目录为空。"
        },
        {
          "flag": "--mirror",
          "default": "关闭",
          "desc": "创建镜像仓库（含全部引用，含远程分支），用于备份迁移。"
        },
        {
          "flag": "-n, --no-checkout",
          "default": "关闭",
          "desc": "克隆但不检出工作区文件。"
        }
      ],
      "sample": {
        "output": "$ git clone https://github.com/user/repo.git\nCloning into 'repo'...\nremote: Enumerating objects: 120, done.\nReceiving objects: 100% (120/120), done.",
        "explain": "从远程 URL 克隆整个仓库到本地 repo/ 目录；显示枚举与接收对象进度，完成后得到完整仓库(含历史)。"
      }
    },
    {
      "name": "git config",
      "category": "g_config",
      "description": "读取或写入 Git 配置（用户、别名、行为等），--global 影响所有仓库。",
      "keywords": [
        "配置",
        "git config"
      ],
      "examples": [
        {
          "cmd": "git config --global user.name 'x'",
          "desc": "设用户名"
        },
        {
          "cmd": "git config --list",
          "desc": "查看配置"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "--global",
          "default": "关闭",
          "desc": "写入用户级 ~/.gitconfig，对当前用户所有仓库生效。"
        },
        {
          "flag": "--local",
          "default": "开启（默认）",
          "desc": "写入当前仓库 .git/config，仅对当前仓库生效。"
        },
        {
          "flag": "--system",
          "default": "关闭",
          "desc": "写入系统级配置，影响所有用户，需管理员权限。"
        },
        {
          "flag": "-l, --list",
          "default": "无",
          "desc": "列出当前生效的全部配置项。"
        },
        {
          "flag": "--get <键>",
          "default": "无",
          "desc": "读取某配置项的值。"
        },
        {
          "flag": "--unset <键>",
          "default": "无",
          "desc": "删除某配置项；多值键配合 --unset-all 清空。"
        },
        {
          "flag": "-e, --edit",
          "default": "无",
          "desc": "用编辑器打开配置文件直接编辑。"
        },
        {
          "flag": "--add",
          "default": "关闭",
          "desc": "为同名键追加一个值，用于多值配置（如 remote.pushurl）。"
        }
      ],
      "sample": {
        "output": "$ git config --global user.name \"Alice\"\n$ git config --global user.email \"alice@example.com\"\n$ git config --list | grep user\nuser.name=Alice\nuser.email=alice@example.com",
        "explain": "`git config --global` 设置全局用户名/邮箱(提交者身份)；`--list` 查看，缺这两项会无法提交。"
      }
    },
    {
      "name": "git help",
      "category": "g_config",
      "description": "查看命令手册，git help <命令> 打开对应文档，忘了用法时查。",
      "keywords": [
        "帮助",
        "git help"
      ],
      "examples": [
        {
          "cmd": "git help commit",
          "desc": "看 commit 手册"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<命令>",
          "default": "无",
          "desc": "查看指定命令的手册页。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "列出所有可用命令与手册。"
        },
        {
          "flag": "-g, --guides",
          "default": "关闭",
          "desc": "列出指南文档（概念性说明）。"
        },
        {
          "flag": "-w, --web",
          "default": "关闭",
          "desc": "在浏览器打开 HTML 版手册，需本地已生成。"
        }
      ],
      "sample": {
        "output": "$ git help commit\n(打开 git-commit 手册页)\n$ git help -a | head\navailable git commands... add commit clone",
        "explain": "`git help <cmd>` 查某命令手册(man 页)；`-a` 列出全部可用子命令，适合回忆命令名。"
      }
    },
    {
      "name": "git var",
      "category": "g_config",
      "description": "显示 Git 内部变量（如作者身份、编辑器）的解析值。",
      "keywords": [
        "变量",
        "git var"
      ],
      "examples": [
        {
          "cmd": "git var GIT_AUTHOR_IDENT",
          "desc": "看作者身份"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git var GIT_COMMITTER_IDENT\nAlice <alice@example.com> 1722748800 +0800",
        "explain": "`git var` 显示 Git 内部变量求值结果；此处输出提交者身份(名<邮箱> 时间戳 时区)，排查身份配置用。"
      }
    },
    {
      "name": "git version",
      "category": "g_config",
      "description": "打印 Git 版本号，排查兼容性或环境问题。",
      "keywords": [
        "版本",
        "git version"
      ],
      "examples": [
        {
          "cmd": "git version",
          "desc": "查看 git 版本"
        }
      ],
      "frequency": "低",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git version\ngit version 2.40.0",
        "explain": "打印 Git 客户端版本号；确认特性支持或排错时先看版本。"
      }
    },
    {
      "name": "git bugreport",
      "category": "g_config",
      "description": "生成一份含环境信息的缺陷报告模板，用于反馈 Git 自身 bug。",
      "keywords": [
        "缺陷报告",
        "git bugreport"
      ],
      "examples": [
        {
          "cmd": "git bugreport",
          "desc": "生成环境报告"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git bugreport\n(生成 git-bugreport-<日期>.txt 模板供填写)",
        "explain": "交互生成 bug 报告模板文件，内含环境信息，便于向 Git 社区报问题。"
      }
    },
    {
      "name": "git status",
      "category": "g_commit",
      "description": "查看工作区与暂存区的状态：哪些已改、哪些待提交，操作前必看。",
      "keywords": [
        "状态",
        "git status"
      ],
      "examples": [
        {
          "cmd": "git status",
          "desc": "看改动"
        },
        {
          "cmd": "git status -s",
          "desc": "紧凑状态"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-s, --short",
          "default": "关闭",
          "desc": "精简输出，用两列状态码（XY 文件名）表示文件状态。"
        },
        {
          "flag": "-b, --branch",
          "default": "开启（short 默认）",
          "desc": "简短模式下额外显示分支名与上游跟踪状态。"
        },
        {
          "flag": "--porcelain[=<版本>]",
          "default": "v1",
          "desc": "机器可解析的稳定输出，适合脚本；固定版本号避免行为漂移。"
        },
        {
          "flag": "--ignored",
          "default": "关闭",
          "desc": "同时列出被 .gitignore 忽略的文件。"
        },
        {
          "flag": "-u <模式>, --untracked-files=<模式>",
          "default": "all",
          "desc": "控制未跟踪文件显示粒度：no 不显示、normal 仅顶层、all 含子目录。"
        }
      ],
      "sample": {
        "output": "$ git status\nOn branch main\nChanges to be committed:\n  new file:   app.js\nChanges not staged for commit:\n  modified:   index.html",
        "explain": "显示工作区状态：On branch main；`Changes to be committed` 是已暂存待提交，`Changes not staged` 是已改未暂存。据此决定 add/commit。"
      }
    },
    {
      "name": "git add",
      "category": "g_commit",
      "description": "把改动加入暂存区，准备提交；可指定文件、目录或用 -p 逐块选择。",
      "keywords": [
        "暂存",
        "git add"
      ],
      "examples": [
        {
          "cmd": "git add .",
          "desc": "暂存全部"
        },
        {
          "cmd": "git add -p",
          "desc": "交互暂存"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": "add . 会暂存所有，含敏感文件，注意 .gitignore",
      "compare": null,
      "options": [
        {
          "flag": "<路径>...",
          "default": "无",
          "desc": "指定加入暂存区的文件或目录。"
        },
        {
          "flag": "-A, --all",
          "default": "关闭",
          "desc": "暂存所有变更（含新增、修改与删除），范围覆盖整个仓库。"
        },
        {
          "flag": "-p, --patch",
          "default": "关闭",
          "desc": "交互式逐块选择要暂存的改动，便于拆分提交。"
        },
        {
          "flag": "-u, --update",
          "default": "关闭",
          "desc": "只暂存已跟踪文件的修改与删除，不含新增文件。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制添加被 .gitignore 忽略的文件（谨慎，可能误加密钥）。"
        },
        {
          "flag": "-n, --dry-run",
          "default": "关闭",
          "desc": "只显示将被添加的文件，不实际改动暂存区。"
        }
      ],
      "sample": {
        "output": "$ git add index.html app.js\n$ git status -s\nA  app.js\n M index.html\n$ git add -A",
        "explain": "`git add` 把文件改动纳入暂存区；`status -s` 中 A=已加、M=已改。`-A` 暂存全部改动(含删改)。"
      }
    },
    {
      "name": "git commit",
      "category": "g_commit",
      "description": "把暂存区的改动保存为一个提交（快照），-m 附说明。",
      "keywords": [
        "提交",
        "git commit"
      ],
      "examples": [
        {
          "cmd": "git commit -m 'msg'",
          "desc": "提交"
        },
        {
          "cmd": "git commit --amend",
          "desc": "修改上次提交"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-m <信息>, --message=<信息>",
          "default": "无",
          "desc": "直接提供提交说明，跳过编辑器。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "自动暂存已跟踪文件的修改再提交（不含新增文件）。"
        },
        {
          "flag": "--amend",
          "default": "关闭",
          "desc": "修改最近一次提交（可改说明或补内容）。已推送则属危险历史改写，勿对共享分支使用。"
        },
        {
          "flag": "--no-edit",
          "default": "关闭",
          "desc": "改写提交但沿用原说明，常配合 --amend。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "在编辑器中显示本次改动差异，便于确认。"
        },
        {
          "flag": "--allow-empty",
          "default": "关闭",
          "desc": "允许空提交（无改动），常用于触发钩子或打标记。"
        },
        {
          "flag": "-S, --gpg-sign",
          "default": "关闭",
          "desc": "用 GPG 对提交签名，需已配置 signingkey。"
        },
        {
          "flag": "--author=<作者>",
          "default": "无",
          "desc": "指定提交作者（姓名 <邮箱>），覆盖当前用户配置。"
        }
      ],
      "sample": {
        "output": "$ git commit -m \"feat: add login page\"\n[main 3a1b2c4] feat: add login page\n 1 file changed, 12 insertions(+)",
        "explain": "`-m` 指定提交说明；输出新提交短哈希 3a1b2c4、改动文件数与增删行数。提交即生成版本快照。"
      }
    },
    {
      "name": "git rm",
      "category": "g_commit",
      "description": "从工作区与暂存区同时删除文件，并登记删除到下次提交。",
      "keywords": [
        "删除",
        "git rm"
      ],
      "examples": [
        {
          "cmd": "git rm f.txt",
          "desc": "删文件并暂存"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<文件>...",
          "default": "无",
          "desc": "从工作区与暂存区同时删除。"
        },
        {
          "flag": "--cached",
          "default": "关闭",
          "desc": "仅从暂存区移除、保留工作区文件，用于停止跟踪但留本地（如误加的密钥）。"
        },
        {
          "flag": "-r",
          "default": "关闭",
          "desc": "递归删除目录。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制删除尚未暂存、会丢失改动的已跟踪文件。"
        },
        {
          "flag": "-n, --dry-run",
          "default": "关闭",
          "desc": "只显示将被删除的文件。"
        }
      ],
      "sample": {
        "output": "$ git rm old.js\nrm 'old.js'\n$ git status -s\nD  old.js",
        "explain": "`git rm` 同时删除工作区文件并暂存删除；status 显示 D(已删待提交)。仅删工作区用 `rm` 后 `git add`。"
      }
    },
    {
      "name": "git mv",
      "category": "g_commit",
      "description": "移动或重命名文件，Git 会识别为改名并自动暂存。",
      "keywords": [
        "移动",
        "git mv"
      ],
      "examples": [
        {
          "cmd": "git mv a.txt b.txt",
          "desc": "重命名"
        }
      ],
      "frequency": "中",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<源> <目标>",
          "default": "无",
          "desc": "移动或重命名文件，Git 自动记录为改名并暂存。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "覆盖目标位置已存在的文件。"
        },
        {
          "flag": "-n, --dry-run",
          "default": "关闭",
          "desc": "只显示将执行的操作。"
        }
      ],
      "sample": {
        "output": "$ git mv a.js src/a.js\n$ git status -s\nR  a.js -> src/a.js",
        "explain": "`git mv` 移动/重命名并暂存；status 以 R 标记重命名(保留历史关联)，优于手动 mv+add。"
      }
    },
    {
      "name": "git clean",
      "category": "g_commit",
      "description": "删除未跟踪的文件/目录，-f 才真正删（默认只提示），清理构建产物。",
      "keywords": [
        "清理",
        "git clean"
      ],
      "examples": [
        {
          "cmd": "git clean -fd",
          "desc": "删未跟踪文件/目录"
        },
        {
          "cmd": "git clean -n",
          "desc": "预览"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "-fd 不可恢复，先 -n 预览",
      "compare": null,
      "options": [
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "实际删除未跟踪文件；默认不加此项是空跑提示（安全保护）。"
        },
        {
          "flag": "-d",
          "default": "关闭",
          "desc": "同时删除未跟踪的目录。"
        },
        {
          "flag": "-x",
          "default": "关闭",
          "desc": "也删除被 .gitignore 忽略的文件，可能清掉构建产物，慎用。"
        },
        {
          "flag": "-n, --dry-run",
          "default": "开启（默认）",
          "desc": "默认只列出将被清除的文件，需 -f 才真正删除。"
        },
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "交互式逐项选择要清理的内容。"
        }
      ],
      "sample": {
        "output": "$ git clean -n\nWould remove debug.log\n$ git clean -f\nRemoving debug.log",
        "explain": "`git clean -n` 预览将被删除的未跟踪文件；`-f` 真正删除(危险，不可恢复)。`-d` 含未跟踪目录。"
      }
    },
    {
      "name": "git stage",
      "category": "g_commit",
      "description": "git add 的别名，把改动放入暂存区，语义更直观。",
      "keywords": [
        "暂存",
        "git stage"
      ],
      "examples": [
        {
          "cmd": "git stage .",
          "desc": "同 add"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "git stage 是 git add 的别名",
      "options": null,
      "sample": {
        "output": "$ git stage *.py\n$ git status -s\nA  main.py\nA  util.py",
        "explain": "`git stage` 是 `git add` 的同义别名，把改动加入暂存区；输出显示多个 .py 已暂存。"
      }
    },
    {
      "name": "git log",
      "category": "g_view",
      "description": "查看提交历史，--oneline 一行、--graph 看拓扑、可加范围过滤。",
      "keywords": [
        "历史",
        "git log"
      ],
      "examples": [
        {
          "cmd": "git log",
          "desc": "默认历史"
        },
        {
          "cmd": "git log --oneline --graph --all",
          "desc": "图形化"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "-n <数量>",
          "default": "无",
          "desc": "只显示最近 N 条提交。"
        },
        {
          "flag": "--oneline",
          "default": "关闭",
          "desc": "每条提交压成一行（短哈希+说明），便于概览。"
        },
        {
          "flag": "--graph",
          "default": "关闭",
          "desc": "用 ASCII 图展示分支合并拓扑。"
        },
        {
          "flag": "--all",
          "default": "关闭",
          "desc": "显示所有分支的提交，而非仅当前分支。"
        },
        {
          "flag": "--stat",
          "default": "关闭",
          "desc": "显示每次提交改动的文件与增删行数。"
        },
        {
          "flag": "-p, --patch",
          "default": "关闭",
          "desc": "显示提交引入的具体差异。"
        },
        {
          "flag": "--author=<作者>",
          "default": "无",
          "desc": "按提交者姓名/邮箱筛选。"
        },
        {
          "flag": "--since=<时间> / --until=<时间>",
          "default": "无",
          "desc": "按日期区间筛选，如 --since=\"1 week ago\"。"
        },
        {
          "flag": "--grep=<模式>",
          "default": "无",
          "desc": "在提交说明中搜索关键词。"
        },
        {
          "flag": "--pretty=<格式>",
          "default": "medium",
          "desc": "自定义输出格式；--pretty=format:'%h %s' 可精确控制字段。"
        }
      ],
      "sample": {
        "output": "$ git log --oneline -3\n3a1b2c4 feat: add login page\n8f2d1a0 fix: header style\n1c9e8b7 init project",
        "explain": "`git log` 显示提交历史；`--oneline` 单行精简，每行=短哈希+说明。可加 `--graph --all` 看分支图。"
      }
    },
    {
      "name": "git show",
      "category": "g_view",
      "description": "显示某次提交（或对象）的内容与差异，默认看 HEAD。",
      "keywords": [
        "显示",
        "git show"
      ],
      "examples": [
        {
          "cmd": "git show",
          "desc": "看最近提交"
        },
        {
          "cmd": "git show <sha>",
          "desc": "看某提交"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<对象>",
          "default": "HEAD",
          "desc": "显示提交/标签/对象的内容与差异，默认 HEAD。"
        },
        {
          "flag": "<提交>:<路径>",
          "default": "无",
          "desc": "显示某次提交中某文件的内容（只读查看历史版本）。"
        },
        {
          "flag": "--stat",
          "default": "关闭",
          "desc": "显示改动统计。"
        },
        {
          "flag": "-s, --no-patch",
          "default": "关闭",
          "desc": "只显示提交元信息（作者、时间、说明），不显示差异。"
        },
        {
          "flag": "--pretty=<格式>",
          "default": "medium",
          "desc": "自定义输出格式。"
        }
      ],
      "sample": {
        "output": "$ git show 3a1b2c4\ncommit 3a1b2c4...\nAuthor: Alice <alice@example.com>\nDate:   2026-08-04\n    feat: add login page\ndiff --git a/app.js b/app.js\n+ console.log('login')",
        "explain": "`git show <commit>` 显示该次提交的元信息+完整 diff；便于查看某次改动的具体内容。"
      }
    },
    {
      "name": "git diff",
      "category": "g_view",
      "description": "比较工作区/暂存区/提交之间的差异，定位具体改动。",
      "keywords": [
        "差异",
        "git diff"
      ],
      "examples": [
        {
          "cmd": "git diff",
          "desc": "工作区 vs 暂存"
        },
        {
          "cmd": "git diff --staged",
          "desc": "暂存 vs 上次提交"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "（无参数）",
          "default": "工作区 vs 暂存区",
          "desc": "显示未暂存的工作区改动。"
        },
        {
          "flag": "--cached, --staged",
          "default": "关闭",
          "desc": "显示已暂存未提交的改动（对比 HEAD）。"
        },
        {
          "flag": "<提交A> <提交B>",
          "default": "无",
          "desc": "比较两个提交之间的差异。"
        },
        {
          "flag": "<分支A>...<分支B>",
          "default": "无",
          "desc": "显示两分支分叉以来各自独有的改动。"
        },
        {
          "flag": "--stat",
          "default": "关闭",
          "desc": "以统计方式（文件+增删行）展示差异。"
        },
        {
          "flag": "--name-only",
          "default": "关闭",
          "desc": "只列出发生变化的文件路径。"
        },
        {
          "flag": "--word-diff",
          "default": "关闭",
          "desc": "按词而非按行展示差异，适合 prose/文档。"
        },
        {
          "flag": "-w, --ignore-all-space",
          "default": "关闭",
          "desc": "忽略空白变化，避免无关差异。"
        }
      ],
      "sample": {
        "output": "$ git diff\ndiff --git a/index.html b/index.html\n-index.html\n+<title>New</title>",
        "explain": "`git diff` 显示**工作区 vs 暂存区**的差异；`git diff --cached` 看暂存区 vs 上次提交。`+` 新增、`-` 删除。"
      }
    },
    {
      "name": "git blame",
      "category": "g_view",
      "description": "逐行标注每行最后由谁、在哪个提交修改，追溯责任与动机。",
      "keywords": [
        "溯源",
        "git blame"
      ],
      "examples": [
        {
          "cmd": "git blame f.txt",
          "desc": "看每行作者"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<文件>",
          "default": "无",
          "desc": "逐行标注每行最后修改的提交、作者与时间。"
        },
        {
          "flag": "-L <起>,<止>",
          "default": "无",
          "desc": "限定标注的行范围（如 -L 10,20）。"
        },
        {
          "flag": "-C",
          "default": "关闭",
          "desc": "检测跨文件移动/复制的代码来源，定位真实作者。"
        },
        {
          "flag": "-w",
          "default": "关闭",
          "desc": "忽略空白改动，避免误判作者。"
        },
        {
          "flag": "--show-email",
          "default": "关闭",
          "desc": "显示作者邮箱而非姓名。"
        }
      ],
      "sample": {
        "output": "$ git blame -L 5,7 app.js\n3a1b2c4 (Alice 2026-08-04 1) function f() {\n3a1b2c4 (Alice 2026-08-04 2)   return 1;\n8f2d1a0 (Bob   2026-08-03 3) }",
        "explain": "`git blame -L 5,7` 逐行标注第 5-7 行是谁、何时、哪次提交写的；追溯\"谁改了这行\"利器。"
      }
    },
    {
      "name": "git grep",
      "category": "g_view",
      "description": "在仓库历史与跟踪文件中搜索内容，比系统 grep 更懂 Git。",
      "keywords": [
        "搜索",
        "git grep"
      ],
      "examples": [
        {
          "cmd": "git grep 'func'",
          "desc": "在版本库搜"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<模式>",
          "default": "无",
          "desc": "在跟踪文件内容中搜索（默认搜索工作区）。"
        },
        {
          "flag": "-n, --line-number",
          "default": "开启（默认）",
          "desc": "显示匹配的行号。"
        },
        {
          "flag": "-i, --ignore-case",
          "default": "关闭",
          "desc": "忽略大小写。"
        },
        {
          "flag": "-v, --invert-match",
          "default": "关闭",
          "desc": "只显示不匹配的行。"
        },
        {
          "flag": "-l, --files-with-matches",
          "default": "关闭",
          "desc": "只列出含匹配的文件名。"
        },
        {
          "flag": "-e <模式>",
          "default": "无",
          "desc": "指定多个模式时逐个传入，可组合 -e A -e B。"
        },
        {
          "flag": "--color",
          "default": "随终端",
          "desc": "高亮匹配文本。"
        }
      ],
      "sample": {
        "output": "$ git grep -n 'TODO' -- '*.py'\napp/main.py:12:    # TODO refactor\nutil/helper.py:45:    # TODO add test",
        "explain": "`git grep` 在**版本库内**搜索(不搜未跟踪文件)，`-n` 带行号，`-- '*.py'` 限定类型；比系统 grep 更贴合仓库。"
      }
    },
    {
      "name": "git shortlog",
      "category": "g_view",
      "description": "按作者汇总提交数，-sn 看各人贡献量。",
      "keywords": [
        "汇总",
        "git shortlog"
      ],
      "examples": [
        {
          "cmd": "git shortlog -sn",
          "desc": "各作者提交数"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git shortlog -sne\n    12  Alice <alice@example.com>\n     5  Bob <bob@example.com>",
        "explain": "`git shortlog -sne` 按作者汇总提交数(s 计数、n 按提交数排序、e 显示邮箱)；看团队贡献分布。"
      }
    },
    {
      "name": "git describe",
      "category": "g_view",
      "description": "用最近的标签与距离描述某次提交，发布版本号常用。",
      "keywords": [
        "描述",
        "git describe"
      ],
      "examples": [
        {
          "cmd": "git describe --tags",
          "desc": "最近标签+偏移"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git describe --tags\nv1.2.0-3-g3a1b2c4",
        "explain": "`git describe --tags` 用最近的标签+领先提交数+短哈希描述当前提交(如 v1.2.0 后第3个提交)；生成可读版本号。"
      }
    },
    {
      "name": "git reflog",
      "category": "g_view",
      "description": "记录 HEAD 与引用的变动，可找回误删/误改的提交（救命命令）。",
      "keywords": [
        "引用日志",
        "git reflog"
      ],
      "examples": [
        {
          "cmd": "git reflog",
          "desc": "看 HEAD 变动历史"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "误删提交可用 reflog 找回",
      "compare": null,
      "options": [
        {
          "flag": "<引用>",
          "default": "HEAD",
          "desc": "查看 HEAD 的变动记录，可定位误删/误改的提交以恢复。"
        },
        {
          "flag": "show <引用>",
          "default": "无",
          "desc": "显示某引用（如分支名）的变更历史。"
        },
        {
          "flag": "expire",
          "default": "关闭",
          "desc": "清除过期的 reflog 条目（默认保留 90 天）。"
        },
        {
          "flag": "delete <引用@>{n}",
          "default": "无",
          "desc": "手动删除某条 reflog 记录。"
        }
      ],
      "sample": {
        "output": "$ git reflog -3\n3a1b2c4 HEAD@{0}: commit: feat: add login page\n8f2d1a0 HEAD@{1}: checkout: moving from dev to main\n1c9e8b7 HEAD@{2}: commit: init project",
        "explain": "`git reflog` 记录 HEAD 的每一次移动(提交/切换/重置)；**找回误删提交**的救命绳，可 `git reset --hard HEAD@{n}` 回退。"
      }
    },
    {
      "name": "git whatchanged",
      "category": "g_view",
      "description": "显示每次提交改动的文件列表，-p 附带差异。",
      "keywords": [
        "改动",
        "git whatchanged"
      ],
      "examples": [
        {
          "cmd": "git whatchanged -p",
          "desc": "类 log 加补丁"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "类似 git log 但侧重文件列表",
      "options": null,
      "sample": {
        "output": "$ git whatchanged --oneline -2\n3a1b2c4 feat: add login page\n:000000 100644 0000000... a/app.js (A)\n8f2d1a0 fix: header\n:100644 100644 b1..c2  index.html (M)",
        "explain": "`git whatchanged` 以\"提交 + 受影响的文件及状态(A新增/M修改/D删除)\"形式展示历史；类似 log 但聚焦文件变更。"
      }
    },
    {
      "name": "git difftool",
      "category": "g_view",
      "description": "用配置的外部对比工具（GUI）查看 diff，比纯文本更直观。",
      "keywords": [
        "外部对比",
        "difftool",
        "vimdiff",
        "meld"
      ],
      "examples": [
        {
          "cmd": "git difftool",
          "desc": "用工具看工作区与暂存差异"
        },
        {
          "cmd": "git difftool HEAD~1",
          "desc": "对比上一次提交"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "需先配置 diff.tool（git config --global diff.tool vimdiff）；可视为图形化的 git diff",
      "compare": null,
      "options": [
        {
          "flag": "<参数>",
          "default": "同 git diff",
          "desc": "接受与 git diff 相同的比较范围参数。"
        },
        {
          "flag": "-d, --dir-diff",
          "default": "关闭",
          "desc": "以目录方式整体对比，便于在外部工具中浏览。"
        },
        {
          "flag": "-t <工具>, --tool=<工具>",
          "default": "随配置",
          "desc": "指定外部对比工具（vimdiff/Code/Beyond Compare 等）。"
        },
        {
          "flag": "-y, --no-prompt",
          "default": "关闭",
          "desc": "跳过逐个确认直接打开工具。"
        }
      ],
      "sample": {
        "output": "$ git difftool\n(启动配置的可视化对比工具如 vimdiff 比对改动)",
        "explain": "`git difftool` 用图形/外部对比工具(如 vimdiff、meld)替代纯文本 diff，直观比对工作区改动。"
      }
    },
    {
      "name": "git branch",
      "category": "g_branch",
      "description": "列出/创建/删除分支，-d 删已合并分支，-m 重命名。",
      "keywords": [
        "分支",
        "git branch"
      ],
      "examples": [
        {
          "cmd": "git branch",
          "desc": "列分支"
        },
        {
          "cmd": "git branch -d feat",
          "desc": "删已合并分支"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<分支>",
          "default": "无",
          "desc": "创建新分支（不切换）。"
        },
        {
          "flag": "-d, --delete",
          "default": "关闭",
          "desc": "删除已合并的分支；-D 强制删除未合并分支（会丢历史）。"
        },
        {
          "flag": "-m, --move",
          "default": "关闭",
          "desc": "重命名当前分支；-M 覆盖已存在的同名分支。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "列出本地与远程分支。"
        },
        {
          "flag": "-r, --remotes",
          "default": "关闭",
          "desc": "只列出远程跟踪分支。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "显示各分支最新提交的主题。"
        },
        {
          "flag": "--merged / --no-merged",
          "default": "关闭",
          "desc": "筛选已/尚未合并到当前分支的分支。"
        },
        {
          "flag": "-u <上游>, --set-upstream-to",
          "default": "无",
          "desc": "设置本地分支跟踪的远程上游（如 origin/main）。"
        }
      ],
      "sample": {
        "output": "$ git branch\n  dev\n* main\n$ git branch feature-x\n$ git branch -d dev",
        "explain": "`git branch` 列出本地分支(`*` 为当前)；`feature-x` 新建分支；`-d dev` 删除已合并分支。"
      }
    },
    {
      "name": "git switch",
      "category": "g_branch",
      "description": "切换或创建分支（现代写法），比 checkout 语义清晰。",
      "keywords": [
        "切换分支",
        "git switch"
      ],
      "examples": [
        {
          "cmd": "git switch main",
          "desc": "切换"
        },
        {
          "cmd": "git switch -c feat",
          "desc": "新建并切换"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "switch 专用于分支（2.23+），比 checkout 清晰",
      "options": [
        {
          "flag": "<分支>",
          "default": "无",
          "desc": "切换到已存在的分支（现代写法，取代 checkout）。"
        },
        {
          "flag": "-c <分支>, --create=<分支>",
          "default": "无",
          "desc": "创建并切换到新分支。"
        },
        {
          "flag": "-C <分支>",
          "default": "无",
          "desc": "强制创建（覆盖同名分支）并切换。"
        },
        {
          "flag": "-",
          "default": "无",
          "desc": "切换回上一个分支。"
        },
        {
          "flag": "--detach",
          "default": "关闭",
          "desc": "切到某提交进入游离 HEAD 状态（临时查看旧版本）。"
        }
      ],
      "sample": {
        "output": "$ git switch dev\nSwitched to branch 'dev'\n$ git switch -c hotfix\nSwitched to a new branch 'hotfix'",
        "explain": "`git switch dev` 切换分支；`-c hotfix` 新建并切换。比 checkout 语义更清晰(只管分支切换)。"
      }
    },
    {
      "name": "git checkout",
      "category": "g_branch",
      "description": "切换分支或恢复文件（旧式），现代建议用 switch/restore 替代。",
      "keywords": [
        "检出",
        "撤销改动",
        "git checkout"
      ],
      "examples": [
        {
          "cmd": "git checkout main",
          "desc": "切分支"
        },
        {
          "cmd": "git checkout -- f.txt",
          "desc": "丢弃改动"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "checkout -- 丢弃改动不可恢复；切分支用 switch 更安全",
      "compare": "checkout 身兼切换分支与恢复文件两职，易混淆；新版拆为 switch（切分支）与 restore（恢复文件），语义更清晰。",
      "options": [
        {
          "flag": "<分支>",
          "default": "无",
          "desc": "切换分支（旧式写法，建议改用 git switch）。"
        },
        {
          "flag": "<文件>...",
          "default": "无",
          "desc": "用暂存区版本覆盖工作区文件，会丢弃未保存改动，慎用。"
        },
        {
          "flag": "-b <分支>",
          "default": "无",
          "desc": "创建并切换分支（旧式，建议改用 switch -c）。"
        },
        {
          "flag": "-- <文件>",
          "default": "无",
          "desc": "明确区分分支名与文件路径，避免歧义。"
        },
        {
          "flag": "<提交> -- <文件>",
          "default": "无",
          "desc": "从某历史提交恢复指定文件到工作区。"
        }
      ],
      "sample": {
        "output": "$ git checkout main\nSwitched to branch 'main'\n$ git checkout -b feature\nSwitched to a new branch 'feature'\n$ git checkout -- index.html",
        "explain": "`git checkout` 多用途：切分支、`-b` 新建、`<file>` 丢弃工作区改动还原文件(危险)。现代建议 switch/restore 替代。"
      }
    },
    {
      "name": "git merge",
      "category": "g_branch",
      "description": "把另一分支的改动合并进当前分支，可能生成合并提交。",
      "keywords": [
        "合并",
        "git merge"
      ],
      "examples": [
        {
          "cmd": "git merge feat",
          "desc": "合并 feat 到当前"
        },
        {
          "cmd": "git merge --no-ff feat",
          "desc": "保留合并点"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "merge 保留完整历史并生成合并提交（--no-ff 强制）；rebase 把提交重排成线性历史更整洁，但改写历史，慎用于公共分支。",
      "options": [
        {
          "flag": "<分支>",
          "default": "无",
          "desc": "将指定分支合并进当前分支。"
        },
        {
          "flag": "--no-ff",
          "default": "关闭",
          "desc": "强制生成合并提交，保留分支拓扑，便于回溯。"
        },
        {
          "flag": "--ff-only",
          "default": "关闭",
          "desc": "仅允许快进合并，否则中止，保持线性历史。"
        },
        {
          "flag": "--squash",
          "default": "关闭",
          "desc": "把多次提交压缩为一次再提交，历史更整洁但丢失细节。"
        },
        {
          "flag": "-m <信息>",
          "default": "无",
          "desc": "为合并提交指定说明（必要时）。"
        },
        {
          "flag": "--abort",
          "default": "无",
          "desc": "中止进行中的合并，恢复到合并前状态。"
        }
      ],
      "sample": {
        "output": "$ git merge feature\nUpdating 8f2d1a0..3a1b2c4\nFast-forward\n index.html | 2 +-\n 1 file changed",
        "explain": "`git merge feature` 把 feature 合并进当前分支；Fast-forward 表示可直接快进(无分叉)；有冲突会标记并暂停。"
      }
    },
    {
      "name": "git mergetool",
      "category": "g_branch",
      "description": "对冲突文件启动外部合并工具（如 vimdiff）辅助解决。",
      "keywords": [
        "解决冲突",
        "git mergetool"
      ],
      "examples": [
        {
          "cmd": "git mergetool",
          "desc": "启动合并工具"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<文件>...",
          "default": "无",
          "desc": "对冲突文件启动外部合并工具。"
        },
        {
          "flag": "-t <工具>, --tool=<工具>",
          "default": "随配置",
          "desc": "指定合并工具（vimdiff/Code 等）。"
        },
        {
          "flag": "-y, --no-prompt",
          "default": "关闭",
          "desc": "跳过确认直接打开工具。"
        },
        {
          "flag": "--abort",
          "default": "无",
          "desc": "中止合并工具流程。"
        }
      ],
      "sample": {
        "output": "$ git mergetool\nMerging: index.html\n(打开 vimdiff 三方对比, 解决后保存退出)",
        "explain": "合并冲突时 `git mergetool` 调起可视化工具(如 vimdiff)逐文件解决冲突；解决后 `git add` 标记完成。"
      }
    },
    {
      "name": "git rebase",
      "category": "g_branch",
      "description": "把当前分支的提交重放到目标分支之后，得到线性历史（改写历史）。",
      "keywords": [
        "变基",
        "git rebase"
      ],
      "examples": [
        {
          "cmd": "git rebase main",
          "desc": "把当前变基到 main"
        },
        {
          "cmd": "git rebase -i HEAD~3",
          "desc": "交互整理"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": "已推送的提交勿 rebase，会改写历史",
      "compare": "rebase 把当前分支提交接到目标之后得到线性历史；merge 保留分叉拓扑。想整洁用 rebase，想可追溯用 merge。",
      "options": [
        {
          "flag": "<上游>",
          "default": "无",
          "desc": "把当前分支的提交重放到上游之后，改写历史（勿对共享分支使用）。"
        },
        {
          "flag": "-i, --interactive",
          "default": "关闭",
          "desc": "交互式重排/合并/改写提交（整理本地历史）。"
        },
        {
          "flag": "--onto <新基>",
          "default": "无",
          "desc": "仅将指定区间的提交变基到新基线（复杂迁移用）。"
        },
        {
          "flag": "--continue",
          "default": "无",
          "desc": "解决冲突后继续变基。"
        },
        {
          "flag": "--abort",
          "default": "无",
          "desc": "中止变基，回退到开始前的状态。"
        },
        {
          "flag": "--skip",
          "default": "无",
          "desc": "跳过当前有冲突的提交。"
        },
        {
          "flag": "-x <命令>, --exec=<命令>",
          "default": "无",
          "desc": "每步重放后执行指定命令（如跑测试），验证历史正确。"
        }
      ],
      "sample": {
        "output": "$ git rebase main\nSuccessfully rebased and updated refs/heads/feature.\n$ git rebase -i HEAD~3",
        "explain": "`git rebase main` 把当前分支提交\"重放\"到 main 之上，得到线性历史；`-i` 交互改写最近 3 个提交(整理提交)。改写已推送历史需谨慎。"
      }
    },
    {
      "name": "git cherry-pick",
      "category": "g_branch",
      "description": "把指定的某个/几个提交复制到当前分支，选择性移植改动。",
      "keywords": [
        "遴选",
        "git cherry-pick"
      ],
      "examples": [
        {
          "cmd": "git cherry-pick <sha>",
          "desc": "复制到当前分支"
        }
      ],
      "frequency": "中",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<提交>...",
          "default": "无",
          "desc": "把指定提交引入的改动复制到当前分支（可一次多个）。"
        },
        {
          "flag": "-n, --no-commit",
          "default": "关闭",
          "desc": "应用改动但不自动提交，便于合并多笔后再统一提交。"
        },
        {
          "flag": "-x",
          "default": "关闭",
          "desc": "在提交说明中记录来源提交哈希，便于追溯。"
        },
        {
          "flag": "-e, --edit",
          "default": "关闭",
          "desc": "复制时允许编辑提交说明。"
        },
        {
          "flag": "--abort",
          "default": "无",
          "desc": "中止进行中的 cherry-pick。"
        },
        {
          "flag": "--continue",
          "default": "无",
          "desc": "解决冲突后继续。"
        }
      ],
      "sample": {
        "output": "$ git cherry-pick 8f2d1a0\n[feature 9c0d1e2] fix: header\n Date: 2026-08-03\n 1 file changed",
        "explain": "`git cherry-pick <commit>` 把某个已有提交的改动**复制**到当前分支；挑选个别提交而不合并整条分支。"
      }
    },
    {
      "name": "git tag",
      "category": "g_branch",
      "description": "打标签标记里程碑（如 v1.0），-a 附注标签含说明。",
      "keywords": [
        "标签",
        "git tag"
      ],
      "examples": [
        {
          "cmd": "git tag v1.0",
          "desc": "轻量标签"
        },
        {
          "cmd": "git tag -a v1.0 -m 'rel'",
          "desc": "附注标签"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<标签>",
          "default": "无",
          "desc": "创建轻量标签，指向当前提交。"
        },
        {
          "flag": "-a <标签>, --annotate",
          "default": "关闭",
          "desc": "创建带说明与作者的附注标签（发布推荐）。"
        },
        {
          "flag": "-m <信息>",
          "default": "无",
          "desc": "为附注标签提供说明。"
        },
        {
          "flag": "-d <标签>, --delete",
          "default": "关闭",
          "desc": "删除本地标签。"
        },
        {
          "flag": "-l <模式>, --list",
          "default": "关闭",
          "desc": "列出匹配模式的标签。"
        },
        {
          "flag": "-n <行数>",
          "default": "关闭",
          "desc": "列出标签说明的前 N 行。"
        }
      ],
      "sample": {
        "output": "$ git tag v1.2.0\n$ git tag -a v1.2.0 -m \"release 1.2\"\n$ git tag\nv1.2.0",
        "explain": "`git tag v1.2.0` 打轻量标签；`-a -m` 打附注标签(带说明)。`git tag` 列出；发布里程碑用。"
      }
    },
    {
      "name": "git range-diff",
      "category": "g_branch",
      "description": "比较两个提交区间的差异，审查补丁改版很实用。",
      "keywords": [
        "区间差异",
        "git range-diff"
      ],
      "examples": [
        {
          "cmd": "git range-diff A..B C..D",
          "desc": "比较两区间"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git range-diff main~3..main feature~3..feature\n1:  3a1b2c4 = 9c0d1e2  feat: add login",
        "explain": "`git range-diff` 比较两个提交区间的差异(常用于 rebase 后核对是否一致)；`=` 表示两边提交等价。"
      }
    },
    {
      "name": "git merge-tree",
      "category": "g_branch",
      "description": "预览合并结果而不真正改动仓库，提前发现冲突。",
      "keywords": [
        "预览合并",
        "merge-tree",
        "冲突检测"
      ],
      "examples": [
        {
          "cmd": "git merge-tree --write-tree main feat",
          "desc": "计算合并树并报告冲突"
        },
        {
          "cmd": "git merge-tree main feat",
          "desc": "纯文本合并输出"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "常用于 CI 检测能否无冲突合并；不修改工作区与提交历史",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git merge-tree main feature\n<<<<<<< .base\n...三重冲突标记展示合并结果(不实际写入)",
        "explain": "`git merge-tree` **不实际合并**地计算两分支合并结果(用于钩子/预览)；输出含冲突标记供分析。"
      }
    },
    {
      "name": "git remote",
      "category": "g_remote",
      "description": "管理远程仓库（add/remove/rename/show），origin 通常是默认名。",
      "keywords": [
        "远程",
        "git remote"
      ],
      "examples": [
        {
          "cmd": "git remote add origin url",
          "desc": "加远程"
        },
        {
          "cmd": "git remote -v",
          "desc": "看远程"
        }
      ],
      "frequency": "高",
      "difficulty": "入门",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "add <名> <地址>",
          "default": "无",
          "desc": "添加远程仓库（如 origin）。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "显示远程的 fetch/push 地址详情。"
        },
        {
          "flag": "show <名>",
          "default": "无",
          "desc": "显示某远程仓库的分支与跟踪信息。"
        },
        {
          "flag": "rename <旧> <新>",
          "default": "无",
          "desc": "重命名远程。"
        },
        {
          "flag": "remove <名> / rm <名>",
          "default": "无",
          "desc": "删除远程。"
        },
        {
          "flag": "set-url <名> <新地址>",
          "default": "无",
          "desc": "修改远程地址。"
        },
        {
          "flag": "prune <名>",
          "default": "关闭",
          "desc": "清理本地已不存在于远程的跟踪分支。"
        }
      ],
      "sample": {
        "output": "$ git remote -v\norigin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)\n$ git remote add upstream https://github.com/up/repo.git",
        "explain": "`git remote -v` 列出远程仓库及 URL；`add upstream` 增一个上游远程，用于同步原项目更新。"
      }
    },
    {
      "name": "git fetch",
      "category": "g_remote",
      "description": "从远程拉取最新提交与引用，不自动合并，安全查看他人进展。",
      "keywords": [
        "拉取",
        "git fetch"
      ],
      "examples": [
        {
          "cmd": "git fetch origin",
          "desc": "取远端更新"
        },
        {
          "cmd": "git fetch -p",
          "desc": "删过时远程分支"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "fetch 只拉取远程更新到本地引用，不改动工作区，安全；pull = fetch + 合并/变基，会直接改动当前分支。",
      "options": [
        {
          "flag": "<远程>",
          "default": "origin",
          "desc": "从远程拉取最新引用与对象（不合并，安全）。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "从所有远程拉取。"
        },
        {
          "flag": "-p, --prune",
          "default": "关闭",
          "desc": "同步删除本地已失效的远程跟踪分支。"
        },
        {
          "flag": "--depth <深度>",
          "default": "无",
          "desc": "浅层获取，配合 CI 节省时间与空间。"
        },
        {
          "flag": "-t, --tags",
          "default": "关闭",
          "desc": "只获取标签。"
        },
        {
          "flag": "--dry-run",
          "default": "关闭",
          "desc": "只显示将要获取的更新。"
        }
      ],
      "sample": {
        "output": "$ git fetch origin\nremote: Enumerating objects: 15, done.\nFrom github.com:user/repo\n   8f2d1a0..3a1b2c4  main       -> origin/main",
        "explain": "`git fetch` 从远程拉取**最新对象但不动工作区**；origin/main 指针更新，可再 review 后合并。比 pull 更安全。"
      }
    },
    {
      "name": "git pull",
      "category": "g_remote",
      "description": "从远程拉取并合并到当前分支，等于 fetch + merge（或 rebase）。",
      "keywords": [
        "拉取合并",
        "git pull"
      ],
      "examples": [
        {
          "cmd": "git pull",
          "desc": "拉取并合并"
        },
        {
          "cmd": "git pull --rebase",
          "desc": "变基式拉取"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "pull 等价于 fetch+merge；用 --rebase 减少合并提交",
      "compare": null,
      "options": [
        {
          "flag": "<远程> <分支>",
          "default": "origin/当前",
          "desc": "拉取并合并远程改动到当前分支。"
        },
        {
          "flag": "--rebase",
          "default": "关闭",
          "desc": "拉取后以变基方式整合，保持线性历史（常设为默认）。"
        },
        {
          "flag": "--ff-only",
          "default": "关闭",
          "desc": "仅快进，否则失败，作为安全策略防止意外合并。"
        },
        {
          "flag": "--autostash",
          "default": "关闭",
          "desc": "自动暂存未提交改动，合并后恢复，避免工作区不干净报错。"
        },
        {
          "flag": "--depth <深度>",
          "default": "无",
          "desc": "浅层拉取。"
        }
      ],
      "sample": {
        "output": "$ git pull origin main\nUpdating 8f2d1a0..3a1b2c4\nFast-forward\n index.html | 2 +-\n$ git pull --rebase",
        "explain": "`git pull` = fetch + merge，直接更新工作区分支；`--rebase` 改为 rebase 保持线性历史。可能触发冲突。"
      }
    },
    {
      "name": "git push",
      "category": "g_remote",
      "description": "把本地提交推送到远程，-u 建立上游跟踪关系。",
      "keywords": [
        "推送",
        "git push"
      ],
      "examples": [
        {
          "cmd": "git push -u origin main",
          "desc": "首次推送并关联"
        },
        {
          "cmd": "git push --force-with-lease",
          "desc": "安全强推"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "已推送的历史勿强推；必须时用 --force-with-lease",
      "compare": null,
      "options": [
        {
          "flag": "<远程> <分支>",
          "default": "origin/当前",
          "desc": "推送本地分支到远程。"
        },
        {
          "flag": "-u, --set-upstream",
          "default": "关闭",
          "desc": "推送并建立上游跟踪关系（首次推送常用）。"
        },
        {
          "flag": "-f, --force",
          "default": "关闭",
          "desc": "强制覆盖远程历史，他人已推送的提交会丢失，极为危险。"
        },
        {
          "flag": "--force-with-lease",
          "default": "关闭",
          "desc": "较安全的强制推送，仅当远程无他人新提交时才覆盖。"
        },
        {
          "flag": "--tags",
          "default": "关闭",
          "desc": "一并推送标签。"
        },
        {
          "flag": "--delete <分支>",
          "default": "无",
          "desc": "删除远程分支。"
        },
        {
          "flag": "--dry-run",
          "default": "关闭",
          "desc": "只显示将要推送的内容。"
        }
      ],
      "sample": {
        "output": "$ git push origin main\nEnumerating objects: 12, done.\nTo github.com:user/repo.git\n   8f2d1a0..3a1b2c4  main -> main\n$ git push -u origin feature",
        "explain": "`git push origin main` 把本地提交推到远程 main；`-u` 建立跟踪，之后可简写 `git push`。**已推送后勿用 --force 覆盖他人提交**。"
      }
    },
    {
      "name": "git submodule",
      "category": "g_remote",
      "description": "管理子模块，把另一个仓库作为当前仓库的子目录嵌入。",
      "keywords": [
        "子模块",
        "git submodule"
      ],
      "examples": [
        {
          "cmd": "git submodule add url lib",
          "desc": "加子模块"
        },
        {
          "cmd": "git submodule update --init",
          "desc": "初始化"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git submodule add https://github.com/x/lib lib\nCloning into 'lib'...\n$ git submodule update --init --recursive",
        "explain": "`git submodule add` 把另一仓库作为子模块挂入 lib/；`update --init --recursive` 拉取并初始化嵌套子模块。"
      }
    },
    {
      "name": "git worktree",
      "category": "g_remote",
      "description": "在独立目录检出同一仓库的另一分支，并行开发不互相干扰。",
      "keywords": [
        "工作树",
        "git worktree"
      ],
      "examples": [
        {
          "cmd": "git worktree add ../wt main",
          "desc": "另开一个分支目录"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git worktree add ../hotfix main\nPreparing worktree (checking out 'main')\n$ git worktree list\n/path/proj       abc123 [main]\n/path/hotfix     def456 [hotfix]",
        "explain": "`git worktree add` 在另一目录检出另一分支，多个工作区共享同一仓库；`list` 查看。避免频繁切换分支丢失改动。"
      }
    },
    {
      "name": "git bundle",
      "category": "g_remote",
      "description": "把仓库打包成单文件，便于离线或受限网络传递完整历史。",
      "keywords": [
        "打包",
        "git bundle"
      ],
      "examples": [
        {
          "cmd": "git bundle create r.bundle --all",
          "desc": "离线传输用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git bundle create repo.bundle main\n$ git clone repo.bundle repo2",
        "explain": "`git bundle create` 把仓库打包成单文件(适合无网络传输)；对方 `clone` 该 .bundle 即可复原，离线分发用。"
      }
    },
    {
      "name": "git request-pull",
      "category": "g_remote",
      "description": "生成一段 pull request 说明文本，发给上游维护者。",
      "keywords": [
        "拉取请求",
        "git request-pull"
      ],
      "examples": [
        {
          "cmd": "git request-pull base origin",
          "desc": "生成说明"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git request-pull origin/main myfork feature\nThe following changes since commit 8f2d1a0:\n  feat: add login (3a1b2c4)\nare available in the git repository at:",
        "explain": "`git request-pull` 生成发给上游维护者的拉取请求摘要(基于某基线、指向你的 fork)；用于邮件式协作。"
      }
    },
    {
      "name": "git ls-remote",
      "category": "g_remote",
      "description": "列出远程仓库的分支/标签引用与哈希，确认远程状态。",
      "keywords": [
        "列出远程",
        "ls-remote",
        "查看分支",
        "查看标签"
      ],
      "examples": [
        {
          "cmd": "git ls-remote origin",
          "desc": "看远程分支与标签"
        },
        {
          "cmd": "git ls-remote --heads origin",
          "desc": "仅看分支"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "不拉取数据即可查看远端有哪些分支/标签，便于确认远程状态",
      "compare": null,
      "options": [
        {
          "flag": "<远程>",
          "default": "无",
          "desc": "列出远程仓库的引用（分支/标签）与对应哈希。"
        },
        {
          "flag": "--heads",
          "default": "关闭",
          "desc": "只列出分支引用。"
        },
        {
          "flag": "--tags",
          "default": "关闭",
          "desc": "只列出标签引用。"
        },
        {
          "flag": "--refs",
          "default": "关闭",
          "desc": "只显示已打包的引用（不含符号引用）。"
        }
      ],
      "sample": {
        "output": "$ git ls-remote origin\n3a1b2c4...  HEAD\n3a1b2c4...  refs/heads/main\n8f2d1a0...  refs/tags/v1.2.0",
        "explain": "`git ls-remote` 列出远程仓库的引用(分支/标签及其哈希)而**不克隆**；快速查看远程有哪些分支/标签。"
      }
    },
    {
      "name": "git reset",
      "category": "g_undo",
      "description": "移动 HEAD 与暂存区，--soft 保留改动、--hard 彻底丢弃，危险。",
      "keywords": [
        "重置",
        "撤销提交",
        "git reset"
      ],
      "examples": [
        {
          "cmd": "git reset --soft HEAD~1",
          "desc": "撤提交留改动"
        },
        {
          "cmd": "git reset --hard HEAD~1",
          "desc": "彻底丢弃"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": "--hard 丢弃工作区改动，不可恢复；优先 --soft/--mixed",
      "compare": "reset 移动 HEAD 并可改暂存区/工作区：--soft 只动指针保留改动，--mixed 取消暂存，--hard 全丢。恢复误删用 reflog。",
      "options": [
        {
          "flag": "--soft <提交>",
          "default": "无",
          "desc": "仅移动 HEAD，保留暂存区与工作区（撤销提交、保留改动）。"
        },
        {
          "flag": "--mixed <提交>",
          "default": "开启（默认）",
          "desc": "移动 HEAD 并重置暂存区，保留工作区改动（取消暂存）。"
        },
        {
          "flag": "--hard <提交>",
          "default": "关闭",
          "desc": "彻底重置到指定提交，工作区与暂存区改动全部丢弃，危险不可恢复。"
        },
        {
          "flag": "<文件>...",
          "default": "无",
          "desc": "仅把指定文件移出暂存区，不改动工作区（取消暂存单文件）。"
        },
        {
          "flag": "--keep <提交>",
          "default": "关闭",
          "desc": "尽量保留工作区改动，遇冲突则中止。"
        }
      ],
      "sample": {
        "output": "$ git reset --soft HEAD~1\n(最近提交撤回暂存区, 文件改动保留)\n$ git reset --hard HEAD~1\nHEAD is now at 8f2d1a0 fix: header",
        "explain": "`git reset` 移动分支指针：`--soft` 保留改动在暂存区、`--mixed`(默认) 留在工作区、`--hard` **丢弃改动**(危险)。"
      }
    },
    {
      "name": "git restore",
      "category": "g_undo",
      "description": "恢复工作区/暂存区文件（现代写法），取代旧式 checkout 文件。",
      "keywords": [
        "恢复",
        "撤销改动",
        "git restore"
      ],
      "examples": [
        {
          "cmd": "git restore --staged f",
          "desc": "移出暂存"
        },
        {
          "cmd": "git restore f",
          "desc": "丢弃工作区改动"
        }
      ],
      "frequency": "高",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "restore 专用于恢复（2.23+），语义清晰",
      "options": [
        {
          "flag": "<文件>...",
          "default": "无",
          "desc": "用暂存区/指定来源恢复工作区文件（取代旧式 checkout 文件）。"
        },
        {
          "flag": "--staged",
          "default": "关闭",
          "desc": "仅把文件移出暂存区，不动工作区。"
        },
        {
          "flag": "--source=<提交>",
          "default": "HEAD",
          "desc": "指定恢复来源（如某历史提交或分支）。"
        },
        {
          "flag": "--worktree",
          "default": "开启（默认）",
          "desc": "恢复工作区文件。"
        },
        {
          "flag": "--staged --worktree",
          "default": "关闭",
          "desc": "同时重置暂存区与工作区（等同 reset --hard 针对单文件）。"
        }
      ],
      "sample": {
        "output": "$ git restore index.html\n(丢弃 index.html 工作区改动, 还原为上次提交)\n$ git restore --staged app.js",
        "explain": "`git restore <file>` 丢弃工作区改动；`--staged` 把文件移出暂存区(保留改动)。替代 checkout 的部分用途，语义清晰。"
      }
    },
    {
      "name": "git revert",
      "category": "g_undo",
      "description": "生成一个反向提交来抵消某次提交，不改写历史，可安全用于共享分支。",
      "keywords": [
        "撤销",
        "撤销提交",
        "git revert"
      ],
      "examples": [
        {
          "cmd": "git revert <sha>",
          "desc": "生成抵消提交"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "revert 不改历史，适合已推送；reset 改历史",
      "options": [
        {
          "flag": "<提交>...",
          "default": "无",
          "desc": "生成新提交以抵消指定提交的改动，不改写历史（可安全用于共享分支）。"
        },
        {
          "flag": "-n, --no-commit",
          "default": "关闭",
          "desc": "应用反向改动但不提交，便于连续撤销多笔后再统一提交。"
        },
        {
          "flag": "--no-edit",
          "default": "关闭",
          "desc": "使用默认说明直接提交。"
        },
        {
          "flag": "--abort",
          "default": "无",
          "desc": "中止进行中的 revert。"
        },
        {
          "flag": "--continue",
          "default": "无",
          "desc": "解决冲突后继续。"
        }
      ],
      "sample": {
        "output": "$ git revert 3a1b2c4\n[main 7b8c9d0] Revert \"feat: add login page\"\n$ git log --oneline -1\n7b8c9d0 Revert \"feat: add login page\" ",
        "explain": "`git revert <commit>` **新建一个反向提交**来抵消某次改动；不改写历史，对公共分支安全(优于 reset)。"
      }
    },
    {
      "name": "git stash",
      "category": "g_undo",
      "description": "把未提交的改动暂存起来，干净切换任务，之后可 pop/apply 恢复。",
      "keywords": [
        "暂存快照",
        "git stash"
      ],
      "examples": [
        {
          "cmd": "git stash push -m 'wip'",
          "desc": "暂存"
        },
        {
          "cmd": "git stash pop",
          "desc": "恢复并删除"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "push [<说明>]",
          "default": "无",
          "desc": "暂存工作区与暂存区改动（可加说明便于区分）。"
        },
        {
          "flag": "list",
          "default": "无",
          "desc": "列出所有暂存条目。"
        },
        {
          "flag": "pop",
          "default": "无",
          "desc": "恢复最近一次暂存并删除该条目。"
        },
        {
          "flag": "apply [<条目>]",
          "default": "无",
          "desc": "恢复指定暂存但不删除，可重复应用。"
        },
        {
          "flag": "drop [<条目>]",
          "default": "无",
          "desc": "删除指定暂存条目。"
        },
        {
          "flag": "clear",
          "default": "无",
          "desc": "清空所有暂存。"
        },
        {
          "flag": "-u, --include-untracked",
          "default": "关闭",
          "desc": "一并暂存未跟踪文件。"
        },
        {
          "flag": "-a, --all",
          "default": "关闭",
          "desc": "连被忽略的文件也一并暂存。"
        }
      ],
      "sample": {
        "output": "$ git stash\nSaved working directory and index state WIP on main\n$ git stash list\nstash@{0}: WIP on main\n$ git stash pop",
        "explain": "`git stash` 暂存当前未提交改动(清理工作区)；`list` 查看；`pop` 恢复并删除栈顶暂存。临时切分支前好用。"
      }
    },
    {
      "name": "git format-patch",
      "category": "g_patch",
      "description": "把提交生成为邮件补丁文件，便于邮件列表提交代码。",
      "keywords": [
        "生成补丁",
        "git format-patch"
      ],
      "examples": [
        {
          "cmd": "git format-patch origin/main",
          "desc": "生成一系列 .patch"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git format-patch main..feature\n0001-feat-add-login.patch\n0002-fix-header.patch",
        "explain": "`git format-patch` 把提交区间生成为 .patch 邮件文件(含提交信息+diff)；适合邮件列表提交补丁。"
      }
    },
    {
      "name": "git am",
      "category": "g_patch",
      "description": "应用邮件补丁（git apply 的增强版），保留作者与提交说明。",
      "keywords": [
        "应用补丁",
        "git am"
      ],
      "examples": [
        {
          "cmd": "git am *.patch",
          "desc": "应用 mbox 补丁"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git am 0001-feat-add-login.patch\nApplying: feat: add login page",
        "explain": "`git am` 应用 format-patch 生成的补丁(保留原作者与提交信息)；邮件工作流接收补丁用。失败会提示冲突。"
      }
    },
    {
      "name": "git apply",
      "category": "g_patch",
      "description": "应用 diff 补丁到工作区，比 patch 更懂 Git 上下文。",
      "keywords": [
        "应用补丁",
        "git apply"
      ],
      "examples": [
        {
          "cmd": "git apply p.patch",
          "desc": "应用补丁"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": "apply 不动提交；am 会创建提交",
      "options": null,
      "sample": {
        "output": "$ git apply fix.patch\n(无输出即应用成功)\n$ git apply --check fix.patch",
        "explain": "`git apply` 应用普通 diff 补丁(不创建提交)；`--check` 只校验能否应用而不实际改动。比 am 底层。"
      }
    },
    {
      "name": "git send-email",
      "category": "g_patch",
      "description": "通过邮件发送补丁，参与上游开源项目评审流程。",
      "keywords": [
        "发送邮件",
        "git send-email"
      ],
      "examples": [
        {
          "cmd": "git send-email *.patch",
          "desc": "发到邮件列表"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git send-email --to dev@list 0001-*.patch\nOK. Log says: Sent 1 message(s)",
        "explain": "`git send-email` 直接把补丁邮件发送到指定地址；开源项目邮件贡献流程用。"
      }
    },
    {
      "name": "git imap-send",
      "category": "g_patch",
      "description": "经 IMAP 把补丁发到邮件草稿，便于在邮件客户端发出。",
      "keywords": [
        "IMAP发送",
        "git imap-send"
      ],
      "examples": [
        {
          "cmd": "git imap-send *.patch",
          "desc": "通过 IMAP 发送"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git imap-send *.patch\n(把补丁通过 IMAP 存入草稿箱待发送)",
        "explain": "`git imap-send` 经 IMAP 把补丁存入邮件草稿(再于客户端发送)；与 send-email 互补的邮件提交方式。"
      }
    },
    {
      "name": "git mailinfo",
      "category": "g_patch",
      "description": "从邮件补丁中提取提交说明与差异，am 的底层辅助。",
      "keywords": [
        "邮件信息",
        "git mailinfo"
      ],
      "examples": [
        {
          "cmd": "git mailinfo msg patch < m",
          "desc": "解析邮件"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git mailinfo msg patch < email.txt\n(从邮件原文拆分出提交说明 msg 与补丁 patch)",
        "explain": "`git mailinfo` 解析邮件原文，抽出提交信息与 diff 到文件；`am` 内部即调用它，处理收到的补丁邮件用。"
      }
    },
    {
      "name": "git bisect",
      "category": "g_debug",
      "description": "用二分法在大量提交中快速定位首次引入 bug 的那个提交。",
      "keywords": [
        "二分查找",
        "git bisect"
      ],
      "examples": [
        {
          "cmd": "git bisect start",
          "desc": "开始"
        },
        {
          "cmd": "git bisect bad/good <sha>",
          "desc": "标记"
        },
        {
          "cmd": "git bisect run ./test.sh",
          "desc": "自动"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git bisect start\n$ git bisect bad\n$ git bisect good 8f2d1a0\nBisecting: 3 revisions left to test after this\n(二分定位引入 bug 的提交)",
        "explain": "`git bisect` 二分查找：标记当前为 bad、某旧版为 good，Git 自动切到中间提交让你测试，逐轮缩小范围定位首个引入 bug 的提交。"
      }
    },
    {
      "name": "git gc",
      "category": "g_maint",
      "description": "垃圾回收，压缩对象、清理冗余，保持仓库轻快。",
      "keywords": [
        "垃圾回收",
        "git gc"
      ],
      "examples": [
        {
          "cmd": "git gc",
          "desc": "压缩对象"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git gc\nEnumerating objects: 312, done.\nWriting objects: 100% (312/312)\nTotal 312 (delta 80), reused 300 (delta 70)",
        "explain": "`git gc` 垃圾回收：压缩松散对象、打包、清理不可达对象；减小 .git 体积、提升性能。通常自动触发。"
      }
    },
    {
      "name": "git fsck",
      "category": "g_maint",
      "description": "检查对象库的完整性，发现损坏或不可达对象。",
      "keywords": [
        "检查",
        "git fsck"
      ],
      "examples": [
        {
          "cmd": "git fsck",
          "desc": "校验完整性"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git fsck --full\nChecking object directories: 100% (256/256)\ndangling commit 7b8c9d0\n$ git fsck --lost-found",
        "explain": "`git fsck` 检查仓库完整性(对象是否损坏)；dangling commit 可能是误删提交，`--lost-found` 找回。仓库健康体检。"
      }
    },
    {
      "name": "git prune",
      "category": "g_maint",
      "description": "删除不可达的悬空对象，释放空间（通常配合 gc）。",
      "keywords": [
        "清理",
        "git prune"
      ],
      "examples": [
        {
          "cmd": "git prune",
          "desc": "删悬空对象"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git prune -n\n(预览将被删除的不可达对象)\n$ git prune",
        "explain": "`git prune` 删除**不可达**的松散对象(无引用指向)；通常配合 gc 自动执行。`-n` 先预览。"
      }
    },
    {
      "name": "git repack",
      "category": "g_maint",
      "description": "把松散对象重新打包成 pack，优化存储与读取。",
      "keywords": [
        "重新打包",
        "git repack"
      ],
      "examples": [
        {
          "cmd": "git repack -ad",
          "desc": "打包并删冗余"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git repack -ad\n(把松散对象重新打包进 pack 文件并删冗余)",
        "explain": "`git repack -ad` 将对象重新打包、`-d` 删除被新包取代的旧包；精简存储，常由 gc 调用。"
      }
    },
    {
      "name": "git maintenance",
      "category": "g_maint",
      "description": "注册后台维护任务（gc/prefetch 等），自动保持仓库健康。",
      "keywords": [
        "维护",
        "git maintenance"
      ],
      "examples": [
        {
          "cmd": "git maintenance start",
          "desc": "开启定时维护"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git maintenance start\n(注册后台定时任务: prefetch/loose-objects/incremental-repack)\n$ git maintenance run --task=gc",
        "explain": "`git maintenance` 管理后台自动维护任务(预取、垃圾回收等)；`start` 注册定时，`run --task=gc` 立即跑某项。"
      }
    },
    {
      "name": "git count-objects",
      "category": "g_maint",
      "description": "统计对象数量与占用空间，看仓库膨胀情况。",
      "keywords": [
        "统计",
        "git count-objects"
      ],
      "examples": [
        {
          "cmd": "git count-objects -v",
          "desc": "详细统计"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git count-objects -vH\ncount: 12\nsize: 24.00 KiB\nin-pack: 300\npacks: 2",
        "explain": "`git count-objects -vH` 显示松散对象数/大小与已打包情况(-H 人类可读)；判断是否需要 gc。"
      }
    },
    {
      "name": "git check-ignore",
      "category": "g_maint",
      "description": "检查某路径为何被忽略，排查 .gitignore 规则。",
      "keywords": [
        "忽略检查",
        "check-ignore",
        ".gitignore",
        "调试"
      ],
      "examples": [
        {
          "cmd": "git check-ignore a.log",
          "desc": "看 a.log 是否被忽略"
        },
        {
          "cmd": "git check-ignore -v a.log",
          "desc": "显示命中的忽略规则"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": "-v 可定位是 .gitignore 的哪一行生效，调试忽略规则非常实用",
      "compare": null,
      "options": [
        {
          "flag": "<路径>...",
          "default": "无",
          "desc": "检查路径是否被忽略，命中则输出该路径。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "同时显示匹配的忽略规则来源与行号，便于调试。"
        },
        {
          "flag": "-n, --non-matching",
          "default": "关闭",
          "desc": "也列出未被忽略的路径，便于核对。"
        },
        {
          "flag": "--no-index",
          "default": "关闭",
          "desc": "不依赖 .git 索引，对任意目录也能检查。"
        }
      ],
      "sample": {
        "output": "$ git check-ignore -v node_modules\n.gitignore:3:node_modules/  node_modules\n$ echo \"debug.log\" >> .gitignore; git check-ignore debug.log\ndebug.log",
        "explain": "`git check-ignore -v` 解释某文件为何被忽略(显示匹配的规则与所在 .gitignore 行)；排查\"该忽略却没忽略\"用。"
      }
    },
    {
      "name": "git archive",
      "category": "g_other",
      "description": "把某次提交导出为 tar/zip 快照，分发源码而不含 .git。",
      "keywords": [
        "导出",
        "git archive"
      ],
      "examples": [
        {
          "cmd": "git archive --format=zip HEAD > t.zip",
          "desc": "导出当前"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git archive --format=zip -o rel.zip v1.2.0\n$ unzip -l rel.zip | head\nArchive: rel.zip\n  src/main.py",
        "explain": "`git archive` 把某提交/标签导出为 tar/zip(不含 .git)；发版交付源码快照用，比 clone 干净。"
      }
    },
    {
      "name": "git check-attr",
      "category": "g_other",
      "description": "查询文件命中的 gitattributes 属性（如 text/eol/diff）。",
      "keywords": [
        "属性查询",
        "check-attr",
        "gitattributes"
      ],
      "examples": [
        {
          "cmd": "git check-attr text a.txt",
          "desc": "查 text 属性值"
        },
        {
          "cmd": "git check-attr -a a.txt",
          "desc": "查全部属性"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git check-attr text .gitattributes\n.gitattributes: text: auto\n$ git check-attr -a main.py\nmain.py: text: auto",
        "explain": "`git check-attr` 查询某文件应用的 .gitattributes 属性(text/eol/export-ignore 等)；确认换行/处理规则生效。"
      }
    },
    {
      "name": "git svn",
      "category": "g_other",
      "description": "与 Subversion 仓库双向同步，便于从 SVN 迁移到 Git。",
      "keywords": [
        "svn同步",
        "git svn",
        "迁移",
        "svn"
      ],
      "examples": [
        {
          "cmd": "git svn clone svn://host/repo",
          "desc": "克隆 SVN 仓库为 git"
        },
        {
          "cmd": "git svn fetch",
          "desc": "拉取 SVN 更新"
        },
        {
          "cmd": "git svn dcommit",
          "desc": "推送提交到 SVN"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "用于从 SVN 迁移；dcommit 会把本地提交逐条转为 SVN 提交",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git svn clone https://svn/repo\n(从 Subversion 仓库克隆为 Git)\n$ git svn rebase",
        "explain": "`git svn` 桥接 Subversion：把 SVN 仓库当 Git 操作；`rebase` 从 SVN 同步最新。迁移遗留 SVN 用。"
      }
    },
    {
      "name": "git ls-files",
      "category": "g_other",
      "description": "列出当前被跟踪的文件，配合模式过滤查看索引内容。",
      "keywords": [
        "列出文件",
        "git ls-files"
      ],
      "examples": [
        {
          "cmd": "git ls-files",
          "desc": "看已跟踪文件"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git ls-files\nREADME.md\nsrc/main.py\n$ git ls-files -m\nindex.html",
        "explain": "`git ls-files` 列出版本库跟踪的全部文件；`-m` 仅列已修改的，快速看当前改动范围。"
      }
    },
    {
      "name": "git rev-parse",
      "category": "g_other",
      "description": "把分支名/引用解析为底层 SHA-1，脚本中获取提交哈希。",
      "keywords": [
        "解析",
        "git rev-parse"
      ],
      "examples": [
        {
          "cmd": "git rev-parse HEAD",
          "desc": "得完整 SHA"
        },
        {
          "cmd": "git rev-parse --show-toplevel",
          "desc": "仓库根"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git rev-parse HEAD\n3a1b2c4f5e6d7...  (40 位完整 SHA)\n$ git rev-parse --abbrev-ref HEAD\nmain",
        "explain": "`git rev-parse` 解析引用为对象名(哈希)；`HEAD` 得完整 40 位 SHA，`--abbrev-ref HEAD` 得分支名。脚本取信息用。"
      }
    },
    {
      "name": "git rev-list",
      "category": "g_other",
      "description": "列出提交对象，--count 数提交数、可加范围做统计。",
      "keywords": [
        "列出提交",
        "git rev-list"
      ],
      "examples": [
        {
          "cmd": "git rev-list --count HEAD",
          "desc": "提交数"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git rev-list --count main\n142\n$ git rev-list --count main..feature\n3",
        "explain": "`git rev-list` 列出提交(沿逆向)；`--count` 统计提交数，main..feature 得 feature 领先 main 的提交数(3)。"
      }
    },
    {
      "name": "git cat-file",
      "category": "g_plumb",
      "description": "查看任意对象（blob/tree/commit）的内容与类型，探底仓库。",
      "keywords": [
        "对象查看",
        "git cat-file"
      ],
      "examples": [
        {
          "cmd": "git cat-file -p <sha>",
          "desc": "看对象内容"
        },
        {
          "cmd": "git cat-file -t <sha>",
          "desc": "看类型"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git cat-file -t 3a1b2c4\ncommit\n$ git cat-file -p HEAD\ntree 9c0d...\nauthor Alice ...\nfeat: add login",
        "explain": "`git cat-file` 查看任意对象的类型(-t)与内容(-p)；底层探查工具，确认对象结构与数据。"
      }
    },
    {
      "name": "git hash-object",
      "category": "g_plumb",
      "description": "计算并把内容写入对象库，返回其 SHA-1。",
      "keywords": [
        "哈希",
        "git hash-object"
      ],
      "examples": [
        {
          "cmd": "git hash-object f.txt",
          "desc": "得 SHA-1"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git hash-object -w hello.txt\n2d832d...  (生成并写入该文件的 blob SHA)\n$ git hash-object hello.txt\n2d832d...  (仅计算不写入)",
        "explain": "`git hash-object` 计算(或 `-w` 写入)文件的 blob 哈希(SHA-1)；理解 Git 如何以内容寻址存储文件。"
      }
    },
    {
      "name": "git update-index",
      "category": "g_plumb",
      "description": "直接操作索引（暂存区），底层控制哪些文件进提交。",
      "keywords": [
        "索引",
        "git update-index"
      ],
      "examples": [
        {
          "cmd": "git update-index --add f",
          "desc": "加入索引"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git update-index --add hello.txt\n(把文件加入索引/暂存区, 偏底层)\n$ git update-index --assume-unchanged big.bin",
        "explain": "`git update-index` 直接操作索引；`--add` 暂存文件，`--assume-unchanged` 让 Git 忽略某文件后续改动(加速大仓)。"
      }
    },
    {
      "name": "git write-tree",
      "category": "g_plumb",
      "description": "把当前索引写成一个树对象，返回其哈希。",
      "keywords": [
        "写树",
        "git write-tree"
      ],
      "examples": [
        {
          "cmd": "git write-tree",
          "desc": "生成树 SHA"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git write-tree\n9c0d1e2...  (根据当前索引生成 tree 对象 SHA)",
        "explain": "`git write-tree` 把暂存区当前状态序列化为一个 tree 对象并返回其 SHA；构建提交时由 commit-tree 引用。"
      }
    },
    {
      "name": "git commit-tree",
      "category": "g_plumb",
      "description": "用一个树对象创建提交对象，手动构造提交。",
      "keywords": [
        "创建提交",
        "git commit-tree"
      ],
      "examples": [
        {
          "cmd": "git commit-tree <tree> -p <parent> -m 'm'",
          "desc": "造提交"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git commit-tree 9c0d1e2 -p HEAD -m \"msg\"\n3a1b2c4...  (生成新 commit 对象)",
        "explain": "`git commit-tree` 用给定 tree、父提交与说明**直接创建提交对象**；底层命令，`git commit` 即在其上封装。"
      }
    },
    {
      "name": "git update-ref",
      "category": "g_plumb",
      "description": "底层更新引用（分支/标签）指向，脚本化维护指针。",
      "keywords": [
        "更新引用",
        "git update-ref"
      ],
      "examples": [
        {
          "cmd": "git update-ref refs/heads/x <sha>",
          "desc": "设分支指向"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git update-ref refs/heads/dev 3a1b2c4\n(把 dev 分支指针移动到某提交)",
        "explain": "`git update-ref` 直接改写引用(分支/标签)指向；等价于底层移动分支指针，脚本与高级操作使用。"
      }
    },
    {
      "name": "git show-ref",
      "category": "g_plumb",
      "description": "列出所有引用及其指向的提交，检查分支/标签映射。",
      "keywords": [
        "列出引用",
        "git show-ref"
      ],
      "examples": [
        {
          "cmd": "git show-ref",
          "desc": "看所有引用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git show-ref\n3a1b2c4 refs/heads/main\n3a1b2c4 refs/remotes/origin/main",
        "explain": "`git show-ref` 列出所有本地与远程引用的 SHA；核对分支/标签指向，底层排查用。"
      }
    },
    {
      "name": "git symbolic-ref",
      "category": "g_plumb",
      "description": "读写符号引用（如 HEAD 指向哪个分支）。",
      "keywords": [
        "符号引用",
        "git symbolic-ref"
      ],
      "examples": [
        {
          "cmd": "git symbolic-ref HEAD refs/heads/main",
          "desc": "设 HEAD"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git symbolic-ref HEAD\nrefs/heads/main\n$ git symbolic-ref HEAD refs/heads/dev",
        "explain": "`git symbolic-ref` 读写符号引用(如 HEAD 指向哪个分支)；可改当前分支指向而不切工作区。"
      }
    },
    {
      "name": "git name-rev",
      "category": "g_plumb",
      "description": "把提交 SHA 映射为人类可读的引用名（如 main~2）。",
      "keywords": [
        "名称映射",
        "git name-rev"
      ],
      "examples": [
        {
          "cmd": "git name-rev <sha>",
          "desc": "得分支/标签名"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git name-rev 3a1b2c4\n3a1b2c4 main~2",
        "explain": "`git name-rev` 把提交哈希反解为可读引用名(如 main~2)；日志/报错里看到裸哈希时定位用。"
      }
    },
    {
      "name": "git for-each-ref",
      "category": "g_plumb",
      "description": "迭代所有引用并可自定义输出格式，批量统计。",
      "keywords": [
        "引用迭代",
        "git for-each-ref"
      ],
      "examples": [
        {
          "cmd": "git for-each-ref --format='%(refname)'",
          "desc": "列引用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git for-each-ref --format='%(refname) %(objectname:short)' refs/tags\nrefs/tags/v1.2.0 3a1b2c4",
        "explain": "`git for-each-ref` 遍历引用并按格式输出(分支/标签/远程)；生成自定义列表，CI/脚本取数据用。"
      }
    },
    {
      "name": "git verify-pack",
      "category": "g_plumb",
      "description": "校验 pack 文件的完整性与索引，排查对象损坏。",
      "keywords": [
        "校验pack",
        "git verify-pack"
      ],
      "examples": [
        {
          "cmd": "git verify-pack -v f.pack",
          "desc": "详细校验"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git verify-pack -v .git/objects/pack/*.idx | head\n3a1b2c4... commit 1234 1 1",
        "explain": "`git verify-pack` 校验 pack 索引完整性并列出其中对象；`-v` 详列每个对象的类型/大小/偏移。"
      }
    },
    {
      "name": "git pack-objects",
      "category": "g_plumb",
      "description": "把对象打包成 pack 文件，传输与存储优化用。",
      "keywords": [
        "打包对象",
        "git pack-objects"
      ],
      "examples": [
        {
          "cmd": "git pack-objects out < objs",
          "desc": "生成 pack"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ echo HEAD | git pack-objects pack\n(把所列对象打包生成 pack-<SHA>.pack/.idx)",
        "explain": "`git pack-objects` 把对象列表打包成 pack 文件(传输/存储优化)；`git push` 内部即打包后发送。"
      }
    },
    {
      "name": "git index-pack",
      "category": "g_plumb",
      "description": "为收到的 pack 建立索引，clone/fetch 的底层步骤。",
      "keywords": [
        "pack索引",
        "git index-pack"
      ],
      "examples": [
        {
          "cmd": "git index-pack f.pack",
          "desc": "生成 idx"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git index-pack downloaded.pack\n(为收到的 pack 生成 .idx 索引)",
        "explain": "`git index-pack` 为 pack 文件建立索引(.idx)；接收端拿到 pack 后必须建索引才能使用，fetch 内部调用。"
      }
    },
    {
      "name": "git unpack-objects",
      "category": "g_plumb",
      "description": "把 pack 中的对象解包写入对象库。",
      "keywords": [
        "解包",
        "git unpack-objects"
      ],
      "examples": [
        {
          "cmd": "git unpack-objects < f.pack",
          "desc": "解包"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git unpack-objects < packfile\n(把 pack 流解包为松散对象)",
        "explain": "`git unpack-objects` 从 pack 流还原出单独对象文件；少量对象解包时用(大规模建议 index-pack)。"
      }
    },
    {
      "name": "git pack-refs",
      "category": "g_plumb",
      "description": "把松散引用打包成单个文件，减少目录项、加速读取。",
      "keywords": [
        "打包引用",
        "git pack-refs"
      ],
      "examples": [
        {
          "cmd": "git pack-refs --all",
          "desc": "压缩 refs"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git pack-refs --all\n(把 refs/heads 下松散引用打包进 packed-refs 文件)",
        "explain": "`git pack-refs --all` 将大量分支/标签引用合并为单个 packed-refs 文件，减少目录项、提升性能。"
      }
    },
    {
      "name": "git read-tree",
      "category": "g_plumb",
      "description": "把树对象读入索引，切换底层工作区状态。",
      "keywords": [
        "读树",
        "git read-tree"
      ],
      "examples": [
        {
          "cmd": "git read-tree <tree>",
          "desc": "载入索引"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git read-tree HEAD\n(把某 tree 读入索引/暂存区, 不碰工作区)",
        "explain": "`git read-tree` 把 tree 对象载入索引；底层操作，常用于 merge/checkout 的暂存区构建。"
      }
    },
    {
      "name": "git ls-tree",
      "category": "g_plumb",
      "description": "列出树对象的内容（路径、模式、哈希）。",
      "keywords": [
        "列树",
        "git ls-tree"
      ],
      "examples": [
        {
          "cmd": "git ls-tree HEAD",
          "desc": "看根树"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git ls-tree HEAD\n100644 blob 2d832d...  hello.txt\n040000 tree 9c0d1e2...  src",
        "explain": "`git ls-tree` 列出某 tree(提交/目录)下的条目及类型(100644 文件/040000 目录)与对象哈希；看目录结构用。"
      }
    },
    {
      "name": "git mktree",
      "category": "g_plumb",
      "description": "由 ls-tree 风格的输出构造树对象。",
      "keywords": [
        "建树",
        "git mktree"
      ],
      "examples": [
        {
          "cmd": "git ls-tree HEAD | git mktree",
          "desc": "重建树"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git mktree < entries.txt\n9c0d1e2...  (由条目清单生成 tree 对象 SHA)",
        "explain": "`git mktree` 从\"模式 类型 哈希 文件名\"条目清单构建 tree 对象；脚本化构造树结构用。"
      }
    },
    {
      "name": "git notes",
      "category": "g_plumb",
      "description": "给提交附加注记（不改动提交本身），补充背景说明。",
      "keywords": [
        "附注",
        "git notes"
      ],
      "examples": [
        {
          "cmd": "git notes add -m 'x' <sha>",
          "desc": "加注"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git notes add -m \"reviewed by Bob\" HEAD\n$ git notes show HEAD\nreviewed by Bob",
        "explain": "`git notes` 给提交附加**额外备注**(不改动提交本身)；审阅意见、补充背景可存此处，独立于历史。"
      }
    },
    {
      "name": "git replace",
      "category": "g_plumb",
      "description": "用另一个对象替换某次提交（而不改写历史），常用于对已达远程的提交做补丁式修正。",
      "keywords": [
        "替换对象",
        "git replace"
      ],
      "examples": [
        {
          "cmd": "git replace <sha> <sha2>",
          "desc": "临时替换"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git replace 3a1b2c4 7b8c9d0\n(用 7b8c9d0 替换 3a1b2c4 在历史中的出现, 便于调试不改原历史)",
        "explain": "`git replace` 建立替换引用：让某对象在遍历历史时显示为另一对象；调试旧提交而不改写原历史(注意推送需 --force-with-lease)。"
      }
    },
    {
      "name": "git filter-repo",
      "category": "g_adv",
      "description": "重写历史的推荐工具，可删除大文件、改路径、改身份。",
      "keywords": [
        "重写历史",
        "git filter-repo"
      ],
      "examples": [
        {
          "cmd": "git filter-repo --path dir/",
          "desc": "只保留某目录历史"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "破坏性操作，先备份；取代已弃用 filter-branch",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git filter-repo --path src/ --force\n(重写整个历史, 仅保留 src/ 目录, 移除其他)\n$ git filter-repo --replace-text secrets.txt",
        "explain": "`git filter-repo` 重写历史的现代工具(比 filter-branch 快且安全)；可清洗大文件/密钥、仅留子目录。会改所有提交哈希。"
      }
    },
    {
      "name": "git filter-branch",
      "category": "g_adv",
      "description": "重写历史的旧工具（已弃用），用 filter-repo 替代。",
      "keywords": [
        "重写历史",
        "git filter-branch"
      ],
      "examples": [
        {
          "cmd": "git filter-branch --tree-filter '...' HEAD",
          "desc": "改写"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": "已弃用，优先 filter-repo；慢且易错",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git filter-branch --tree-filter 'rm -f secrets' HEAD\n(逐提交执行删除, 重写历史; 已不推荐)",
        "explain": "`git filter-branch` 旧式历史重写(删除某文件/改作者等)；功能强但慢且易错，**新项目优先用 filter-repo**。"
      }
    },
    {
      "name": "git subtree",
      "category": "g_adv",
      "description": "把子项目作为子树合并进仓库，比 submodule 更内聚。",
      "keywords": [
        "子树",
        "git subtree"
      ],
      "examples": [
        {
          "cmd": "git subtree add --prefix=lib url",
          "desc": "嵌入子项目"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git subtree add --prefix=vendor/lib https://.../lib main\n(把外部仓库作为子目录并入本仓库历史)\n$ git subtree pull --prefix=vendor/lib main",
        "explain": "`git subtree` 把另一仓库合并为子目录(区别于 submodule，无独立 .gitmodules)；`pull` 同步更新。单一仓库管理依赖用。"
      }
    },
    {
      "name": "git sparse-checkout",
      "category": "g_adv",
      "description": "只检出仓库的部分目录，巨型仓库提速显神威。",
      "keywords": [
        "稀疏检出",
        "git sparse-checkout"
      ],
      "examples": [
        {
          "cmd": "git sparse-checkout set src/",
          "desc": "只检某目录"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git sparse-checkout init --cone\n$ git sparse-checkout set src docs\n(只检出 src/ 与 docs/ 目录, 其余不落地)",
        "explain": "`git sparse-checkout` 只检出需要的目录(大仓提速)；`set src docs` 限定工作区仅含这两目录，减少文件数量。"
      }
    },
    {
      "name": "git rerere",
      "category": "g_adv",
      "description": "记录并复用冲突解决方案，反复合并时省去重复处理。",
      "keywords": [
        "重用解决",
        "git rerere"
      ],
      "examples": [
        {
          "cmd": "git config rerere.enabled true",
          "desc": "开启"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git config rerere.enabled true\n(启用\"重用记录的冲突解决方案\")\n(下次相同冲突自动复用上次解法)",
        "explain": "`git rerere`(reuse recorded resolution) 记录你解决过的冲突，重演时自动套用；频繁 rebase/merge 时省去重复解冲突。"
      }
    },
    {
      "name": "git instaweb",
      "category": "g_adv",
      "description": "启动一个本地 Web 界面浏览仓库，免命令行查看。",
      "keywords": [
        "web界面",
        "git instaweb"
      ],
      "examples": [
        {
          "cmd": "git instaweb",
          "desc": "本地起 gitweb"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git instaweb -d webrick\n(启动本地 Web 服务浏览仓库, 默认 http://127.0.0.1:1234)",
        "explain": "`git instaweb` 起一个本地 Web 界面浏览仓库(提交/差异)；临时查看仓库用，Ctrl+C 关闭。"
      }
    },
    {
      "name": "git credential",
      "category": "g_adv",
      "description": "管理凭证助手，安全缓存用户名/密码或令牌。",
      "keywords": [
        "凭证",
        "git credential"
      ],
      "examples": [
        {
          "cmd": "git config credential.helper store",
          "desc": "明文存密码"
        }
      ],
      "frequency": "低",
      "difficulty": "日常",
      "pitfalls": "store 明文存密码不安全，推荐 cache/osxkeychain",
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git credential fill\nprotocol=https\nhost=github.com\n(回显并缓存该主机的凭据, 免去重复输入密码)",
        "explain": "`git credential` 管理凭据助手(填充/存储/清除)；`fill` 按协议主机返回账号密码，配合缓存避免反复输入。"
      }
    },
    {
      "name": "git fast-export",
      "category": "g_adv",
      "description": "把仓库导出为通用流格式，迁移到别处或转换。",
      "keywords": [
        "导出流",
        "git fast-export"
      ],
      "examples": [
        {
          "cmd": "git fast-export --all",
          "desc": "导出供迁移"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git fast-export main > main.fe\n(把 main 分支导出为可读的流式格式)",
        "explain": "`git fast-export` 将提交历史导出为流格式(便于迁移/转换)；`git fast-import` 可再导入，跨系统搬家用。"
      }
    },
    {
      "name": "git fast-import",
      "category": "g_adv",
      "description": "从流格式快速导入，批量重建仓库历史。",
      "keywords": [
        "导入流",
        "git fast-import"
      ],
      "examples": [
        {
          "cmd": "git fast-import < stream",
          "desc": "导入"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git fast-import < main.fe\n(从流格式快速重建仓库历史)",
        "explain": "`git fast-import` 从 fast-export 生成的流**批量重建**提交/分支；大数据量迁移比逐条 commit 快得多。"
      }
    },
    {
      "name": "git daemon",
      "category": "g_transport",
      "description": "启动匿名 Git 服务，供他人通过 git:// 协议克隆/fetch。",
      "keywords": [
        "git服务",
        "git daemon"
      ],
      "examples": [
        {
          "cmd": "git daemon --base-path=/repos",
          "desc": "起只读服务"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git daemon --base-path=/srv/git --export-all\n(启动 Git 协议守护进程, 供 git:// 克隆访问)",
        "explain": "`git daemon` 提供 `git://` 只读协议服务；`--export-all` 导出目录下所有仓库，局域网共享用。"
      }
    },
    {
      "name": "git upload-pack",
      "category": "g_transport",
      "description": "服务端在拉取时上传对象，是 clone/fetch 的幕后进程。",
      "keywords": [
        "上传",
        "git upload-pack"
      ],
      "examples": [
        {
          "cmd": "git upload-pack repo",
          "desc": "被 fetch 调用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git upload-pack /srv/git/repo\n(服务端进程, 响应 clone/fetch 发送对象; 通常由守护进程/SSH 调起)",
        "explain": "`git upload-pack` 服务端组件，处理客户端的 clone/fetch，打包并发送对象；通常经 git daemon 或 SSH 自动触发。"
      }
    },
    {
      "name": "git receive-pack",
      "category": "g_transport",
      "description": "服务端在推送时接收对象，是 push 的幕后进程。",
      "keywords": [
        "接收",
        "git receive-pack"
      ],
      "examples": [
        {
          "cmd": "git receive-pack repo",
          "desc": "被 push 调用"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git receive-pack /srv/git/repo\n(服务端进程, 接收 push 并写入对象/更新引用)",
        "explain": "`git receive-pack` 服务端组件，接收客户端的 push、写入对象并更新分支引用；push 时由远程自动调用。"
      }
    },
    {
      "name": "git http-backend",
      "category": "g_transport",
      "description": "作为 CGI 提供智能 HTTP 访问，让仓库可通过 Web 服务器服务。",
      "keywords": [
        "http后端",
        "git http-backend"
      ],
      "examples": [
        {
          "cmd": "git http-backend",
          "desc": "配合 web 服务器"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git http-backend\n(CGI 程序, 使普通 Web 服务器经 HTTP/HTTPS 提供 Git 服务)",
        "explain": "`git http-backend` 作为 CGI 运行，让 Apache/Nginx 通过 HTTP(S) 提供 Git 读写；无 SSH 环境下的标准部署方式。"
      }
    },
    {
      "name": "git send-pack",
      "category": "g_transport",
      "description": "向远程推送引用，push 的底层传输命令。",
      "keywords": [
        "推送",
        "git send-pack"
      ],
      "examples": [
        {
          "cmd": "git send-pack origin main",
          "desc": "底层 push"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git send-pack ssh://host/repo main\n(底层把本地引用/对象推送到远端, 被 git push 调用)",
        "explain": "`git send-pack` 是 `git push` 的底层实现，建立连接、协商并推送对象与引用；一般用 push 即可。"
      }
    },
    {
      "name": "git shell",
      "category": "g_transport",
      "description": "受限登录 shell，只允许执行 Git 相关命令，用于共享账号安全。",
      "keywords": [
        "受限shell",
        "git shell"
      ],
      "examples": [
        {
          "cmd": "git shell",
          "desc": "仅允许 git 操作"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git shell -c 'git-receive-pack \"/srv/git/repo\"'\n(受限登录 shell, 仅允许 Git 操作, 用作 SSH 账号的登录 shell)",
        "explain": "`git shell` 作为受限 shell 分配给仅做 Git 的账号；只能跑 Git 服务命令，无法获得普通 shell，提升安全。"
      }
    },
    {
      "name": "git upload-archive",
      "category": "g_transport",
      "description": "支持远程 git archive，让客户端能打包下载某快照。",
      "keywords": [
        "archive远程",
        "git upload-archive"
      ],
      "examples": [
        {
          "cmd": "git upload-archive repo",
          "desc": "配合 archive"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git upload-archive /srv/git/repo\n(响应 git archive --remote, 经协议打包远端仓库)",
        "explain": "`git upload-archive` 服务端组件，处理 `git archive --remote` 请求，把远端指定提交打包传回客户端。"
      }
    },
    {
      "name": "git cherry",
      "category": "g_branch",
      "description": "列出尚未合并到上游的提交（+）与已合并的（-），核对待合入。",
      "keywords": [
        "cherry",
        "未合并提交"
      ],
      "examples": [
        {
          "cmd": "git cherry",
          "desc": "对比当前分支与上游"
        },
        {
          "cmd": "git cherry origin/main",
          "desc": "指定上游比较"
        }
      ],
      "frequency": "中",
      "difficulty": "日常",
      "pitfalls": null,
      "compare": null,
      "options": [
        {
          "flag": "<上游> [<头>]",
          "default": "无",
          "desc": "对比上游与当前分支，+ 标记未合并提交、- 标记已合并提交。"
        },
        {
          "flag": "-v, --verbose",
          "default": "关闭",
          "desc": "同时显示每笔提交的主题说明。"
        }
      ],
      "sample": {
        "output": "$ git cherry main feature\n+ 9c0d1e2 fix: header\n- 3a1b2c4 feat: add login",
        "explain": "`git cherry` 比较两分支：`-` 表示已存在于上游、`+` 表示独有提交(尚未合并)；挑选要补的提交用。"
      }
    },
    {
      "name": "git show-branch",
      "category": "g_branch",
      "description": "以图形展示各分支的提交历史与分叉，对比分支走向。",
      "keywords": [
        "show-branch",
        "分支对比"
      ],
      "examples": [
        {
          "cmd": "git show-branch",
          "desc": "当前分支提交"
        },
        {
          "cmd": "git show-branch main dev",
          "desc": "对比两分支"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git show-branch\n! [dev] fix: x\n * [main] feat: y\n--",
        "explain": "`git show-branch` 以矩阵展示各分支的最近提交与分叉点；快速看清分支关系。"
      }
    },
    {
      "name": "git verify-commit",
      "category": "g_debug",
      "description": "验证某提交的 GPG 签名是否有效，确认来源可信。",
      "keywords": [
        "签名验证",
        "verify-commit"
      ],
      "examples": [
        {
          "cmd": "git verify-commit HEAD",
          "desc": "校验最新提交签名"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git verify-commit 3a1b2c4\nGood signature from \"Alice <alice@example.com>\"\n$ git verify-commit badhash\nNo signature found",
        "explain": "`git verify-commit` 校验某提交是否带**合法 GPG 签名**；输出 Good signature 或 No signature，验证提交来源可信。"
      }
    },
    {
      "name": "git verify-tag",
      "category": "g_debug",
      "description": "验证标签的 GPG 签名，确认发布版本未被篡改。",
      "keywords": [
        "标签签名",
        "verify-tag"
      ],
      "examples": [
        {
          "cmd": "git verify-tag v1.0.0",
          "desc": "校验标签签名"
        }
      ],
      "frequency": "低",
      "difficulty": "进阶",
      "pitfalls": null,
      "compare": null,
      "options": null,
      "sample": {
        "output": "$ git verify-tag v1.2.0\nGood signature from \"Alice <alice@example.com>\" ",
        "explain": "`git verify-tag` 校验标签的 GPG 签名；发布版本用标签签名后，用户可验真防篡改。"
      }
    }
  ]
};