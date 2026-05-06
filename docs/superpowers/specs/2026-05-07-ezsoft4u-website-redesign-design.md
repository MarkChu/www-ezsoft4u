# 琦翊設計工作室網站改版 — 設計規格

**日期**：2026-05-07
**業主**：Mark · 琦翊設計工作室（markchu@ezsoft4u.com）
**改版範圍**：`index.html` / `style.css` / `script.js` 純改寫，不引入 build tool
**部署**：GitHub Pages（不變）

> 此規格可直接貼給 Claude Design 或任何 LLM 產出 HTML mockup。建議產出單一自包含 HTML 檔，無 JS 框架。

---

## 1. 品牌定位

Mark · 琦翊設計工作室 — **全職 freelance**，**20 年企業系統整合現場經驗**。
AI 工具讓技術不再是瓶頸，真正的差異化在「**導入經驗 + 落地能力**」。
**專案接案 / 人力派遣 / 顧問諮詢 / 不定期會議**皆可談。

### 目標客群（不鎖一個，靠合作模式彈性覆蓋）

- SI / 軟體公司（找下包，過去主力）
- 中大型企業 IT 主管 / PM（直接接案，想拓展）
- 中小企業老闆（透過熟人介紹）

### Tone of Voice

- 沉穩、誠實、口語
- 不講空泛詞彙（避免：「解決方案」「賦能」「一站式」「打造」）
- 第一人稱「我」，不裝大公司
- 強調具體（年資、模式、做過什麼類型）

### 不要呈現

- ❌ 推薦語 / 客戶 logo（沒有，不假造）
- ❌ 個人照片（不露臉）
- ❌ 個人傳記、創辦故事
- ❌ AI 賣弄詞（淡化 AI 為底層差異化，不放 hero）
- ❌ Stock photo 人物照

---

## 2. 視覺系統（A · 企業藍正統）

### 色票

| 角色 | Hex | 用法 |
|---|---|---|
| 主色 深藍 | `#1e3a5f` | Hero 漸層左、大標、ghost 邊框 |
| 主色亮 | `#2c5aa0` | Hero 漸層右、連結、hover |
| 強調 金 | `#d4a017` | 主 CTA 按鈕底色、區塊裝飾線 |
| 金 hover | `#b8860b` | 金色按鈕 hover |
| 文字主 | `#1a1a1a` | 內文 |
| 文字副 | `#666666` | 副標 |
| 文字弱 | `#888888` | 標籤 |
| 線條 | `#e5e5e5` | 卡片邊框 |
| 背景灰 | `#fafafa` | section 分隔背景 |
| 背景藍灰 | `#f4f7fb` | 卡片底色、quote 區 |

整體感：企業藍正統、沉穩、像顧問公司。所有文字/背景對比 ≥ WCAG AA（4.5:1）。

### 字體

```
font-family:
  'Noto Sans TC',           /* Google Fonts，500/700 兩個 weight */
  'Microsoft JhengHei',
  '微軟正黑體',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  sans-serif;
```

字級階層（rem，1rem = 16px）：

| 用途 | desktop | mobile | weight | line-height |
|---|---|---|---|---|
| Hero h1 | 3rem (48px) | 2rem (32px) | 700 | 1.3 |
| Hero subtitle | 1.25rem (20px) | 1rem | 400 | 1.6 |
| Section h2 | 2.25rem (36px) | 1.75rem (28px) | 700 | 1.3 |
| Card h3 | 1.25rem (20px) | 1.125rem (18px) | 600 | 1.4 |
| 內文 | 1rem | 1rem | 400 | 1.7 |
| 小字 | 0.875rem (14px) | 同 | 400 | 1.6 |
| 標籤 | 0.75rem (12px) uppercase, letter-spacing 1px | 同 | 500 | 1 |

### 元件 Spec

#### Button

```css
.btn-primary {           /* 金色主按鈕 */
  background: #d4a017;
  color: #1e3a5f;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #b8860b;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(212,160,23,0.3);
}

.btn-secondary {         /* 透明邊框，深色背景上 */
  background: transparent;
  color: white;
  border: 1.5px solid rgba(255,255,255,0.6);
}

.btn-ghost {             /* 深藍邊框，淺色背景上 */
  background: transparent;
  color: #1e3a5f;
  border: 1.5px solid #1e3a5f;
}
.btn-ghost:hover {
  background: #1e3a5f;
  color: white;
}
```

