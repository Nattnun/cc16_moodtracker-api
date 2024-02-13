const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const emotionalDataHEU = [
  {
    // 1
    name: "Enraged",
    description: "made furious by something, filled with extreme anger",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 2
    name: "Terrified",
    description: "consumed by fear",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 3
    name: "Panic",
    description: "felling frantic and overcome by fear",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 4
    name: "Shocked",
    description: "experiencing extreme horror,disgust,and surprise",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 5
    name: "Impassioned",
    description: "filled with lots of emotion",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 6
    name: "Hyper",
    description: "feeling energetic  and like you want to move around",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 7
    name: "Livid",
    description: "feeling furious about something or someone",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 8
    name: "Irate",
    description: "feeling like your anger is almost out of control",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 9
    name: "Overwhelmed",
    description: "feeling like you have been taken over by strong feelings",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 10
    name: "Stressed",
    description:
      "strained mentally or emotionally from too many demands and not enough resources",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 11
    name: "Annoyed",
    description: "bothered by something displeasing or uncomfortable",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 12
    name: "Pressured",
    description: "feeling as if an important outcome depends on you",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 13
    name: "Furious",
    description: "full of extreme or wild anger",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 14
    name: "Frightened",
    description: "afraid or fearful",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 15
    name: "Anxious",
    description: "worried and uneasy about an uncertain outcome",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 16
    name: "Apprehensive",
    description: "fearing something that may happen in the future",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 17
    name: "Irritated",
    description: "slightly angry with or annoyed be an action or event",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 18
    name: "Restless",
    description: "unable to relax due to anxiety or boredom",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 19
    name: "Jealous",
    description:
      "feeling threatened that you're losing an important relationship",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 20
    name: "Scared",
    description: "feeling like something bad might happen",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 21
    name: "Angry",
    description: "Strongly bothered about a perceived injustice",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 22
    name: "Jittery",
    description: "feeling on edge and jumpy",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 23
    name: "Fomo",
    description: "feeling unable to make sense of something",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 24
    name: "Confused",
    description: "feeling of desire for something that someone else has",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 25
    name: "Envious",
    description: "feeling of desire for something that someone else has",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 26
    name: "Repulsed",
    description: "nauseated by someone or something",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 27
    name: "Frustrated",
    description: "upset because you cannot do something you want to do",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 28
    name: "Embarrassed",
    description:
      "self-conscious and uncomfortable about how you think others are perceiving you",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 29
    name: "Concerned",
    description: "wondering if someone or something is okay",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 30
    name: "Tense",
    description: "unable to relax",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 31
    name: "Contempt",
    description: "feeling a combination of anger and disgust",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 32
    name: "Troubled",
    description: "feeling worried about a problem or conflict",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 33
    name: "Worried",
    description: "troubled about actual or potential problems",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    //34
    name: "Nervous",
    description: "jumpy and worried about the future or an uncertain event",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 35
    name: "Peeved",
    description: "slightly irritated about something",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
  {
    // 36
    name: "Uneasy",
    description: "vague sense that something is wrong",
    emotionalGroup: "HIGH_ENERGY_UNPLEASANT",
  },
];

const emotionalDataHEP = [
  {
    // 1
    name: "Surprised",
    description: "caught off guard by something unexpected or unusual",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 2
    name: "Awe",
    description: "feeling like you are in the presence of something vast",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 3
    name: "Exhilarated",
    description: "in high spirit, cheerful and invigorate",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 4
    name: "Thrilled",
    description: "feeling very exited all of a sudden",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 5
    name: "Elated",
    description: "very joyful,proud,or enthusiastic",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 6
    name: "Ecstatic",
    description: "feeling the greatest amount of joy or happiness",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 7
    name: "Excited",
    description: "enthusiastic about something in the future",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 8
    name: "Determined",
    description:
      "knowing what you want and not letting anything stand in the way",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 9
    name: "Successful",
    description: "feeling like you achieved something important to you",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 10
    name: "Amazed",
    description: "feeling lost in wonder about a particular event",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 11
    name: "Inspired",
    description:
      "affected powerfully by something in a way that motivates you to do something",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 12
    name: "Empowered",
    description:
      "feeling stronger of more confident due to someone or something that happened",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 13
    name: "Energized",
    description: "feeling like you are wide awake and ready to get up and go",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 14
    name: "Eager",
    description: "impatiently wanting to do or get something",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 15
    name: "Enthusiastic",
    description: "highly interested in an idea or activity",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 16
    name: "Joyful",
    description: "feeling pleasure and in high sprits",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 17
    name: "Productive",
    description:
      "feeling like you are accomplishing your tasks or achieving your goals",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 18
    name: "Proud",
    description:
      "pleased with your own achievements or those of someone close to you",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 19
    name: "Cheerful",
    description: "full of happy feeling",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 20
    name: "Curious",
    description: "interested in learning something",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 21
    name: "Upbeat",
    description: "feeling high energy and bubbly",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 22
    name: "Happy",
    description: "very pleased and filled with joy",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 23
    name: "Motivated",
    description: "enthusiastic about doing something",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 24
    name: "Optimistic",
    description: "hopeful and confident about the future",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 25
    name: "Pleasant",
    description: "feeling mostly positive",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 26
    name: "Focused",
    description: "engaged in only one idea or activity",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 27
    name: "Alive",
    description: "filled with energy and vitality",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 28
    name: "Confident",
    description: "feeling sure of yourself",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 29
    name: "Engaged",
    description: "paying full attention or participating fully in something",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 30
    name: "Challenged",
    description: "feeling pushed to reach a higher goal",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 31
    name: "Pleased",
    description:
      "feeling content and happy about a particular situation or person",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 32
    name: "Playful",
    description: "feeling happy and lighthearted",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 33
    name: "Delight",
    description: "feeling lifted by joy",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 34
    name: "Wishful",
    description: "having or showing a wish, longing",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 35
    name: "Hopeful",
    description: "optimistic that something good will happen",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
  {
    // 36
    name: "Accomplished",
    description: "feeling effective and successful",
    emotionalGroup: "HIGH_ENERGY_PLEASANT",
  },
];

const emotionalDataLEU = [
  {
    // 1
    name: "Disgusted",
    description: "feeling a strong dislike of someone or something",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 2
    name: "Trapped",
    description: "feeling like there's no way out",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 3
    name: "Insecure",
    description: "feeling uncertain and unconfident about yourself",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 4
    name: "Disheartened",
    description: "feeling discouraged and dispirited",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 5
    name: "Down",
    description: "feeling sad and like you have little energy",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 6
    name: "Bored",
    description: "lacking interest in something or someone",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 7
    name: "Humiliated",
    description: "feeling exposed and foolish in front of others",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 8
    name: "Ashamed",
    description:
      "feeling lower self-worth as a result of who you are or what you did",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 9
    name: "Lost",
    description: "feeling uncomfortably alone and lacking direction",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 10
    name: "Disappointed",
    description: "sad because your expectations were not met",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 11
    name: "Meh",
    description: "feeling uninspired or blah",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 12
    name: "Tired",
    description: "feeling like you need to rest",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 13
    name: "Pessimistic",
    description: "having a negative outlook and expecting the worst to happen",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 14
    name: "Vulnerable",
    description:
      "feeling like you could easily be emotionally or mentally hurt",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 15
    name: "Disconnected",
    description: "feeling separate from others",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 16
    name: "Forlorn",
    description: "feeling both sad and alone",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 17
    name: "Sad",
    description: "feeling unhappy about something",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 18
    name: "Fatigued",
    description: "feeling extreme exhaustion, physically drained",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 19
    name: "Guilty",
    description: "feeling responsible for a specific wrongdoing",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 20
    name: "Numb",
    description: "feeling profound hopelessness and discouragement",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 21
    name: "Excluded",
    description: "feeling left out and unwanted",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 22
    name: "Spent",
    description: "feeling extremely exhausted, both in body and mind",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 23
    name: "Discouraged",
    description: "feeling a loss of confidence and enthusiasm",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 24
    name: "Disengaged",
    description: "feeling like you cannot focus, disinterested",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 25
    name: "Depressed",
    description: "extremely unhappy and dispirited",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 26
    name: "Hopeless",
    description: "feel completely defeated and in despair about the future",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 27
    name: "Alienated",
    description:
      "feeling like you have been made a stranger to others, like they have no feelings or affection",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 28
    name: "Nostalgic",
    description:
      "a sentimental longing for the happiness felt in former place,time or situation",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 29
    name: "Lonely",
    description: "feeling sad because you are alone or disconnected",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 30
    name: "Apathetic",
    description: "lacking enthusiasm or interest",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 31
    name: "Miserable",
    description: "feeling extremely upset about something or someone",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 32
    name: "Despair",
    description: "a feeling of complete hopelessness",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 33
    name: "Glum",
    description: "feeling displeased, pessimistic about future events",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 34
    name: "Burned out",
    description: "feeling exhausted from ongoing stress",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 35
    name: "Exhausted",
    description: "feeling depleted of all energy",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
  {
    // 36
    name: "Helpless",
    description: "feeling likes there's nothing you can do",
    emotionalGroup: "LOW_ENERGY_UNPLEASANT",
  },
];

const emotionalDataLEP = [
  {
    // 1
    name: "Calm",
    description: "feeling free of stress, agitation,and worry",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 2
    name: "At ease",
    description: "feeling content and comfortable",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 3
    name: "Understood",
    description: "feeling that someone gets you",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 4
    name: "Respected",
    description: "feeling like people think highly of you",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 5
    name: "Fulfilled",
    description:
      "feeling like you have accomplished important personal goals or have become",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 6
    name: "Blissful",
    description: "feeling ful of joy",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 7
    name: "Good/okay",
    description: "feeling like things are just fine",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 8
    name: "Thoughtful",
    description: "thinking about the needs of others",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 9
    name: "Appreciated",
    description: "feeling recognized and worthy",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 10
    name: "Supported",
    description: "feeling like someone is there for you",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 11
    name: "Loved",
    description: "feeling like someone cares deeply for you",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 12
    name: "Connected",
    description: "feeling close to someone or part of a community",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 13
    name: "Relaxed",
    description: "free from tension and anxiety",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 14
    name: "Chill",
    description: "feeling relaxed and easygoing",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 15
    name: "Compassionate",
    description: "showing caring and concern for someone",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 16
    name: "Included",
    description: "feeling like you're part of a group",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 17
    name: "Valued",
    description: "feeling like you matter",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 18
    name: "Grateful",
    description: "appreciative of something or someone",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 19
    name: "Sympathetic",
    description: "feeling the sorrow or suffering of someone else",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 20
    name: "Comfortable",
    description: "feeling reassured both in mind and body",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 21
    name: "Empathetic",
    description: "understanding and sharing the feeling of another person",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 22
    name: "Content",
    description: "feeling complete and like you are enough",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 23
    name: "Accepted",
    description: "feeling acknowledged and seen",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 24
    name: "Moved",
    description:
      "a sudden feeling that happens after seeing something inspirational or sad",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 25
    name: "Mellow",
    description: "relaxed and laid back, easygoing",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 26
    name: "Peaceful",
    description: "quiet and calm, free from disturbance",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 27
    name: "Balanced",
    description: "feeling stable and satisfied",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 28
    name: "Safe",
    description: "feeling protected from danger",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 29
    name: "Secure",
    description: "feeling safe and protected",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 30
    name: "Blessed",
    description: "feeling thankful and fortunate for what you have",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 31
    name: "Carefree",
    description: "feeling free of worry and lighthearted",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 32
    name: "Tranquil",
    description: "peaceful,serene,and free from disturbance",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 33
    name: "Thankful",
    description: "feeling peace or appreciative",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 34
    name: "Relieved",
    description: "feeling at ease after an unpleasant feeling goes away",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 35
    name: "Satisfied",
    description: "pleased with what you have or with something you did",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
  {
    // 36
    name: "Serene",
    description: "calm and peaceful, untroubled",
    emotionalGroup: "LOW_ENERGY_PLEASANT",
  },
];

async function run() {
  // await prisma.emotion.createMany({ data: emotionalDataHEU });
  // await prisma.emotion.createMany({ data: emotionalDataHEP });
  // await prisma.emotion.createMany({ data: emotionalDataLEU });
  // await prisma.emotion.createMany({ data: emotionalDataLEP });
}

run();
