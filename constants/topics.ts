
import React from 'react';
import type { Topic } from '../types';

import MatrixContent from './content/MatrixContent';
import TaylorExpansionContent from './content/TaylorExpansionContent';
import FourierSeriesContent from './content/FourierSeriesContent';
import FourierTransformContent from './content/FourierTransformContent';
import LaplaceTransformContent from './content/LaplaceTransformContent';
import VectorCalculusContent from './content/VectorCalculusContent';
import CalculusOfVariationsContent from './content/CalculusOfVariationsContent';
import ComplexAnalysisContent from './content/ComplexAnalysisContent';
import SpecialFunctionsContent from './content/SpecialFunctionsContent';
import GroupTheoryContent from './content/GroupTheoryContent';
import TensorAnalysisContent from './content/TensorAnalysisContent';
import DifferentialGeometryContent from './content/DifferentialGeometryContent';
import ProbabilityStatisticsContent from './content/ProbabilityStatisticsContent';
import HamiltonianMechanicsContent from './content/HamiltonianMechanicsContent';
import HilbertSpaceContent from './content/HilbertSpaceContent';
import LagrangianMechanicsContent from './content/LagrangianMechanicsContent';
import FluidDynamicsContent from './content/FluidDynamicsContent';
import GreensFunctionContent from './content/GreensFunctionContent';


const topicSummaries: { [key: string]: string } = {
  matrix: '線形変換、座標回転、量子状態など、物理学のあらゆる場面で活躍する基本的な数学言語。',
  'taylor-expansion': '複雑な関数を多項式で近似する強力な手法。ポテンシャルの極小点周りの運動解析などに不可欠。',
  'fourier-series': '周期的な現象を単純な波の重ね合わせとして分解する。振動・波動現象の解析の基礎。',
  'fourier-transform': '非周期的な現象を周波数スペクトルに分解する。量子力学の不確定性原理の数学的背景。',
  'laplace-transform': '初期値問題や過渡現象を代数的に解くための積分変換。電気回路や制御理論で威力を発揮。',
  'vector-calculus': '電場や磁場などの「場」を記述し、その空間的変化を捉える。マクスウェル方程式の言語。',
  'calculus-of-variations': '「最小作用の原理」を定式化し、物理法則の根源に迫る。解析力学の基礎。',
  'lagrangian-mechanics': '運動エネルギーとポテンシャルエネルギーから系の運動を導く。解析力学のもう一つの定式化。',
  'hamiltonian-mechanics': 'ラグランジュ力学を相空間で記述するエレガントな形式。古典力学から量子力学への架け橋となる。',
  'complex-analysis': '実数の世界を超えた強力な定理で、定積分計算や2次元ポテンシャル問題を鮮やかに解く。',
  'special-functions': '物理法則を表す微分方程式の解として現れる重要な関数群。量子力学の原子軌道などを記述。',
  'group-theory': '物理法則の根底にある「対称性」を記述する言語。保存則や素粒子の分類を導く。',
  'tensor-analysis': '物理法則を座標系によらない普遍的な形で記述する。相対性理論の必須言語。',
  'differential-geometry': '曲がった空間そのものを数学的に扱う。一般相対性理論で時空の幾何学を記述する。',
  'probability-statistics': '多数の粒子系の振る舞いや量子測定の不確定性を扱う。統計力学と量子力学の根幹。',
  'hilbert-space': '量子力学の状態ベクトルが住む無限次元の抽象的な空間。測定や物理量の数学的基礎を厳密に定義する。',
  'fluid-dynamics': '気体や液体の運動を数学的に記述する。ナビエ-ストークス方程式が中心的な役割を担う。',
  'greens-function': '線形微分方程式を解くための強力な手法。点源からの応答を記述し、物理学の多くの分野で応用される。',
};

export const topics: Topic[] = [
  {
    id: 'home',
    title: 'ホーム',
    content: React.createElement(React.Fragment),
  },
  {
    id: 'matrix',
    title: '行列',
    content: React.createElement(MatrixContent),
    summary: topicSummaries.matrix,
  },
  {
    id: 'taylor-expansion',
    title: 'テイラー展開・マクローリン展開',
    content: React.createElement(TaylorExpansionContent),
    summary: topicSummaries['taylor-expansion'],
  },
  {
    id: 'fourier-series',
    title: 'フーリエ級数展開',
    content: React.createElement(FourierSeriesContent),
    summary: topicSummaries['fourier-series'],
  },
  {
    id: 'fourier-transform',
    title: 'フーリエ変換',
    content: React.createElement(FourierTransformContent),
    summary: topicSummaries['fourier-transform'],
  },
  {
    id: 'laplace-transform',
    title: 'ラプラス変換',
    content: React.createElement(LaplaceTransformContent),
    summary: topicSummaries['laplace-transform'],
  },
  {
    id: 'vector-calculus',
    title: 'ベクトル解析',
    content: React.createElement(VectorCalculusContent),
    summary: topicSummaries['vector-calculus'],
  },
  {
    id: 'calculus-of-variations',
    title: '変分法',
    content: React.createElement(CalculusOfVariationsContent),
    summary: topicSummaries['calculus-of-variations'],
  },
  {
    id: 'lagrangian-mechanics',
    title: '解析力学（ラグランジュ形式）',
    content: React.createElement(LagrangianMechanicsContent),
    summary: topicSummaries['lagrangian-mechanics'],
  },
  {
    id: 'hamiltonian-mechanics',
    title: '解析力学（ハミルトン形式）',
    content: React.createElement(HamiltonianMechanicsContent),
    summary: topicSummaries['hamiltonian-mechanics'],
  },
  {
    id: 'complex-analysis',
    title: '複素解析',
    content: React.createElement(ComplexAnalysisContent),
    summary: topicSummaries['complex-analysis'],
  },
  {
    id: 'greens-function',
    title: 'グリーン関数',
    content: React.createElement(GreensFunctionContent),
    summary: topicSummaries['greens-function'],
  },
  {
    id: 'special-functions',
    title: '特殊関数',
    content: React.createElement(SpecialFunctionsContent),
    summary: topicSummaries['special-functions'],
  },
  {
    id: 'group-theory',
    title: '群論',
    content: React.createElement(GroupTheoryContent),
    summary: topicSummaries['group-theory'],
  },
  {
    id: 'tensor-analysis',
    title: 'テンソル解析',
    content: React.createElement(TensorAnalysisContent),
    summary: topicSummaries['tensor-analysis'],
  },
  {
    id: 'differential-geometry',
    title: '微分幾何学',
    content: React.createElement(DifferentialGeometryContent),
    summary: topicSummaries['differential-geometry'],
  },
  {
    id: 'fluid-dynamics',
    title: '流体力学',
    content: React.createElement(FluidDynamicsContent),
    summary: topicSummaries['fluid-dynamics'],
  },
  {
    id: 'probability-statistics',
    title: '確率論・統計力学',
    content: React.createElement(ProbabilityStatisticsContent),
    summary: topicSummaries['probability-statistics'],
  },
  {
    id: 'hilbert-space',
    title: 'ヒルベルト空間と線形作用素',
    content: React.createElement(HilbertSpaceContent),
    summary: topicSummaries['hilbert-space'],
  },
];