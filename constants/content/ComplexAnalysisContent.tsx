import React from 'react';
import MathDisplay from '../../components/MathDisplay';

const ComplexAnalysisContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">複素解析 (Complex Analysis)</h2>
        <p className="mb-4 text-lg leading-relaxed">複素解析は、複素数を変数とする関数（複素関数）の性質を調べる数学の分野です。実数の世界では考えられなかった強力な性質や定理が数多く存在し、物理学においては、実関数の定積分を計算するための強力なツール、2次元の物理現象（流体力学、静電場）の解析、量子力学の定式化など、幅広い分野で不可欠な役割を果たします。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">正則関数とコーシー・リーマンの関係式</h3>
        <p className="mb-4">複素関数 <MathDisplay mathString="f(z) = u(x,y) + iv(x,y)" />（ここで <MathDisplay mathString="z = x+iy" />）がある領域で「正則 (holomorphic)」であるとは、その領域の全ての点で複素微分可能であることを意味します。複素微分可能性は、実関数の微分可能性よりもはるかに強い条件であり、関数が正則であるための必要十分条件は、その実部 <MathDisplay mathString="u" /> と虚部 <MathDisplay mathString="v" /> が以下のコーシー・リーマンの関係式を満たすことです。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = - \\frac{\\partial v}{\\partial x}`} />
        </div>
        <p className="mt-4">この関係式から、正則関数の実部と虚部はそれぞれラプラス方程式 <MathDisplay mathString="\nabla^2 \phi = 0" /> を満たす調和関数であることが導かれます。これは、電荷のない領域での静電ポテンシャルや、非圧縮性・非粘性流体の速度ポテンシャルが満たす方程式であり、複素解析が2次元のポテンシャル問題を解く上で強力なツールとなる理由です。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">コーシーの積分定理と積分公式</h3>
        <p className="mb-4">複素解析における最も基本的で強力な定理がコーシーの積分定理です。</p>
        <p className="mb-4"><b>コーシーの積分定理:</b> 単連結な領域 D で正則な関数 <MathDisplay mathString="f(z)" /> と、D 内にある任意の単純な閉曲線 C に対して、以下の周回積分が成り立ちます。</p>
        <MathDisplay displayMode={true} mathString={`\\oint_C f(z) dz = 0`} />
        <p className="mt-4">これは、保存力のする仕事が経路によらないことのアナロジーであり、正則関数が非常に「なめらか」で「素直」な性質を持つことを示しています。さらに、この定理から導かれる積分公式は驚くべき結果を与えます。</p>
        <p className="mb-4"><b>コーシーの積分公式:</b> 閉曲線 C の内部の任意の点 <MathDisplay mathString="a" /> における正則関数 <MathDisplay mathString="f(a)" /> の値は、C 上の積分だけで完全に決まってしまいます。</p>
        <MathDisplay displayMode={true} mathString={`f(a) = \\frac{1}{2\\pi i} \\oint_C \\frac{f(z)}{z-a} dz`} />
        <p className="mt-4">これは、局所的な情報（周上の値）が大域的な情報（内部の全ての値）を決定するという、実関数にはない著しい特徴です。この公式から、正則な関数は無限回微分可能であることも証明されます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ローラン展開と留数定理</h3>
        <p className="mb-4">正則でない点（特異点）の周りでは、テイラー展開を一般化したローラン展開が用いられます。これには負べきの項も含まれます。</p>
        <MathDisplay displayMode={true} mathString={`f(z) = \\sum_{n=-\\infty}^{\\infty} a_n (z-a)^n`} />
        <p className='mt-4'>この展開における <MathDisplay mathString="(z-a)^{-1}" /> の係数 <MathDisplay mathString="a_{-1}" /> は「留数 (Residue)」と呼ばれ、特異点の性質を特徴づける重要な量です。</p>
        <p className="mb-4"><b>留数定理:</b> 閉曲線 C の内部に有限個の特異点 <MathDisplay mathString="a_k" /> を持つ関数 <MathDisplay mathString="f(z)" /> の周回積分は、内部にある全ての特異点における留数の和で計算できます。</p>
        <MathDisplay displayMode={true} mathString={`\\oint_C f(z) dz = 2\\pi i \\sum_k \\mathrm{Res}(f, a_k)`} />
        
        <h4 className="text-xl font-bold mt-6 mb-2">応用：実関数の定積分</h4>
        <p className="mb-4">留数定理は、物理学で頻出する実関数の広範囲積分 <MathDisplay mathString="\int_{-\infty}^{\infty} f(x) dx" /> を計算する際に絶大な威力を発揮します。実軸上の積分路と、無限遠の半円を組み合わせた閉曲線（ジョルダンの補助定理を用いる）を考え、上半平面にある特異点の留数を計算するだけで、複雑な積分がしばしば簡単に求まります。</p>
        <p className='mb-4'>例えば、<MathDisplay mathString="\int_{-\infty}^{\infty} \frac{1}{x^2+1} dx" /> を計算する場合、<MathDisplay mathString="f(z)=\frac{1}{z^2+1}" /> を考え、上半平面の特異点 <MathDisplay mathString="z=i" /> での留数 <MathDisplay mathString="\mathrm{Res}(f, i) = \frac{1}{2i}" /> を用いて、積分の値は <MathDisplay mathString="2\pi i \times \frac{1}{2i} = \pi" /> となります。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">応用：量子力学におけるグリーン関数</h4>
        <p className="mb-4">量子力学の散乱理論や多体問題では、系の応答を記述するグリーン関数（プロパゲータ）の計算が中心となります。グリーン関数はしばしば、エネルギーに関する複素積分として表現されます。その積分の評価や、物理的な意味（粒子の生成・消滅）の解釈は、複素平面上の特異点の位置に深く関連しており、留数定理が解析の鍵となります。</p>
    </>
);

export default ComplexAnalysisContent;