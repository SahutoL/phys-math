import React from 'react';
import MathDisplay from '../../components/MathDisplay';

const FluidDynamicsContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">流体力学 (Fluid Dynamics)</h2>
        <p className="mb-4 text-lg leading-relaxed">流体力学は、気体や液体といった「流体」の運動を数学的に記述し、予測する物理学の一分野です。ベクトル解析の応用分野であり、天気予報、航空機の設計、血管内の血流、銀河の形成まで、非常に広範な自然現象や工学技術の基礎となっています。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">流体の記述方法</h3>
        <p className="mb-4">個々の分子の運動を追うのは現実的でないため、流体力学では流体を連続体として扱います。そして、空間の各点 <MathDisplay mathString="\mathbf{r}" /> と時刻 <MathDisplay mathString="t" /> における物理量（密度 <MathDisplay mathString="\rho(\mathbf{r}, t)" />, 圧力 <MathDisplay mathString="p(\mathbf{r}, t)" />, 速度ベクトル場 <MathDisplay mathString="\mathbf{v}(\mathbf{r}, t)" />）で流体の状態を記述します。これをオイラー記述と呼びます。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">質量保存則：連続の方程式</h3>
        <p className="mb-4">流体力学の基本方程式の一つは、質量保存則を表す連続の方程式です。ある微小な体積を考えると、その内部の質量の時間変化は、表面を通って出入りする質量の流量（フラックス）に等しくなければなりません。ガウスの発散定理を用いると、これは以下の微分形で表現されます。</p>
        <MathDisplay displayMode={true} mathString={`\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{v}) = 0`} />
        <p className='mt-4'>特に、密度が一定と見なせる非圧縮性流体（水など）の場合は、<MathDisplay mathString="\nabla \cdot \mathbf{v} = 0" /> となり、速度場の発散がゼロ、つまり湧き出しも吸い込みもないことを意味します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">運動量保存則：ナビエ-ストークス方程式</h3>
        <p className="mb-4">流体の運動方程式は、流体要素（微小な流体の塊）に対するニュートンの第2法則（<MathDisplay mathString="m\mathbf{a} = \mathbf{F}" />）です。加速度 <MathDisplay mathString="\mathbf{a}" /> は、流体要素とともに動く座標系で考えた時間微分（物質微分またはラグランジュ微分）で与えられます。</p>
        <MathDisplay displayMode={true} mathString={`\\mathbf{a} = \\frac{D\\mathbf{v}}{Dt} = \\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v}`} />
        <p className='mt-4'>右辺第2項の <MathDisplay mathString="(\mathbf{v} \cdot \nabla)\mathbf{v}" /> は移流項と呼ばれ、速度場が空間的に一様でないために生じる加速度を表します。この項は非線形であり、流体力学の多くの複雑な現象（乱流など）の根源となっています。</p>
        <p className='mb-4'>流体要素に働く力は、圧力勾配による力 <MathDisplay mathString="-\nabla p" />、粘性力、そして外力（重力など）<MathDisplay mathString="\mathbf{f}" /> の和です。これらをまとめると、粘性を持つ非圧縮性流体の運動を記述する、有名なナビエ-ストークス方程式が得られます。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`\\rho \\left( \\frac{\\partial \\mathbf{v}}{\\partial t} + (\\mathbf{v} \\cdot \\nabla)\\mathbf{v} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{v} + \\mathbf{f}`} />
        </div>
        <p className='mt-4'>ここで <MathDisplay mathString="\mu" /> は粘性率です。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">理想流体と渦なしの流れ</h3>
        <p className="mb-4">粘性を無視できる流体を理想流体と呼びます。この場合、ナビエ-ストークス方程式はオイラー方程式になります。さらに、流れに渦がない場合、すなわち回転がゼロ (<MathDisplay mathString="\nabla \times \mathbf{v} = 0" />) の場合、速度場はスカラーポテンシャル <MathDisplay mathString="\phi" /> の勾配として <MathDisplay mathString="\mathbf{v} = \nabla \phi" /> と書くことができます。このような流れをポテンシャル流と呼びます。</p>
        <p className='mb-4'>非圧縮性のポテンシャル流では、<MathDisplay mathString="\nabla \cdot \mathbf{v} = 0" /> から、速度ポテンシャルがラプラス方程式 <MathDisplay mathString="\nabla^2 \phi = 0" /> を満たすことがわかります。これにより、静電ポテンシャルの問題を解くための複素解析などの強力な数学的手法を、流体力学に応用することが可能になります。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">ベルヌーイの定理</h4>
        <p className='mb-4'>定常的な理想流体では、流線に沿って以下の量が保存されます。これがベルヌーイの定理です。</p>
        <MathDisplay displayMode={true} mathString={`\\frac{1}{2}\\rho v^2 + p + \\rho g h = \\text{const.}`} />
        <p className='mt-4'>これは流体のエネルギー保存則を表しており、流速が速い場所ほど圧力が低くなる（航空機の翼の揚力の原理）といった現象を説明します。</p>
    </>
);

export default FluidDynamicsContent;