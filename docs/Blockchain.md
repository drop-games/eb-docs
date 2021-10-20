---
sidebar_position: 3
---

# Blockchain & Tokenomics

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TextStyled from "../src/components/CustomReactComponents";

In this section we explain the blockchain part of the Hyperblade and the mechanics behind it's main token - **the Spacerock**.

## Spacerock overview

Spacerock ($SPR) is an ERC-20 token and native currency of the Hyperblade universe. It is managed by Hyperblade DAO, and has a total possible supply of 10,000,000 $SPR. Spacerock is the cornerstone of the DAO governance, as well as the primary medium of exchange in Hyperblade economy. [Governance](Governance) section goes in detail on how the DAO works.

Since our goal is to make Hyperblade as accessible as it gets, it will be at mostly on **Level 2 of Ethereum**. Low transaction costs and easy on-boarding is what we're after.

## $SPR Allocation

Total possible Spacerock supply is **10,000,000 $SPR**

| Receiver        | Allocation % | Allocation $SPR | When    |
| --------------- | ------------ | --------------- | ------- |
| Team            | 15%          | 1,500,000       | Q4 2021 |
| Private Sale    | 12%          | 1,200,000       | Q1 2022 |
| Public Sale     | 8%           | 800,000         | Q2 2022 |
| Treasury        | 35%          | 3,500,000       | Q2 2022 |
| Staking Rewards | 20%          | 2,000,000       | Q2 2022 |
| Game Rewards    | 10%          | 1,000,000       | Q3 2022 |

Tokens issued to the **team** & **private sale investors** are subject to a 1 year lockup, **team** has additional 3 year vesting with monthly release in addition to that.

<br />

<TextStyled fontSize="1.5rem" fontWeight="bold" >Distribution Chart</TextStyled>

<ThemedImage alt="Spacerock Distribution Chart" sources={{    light: useBaseUrl('../img/chart-light-mode.svg'),    dark: useBaseUrl('../img/chart-dark-mode.svg'),  }}/>

## How to get Spacerock

<TextStyled fontSize="1.3rem" fontWeight="bold" >There are multiple ways how of to get $SPR by:</TextStyled>

<ul className="list-enlarged">
	<li>Buying $SPR on an exchange</li>
	<li>Staking/Liquidity Providing</li>
	<li>Trading NFTs on HB Marketplace</li>
	<li>Participating in DAO governance</li>
	<li>Completing dev tasks/bounties</li>
	<li>Through partnering with the DAO</li>
	<li>Playing the game</li>
</ul>

## Duel-to-Earn

The core idea of Hyperblade that it is one of the first games with conventional gameplay and blockchain-native features. And one of the biggest draws will be the possibility to earn by playing the game. Hyperblade coins it's own term for that: **_Duel-to-Earn_**

Due to the novelty of the concept of play-to-earn including vast economic implications, a due diligence steps are required to implement this feature correctly. Considering the role of $SPR in the governance, it's important to preserve the balanced tokenomics and not allow inflation or attackers obtaining a significant portion of the circulating supply.

For that purpose Hyperblade introduces a second, solely play-to-earn token - **_Timeore_**

### Timeore

Players earn Timeore by playing the game, this could be winning over higher ranked players in duel mode, grinding in singleplayer etc.

Later Timeore would be burned to open **NFT loot crates**, **mint NFTs**, or **upgrade items** (re-forge swords). This utility makes Timeore valuable for NFT collectors, who now have to buy Timeore from the players, thus creating a market for it.

The supply of Timeore is controlled directly by Hyperblade DAO, making sure players are rewarded fairly irregardless of their headcount. $SPR is still used for DAO governance and revenue sharing, and now Timeore functions as an another layer of protection from price instability for the main token.

Furthermore, with how the stability of Timeore price and fair rewards distribution are essential, portion of the Spacerock will be used to supplement Timeore, including liquidity providing.

## In-game currency

Besides being an investment vehicle, $SPR has intristic purpose of being the currency in Hyperblade ecosystem.

**All trades are facilitated in $SPR (or $ETH converted to $SPR on the spot).**

### Hyperblade Marketplace

Hyperblade Marketplace is where all of the HB related purchases are being made. It's the market where players trade their NFTs as well as purchase DLC and other game-related stuff. It is directly accessible in Hyperblade as well as through a separate app on the web.

All trades are subject to a 4.5% fee that goes to HB Treasury. Gas fees are subsidised by the DAO (and low nonetheless because of L2 integration).

This is also where creators will be able to sell their NFTs and other items, including setting up re-sale fees and initial price.

