---
sidebar_position: 3
---

# Blockchain & Tokenomics

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TextStyled from "../src/components/CustomReactComponents";

Hyperblade is built as blockchain-first game, and therefore sound economical design of its ecosystem is essential for both short and long term sustainability.

The project features multi-token Ethereum based economy, **Spacerock** serves as the main governance/monetary token, and **Timeore** as the Duel-to-Earn (Play-to-Earn) reward vehicle.

## Duel-to-Earn

The unique value proposition of Hyperblade is the possibility to earn tokenized rewards by playing a game with conventional, entertainment oriented gameplay.
Hyperblade coins its own term for that: **Duel-to-Earn**.

In contrast to the earlier Play-to-Earn experiments, Hyperblade benefits directly from the value the players contribute, i.e. time and effort they put into the game.
Winning over equally (or higher) skilled opponents, completing a specific amount of matches for a given week, or finishing seasonal challenges are the types of activities that yield tokenized Duel-to-Earn rewards. Duel-to-Earn therefore promotes winning gameplay and constant participation, which in turn makes the Hyperblade's multiplayer fun and engaging.

The initial version of Duel-to-Earn gives players an opportunity to earn **Timeore** ERC-20 tokens and **NFT Loot Crates** by playing the **[Ranked Mode](Game#Ranked)**, where the rewards accumulate in the span of a week and then get transferred to the appropriate Ethereum wallet.
Timeore is then 'burned' to open NFT Loot Crates (resulting in a verifiably randomized NFT item drop), to modify an existing NFT, or to join higher-level Ranked matches.

Timeore's full compliance with ERC-20 specification allows for further expansion of its functionality as well as for unrestricted secondary market to exist. The utility of Timeore gives it an intrinsic purpose and therefore an actual economic value.

The supply of Timeore is controlled by the Hyperblade DAO, which sets the amount of $TMO available for D2E rewards in the current time-period (52 weeks initially). With the supply of both Timeore and NFT Loot Crates being limited, the yields will be diminishing as the player-count increases.

Because the significant economic implications of Duel-to-Earn, it's essential to practice due diligence while implementing this feature.
Two key priorities are economic stability of the ecosystem, and fairness of the rewards' distribution - considering both varying player head-count and long-term sustainability.
The nature of tokenized rewards implies that the participants will try to maximize their yields by any means, therefore it's important to prevent bad actors from abusing the system and getting an unfair advantage over their peers.
Behavior like cheating, fixing matches, botting, idling and such is not only discouraged, but accounted for during the game design stage. However, active moderation is still required, adding up to the list of DAO's responsibilities.

## Spacerock overview

Spacerock ($SPR) is an ERC-20 token and native currency of the Hyperblade universe. It is managed by Hyperblade DAO, and has a total possible supply of 10,000,000 $SPR, distributed in a fair and transparent manner.
Spacerock is the cornerstone of the DAO governance and community-based ownership, as well as the primary medium of exchange in the Hyperblade economy. $SPR-holders are able to govern in a decentralized way, receive a share of redistributed profits, and earn through DeFi applications. [Governance](Governance) section goes in detail on how the DAO works.

## $SPR Allocation

Total possible Spacerock supply is **10,000,000 $SPR**

| Receiver        | Allocation % | Allocation $SPR | When    |
| --------------- | ------------ | --------------- | ------- |
| Team            | 15%          | 1,500,000       | Q1 2022 |
| Private Sale    | 12%          | 1,200,000       | Q1 2022 |
| Public Sale     | 8%           | 800,000         | Q2 2022 |
| Treasury        | 35%          | 3,500,000       | Q2 2022 |
| Staking Rewards | 20%          | 2,000,000       | Q2 2022 |
| Game Rewards    | 10%          | 1,000,000       | Q3 2022 |

Tokens issued to the **team** & **private sale investors** are subject to a 1-year lockup, **team** has additionally 2 more years of vesting with monthly release schedule.

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
	<li>Duel-to-Earn and swap $TMO for $SPR</li>
</ul>

## In-game currency

Besides being an investment vehicle, $SPR has intrinsic purpose of being the primary currency in Hyperblade ecosystem.

**All trades are facilitated in $SPR (or $ETH converted to $SPR on the spot).**

### Hyperblade Marketplace

Hyperblade Marketplace is where all the HB related purchases are being made. It's the market where players trade their NFTs as well as purchase DLC and other game-related items. It is directly accessible in Hyperblade as well as through a separate web app.

All trades are subject to a 4.5% fee that goes to HB Treasury. Gas fees are subsidized by the DAO (and low nonetheless because of the L2 integration).

The marketplace is also a platform for the creatives to sell their NFTs, earning from the sales of their items.

We want to promote active NFT-$SPR trade, as this is where significant portion of revenues will be coming from. And this is why we are adding functionality on top of basic trade, i.e. auctions, NFT reforging (like adding stickers or statistics on a sword) and more.

The [NFT](NFT) section goes deeper on NFTs and their role in HB universe.

## Liquidity

**Liquidity** is a necessary part of any healthy token economy. We're distributing **800,000 $SPR** during the public sale, which will be the first time $SPR will be available on the open market. Initial token sale is sensitive process that is going to have long term implications, so we have to make sure we'll do it the right way. The two current options in play are **Tokemak** and **Balancer Liquidity Bootstrapping Pool**. Both options allow for smooth price discovery, have reasonable capital requirements, no explicit smart contract risk, and solid UX.

## Staking

**Staking** is where the $SPR holders can earn interest on their investment. The purpose of it is to stabilize the token price and reward those who believe in the project.

We are going to use the staking approach pioneered by _Illuvium_. After the launch of staking token holders will be able to stake/lock their $SPR into a smart contract that will yield $SPR rewards on a weekly basis. There are two ways how to go about it, with token locking or without. The duration of lock-up is up to the staker, and there is a rewards multiplier that increases the yields linearly. Minimum length is 1 week with a multiplier of 1x, maximum is 52 weeks with 2x multiplayer respectively. Unlike in regular staking, locked staking means that user won't be able to withdraw his staked token until the lock-up is over.

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
$p$ is periods eligible for rewards  
$S$ is staked **\$SPY**  
$m$ is rewards multiplier, calculated as $1+{p}\mathbin{/}{52}$, base is $1$

<TextStyled fontSize="1.3rem" fontWeight="bold" >Examples</TextStyled>

Here are two example scenarios of staking assuming constant 50% APY:

Holder deposits 10 $SPR in a regular staking contract, he keeps it there for 6.5 weeks, after which he claims the reward and withdraws the staked $SPR. 6 valid rewards period have passed.

**Non-locked stacking**

$R=\left(\frac{50\%}{\left(\frac{365}{7}\right)}\cdot10\right)+...+R_{6}\ ≅\ 0.575$

The reward unlocked after vesting will be **~0.575 $SPR**

**Locked stacking**

$R=\left(\frac{50\%}{\left(\frac{365}{7}\right)}\cdot10\cdot1.11\right)+...+R_{6}\ ≅\ 0.638$

The reward unlocked after vesting will be **~0.648 $SPR**

## Treasury

The purpose of treasury is to fuel the development and move the platform forward. Salaries, equity and grants for prominent DAO members, as well as other expenses like marketing, server costs, tournament prize pools etc., is what treasury is for. It is essentially a smart contract where all the DAO's wealth is stored. This is where the allocated **3,500,000 $SPR** are going to be held, as well as where the revenues will go to.

The key principles for treasury are: inflows must exceed the outflows, diversification of assets, transparency on all levels, and putting development first.
DAO takes a vote on all major proposal regarding the treasury, including budgeting for a new project, additional game rewards, friendly token-swaps with other projects, purchase of stable-coins etc.

DAO does not have an 'expiration' date, and neither does the treasury. Therefore, due to its nature and the role it plays in the DAO, it requires pragmatic supervision and rational budgeting, it's in DAO's interests to recruit the best available talent to aid with Treasury management.

## Revenue Model

Two most significant revenue sources are market fees and direct sales. Since the economy is $SPR based, users need to get some before they can interact with the ecosystem. The incoming revenue streams are going to the HB Treasury, and from there they are either distributed among $SPR holders or used to fund further platform development.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Market fees</TextStyled>
<br/>

All the market activity on HB Marketplace generates fees for the DAO. This includes: sales, resales, third-party NFT minting & market-placement etc.

<TextStyled fontSize="1.3rem" fontWeight="bold" >Direct Sales</TextStyled>
<br/>

Direct sales of DAO commissioned NFTs: cosmetics & unique NFTs, including "non-playable" NFTs.

<TextStyled fontSize="1.3rem" fontWeight="bold" >DLC content & Battle-passes</TextStyled>
<br/>

We plan on releasing seasonal battle-passes for Hyperblade. Those will bring free content for all players, like themed seasonal maps, as well as more exclusive content for those who buy the battle-pass.

**Battle-passes will include:**

- Single-player chapters
- Limited-release NFTs
- In-game challenges
- Seasonal tournaments
- Themed maps

<TextStyled fontSize="1.3rem" fontWeight="bold" >Services for other developers</TextStyled>
<br/>

The robust ecosystem that we are building requires a substantial amount of tooling. And due to nature of blockchain and how it's core values are often aligned with the values of the open-source community, Hyperblade adopts similar stance on software developers. The infrastructure elements are developed using open-source components, and what is the result of that is made available for the rest of the community to build on top of. This benefits the blockchain ecosystem as a whole, and open-sourced elements can be further improved with the contribution of the community, resulting in notably better security and functionality.

Even with main infrastructure repositories being freely available to be forked, third-party projects might want to directly use Hyperblade infrastructure as it is without having to maintain the systems themselves. Hyperblade DAO then can provide Infrastructure-as-a-Service to other developers,
e.g. HB Marketplace can be expanded to include third-party NFTs listings, including minting and modification.

We believe that by sharing what we build with others, we can make the whole blockchain universe better and that is why we embrace the open-source mentality with everything that it comes with.

## Blockchain integration

Hyperblade is one of the first mainstream-ready games on **Ethereum blockchain**. So besides developing the game, we are putting HB economy on the chain, meaning that all $SPR activity, NFT trade, and pretty much everything else is tied to Web3 account ownership. And by choosing Ethereum we are going with the most promising blockchain that has the biggest market, as well as all functionality and security that we need. ETH 2.0 with decentralized Proof-of-Stake will use at least ~99.95% less energy post update[^1], making it, and therefore Hyperblade, truly environmentally friendly. But building on Ethereum comes with certain trade-offs.

[^1]: https://blog.ethereum.org/2021/05/18/country-power-no-more/

All the transactions on Ethereum are a subject to an 'gas cost' which is, simply put, computational effort to perform the transaction multiplied by 'gas price'. In turn, gas price is dictated by the current market demand for transactions/smart contract execution and is paid in Ether (Ethereum native token). The increasing number of users and applications, and therefore the volume of transactions, has been steadily pushing the 'gas cost' further up, e.g. minting a standard NFT costs as much as ~200 USD (_Sept 2021_) while in the past it would be as low as ~5 USD.
Applications such as games require a large amount of transactions to provide an optimal user experience and therefore the base level Ethereum is not a sustainable environment anymore.

Based on that, Hyperblade has to be deployed on **Layer 2**. Layer 2 is an umbrella term for any kind of scaling solution for a blockchain. L2s have generally cheap transactions, low latency, and high level of security. Ethereum ecosystem is embracing Layer 2, apps and users are already coming on one L2 or another. However, the process of shifting to Layer 2 is in its early stages, which means drawbacks. Notably: _smart-contract risk, non-streamlined UX, and cross-layer fragmentation_.

The main issue for users coming to Layer 2 is very raw on-boarding experience. Right now to get on an L2 (e.g. _Optimism_, _Arbitrum_ or _Polygon side-chain_) user has to first manually add L2 to their wallet, authorize it, and then migrate their tokens to this L2, where every action incurs a gas cost paid in Layer 1 Ether.
Empirically, the user experience gradually improves as the ecosystem matures, which also applies to Layer 2 solutions. In near future as wallets and on-ramp solutions will enhance their functionality, and Hyperblade favors using a custom solution for seamless access to the ecosystem straight out the box.

### Hyperblade on Layer 2

For Hyperblade, having premier user experience means being on Layer 2 from the beginning. The current evaluation of available L2 solutions favors **Arbitrum** or **Polygon**, yet with the tempo of Layer 2 development across the board being astonishingly rapid, Hyperblade could be on implemented natively on one of the upcoming **ZK Rollups** or even _multiple Layer 2's_.

What this achieves is a set-up where player connects their Web3 wallet like _Metamask_ or _Argent_ to Hyperblade on L2, and then interacts seamlessly with the ecosystem. Notably, the premise of seamlessness means: fast and secure transactions, HB DAO subsidized gas fees, uninterruptible access to the market and ability to easily get on and off the chain.

### Hyperblade DEX

With user experience being one of the key priorities, Hyperblade DAO has to be ready to deploy appropriate infrastructure solutions if needed. A separate decentralized exchange for Hyperblade tokens has to be considered, including integration with the Hyperblade Marketplace. The most viable solution is forking Uniswap V2, as it is both proven and readily available.

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

Duel to earn rewards, NFT trade, player-to-player interactions and such are all accessible for everybody. Blockchain is now abstracted away for end-users, and gas costs are not interfering with the way players interact in the world of Hyperblade. Yet at the same time decentralization, immutability, security are still guaranteed by the blockchain.

Hyperblade NFTs are pre-minted on Layer 1 of Ethereum, and then sent in batches via wrapped contracts to L2. From there on, all the subsequent transactions are on L2 with all the benefits that it brings. NFT owners are then able to 'unwrap' the NFT on Layer 1 and continue from there.
