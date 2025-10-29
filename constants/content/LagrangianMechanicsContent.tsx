
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const LagrangianMechanicsContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">解析力学（ラグランジュ形式）</h2>
        <p className="mb-4 text-lg leading-relaxed">ラグランジュ力学は、ニュートン力学をより抽象的かつ一般的に再定式化したものです。この形式では、個々の力や加速度を直接扱う代わりに、系の運動エネルギーとポテンシャルエネルギーという二つのスカラー量からなる「ラグランジアン」を定義し、「最小作用の原理」という単一の変分原理から運動方程式を導出します。これにより、束縛条件のある複雑な系でもエレガントに扱うことができます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">一般化座標</h3>
        <p className="mb-4">系の状態を記述するために必要十分な独立な変数の組を一般化座標 <MathDisplay mathString="q = (q_1, q_2, \ldots, q_n)" /> と呼びます。例えば、2次元平面上の振り子の場合、デカルト座標 <MathDisplay mathString="(x,y)" /> では <MathDisplay mathString="x^2+y^2=l^2" /> という束縛条件がありますが、振れ角 <MathDisplay mathString="\theta" /> を一般化座標として選べば、独立な変数は1つだけで済みます。ラグランジュ力学はこの一般化座標を用いることで、束縛力を陽に計算することなく問題を解くことを可能にします。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ラグランジアンと最小作用の原理</h3>
        <p className="mb-4">ラグランジアン <MathDisplay mathString="L" /> は、系の運動エネルギー <MathDisplay mathString="T" /> とポテンシャルエネルギー <MathDisplay mathString="U" /> の差として定義されます。</p>
        <MathDisplay displayMode={true} mathString={`L(q, \\dot{q}, t) = T(q, \\dot{q}, t) - U(q, t)`} />
        <p className='mt-4'>ここで <MathDisplay mathString="\dot{q}" /> は一般化速度です。物理学の根幹をなす「最小作用の原理（ハミルトンの原理）」によれば、系は、作用積分 <MathDisplay mathString="S" /> を停留させる（多くの場合、最小にする）ような経路 <MathDisplay mathString="q(t)" /> を通って運動します。</p>
        <MathDisplay displayMode={true} mathString={`S[q(t)] = \\int_{t_1}^{t_2} L(q, \\dot{q}, t) dt`} />
        
        <h3 className="text-2xl font-bold mt-8 mb-3">オイラー・ラグランジュ方程式</h3>
        <p className="mb-4">作用積分 <MathDisplay mathString="S" /> を停留させるという変分問題（<MathDisplay mathString="\delta S = 0" />）を解くと、各一般化座標 <MathDisplay mathString="q_i" /> が満たすべき運動方程式が得られます。これがオイラー・ラグランジュ方程式です。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = 0`} />
        </div>

        <h4 className="text-xl font-bold mt-6 mb-2">例：単振り子</h4>
        <p className="mb-4">質量m、長さlの単振り子の運動を考えます。一般化座標を振れ角 <MathDisplay mathString="\theta" /> とすると、</p>
        <MathDisplay displayMode={true} mathString={`T = \\frac{1}{2}m(l\\dot{\\theta})^2, \\quad U = -mgl\\cos\\theta`} />
        <p className='mt-4'>したがって、ラグランジアンは <MathDisplay mathString="L = \frac{1}{2}ml^2\dot{\\theta}^2 + mgl\cos\theta" /> となります。オイラー・ラグランジュ方程式を適用すると、</p>
        <MathDisplay displayMode={true} mathString={`\\frac{\\partial L}{\\partial \\dot{\\theta}} = ml^2\\dot{\\theta} \\quad \\implies \\quad \\frac{d}{dt}\\left( \\frac{\\partial L}{\\partial \\dot{\\theta}} \\right) = ml^2\\ddot{\\theta}`} />
        <MathDisplay displayMode={true} mathString={`\\frac{\\partial L}{\\partial \\theta} = -mgl\\sin\\theta`} />
        <p className='mt-4'>これらから、<MathDisplay mathString="ml^2\ddot{\\theta} - (-mgl\sin\theta) = 0" />、すなわちよく知られた振り子の運動方程式 <MathDisplay mathString="\ddot{\\theta} + \frac{g}{l}\sin\theta = 0" /> が導かれます。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">対称性と保存則（ネーターの定理）</h3>
        <p className="mb-4">ラグランジュ形式の大きな利点の一つは、対称性と保存則の関係が明確になることです。ネーターの定理によれば、「ラグランジアンがある連続的な変換（例えば、並進や回転）に対して不変であるならば、それに対応する保存量が存在する」ことが示されます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>空間並進の対称性 → 運動量保存則:</b> ラグランジアンが座標 <MathDisplay mathString="q_i" /> を陽に含まない場合（<MathDisplay mathString="\partial L/\partial q_i = 0" />）、<MathDisplay mathString="d/dt(\partial L/\partial\dot{q}_i) = 0" /> となり、一般化運動量 <MathDisplay mathString="p_i = \partial L/\partial\dot{q}_i" /> が保存されます。</li>
            <li><b>時間並進の対称性 → エネルギー保存則:</b> ラグランジアンが時間を陽に含まない場合、ハミルトニアン（エネルギー）が保存されます。</li>
            <li><b>空間回転の対称性 → 角運動量保存則:</b> ラグランジアンが回転に対して不変である場合、角運動量が保存されます。</li>
        </ul>
        <p className='mt-4'>このように、ラグランジュ力学は、物理法則の根底にある対称性の原理を浮き彫りにする、強力な理論的枠組みを提供します。</p>
    </>
);

export default LagrangianMechanicsContent;