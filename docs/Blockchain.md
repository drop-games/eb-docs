---
sidebar_position: 3
---

# Blockchain & Tokenomics

In this section we explain the blockchain part of the Hyperblade and the mechanics behind it's main token - **the Spacerock**.

## Spacerock overview

Spacerock ($SPR) is an ERC-20 token and native currency of the Hyperblade universe. It is managed by Hyperblade DAO, and has a total possible supply of 50,000,000 $SPR. Spacerock is the cornerstone of the DAO governance, as well as the primary medium of exchange in Hyperblade economy. [Governance](Governance) section goes in detail on how the DAO works.

Since our goal is to make Hyperblade as accessible as it gets, it will be at least partially on Level 2 of Ethereum. Low transaction costs and easy on-boarding is what we're after.

---

**There are multiple ways one can get Spacerock by:**

- buying $SPR on an exchange
- staking
- selling NFTs on HB Marketplace
- participating in DAO governance
- completing dev tasks/bounties
- through partnering with the DAO
- playing the game

## Play-to-Earn

The core idea of Hyperblade that it is one of the first blockchain games with actual gameplay and mainstream appeal. And one of the biggest draws will be the possiblity to earn by playing the game.

Right now there are two solutions for Play-to-Earn in works. First scenario is rewards being paid out in $SPR, with funds coming from the DAO treasury. The second option is to have a separate token solely for in-game rewards.

$SPR rewards are easy to understand and imply streamlined redemption process. However, this might lead to $SPR price instability and inflation. To mitigate this, we're pondering bringing a second token - _Timeore_.

**Timeore**

Players earn Timeore by playing the game, this could be winning over higher ranked players in duel mode, grinding in singleplayer etc.

Later Timeore would be burned to open NFT loot boxes, mint NFTs, or upgrade items (re-forge swords). This utility makes Timeore valuable for NFT collectors, who now have to buy Timeore from the players, creating a market for it.

The supply of Timeore is controlled directly by Hyperblade DAO, making sure players are rewarded fairly irregardless of their headcount. $SPR is still used for DAO governance and revenue sharing, and now Timeore functions as another layer of protection from price volatility.

## In-game currency

Besides price of the token up and staking rewards distributed, $SPR has intristic purpose of being the currency in Hyperblade ecocystem.

All of the trades are facilitated in $SPR (or $ETH converted to $SPR on the spot).

### Hyperblade Marketplace

Hyperblade Marketplace is where all of the HB related purchases are being made. It's a market where players trade their NFTs as well as purchase DLC and other game-related stuff.
It will be directly accessible in HB games as well as through a separate app on the web.

$SPR is an exclusive currency of the Marketplace. All P2P trades are subject to 4.5% fee; half of it goes to HB Treasury and the rest to NFT creators. Creators also often get to set the NFT price themselves, where the proceeds from the initial sale go directly to them.

Gas fees are subsidised by the DAO (and low nontheless because of L2 integration)

We want to promote active NFT/\$SPR trade, as this is where significant portion of revenues will be coming from.

The [NFTs](NFT) section goes deeper on NFTs and their role in HB universe.

## Revenue Model

Two most significant revenue sources are market fees and direct sales. Since the whole economy is $SPR based, users have to buy it to do basically anything. The incoming revenue streams are then used to repurchase $SPR token from DEXes. The reasoning behind this is to put upward pressure by decreasing token availability. The less $SPR is there, the more it's worth.

### Market fees

HB Marketfees activity is always taxed by the DAO, fixed % is substracted from all trades on the market and goes back to the treasury.

### Direct Sales

Direct sales of DAO comminisioned NFTs: cosmetics & unique NFTs, including "non-playable" NFTs

### DLC content & Battle-passes

Classic source of revenue through all of the history of gamedev.

We plan to release an immersive single player campaign coming with seasonal battle-passes.

### Services for other developers

The robust ecosystem that we are building requires a lot of tooling. And because of the nature of blockchain, it's actually in our interest that some of them will be available even for other developers.

Like, HB Marketplace does not have to be limited only for HB items, later on third-party NFTs can be minted & traded here. The same goes for our in-house task management software. Some version of monetization can be introduced to offset the expenses.

We believe that by sharing what we build with others, we will be able to make the whole blockchain world better.

## Liqidity

