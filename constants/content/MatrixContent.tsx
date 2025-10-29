
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const MatrixContent = () => (
  <>
    <h2 className="text-3xl font-bold mb-4">行列 (Matrix)</h2>
    <p className="mb-4 text-lg leading-relaxed">行列は、数や記号、式などを縦と横に矩形に配置したものです。物理学においては、線形変換や座標変換、連立方程式の表現、量子状態の記述など、非常に多くの場面で用いられる根幹的な数学的対象です。線形的な系を扱うための言語と言えます。</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">定義と基本的な演算</h3>
    <p className="mb-4">m行n列の行列Aは以下のように表されます。</p>
    <MathDisplay displayMode={true} mathString={`A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}`} />
    
    <h4 className="text-xl font-bold mt-6 mb-2">行列の積</h4>
    <p className="mb-4">l行m列の行列Aとm行n列の行列Bの積ABは、l行n列の行列Cとなります。成分 <MathDisplay mathString="c_{ij}" /> は以下で計算されます。</p>
    <MathDisplay displayMode={true} mathString={`c_{ij} = \\sum_{k=1}^{m} a_{ik}b_{kj}`} />
    <p className="mt-4">行列の積は一般に非可換です。つまり、<MathDisplay mathString="AB \neq BA" /> となることが多いです。この性質は、操作の順序が結果に影響する物理現象（例えば、量子力学における測定や3次元空間での回転）を記述する上で本質的です。</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">行列式と逆行列</h3>
    <h4 className="text-xl font-bold mt-6 mb-2">行列式 (Determinant)</h4>
    <p className="mb-4">正方行列（行と列の数が等しい行列）に対して定義されるスカラー値です。幾何学的には行列が表す線形変換によって単位体積（2Dなら面積）が何倍に拡大（または縮小）されるかを表す「体積拡大率」です。行列式が0の場合、その変換は次元を潰す（例えば、3次元空間を平面に写す）写像であり、逆変換が存在しないことを意味します。</p>
    
    <h4 className="text-xl font-bold mt-6 mb-2">逆行列 (Inverse Matrix)</h4>
    <p className="mb-4">正方行列Aに対して、<MathDisplay mathString="AA^{-1} = A^{-1}A = I" /> (Iは単位行列) を満たす行列 <MathDisplay mathString="A^{-1}" /> を逆行列と呼びます。逆行列は、行列Aが表す線形変換を「元に戻す」変換に対応します。逆行列が存在するための必要十分条件は、行列式が0でないこと (<MathDisplay mathString="\det(A) \neq 0" />) です。</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">固有値、固有ベクトルと行列の対角化</h3>
    <p className="mb-4">正方行列Aに対して、<MathDisplay mathString="A\mathbf{v} = \lambda\mathbf{v}" /> を満たすゼロでないベクトル <MathDisplay mathString="\mathbf{v}" /> とスカラー <MathDisplay mathString="\lambda" /> が存在するとき、<MathDisplay mathString="\lambda" /> を固有値、<MathDisplay mathString="\mathbf{v}" /> を固有ベクトルと呼びます。物理的には、固有ベクトルは変換の「方向を変えない特別な方向」を、固有値はその方向における「伸縮率」を表します。</p>
    <p className='mb-4'>n個の線形独立な固有ベクトルが見つかれば、それらを並べた行列 <MathDisplay mathString="P" /> を用いて、元の行列 <MathDisplay mathString="A" /> を <MathDisplay mathString="P^{-1}AP = D" /> の形に変形できます。ここで <MathDisplay mathString="D" /> は固有値を対角成分に持つ対角行列です。これを行列の対角化と呼びます。</p>
    <h4 className="text-xl font-bold mt-6 mb-2">応用：連成振動の基準モード</h4>
    <p className='mb-4'>複数の質点とばねからなる連成振動系の運動方程式は、行列を用いて <MathDisplay mathString="M\ddot{\mathbf{x}} = -K\mathbf{x}" /> のように書けます。ここで <MathDisplay mathString="M^{-1}K" /> という行列の固有値を求めることで、系全体の振動が、それぞれ特定の振動数で振動する独立なモード（基準モード）の重ね合わせとして記述できることがわかります。対角化は、この複雑に連成した運動を、単純な単振動の集まりに分解する操作に対応しています。</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">物理学で重要な特殊な行列</h3>
    <h4 className="text-xl font-bold mt-6 mb-2">エルミート行列とユニタリ行列</h4>
    <p className='mb-4'>量子力学では、物理量（オブザーバブル）はエルミート行列（<MathDisplay mathString="H^\dagger = H" />）で表現されます。エルミート行列の固有値は必ず実数になるため、測定結果が実数であることに対応します。また、異なる固有値に属する固有ベクトルは互いに直交します。時間発展を記述する演算子 <MathDisplay mathString="U(t) = e^{-iHt/\hbar}" /> はユニタリ行列（<MathDisplay mathString="U^\dagger U = UU^\dagger = I" />）となり、状態ベクトルのノルム（確率の総和）を保存する性質を持ちます。</p>
    <h4 className="text-xl font-bold mt-6 mb-2">パウリ行列</h4>
    <p className='mb-4'>電子のスピンなど、2準位系を記述する際に用いられるエルミートかつユニタリな行列です。</p>
    <MathDisplay displayMode={true} mathString={`\\sigma_x = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad \\sigma_y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}, \\quad \\sigma_z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}`} />

    <h3 className="text-2xl font-bold mt-8 mb-3">さらなる応用例</h3>
    <h4 className="text-xl font-bold mt-6 mb-2">特殊相対性理論：ローレンツ変換</h4>
    <p className="mb-4">特殊相対性理論において、異なる慣性系間の座標変換（ローレンツ変換）は4x4の行列で表現されます。例えば、x軸方向に速さvで運動する系へのローレンツブーストは次のように書けます。</p>
    <MathDisplay displayMode={true} mathString={`\\Lambda = \\begin{pmatrix} \\gamma & -\\beta\\gamma & 0 & 0 \\\\ -\\beta\\gamma & \\gamma & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix}, \\quad (\\beta = v/c, \\gamma = 1/\\sqrt{1-\\beta^2})`} />
    <p className="mt-4">これは、ミンコフスキー時空における一種の「回転」と見なすことができます。</p>
  </>
);

export default MatrixContent;