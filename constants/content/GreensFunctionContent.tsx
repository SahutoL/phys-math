
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const GreensFunctionContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">グリーン関数 (Green's Function)</h2>
        <p className="mb-4 text-lg leading-relaxed">グリーン関数は、線形の微分方程式を解くための強力な手法です。物理学において、多くの問題は <MathDisplay mathString="\hat{L}u(\mathbf{r}) = f(\mathbf{r})" /> という形の線形微分方程式で記述されます。ここで <MathDisplay mathString="\hat{L}" /> は線形微分作用素、<MathDisplay mathString="f(\mathbf{r})" /> は源（ソース）となる項、<MathDisplay mathString="u(\mathbf{r})" /> が求めたい解（場や応答）です。グリーン関数の考え方は、「点状の源（デルタ関数）に対する応答」をまず求め、それらを重ね合わせることで任意の源に対する解を構成するというものです。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">定義</h3>
        <p className="mb-4">微分作用素 <MathDisplay mathString="\hat{L}" /> に対するグリーン関数 <MathDisplay mathString="G(\mathbf{r}, \mathbf{r}')" /> は、以下の微分方程式の解として定義されます。</p>
        <MathDisplay displayMode={true} mathString={`\\hat{L} G(\\mathbf{r}, \\mathbf{r}') = \\delta(\\mathbf{r} - \\mathbf{r}')`} />
        <p className='mt-4'>これは、位置 <MathDisplay mathString="\mathbf{r}'" /> に置かれた単位強度の点状の源が、位置 <MathDisplay mathString="\mathbf{r}" /> に作る場や影響を表しています。このグリーン関数を見つけることができれば、任意の源 <MathDisplay mathString="f(\mathbf{r})" /> に対する解 <MathDisplay mathString="u(\mathbf{r})" /> は、以下の積分によって得られます。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`u(\\mathbf{r}) = \\int G(\\mathbf{r}, \\mathbf{r}') f(\\mathbf{r}') d^3 r'`} />
        </div>
        <p className='mt-4'>これは、源 <MathDisplay mathString="f(\mathbf{r}')" /> を点源の連続的な集まりとみなし、それぞれの点源からの応答 <MathDisplay mathString="G(\mathbf{r}, \mathbf{r}') f(\mathbf{r}')" /> を足し合わせる（積分する）という、線形重ね合わせの原理そのものです。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">静電ポテンシャル</h4>
        <p className="mb-4">静電ポテンシャル <MathDisplay mathString="\phi(\mathbf{r})" /> と電荷密度 <MathDisplay mathString="\rho(\mathbf{r})" /> の関係は、ポアソン方程式 <MathDisplay mathString="\nabla^2 \phi = -\rho / \epsilon_0" /> で与えられます。この場合、微分作用素はラプラシアン <MathDisplay mathString="\hat{L} = \nabla^2" /> です。</p>
        <p className='mb-4'>ラプラシアンに対するグリーン関数は、<MathDisplay mathString="\nabla^2 G(\mathbf{r}, \mathbf{r}') = \delta(\mathbf{r} - \mathbf{r}')" /> を満たします。自由空間（境界がない場合）におけるこの方程式の解は、</p>
        <MathDisplay displayMode={true} mathString={`G(\\mathbf{r}, \\mathbf{r}') = -\\frac{1}{4\\pi} \\frac{1}{|\\mathbf{r} - \\mathbf{r}'|}`} />
        <p className='mt-4'>となります。これは、<MathDisplay mathString="\mathbf{r}'" /> に置かれた点電荷が <MathDisplay mathString="\mathbf{r}" /> に作るポテンシャル（クーロンポテンシャル）の形と（定数倍を除いて）同じです。このグリーン関数を用いると、任意の電荷分布 <MathDisplay mathString="\rho(\mathbf{r}')" /> が作るポテンシャルは、</p>
        <MathDisplay displayMode={true} mathString={`\\phi(\\mathbf{r}) = \\int -\\frac{1}{4\\pi \\epsilon_0} \\frac{1}{|\\mathbf{r} - \\mathbf{r}'|} \\rho(\\mathbf{r}') d^3 r'`} />
        <p className='mt-4'>となり、静電気学でよく知られた積分公式が導かれます。</p>
        
        <h4 className="text-xl font-bold mt-6 mb-2">量子力学と場の量子論</h4>
        <p className="mb-4">時間を含む微分方程式、例えばシュレーディンガー方程式や波動方程式に対してもグリーン関数を定義することができます。この場合、グリーン関数 <MathDisplay mathString="G(x, t; x', t')" /> は、時刻 <MathDisplay mathString="t'" /> に位置 <MathDisplay mathString="x'" /> にいた粒子が、時刻 <MathDisplay mathString="t" /> に位置 <MathDisplay mathString="x" /> で見つかる確率振幅を与え、「プロパゲーター（伝播関数）」とも呼ばれます。</p>
        <p className='mb-4'>場の量子論では、粒子間の相互作用は、仮想粒子を交換することによって媒介されると考えます。この仮想粒子の伝播を記述するのがプロパゲーターであり、これはまさに対応する場の運動方程式のグリーン関数です。ファインマン・ダイアグラムにおける内線は、このプロパゲーターを表しており、散乱振幅などの物理量を計算するための基本的な構成要素となります。グリーン関数は、現代物理学の多くの分野で、系の応答や伝播を記述するための中心的な概念となっています。</p>
    </>
);

export default GreensFunctionContent;