Liquidity is a necessary part of any healthy token economy. We're distributing 4,000,000 $SPR during the public sale, which will be the first time $SPR will be available on the open market. Initial token sale is sensitive process that is going to have long term implications, so we have to make sure we'll do it the right way. The two current options in play are Tokemak and Balancer Liquidity Bootstrapping Pool. Both options allow for smooth price discovery, have reasonable capital reqirements, no explicit smart contract risk, and solid UX.

## Staking

Staking is where the $SPR holders can earn interest on their investment. The purpose of it is to stabilize the token price and reward those who believe in the project.

We are going to use the staking approach pioneered by Illuvium. After the launch of staking token holders will be able to stake/lock their $SPR into a smart contract that will yield $SPR rewards on a weekly basis. There are two ways how to go about it, with with locking or without. The duration of lock-up is up to the staker, and there is a rewards multiplier that increases the yields linearely. Minimum lenght is 1 week with a multiplier of 1x, maximum is 52 weeks with 2x multiplayer. Unlike in regular staking, locked staking means that user won't be able to withdraw his staked token until the lock-up is over.

Staking rewards will be locked for 6 months, after that they will be available for redemption. Unclaimed rewards accumulate compounded interest.

Total amount of $SPR allocated for staking rewards is 7,500,000. It will be released over the span of 3 years after the start of staking.

### Equation

$$
R=\frac{APY}{\left(\frac{365}{7}\right)\cdot p}\cdot S\cdot m
$$

The equation has following: $R$ is total reward, $APY$ is annual percentage yield, $p$ is elegible periods for rewards, $S$ is staked \$SPY, $m$ is rewards multiplier (which is in turn $1+\frac{p}{52}$)

### Examples

Here are two example scenarios of staking assuming fixed 50% APY:

Holder deposits 10 $SPR in a regular staking contract, he keeps it there for 6.5 weeks, after which he claims the reward and withdraws the staked $SPR. 6 valid rewards period have passed.

**Non-locked stacking**

$$
R=\frac{50\%}{\left(\frac{365}{7}\right)\cdot 6}\cdot 10
$$

The reward unlocked after vesting will be **~0.57 $SPR**

**Locked stacking**

$$
R=\frac{50\%}{\left(\frac{365}{7}\right)\cdot }\cdot 10\cdot 1.11
$$

The reward unlocked after vesting will be **~0.64 $SPR**

## Treasury

If Spacerock is the blood of the Hyperblade DAO, then the Treasury is its heart.

The treasury is essentially a smart contract where all of the DAO's wealth is stored. This is where the unissued $SPR is held.

Salaries + equity or grants for developers, investments.

DAO does not have an 'expiration' date, and so doesn't the treasury. Inflows > outflows. Diversification (tokenswaps, stablecoins)
$SPR buybacks
Transparency

Treasury is the most valued asset of the DAO, so it's in our interest to recruit the best available talent to help us managing it.

## $SPR Allocation

<!-- styled in custom.css -->

Total possible Spacerock supply is 50,000,000 $SPR

| Receiver        | Allocation % | Allocation $SPR | When    |
| --------------- | ------------ | --------------- | ------- |
| Team            | 15%          | 7,500,000       | Q4 2021 |
| Private Sale    | 12%          | 6,000,000       | Q1 2022 |
| Public Sale     | 8%           | 4,000,000       | Q2 2022 |
| Treasury        | 35%          | 17,500,000      | Q2 2022 |
| Staking Rewards | 20%          | 10,000,000      | Q2 2022 |
| Game Rewards    | 10%          | 5,000,000       | Q3 2022 |

Tokens issued to the team & private sale investors are subject to a lock up and vesting schedule.

_token graph_

## Layer 2 & "Cost-to-play"

Hyperblade is one of the first 'big' games on the Ethereum blockchain. We are putting all of the economics on the chain, meaning all of the $SPR activity, NFT creation and trade, and everything else tied to account ownership. By going with Ethereum we are choosing most promising blockchsin that has all of the functionality and security that one might need, but with some trade-offs. All of the transactions are a subject to an 'gas cost' which is simply put amount of bytes in this smart contract multiplied by 'gas price' that is based on current market demand (all paid in Ether, Ethereum native token). This cost as of lately has been brutal. Cost to mint a basic NFT as of Sept 9 2021 was reaching ~200 USD. This is not feasible at all, especiallly for a game like Hyperblade that implies a large amount of transactions for the best user-experience.

