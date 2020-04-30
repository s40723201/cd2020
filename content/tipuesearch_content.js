var tipuesearch = {"pages": [{'title': 'About', 'text': '小組網站連結： https://s40723246.github.io/cd2020-bg1/content/index.html \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': 'WEEK1 \n 建立個人倉儲cd2020及進行網站編譯 \n ．下載 2019Fall可攜套件.7z \xa0，完成後開啟。 ．登入個人github帳號，創建新的倉儲cd2020。 ．進入要存放資料夾tmp。 ．輸入\xa0git clone \xa0https://github.com/s40723201/cd2020\xa0 複製個人倉儲至資料夾。 ．輸入 git submodule add https://github.com/mdecourse/cmsimde.git\xa0 取得子模組資料。 ．將 up_dir 的所有項目複製到cd2020。 ．完成後，python wsgi.py 開始編輯倉儲。 ．編輯完成後，git status\xa0->\xa0git add .\xa0->\xa0git commit -m "XXX"\xa0->\xa0git push。 \n WEEK 2 \n 將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n ．收尋\xa0 Python 官網。 ．點選Downloads下的 Windows ，並點選\xa0 Latest Python 3 Release - Python 3.8.2 。 ．找到\xa0 Windows x86-64 executable installer \xa0 並下載。 ．開始下載，必須將  pip 選項 取消 ．建立新的start.bat \n start.bat: \n \n \n \n \n @echo off set Disk=y subst %Disk%: "data" %Disk%: set HomePath=%Disk%:\\home_mdecourse set HomeDrive=%Disk%:\\home_mdecourse set Home=%Disk%:\\home_mdecourse set USERPROFILE=%Disk%:\\home_mdecourse REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING="utf-8" set PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages; set PYTHONHOME=%Disk%:\\py38 REM for flutter set java_home=%Disk%:\\java\\jdk8u222-b10 set ANDROID_SDK_home=%Disk%:\\home_mdecourse set GRADLE_USER_home=%Disk%:\\home_mdecourse set ANDROID_SDK_ROOT=%Disk%:\\android\\sdk set ANDROID_Home=%Disk%:\\android\\sdk\\tools REM for putty set GIT_HOME=%CDisk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe set path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts; set path_msys2=%Disk%:\\msys64\\mingw64\\bin; REM coreutils is for compiling fossil scm set path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64; set path_tcc=%Disk%:\\tcc; set path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin; set path_nodejs=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; set path_git=%Disk%:\\portablegit\\bin; set path_xming=%Disk%:\\Xming; set path_latex=%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32; set path_flutter=%Disk%:\\java\\jdk8u222-b10\\bin;%Disk%:\\flutter\\bin;%Disk%:\\Android\\sdk;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\tools\\bin;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\flutter\\bin\\cache\\dart-sdk\\bin;%Disk%:\\vscode; set path_putty=%Disk%:\\putty; path=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path_flutter%;%path_putty%;%path_latex%;%path%; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe Exit \n \n \n \n ．執行指令，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n \n \xa0 \n \n ．下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n ．下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n ．下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0portablegit下。 ．安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': '第1次開會紀錄', 'text': '會議流程： \n \n 成員簽到 \xa0 。 \n 討論日後分工 \xa0 。 \n 有問題的同學提出問題 \xa0 。 \n \n 成員名單 \xa0： \n \n 40723201 \xa0 (簽 ) 已建立完成網站 \xa0 \n 40723206 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723213 (簽) \xa0 已建立完成網站 \xa0 \n 40723216 (簽) \xa0 已建立完成網站 \xa0 \n 40723223 (簽)\xa0 已建立完成網站 \xa0 \n 40723226 (簽) \xa0 已建立完成網站 \xa0 \n 40723229 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723230 (簽) \xa0 已建立完成網站 \xa0 \n 40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 40723242 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723246 (簽) \xa0 已建立完成網站 \xa0(group leader) \n 40732319 (簽) \xa0\xa0 \n \n 日後小組分工 ： \n \n 由（40723201、40723206、40723230、40723241、40723246）， 已經建立好網站及編輯完網站的同學，前去協助還沒完成的同學， 及分配工作。 \n 40723213 、 40723242督處尚未完成的同學，互相協助來完成第一周課程 \xa0 。 \n 40723223 、 40723223負責處理小組會議 \xa0 。 \n 40723246 \xa0 負責製作小組會議PDF 。 \n 40723241 、 40723216提醒小組問題及完成分組作業 \xa0 。 \n \n 組員會議中提醒的事項： \n \n \xa0 網站的格式及編譯 \xa0 。 \n \xa0 其餘的工作分配 \xa0 。 \n \xa0 PDF放倉儲的download及如何放置 。 \n \n 開會影片： \n \n', 'tags': '', 'url': '第1次開會紀錄.html'}, {'title': 'Week6~Week9', 'text': 'WEEK6 \n ．安裝OBSPortable.exe與yotube做配合,往後拍影片,頭像左下角需要有自己的影像 \n 翻譯： Topic 1: Mechanical Design Process \n \n \n \n \n 第1章成功的設計 \n 1.1\xa0 設計指南 \n \n 設計指南 \n \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0  助於擴大設計師過去的全部經驗以及他們現在的組織的建立流程。 \n \n 電子產品外殼（ EPE = 電子產品外殼） \n \n \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 由內部和外部結構組成產品的要素。 \n \n EPE 設計師 \x9e \n \n \xa0理解並符合產品規格的能力。\x9e 能夠添加並幫助創建產品規格。\x9e 為產品提出的問題創建創造性的解決方案。 \n 1.2\xa0 定義整體團隊 \n 團隊可以是：\x9e \n ．小型或大型。\x9e \n ． 位於一個位置或分佈在全球。\x9e \n ． 資源有限或可以訪問幾乎無限的資源。\x9e \n ． 是否擁有最新工具。\x9e \n ． 出於各種原因而實現目標的動機。\x9e \n ． 經驗豐富。 \n \xa0  \u3000整個工程包含著多個學科之間的設計融合。例如：軟件和硬體工程、機械工程（包括結構和熱學）、系統工程 … 。 \n\u3000\u3000因此，知道機械工程只是電子產品整體工程設計的一部分，並且許多決策是與其他學科合作而成的。這些都是為了強調機械設計不是“憑空”完成，而是作為團隊共同努力的結果。\n 1.3\xa0 產品要求 \n \n 產品將為客戶帶來什麼成就。 \n 說明產品如何與客戶互動。 \n 產品各組件的描述。 \n 展示產品的最終外觀。 \n 產品將在運行中和放置的環境，包括：溫度、衝擊、跌落、振動、濕度…。 \n 產品需要通過測試達到所有標準。包括安全和法規標準，例如：安全性保險商實驗室（ UL ）、電動勢電磁干擾（ EMI ）…。 \n \n 1.3.1規範功能 \n \n 最少的輸入。 \n 完整規格。 \n 工作規範。 \n \n 1.3.2準時按計劃進行 \n 1.3.3交貨的預計成本 \n \n 修改完成項目所需的人力資源。 \n 完成的項目所需資源被修改。 \n 修訂產品的預期銷售成本。 \n \n 1.4 草繪與細節 \n \u3000\u3000 EPE 設計人員必須知道何時在以下兩種模式之間切換： \n \n 草繪或集思廣益： 快速思考產品如何設計，同時獲得他人的反饋更改選擇。規模並不是很重要，速度才是這裡的重點。 \n 詳圖： 在“詳細模式”下，可以準確計算出設計中的一些關鍵部分 \n \n 1.5 設計評論 \n \u3000\u3000正式的設計評審通常是按照項目時間表上的計劃進行。 \n \u3000\u3000非正式的設計評審是偶爾或自發進行的。就像設計師去辦公室並要求同事“看看”、在設計師認為足夠接近設計問題或已有經驗的少數人中召開簡短會議。 \n 1.6 溝通 \n \u3000\u3000 溝通是設計成功的必要條件。這句話本身是正確的，但值得進行更充分的討論。 \n 1.6.1溝通目的 \n \u3000\u3000交流的目的是傳達有關設計的信息。 \n 1.6.2溝通的價值 \n \u3000\u3000良好的溝通將使項目更加成功。 \n 1.6.3通信鏈中的連接 \n \u3000\u3000交流的目標之一是將信息提供給需要的人，團隊包括很多學科。 EPE 設計師應在團隊中涉及所有人員做出決定，這些人對於做出決定非常重要。 \n 1.7 工程經濟 \n \u3000\u3000不論工程經濟學的基本原理，就不可能完成設計。幾乎所有的工作中，“付出什麼代價”都是最重要的考慮因素。在許多產品設計中，它將成為此產品成功或失敗的主要原因之一。 \n 章節總結 \n \u3000\u3000介紹如何將設計視為“成功”，以及設計如何滿足產品要求。 \n \xa0 \n 參考文件 \n \n  Thuesen HG, Fabrycky WJ, Thuesen GJ. Engineering Economy, 1971, Prentice-Hall \n \n \n \n \n \n WEEK7 \n \n \n 四輪車的基本外型設置 \n ※作業一 (4 輪 車) \xa0 \n *根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \xa0 四輪車馬達設定及鍵盤控制加速及轉彎 \xa0 \n \xa0 利用Vrep 實施模擬 \xa0 \n \n \xa0 步驟: \xa0 \n 1.先add<primitive shape< 導入車體形狀 \xa0 \n 且 導入後左方工作列因該會呈現下方的樣態 \xa0 \n \xa0 \n 2.調整位置 \xa0 \n 若需精準調整位置時可以，不須拖拉，可以直接輸入 \xa0 \n \xa0 \n 3.調整車體大小 \xa0 \n 可以依照下方圖示更改車體大小 \xa0 \n \xa0 \n 4.馬達調整功率 \xa0 \n 藉由勾選motor properties以啟動馬達，並可以藉由調整轉動速度和力矩達到所想要馬達轉動之效果，底下的lock motor when target velocity is zero 則可以使馬達速度為零時鎖定住馬達 \xa0 \n \xa0 \n 5.檢查碰撞 \xa0 \n 物件的動力學設定也必須要設定好，如下方所示物體的碰撞和物體的動態都必須打開，才能使剛剛設定好的馬達進行對輪胎的帶動 \xa0 \n \xa0 \n \n 貼上撰寫好的鍵盤控制轉彎程式 \n \n \n \n WEEK8 \n 安裝以下三個模組 \n \n \n \n \n \n \n \n 1 \n \n \n \n pip install opencv-python \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install imutils \n \n \n \n \n \n \n \n \n \n \n 3 \n \n \n \n pip install numpy \n \n \n \n \n \n \n \n \n WEEK9 \n', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': '第2次開會紀錄', 'text': '會議流程： \n \n 成員簽到等候 \xa0。 \n 分工作業進度回報及問題討論 \xa0 。 \n 有問題的同學提出問題 \xa0 。 \n \n \xa0 成員名單： \xa0 \n \n 40723201\xa0 ( 簽 ) \xa0 已建立完成網站 \xa0 \n 40723206 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \xa0 \n 40723213 (簽) \xa0 已建立完成網站 \xa0 \n 40723216 (簽) \xa0 已建立完成網站 \xa0 \n 40723223 (簽) \xa0 已建立完成網站 \xa0 \n 40723226 (簽) \xa0 已建立完成網站 \xa0 \n 40723229 (簽) \xa0 已建立完成網站   ( 小組長) \xa0 \xa0 \n 40723230 () \xa0 已建立完成網站 \xa0 \n 40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 40723242 (簽) \xa0 已建立完成網站   ( 小組長) \xa0 \xa0 \n 40723246\xa0 (簽) \xa0已建立完成網站\xa0 (group leader) \n 40732319 () \xa0 \n \n \xa0 分工作業進度回報及問題討論 \xa0： \n \n \xa0 作業一\xa0 (4 輪 車) \xa0 \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \n \xa0 作業二\xa0 (設計 協同) \xa0 \n \n 根據主題 \xa0 Topic 0 們可以創建英語英語詞彙收集服務嗎？ \xa0 \n 根據主題 \xa0 Topic 1 \xa0 我們可以構建在線工具來促進這些過程嗎？ \xa0 \n \xa0 Topic 0: \xa0 From Digital to Industrial + Engineering Product Design Collaboration ( 從數字到工業+工程產品設計協作 ) \xa0 \n 設計 資料 : DigitalProductCollaboration.pdf 、 IndustrialAndEngineeringProductDesignCollaboration.pdf \xa0 \n Can we create an \xa0 english-english \xa0 vocabulary collection service? \xa0 \n 相關 網站: https://www.autoitscript.com/forum/files/file/419-dictionary_bigdb/ \xa0 \n Topic 1 : \xa0 Mechanical Design Process ( 機械設計過程 ) \xa0 \n Login to your gm email account and download \xa0 MechanicalDesignProcess.pdf . \xa0 \n 以上由\xa0 40723206\xa0 分配工作 \xa0。 \n 下列為分工表格： \n \n \n \xa0 各組員下載OBS，往後會議討論用 \xa0 \n 作業二必須在 4/23 前完成，並上傳 pdf 檔到個人倉儲的 download 上。不會做的可以問會的同學或在 gitter 上發問。 \n 請依每個人的作業二pdf檔、網站內容，進行互評。 \n \n \n 本周討論教材： \n Topic 0: From Digital\xa0to Industrial + Engineering  Product Design Collaboration \n Login to your gm email account and download \n DigitalProductCollaboration.pdf \n IndustrialAndEngineeringProductDesignCollaboration.pdf \n Can we create an english-english vocabulary collection service? \n https://www.autoitscript.com/forum/files/file/419-dictionary_bigdb/ \n Topic 1: Mechanical Design Process \n Login to your gm email account and download \xa0 MechanicalDesignProcess.pdf . \n (Can we build online tools to facilitate these processes?) \n Successful Design \n Building the\xa0Design \n Structural Considerations \n Materials and\xa0Processes \n Topic 2: Mechatronic System Design \n Login to your gm email account and download \xa0 MSModelingAndTFApproaches.pdf . \n (Can we build online tools to facilitate these processes?) \n Mechatronic Systems \n Mathematical Modeling \n Transfer Function Approaches \n Login to your gm email account and download \xa0 MechatronicDesignCases.pdf . \n DC Motor Velocity and Position Control \n Balancing Robot Control \n Magnetic Levitation System \n 開會影片： \n \n', 'tags': '', 'url': '第2次開會紀錄.html'}, {'title': '第3次開會紀錄', 'text': '討論製作four wheel及提醒事項 \n \n \n 第一組 第三次會議 (WEEK8) 1.成員簽到等候 2.分工作業進度回報及問題討論 3.有問題的同學提出問題 成員名單 1.40723201 (簽) 已建立完成網站 2.40723206 (簽) 已建立完成網站 小組長 3.40723213 (簽) 已建立完成網站 4.40723216 (簽) 已建立完成網站 5. 40723223(簽) 已建立完成網站 6.40723226 () 已建立完成網站 7.40723229 (簽) 已建立完成網站 小組長 8.40723230 (簽) 已建立完成網站 9.40723241 (簽) 已建立完成網站 10.40723242 () 已建立完成網站 小組長 11.40723246 (group leader) (簽) 已建立完成網站 12.40732319 () ※作業一(4 輪車) *根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機 器人需要做些什麼? 四輪車馬達設定及鍵盤控制加速及轉彎 本週重要提醒及任務 1.各組員下載 OBS，以往後會議討論用 2. 作業二必須在 4/23 前完成，並上傳 pdf 檔到個人倉儲的 download 上。 不會做 的可以問會的同學或在 gitter 上發問 3. 請依每個人的作業二 pdf 檔、網站內容，進行互評 4.把網站不是自己資料的標題刪除 \n', 'tags': '', 'url': '第3次開會紀錄.html'}, {'title': 'Week10~Week14', 'text': '', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week15~Week18', 'text': '', 'tags': '', 'url': 'Week15~Week18.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment 1', 'text': 'Due March 25, 2020 \xa0 for class 2a and \xa0 March 26, 2020 \xa0 for class 2b. \n 1. Describe how\xa0to\xa0do an efficient random grouping for this\xa0course or do the roll calling randomly? \n 2. Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain \xa0 CMSiMDE \xa0 website, \xa0 Pelican blog \xa0 and \xa0 Reveal.js \xa0 presentation on \xa0 Github ? \n 3. What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot? \n', 'tags': '', 'url': 'Assignment 1.html'}, {'title': 'Assignment 2', 'text': "Due April 22, 2020 \xa0 for class 2a and \xa0 April 23, 2020 \xa0 for class 2b. \n 1.\xa0According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's\xa0 four wheeled robot. \n 2. What do you need to know from\xa0 https://cyberbotics.com/doc/guide/index \xa0 \xa0to implement a four-wheeled robot? \n W9: Midterm presentation \n", 'tags': '', 'url': 'Assignment 2.html'}, {'title': 'Assignment 3', 'text': 'Due \xa0 May 27, 2020 \xa0 for class 2a and \xa0 May 28, 2020 \xa0 for class 2b. \n According to the reading of Topic 2 and Topic 3, propose a Mechatronic project by using \xa0 CoppeliaSim \xa0 or \xa0 Webots \xa0 and \xa0 Onshape . \n', 'tags': '', 'url': 'Assignment 3.html'}, {'title': 'Final project', 'text': 'Due June 24, 2020. \n Realize\xa0your Mechatronic project and conclude with a presentation video and pdf report. \n', 'tags': '', 'url': 'Final project.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '同步 repository', 'text': '\n 顯示目前所有的遠端目錄 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 應該可看見 \n \n \n \n \n \n origin https://github.com/istar0me/wp106a.git (fetch) origin \n https://github.com/istar0me/wp106a.git (push) \n \n \n \n \n \n \n \n 新增遠端 Repository\xa0 \n \n \n \n \n git remote add <自行輸入名稱> https://github.com/s40723246/cd2020-bg1.git \n \n \n \n \n \n 此時確認目前追蹤的遠端清單 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 會發現多出兩組 upstream \n \n \n \n \n \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (fetch) \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (push) \n \n \n \n \n \n \n \n 切換到要做更新的分支 \n \n \n \n \n git checkout\xa0m aster \n \n \n \n \n \n \n 將組別新版本的檔案拉進自己 master 分支 \n \n \n \n \n git pull <輸入名稱> master \n \n \n \n \n \n \n 完成本機端的更新，此時可選擇將新版的檔案上傳到自己的 GitHub 上 \n \n \n \n \n \n git push origin master \n \n \n \n \n', 'tags': '', 'url': '同步 repository.html'}]};