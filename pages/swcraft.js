import { Container, Box, Heading, Text} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'

const SWCraft = () => (
   <Layout>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            SWCrafts
          </Heading>
  
  <p>        stock:</p>
  <p>tradeable: true</p>
  <p>ingredient: true</p>
  <p>01:</p>
    <p>name: Thread<p>
 <p> 02: </p>
 <p>   name: Stick </p>
  <p>03:</p>
    <p>name: Pelt</p>
  <p>04:</p>
   <p>name: Bone</p>
  <p>05:</p>
    name: Coal
  06:
    name: Charcoal
  07:
    name: Powder
  08:
    name: Iron Ore
  09:
    name: Cloth
  10:
    name: Silver Ore
  11:
    name: Bauxite
  12:
    name: Cord
    tradeable: false
    recipe:
      01: 7
      19: 1
  13:
    name: Magic Stone
  14:
    name: Wooden shaft
    tradeable: false
    recipe:
      07: 1
      02: 5
  15:
    name: Sapphire
  16:
    name: Solvent
  17:
    name: Ruby
  18:
    name: Hardener
  19:
    name: Steel
    recipe:
      08: 2
      07: 2
  20:
    name: Leather
    recipe:
      03: 4
  21:
    name: Bone Powder
    recipe:
      04: 4
  22:
    name: String
    recipe:
      02: 3
  23:
    name: Coke
    recipe:
      05: 3
      06: 3
  24:
    name: Purified powder
    tradeable: false
    recipe:
      21: 2
      07: 2
      13: 1
  25:
    name: Silver alloy
    tradeable: false
    recipe:
      24: 1
      10: 1
      19: 1
  27:
    name: Steel mold
    tradeable: false
    recipe:
      08: 2
      07: 2
      22: 2
  28:
    name: Silver mold
    tradeable: false
    recipe:
      23: 2
      10: 2
      22: 2
  29:
    name: Blacksmith Frame
    mana: 50
    tradeable: false
    recipe:
      11: 5
      24: 3
      28: 1
  30:
    name: Artisan Frame
    mana: 50
    tradeable: false
    recipe:
      11: 5
      24: 3
      27: 1
  31:
    name: Rope
    recipe:
      22: 1
      01: 4
  32:
    name: Silver Frame
    tradeable: false
    mana: 30
    recipe:
      10: 5
      07: 5
      25: 3
  33:
    name: Metal plate
    recipe:
      08: 3
      07: 3
      02: 3
  34:
    name: Metallic fiber
    mana: 30
    tradeable: false
    recipe:
      10: 15
      12: 2
  35:
    name: Crafted leather
    mana: 30
    tradeable: false
    recipe:
      20: 4
      05: 4
      12: 1
  36:
    name: Resurrection Mix
    tradeable: false
    ingredient: false
    recipe:
      04: 50
      03: 20
      13: 3
      24: 1
crafting:
  tradeable: false
  ingredient: true
  r01:
    name: Champion Sword recipe
  k01:
    name: Champion blade
  r02:
    name: Trident recipe
  k02:
    name: Trident blade
  r03:
    name: Hunter Bow recipe
  k03:
    name: Hunter shaft
  r04:
    name: War hammer recipe
  k04:
    name: War hammer head
  r05:
    name: Hunter Dagger recipe
  k05:
    name: Hunter blade
  r06:
    name: Order Armor recipe
  k06:
    name: Order Armor piece
  r07:
    name: Order Helmet recipe
  k07:
    name: Order Helmet fragment
  r08:
    name: Order Boots recipe
  k08:
    name: Order Boots part
  r09:
    name: Order Gauntlets recipe
  k09:
    name: Order Gauntlets part
  r10:
    name: Order shield recipe
  k10:
    name: Order shield part
  r11:
    name: Hunter Armor recipe
  k11:
    name: Hunter Armor part
  r12:
    name: Hunter Helmet recipe
  k12:
    name: Hunter Helmet fragment
  r13:
    name: Hunter Boots recipe
  k13:
    name: Hunter Boots part
  r14:
    name: Hunter Gloves recipe
  k14:
    name: Hunter Gloves part
  r15:
    name: Clarity Robe recipe
  k15:
    name: Clarity Robe piece
  r16:
    name: Clarity Circlet recipe
  k16:
    name: Clarity Circlet fragment
  r17:
    name: Clarity Shoes recipe
  k17:
    name: Clarity Shoes part
  r18:
    name: Clarity Bracers recipe
  k18:
    name: Clarity Bracers part
  r19:
    name: Thundersoul Sword Recipe
  k19:
    name: Thundersoul Blade
  r20:
    name: Doomblade Sword Recipe
  k20:
    name: Doomblade Blade
  r21:
    name: Eclipse Recipe
  k21:
    name: Eclipse Blade
  r22:
    name: Guard's Spear Recipe
  k22:
    name: Guard's Blade
  r23:
    name: King's Defender Recipe
  k23:
    name: King's Defender Blade
  r24:
    name: Raging Lance Recipe
  k24:
    name: Raging Lance Blade
  r25:
    name: Composite Bow Recipe
  k25:
    name: Composite Bow Shaft
  r26:
    name: Lightning Bow Recipe
  k26:
    name: Lightning Bow Shaft
  r27:
    name: Hailstorm Bow Recipe
  k27:
    name: Hailstorm Bow Shaft
  r28:
    name: Imperial Axe Recipe
  k28:
    name: Imperial Axe Head
  r29:
    name: Skull Crusher Recipe
  k29:
    name: Skull Crusher Head
  r30:
    name: Dragon Mace Recipe
  k30:
    name: Dragon Mace Head
  r31:
    name: Ghost Dagger Recipe
  k31:
    name: Ghost Blade
  r32:
    name: Lion Knife Recipe
  k32:
    name: Lion Blade
  r33:
    name: Crusader Armor Recipe
  k33:
    name: Crusader Armor Piece
  r34:
    name: Crusader Helmet Recipe
  k34:
    name: Crusader Helmet Fragment
  r35:
    name: Crusader Boots Recipe
  k35:
    name: Crusader Boots Part
  r36:
    name: Crusader Gauntlets Recipe
  k36:
    name: Crusader Gauntlets Part
  r37:
    name: Crusader Shield Recipe
  k37:
    name: Crusader Shield Part
  r38:
   name: Royal Armor Recipe
  k38:
    name: Royal Armor Piece
  r39:
    name: Royal Helmet Recipe
  k39:
    name: Royal Helmet Fragment
  r40:
    name: Royal Boots Recipe
  k40:
    name: Royal Boots Part
  r41:
    name: Royal Gauntlets Recipe
  k41:
    name: Royal Gauntlets Part
  r42:
    name: Royal Shield Recipe
  k42:
    name: Royal Shield Part
  r43:
    name: Ghost Armor Recipe
  k43:
    name: Ghost Armor Part
  r44:
    name: Ghost Helmet Recipe
  k44:
    name: Ghost Helmet Fragment
  r45:
    name: Ghost Boots Recipe
  k45:
    name: Ghost Boots Part
  r46:
    name: Ghost Gloves Recipe
  k46:
    name: Ghost Gloves Part
  r47:
    name: Lion Armor Recipe
  k47:
    name: Lion Armor Part
  r48:
    name: Lion Helmet Recipe
  k48:
    name: Lion Helmet Fragment
  r49:
    name: Lion Boots Recipe
  k49:
    name: Lion Boots Part
  r50:
    name: Lion Gloves Recipe
  k50:
    name: Lion Gloves Part
  r51:
    name: Demon Robe Recipe
  k51:
    name: Demon Robe Piece
  r52:
    name: Demon Circlet Recipe
  k52:
    name: Demon Circlet Fragment
  r53:
    name: Demon Shoes Recipe
  k53:
    name: Demon Shoes Part
  r54:
    name: Demon Bracers Recipe
  k54:
    name: Demon Bracers Part
  r55:
    name: Divine Robe Recipe
  k55:
    name: Divine Robe Piece
  r56:
    name: Divine Circlet Recipe
  k56:
    name: Divine Circlet Fragment
  r57:
    name: Divine Shoes Recipe
  k57:
    name: Divine Shoes Part
  r58:
    name: Divine Bracers Recipe
  k58:
    name: Divine Bracers Part
  r59:
    name: Storm Cloak Recipe
  k59:
    name: Storm Cloak Part
  r60:
    name: Durable Cloak Recipe
  k60:
    name: Durable Cloak Part
  r61:
    name: Blessed Cloak Recipe
  k61:
    name: Blessed Cloak Part
misc:
  tradeable: false
  100:
    name: Pouch of gold
    recipe:
      20: 2
      01: 12
  501:
    name: Wrapping
    recipe:
      09: 3
      22: 3
  502:
    name: Leash
    recipe:
      07: 20
      10: 20
      22: 10
equipment:
  tradeable: false
  tch:
    name: Torch
    mana: 80
    type: tool
    wear: secondary hand
    recipe:
      23: 1
      02: 5
  505:
    name: Wooden arrows pack
    mana: 80
    type: arrows pack
    wear: secondary hand
    recipe:
      02: 6
      08: 1
  511:
    name: Steel arrows pack
    mana: 120
    type: arrows pack
    wear: secondary hand
    recipe:
      02: 4
      19: 1
  513:
    name: Silver arrows pack
    type: arrows pack
    wear: secondary hand
    recipe:
      10: 5
      07: 5
      02: 7
  a27:
    name: Order Armor
    type: heavy armor
    wear: body
    att: 5
    def: 25
    recipe:
      23: 9
      33: 15
      r06: 1
      k06: 3
      31: 12
      15: 3
      28: 3
      16: 5
  a28:
    name: Order Helmet
    type: heavy armor
    wear: head
    att: 3
    def: 15
    recipe:
      23: 7
      33: 12
      k07: 3
      r07: 1
      31: 9
      15: 1
      28: 2
      16: 3
  a29:
    name: Order Boots
    type: heavy armor
    wear: legs
    att: 2
    def: 10
    recipe:
      23: 5
      33: 9
      k08: 3
      r08: 1
      31: 7
      28: 1
      16: 1
  a30:
    name: Order Gauntlets
    type: heavy armor
    wear: hands
    att: 2
    def: 10
    recipe:
      23: 5
      33: 9
      k09: 3
      r09: 1
      31: 7
      28: 1
      16: 1
  a31:
    name: Order Shield
    type: shield
    wear: secondary hand
    def: 10
    recipe:
      23: 7
      33: 7
      k10: 3
      r10: 1
      25: 15
      28: 1
  a32:
    name: Hunter Armor
    type: light armor
    wear: body
    att: 8
    def: 18
    recipe:
      23: 9
      k11: 3
      r11: 1
      20: 24
      31: 12
      15: 3
      28: 3
      16: 5
  a33:
    name: Hunter Helmet
    type: light armor
    wear: head
    att: 5
    def: 11
    recipe:
      23: 7
      k12: 3
      r12: 1
      20: 18
      31: 9
      15: 1
      28: 2
      16: 3
  a34:
    name: Hunter Boots
    type: light armor
    wear: legs
    att: 3
    def: 8
    recipe:
      23: 5
      k13: 3
      r13: 1
      20: 12
      31: 7
      28: 1
      16: 1
  a35:
    name: Hunter Gloves
    type: light armor
    wear: hands
    att: 3
    def: 8
    recipe:
      23: 5
      k14: 3
      r14: 1
      20: 12
      31: 7
      28: 1
      16: 1
  a36:
    name: Clarity Robe
    type: robe armor
    wear: body
    att: 4
    def: 20
    manaboost: 120
    recipe:
      k15: 3
      r15: 1
      23: 9
      20: 15
      31: 12
      15: 5
      28: 3
      16: 7
  a37:
    name: Clarity Circlet
    type: robe armor
    wear: head
    att: 2
    def: 12
    manaboost: 80
    recipe:
      k16: 3
      r16: 1
      23: 7
      20: 9
      31: 9
      15: 3
      28: 2
      16: 5
  a38:
    name: Clarity Shoes
    type: robe armor
    wear: legs
    att: 1
    def: 9
    manaboost: 40
    recipe:
      k17: 3
      r17: 1
      23: 3
      20: 7
      31: 5
      15: 1
      28: 1
      16: 3
  a39:
    name: Clarity Bracers
    type: robe armor
    wear: hands
    att: 1
    def: 9
    manaboost: 40
    recipe:
      k18: 3
      r18: 1
      23: 3
      20: 7
      31: 5
      15: 1
      28: 1
      16: 3
  a45:
    name: Crusader Armor
    type: heavy armor
    wear: body
    att: 10
    def: 32
    recipe:
      r33: 1
      k33: 5
      34: 32
      23: 13
      31: 17
      16: 15
      29: 5
      15: 9
  a46:
    name: Crusader Helmet
    type: heavy armor
    wear: head
    att: 6
    def: 19
    recipe:
      r34: 1
      k34: 5
      34: 27
      23: 9
      31: 12
      16: 7
      29: 3
      15: 5
  a47:
    name: Crusader Boots
    type: heavy armor
    wear: legs
    att: 4
    def: 12
    recipe:
      r35: 1
      k35: 5
      34: 21
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a48:
    name: Crusader Gauntlets
    type: heavy armor
    wear: hands
    att: 4
    def: 12
    recipe:
      r36: 1
      k36: 5
      34: 21
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a49:
    name: Crusader Shield
    type: shield
    wear: secondary hand
    att: 1
    def: 12
    recipe:
      r37: 1
      k37: 5
      25: 27
      23: 15
      33: 15
      16: 7
      29: 3
      15: 3
  a50:
    name: Royal Armor
    type: heavy armor
    wear: body
    att: 8
    def: 34
    recipe:
      r38: 1
      k38: 5
      34: 32
      23: 13
      31: 17
      16: 15
      29: 5
      15: 9
  a51:
    name: Royal Helmet
    type: heavy armor
    wear: head
    att: 5
    def: 20
    recipe:
      r39: 1
      k39: 5
      34: 27
      23: 9
      31: 12
      16: 7
      29: 3
      15: 5
  a52:
    name: Royal Boots
    type: heavy armor
    wear: legs
    att: 3
    def: 13
    recipe:
      r40: 1
      k40: 5
      34: 21
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a53:
    name: Royal Gauntlets
    type: heavy armor
    wear: hands
    att: 3
    def: 13
    recipe:
      r41: 1
      k41: 5
      34: 21
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a54:
    name: Royal Shield
    type: shield
    wear: secondary hand
    def: 13
    recipe:
      r42: 1
      k42: 5
      25: 27
      23: 15
      33: 15
      16: 7
      29: 3
      15: 3
  a55:
    name: Ghost Armor
    type: light armor
    wear: body
    att: 12
    def: 26
    recipe:
      r43: 1
      k43: 5
      35: 18
      23: 13
      31: 17
      16: 15
      29: 5
      15: 9
  a56:
    name: Ghost Helmet
    type: light armor
    wear: head
    att: 7
    def: 15
    recipe:
      r44: 1
      k44: 5
      35: 14
      23: 9
      31: 12
      16: 7
      29: 3
      15: 5
  a57:
    name: Ghost Boots
    type: light armor
    wear: legs
    att: 5
    def: 10
    recipe:
      r45: 1
      k45: 5
      35: 11
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a58:
    name: Ghost Gloves
    type: light armor
    wear: hands
    att: 5
    def: 10
    recipe:
      r46: 1
      k46: 5
      35: 11
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a59:
    name: Lion Armor
    type: light armor
    wear: body
    att: 14
    def: 24
    recipe:
      r47: 1
      k47: 5
      35: 18
      23: 13
      31: 17
      16: 15
      29: 5
      15: 9
  a60:
    name: Lion Helmet
    type: light armor
    wear: head
    att: 8
    def: 14
    recipe:
      r48: 1
      k48: 5
      35: 14
      23: 9
      31: 12
      16: 7
      29: 3
      15: 5
  a61:
    name: Lion Boots
    type: light armor
    wear: legs
    att: 6
    def: 9
    recipe:
      r49: 1
      k49: 5
      35: 11
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a62:
    name: Lion Gloves
    type: light armor
    wear: hands
    att: 6
    def: 9
    recipe:
      r50: 1
      k50: 5
      35: 11
      23: 7
      31: 9
      16: 3
      29: 1
      15: 1
  a63:
    name: Demon Robe
    type: robe armor
    wear: body
    att: 9
    def: 25
    manaboost: 165
    recipe:
      r51: 1
      k51: 5
      35: 11
      23: 13
      31: 17
      16: 21
      29: 5
      15: 12
  a64:
    name: Demon Circlet
    type: robe armor
    wear: head
    att: 5
    def: 15
    manaboost: 110
    recipe:
      r52: 1
      k52: 5
      35: 8
      23: 9
      31: 12
      16: 16
      29: 3
      15: 9
  a65:
    name: Demon Shoes
    type: robe armor
    wear: legs
    att: 4
    def: 10
    manaboost: 55
    recipe:
      r53: 1
      k53: 5
      35: 5
      23: 7
      31: 7
      16: 7
      29: 1
      15: 5
  a66:
    name: Demon Bracers
    type: robe armor
    wear: hands
    att: 4
    def: 10
    manaboost: 55
    recipe:
      r54: 1
      k54: 5
      35: 5
      23: 7
      31: 7
      16: 7
      29: 1
      15: 5
  a67:
    name: Divine Robe
    type: robe armor
    wear: body
    att: 8
    def: 26
    manaboost: 165
    recipe:
      r55: 1
      k55: 5
      35: 11
      23: 13
      31: 17
      16: 21
      29: 5
      15: 12
  a68:
    name: Divine Circlet
    type: robe armor
    wear: head
    att: 4
    def: 16
    manaboost: 110
    recipe:
      r56: 1
      k56: 5
      35: 8
      23: 9
      31: 12
      16: 16
      29: 3
      15: 9
  a69:
    name: Divine Shoes
    type: robe armor
    wear: legs
    att: 3
    def: 11
    manaboost: 55
    recipe:
      r57: 1
      k57: 5
      35: 5
      23: 7
      31: 7
      16: 7
      29: 1
      15: 5
  a70:
    name: Divine Bracers
    type: robe armor
    wear: hands
    att: 3
    def: 11
    manaboost: 55
    recipe:
      r58: 1
      k58: 5
      35: 5
      23: 7
      31: 7
      16: 7
      29: 1
      15: 5
  a71:
    name: Storm Cloak
    type: cloak
    wear: cloak
    att: 4
    def: 3
    recipe:
      r59: 1
      k59: 3
      35: 5
      23: 5
      31: 3
      16: 3
      29: 1
      15: 1
  a72:
    name: Durable Cloak
    type: cloak
    wear: cloak
    att: 3
    def: 4
    recipe:
      r60: 1
      k60: 3
      35: 5
      23: 5
      31: 3
      16: 3
      29: 1
      15: 1
  a73:
    name: Blessed Cloak
    type: cloak
    wear: cloak
    att: 2
    def: 2
    manaboost: 50
    recipe:
      r61: 1
      k61: 3
      35: 5
      23: 5
      31: 3
      16: 3
      29: 1
      15: 1
  w28:
    name: Champion Sword
    type: sword
    wear: primary hand
    att: 31
    recipe:
      k01: 3
      r01: 1
      23: 41
      18: 3
      33: 41
      17: 1
      25: 27
      27: 3
  w29:
    name: Trident
    type: spear
    wear: primary hand
    att: 16
    def: 14
    recipe:
      23: 41
      18: 3
      17: 1
      25: 27
      27: 3
      k02: 3
      r02: 1
      14: 41
  w30:
    name: Hunter Bow
    type: bow
    wear: primary hand
    att: 22
    def: 8
    recipe:
      23: 41
      18: 3
      k03: 3
      r03: 1
      17: 1
      25: 27
      27: 3
      14: 41
  w31:
    name: War hammer
    type: blunt
    wear: primary hand
    att: 15
    def: 15
    recipe:
      23: 41
      18: 3
      33: 41
      17: 1
      25: 27
      27: 3
      k04: 3
      r04: 1
  w32:
    name: Hunter Dagger
    type: dagger
    wear: secondary hand
    att: 10
    recipe:
      23: 7
      k05: 3
      r05: 1
      33: 7
      25: 15
      27: 1
  w33:
    name: Thundersoul Sword
    type: sword
    wear: primary hand
    att: 35
    recipe:
      r19: 1
      k19: 5
      33: 68
      23: 57
      25: 33
      18: 7
      30: 5
      17: 3
  w34:
    name: Doomblade Sword
    type: sword
    wear: primary hand
    att: 36
    def: 1
    recipe:
      r20: 1
      k20: 5
      33: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w35:
    name: Eclipse
    type: sword
    wear: primary hand
    att: 37
    recipe:
      r21: 1
      k21: 5
      33: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w36:
    name: Guard's Spear
    type: spear
    wear: primary hand
    att: 18
    def: 16
    recipe:
      r22: 1
      k22: 5
      14: 68
      23: 57
      25: 33
      18: 7
      30: 5
      17: 3
  w37:
    name: King's Defender
    type: spear
    wear: primary hand
    att: 18
    def: 17
    recipe:
      r23: 1
      k23: 5
      14: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w38:
    name: Raging Lance
    type: spear
    wear: primary hand
    att: 19
    def: 16
    recipe:
      r24: 1
      k24: 5
      14: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w39:
    name: Composite Bow
    type: bow
    wear: primary hand
    att: 25
    def: 9
    recipe:
      r25: 1
      k25: 5
      14: 68
      23: 57
      25: 33
      18: 7
      30: 5
      17: 3
  w40:
    name: Lightning Bow
    type: bow
    wear: primary hand
    att: 27
    def: 8
    recipe:
      r26: 1
      k26: 5
      14: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w41:
    name: Hailstorm Bow
    type: bow
    wear: primary hand
    att: 24
    def: 11
    recipe:
      r27: 1
      k27: 5
      14: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w42:
    name: Imperial Axe
    type: blunt
    wear: primary hand
    att: 17
    def: 17
    recipe:
      r28: 1
      k28: 5
      33: 68
      23: 57
      25: 33
      18: 7
      30: 5
      17: 3
  w43:
    name: Skull Crusher
    type: blunt
    wear: primary hand
    att: 18
    def: 17
    recipe:
      r29: 1
      k29: 5
      33: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w44:
    name: Dragon Mace
    type: blunt
    wear: primary hand
    att: 17
    def: 18
    recipe:
      r30: 1
      k30: 5
      33: 72
      23: 61
      32: 11
      18: 9
      30: 5
      17: 3
  w45:
    name: Ghost Dagger
    type: dagger
    wear: secondary hand
    att: 12
    def: 1
    recipe:
      r31: 1
      k31: 5
      25: 27
      23: 15
      33: 15
      18: 3
      30: 3
      17: 1
  w46:
    name: Lion Knife
    type: dagger
    wear: secondary hand
    att: 13
    recipe:
      r32: 1
      k32: 5
      25: 27
      23: 15
      33: 15
      18: 3
      30: 3
      17: 1
craftbook:
  1:
    mana: 10
    items:
      - 14
      - 19
      - 20
      - 21
      - 22
      - 23
      - 24
      - 31
      - 33
      - 36
      - 100
      - 501
      - 505
      - tch
  2:
    mana: 15
    items:
      - 12
      - 25
      - 27
      - 28
      - 502
      - 511
  3:
    mana: 150
    items:
      - 32
      - 34
      - 35
      - 513
      - a27
      - a28
      - a29
      - a30
      - a31
      - a32
      - a33
      - a34
      - a35
      - a36
      - a37
      - a38
      - a39
      - w28
      - w29
      - w30
      - w31
      - w32
  4:
    mana: 300
    items:
      - 29
      - 30
      - w33
      - w36
      - w39
      - w42
  5:
    mana: 500
    items:
      - a45
      - a46
      - a47
      - a48
      - a49
      - a50
      - a51
      - a52
      - a53
      - a54
      - a55
      - a56
      - a57
      - a58
      - a59
      - a60
      - a61
      - a62
      - a63
      - a64
      - a65
      - a66
      - a67
      - a68
      - a69
      - a70
      - a71
      - a72
      - a73
      - w34
      - w35
      - w37
      - w38
      - w40
      - w41
      - w43
      - w44
      - w45
      - w46
  x:
    mana: 0
    items:
          </Text>
      </Box>
    </Box>
</Layout>
)

export default SWCraft
