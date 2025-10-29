
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const TensorAnalysisContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">テンソル解析 (Tensor Analysis)</h2>
        <p className="mb-4 text-lg leading-relaxed">テンソル解析は、スカラーやベクトルを一般化した「テンソル」という数学的対象を扱う分野です。物理学において、テンソルは物理法則を特定の座標系の選び方によらない普遍的な形で記述するために不可欠です。応力や歪み、慣性モーメントのように方向によって異なる応答を示す物理量や、一般相対性理論における曲がった時空そのものを記述するための言語となります。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">反変ベクトルと共変ベクトル</h3>
        <p className="mb-4">テンソルの概念の第一歩は、ベクトルを「反変ベクトル」と「共変ベクトル」の2種類に区別することです。座標系 <MathDisplay mathString="x^i" /> から <MathDisplay mathString="x'^{\,i}" /> へ変換するとき、</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>反変ベクトル (Contravariant Vector):</b> 微小変位 <MathDisplay mathString="dx^i" /> と同じ変換則 <MathDisplay mathString="V'^{\,i} = \frac{\partial x'^{\,i}}{\partial x^j} V^j" /> に従うベクトル。成分を上付きの添字で書くのが慣例です。（アインシュタインの縮約記法を使用）</li>
            <li><b>共変ベクトル (Covariant Vector):</b> スカラー場の勾配 <MathDisplay mathString="\partial \phi / \partial x^i" /> と同じ変換則 <MathDisplay mathString="W'_i = \frac{\partial x^j}{\partial x'^{\,i}} W_j" /> に従うベクトル。成分を下付きの添字で書くのが慣例です。</li>
        </ul>
        <p className='mt-4'>平坦な直交座標系ではこの区別は現れませんが、一般の曲線座標系や曲がった空間では本質的に重要となります。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">テンソルの定義</h3>
        <p className="mb-4">テンソルはこれらのベクトルをさらに一般化したものです。例えば、(1,1)型テンソル <MathDisplay mathString="T^i_j" /> は、座標変換に対して <MathDisplay mathString="T'^{\,i}_{\,j} = \frac{\partial x'^{\,i}}{\partial x^k} \frac{\partial x^l}{\partial x'^{\,j}} T^k_l" /> のように変換される量の集まりです。一般に、p個の上付き添字とq個の下付き添字を持つ量を(p,q)型テンソルと呼びます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li>(0,0)型テンソル: スカラー</li>
            <li>(1,0)型テンソル: 反変ベクトル</li>
            <li>(0,1)型テンソル: 共変ベクトル</li>
            <li>(0,2)型テンソル: 計量テンソル <MathDisplay mathString="g_{ij}" />, 応力テンソル <MathDisplay mathString="\sigma_{ij}" /></li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">計量テンソルと添字の上げ下げ</h3>
        <p className="mb-4">空間の幾何学的な性質（距離の測り方）を定義するのが、(0,2)型テンソルである計量テンソル <MathDisplay mathString="g_{ij}" /> です。微小な線素の2乗は <MathDisplay mathString="ds^2 = g_{ij} dx^i dx^j" /> で与えられます。計量テンソルとその逆行列 <MathDisplay mathString="g^{ij}" /> を使うことで、反変ベクトルと共変ベクトルを相互に変換できます（添字の上げ下げ）。</p>
        <MathDisplay displayMode={true} mathString={`V_i = g_{ij} V^j, \\quad V^i = g^{ij} V_j`} />

        <h3 className="text-2xl font-bold mt-8 mb-3">物理学への応用</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">電磁気学：電磁場テンソル</h4>
        <p className="mb-4">特殊相対性理論では、電場 <MathDisplay mathString="\mathbf{E}" /> と磁場 <MathDisplay mathString="\mathbf{B}" /> は観測者によって異なって見えます。これらは、4次元ミンコフスキー時空における一つの物理的実体、すなわち電磁場テンソル <MathDisplay mathString="F^{\mu\nu}" /> の異なる成分として統一的に記述されます。</p>
        <MathDisplay displayMode={true} mathString={`F^{\\mu\\nu} = \\begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\\\ E_x/c & 0 & -B_z & B_y \\\\ E_y/c & B_z & 0 & -B_x \\\\ E_z/c & -B_y & B_x & 0 \\end{pmatrix}`} />
        <p className="mt-4">このテンソルを用いると、4つの方程式からなるマクスウェル方程式は、以下の2つの非常にコンパクトなテンソル方程式にまとめられます。</p>
        <MathDisplay displayMode={true} mathString={`\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu, \\quad \\partial_\\lambda F_{\\mu\\nu} + \\partial_\\mu F_{\\nu\\lambda} + \\partial_\\nu F_{\\lambda\\mu} = 0`} />
        <p className="mt-4">この形式は明らかにローレンツ変換に対して不変（共変的）であり、電磁気学が相対性理論と整合的であることを示しています。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">一般相対性理論：アインシュタイン方程式</h4>
        <p className="mb-4">一般相対性理論の核心は、重力が時空の曲がりとして記述されるという考え方です。この理論の基本方程式であるアインシュタイン方程式は、テンソルを用いて記述されます。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`G_{\\mu\\nu} = R_{\\mu\\nu} - \\frac{1}{2} R g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}`} />
        </div>
        <ul className="list-disc list-inside mt-4 space-y-2">
            <li><MathDisplay mathString="G_{\mu\nu}" /> はアインシュタイン・テンソルで、時空の幾何学（曲率）を表します。<MathDisplay mathString="R_{\mu\nu}" /> はリッチテンソル、<MathDisplay mathString="R" /> はスカラー曲率です。これらは計量テンソル <MathDisplay mathString="g_{\mu\nu}" /> から計算されます。</li>
            <li><MathDisplay mathString="T_{\mu\nu}" /> はエネルギー・運動量テンソルで、その時空に存在する物質やエネルギーの分布を表します。</li>
        </ul>
        <p className="mt-4">この方程式は「物質の存在が時空を曲げ、曲がった時空が物質の運動を決定する」という重力のダイナミクスを、座標系によらない普遍的な形で表現しています。</p>
    </>
);

export default TensorAnalysisContent;