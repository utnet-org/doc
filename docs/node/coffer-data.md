# Coffer数据类型

**Coffer**共识机制在其核心引入了**Coffer**数据类型，用于维护和管理网络中的签名者和其权重。以下是**Coffer**数据类型的详细说明：

## Coffer字段
**SuperAccount**：超级账户地址，负责管理整个**Coffer**的签名者和权重。

**Signers**：签名者数组，每个元素代表一个签名者及其相关信息。

**SignerMap**：签名者映射，提供快速访问特定签名者信息的能力。

**TotalPower**：所有签名者的总权重。

## Signer类型

**Signer**是**Coffer**中的子类型，用于表示一个签名者及其相关信息：

**Address**：签名者的Utility地址。

**Power**：签名者的权重，影响其被选为下一个区块签名者的概率。

## 存储与交互

**Coffer**数据类型被存储在区块链的状态数据库（**StateDB**）中，确保了数据的持久性和一致性。它的结构设计使得从外部（如智能合约或API调用）与之交互变得简单直接。

## 存储细节

**Coffer**数据以特定的数据结构存储在**StateDB**中。

每次区块被挖出或验证时，都会更新**Coffer**中的信息，以反映网络中的最新状态。

## 交互方式

**外部读取**：通过区块链的API，可以查询当前的**SuperAccount**，所有签名者及其权重。

**更新操作**：仅**SuperAccount**有权限添加或移除签名者，修改权重。这些操作通常通过提交特定的交易来完成。

## 安全与灵活性

**权限控制**：仅**SuperAccount**能修改**Coffer**数据，确保了网络的安全性和稳定性。

**灵活性**：可以灵活地添加或移除签名者，调整权重，以适应网络的变化。

## 结语

**Coffer**数据类型是**Coffer**共识机制的核心组成部分，它不仅保障了网络的安全性，还提供了高度的灵活性和可扩展性。通过精心设计的存储和交互机制，它能有效地管理网络中的签名者和权重，为构建一个高效、可靠的区块链网络提供了坚实的基础。