Based on that, we have to go on Layer 2. Layer 2 is an umbrella term for any kind of scalling solution for a blockchain, and also the direction where the whole Ethereum ecosystem is heading. L2 have generally super cheap transactions, low latency, and high level of security. The issue with L2 that the user experience is not as polished like in base-layer Ethereum. Right now to get on a L2 (e.g. Optimism, Arbitrum or Polygon side-chain) one has to first authorize the project, and then migrate their token to this L2. And all of this means more expenses on base level, paid with Ether directly. So even thought working inside of L2 is easy and cheap, it's still )

Since the revenue comes mainly from fees and content sales,

while in the closed beta you have to buy your way in to play the game, thus getting early revenue & keeping the playerbase manageable

Later on Free-to-Play

<!-- ## Voting & ELO token _(yeah Tim, this will be better for HIP)_

Kicks in later with full Hyperblade DAO adoption, playerz only. Populares

Earn this token by playing the game and winning over players, classic ELO scoring system. Easy to understand for players coming from other games. (Winning over better players gives you more $ELO than over lower ranked opponents).

$ELO is always tied to players account/blockchain address.

Players will vote only on gameplay affecting decision (balance, etc), quadratic voting with delegation. Delegate (you can pick your favorite player on the leaderboard),

whoever can propose the change, the change will be added as a task to the DAO system, price will be set like in Gitcoin DAO, and covered by Hyperblade treasury, it should rise if nobody is taking/completing the task. After verifying the completion and validity (should reviewers be staking their $SPR token?) reward will be released from the escrow account.

_Who will be deciding on new content? $SPR or $ELO (i lean towards $SPR) players will dgaf about the cost of the implementation of their desired changes, and it won't be them paying out the bounties/rewards, as it will come out of the treasury-_

Vote and you will roll for an NFT (doesn't matter if delegated or not), you got to open your lootbox or it won't be activated
This roll will be based on your $ELO balance (not the tokens you were given delegation of), this gives top players way to earn even more as they can resell the NFTs

Drop Games will hold 200,000 token initially - frozen account, this will allow Drop Games to participate in the game affecting decision for smoother transition to DAO governance.

Every year there will be more token released and divided between current players (ELO system)

Year 0: 0

Year 1: 100,000

Year 2: 200,000

Year 3: 300,000

Year 4: 400,000

Year 5: 500,000

Year 6: 600,000

And so on

## Regarding Pay-to-Win

Hyperblade will always be accessible and fair to everyone irregards to how much capital they've put in.

# TOKEMAK overview

$TOKE

Liquidity provider deposits $SPR into Tokemak reactor, earn $TOKE. $SPR is deployed by Tokemak to different exchanges in various pairs, mitigating impermanent loss or LP.

$TOKE allows for Tokemak DAO governance and directing liquidity.

Liquidity director (new concept!) is a selected $TOKE holder who will stake their $TOKE to a reactor, getting voting power proportional to their staked $TOKE to direct to what exchanges the liquidity will go to.

The key concept is for LPs and LDs to pursue high APY on their tokens buy putting those tokens in a reactor with low token amount and therefore high APY, low $SPR count in comparison to $TOKE in the reactor means high yields for LPs and vice versa if the $TOKE amount is low compared to $SPR.

Assets are depo

Sometimes external Market Makers are needed to provide real-time asset pricing, these are called Pricers in Tokemak universe.

When you deposit a token to a reactor you get t(token), i.e. tSPR or tTOKE as a receipt of your deposit, use this newly minted token in DeFi ecosystem or burn it when you get your inital assets back.

Timeore (maybe)
Players get Timeore by playing the game (i.e. winning or som), no liquidity provided by HB DAO, emission is fixed: more players -> each gets less ore

Use/burn it in-game to open NFT crates, (mint NFTs), or upgrade (smith) swords.

or just sell it.

By keeping $SPR for general on-chain activity like DAO governance and staking income and having a separate token purely for in-game rewards we'll be able to manage the economy irregardless of the player headcount. The goal is to keep the inflation in check, and fairly reward player activity. -->

<!-- <Quote fontSize="1.4rem">We're building a whole new community-driven digital ecosystem. We're proving that game-dev can now be done the blockchain way.</Quote>

.

export const Quote = ({children, fontSize}) => (
<span
style={{
      fontStyle: 'italic'
    }}>
{"asd"}
</span>
); -->
