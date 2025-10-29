
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const GroupTheoryContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">群論 (Group Theory)</h2>
        <p className="mb-4 text-lg leading-relaxed">群論は「対称性」を記述するための数学の言語です。物理学において、対称性は単なる美しさの問題ではなく、物理法則そのものを根底から規定する指導原理です。ネーターの定理によれば、系の持つ連続的な対称性には、それに対応する保存則（エネルギー保存、運動量保存、角運動量保存など）が必ず存在します。群論は、この対称性の構造を厳密に分析し、系の振る舞いを予測するための強力な枠組みを提供します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">群の数学的定義</h3>
        <p className="mb-4">集合 G とその上の二項演算 <MathDisplay mathString="\cdot" /> の組 <MathDisplay mathString="(G, \cdot)" /> が以下の4つの公理を満たすとき、これを群と呼びます。</p>
        <ol className="list-decimal list-inside my-4 space-y-2">
            <li><b>閉性:</b> G の任意の元 a, b について、<MathDisplay mathString="a \cdot b" /> もまた G の元である。</li>
            <li><b>結合法則:</b> G の任意の元 a, b, c について、<MathDisplay mathString="(a \cdot b) \cdot c = a \cdot (b \cdot c)" /> が成り立つ。</li>
            <li><b>単位元の存在:</b> G の全ての元 a に対して <MathDisplay mathString="a \cdot e = e \cdot a = a" /> となる元 <MathDisplay mathString="e" /> が G 内に存在する。</li>
            <li><b>逆元の存在:</b> G の各元 a に対して、<MathDisplay mathString="a \cdot a^{-1} = a^{-1} \cdot a = e" /> となる元 <MathDisplay mathString="a^{-1}" /> が G 内に存在する。</li>
        </ol>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理学における重要な群</h3>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>回転群 SO(3):</b> 3次元空間における回転操作の集まり。行列式が1の3x3直交行列で表現されます。</li>
            <li><b>特殊ユニタリ群 SU(2):</b> 電子のスピンなど、2準位量子系を記述します。SO(3)と深い関係（二重被覆）にあり、量子力学の角運動量の理論で中心的です。</li>
            <li><b>特殊ユニタリ群 SU(3):</b> 素粒子物理学において、クォークの「カラー」チャージが従う対称性（量子色力学）や、クォークを世代（フレーバー）で分類する際の近似的な対称性を記述します。</li>
            <li><b>ローレンツ群:</b> 特殊相対性理論における、慣性系間の変換（ローレンツ変換）がなす群です。</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-3">表現論</h3>
        <p className="mb-4">抽象的な群の元を、具体的なベクトル空間に作用する線形変換（行列）に対応付けることを群の「表現」と呼びます。物理的な状態はベクトルで表されるため、系の対称性操作が状態ベクトルにどのように作用するかを記述するのが表現論の役割です。</p>
        <p className='mb-4'>特に重要なのが「既約表現」で、これはそれ以上分解できない基本的な表現のブロックです。ハミルトニアン（エネルギー演算子）が持つ対称性は、そのエネルギー固有状態が群の既約表現に従って分類されることを意味します。同じ既約表現に属する状態は同じエネルギーを持つ（縮退する）ため、エネルギー準位の縮退度は、系の対称性から群論を用いて予言できます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理学への応用</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">量子力学：角運動量とスピン</h4>
        <p className="mb-4">水素原子のハミルトニアンは球対称、すなわち回転群 SO(3) の対称性を持ちます。このため、エネルギー準位は角運動量量子数 <MathDisplay mathString="l" /> によって指定され、磁気量子数 <MathDisplay mathString="m = -l, \dots, l" /> の <MathDisplay mathString="2l+1" /> 個の状態が縮退します。この <MathDisplay mathString="2l+1" /> という数は、SO(3) の既約表現の次元に対応しています。また、電子のスピンは、SO(3) よりも基本的な SU(2) 群の既約表現（スピノル表現）によって記述されます。</p>
        
        <h4 className="text-xl font-bold mt-6 mb-2">素粒子物理学：標準模型</h4>
        <p className="mb-4">素粒子の標準模型は、ゲージ理論と呼ばれる枠組みに基づいています。これは、系のラグランジアンが特定の連続的な局所変換（ゲージ変換）に対して不変である、という対称性を要請するものです。このゲージ変換のなす群（ゲージ群）が、素粒子間に働く基本的な相互作用の種類を決定します。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <p className='text-center text-lg font-semibold'>標準模型のゲージ群: <MathDisplay mathString="SU(3)_C \times SU(2)_L \times U(1)_Y" /></p>
        </div>
        <ul className="list-disc list-inside mt-4 space-y-2">
            <li><MathDisplay mathString="SU(3)_C" /> はクォーク間の「強い相互作用」（量子色力学）を記述します。</li>
            <li><MathDisplay mathString="SU(2)_L \times U(1)_Y" /> は「電弱相互作用」を記述し、ヒッグス機構による対称性の自発的破れを経て、電磁気力と弱い相互作用に分かれます。</li>
        </ul>
        <p className="mt-4">このように、現代物理学の最前線では、自然界の法則そのものが、特定の群の対称性によって支配されていると考えられています。</p>
    </>
);

export default GroupTheoryContent;