We want to promote active NFT-$SPR trade, as this is where significant portion of revenues will be coming from. And this is why we are adding functionality on top of basic trade, i.e. auctions, NFT re-fogring (like adding stickers or statistics on a sword) and more.

The [NFT](NFT) section goes deeper on NFTs and their role in HB universe.

## Liqidity

**Liquidity** is a necessary part of any healthy token economy. We're distributing **800,000 $SPR** during the public sale, which will be the first time $SPR will be available on the open market. Initial token sale is sensitive process that is going to have long term implications, so we have to make sure we'll do it the right way. The two current options in play are **Tokemak** and **Balancer Liquidity Bootstrapping Pool**. Both options allow for smooth price discovery, have reasonable capital requirements, no explicit smart contract risk, and solid UX.

## Staking

**Staking** is where the $SPR holders can earn interest on their investment. The purpose of it is to stabilize the token price and reward those who believe in the project.

We are going to use the staking approach pioneered by _Illuvium_. After the launch of staking token holders will be able to stake/lock their $SPR into a smart contract that will yield $SPR rewards on a weekly basis. There are two ways how to go about it, with token locking or without. The duration of lock-up is up to the staker, and there is a rewards multiplier that increases the yields linearely. Minimum lenght is 1 week with a multiplier of 1x, maximum is 52 weeks with 2x multiplayer respectively. Unlike in regular staking, locked staking means that user won't be able to withdraw his staked token until the lock-up is over.

Staking rewards will be locked for 6 months, after that they will be available for redemption. Unclaimed rewards accumulate compounded interest.

Total amount of token allocated for staking rewards is **2,000,000 $SPR**. It will be released linearly over the span of 3 years after the start of staking. The staking APY is reduced as more $SPR is locked, yet at the same time due to less $SPR in circulation it's price rises up.

### Equation

The equation for a _weekly_ reward is:

$$
R_{p}=\frac{APY}{\left(\frac{365}{7}\right)}\cdot S\cdot m
$$

_Total reward_ is therefore:

$$
\sum_{p=1}^{p}R=R_{1}\ +\ R_{2}\ +\ ...\ +\ R_{p}
$$

$R$ is total reward  
$APY$ is annual percentage yield ($\%$)  
$p$ is periods elegible for rewards  
$S$ is staked **\$SPY**  
$m$ is rewards multiplier, calculated as $1+{p}\mathbin{/}{52}$, base is $1$

### Examples

Here are two example scenarios of staking assuming constant 50% APY:

Holder deposits 10 $SPR in a regular staking contract, he keeps it there for 6.5 weeks, after which he claims the reward and withdraws the staked $SPR. 6 valid rewards period have passed.

**Non-locked stacking**

$R=\left(\frac{50\%}{\left(\frac{365}{7}\right)}\cdot10\right)+...+R_{6}\ ≅\ 0.575$

The reward unlocked after vesting will be **~0.575 $SPR**

**Locked stacking**

$R=\left(\frac{50\%}{\left(\frac{365}{7}\right)}\cdot10\cdot1.11\right)+...+R_{6}\ ≅\ 0.638$

The reward unlocked after vesting will be **~0.648 $SPR**

## Treasury

_
If Spacerock is the blood of the Hyperblade DAO, then the Treasury is it's heart.
_

The purpose of treasury is to fuel the development and move the project forward. Salaries, equity and grants for prominent DAO members, as well as other expenses like marketing, server costs, tournament prize pools etc., is what treasury is for. It is essentially a smart contract where all of the DAO's wealth is stored. This is where the allocated **3,500,000 $SPR** are going to be held, as well as where the revenues will go to. Think of the treasury as of the main business account of the DAO.

The key principles for treasury are: inflows must exceed the outflows, diversification of assets, transparency on all levels, and putting development first.
DAO takes a vote on all major proposal regarding the treasury, including budgeting for a new project, additional game rewards, friendly token-swaps with other projects, purchase of stable-coins etc.

DAO does not have an 'expiration' date, and neither does the treasury. So therefore due to it's nature and the role it plays in the DAO, it requires pragmatic supervision and rational budgeting. And it is in our interest to recruit the best available talent to help us manage it.

## Revenue Model

Two most significant revenue sources are market fees and direct sales. Since the whole economy is $SPR based, users need to get some before they can interact with the ecosystem. The incoming revenue streams are going to the HB Treasury, and from there they are either distributed among $SPR holders or fund further project development.

#### Market fees

