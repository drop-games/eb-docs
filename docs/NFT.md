---
sidebar_position: 5
---

import Link from '@docusaurus/Link';
import TextStyled from "../src/components/CustomReactComponents";

# NFT

## Why NFTs?

_
NFTs are changing gaming world as we know it. Players are for the first time the real owners of their items, ensured by the continuous integrity of the blockchain, and the untapped potential of NFTs in terms of their utility is one of the key focuses of Hyperblade development.
_

## NFTs in Hyperblade

NFTs are what makes Hyperblade a unique experience for each and every player, where it is of the first games that features regular and 3D NFTs, both usable in the game.

Hyperblade further takes an advantage of the trustless and permissionless blockchain asset ownership by incorporating NFTs in other major aspects of the ecosystem, such as assets that are not featuring visuals like _DLC_, _tournament tickets_ etc.
To accomodate the broad spectrum of utility that different types of items have, they follow both fungible (ERC-721) and semifungible (ERC-1155) token specifications[^1]. Token are pre-minted on Layer 1 Ethereum then transfered to Layer 2, where all of the user-facing activity is happening.

The way NFTs are integrated into Hyperblade is by taking their metadata, i.e. what makes each NFT unique, and using them as parameters for the game itself. Later on, the core NFT metadata e.g. model/texture will be migrated to _**IPFS**_. So with metadata residing directly on chain, the true asset ownership will be achieved. Brand new derivative projects can emerge now, even without Hyperblade DAO oversight. Players can now come together and build something completely unique and and groundbreaking, all with the NFTs they own. _We believe that this is the way NFTs should be, decentralized and with a vision for the future._

[^1]: non-fungible token and semi-fungible token are techically not the same, but for the sake of simplicity both are referred to as "NFT".

First NFTs in Hyperblade are designed by the core dev team, those will set the standard how the NFTs should look and play like. Later on, creatives will be free to join us in this process. The NFTs designed by third-party participants will have to go through DAO vote to get in the game/market. After that they are treated just like any other items made by core team itself.

Worth noting is that we strive for the best player experience, and this means absence of Pay-to-Win in general. None of the NFTs/items are giving the holder an unfair advantage over their opponents. You _cannot_ buy skill in Hyperblade.

### The Power of Utility

The three key values of Hyperblade NFTs are: **utility**, **artistry**, and **scarcity**. And while market got artistry and scarcity figured out already, the utility aspect is perhaps lagging behind. For Hyperblade, giving the items an actual _utility_ is how the project differentiates from it's competitiors.

- **Personalized Gameplay Experience** NFTs in Hyperblade are usable in the game itself. Fighters wield _their own_ swords, put on _their own_ armor and so on. And the same goes the other way, opponents also show up with their own equipment making every duel truly unique.
- **Singleplayer Integration** - Singleplayer is also where players will see the NFTs they own. During the playthrough, certain leveled items could be substituted with actual NFTs when it's fitting. Total immersion is what we're after, and defeating the final boss with the sword that is yours and yours only definitely adds up to the game atmosphere.
- **Metadata Mutation** - The more advanced NFTs like swords can have their metadata altered by performing certain actions. NFT can be mutated via added vanity like stickers and aura, traceable history, or _smithing_. And with the introduction of untradable NFTs, Hyperblade features artifacts that go from one player to another, e.g. a _Champion's Crown that goes from one reigning champ to the next one._
- **On-Chain Features** - Communities of the games powered by blockchain strive the most when there is plenty of options of to do, including extra usability of the NFTs. And this is why we allow, and even encourage, on-chain activity like lending, fractionalizing, wagering etc. all to that point, where Hyperblade NFTs could be usable in other games as well, starting with a possible second game set in the Hyperblade universe.

### Loot Crates & Item Rarity

Earning NFTs by playing comes through two channels: opening _fair_ loot crates, or getting the NFTs outright. Items and loot crates come in different rarity tiers, and each loot crate crate is guaranteed to have at least one item of the appropriate rarity level. To open a loot crate, players have to use the in-game currency **_Timeore_**.

We have 7 rarity tiers planned. Starting with the most basic 'Wooden' and ending up with 'Diamond'. Each

<ul className="list-enlarged">
	<li>Wooden</li>
	<li>Iron</li>
	<li>Silver</li>
	<li>Golden</li>
	<li>Platinum</li>
	<li>Emerald</li>
	<li>Diamond</li>
</ul>

Getting a NFT/loot crate in-game is done by achieving certain milestones like reaching a specific level/rank or by participating in weekly challenges and such. Furthermore, both of those categories are fully market integrated, and are tradable etc. in the line with other NFTs, creating yet another outlet for _Duel-to-Earn_.

### NFT Collections & Themes

Items are often for the sake of consistency grouped together in a collection, which is a series of items that share common style/properties.Missing items are now what collectors are hunting for; imagine having a body armor set that is missing just one pauldron. It is possible for one item to be a part of multiple collections.