#### Card

```css
.card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 24px;
  transition: all 0.2s;
  cursor: pointer;
}
.card:hover {
  border-color: #d4a017;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(30,58,95,0.1);
}
```

#### Chip / Tag

```css
.chip {
  display: inline-flex;
  background: #f4f7fb;
  color: #1e3a5f;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 4px;
}
```

#### Section header（每個 section 上方共用）

- 小標籤（`.section-label`）：`#888`、uppercase、letter-spacing 1px、font-size 0.75rem
- 大標 h2
- 副標（`.section-subtitle`）：`#666`、1.125rem
- 大標下方 48×3px 金色裝飾線（margin: 12px auto）

### 佈局與響應式

| 螢幕寬 | 行為 |
|---|---|
| ≥1200px | container max-width 1200px、左右 padding 24px |
| 768~1199 | container 100%、左右 padding 32px |
| <768 (mobile) | container 100%、左右 padding 16px、4 卡 → 2x2、Header 漢堡選單 |
| <480 (small) | 4 卡 → 1 欄、Hero 字級縮小 |

Section vertical padding：desktop 80px / mobile 48px。

### 動畫（克制使用）

- 滾動進入觸發 fade-up（0.6s ease-out，每塊延遲 0.1s 階梯）
- 按鈕 hover 上移 1px
- 卡片 hover 上移 4px + 邊框變金 + 加陰影
- ❌ 不做 parallax、不做 hero 動態背景、不做華麗轉場

---

## 3. 頁面結構與文案

### Header（sticky 固定頂部）

```
[Logo] 琦翊設計工作室              服務 ‧ 關於 ‧ 聯絡 ‧ [加 LINE 聊聊（金色 primary）]
```

- 左：`logo.svg` + 「琦翊設計工作室」（連結回 `index.html`）
- 右：3 個錨點連結（捲到對應區塊）+ 1 個 LINE 主 CTA
- 滾動時加 box-shadow 0 2px 10px rgba(0,0,0,0.1)
- mobile：右側折成漢堡選單

---

### Hero（深藍漸層背景）

背景：`linear-gradient(135deg, #1e3a5f 0%, #2c5aa0 100%)`

```
（標籤）琦翊設計工作室

（H1）系統整合，找做過很多遍的人。

（副標）20 年現場經驗 ‧ 全職 freelance ‧ 4 種合作模式自由選

[加 LINE 聊聊（金 primary）]    [寄 email（透明邊框 secondary）]
```

副 CTA mailto:markchu@ezsoft4u.com、主 CTA 連到 `https://line.me/ti/p/~markchu0929`

---

### Section 1：合作模式 4 卡（白底）

主標：「**可以怎麼合作？四種模式自由選**」
副標：先告訴你能怎麼合作，方向對了再談細節

| 卡片 | 副標 | 說明 |
|---|---|---|
| **專案接案** | 完整負責一個案子 | 從需求釐清、開發、測試到上線。報價以專案為單位，包工包料。 |
| **人力派遣** | 月計費長期支援 | 加入你的團隊像一個遠端工程師，每月固定產出。適合你已有 PM、需要 hands-on 開發者。 |
| **顧問諮詢** | 分時計費 | 不寫程式，只給意見：架構評估、選型建議、踩雷檢查。適合內部團隊有人但卡住的時候。 |
| **不定期會議** | 純對談、彈性 | 還沒確定要不要做、不知道從哪裡開始？先聊一次，方向對了再談合作。 |

每張卡 hover 顯示：「**有興趣 → 加 LINE 聊聊**」（小字 + 金色）。整張卡可點，連結到 LINE。

---

### Section 2：能幫你解決什麼（背景藍灰 #f4f7fb）

主標：「**你正卡在這些事嗎？**」
副標：列幾個過去做過的典型情境

| Use case | 痛點描述 | 我做過什麼 |
|---|---|---|
| **兩套 ERP 對不起來** | 公司併購、換系統，新舊 ERP 資料各自為政，業務 / 會計每天人工 key 兩次 | 整合過 SAP / Oracle / Workday / 自家系統間的雙向同步，從 ETL 到 API 中介層都做過 |
| **跨系統流程要自動化** | 訂單從電商進來要進倉管、會計、CRM，現在靠人工貼 Excel | 設計過跨 5 個系統的訂單流，含 retry、補償、人工介入界面 |
| **行動端要長出來** | 業務 / 倉管 / 老闆要在手機上看到 ERP 資料，但廠商只有桌機版 | 接過原廠 API 自己刻 Android/iOS，從報表查詢到掃條碼出貨都做過 |

