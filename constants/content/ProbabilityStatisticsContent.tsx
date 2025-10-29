
import React from 'react';
import MathDisplay from '../../components/MathDisplay';

const ProbabilityStatisticsContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">確率論・統計力学</h2>
        <p className="mb-4 text-lg leading-relaxed">物理学において、確率論は二つの大きな文脈で中心的な役割を果たします。一つは、アボガドロ数（<MathDisplay mathString="\sim 10^{23}" />個）のような膨大な数の粒子から構成される系の振る舞いを扱う「統計力学」です。もう一つは、測定結果が本質的に確率的にしか決まらないミクロな世界の法則を記述する「量子力学」です。これらの分野では、個々の粒子の厳密な運動を追うのではなく、確率的な考え方を用いて系のマクロな性質や測定値の期待値を導き出します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">基本的な確率の概念</h3>
        <p className="mb-4">物理学でよく用いられるのは、連続的な確率変数です。確率密度関数 <MathDisplay mathString="P(x)" /> は、変数が <MathDisplay mathString="x" /> と <MathDisplay mathString="x+dx" /> の間にある確率が <MathDisplay mathString="P(x)dx" /> であることを意味します。物理量 <MathDisplay mathString="f(x)" /> の期待値（平均値）は以下で計算されます。</p>
        <MathDisplay displayMode={true} mathString={`\\langle f(x) \\rangle = \\int f(x) P(x) dx`} />
        
        <h3 className="text-2xl font-bold mt-8 mb-3">統計力学の考え方</h3>
        <p className="mb-4">統計力学は、少数のマクロな熱力学的量（温度、圧力など）と、膨大な数のミクロな粒子の状態（位置、運動量）とを結びつけます。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">統計集団（アンサンブル）</h4>
        <p className="mb-4">あるマクロな状態に対応する可能なミクロな状態の集合を考え、これを統計集団（アンサンブル）と呼びます。目的に応じていくつかのアンサンブルが用いられます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>ミクロカノニカル・アンサンブル：</b> 外部とエネルギーも粒子も交換しない孤立系を扱う。（N, V, Eが一定）</li>
            <li><b>カノニカル・アンサンサンブル：</b> 巨大な熱浴と接触し、エネルギーを交換する系を扱う。（N, V, Tが一定）</li>
        </ul>
        <h4 className="text-xl font-bold mt-6 mb-2">ボルツマン分布と分配関数</h4>
        <p className="mb-4">カノニカル・アンサンブルにおいて、系がある特定のエネルギー <MathDisplay mathString="E_i" /> を持つミクロな状態 <MathDisplay mathString="i" /> をとる確率は、ボルツマン因子に比例します。</p>
        <MathDisplay displayMode={true} mathString={`P(E_i) = \\frac{e^{-E_i/k_B T}}{Z}`} />
        <p className="mt-4">ここで <MathDisplay mathString="k_B" /> はボルツマン定数、<MathDisplay mathString="T" /> は絶対温度です。分母の <MathDisplay mathString="Z = \sum_i e^{-E_i/k_B T}" /> は分配関数と呼ばれ、確率の規格化定数であると同時に、系の全ての熱力学的な情報（内部エネルギー、エントロピー、比熱など）を導出するための母関数となる、極めて重要な量です。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">エントロピー</h4>
        <p className="mb-4">統計力学において、エントロピー <MathDisplay mathString="S" /> は、あるマクロ状態に対応するミクロな状態の数 <MathDisplay mathString="W" /> （状態数）の対数として定義されます（ボルツマンの公式）。</p>
        <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md my-4">
            <MathDisplay displayMode={true} mathString={`S = k_B \\ln W`} />
        </div>
        <p className="mt-4">これは、系の「乱雑さ」や「情報の欠如」の度合いを表します。熱力学第二法則（エントロピー増大の法則）は、系がより確率の高い（つまり、より多くのミクロな状態が対応する）マクロな状態へ自発的に移行していくことを統計的に説明します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">量子力学における確率</h3>
        <p className="mb-4">量子力学では、確率は理論の根幹をなす本質的な要素です。粒子の状態は波動関数 <MathDisplay mathString="\Psi(x,t)" /> によって記述されます。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">ボルンの規則</h4>
        <p className="mb-4">時刻 t に粒子の位置を測定したとき、位置 x で粒子が発見される確率密度は、波動関数の絶対値の2乗 <MathDisplay mathString="|\Psi(x,t)|^2" /> で与えられます。これがボルンの規則であり、量子力学の確率解釈の基本です。</p>
        <h4 className="text-xl font-bold mt-6 mb-2">期待値</h4>
        <p className="mb-4">物理量（オブザーバブル）Aに対応するエルミート演算子を <MathDisplay mathString="\hat{A}" /> とするとき、状態 <MathDisplay mathString="\Psi" /> において物理量Aを測定したときの期待値は、以下のように計算されます。</p>
        <MathDisplay displayMode={true} mathString={`\\langle A \\rangle = \\int \\Psi^* \\hat{A} \\Psi dx`} />
        <p className="mt-4">これは、同じ状態 <MathDisplay mathString="\Psi" /> を多数用意して何度も測定を行ったときの、測定値の平均値に対応します。個々の測定結果は確率的にばらつきますが、その期待値は理論的に正確に計算することができます。</p>
    </>
);

export default ProbabilityStatisticsContent;