All of the market activity on HB Marketplace is taxed by the DAO. This includes: sales, resales, third-party NFT minting & market-placement etc.

#### Direct Sales

Direct sales of DAO commissioned NFTs: cosmetics & unique NFTs, including "non-playable" NFTs

#### DLC content & Battle-passes

We plan on releasing seasonal battle-passes for Hyperblade. Those will bring free content for all players, like themed seasonal maps, as well as more exclusive content for those who buy the battle-pass.

**Battle-passes will include:**

- Single-player chapters
- Limited-release NFTs
- In-game challenges
- Seasonal tournaments
- Themed maps

### Services for other developers

The robust ecosystem that we are building requires a lot of tooling. And because of the nature of blockchain, it's actually in our interest that some of it will be available for other developers as well.

HB Marketplace does not have to be limited only for HB items, later on third-party NFTs can be minted & traded here. The same goes for our in-house task management software. Some version of monetization would be introduced to offset the expenses.

We believe that by sharing what we build with others, we can make the whole blockchain ecosystem better.

## Blockchain integration

Hyperblade is one of the first mainstream-ready games on **Ethereum blockchain**. So besides developing the game, we are putting HB economy on the chain, meaning that all of the $SPR activity, NFT trade, and pretty much everything else is tied to Web3 account ownership. And by choosing Ethereum we are going with the most promising blockchain that has the biggest market, as well as all functionality and security that we need. ETH 2.0 with decentralized Proof-of-Stake will use at least ~99.95% less energy post update[^1], making it, and therefore Hyperblade, truly environmentally friendly. But building on Ethereum comes with certain trade-offs.

[^1]: https://blog.ethereum.org/2021/05/18/country-power-no-more/

All of the transactions on Ethereum are a subject to an 'gas cost' which is, simply put, computational effort to perform the transaction multiplied by 'gas price'. In turn, gas price is dictated by the current market demand for transactions/smart contract execution and is paid in Ether (Ethereum native token). This cost as of lately has been brutal. Minting a basic NFT as of Sept 9 2021 costs as much as ~200 USD. This is not feasible at all, especially for a game like Hyperblade that requires a large amount of transactions for the best user experience.

Based on that, Hyperblade has to be integrated with **Layer 2**. Layer 2 is an umbrella term for any kind of scaling solution for a blockchain. L2s have generally super cheap transactions, low latency, and high level of security. Ethereum is currently going all in on Layer 2, both apps and users are already coming on one L2 or another. However, we are just in the beginning of Layer 2 Ethereum which means drawbacks. Notably: smart-contract risk, confusing UX, and cross-layer fragmentation.

Main issue for people actually using L2 is very raw on-boarding experience. Right now to get on a L2 (e.g. Optimism, Arbitrum or Polygon side-chain) user has to first manually add L2 to their wallet, authorize it, and then migrate their tokens to this L2. All of this comes with extra gas costs on Layer 1.
The user experience will get better in near future as wallets get more advanced, but this is where we currently are.

### Hyperblade on Layer 2

For Hyperblade, having premier user experience means being on Layer 2 from the beginning. Our current choice would be **Arbitrum** or **Polygon**, due to the blockchain innovating astonishingly fast, Hyperblade could be on a **ZK Rollup** as well _(or even multiple Layer 2's)_.

What this achieves is a set up where player connects their Web3 wallet like _Metamask_ to Hyperblade on L2, and then interacts seamlessly with the ecosystem. Notably, the premise of seamlessness means: fast and secure transactions, waived gas fees, uninteruptible access to the market and ability to easily get on and off the chain.

<br/>

### Planned Blockchain Features On-Release

<ul className="list-enlarged">
	<li>Seamless on/off ramps from Layer 1/fiat currencies/exchanges</li>
	<li>Non-custodial account ownership</li>
	<li>Cheap transactions with gas subsidised by HB DAO (including NFT trade)</li>
	<li>DeFi - staking, liquidty providing, lending</li>
	<li>DAO governance</li>
	<li>NFT unwrapping to Layer 1</li>
</ul>

Duel to earn rewards, NFT trade, player-to-player interactions and such are all accessible for everybody. Blockchain is now abstracted away, and gas costs are not interfering with the way players interact in the world of Hyperblade. Yet at the same time decentralization, immutability, security are still guaranteed by the blockchain.

Hyperblade NFTs are pre-minted on Layer 1 of Ethereum, and then sent in batches via wrapped contracts to L2. From there on, all of the subsequent transactions are on L2 with all of the benefits that it brings. NFT owners are then able to 'unwrap' the NFT on Layer 1 and continue from there.
