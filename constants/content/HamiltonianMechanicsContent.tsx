import React from 'react';
import MathDisplay from '../../components/MathDisplay';

const HamiltonianMechanicsContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">解析力学（ハミルトン形式）</h2>
        <p className="mb-4 text-lg leading-relaxed">ハミルトン力学は、ラグランジュ力学をさらに洗練させた、古典力学のエレガントな定式化です。系の状態を位置と速度ではなく、位置と運動量で構成される「相空間」の1点で記述します。この形式は、系の時間発展の対称性を美しく描き出すだけでなく、統計力学や量子力学への移行を理解する上で不可欠な理論的架橋となります。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ルジャンドル変換とハミルトニアン</h3>
        <p className="mb-4">ラグランジュ力学はラグランジアン <MathDisplay mathString="L(q, \dot{q}, t)" /> を基本量としますが、ハミルトン力学では、一般化運動量 <MathDisplay mathString="p_i = \frac{\partial L}{\partial \dot{q}_i}" /> を独立変数として導入します。ラグランジアンから、系の全エネルギーに対応するハミルトニアン <MathDisplay mathString="H(q, p, t)" /> は、以下のルジャンドル変換によって定義されます。</p>
        <MathDisplay displayMode={true} mathString={`H(q, p, t) = \\sum_i p_i \\dot{q}_i - L(q, \\dot{q}, t)`} />
        <p className='mt-4'>この操作により、系の基本変数が <MathDisplay mathString="(q, \dot{q})" /> の組から <MathDisplay mathString="(q, p)" /> の組へと変換されます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ハミルトンの正準方程式</h3>
        <p className="mb-4">ハミルトニアンの全微分を計算し、ラグランジュ方程式を用いることで、系の時間発展を記述する一対の1階微分方程式が得られます。これをハミルトンの正準方程式と呼びます。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\quad \\dot{p}_i = - \\frac{\\partial H}{\\partial q_i}`} />
        </div>
        <p className='mt-4'>これらの方程式は、相空間における状態点の時間発展（フロー）を決定します。この方程式の対称的な形は、位置と運動量が力学的に同等の役割を果たしていることを示唆しています。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">相空間とリウヴィルの定理</h3>
        <p className="mb-4">すべての一般化座標 <MathDisplay mathString="q_i" /> と一般化運動量 <MathDisplay mathString="p_i" /> を座標軸とする2n次元の空間を相空間（フェーズスペース）と呼びます。系のミクロな状態は、この相空間内の一点で完全に指定されます。リウヴィルの定理によれば、正準方程式に従って運動する系のアンサンブル（相空間上の点の集まり）の密度は時間的に変化しません。これは、相空間の「体積」が保存されることを意味し、統計力学における等重率の原理の理論的基礎を与えます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ポアソン括弧</h3>
        <p className="mb-4">相空間上の任意の二つの関数 <MathDisplay mathString="A(q,p), B(q,p)" /> に対して、ポアソン括弧（ポアソンブラケット）が以下のように定義されます。</p>
        <MathDisplay displayMode={true} mathString={`\\{A, B\\} = \\sum_i \\left( \\frac{\\partial A}{\\partial q_i} \\frac{\\partial B}{\\partial p_i} - \\frac{\\partial A}{\\partial p_i} \\frac{\\partial B}{\\partial q_i} \\right)`} />
        <p className='mt-4'>これを用いると、任意の物理量 <MathDisplay mathString="A" /> の時間発展は、以下のように極めてコンパクトに表現できます。</p>
        <MathDisplay displayMode={true} mathString={`\\frac{dA}{dt} = \\{A, H\\} + \\frac{\\partial A}{\\partial t}`} />
        <p className='mt-4'>特に、<MathDisplay mathString="A" /> がハミルトニアンと可換（<MathDisplay mathString="\{A, H\}=0" />）で、時間に陽に依存しない場合、<MathDisplay mathString="A" /> は保存量となります。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">量子力学への移行</h3>
        <p className="mb-4">ハミルトン力学の構造は、量子力学のハイゼンベルク描像と驚くほど類似しています。正準量子化という手続きでは、古典的な物理量を量子的な演算子（作用素）に置き換え、ポアソン括弧を交換子（コミュニテータ）に対応させます。</p>
        <MathDisplay displayMode={true} mathString={`\\{A, B\\} \\quad \\longrightarrow \\quad \\frac{1}{i\\hbar} [\\hat{A}, \\hat{B}] = \\frac{1}{i\\hbar}(\\hat{A}\\hat{B} - \\hat{B}\\hat{A})`} />
        <p className='mt-4'>特に、基本的な正準変数間の関係 <MathDisplay mathString="\{q_i, p_j\} = \delta_{ij}" /> は、量子力学の中心となる正準交換関係 <MathDisplay mathString="[\hat{q}_i, \hat{p}_j] = i\hbar\delta_{ij}" /> に直結します。このように、ハミルトン力学は、古典論の枠組みの中に量子論の代数的構造を予見させる、深遠な理論体系なのです。</p>
    </>
);

export default HamiltonianMechanicsContent;