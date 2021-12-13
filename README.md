# GIT DEMO
擺放學習GIT用得各項資源檔案，熟係使用指令。

![GIT圖片](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRPMBBBa3Z3VH00Bx6aCk8aOKzpOTmfjOmBG2jf1mOW5mG4Ri_AVZA1JybkrjXyE1HBc&usqp=CAU )


### 創建日期
- 2021/12/8


### 使用工具
- [visual code](https://code.visualstudio.com/)
- [GIT](https://git-scm.com/)


### Markdown
- 參考資料
	- [語法說明](https://markdown.tw/#precode)
	- [線上編輯器](https://www.mdeditor.tw/)
	
---
# 程式碼


```python
import pandas as pd
df=pd.read_clipboard()
df.to_csv('cathaybk.csv')
```

![img](https://upload.cc/i1/2021/12/08/8ltaNu.png)

# GIT指令

```
1.版本號
git version


2.建立全域基本資訊
git config --global user.name jerry
git config --global user.email jerry@gmail.com

3.查詢資訊
git config --list

4.產生程式碼倉庫
git init

5.本地專案設定
git config user.name jerrychen
git config user.email jerrychen@gmail.com
git config --list
.git/config


6.工作區==>暫存區   
git add filename  # Untrack==>new file(U==>A)
git add .         # 一次全部加入

ps.產生對應的object(sha1編碼)


7.檢視(工作區/暫存區)狀態
git status	  # U/A/D/M



8.檢查sha-1格式的object
git cat-file -p sha-1 object

-t #型態
-p #內容
-s #大小


9.檢視在暫存區所有檔案
- git ls-file 
- git ls-file -s

10.進入暫存區後的修改
- git add ==>修改(modified)==>git add(確定修改) 
- git restore/checkout ==>恢復修改


11.準備commit(暫存區==>倉庫區)
- git commit -m "紀錄修改文案"


12.已經有進入倉庫區後的修改可以使用
- git commit -am "add 跟 commit一起
```

# 完成度
- [x] GIT基本指令
- [ ] GIT進階指令

# 繪製表格
### 繪製表格 Tables

| 專案        | 價格   |  數量  |
| --------   | -----:  | :----:  |
| 計算機      | $1600   |   5     |
| 手機        |   $12   |   12   |
| 管線        |    $1    |  234  |




