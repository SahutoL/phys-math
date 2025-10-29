
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const LaplaceTransformContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">ラプラス変換 (Laplace Transform)</h2>
        <p className="mb-4 text-lg leading-relaxed">ラプラス変換は、時間 <MathDisplay mathString="t" /> の関数を複素周波数 <MathDisplay mathString="s" /> の関数に変換する積分変換です。フーリエ変換が定常状態の周波数解析に用いられるのに対し、ラプラス変換は <MathDisplay mathString="t \ge 0" /> で定義される関数を扱うため、初期値問題や過渡現象の解析に特に威力を発揮します。微分方程式を代数方程式に変換できるため、電気回路や制御工学の問題を解くのに非常に強力なツールとなります。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">フーリエ変換からの拡張</h3>
        <p className='mb-4'>フーリエ変換 <MathDisplay mathString="\int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt" /> は、<MathDisplay mathString="f(t)" /> が <MathDisplay mathString="t\to\infty" /> で0に収束しないと積分が発散してしまい、変換できません。この問題を解決するため、<MathDisplay mathString="t>0" /> で発散する関数にも強制的に収束させる減衰因子 <MathDisplay mathString="e^{-\sigma t}" /> (<MathDisplay mathString="\sigma > 0" />) を掛けてからフーリエ変換するのがラプラス変換のアイデアの元です。</p>
        <MathDisplay displayMode={true} mathString={`F(s) = \\int_{0}^{\\infty} (f(t)e^{-\\sigma t}) e^{-i\\omega t} dt = \\int_{0}^{\\infty} f(t) e^{-(\\sigma+i\\omega)t} dt`} />
        <p className='mt-4'>ここで複素数 <MathDisplay mathString="s = \sigma + i\omega" /> を導入すると、ラプラス変換の定義式が得られます。実部 <MathDisplay mathString="\sigma" /> は減衰の速さを、虚部 <MathDisplay mathString="\omega" /> は振動の角周波数を表し、<MathDisplay mathString="s" /> は減衰振動の特性をまとめて表現する「複素周波数」と解釈できます。</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">定義</h3>
        <p className="mb-4">関数 <MathDisplay mathString="f(t)" /> (ただし <MathDisplay mathString="t \ge 0" />) のラプラス変換 <MathDisplay mathString="F(s)" /> は以下で定義されます。</p>
        <MathDisplay displayMode={true} mathString={`F(s) = \\mathcal{L}\\{f(t)\\} = \\int_{0}^{\\infty} f(t) e^{-st} dt`} />
        
        <h3 className="text-2xl font-bold mt-8 mb-3">ラプラス変換の重要な性質</h3>
        <h4 className="text-xl font-bold mt-6 mb-2">微分の変換</h4>
        <p className="mb-4">ラプラス変換の最も強力な性質は、微分の変換です。これにより、微分方程式が代数方程式に変わります。</p>
        <MathDisplay displayMode={true} mathString={`\\mathcal{L}\\{f'(t)\\} = sF(s) - f(0)`} />
        <MathDisplay displayMode={true} mathString={`\\mathcal{L}\\{f''(t)\\} = s^2F(s) - sf(0) - f'(0)`} />
        <p className="mt-4">このとき、初期条件 <MathDisplay mathString="f(0), f'(0)" /> が自然に式の中に組み込まれるのが大きな利点です。</p>

        <h4 className="text-xl font-bold mt-6 mb-2">畳み込み定理</h4>
        <p className="mb-4">フーリエ変換と同様に、ラプラス変換にも畳み込み定理が存在します。</p>
        <MathDisplay displayMode={true} mathString={`\\mathcal{L}\\{(f*g)(t)\\} = F(s)G(s)`} />
        <p className="mt-4"><MathDisplay mathString="F(s)" /> をシステムの伝達関数（インパルス応答のラプラス変換）と見なせば、任意の入力 <MathDisplay mathString="g(t)" /> に対する出力が、<MathDisplay mathString="s" /> 領域での単純な積で計算できることを意味します。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">逆ラプラス変換</h3>
        <p className='mb-4'>s領域で解 <MathDisplay mathString="F(s)" /> を得た後、それを時間領域の解 <MathDisplay mathString="f(t)" /> に戻す操作が逆ラプラス変換です。よく使われる手法は、<MathDisplay mathString="F(s)" /> を部分分数分解し、基本的な関数の変換ペアの公式表を使って各項を逆変換する方法です。</p>
        <p className='mb-4'>例えば、<MathDisplay mathString="F(s) = \frac{1}{(s+a)(s+b)} = \frac{1}{b-a}\left(\frac{1}{s+a} - \frac{1}{s+b}\right)" /> のように分解できれば、<MathDisplay mathString="\mathcal{L}\{e^{-at}\} = \frac{1}{s+a}" /> という公式から、</p>
        <MathDisplay displayMode={true} mathString={`f(t) = \\mathcal{L}^{-1}\\{F(s)\\} = \\frac{1}{b-a}(e^{-at} - e^{-bt})`} />
        <p className='mt-4'>と逆変換できます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">物理における応用例：RLC直列回路の過渡応答</h3>
        <p className="mb-4">抵抗(R)、コイル(L)、コンデンサ(C)からなる直列RLC回路に、時刻t=0で直流電圧 <MathDisplay mathString="V_0" /> を印加した場合の電流 <MathDisplay mathString="i(t)" /> を求めます。回路方程式は以下のようになります。</p>
        <MathDisplay displayMode={true} mathString={`L\\frac{di}{dt} + Ri(t) + \\frac{1}{C}\\int_0^t i(\\tau) d\\tau = V_0 u(t)`} />
        <p className='mt-4'><MathDisplay mathString="u(t)" /> は単位ステップ関数です。初期電荷、初期電流を0 (<MathDisplay mathString="i(0)=0, q(0)=0" />) としてラプラス変換すると、</p>
        <MathDisplay displayMode={true} mathString={`LsI(s) + RI(s) + \\frac{1}{Cs}I(s) = \\frac{V_0}{s}`} />
        <p className="mt-4"><MathDisplay mathString="I(s)" /> について解くと、</p>
        <MathDisplay displayMode={true} mathString={`I(s) = \\frac{V_0/L}{s^2 + (R/L)s + 1/LC}`} />
        <p className="mt-4">この <MathDisplay mathString="I(s)" /> を逆ラプラス変換することで、時間応答 <MathDisplay mathString="i(t)" /> が得られます。分母の2次方程式の根（インピーダンスの極）<MathDisplay mathString="s_1, s_2" /> の性質によって、応答は3つの場合に分類されます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>過減衰 (<MathDisplay mathString="(R/2L)^2 > 1/LC" />):</b> 極が2つの異なる負の実数。応答は振動せず、ゆっくりと0に収束します。</li>
            <li><b>臨界減衰 (<MathDisplay mathString="(R/2L)^2 = 1/LC" />):</b> 極が負の重根。応答は振動せずに最も速く0に収束します。</li>
            <li><b>減衰振動 (<MathDisplay mathString="(R/2L)^2 < 1/LC" />):</b> 極が互いに共役な複素数。応答は振動しながら減衰します。</li>
        </ul>
        <p className='mt-4'>このようにラプラス変換を用いると、回路の過渡的な振る舞いを、回路のパラメータ（R, L, C）と代数的に結びつけて系統的に解析できます。</p>
    </>
);

export default LaplaceTransformContent;