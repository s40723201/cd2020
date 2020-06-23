var tipuesearch = {"pages": [{'title': 'About', 'text': '小組網站連結： https://s40723246.github.io/cd2020-bg1/content/index.html \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': 'WEEK1 \n 建立個人倉儲cd2020及進行網站編譯 \n ．下載 2019Fall可攜套件.7z \xa0，完成後開啟。 ．登入個人github帳號，創建新的倉儲cd2020。 ．進入要存放資料夾tmp。 ．輸入\xa0git clone \xa0https://github.com/s40723201/cd2020\xa0 複製個人倉儲至資料夾。 ．輸入 git submodule add https://github.com/mdecourse/cmsimde.git\xa0 取得子模組資料。 ．將 up_dir 的所有項目複製到cd2020。 ．完成後，python wsgi.py 開始編輯倉儲。 ．編輯完成後，git status\xa0->\xa0git add .\xa0->\xa0git commit -m "XXX"\xa0->\xa0git push。 \n WEEK 2 \n 將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n ．收尋\xa0 Python 官網。 ．點選Downloads下的 Windows ，並點選\xa0 Latest Python 3 Release - Python 3.8.2 。 ．找到\xa0 Windows x86-64 executable installer \xa0 並下載。 ．開始下載，必須將  pip 選項 取消 ．建立新的start.bat \n start.bat: \n \n \n \n \n @echo off set Disk=y subst %Disk%: "data" %Disk%: set HomePath=%Disk%:\\home_mdecourse set HomeDrive=%Disk%:\\home_mdecourse set Home=%Disk%:\\home_mdecourse set USERPROFILE=%Disk%:\\home_mdecourse REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING="utf-8" set PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages; set PYTHONHOME=%Disk%:\\py38 REM for flutter set java_home=%Disk%:\\java\\jdk8u222-b10 set ANDROID_SDK_home=%Disk%:\\home_mdecourse set GRADLE_USER_home=%Disk%:\\home_mdecourse set ANDROID_SDK_ROOT=%Disk%:\\android\\sdk set ANDROID_Home=%Disk%:\\android\\sdk\\tools REM for putty set GIT_HOME=%CDisk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe set path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts; set path_msys2=%Disk%:\\msys64\\mingw64\\bin; REM coreutils is for compiling fossil scm set path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64; set path_tcc=%Disk%:\\tcc; set path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin; set path_nodejs=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; set path_git=%Disk%:\\portablegit\\bin; set path_xming=%Disk%:\\Xming; set path_latex=%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32; set path_flutter=%Disk%:\\java\\jdk8u222-b10\\bin;%Disk%:\\flutter\\bin;%Disk%:\\Android\\sdk;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\tools\\bin;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\flutter\\bin\\cache\\dart-sdk\\bin;%Disk%:\\vscode; set path_putty=%Disk%:\\putty; path=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path_flutter%;%path_putty%;%path_latex%;%path%; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe start /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe Exit \n \n \n \n ．執行指令，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n \n \xa0 \n \n ．下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n ．下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n ．下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0portablegit下。 ．安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': '第1次開會紀錄', 'text': '會議流程： \n \n 成員簽到 \xa0 。 \n 討論日後分工 \xa0 。 \n 有問題的同學提出問題 \xa0 。 \n \n 成員名單 \xa0： \n \n 40723201 \xa0 (簽 ) 已建立完成網站 \xa0 \n 40723206 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723213 (簽) \xa0 已建立完成網站 \xa0 \n 40723216 (簽) \xa0 已建立完成網站 \xa0 \n 40723223 (簽)\xa0 已建立完成網站 \xa0 \n 40723226 (簽) \xa0 已建立完成網站 \xa0 \n 40723229 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723230 (簽) \xa0 已建立完成網站 \xa0 \n 40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 40723242 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \n 40723246 (簽) \xa0 已建立完成網站 \xa0(group leader) \n 40732319 (簽) \xa0\xa0 \n \n 日後小組分工 ： \n \n 由（40723201、40723206、40723230、40723241、40723246）， 已經建立好網站及編輯完網站的同學，前去協助還沒完成的同學， 及分配工作。 \n 40723213 、 40723242督處尚未完成的同學，互相協助來完成第一周課程 \xa0 。 \n 40723223 、 40723223負責處理小組會議 \xa0 。 \n 40723246 \xa0 負責製作小組會議PDF 。 \n 40723241 、 40723216提醒小組問題及完成分組作業 \xa0 。 \n \n 組員會議中提醒的事項： \n \n \xa0 網站的格式及編譯 \xa0 。 \n \xa0 其餘的工作分配 \xa0 。 \n \xa0 PDF放倉儲的download及如何放置 。 \n \n 開會影片： \n \n', 'tags': '', 'url': '第1次開會紀錄.html'}, {'title': 'Week6~Week9', 'text': "WEEK6 \n ．安裝OBSPortable.exe與yotube做配合,往後拍影片,頭像左下角需要有自己的影像 \n 翻譯： Topic 1: Mechanical Design Process \n \n \n \n \n 第1章成功的設計 \n 1.1\xa0 設計指南 \n \n 設計指南 \n \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0  助於擴大設計師過去的全部經驗以及他們現在的組織的建立流程。 \n \n 電子產品外殼（ EPE = 電子產品外殼） \n \n \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 由內部和外部結構組成產品的要素。 \n \n EPE 設計師 \x9e \n \n \xa0理解並符合產品規格的能力。\x9e 能夠添加並幫助創建產品規格。\x9e 為產品提出的問題創建創造性的解決方案。 \n 1.2\xa0 定義整體團隊 \n 團隊可以是：\x9e \n ．小型或大型。\x9e \n ． 位於一個位置或分佈在全球。\x9e \n ． 資源有限或可以訪問幾乎無限的資源。\x9e \n ． 是否擁有最新工具。\x9e \n ． 出於各種原因而實現目標的動機。\x9e \n ． 經驗豐富。 \n \xa0  \u3000整個工程包含著多個學科之間的設計融合。例如：軟件和硬體工程、機械工程（包括結構和熱學）、系統工程 … 。 \n\u3000\u3000因此，知道機械工程只是電子產品整體工程設計的一部分，並且許多決策是與其他學科合作而成的。這些都是為了強調機械設計不是“憑空”完成，而是作為團隊共同努力的結果。\n 1.3\xa0 產品要求 \n \n 產品將為客戶帶來什麼成就。 \n 說明產品如何與客戶互動。 \n 產品各組件的描述。 \n 展示產品的最終外觀。 \n 產品將在運行中和放置的環境，包括：溫度、衝擊、跌落、振動、濕度…。 \n 產品需要通過測試達到所有標準。包括安全和法規標準，例如：安全性保險商實驗室（ UL ）、電動勢電磁干擾（ EMI ）…。 \n \n 1.3.1規範功能 \n \n 最少的輸入。 \n 完整規格。 \n 工作規範。 \n \n 1.3.2準時按計劃進行 \n 1.3.3交貨的預計成本 \n \n 修改完成項目所需的人力資源。 \n 完成的項目所需資源被修改。 \n 修訂產品的預期銷售成本。 \n \n 1.4 草繪與細節 \n \u3000\u3000 EPE 設計人員必須知道何時在以下兩種模式之間切換： \n \n 草繪或集思廣益： 快速思考產品如何設計，同時獲得他人的反饋更改選擇。規模並不是很重要，速度才是這裡的重點。 \n 詳圖： 在“詳細模式”下，可以準確計算出設計中的一些關鍵部分 \n \n 1.5 設計評論 \n \u3000\u3000正式的設計評審通常是按照項目時間表上的計劃進行。 \n \u3000\u3000非正式的設計評審是偶爾或自發進行的。就像設計師去辦公室並要求同事“看看”、在設計師認為足夠接近設計問題或已有經驗的少數人中召開簡短會議。 \n 1.6 溝通 \n \u3000\u3000 溝通是設計成功的必要條件。這句話本身是正確的，但值得進行更充分的討論。 \n 1.6.1溝通目的 \n \u3000\u3000交流的目的是傳達有關設計的信息。 \n 1.6.2溝通的價值 \n \u3000\u3000良好的溝通將使項目更加成功。 \n 1.6.3通信鏈中的連接 \n \u3000\u3000交流的目標之一是將信息提供給需要的人，團隊包括很多學科。 EPE 設計師應在團隊中涉及所有人員做出決定，這些人對於做出決定非常重要。 \n 1.7 工程經濟 \n \u3000\u3000不論工程經濟學的基本原理，就不可能完成設計。幾乎所有的工作中，“付出什麼代價”都是最重要的考慮因素。在許多產品設計中，它將成為此產品成功或失敗的主要原因之一。 \n 章節總結 \n \u3000\u3000介紹如何將設計視為“成功”，以及設計如何滿足產品要求。 \n \xa0 \n 參考文件 \n \n  Thuesen HG, Fabrycky WJ, Thuesen GJ. Engineering Economy, 1971, Prentice-Hall \n \n \n \n \n \n WEE \n 四輪車的基本外型設置 \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \xa0 四輪車馬達設定及鍵盤控制加速及轉彎 \xa0 \n \xa0 利用Vrep 實施模擬 \xa0 \n \n \n \xa0 步驟： \n \n 先add  ➜\xa0 primitive shape\xa0 ➜\xa0 導入車體形狀 ， 且 導入後左方工作列因該會呈現下方的樣態 \xa0 \n \n \xa0 \n \n 調整位置 \xa0 \n \n \xa0 \n \n 調整車體大小 ， 可以依照下方圖示更改車體大小 \xa0 \n \n \xa0 \n \n 馬達調整功率 \xa0 \n \n 藉由勾選 motor properties以啟動馬達，並可以藉由調整轉動速度和力矩達到所想要馬達轉動之效果，底下的lock motor when target velocity is zero 則可以使馬達速度為零時鎖定住馬達 \xa0 \n \xa0 \n \n 檢查碰撞 \xa0 \n \n 物件的動力學設定也必須要設定好，如下方所示物體的碰撞和物體的動態都必須打開，才能使剛剛設定好的馬達進行對輪胎的帶動 \xa0 \n \xa0 \n \n 貼上撰寫好的鍵盤控制轉彎程式 \n \n -- This script is threaded! It is a very simple example of how Ackermann steering can be handled. -- Normally, one would use a non-threaded script for that \xa0 threadFunction=function() \xa0\xa0\xa0\xa0while simGetSimulationState()~=sim_simulation_advancing_abouttostop do \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- Read the keyboard messages (make sure the focus is on the main window, scene view): \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0message,auxiliaryData=simGetSimulatorMessage() \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0while message~=-1 do \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (message==sim_message_keypress) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2007) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- up key \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredWheelRotSpeed=desiredWheelRotSpeed+wheelRotSpeedDx \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2008) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- down key \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredWheelRotSpeed=desiredWheelRotSpeed-wheelRotSpeedDx \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2009) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- left key \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=desiredSteeringAngle+steeringAngleDx \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (desiredSteeringAngle>45*math.pi/180) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=45*math.pi/180 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (auxiliaryData[1]==2010) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- right key \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=desiredSteeringAngle-steeringAngleDx \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (desiredSteeringAngle<-45*math.pi/180) then \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0desiredSteeringAngle=-45*math.pi/180 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0message,auxiliaryData=simGetSimulatorMessage() \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0end \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- We handle the front left and right wheel steerings (Ackermann steering): \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0steeringAngleLeft=math.atan(l/(-d+l/math.tan(desiredSteeringAngle))) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0steeringAngleRight=math.atan(l/(d+l/math.tan(desiredSteeringAngle))) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetPosition(steeringLeft,steeringAngleLeft) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetPosition(steeringRight,steeringAngleRight) \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- We take care of setting the desired wheel rotation speed: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetVelocity(motorLeft,desiredWheelRotSpeed) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSetJointTargetVelocity(motorRight,desiredWheelRotSpeed) \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0-- Since this script is threaded, don't waste time here: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0simSwitchThread() -- Resume the script at next simulation loop start \xa0\xa0\xa0\xa0end end \xa0 -- Put some initialization code here: -- Retrieving of some handles and setting of some initial values: steeringLeft=simGetObjectHandle('Steer_left_joint') steeringRight=simGetObjectHandle('Steer_right_joint') motorLeft=simGetObjectHandle('Front_left_joint') motorRight=simGetObjectHandle('Front_right_joint') desiredSteeringAngle=0 desiredWheelRotSpeed=0 steeringAngleDx=2*math.pi/180 wheelRotSpeedDx=20*math.pi/180 d=0.755 -- 2*d=distance between left and right wheels l=2.5772 -- l=distance between front and read wheels \xa0 -- Here we execute the regular thread code: res,err=xpcall(threadFunction,function(err) return debug.traceback(err) end) if not res then \xa0\xa0\xa0\xa0simAddStatusbarMessage('Lua runtime error: '..err) end \xa0 -- Put some clean-up code here: \n WEEK8 \n 安裝以下三個模組 \n \n \n \n \n \n \n \n 1 \n \n \n \n pip install opencv-python \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install imutils \n \n \n \n \n \n \n \n \n \n \n 3 \n \n \n \n pip install numpy \n \n \n \n \n \n \n \n \n WEEK9 \n", 'tags': '', 'url': 'Week6~Week9.html'}, {'title': '第2次開會紀錄', 'text': '會議流程： \n \n 成員簽到等候 \xa0。 \n 分工作業進度回報及問題討論 \xa0 。 \n 有問題的同學提出問題 \xa0 。 \n \n \xa0 成員名單： \xa0 \n \n 40723201\xa0 ( 簽 ) \xa0 已建立完成網站 \xa0 \n 40723206 (簽) \xa0 已建立完成網站 \xa0( 小組長) \xa0 \xa0 \n 40723213 (簽) \xa0 已建立完成網站 \xa0 \n 40723216 (簽) \xa0 已建立完成網站 \xa0 \n 40723223 (簽) \xa0 已建立完成網站 \xa0 \n 40723226 (簽) \xa0 已建立完成網站 \xa0 \n 40723229 (簽) \xa0 已建立完成網站   ( 小組長) \xa0 \xa0 \n 40723230 () \xa0 已建立完成網站 \xa0 \n 40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 40723242 (簽) \xa0 已建立完成網站   ( 小組長) \xa0 \xa0 \n 40723246\xa0 (簽) \xa0已建立完成網站\xa0 (group leader) \n 40732319 () \xa0 \n \n \xa0 分工作業進度回報及問題討論 \xa0： \n \n \xa0 作業一\xa0 (4 輪 車) \xa0 \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \n \xa0 作業二\xa0 (設計 協同) \xa0 \n \n 根據主題 \xa0 Topic 0 們可以創建英語英語詞彙收集服務嗎？ \xa0 \n 根據主題 \xa0 Topic 1 \xa0 我們可以構建在線工具來促進這些過程嗎？ \xa0 \n \xa0 Topic 0: \xa0 From Digital to Industrial + Engineering Product Design Collaboration ( 從數字到工業+工程產品設計協作 ) \xa0 \n 設計 資料 : DigitalProductCollaboration.pdf 、 IndustrialAndEngineeringProductDesignCollaboration.pdf \xa0 \n Can we create an \xa0 english-english \xa0 vocabulary collection service? \xa0 \n 相關 網站: https://www.autoitscript.com/forum/files/file/419-dictionary_bigdb/ \xa0 \n Topic 1 : \xa0 Mechanical Design Process ( 機械設計過程 ) \xa0 \n Login to your gm email account and download \xa0 MechanicalDesignProcess.pdf . \xa0 \n 以上由\xa0 40723206\xa0 分配工作 \xa0。 \n 下列為分工表格： \n \n \n \xa0 各組員下載OBS，往後會議討論用 \xa0 \n 作業二必須在 4/23 前完成，並上傳 pdf 檔到個人倉儲的 download 上。不會做的可以問會的同學或在 gitter 上發問。 \n 請依每個人的作業二pdf檔、網站內容，進行互評。 \n \n \n 本周討論教材： \n Topic 0: From Digital\xa0to Industrial + Engineering  Product Design Collaboration \n Login to your gm email account and download \n DigitalProductCollaboration.pdf \n IndustrialAndEngineeringProductDesignCollaboration.pdf \n Can we create an english-english vocabulary collection service? \n https://www.autoitscript.com/forum/files/file/419-dictionary_bigdb/ \n Topic 1: Mechanical Design Process \n Login to your gm email account and download \xa0 MechanicalDesignProcess.pdf . \n (Can we build online tools to facilitate these processes?) \n Successful Design \n Building the\xa0Design \n Structural Considerations \n Materials and\xa0Processes \n Topic 2: Mechatronic System Design \n Login to your gm email account and download \xa0 MSModelingAndTFApproaches.pdf . \n (Can we build online tools to facilitate these processes?) \n Mechatronic Systems \n Mathematical Modeling \n Transfer Function Approaches \n Login to your gm email account and download \xa0 MechatronicDesignCases.pdf . \n DC Motor Velocity and Position Control \n Balancing Robot Control \n Magnetic Levitation System \n 開會影片： \n \n', 'tags': '', 'url': '第2次開會紀錄.html'}, {'title': '第3次開會紀錄', 'text': '討論製作four wheel及提醒事項 \n \n \n 第一組 第三次會議 (WEEK8) 1.成員簽到等候 2.分工作業進度回報及問題討論 3.有問題的同學提出問題 成員名單 1.40723201 (簽) 已建立完成網站 2.40723206 (簽) 已建立完成網站 小組長 3.40723213 (簽) 已建立完成網站 4.40723216 (簽) 已建立完成網站 5. 40723223(簽) 已建立完成網站 6.40723226 () 已建立完成網站 7.40723229 (簽) 已建立完成網站 小組長 8.40723230 (簽) 已建立完成網站 9.40723241 (簽) 已建立完成網站 10.40723242 () 已建立完成網站 小組長 11.40723246 (group leader) (簽) 已建立完成網站 12.40732319 () ※作業一(4 輪車) *根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機 器人需要做些什麼? 四輪車馬達設定及鍵盤控制加速及轉彎 本週重要提醒及任務 1.各組員下載 OBS，以往後會議討論用 2. 作業二必須在 4/23 前完成，並上傳 pdf 檔到個人倉儲的 download 上。 不會做 的可以問會的同學或在 gitter 上發問 3. 請依每個人的作業二 pdf 檔、網站內容，進行互評 4.把網站不是自己資料的標題刪除 \n', 'tags': '', 'url': '第3次開會紀錄.html'}, {'title': 'Week10~Week14', 'text': 'WEEK10 \n google用戶登陸 \n \n 登錄到您的@gm帳戶 \n 啟用Google的API \n 按設置同意按鈕按鈕 \n 外部用戶類型 \n 進入“憑據”頁面 \n OAuth 2.0客戶端ID 類型的憑據 \n (設置網址) 授權的JavaScript為：https：// localhost：8443 \n 定義URI為：https：// localhost：8443 / login / google / \n 將oauth_gm.txt保存中 \n .開啟leo更改其中得config中的scrum為自己命名的txt檔案名稱，並且修改完成之後按下save和darwROC \n pip install authomatic \n 開啟https://localhost:8443 \n 測試是否可以成功運作 \n \n \n \n WEEK11 \n ubuntu設置 \n 操作步驟： \n \n 下載\xa0 vitualbox 、 ubuntu 、 CoppeliaSim \xa0 四輪車控制器檔案。 \n 開啟vitualbox，匯入ubuntu。 \n 設定➜網路➜附加到(A)：僅限主機介面卡 \n 啟動ubuntu。 \n 輸入密碼kmol2020，並開啟 LXTerminal。 \n 輸入xterm&。 \n cd coppeliasim4_rev4 ➜ ls ➜ cd CoppeliaSim_Edu_v4_0_0_Ubuntu18_04➜ ls ➜ ./coppeliaSim.sh。 \n \n \n WEEK12 \n mini project \n \n 網站： http://mde.tw/cdbw12-2 \n 倉儲： https://github.com/mdecourse/cdbw12-2 \n \n 翻譯： MSModelingAndTFApproaches \n 第一章 介紹 \n \u3000\u3000 在過去的幾十年中，我們在電子技術方面所取得的進步和小型化已使工程師能夠採用新產品和新工程學科。在十八世紀初，我們已經看到了結合機械零件和電子零件的新產品的推出。機電一體化應用蓬勃發展的另一個因素是電子零件的價格不斷下降，以及設計超小型系統的挑戰。如今，例如具有高性能的微處理器變得非常便宜，這鼓勵了它們在計算機控制系統中的使用。 \n \u3000 \n 1-1機械零件設計 \n \u3000\u3000 機械部分是機電系統中的基本部分。在該部分的階段設計中，我們將構思和製造組成機電一體化系統的部分。還選擇用於該機電系統的致動器和傳感器。致動器和傳感器的機械部分的設計或選擇都是通過遵循將在本卷的下一章介紹的一些設計規則來完成的。同樣重要的是要記住，機電系統一旦循環使用就成為過時的觀點，這是我們在設計階段必須考慮的重要事項。在設計階段，也應考慮出於維護或其他目的而對系統進行的組裝和拆卸。 \n 1-2電子電路設計 \n \u3000\u3000 在電子部分，工程師必須設計電路，以確保機電一體化系統的功能。它涵蓋了所需的電子部件的集成，例如電阻器，電容器，集成電路以及所選的微控制器或微控制器。不同組件所需的穩壓電壓也是該步驟的一部分。電子電路的主要部分是微控制器或一組微控制器。在本卷中，我們決定使用一種類型的單片機，它是Microchip製造的dsPIC30F4011。我們沒有給出任何正當的理由，但我們的願望是採用一個微控制器來處理本卷將要介紹的所有示例。因為我們將對所有示例使用相同的結構，所以該選擇還將使讀者容易實現實時實現。 \n 1-3適時實施 \n \u3000\u3000 在控制部分，工程師必須分析正在研究的系統，並設計適當的控制器以獲得所需的性能。在分析部分，我們應該從建立一個可接受的模型開始，該模型給出輸入與輸出之間的關係。一旦掌握了動態特性，便會選擇一個採樣週期，並將模型轉換為離散時間形式，然後可以從經典比例積分和微分（PID）控制器，狀態反饋控制器或任何其他可以提供給控制器的控制器中選擇一個合適的控制器。 \n 1-4本書的構造 \n \u3000\u3000 在傳遞函數方法部分中，將連續時間系統模型轉換為離散時間系統，並建立了不同的分析技術，並綜合了控制器，以確保達到預期的性能。 \n \u3000\u3000在狀態空間方法部分，將連續時間系統的模型轉換為離散時間狀態空間表示，並開發了用於控制器分析和合成的不同技術，以確保開發出所需的性能。 \n \xa0第二章 機電一體化系統 \n 2-1機電一體化 \n \u3000\u3000 一體化可以定義為涉及產品設計的跨學科工程，其功能依賴於通過控制方案連接的機械，電氣和電子組件的集成。 \n \u3000\u3000如今，機電一體化一詞已享譽全球，許多機電一體化系統都設計用於個人或商業用途。我們日常生活中使用的所有小工具實際上都是機電一體化系統。作為這些小工具的示例，我們提到了使用許多機電一體化系統的筆記本電腦和汽車。 \n 2-2機械零件 \n \u3000 \u3000機械部分代表了我們正在嘗試設計的機電系統中的主要組件，它可以由現有組件製造或製造。 \n \u3000\u3000在本部分的階段設計中，應更加註意以下幾點： \n \n 價格 \n 形狀 \n 重量 \n 尺寸 \n \n \u3000\u3000注意機電一體化系統的運行環境也很重要。這將幫助我們選擇合適的材料來製造機械零件。機電系統的維護也是一個關鍵點，這就是為什麼我們在設計階段要注意系統所有關鍵部分的可訪問性。在這一階段，考慮到所有機電系統的回收將無濟於事，因為我們將無法尊重我們為新一代保護的環境，這一點也很重要。 \n 2-3傳感器 \n \u3000\u3000傳感器是每個機電系統的關鍵點。從某種意義上說，系統的眼睛可以用來檢測所有類型的變化並採取適當的措施。傳感器可以看作是將物理現象，位置，速度，加速度，溫度，流量等轉換為易於測量或處理的電信號的設備。傳感器由換能器和信號調節單元組成。如今，對於某些現象，存在許多可用於感測它們的傳感器，這使得選擇變得非常困難。即使是對於現場經驗豐富的人員，選擇合適的傳感器始終是一項艱鉅的任務。 \n 2-4執行器 \n \u3000\u3000致動器被定義為將某種功率（例如液壓或電力）轉換為線性或旋轉運動的設備。它們代表了手臂軟機電系統。 \n \u3000\u3000實際上，使用了不同類型的執行器，其中包括： \n \n 電動執行器 \n 液壓執行器 \n 和氣動執行器 \n \n \u3000\u3000一種電動執行器，可以將電能轉換為線性的旋轉運動。它們用於對機電一體化系統的機械部分進行定位或賦予其速度。 \n \u3000\u3000除了便宜和簡單之外，直流電動機還易於控制速度，位置和扭矩。儘管它們的同系交流電動機通常在速度控制方面很昂貴，但在低速運行時表現出一些不穩定，並且自身的定位控制也很差。 \n \u3000\u3000電動執行器通常是精確而靈活的。它們是精確定位機械零件或在需要時迅速發展力量的理想之選。它們的主要缺點是在其運行過程中需要使用帶電的冷卻系統。對它們進行良好設計和良好保護後，其維護工作將減少至滑動觸點或換向器的變化。如果未安裝保護裝置，大負載可能會燒毀電動執行器的繞組。 \n 步進電機更適合控制不需要反饋的機械零件。這些類型的執行器通常用於開環控制和機械零件的定位。為此，發送一定數量的脈衝這些執行器用於激光打印機，傳真機和大多數計算機設備。 \n Ubuntu對外連線設定 \n \n 點選檔案 ➜ 喜好設定 ➜ 網路 ➜ 新增NAT網路 \n 編輯NAT網路 ➜ 點選連接埠轉送 ➜ 新增4個新的連接埠轉送埠號 \n \n \n \n \n 主機IP \n 127.0.0.1 \n \n \n 客體IP \n 10.0.2.4 \n \n \n 客體連接埠 \n 22、19999、7443、8443 \n \n \n 主機連接埠 \n 22、19999、17443、18443 \n \n \n \n \n 點選設定 ➜ 網路 ➜ 設定主機網路 「NAT Network」。 \n 啟動➜ 輸入密碼 "\xa0 kmol2020 " 。 \n 開啟LXTermial ➜ 輸入 ifconfig ➜\xa0 輸入 sudo apt install net-tools ➜\xa0 輸入密碼 "\xa0 kmol2020 " 。 \n cd tmp ➜ ls ➜ 輸入 " ping 127.0.0.1 " 測試 ➜ cd cd2020pj1➜ git pull。 \n 輸入 " sudo vi wsgi.py "\xa0 ，按\xa0 i\xa0 進行編輯。 \n 將近端的 host 改為 10.0.2.4 ➜\xa0 按\xa0 Esc\xa0 並輸入 :wq\xa0 存儲。 \n 開啟 leo ➜ 開啟 " cd2020pj1.leo " ➜ 點選 Nav 搜尋 allowExt 。 \n 點選fileuploadfrom ➜ 將第10行新增 ttt 檔 \n 輸入 " cd.. " ➜ 輸入 sudo vi oauth_scrum.txt ( 新增 oauth_scrum.txt\xa0) 。 \n 按\xa0 i\xa0 編輯 ➜ 內容隨意輸入 ➜ 按\xa0 Esc 並輸入 :wq 存儲。 \n cd cd2020pj1 ➜ 輸入\xa0 python3 wsgi.py\xa0 啟動。 \n 網址： https:/127.0.0.1:18443/alogin 。 \n 查看是否上傳成功：帳號： admin、密碼：admin ➜\xa0 點選 fileuploadform ➜ 上傳 ttt 檔 ➜\xa0 點 download list 。 \n \n \n WEEK13 \n mini project \n \n 網站： http://mde.tw/cdbw13-1 \xa0 \n 倉儲： https://github.com/mdecourse/cdbw13-1.git \xa0 \n \n filezilla設定 \n \n \xa0下載\xa0 filezilla ，設定 putty \n 設定的 ip 為虛擬主機 ， 在學校用 ipv6 設定 \n Putty成功啟用後輸入kmol2020 \n 開啟filezilla \n 新增站台 \n 設定好協定SFTP和主機127.0.0.1和連接埠22及使用者kmol2020 \n 輸入密碼kmol2020 \n 設定好之後就可以進行虛擬主機資料的下載並且更改後上傳 \n \n \n WEEK14 \n mini project \n \n 網站： http://mde.tw/cdbw14-3 \xa0 \n 倉儲： https://github.com/mdecourse/cdbw14-3.git \xa0 \n \n', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': '第4次開會紀錄', 'text': '作業三： 根據對 Topic2 和 Topic3 的閱讀，使用 CoppeliaSim 、 Webots 、 Onshap e 提出一個機電一體化項目。 \n topic2: \n coppeliasim :40723246 \n MSModelingAndTFApproaches.pdf . 207頁:5人 40723216 40723213 40723223 40723241 40723230 \n MechatronicDesignCases.pdf . 46頁:2人 40723229 40723206 \n topic3: \n MechaFutureAndChallenges.pdf . 38頁:1人 40623246 \n MechaEducFutureNeed.pdf . 20頁:1人 40723242 \n 開會影片： \n \n', 'tags': '', 'url': '第4次開會紀錄.html'}, {'title': 'Week15~Week18', 'text': '', 'tags': '', 'url': 'Week15~Week18.html'}, {'title': '第5次開會紀錄', 'text': '成員名單： 1.40723201 (簽) 已建立完成網站 2.40723206 (簽) 已建立完成網站 小組長 3.40723213 (簽) 已建立完成網站 4.40723216 (簽) 已建立完成網站 5. 40723223(簽) 已建立完成網站 6.40723226 (簽) 已建立完成網站 7.40723229 (簽) 已建立完成網站 小組長 8.40723230 (簽) 已建立完成網站 9.40723241 (簽) 已建立完成網站 10.40723242 (簽) 已建立完成網站 小組長 11.40723246 (group leader) (簽) 已建立完成網站 12.40732319 (簽) \n 開會影片： \n \n', 'tags': '', 'url': '第5次開會紀錄.html'}, {'title': '期末影片', 'text': '', 'tags': '', 'url': '期末影片.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment 1', 'text': 'Due March 25, 2020 \xa0 for class 2a and \xa0 March 26, 2020 \xa0 for class 2b. \n 1. Describe how\xa0to\xa0do an efficient random grouping for this\xa0course or do the roll calling randomly? \n 2. Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain \xa0 CMSiMDE \xa0 website, \xa0 Pelican blog \xa0 and \xa0 Reveal.js \xa0 presentation on \xa0 Github ? \n 3. What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot? \n', 'tags': '', 'url': 'Assignment 1.html'}, {'title': 'Assignment 2', 'text': "Due April 22, 2020 \xa0 for class 2a and \xa0 April 23, 2020 \xa0 for class 2b. \n 1.\xa0According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's\xa0 four wheeled robot. \n 2. What do you need to know from\xa0 https://cyberbotics.com/doc/guide/index \xa0 \xa0to implement a four-wheeled robot? \n W9: Midterm presentation \n", 'tags': '', 'url': 'Assignment 2.html'}, {'title': 'Assignment 3', 'text': 'Due \xa0 May 27, 2020 \xa0 for class 2a and \xa0 May 28, 2020 \xa0 for class 2b. \n According to the reading of Topic 2 and Topic 3, propose a Mechatronic project by using \xa0 CoppeliaSim \xa0 or \xa0 Webots \xa0 and \xa0 Onshape . \n', 'tags': '', 'url': 'Assignment 3.html'}, {'title': 'Final project', 'text': 'Due June 24, 2020. \n Realize\xa0your Mechatronic project and conclude with a presentation video and pdf report. \n', 'tags': '', 'url': 'Final project.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'git clone後cmsimde無資料', 'text': '\n git clone (網址) ➜ git pull \n cd cmsimde ➜ git submodule init ➜\xa0 git submodule update \n 完成後再進行編輯 \n \n', 'tags': '', 'url': 'git clone後cmsimde無資料.html'}, {'title': '以ssh對Github 連線', 'text': '\n 將portablegit\\bin中的sh_for_solvespace_compile複製並更名為sh.exe \n 進入cmd輸入 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 下載putty並透過putty.chm新增兩枚鑰使 \n 修改 start.bat: \n \n \u3000\u3000\u3000\u3000set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n \u3000\u3000\u3000\u3000set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n 修改自身 倉儲 .git 中的 config 檔案中的 url 設定 \n \n \u3000\u3000\u3000\u3000url =  git@github.com:mdecourse/cad2019.git \n \n 設定putty \n 在Y:\\home_mdecourse\\.ssh中新增config並加入指令 \n \n \u3000\u3000\u3000\u3000ProxyCommand y:/putty/plink.exe github.com %h %p\n \n\u3000\u3000\u3000\u3000Host github.com\n    \u3000\u3000\u3000\u3000User git\n   \u3000\u3000\u3000\u3000 Port 22\n   \u3000\u3000\u3000\u3000 Hostname github.com\n \n   \u3000\u3000\u3000\u3000 TCPKeepAlive yes\n   \u3000\u3000\u3000\u3000 IdentitiesOnly yes \n \n 在githun ssh設定中新增鑰使 \n \n \n', 'tags': '', 'url': '以ssh對Github 連線.html'}, {'title': '同步 repository', 'text': '\n 顯示目前所有的遠端目錄 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 應該可看見 \n \n \n \n \n \n origin https://github.com/istar0me/wp106a.git (fetch) origin \n https://github.com/istar0me/wp106a.git (push) \n \n \n \n \n \n \n \n 新增遠端 Repository\xa0 \n \n \n \n \n git remote add <自行輸入名稱> https://github.com/s40723246/cd2020-bg1.git \n \n \n \n \n \n 此時確認目前追蹤的遠端清單 \n \n \n \n \n git remote -v \n \n \n \n \n \n \n 會發現多出兩組 upstream \n \n \n \n \n \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (fetch) \n <輸入名稱>   https://github.com/s40723246/cd2020-bg1.git  (push) \n \n \n \n \n \n \n \n 切換到要做更新的分支 \n \n \n \n \n git checkout\xa0m aster \n \n \n \n \n \n \n 將組別新版本的檔案拉進自己 master 分支 \n \n \n \n \n git pull <輸入名稱> master \n \n \n \n \n \n \n 完成本機端的更新，此時可選擇將新版的檔案上傳到自己的 GitHub 上 \n \n \n \n \n \n git push origin master \n \n \n \n \n', 'tags': '', 'url': '同步 repository.html'}]};