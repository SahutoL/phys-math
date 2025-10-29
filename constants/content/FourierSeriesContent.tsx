import React from 'react';
import MathDisplay from '../../components/MathDisplay';

const FourierSeriesContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">フーリエ級数展開 (Fourier Series)</h2>
        <p className="mb-4 text-lg leading-relaxed">フーリエ級数展開は、任意の周期関数を、単純な正弦波（sin）と余弦波（cos）の無限和で表現する手法です。これにより、複雑な周期現象を、周波数の異なる基本的な波（モード）の重ね合わせとして分解して理解することができます。波動や振動、信号処理など、周期的な現象を扱う物理学の分野で広く用いられます。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">定義</h3>
        <p className="mb-4">周期 <MathDisplay mathString="2L" /> の関数 <MathDisplay mathString="f(x)" /> は、次のようにフーリエ級数に展開できます。</p>
        <MathDisplay displayMode={true} mathString={`f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left( a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right)`} />
        
        <h4 className="text-xl font-bold mt-6 mb-2">フーリエ係数</h4>
        <p className="mb-4">係数 <MathDisplay mathString="a_n, b_n" /> は、三角関数の直交性 <MathDisplay mathString="\int_{-L}^{L} \cos(\frac{n\pi x}{L})\cos(\frac{m\pi x}{L})dx = L\delta_{nm}" /> 等を利用して次の積分で計算されます。これは、関数 <MathDisplay mathString="f(x)" /> から特定の周波数成分を「取り出す」操作に対応します。</p>
        <MathDisplay displayMode={true} mathString={`a_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right) dx \\quad (n=0, 1, 2, \\dots)`} />
        <MathDisplay displayMode={true} mathString={`b_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx \\quad (n=1, 2, 3, \\dots)`} />

        <h3 className="text-2xl font-bold mt-8 mb-3">フーリエ級数の性質</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">パーセバルの等式</h4>
        <p className='mb-4'>フーリエ級数展開において、以下の関係式が成り立ちます。</p>
        <MathDisplay displayMode={true} mathString={`\\frac{1}{L}\\int_{-L}^{L} |f(x)|^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)`} />
        <p className='mt-4'>物理的には、<MathDisplay mathString="|f(x)|^2" /> が波の強度やエネルギー密度に対応する場合、この式は「ある領域の全エネルギーは、各周波数モードが持つエネルギーの総和に等しい」というエネルギー保存則を表します。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">ギブスの現象</h4>
        <p className='mb-4'>元の関数 <MathDisplay mathString="f(x)" /> が不連続点を持つ場合、フーリエ級数で近似すると、その不連続点付近でオーバーシュート（飛び出し）が生じます。級数の項数を増やしてもこのオーバーシュートの「高さ」は減らず、不連続点に近づいていくだけです。この現象をギブスの現象と呼びます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">複素フーリエ級数</h3>
        <p className="mb-4">オイラーの公式 <MathDisplay mathString="e^{i\theta} = \cos\theta + i\sin\theta" /> を用いると、フーリエ級数はよりコンパクトな複素形式で表現できます。これは物理的にも、進行波を自然に表現できるという利点があります。</p>
        <MathDisplay displayMode={true} mathString={`f(x) = \\sum_{n=-\\infty}^{\\infty} c_n e^{i\\frac{n\\pi x}{L}}`} />
        <p className="mt-4">ここで、複素フーリエ係数 <MathDisplay mathString="c_n" /> は以下で与えられます。</p>
        <MathDisplay displayMode={true} mathString={`c_n = \\frac{1}{2L} \\int_{-L}^{L} f(x) e^{-i\\frac{n\\pi x}{L}} dx`} />
        <p className="mt-4">正のnは反時計回りの、負のnは時計回りの回転成分に対応し、この形式はフーリエ変換への自然な拡張を与えます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">波動方程式：弦の振動</h4>
        <p className="mb-4">両端を固定された長さLの弦の振動 <MathDisplay mathString="u(x,t)" /> は波動方程式 <MathDisplay mathString="\frac{\partial^2 u}{\partial t^2} = v^2 \frac{\partial^2 u}{\partial x^2}" /> に従います。変数分離法 <MathDisplay mathString="u(x,t) = X(x)T(t)" /> を用いて解くと、境界条件 <MathDisplay mathString="u(0,t)=u(L,t)=0" /> を満たす解は、</p>
        <MathDisplay displayMode={true} mathString={`u_n(x,t) = \\left(A_n \\cos(\\omega_n t) + B_n \\sin(\\omega_n t)\\right) \\sin\\left(\\frac{n\\pi x}{L}\\right) \\quad (\\omega_n = \\frac{n\\pi v}{L})`} />
        <p className='mt-4'>という基本モード（基準振動）の形になります。一般解はこれらの線形結合で与えられます。初期条件 <MathDisplay mathString="u(x,0)=f(x)" /> と <MathDisplay mathString="\frac{\partial u}{\partial t}(x,0)=g(x)" /> が与えられたとき、係数 <MathDisplay mathString="A_n, B_n" /> は、まさに <MathDisplay mathString="f(x), g(x)" /> をフーリエ正弦級数に展開することで決定されます。これにより、任意の初期形状の弦のその後の運動を予測できます。</p>
        
        <h4 className="text-xl font-bold mt-6 mb-2">結晶構造の解析</h4>
        <p className="mb-4">結晶は原子が周期的に配列した構造を持っています。この周期的な電子密度分布は3次元のフーリエ級数で表現することができます。X線回折実験では、結晶にX線を照射し、その散乱パターンを観測します。この散乱パターンの輝点（ブラッグ反射）の位置と強度は、電子密度のフーリエ係数（構造因子）と直接関係しています。したがって、X線回折の結果を分析することで、結晶内部の原子配列を決定することができます。</p>
    </>
);

export default FourierSeriesContent;