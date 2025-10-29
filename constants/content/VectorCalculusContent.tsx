
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const VectorCalculusContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">ベクトル解析 (Vector Calculus)</h2>
        <p className="mb-4 text-lg leading-relaxed">ベクトル解析は、空間の各点にベクトルが対応付けられた「ベクトル場」と、スカラーが対応付けられた「スカラー場」を扱う数学分野です。電場、磁場、重力場、流体の速度場など、物理学における「場」の概念を記述し、分析するための必須の言語です。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">微分演算子 (grad, div, rot)</h3>
        <p className="mb-4">ベクトル微分演算子 <MathDisplay mathString="\nabla" /> (ナブラ) を用いて、場の空間的な変化を表す3つの基本的な演算が定義されます。</p>
        <MathDisplay displayMode={true} mathString={`\\nabla = \\left( \\frac{\\partial}{\\partial x}, \\frac{\\partial}{\\partial y}, \\frac{\\partial}{\\partial z} \\right)`} />

        <h4 className="text-xl font-bold mt-6 mb-2">勾配 (Gradient): grad</h4>
        <p className="mb-4">スカラー場 <MathDisplay mathString="\phi(x,y,z)" /> に作用し、ベクトル場を返します。そのベクトルは、その点においてスカラー場が最も急激に増加する方向を向き、その大きさはその増加率を表します。</p>
        <MathDisplay displayMode={true} mathString={`\\mathrm{grad}\\,\\phi = \\nabla \\phi = \\left( \\frac{\\partial \\phi}{\\partial x}, \\frac{\\partial \\phi}{\\partial y}, \\frac{\\partial \\phi}{\\partial z} \\right)`} />
        <p className="mt-4"><b>物理的応用:</b> ポテンシャルエネルギー <MathDisplay mathString="U" /> から力 <MathDisplay mathString="\mathbf{F}" /> を求める関係式 <MathDisplay mathString="\mathbf{F} = -\nabla U" /> は、物体がポテンシャルの最も低い方向へ力を受けることを意味します。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">発散 (Divergence): div</h4>
        <p className="mb-4">ベクトル場 <MathDisplay mathString="\mathbf{A}(x,y,z)" /> に作用し、スカラー場を返します。その点からのベクトル場の「湧き出し」の量を示します。正の値は湧き出し（source）、負の値は吸い込み（sink）を意味します。</p>
        <MathDisplay displayMode={true} mathString={`\\mathrm{div}\\,\\mathbf{A} = \\nabla \\cdot \\mathbf{A} = \\frac{\\partial A_x}{\\partial x} + \\frac{\\partial A_y}{\\partial y} + \\frac{\\partial A_z}{\\partial z}`} />
        <p className="mt-4"><b>物理的応用:</b> 電磁気学のガウスの法則 <MathDisplay mathString="\nabla \cdot \mathbf{E} = \rho / \epsilon_0" /> は、電荷 <MathDisplay mathString="\rho" /> が電場 <MathDisplay mathString="\mathbf{E}" /> の湧き出し源であることを示しています。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">回転 (Curl): rot</h4>
        <p className="mb-4">ベクトル場 <MathDisplay mathString="\mathbf{A}(x,y,z)" /> に作用し、ベクトル場を返します。その点におけるベクトル場の「渦」の強さと向きを表します。</p>
        <MathDisplay displayMode={true} mathString={`\\mathrm{rot}\\,\\mathbf{A} = \\nabla \\times \\mathbf{A} = 
        \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ A_x & A_y & A_z \\end{vmatrix}`} />
        <p className="mt-4"><b>物理的応用:</b> ファラデーの電磁誘導の法則 <MathDisplay mathString="\nabla \times \mathbf{E} = - \frac{\partial \mathbf{B}}{\partial t}" /> は、磁場 <MathDisplay mathString="\mathbf{B}" /> の時間変化が電場 <MathDisplay mathString="\mathbf{E}" /> の渦を生成することを示しています。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">積分定理</h3>
        <p className='mb-4'>これらの微分演算は、積分を介して大域的な性質と結びつきます。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">ガウスの発散定理</h4>
        <p className="mb-4">「ある閉じた領域 V の内部でのベクトル場の湧き出しの総和は、その領域を囲む表面 S を貫いて出ていく正味の流量（フラックス）に等しい」という定理です。</p>
        <MathDisplay displayMode={true} mathString={`\\iiint_V (\\nabla \\cdot \\mathbf{A}) dV = \\iint_S \\mathbf{A} \\cdot d\\mathbf{S}`} />
        <p className='mt-4'>これは、局所的な情報（発散）と大域的な情報（表面からの流出）を結びつけます。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">ストークスの定理</h4>
        <p className="mb-4">「ある開いた曲面 S 上でのベクトル場の渦の総和は、その曲面の縁をなす閉曲線 C に沿ったベクトルの循環に等しい」という定理です。</p>
        <MathDisplay displayMode={true} mathString={`\\iint_S (\\nabla \\times \\mathbf{A}) \\cdot d\\mathbf{S} = \\oint_C \\mathbf{A} \\cdot d\\mathbf{l}`} />
        <p className='mt-4'>これもまた、局所的な回転情報（回転）と大域的な循環情報を結びつけます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">応用：マクスウェル方程式</h3>
        <p className="mb-4">ベクトル解析の言語を用いると、電磁気学の基本法則であるマクスウェル方程式は、以下のように4つの簡潔で美しい微分方程式で表現されます。</p>
        <ul className="list-disc list-inside my-4 space-y-2 bg-gray-100 dark:bg-neutral-800 p-4 rounded-md">
            <li><MathDisplay mathString="\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}" /> (ガウスの法則)</li>
            <li><MathDisplay mathString="\nabla \cdot \mathbf{B} = 0" /> (磁場に対するガウスの法則)</li>
            <li><MathDisplay mathString="\nabla \times \mathbf{E} = - \frac{\partial \mathbf{B}}{\partial t}" /> (ファラデーの法則)</li>
            <li><MathDisplay mathString="\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}" /> (アンペール・マクスウェルの法則)</li>
        </ul>
        <p className="mt-4">これらの式は、電荷と電流がどのように電場と磁場を生成し、またそれらが互いにどのように影響し合うかを完全に記述しています。ベクトル解析は、物理法則を自然かつ普遍的な形で表現するための強力な枠組みを提供します。</p>
    </>
);

export default VectorCalculusContent;