每張卡底下：「**有類似情境 → 加 LINE 聊聊**」（連結到 LINE）

---

### Section 3：為什麼選我（白底）

主標：「**為什麼找我而不是大公司？**」

- **20 年現場經驗** — 從製造業到金融業，看過夠多失敗案，知道哪些要堅持、哪些可以妥協
- **全職 freelance** — 不是上班族下班接案，沒有公司日常會議耗掉時間，你的案子就是我的全職工作
- **AI 工具加持** — 跨技術棧不再是限制，原本要兩個人三週的事，現在我一個人一週就能交出第一版

3 個 bullet 用 grid 3 欄呈現，每欄上方加個簡單 SVG icon（線條風、深藍）。

---

### Section 4：擅長領域（背景灰 #fafafa）

主標：「**擅長處理這些技術情境**」

chip 列（不寫詳細說明）：

- ERP / 進銷存 / MES 系統整合
- REST / SOAP / GraphQL API 開發與串接
- Android / iOS 行動 App（原生 + 跨平台）
- 多資料庫整合與資料遷移（MSSQL / MySQL / Oracle / PostgreSQL）
- 流程自動化 / Webhook / 訊息佇列
- 雲端部署（GCP / AWS / Azure）與 CI/CD 設定

---

### Section 5：曾參與的專案類型（白底）

主標：「**曾參與的專案類型**」
副標：因應下包合作關係，僅描述產業與專案類型，不揭露客戶名

| 產業 | 專案類型 | 規模 / 量化貢獻 |
|---|---|---|
| 製造業 | ERP + MES + 倉管系統整合 | 跨 4 系統、月處理 N 萬筆訂單 |
| 金融業 | 客戶資料治理 + API 中介層 | 整合 3 個帳務系統、日對帳 N 萬筆 |
| 零售業 | 電商 / POS / 庫存即時同步 | 跨 5 通路、秒級庫存更新 |
| 物流業 | 行動掃描 + 即時派車 App | 安卓 / iOS 雙平台、N 名駕駛日活 |

> ⚠️ **整張表的內容皆為示意 placeholder**（產業類別、專案類型、所有數字都是我擬的）。Mark 在 implementation 前需逐列確認 / 改寫 / 刪除，避免揭露錯誤資訊。

表格樣式：表頭深藍底白字、奇數列白底、偶數列 `#fafafa`。

---

### Section 6：聯絡（深藍漸層背景，呼應 hero）

主標：「**談談你的案子？**」（white）
副標：歡迎加 LINE 直接聊，或寄 email 正式詢問

```
（左欄）                                    （右欄）
加 LINE 聊聊（最快）                         無論你是想問報價、討論可行性、
[QR Code 圖]                                還是純粹想聊聊系統整合的方向，
LINE ID: markchu0929                        都歡迎加我 LINE 直接聊，
[加 LINE 大按鈕（金色 primary）]              通常 24 小時內會回。

寄 email（正式詢問）
markchu@ezsoft4u.com
[寄 email 按鈕（透明邊框 secondary）]
```

QR code 圖檔：`images/line-qr.png`（Mark 提供，180×180px 黑白 LINE QR）

---

### Footer（深色 #1e3a5f）

```
琦翊設計工作室 · Mark · markchu@ezsoft4u.com · LINE: markchu0929
[Facebook 圖示連結 → https://www.facebook.com/ezsoft4u]
首頁 · 隱私權政策

© 2026 琦翊設計工作室 — 著作權所有 保留一切權利
```

文字：white 70% opacity；連結 hover white 100%。

---

## 4. 實作範圍

### 修改檔案

- **`index.html`** — 結構大改（新 7 個 section）
- **`style.css`** — 全部重寫（保留 reset 和響應式架構，重新設計色票、元件、佈局）
- **`script.js`** — 微調（保留滾動偵測、無障礙；移除 Facebook embed plugin 相關）
- **`images/`** — 移除 `person-801829_1920.jpg`、`people-2588594_1920.jpg`、`adult-asking-blur-630839.jpg`、`desk-3139127_1920.jpg`、`present.jpg`；保留 `logo.svg`
- **新增** `images/line-qr.png`（Mark 提供）

### 不修改