### NFT Marketplace

The primary marketplace for HB NFTs will be Hyperblade Marketplace (detailed in [Blockchain](Blockchain#hyperblade-marketplace) section). Alternatively, the unwrapped Hyperblade NFTs can be traded on any other NFT market, such as OpenSea, Rarible etc.

The initial market offering of a NFT is done trough an Dutch Auction, to ensure the fair

## NFT Types

**Hyperblade NFTs** are fundamentally divided into the three categories:

<div className="pseudo-table">
	<div className="pseudo-table-row">
		<p className="pseudo-table-row-left-header" style={{minWidth: '13rem'}}>In-game tranferable</p>
		<p>
		The first category includes true NFTs like <b>Swords</b>, <b>Armor/Character Skins</b> or <b>Dojos</b>, those are valuable in and out of the game. What makes them special is that they are directly playable in Hyperblade, limited in issuance, and owners are able to whatver with them (e.g. importing the model in a game other than Hyperblade as an asset). The market will set the price for those items, and due to full compliance with NFT specifications those will be tradable even on third-party markets like <i>OpenSea</i> and such. Each of those items has both general metadata like name, icon or 3D model that will be stored in decentralized matter on <i>IPFS</i>, which will be what owner is in custody/charge of, and Hyperblade specific metadata like in-game statistics or minor accessories.
		</p>
	</div>
	<div className="pseudo-table-row">
		<p className="pseudo-table-row-left-header" style={{minWidth: '13rem'}}>In-game non-transferable</p>
		<p>
		In-game non-transferable items is the broad category that covers everything else that is, as the name suggests, available in the game and is tied to the owner's account. This is a classic mechanic of non-blockchain games, where player can get an item by playing/buying it and cannot resell it. DLCs, season passes, or minor vanity like custom UI elements or emotes are the examples of this.
		</p>
	</div>
	<div className="pseudo-table-row">
		<p className="pseudo-table-row-left-header" style={{minWidth: '13rem'}}>Other/Auxilliary</p>
		<p>
		Since Hyperblade is going to full extent of being a 'blockchain game', we utilize NFTs where they naturally work the best. Tounament tickets are the prime example of this, especially tickets with in-person attendance. Anybody can purchase a ticket and then can resell it if they want to, all on the blockchain.
		</p>
	</div>
</div>

### Swords

In the beginning, player starts with a basic wooden sword, a _bokken_. This starter sword does not hold much of a value as it is, but this changes as the player progresses trough the ranks. Later on this sword can be re-forged using in-game currency becoming unique, therefore rare and valuable.
Player also obtain extra swords from the Hyperblade Market or trough opening Loot Crates.
Swords are then put into 7 tiers of increasing rarity, where the top ones are almost impossible to get by the regular means.

Each sword has a unique, randomly generated, skin. Those skins can differ in 'wear level', color shade, or sporadicaly, sword can have a special property e.g. a blue static glow. On top of this, swords can be further customized with 'stickers' and such, thus adding to the variety of the sword pool.

Additional metadata like 'kill-count' might be also integrated into the sword, so weapons now have their own history as well.

_
The visual qualities, personal history, and perhaps the sentimental value, is why we believe players will be appreciating the swords they have, in addition to possibility show off their personal achievements right on the blockchain.
_

### Armor & Character Skins

Armor & Skins, akin to **Swords** in terms of implementation have advanced ingame and on-chain functionality, where the main difference is different customization patterns for the wearables.
Characters have armor slots just like in classic RPG's like _The Elder Scrolls_ or such, and player has to collect all the pieces to have a complete set. Each character can have different types of armor and their own wardrobe customization. Further, there can be unique character skins that change how the character looks in general, not only limited to attire.

At this time armor serves as a way for players to visually personalize the characters in and out of the game with no effect on the actual gameplay.

### Dojo

One of the most exclusive NFTs that player can get is the _Dojo_. This is the most sacred possession of any player that can get it. There is only limited amount of existing Dojos, and each of them is unique. Players can join a server with the Dojo as the location and it's up to them who are they going to invite their Dojo. Owner can organize duels and tournaments here, as well as show off their Sword, Armor and _third-party NFT_ collection. _Expect to see real NFT art decorating the wall or custom soundtrack on entering the premises, owners can finally take pride in the virtual real estate they have._

## Hyperblade NFT Viewer App

To enhance the user experience of the first Hyperblade NFT owners we plan on releasing the **Hyperblade NFT Viewer** app, which allows the users to connect their Web3 wallets and see their Hyperblade NFTs right there. The app will be available for free on iOS/Android as well as online on <Link to="https://playhyperblade.com">playhyperblade.com</Link>. Here the users can see the swords they own, generate icons for the NFTs they already have and more.
