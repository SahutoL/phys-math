
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const TaylorExpansionContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">テイラー展開・マクローリン展開</h2>
        <p className="mb-4 text-lg leading-relaxed">テイラー展開は、ある関数を特定の点の周りで無限級数（べき級数）で近似する手法です。これにより、複雑な関数を単純な多項式で近似でき、物理学における近似計算で極めて重要です。特に、点の周りの局所的な振る舞いを調べる際に強力なツールとなります。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">テイラーの定理</h3>
        <p className="mb-4">関数 <MathDisplay mathString="f(x)" /> が点 <MathDisplay mathString="a" /> の周りで無限回微分可能であるとき、<MathDisplay mathString="f(x)" /> は次のように展開できます。</p>
        <MathDisplay displayMode={true} mathString={`f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots`} />
        
        <h4 className="text-xl font-bold mt-6 mb-2">剰余項と収束</h4>
        <p className="mb-4">実際には無限和を計算できないため、有限のn次までで展開を打ち切ることが多いです。その際の誤差は剰余項 <MathDisplay mathString="R_n(x)" /> で評価されます。</p>
        <MathDisplay displayMode={true} mathString={`f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)`} />
        <p className='mt-4'>剰余項の具体的な形としてラグランジュの剰余項が知られており、<MathDisplay mathString="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}" />（cはaとxの間の数）と表されます。この項が <MathDisplay mathString="n \to \infty" /> で0に収束する場合に限り、テイラー級数は元の関数に収束します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">マクローリン展開</h3>
        <p className="mb-4">テイラー展開において、特に <MathDisplay mathString="a=0" /> とした場合をマクローリン展開と呼びます。物理学で現れる多くの基本的な関数は、原点周りでのマクローリン展開が用いられます。</p>
        
        <h4 className="text-xl font-bold mt-6 mb-2">主要な関数のマクローリン展開</h4>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><MathDisplay mathString="e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots" /></li>
            <li><MathDisplay mathString="\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots" /></li>
            <li><MathDisplay mathString="\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots" /></li>
            <li><MathDisplay mathString="\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (|x|<1)" /></li>
            <li><MathDisplay mathString="(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots" />（二項級数）</li>
        </ul>
        <p className="mt-4">特に、<MathDisplay mathString="e^x, \sin x, \cos x" /> の展開式に <MathDisplay mathString="x=i\theta" /> を代入することで、オイラーの公式 <MathDisplay mathString="e^{i\theta} = \cos\theta + i\sin\theta" /> が導かれ、三角関数と指数関数の間の深い関係が示されます。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">ポテンシャルエネルギーの近似</h4>
        <p className="mb-4">物体が受ける力がポテンシャル <MathDisplay mathString="U(x)" /> で表されるとき、安定なつり合いの位置 <MathDisplay mathString="x_0" /> の周りでの微小な運動を考えることができます。<MathDisplay mathString="U(x)" /> を <MathDisplay mathString="x_0" /> の周りでテイラー展開すると、</p>
        <MathDisplay displayMode={true} mathString={`U(x) \\approx U(x_0) + U'(x_0)(x-x_0) + \\frac{1}{2}U''(x_0)(x-x_0)^2`} />
        <p className="mt-4">つり合い点では力 <MathDisplay mathString="F = -U'(x_0) = 0" /> であり、<MathDisplay mathString="U(x_0)" /> は位置エネルギーの基準なので無視できます。よって、ポテンシャルの変化分は <MathDisplay mathString="\Delta U \approx \frac{1}{2}k(x-x_0)^2" /> (<MathDisplay mathString="k=U''(x_0)>0" />) の形になります。これはフックの法則に従う復元力 <MathDisplay mathString="F \approx -k(x-x_0)" /> を生み出し、つり合い点近傍の運動が単振動で近似できることを示しています。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">電磁気学：電気双極子のポテンシャル</h4>
        <p className="mb-4">原点近くに置かれた電気双極子（距離dだけ離れた電荷+qと-qの対）が、遠方の点 <MathDisplay mathString="\mathbf{r}" /> に作る静電ポテンシャル <MathDisplay mathString="\phi(\mathbf{r})" /> を考えます。ポテンシャルは <MathDisplay mathString="\phi(\mathbf{r}) = \frac{q}{4\pi\epsilon_0}(\frac{1}{|\mathbf{r}-\mathbf{d}/2|} - \frac{1}{|\mathbf{r}+\mathbf{d}/2|})" /> となります。<MathDisplay mathString="|\mathbf{d}| \ll |\mathbf{r}|" /> という条件のもと、<MathDisplay mathString="f(\mathbf{d}) = 1/|\mathbf{r}-\mathbf{d}|" /> を <MathDisplay mathString="\mathbf{d}=\mathbf{0}" /> の周りで多変数テイラー展開（一次まで）すると、</p>
        <MathDisplay displayMode={true} mathString={`\\frac{1}{|\\mathbf{r}-\\mathbf{d}|} \\approx \\frac{1}{r} + \\mathbf{d} \\cdot \\nabla\\left(\\frac{1}{r}\\right) = \\frac{1}{r} + \\frac{\\mathbf{r} \\cdot \\mathbf{d}}{r^3}`} />
        <p className='mt-4'>これを用いてポテンシャルを計算すると、</p>
        <MathDisplay displayMode={true} mathString={`\\phi(\\mathbf{r}) \\approx \\frac{1}{4\\pi\\epsilon_0} \\frac{\\mathbf{p} \\cdot \\mathbf{r}}{r^3} \\quad (\\mathbf{p}=q\\mathbf{d})`} />
        <p className='mt-4'>となり、よく知られた電気双極子のポテンシャルの式が導かれます。このように、テイラー展開は複雑な状況を単純な極（単極子、双極子、四重極子...）の重ね合わせとして理解する多重極展開の基礎となります。</p>
    </>
);

export default TaylorExpansionContent;