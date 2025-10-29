
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const FourierTransformContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">フーリエ変換 (Fourier Transform)</h2>
        <p className="mb-4 text-lg leading-relaxed">フーリエ変換は、フーリエ級数展開を非周期関数に拡張したものです。時間や空間の関数（信号）を、それを構成する周波数成分の連続的なスペクトルに分解します。これにより、「いつ・どこで」という情報から、「どの周波数がどれだけ含まれているか」という情報への変換が可能になります。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">定義</h3>
        <p className="mb-4">フーリエ変換は、フーリエ級数の周期 <MathDisplay mathString="L \to \infty" /> の極限として導出されます。時間 <MathDisplay mathString="t" /> の関数 <MathDisplay mathString="f(t)" /> のフーリエ変換 <MathDisplay mathString="F(\omega)" /> は、角周波数 <MathDisplay mathString="\omega" /> の関数として以下で定義されます。（係数の付け方には複数の流儀があります）</p>
        <MathDisplay displayMode={true} mathString={`F(\\omega) = \\mathcal{F}\\{f(t)\\} = \\int_{-\\infty}^{\\infty} f(t) e^{-i\\omega t} dt`} />
        
        <h4 className="text-xl font-bold mt-6 mb-2">フーリエ逆変換</h4>
        <p className="mb-4">周波数スペクトル <MathDisplay mathString="F(\omega)" /> から、元の関数 <MathDisplay mathString="f(t)" /> を復元するにはフーリエ逆変換を用います。</p>
        <MathDisplay displayMode={true} mathString={`f(t) = \\mathcal{F}^{-1}\\{F(\\omega)\\} = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} F(\\omega) e^{i\\omega t} d\\omega`} />
        <p className="mt-4"><MathDisplay mathString="f(t)" /> と <MathDisplay mathString="F(\omega)" /> のペアは、同じ情報を異なる視点（時間領域と周波数領域）から表現したものと言えます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">重要な性質</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">畳み込み定理</h4>
        <p className="mb-4">二つの関数の畳み込み（convolution） <MathDisplay mathString="(f*g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)d\tau" /> のフーリエ変換は、それぞれのフーリエ変換の積になります。</p>
        <MathDisplay displayMode={true} mathString={`\\mathcal{F}\\{(f*g)(t)\\} = F(\\omega)G(\\omega)`} />
        <p className="mt-4">この定理により、時間領域での複雑な畳み込み積分が、周波数領域での単純な掛け算に変換されます。これは線形応答理論や信号フィルタリングの解析において極めて重要です。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">パーセバルの定理</h4>
        <p className="mb-4">信号の総エネルギーに関する定理で、フーリエ級数の場合と同様の関係が成り立ちます。</p>
        <MathDisplay displayMode={true} mathString={`\\int_{-\\infty}^{\\infty} |f(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |F(\\omega)|^2 d\\omega`} />
        <p className="mt-4">これは、時間領域で計算した信号の全エネルギーが、周波数領域におけるエネルギースペクトル密度 <MathDisplay mathString="|F(\omega)|^2" /> を全周波数にわたって積分したものに等しいことを示しています。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">ディラックのデルタ関数</h4>
        <p className='mb-4'>物理学で非常に重要な役割を果たすデルタ関数 <MathDisplay mathString="\delta(t)" /> は、<MathDisplay mathString="t=0" /> で無限大の値を持ち、全区間で積分すると1になる超関数です。そのフーリエ変換は、</p>
        <MathDisplay displayMode={true} mathString={`\\mathcal{F}\\{\\delta(t)\\} = \\int_{-\\infty}^{\\infty} \\delta(t) e^{-i\\omega t} dt = 1`} />
        <p className='mt-4'>となり、すべての周波数成分を均等に含んでいることを示します。逆に、定数1を逆フーリエ変換すると <MathDisplay mathString="2\pi\delta(\omega)" /> となります。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">量子力学と不確定性原理</h4>
        <p className="mb-4">量子力学では、粒子の状態は波動関数 <MathDisplay mathString="\Psi(x, t)" /> で記述されます。ある時刻における位置表示の波動関数 <MathDisplay mathString="\psi(x)" /> と運動量表示の波動関数 <MathDisplay mathString="\phi(p)" /> は、互いにフーリエ変換の関係にあります (波数 <MathDisplay mathString="k=p/\hbar" />)。</p>
        <MathDisplay displayMode={true} mathString={`\\phi(p) = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^{\\infty} \\psi(x) e^{-ipx/\\hbar} dx`} />
        <p className="mt-4">一般に、関数の幅が狭い（局在している）とそのフーリエ変換の幅は広がるという性質があります。例えば、位置の不確かさ <MathDisplay mathString="\Delta x" /> が小さいガウス波束 <MathDisplay mathString="\psi(x) \propto e^{-x^2/(2(\Delta x)^2)}" /> を考えると、そのフーリエ変換（運動量表示の波動関数）もまたガウス関数となり、その運動量の不確かさ <MathDisplay mathString="\Delta p" /> は <MathDisplay mathString="\Delta p = \hbar/(2\Delta x)" /> となります。この積 <MathDisplay mathString="\Delta x \Delta p = \hbar/2" /> は、ハイゼンベルクの不確定性原理 <MathDisplay mathString="\Delta x \Delta p \ge \hbar/2" /> が許す最小値を与えます。これはフーリエ変換の一般的な性質から導かれる、物理学の根幹をなす原理です。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">光学における回折</h4>
        <p className="mb-4">スリットや開口部を通過した光が遠方で示す回折パターン（フラウンホーファー回折）の強度分布は、開口部の形状（開口関数）のフーリエ変換の絶対値の2乗によって与えられます。例えば、単スリットによる回折パターンはsinc関数（<MathDisplay mathString="\sin(x)/x" />）の2乗となり、これはスリットの形状である矩形関数のフーリエ変換から導かれます。回折格子からの回折パターンは、格子構造のフーリエ変換に対応し、結晶構造解析にも応用されます。</p>
    </>
);

export default FourierTransformContent;