- `privacy.html`（隱私政策不動，僅檢查 footer 連結正確）
- `CNAME`、`robots.txt`、`sitemap.xml`、`favicon.svg`
- 部署流程（GitHub Pages、git push 上線）
- SEO Schema.org 結構（保留 Organization、OG、Twitter Card；只更新 description / title 文字）

### Meta / SEO 微調

- `<title>`：「琦翊設計工作室 ｜ 系統整合 ‧ ERP 串接 ‧ API 開發 — 全職接案 20 年經驗」
- `<meta description>`：「20 年企業系統整合現場經驗。ERP 串接、API 開發、行動 App 整合，提供專案接案、人力派遣、顧問諮詢與不定期會議四種合作模式。」
- 同步更新 Schema.org Organization 的 description
- 加 `<link rel="preconnect" href="https://fonts.googleapis.com">` + `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

### 不做（YAGNI）

- ❌ 不引入 Tailwind / Astro / 任何 build tool
- ❌ 不做 blog / CMS
- ❌ 不做表單後端（主 CTA 走 LINE 不需要表單）
- ❌ 不做多語系
- ❌ 不做暗色模式
- ❌ 不嵌 Facebook plugin（換 footer 圖示連結）
- ❌ 不加 Google Analytics（除非未來明確需要）

### 無障礙與相容

- 所有顏色對比 ≥ WCAG AA
- `lang="zh-TW"` 維持
- skip-to-content 連結維持
- 鍵盤可操作（所有按鈕 / 卡片 tab focus 有 visible outline）
- 支援 Chrome 60+ / Firefox 60+ / Safari 12+ / Edge 79+
- 響應式 320px ~ 1920px 都正常

---

## 5. 跑 Claude Design / LLM 產 mockup 的提示

把這份 spec 貼給工具時，建議補上：

> 請依此 spec 產出**單一自包含 HTML 檔案**（內嵌 CSS、無 JS 框架、無外部相依除了 Google Fonts），可直接開瀏覽器看。
>
> 注意事項：
> - 字型先 fallback 系統字（Microsoft JhengHei / -apple-system），避免 Google Fonts 載入失敗時樣式崩
> - LINE QR code 用 180×180px 灰底圖加文字 "QR" 當佔位
> - 不放任何 stock photo、不放人物照
> - 「N」placeholder 保留為「N 萬筆」字樣，不要自行填數字
> - Mobile-first 響應式，breakpoint 用上面的 768 / 1200
> - SVG icon 自己畫線條風（thin stroke 1.5px、深藍 #1e3a5f）

---

## 6. Open Items（待 Mark 確認）

| 項目 | 預設值 | 需 Mark 確認 |
|---|---|---|
| 「20 年」年數 | 20 | 確認真實年數 |
| Section 5 量化數字 | 「N」placeholder | 填入真實數字或刪除整行 |
| 金色強調 | `#d4a017` | 看 mockup 後確認；可換深銅 `#a0671c` 或拿掉純藍系 |
| 字體載入 | Noto Sans TC（Google Fonts） | 確認；可改純系統字節省一個外部 request |
| FB Messenger | footer 圖示連結（不爭主 CTA） | 確認 |
| LINE QR code 圖檔 | 待提供 | 上傳 `images/line-qr.png` |
| 三個 Use case 內容 | 我擬的版本（兩套 ERP / 跨系統流程 / 行動端） | 確認是否符合實際做過的案子 |
| Section 3 三個差異化 bullet | 20 年 / 全職 / AI | 確認字眼可不可（特別是「全職 freelance」要不要中文化） |

---

## 7. 驗收 / 測試項目

實作完成後檢查：

1. ✅ 桌機（1440px）視覺合 mockup
2. ✅ iPad（768px）4 卡變 2x2、Header 變漢堡
3. ✅ iPhone（375px）所有 section 單欄、字級不會炸
4. ✅ 主 CTA 「加 LINE 聊聊」按鈕點下去開 LINE
5. ✅ 副 CTA 「寄 email」點下去開 mailto
6. ✅ 鍵盤 Tab 走整頁不會卡、focus outline 可見
7. ✅ Lighthouse Performance ≥ 90、Accessibility ≥ 95、SEO 100
8. ✅ Schema.org 結構化資料 Rich Results Test 通過
9. ✅ 隱私權頁連結正確
10. ✅ 本地開啟（不裝伺服器）也能看（純靜態）
