---
sidebar_position: 0
---

# List of contents

**To be deprecated; this is literally just a list of what should go to each page (+TLDR in intro)**

import TextStyled from "../src/components/CustomReactComponents";

<TextStyled fontSize='2rem' fontWeight='bold' textDecoration='underline' fontStyle='italic' color="var(--ifm-color-primary)" >TextStyled imported property</TextStyled>

**Intro**  
_this page provides global overview of the project_

core concept (tiny bit of story); core gameplay; explaning basics (TLDR); why blockchain; one full page cca 3 paragraphs; include some buzzwords; some custom made visuals

**Game**  
_Explanation for someone who WILL play the game_
Game setting
Story details, why it's important (sp), just a recap
Core gameplay mechanics - fighting, controls (mobile friendly), stances, weapon types, character archetypes
Swordplay - Directionality, parries & block, attack types, ragdoll, other stuff
Visual theme (hydrant) (arena locations will go here)
Sword & Character customization (images with different customizations on character model, incl variants  
esports ready and why it's importnant  
list/link roadmap topics

**Blockchain & Tokenomics**  
_specific blockchain-related mechanics + maths_

player ownership tldr -> governance & revenue sharing;

SPR - what is it -> ingame currency, hardcoded values (total amount of token),token economy,

how to get it, what to do w it - ingame economy - buying stuff (NFT & other),

SPR - mechanics -> play game - earn, (buy on markets), staking - what is the purpose (revenue redist & governance decentralization & rewarding for loyalty & bringing more people), where the funds are coming from - revenue (token buyback by DAO?) & staking pool/treasury, staking schedule - mechanics
LIQIDITY (Tokemak?)

revenue model (include burning tokens) - direct selling, market fees, other; tools & platforms for other projects  
allocation & vesting, what will each allocated part go to
DAO Treasury - purpose of it - expenses on development - maybe specific numbers

rounds of raising capital/token allocation (private sale, public sale & liquidity, minting?)

capital required to play (initially); game is not P2W, in the beginning you get bokken kendo wooden sword

Time ore as reward for players (future)

Token issuance curve ($SPR); token allocation & vesting curves; planned inflation; market fees curve; DAO profit sharing; DAO voting
Player rewards curve

**Governance**  
_HyperBlade DAO basics + principles_

Why DAO?
Current set up - development & voting & communication
Members - original team, $SPR holders, DAO communication (not only $SPR holders), council

$SPR holders vote for council
council - 7 quadratically voted in members; issues to vote on; supermajority; specific cases (members leaving, coercion, other); rewards for the service; how long will they serve

HIP explanation - any proposals for $SPR - staking/liquidity/rewards/collabs etc, big game-dev proposals, council members

voting for NFTs (free-for-all vote), what benefits it brings

separation of concerns - protocol changes (HIP), NFT voting, balance voting (ELO)

how development looks like (smaller than HIP related issues), meaning the game
Team members listed, who does what
Non-core team needed

How decentralization will be achieved and what will it give

**NFT**  
_Detailed explanation of NFTs_  
Drop Games NFTs; Community created NFTs; NFT types - Swords, Armor, Other, real estate; NFT Themes & Collections; NFT mutability (contract upgradability)
Any NFT can be voted in?
How to earn NFT - duel to earn -> get a lootbox, buy on market  
Temporarily held NFT (like a boxing belt for champs etc)
Third party NFT implementation (art in dojo, NFT music etc)
Creators earns how?

<!-- **Technical part**
_how the game is built_
specific aspects tying game to blockchain
UE5; contracts & audits; L2 solution used; risks; store specific; DAO mechanisms; how to make purchases; or sell stuff; more graphs of token/NFT etc

security; accessibility; censorship resistance; decentralization -->

**'The Gameplan' & Timeline**  
_the plan, how we are actually developing all of this_

Game + DAO + Tokenomics (in intro it was just a overview)
Developing HB
Marketing
Vision

PHASES 0,1,2,3,X

Needs & wants will go here

**Marketing/Community management**  
HyperBlade DAO: it's own website (what will it have), discord, reddit, youtube;  
Marketing: trailers; promo; paid tournaments; nft lottery; collabs with other projects

---

**Cool shit**  
Gambling (token & nft); Self-hosted tourneys; Launcher; Store; third-party services integration; real estate (DOJO) nfts (expand by winning?); play the game for someone else (Knight); quadratic voting; tools for creators (opensource); leaderboard NFT + vote delegation; income tracking board per account (tax purposes), Player voice -> ELO token

**Buzzwords**  
UE5; Free-to-Play; Cross-play & Cross-Platform; Mobile; esports; Blockchain; Ethereum; Level 2; Token; NFT; DAO; open source; divine intellect; stylized

**Experimental**  
deterministic gameplay (blockchain verified); switch from client<->server to client<->blockchain(road to serverless, P2P gaming)

**Maths**  
Token issuance curve ($SPR); token allocation & vesting curves; planned inflation; market fees curve; DAO profit sharing; DAO voting
Player rewards curve

<!-- Active player curves:

Three key values that Hyperblade NFTs have are: utility, artistry, and scarcity.
a = [(0,0),(1,1000),(2,2200),(3,2500),(4,3000),(5,4000),(6,3500),(7,3200),(8,4800),(9,6500),(10,7500),(11,7700),(12,7000),(14,6800),(18,26600),(20,30000),(22,32000),(24,28000),(26,26000),(28,40000),(30,20000),(32,15000),(34,11000),(36,12000)]

$$
\left(\frac{-3x^{3/2}}{x^{-1/3}}\right)^{3}
$$

Let $f:[a,b]  to  R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=\int_{a}^{x}f(t)dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$. -->

<!-- ---

Spacerock $SPR governance token, earned by staking/playing/NFT trade/completing tasks in Hypergraph. Keep your shit staked for set periods of time to earn even more $$$ (or even nfts!), LIST MORE INCENTIVES FOR PRICE TO MOON

Decentralized game with it's own universe, we aim for the players and creators to become the owners of the platform itself. Tokenholders will be able to participate in voting/creating tasks/get a revenue share (coming primary from sales fees/nft creation fees/yield farming/classic revenue stream)

Play to earn (how to get token), which incentivises players to play lol:
duel to earn
scheduled tourneys
participating in stuff like - voting (gov and NFT)
rewards for minting/creating NFT
reimbursing marketplace fees

In the near future, Drop DAO will be fully self managed as it should be all through Hypergraph.
Hypergraph is Drop's bleeding edge free-for-all project management platform, where tasks are linked in nodes. Earn $SPR by completing tasks (via Drop DAO)

Token Allocation & Release schedule:

1. DROP DAO Treasury
2. DROP Games (Drop corporation)
3. Market Sale (whether private/public)
4. Some mfers (advisors?)

Drop DAO allocates $SPR for:

1. Internal HB Economy
2. Token economy

x. Third party incentives (voted in by DAO)

**Voting:** \
Initally it's Drop Games calling all the shots, later the community will take the rule through the DAO

HOWEVER - it's actual players who should be guiding where the game goes gameplay-wise, since it's them who play the game
Voting on NFTs can involve $SPR holders

Quadratic voting with delegation is the preferred way of voting

**ELO Token:** \
Proposed idea: player-participation token - think ELO score, when players play the game they earn the token -> finishing matches, winning over better opponents in ranked, leaderboard with the list of players rated by ELO token. fixed rate hyperinflation (tokens earned this year will have half the voting power compared to the amount of tokens you'd earn by playing/winning the same amount of matches the next year) you can vote (quadratically) with this token, this leads to active players being able to participate in game-balance affecting decisions. Token is non-transferable (you can't sell it), but you can delegate your token to players you choose (i.e. select the player on the leaderboard with the same playstyle and give him your voting power).

## Roadmap

Well do tons of good shit over the time

##

Enter the game
At first (semi-closed game), there should be some capital reuquirement to play the game, which should be eventually lowered or abolished (after all we want to have a game thats accessible for all) -->

<!-- Duel to Earn
Community owned, DAO governance, players are involved in governance and receive a share from the earnings (they duel to earn, then stake their tokens)
Hyperblade = Blade Symphony with NFTs

Game First. Everything else is built as an infrastructure around it. Game must be fun to play. Game must be playable and accessible.

You fight opponenets with swords and earn monies that you can spend on NFTs n shit, players own their NFTS and are able to do anything with em.

This is a cool game because its on Unreal 5 and its free-to-play and will be opensource with fucking blockchain and NFT.

Connect with your metamask account, download the game **_Duel to earn_**

The point of this game is for players to enjoy the gameplay, posibilities to earn are just as important for the sake of us getting rich.



## Voting & ELO token _(yeah Tim, this will be better for HIP)_

Kicks in later with full Hyperblade DAO adoption, playerz only.

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



 -->

<!-- HB TODO (unordered):

HB DAO:

Game:
Finish the switch to UE5
Redo art in new unified style (hydrant)
New Player models -> customization (NFT)
Universal NFTs = swords, UI, more bullshit
Arenas
Trailers, promo material
Polish!
Consoles - PS5 & XS - possibly with NFTs
Mobile support - possibly with NFTs
Single player/MMO
More gamemodes

Blockchain:
Write & Verify new smart contracts
Wallet integration (mb our own wallet?)
Figure out tokenomics -> liquidity, staking, player-rewards
DROP DAO, allocation of token, treasury, vesting schedules
Player empowerments thru the DAO
NFT Store
NFT creating platform
Gambling

Websites -
HB DAO
Snapshot
Whitepaper HB

Part of HB DAO website:
Staking/Liquidity/Providing/Other token related stuff
$SPR tracking (include token allocation)

DROP DAO

Ideas pool:
DETERMINISTIC

2D Fighting game:
One of the principles that we are going with is constant expansion of the usability of the HB assets thus increasing their utility and intristic value. NFTs that were originally minted only for Hyperblade, could (and should!) be used outside of the HB in other games, possibly even outside of the HB universe. Also the same goes the other way around, third-party NFTs could be integrated in HB universe as well, inspiring the other projects to do the same, moving the whole blockchain space even further.

Hyperblade is the original game of the Hyperblade DAO, and as the primary focus the whole HB ecosystem is revolving around Hyperblade the game. This means that NFTs will be tailored for the needs of the project, including release schedule, scope and stylization. So based on the fact that the main NFT types are swords and character customization and that the game is a 3D fighter game, HB DAO can divert some of it's focus on a smaller scale game utilizing the same types of assets.

The most obvious concept would be a 2D platformer fighting game in the like of Super Smash Bros or Brawlstars.

The biggest constant for this type of game would be the use of the same NFTs which HB utilizes; however due to the nature of blockchain and it's immutability, original NFTs could be _expanded_ (as in contract could be upgraded) with other type of visuals. Alternatively the new game could process the visuals itself, where the base model in a particular NFT stay the same, but the game would show it differently.

Alternate NFT visuals could be done either by a pre-written script or manually. Either way has it's downsides and trade-offs.

Example case would be a mobile friendly 2D fighting game with stylized pixelated graphics and gameplay different to HB (closer to classic 2D platformer fighters like SSB/Brawlstars) that uses HB NFTs which models were converted to 2D graphics and given old-school pixel stylization.

HB DAO can allocate some of it's treasury for in-game rewards.

All of this would achieve increased utility for HB NFTs, expanding market for said NFTs and providing much needed marketing and income source for the DAO. -->
<img source='../static/img/game/Combos-dark-mode.png' alt='combos' />
