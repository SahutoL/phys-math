
import React from 'react';
import MathDisplay from '../../components/MathDisplay.tsx';

const HilbertSpaceContent = () => (
    <>
        <h2 className="text-3xl font-bold mb-4">ヒルベルト空間と線形作用素</h2>
        <p className="mb-4 text-lg leading-relaxed">ヒルベルト空間は、量子力学の数学的土台となる、無限次元の抽象的なベクトル空間です。量子系における「状態」はこの空間のベクトルとして、「物理量」はその空間に作用する線形作用素として厳密に定義されます。この枠組みを用いることで、重ね合わせの原理や測定の確率的性質といった量子力学の不思議な現象が、数学的に矛盾なく記述されます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ヒルベルト空間の定義</h3>
        <p className="mb-4">ヒルベルト空間は、以下の性質を持つベクトル空間です。</p>
        <ol className="list-decimal list-inside my-4 space-y-2">
            <li><b>内積が定義されている:</b> 空間の任意の二つのベクトル <MathDisplay mathString="|\psi\rangle" /> と <MathDisplay mathString="|\phi\rangle" /> に対して、複素数 <MathDisplay mathString="\langle\phi|\psi\rangle" /> を対応させる演算（内積）が定義されています。</li>
            <li><b>完備である:</b> 空間内の任意のコーシー列（ベクトル列が互いに限りなく近づいていく列）が、必ず空間内の一つのベクトルに収束するという性質。これにより、極限操作を安心して行えます。</li>
        </ol>
        <p className='mt-4'>量子力学では、状態は波動関数 <MathDisplay mathString="\psi(x)" /> で表されることがありますが、これはヒルベルト空間のベクトルを特定の基底（位置固有状態）で表示した一つの表現にすぎません。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">ディラックのブラ-ケット記法</h3>
        <p className="mb-4">量子力学の計算を効率的かつ直観的に行うため、ディラックの記法が広く用いられます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>ケット・ベクトル <MathDisplay mathString="| \psi \rangle" />:</b> ヒルベルト空間のベクトルそのものを表します。系の状態を表現します。</li>
            <li><b>ブラ・ベクトル <MathDisplay mathString="\langle \phi |" />:</b> ケットベクトルに対応する双対空間のベクトル。<MathDisplay mathString="|\phi\rangle^\dagger" /> に対応します。</li>
            <li><b>ブラケット <MathDisplay mathString="\langle \phi | \psi \rangle" />:</b> ブラとケットの内積を表します。これは一般に複素数です。</li>
        </ul>
        <p className="mt-4">ベクトルのノルム（大きさ）の2乗は <MathDisplay mathString="\langle\psi|\psi\rangle" /> で与えられ、物理的には確率の総和が1になるように <MathDisplay mathString="\langle\psi|\psi\rangle = 1" /> と規格化されます。</p>

        <h3 className="text-2xl font-bold mt-8 mb-3">線形作用素と物理量</h3>
        <p className="mb-4">ヒルベルト空間のベクトルを別のベクトルに変換する写像を作用素（演算子）と呼びます。量子力学では、物理量（オブザーバブル）はエルミート作用素（自己随伴作用素） <MathDisplay mathString="\hat{A}" /> で表現されます。</p>
        <ul className="list-disc list-inside my-4 space-y-2">
            <li><b>エルミート作用素 (<MathDisplay mathString="\hat{A}^\dagger = \hat{A}" />):</b> この作用素の固有値は必ず実数となり、物理量の測定値が実数であることに対応します。また、異なる固有値に属する固有ベクトルは互いに直交します。</li>
            <li><b>ユニタリ作用素 (<MathDisplay mathString="\hat{U}^\dagger \hat{U} = \hat{I}" />):</b> ベクトルのノルムを保存する作用素です。系の時間発展を記述する時間発展作用素はユニタリであり、これにより確率の総和が常に1に保たれます。</li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-8 mb-3">固有値問題と測定</h3>
        <p className="mb-4">物理量 <MathDisplay mathString="\hat{A}" /> を測定するという行為は、数学的には <MathDisplay mathString="\hat{A}" /> の固有値問題を解くことに対応します。</p>
        <MathDisplay displayMode={true} mathString={`\\hat{A} |a_n\\rangle = a_n |a_n\\rangle`} />
        <p className='mt-4'>ここで <MathDisplay mathString="a_n" /> は固有値（測定されうる値）、<MathDisplay mathString="|a_n\rangle" /> はそれに属する固有ベクトル（測定後に系が収縮する状態）です。</p>
        <p className='mt-4'>一般の状態 <MathDisplay mathString="|\psi\rangle" /> は、これらの固有ベクトルの重ね合わせ（線形結合）として表現できます（スペクトル分解）。</p>
        <MathDisplay displayMode={true} mathString={`|\\psi\\rangle = \\sum_n c_n |a_n\\rangle, \\quad c_n = \\langle a_n | \\psi \\rangle`} />
        <p className='mt-4'>この状態で物理量 <MathDisplay mathString="\hat{A}" /> を測定したとき、測定値 <MathDisplay mathString="a_n" /> が得られる確率は、展開係数の絶対値の2乗 <MathDisplay mathString="P(a_n) = |c_n|^2" /> で与えられます。これが量子測定の確率解釈（ボルンの規則）の数学的な表現です。測定の期待値は <MathDisplay mathString="\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle" /> で計算されます。</p>
        <p className='mt-4'>ヒルベルト空間という数学的構造は、量子力学のこれらの基本的な要請を、統一的かつ整合的に記述するための強力な言語なのです。</p>
    </>
);

export default HilbertSpaceContent;