# 物理数学の世界 (Physics & Mathematics World)

行列、テイラー展開、フーリエ解析など、物理学で用いられる重要な数学の概念を分かりやすく解説するインタラクティブな学習サイトです。

[デプロイ先: phys-math.onrender.com](https://phys-math.onrender.com)

## ✨ 特徴 (Features)

- **豊富なトピック:** 物理数学の主要な分野を網羅的にカバー。
- **美しい数式表示:** KaTeX を利用した高品質な数式レンダリング。
- **SPA (Single Page Application):** React を利用した高速でスムーズなページ遷移。
- **レスポンシブデザイン:** デスクトップからスマートフォンまで、あらゆるデバイスに対応。
- **ダークモード:** 目に優しいダークテーマへの切り替え機能。
- **全文検索:** サイドバーから目的の記事を素早く検索。
- **動的目次:** スクロールに追従する目次で、記事内のナビゲーションが容易。
- **SEO対応:** 各ページに適切なメタタグを動的に設定。

## 📚 取り扱うトピック (Topics Covered)

本サイトでは、以下の物理数学に関連するトピックを解説しています。

- 行列
- テイラー展開・マクローリン展開
- フーリエ級数展開
- フーリエ変換
- ラプラス変換
- ベクトル解析
- 変分法
- 解析力学（ラグランジュ形式）
- 解析力学（ハミルトン形式）
- 複素解析
- グリーン関数
- 特殊関数
- 群論
- テンソル解析
- 微分幾何学
- 流体力学
- 確率論・統計力学
- ヒルベルト空間と線形作用素

## 🛠️ 技術スタック (Tech Stack)

- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **Math Rendering:** KaTeX
- **Hosting:** Render

## 🚀 実行とデプロイ (Getting Started & Deployment)

### ローカル環境での実行

このプロジェクトは、特別なビルドプロセスを必要としないシンプルな静的サイトとして構成されています。

ローカル環境で実行するには、プロジェクトのルートディレクトリで任意の静的ファイルサーバーを起動してください。ただし、多くのシンプルなサーバーはTypeScriptファイル (`.ts`, `.tsx`) に正しいMIMEタイプを設定しないため、ブラウザでエラーが発生する可能性があります。

**例 (Pythonを使用):**
```bash
# Python 3.x
python -m http.server
```

**例 (Node.jsの`serve`パッケージを使用):**
```bash
# serveがインストールされていない場合はまずインストール
npm install -g serve

# サーバーを起動
serve .
```

### Renderへのデプロイ

このアプリケーションはRenderの静的サイトホスティングサービスにデプロイできます。

1. Renderで新しい **Static Site** を作成します。
2. リポジトリを接続します。
3. 以下のビルド設定を行います。
    - **Build Command:** `echo "No build step required"`
    - **Publish Directory:** `.`

#### ⚠️ 重要: MIMEタイプの設定

このプロジェクトはビルドステップなしでTypeScriptファイル (`.ts`, `.tsx`) を直接ブラウザで読み込みます。正しく動作させるためには、RenderのサーバーがこれらのファイルをJavaScriptとして配信するよう設定する必要があります。

- Renderダッシュボードの **Redirects/Rewrites** タブに移動します。
- **Headers** セクションで、以下の2つのルールを追加します。

1.  **ルール1 (TSXファイル用)**
    -   **Path:** `/*.tsx`
    -   **Name:** `Content-Type`
    -   **Value:** `text/javascript`

2.  **ルール2 (TSファイル用)**
    -   **Path:** `/*.ts`
    -   **Name:** `Content-Type`
    -   **Value:** `text/javascript`

この設定がないと、MIMEタイプのエラーによりアプリケーションが正しく読み込まれません。
