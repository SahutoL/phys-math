
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const CalculusOfVariationsContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">変分法 (Calculus of Variations)</h2>
        <p className="mb-4 text-lg leading-relaxed">変分法は、関数の値そのものではなく、関数の形全体を引数とするような関数、すなわち「汎関数（はんかんすう）」の極値を求める数学分野です。物理学において、「自然は無駄を嫌う」という思想を体現する「最小作用の原理」などの変分原理を定式化する上で中心的な役割を果たします。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">汎関数と変分</h3>
        <p className="mb-4">通常の関数 <MathDisplay mathString="f(x)" /> が数 <MathDisplay mathString="x" /> を数 <MathDisplay mathString="f(x)" /> に対応させるのに対し、汎関数 <MathDisplay mathString="J[y]" /> は、ある関数 <MathDisplay mathString="y(x)" /> を一つの数 <MathDisplay mathString="J" /> に対応させます。物理学でよく現れるのは、以下の積分形式の汎関数です。</p>
        <MathDisplay displayMode={true} mathString={`J[y] = \\int_{x_1}^{x_2} L(x, y(x), y'(x)) dx`} />
        <p className='mt-4'>ここで <MathDisplay mathString="L" /> は与えられた関数です。変分法は、この <MathDisplay mathString="J" /> の値を最小（または最大、あるいは停留）にするような関数 <MathDisplay mathString="y(x)" /> の形を求めることを目的とします。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">オイラー・ラグランジュ方程式</h3>
        <p className="mb-4">汎関数 <MathDisplay mathString="J[y]" /> を停留させる関数 <MathDisplay mathString="y(x)" /> が満たすべき条件は、微分方程式として与えられます。これをオイラー・ラグランジュ方程式と呼びます。</p>
        <p className='mb-4'>正しい経路 <MathDisplay mathString="y(x)" /> から微小にずれた経路 <MathDisplay mathString="y(x)+\epsilon\eta(x)" /> を考え、<MathDisplay mathString="\epsilon=0" /> で <MathDisplay mathString="J" /> の <MathDisplay mathString="\epsilon" /> に関する微分が0になる条件（<MathDisplay mathString="\delta J = 0" />）を課すことで、以下の式が導出されます。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`\\frac{\\partial L}{\\partial y} - \\frac{d}{dx} \\left( \\frac{\\partial L}{\\partial y'} \\right) = 0`} />
        </div>
        <p className='mt-4'>この方程式を解くことで、汎関数を停留させる関数 <MathDisplay mathString="y(x)" /> を見つけることができます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">解析力学と最小作用の原理</h4>
        <p className="mb-4">解析力学では、系の運動状態はラグランジアン <MathDisplay mathString="L = T - U" /> （<MathDisplay mathString="T" />: 運動エネルギー, <MathDisplay mathString="U" />: ポテンシャルエネルギー）によって特徴づけられます。そして、物理的な運動は、作用汎関数 <MathDisplay mathString="S" /> を停留させる経路に沿って実現される、と主張します。これが最小作用の原理です。</p>
        <MathDisplay displayMode={true} mathString={`S[q] = \\int_{t_1}^{t_2} L(q, \\dot{q}, t) dt`} />
        <p className='mt-4'>ここで <MathDisplay mathString="q" /> は一般化座標、<MathDisplay mathString="\dot{q}" /> は一般化速度です。この作用 <MathDisplay mathString="S" /> に対するオイラー・ラグランジュ方程式は、</p>
        <MathDisplay displayMode={true} mathString={`\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}} \\right) = 0`} />
        <p className='mt-4'>となります。例えば、1次元の質点のラグランジアン <MathDisplay mathString="L = \frac{1}{2}m\dot{x}^2 - U(x)" /> を代入すると、</p>
        <MathDisplay displayMode={true} mathString={`\\frac{\\partial L}{\\partial x} = -\\frac{\\partial U}{\\partial x} = F, \\quad \\frac{\\partial L}{\\partial \\dot{x}} = m\\dot{x}`} />
        <p className='mt-4'>となり、オイラー・ラグランジュ方程式は <MathDisplay mathString="F - \frac{d}{dt}(m\dot{x}) = 0" />、すなわちニュートンの運動方程式 <MathDisplay mathString="m\ddot{x} = F" /> を与えます。このように、変分原理はニュートン力学を含む、より根源的な物理法則の記述方法を提供します。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">測地線</h4>
        <p className="mb-4">曲がった空間（多様体）における二点間の最短経路（測地線）を求める問題も変分法で解くことができます。一般相対性理論では、重力は時空の歪みとして記述され、物体（光も含む）はその歪んだ時空の測地線に沿って運動します。変分法は、現代物理学の幾何学的な定式化において中心的な役割を担っています。</p>
    </>
);

export default CalculusOfVariationsContent;