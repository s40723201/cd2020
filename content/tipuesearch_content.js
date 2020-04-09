var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': 'WEEK1 \n 建立個人倉儲cd2020及進行網站編譯 \n ．下載 2019Fall可攜套件.7z \xa0，完成後開啟。 ．登入個人github帳號，創建新的倉儲cd2020。 ．進入要存放資料夾tmp。 ．輸入\xa0git clone \xa0https://github.com/s40723201/cd2020\xa0 複製個人倉儲至資料夾。 ．輸入 git submodule add https://github.com/mdecourse/cmsimde.git\xa0 取得子模組資料。 ．將 up_dir 的所有項目複製到cd2020。 ．完成後，python wsgi.py 開始編輯倉儲。 ．編輯完成後，git status\xa0->\xa0git add .\xa0->\xa0git commit -m "XXX"\xa0->\xa0git push。 \n WEEK 2 \n 將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n ．收尋\xa0 Python 官網。 ．點選Downloads下的 Windows ，並點選\xa0 Latest Python 3 Release - Python 3.8.2 。 ．找到\xa0 Windows x86-64 executable installer \xa0 並下載。 ．開始下載，必須將  pip 選項 取消 \n ．建立新的start.bat \n start.bat: \n \n \n \n \n @echo off set Disk=y subst %Disk%: "data" %Disk%: set HomePath=%Disk%:\\home_mdecourse set HomeDrive=%Disk%:\\home_mdecourse set Home=%Disk%:\\home_mdecourse set USERPROFILE=%Disk%:\\home_mdecourse REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING="utf-8" set PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages; set PYTHONHOME=%Disk%:\\py38 REM for flutter set java_home=%Disk%:\\java\\jdk8u222-b10 set ANDROID_SDK_home=%Disk%:\\home_mdecourse set GRADLE_USER_home=%Disk%:\\home_mdecourse set ANDROID_SDK_ROOT=%Disk%:\\android\\sdk set ANDROID_Home=%Disk%:\\android\\sdk\\tools REM for putty set GIT_HOME=%CDisk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe set path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts; set path_msys2=%Disk%:\\msys64\\mingw64\\bin; REM coreutils is for compiling fossil scm set path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64; set path_tcc=%Disk%:\\tcc; set path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin; set path_nodejs=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; set path_git=%Disk%:\\portablegit\\bin; set path_xming=%Disk%:\\Xming; set path_latex=%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32; set path_flutter=%Disk%:\\java\\jdk8u222-b10\\bin;%Disk%:\\flutter\\bin;%Disk%:\\Android\\sdk;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\tools\\bin;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\flutter\\bin\\cache\\dart-sdk\\bin;%Disk%:\\vscode; set path_putty=%Disk%:\\putty; path=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path_flutter%;%path_putty%;%path_latex%;%path%; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe Exit \n \n \n \n ．執行指令，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n \n \xa0 \n \n ．下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n ．下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n ．下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0portablegit下。 ．安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': '開會紀錄', 'text': '第一組\xa0 \xa0 第一次會議PDF內容 \xa0 \xa0 \xa0 (WEEK1 ) \xa0 \n 會議流程: \n 1.成員簽到 \xa0 \n 2.討論日後分工 \xa0 \n 3.有問題的同學提出問題 \xa0 \n 成員名單 \xa0 \n 1. 40723201 \xa0 (簽 ) 已建立完成網站 \xa0 \n 2.40723206 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 3.40723213 (簽) \xa0 已建立完成網站 \xa0 \n 4.40723216 (簽) \xa0 已建立完成網站 \xa0 \n 5.40723223 (簽)\xa0 已建立完成網站 \xa0 \n 6.40723226 (簽) \xa0 已建立完成網站 \xa0 \n 7.40723229 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 8.40723230 (簽) \xa0 已建立完成網站 \xa0 \n 9.40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 10.40723242 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 11.40723246 (group leader) (簽) \xa0 已建立完成網站 \xa0 \n 12.40732319 (簽) \xa0\xa0 \n 日後小組分工 \xa0 \n 1.由(40723201、40723206、40723230、40723241、40723246)， 已經建立好網站及編輯完網站的同學，前去協助還沒完成的同學， 及分配工作 \n 2. 40723213 、 40723242督處尚未完成的同學，互相協助來完成第一周課程 \xa0 \n 3.40723223 、 40723223負責處理小組會議 \xa0 \n 4.40723246 \xa0 負責製作小組會議PDF \n 5.40723241 、 40723216提醒小組問題及完成分組作業 \xa0 \n 組員會議中提醒的事項: \n \xa0 1.網站的格式及編譯 \xa0 \n \xa0 2.其餘的工作分配 \xa0 \n \xa0 3.PDF放倉儲的download及如何放置 \n 開會影片： \n \n', 'tags': '', 'url': '開會紀錄.html'}, {'title': 'Week6~Week9', 'text': 'WEEK6 \n 課程內容: \n 安裝OBSPortable.exe與yotube做配合,往後拍影片,頭像左下角需要有自己的影像 \n 安裝並開啟pyslvs.exe,設定四連趕模擬,觀察連趕運動方向 \n', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': 'Week10~Week14', 'text': '', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week15~Week18', 'text': '', 'tags': '', 'url': 'Week15~Week18.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment 1', 'text': '', 'tags': '', 'url': 'Assignment 1.html'}, {'title': 'Random Grouping', 'text': '', 'tags': '', 'url': 'Random Grouping.html'}, {'title': 'Potable System', 'text': '', 'tags': '', 'url': 'Potable System.html'}, {'title': 'Four Wheel Car', 'text': '', 'tags': '', 'url': 'Four Wheel Car.html'}, {'title': 'Assignment 2', 'text': '', 'tags': '', 'url': 'Assignment 2.html'}, {'title': 'Assignment 3', 'text': '', 'tags': '', 'url': 'Assignment 3.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '同步 repository', 'text': '\n 顯示目前所有的遠端目錄 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 應該可看見 \n \n \n \n \n \n origin https://github.com/istar0me/wp106a.git (fetch) origin \n https://github.com/istar0me/wp106a.git (push) \n \n \n \n \n \n \n \n 新增遠端 Repository\xa0 \n \n \n \n \n git remote add <自行輸入名稱> https://github.com/s40723246/cd2020-bg1.git \n \n \n \n \n \n 此時確認目前追蹤的遠端清單 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 會發現多出兩組 upstream \n \n \n \n \n \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (fetch) \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (push) \n \n \n \n \n \n \n \n 切換到要做更新的分支 \n \n \n \n \n git checkout\xa0m aster \n \n \n \n \n \n \n 將組別新版本的檔案拉進自己 master 分支 \n \n \n \n \n git pull <輸入名稱> master \n \n \n \n \n \n \n 完成本機端的更新，此時可選擇將新版的檔案上傳到自己的 GitHub 上 \n \n \n \n \n \n git push origin master \n \n \n \n \n', 'tags': '', 'url': '同步 repository.html'}]};