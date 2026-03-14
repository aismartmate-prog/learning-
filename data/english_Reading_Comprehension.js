const questionsDB = [
    // =====================================================================
    // Text 1: The Amazing Koala (Questions 1-5)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazing Koala</b><br><br>Koalas are special animals that live in Australia. Many people call them \"koala bears,\" but they are not bears at all. They are marsupials, which means the mother carries her baby in a pouch (a small bag on her stomach). <br><br>Koalas spend most of their lives in eucalyptus trees. They eat the leaves of these trees. Eucalyptus leaves are poisonous to most animals, but koalas have a special stomach that can digest them safely. <br><br>Koalas sleep a lot—up to 20 hours a day! This is because their food does not give them much energy. When they are awake, they mostly eat and rest.",
        question: "<b>[Text 1 - Question 1 of 5]</b><br>Where do koalas live?",
        options: [
            "In America",
            "In Australia",
            "In Europe",
            "In Africa"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: In Australia.</b><br><br><b>הסבר:</b> בשורה הראשונה של הטקסט נאמר במפורש היכן הן חיות: 'Koalas are special animals that live in Australia' (קואלות הן חיות מיוחדות שחיות באוסטרליה).",
        tts_text: "Question: Where do koalas live? Option 1: In America. Option 2: In Australia. Option 3: In Europe. Option 4: In Africa."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazing Koala</b><br><br>Koalas are special animals that live in Australia. Many people call them \"koala bears,\" but they are not bears at all. They are marsupials, which means the mother carries her baby in a pouch (a small bag on her stomach). <br><br>Koalas spend most of their lives in eucalyptus trees. They eat the leaves of these trees. Eucalyptus leaves are poisonous to most animals, but koalas have a special stomach that can digest them safely. <br><br>Koalas sleep a lot—up to 20 hours a day! This is because their food does not give them much energy. When they are awake, they mostly eat and rest.",
        question: "<b>[Text 1 - Question 2 of 5]</b><br>Why is \"koala bear\" a wrong name for this animal?",
        options: [
            "Because they are very small.",
            "Because they do not eat meat.",
            "Because they are marsupials, not bears.",
            "Because they sleep too much."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because they are marsupials, not bears.</b><br><br><b>הסבר:</b> הטקסט מציין שאנשים קוראים להן דובים, אבל הן לא באמת דובים: 'but they are not bears at all. They are marsupials' (הן חיות כיס, לא דובים).",
        tts_text: "Question: Why is koala bear a wrong name for this animal? Option 1: Because they are very small. Option 2: Because they do not eat meat. Option 3: Because they are marsupials, not bears. Option 4: Because they sleep too much."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazing Koala</b><br><br>Koalas are special animals that live in Australia. Many people call them \"koala bears,\" but they are not bears at all. They are marsupials, which means the mother carries her baby in a pouch (a small bag on her stomach). <br><br>Koalas spend most of their lives in eucalyptus trees. They eat the leaves of these trees. Eucalyptus leaves are poisonous to most animals, but koalas have a special stomach that can digest them safely. <br><br>Koalas sleep a lot—up to 20 hours a day! This is because their food does not give them much energy. When they are awake, they mostly eat and rest.",
        question: "<b>[Text 1 - Question 3 of 5]</b><br>What do koalas eat?",
        options: [
            "Small insects",
            "Eucalyptus leaves",
            "Fruits and vegetables",
            "Other small animals"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Eucalyptus leaves.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב: 'They eat the leaves of these trees' (הם אוכלים את העלים של העצים האלה - עצי האקליפטוס).",
        tts_text: "Question: What do koalas eat? Option 1: Small insects. Option 2: Eucalyptus leaves. Option 3: Fruits and vegetables. Option 4: Other small animals."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazing Koala</b><br><br>Koalas are special animals that live in Australia. Many people call them \"koala bears,\" but they are not bears at all. They are marsupials, which means the mother carries her baby in a pouch (a small bag on her stomach). <br><br>Koalas spend most of their lives in eucalyptus trees. They eat the leaves of these trees. Eucalyptus leaves are poisonous to most animals, but koalas have a special stomach that can digest them safely. <br><br>Koalas sleep a lot—up to 20 hours a day! This is because their food does not give them much energy. When they are awake, they mostly eat and rest.",
        question: "<b>[Text 1 - Question 4 of 5]</b><br>Why do koalas sleep up to 20 hours a day?",
        options: [
            "Because they are lazy animals.",
            "Because they like to dream.",
            "Because it is too hot in Australia.",
            "Because their food does not give them much energy."
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Because their food does not give them much energy.</b><br><br><b>הסבר:</b> התשובה מופיעה ישירות בפסקה השלישית: 'This is because their food does not give them much energy' (זה בגלל שהאוכל שלהם לא נותן להם הרבה אנרגיה).",
        tts_text: "Question: Why do koalas sleep up to 20 hours a day? Option 1: Because they are lazy animals. Option 2: Because they like to dream. Option 3: Because it is too hot in Australia. Option 4: Because their food does not give them much energy."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazing Koala</b><br><br>Koalas are special animals that live in Australia. Many people call them \"koala bears,\" but they are not bears at all. They are marsupials, which means the mother carries her baby in a pouch (a small bag on her stomach). <br><br>Koalas spend most of their lives in eucalyptus trees. They eat the leaves of these trees. Eucalyptus leaves are poisonous to most animals, but koalas have a special stomach that can digest them safely. <br><br>Koalas sleep a lot—up to 20 hours a day! This is because their food does not give them much energy. When they are awake, they mostly eat and rest.",
        question: "<b>[Text 1 - Question 5 of 5]</b><br>What is the main idea of the text?",
        options: [
            "Eucalyptus leaves are poisonous.",
            "Australia has many beautiful animals.",
            "Koalas are unique animals with special habits.",
            "Bears are very different from marsupials."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Koalas are unique animals with special habits.</b><br><br><b>הסבר:</b> הרעיון המרכזי של הטקסט כולו הוא לתת לנו מידע על הקואלה, על הייחודיות שלה (חיית כיס ולא דוב) ועל ההרגלים המיוחדים שלה (אכילת אקליפטוס ושינה מרובה). שאר התשובות הן פרטים קטנים מתוך הטקסט, ולא הרעיון המרכזי.",
        tts_text: "Question: What is the main idea of the text? Option 1: Eucalyptus leaves are poisonous. Option 2: Australia has many beautiful animals. Option 3: Koalas are unique animals with special habits. Option 4: Bears are very different from marsupials."
    },

    // =====================================================================
    // Text 2: The Most Important Meal (Questions 6-10)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Most Important Meal</b><br><br>Breakfast is often called the most important meal of the day. When you wake up in the morning, your body has not had food for many hours. Eating breakfast gives you the energy you need to start your day. <br><br>Studies show that students who eat a healthy breakfast do better in school. They can concentrate better during lessons and remember more information. Without breakfast, students might feel tired and hungry, making it hard for them to learn.<br><br>A good breakfast should include healthy foods. Eggs, whole-wheat bread, fruits, and oatmeal are great choices. On the other hand, eating too much sugar in the morning, like a lot of sweet cereal or candy, can make you feel tired later in the day.",
        question: "<b>[Text 2 - Question 1 of 5]</b><br>Why is breakfast called the most important meal of the day?",
        options: [
            "Because it is the most delicious meal.",
            "Because it gives your body energy after a long night without food.",
            "Because you eat it with your family.",
            "Because you can eat sweet things."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because it gives your body energy after a long night without food.</b><br><br><b>הסבר:</b> בפסקה הראשונה מוסבר כי הגוף לא קיבל אוכל שעות רבות במהלך הלילה, וארוחת הבוקר נותנת לו את האנרגיה להתחיל את היום.",
        tts_text: "Question: Why is breakfast called the most important meal of the day? Option 1: Because it is the most delicious meal. Option 2: Because it gives your body energy after a long night without food. Option 3: Because you eat it with your family. Option 4: Because you can eat sweet things."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Most Important Meal</b><br><br>Breakfast is often called the most important meal of the day. When you wake up in the morning, your body has not had food for many hours. Eating breakfast gives you the energy you need to start your day. <br><br>Studies show that students who eat a healthy breakfast do better in school. They can concentrate better during lessons and remember more information. Without breakfast, students might feel tired and hungry, making it hard for them to learn.<br><br>A good breakfast should include healthy foods. Eggs, whole-wheat bread, fruits, and oatmeal are great choices. On the other hand, eating too much sugar in the morning, like a lot of sweet cereal or candy, can make you feel tired later in the day.",
        question: "<b>[Text 2 - Question 2 of 5]</b><br>How does a healthy breakfast help students in school?",
        options: [
            "It helps them run faster in sports.",
            "It helps them concentrate better and remember information.",
            "It makes them popular with other students.",
            "It gives them less homework."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It helps them concentrate better and remember information.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב: 'They can concentrate better during lessons and remember more information' (הם מסוגלים להתרכז טוב יותר במהלך השיעורים ולזכור יותר מידע).",
        tts_text: "Question: How does a healthy breakfast help students in school? Option 1: It helps them run faster in sports. Option 2: It helps them concentrate better and remember information. Option 3: It makes them popular with other students. Option 4: It gives them less homework."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Most Important Meal</b><br><br>Breakfast is often called the most important meal of the day. When you wake up in the morning, your body has not had food for many hours. Eating breakfast gives you the energy you need to start your day. <br><br>Studies show that students who eat a healthy breakfast do better in school. They can concentrate better during lessons and remember more information. Without breakfast, students might feel tired and hungry, making it hard for them to learn.<br><br>A good breakfast should include healthy foods. Eggs, whole-wheat bread, fruits, and oatmeal are great choices. On the other hand, eating too much sugar in the morning, like a lot of sweet cereal or candy, can make you feel tired later in the day.",
        question: "<b>[Text 2 - Question 3 of 5]</b><br>What happens if a student does NOT eat breakfast?",
        options: [
            "They might feel tired and hungry.",
            "They will fall asleep in class immediately.",
            "They will forget how to read.",
            "They will have more energy."
        ],
        correctAnswer: 0,
        solution: "<b>התשובה הנכונה היא: They might feel tired and hungry.</b><br><br><b>הסבר:</b> לפי הפסקה השנייה, 'Without breakfast, students might feel tired and hungry' (בלי ארוחת בוקר, תלמידים עשויים להרגיש עייפים ורעבים).",
        tts_text: "Question: What happens if a student does NOT eat breakfast? Option 1: They might feel tired and hungry. Option 2: They will fall asleep in class immediately. Option 3: They will forget how to read. Option 4: They will have more energy."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Most Important Meal</b><br><br>Breakfast is often called the most important meal of the day. When you wake up in the morning, your body has not had food for many hours. Eating breakfast gives you the energy you need to start your day. <br><br>Studies show that students who eat a healthy breakfast do better in school. They can concentrate better during lessons and remember more information. Without breakfast, students might feel tired and hungry, making it hard for them to learn.<br><br>A good breakfast should include healthy foods. Eggs, whole-wheat bread, fruits, and oatmeal are great choices. On the other hand, eating too much sugar in the morning, like a lot of sweet cereal or candy, can make you feel tired later in the day.",
        question: "<b>[Text 2 - Question 4 of 5]</b><br>According to the text, which of the following is NOT a good choice for breakfast?",
        options: [
            "Eggs",
            "Fruits",
            "Too much sugar (like candy)",
            "Oatmeal"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Too much sugar (like candy).</b><br><br><b>הסבר:</b> בפסקה האחרונה, הכותב ממליץ על ביצים, פירות ושיבולת שועל, ומזהיר מפני אכילת יותר מדי סוכר, כמו ממתקים, שיכולים לגרום לעייפות בהמשך היום.",
        tts_text: "Question: According to the text, which of the following is NOT a good choice for breakfast? Option 1: Eggs. Option 2: Fruits. Option 3: Too much sugar (like candy). Option 4: Oatmeal."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Most Important Meal</b><br><br>Breakfast is often called the most important meal of the day. When you wake up in the morning, your body has not had food for many hours. Eating breakfast gives you the energy you need to start your day. <br><br>Studies show that students who eat a healthy breakfast do better in school. They can concentrate better during lessons and remember more information. Without breakfast, students might feel tired and hungry, making it hard for them to learn.<br><br>A good breakfast should include healthy foods. Eggs, whole-wheat bread, fruits, and oatmeal are great choices. On the other hand, eating too much sugar in the morning, like a lot of sweet cereal or candy, can make you feel tired later in the day.",
        question: "<b>[Text 2 - Question 5 of 5]</b><br>What does the word 'concentrate' mean in paragraph 2?",
        options: [
            "To sleep",
            "To eat slowly",
            "To focus and pay attention",
            "To talk to friends"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To focus and pay attention.</b><br><br><b>הסבר:</b> המילה 'concentrate' משמעותה להתרכז (לשמור על מיקוד ותשומת לב). זה עוזר לתלמידים ללמוד טוב יותר בשיעור.",
        tts_text: "Question: What does the word concentrate mean in paragraph 2? Option 1: To sleep. Option 2: To eat slowly. Option 3: To focus and pay attention. Option 4: To talk to friends."
    },

    // =====================================================================
    // Text 3: The Wright Brothers (Questions 11-15)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Wright Brothers</b><br><br>Orville and Wilbur Wright were two brothers who changed the world. They were born in the United States in the 1800s. When they were young boys, their father gave them a small toy helicopter made of cork, bamboo, and paper. This simple toy made them very interested in flying.<br><br>When they grew up, the brothers opened a bicycle repair shop. They were very good at fixing machines. They used the money they made from the bicycle shop to study flying and to build their own flying machines.<br><br>In December 1903, the Wright brothers built the first successful airplane. They tested it on a beach in North Carolina. Their very first flight lasted only 12 seconds, and the airplane flew for just 36 meters. However, it was a huge step for human history. Because of their hard work, today millions of people can travel in airplanes all over the world.",
        question: "<b>[Text 3 - Question 1 of 5]</b><br>What gift made the Wright brothers interested in flying?",
        options: [
            "A real airplane",
            "A bicycle",
            "A toy helicopter",
            "A book about birds"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: A toy helicopter.</b><br><br><b>הסבר:</b> בפסקה הראשונה מצוין שאביהם נתן להם מסוק צעצוע קטן ('their father gave them a small toy helicopter'), וזה מה שעורר את ההתעניינות שלהם בתעופה.",
        tts_text: "Question: What gift made the Wright brothers interested in flying? Option 1: A real airplane. Option 2: A bicycle. Option 3: A toy helicopter. Option 4: A book about birds."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Wright Brothers</b><br><br>Orville and Wilbur Wright were two brothers who changed the world. They were born in the United States in the 1800s. When they were young boys, their father gave them a small toy helicopter made of cork, bamboo, and paper. This simple toy made them very interested in flying.<br><br>When they grew up, the brothers opened a bicycle repair shop. They were very good at fixing machines. They used the money they made from the bicycle shop to study flying and to build their own flying machines.<br><br>In December 1903, the Wright brothers built the first successful airplane. They tested it on a beach in North Carolina. Their very first flight lasted only 12 seconds, and the airplane flew for just 36 meters. However, it was a huge step for human history. Because of their hard work, today millions of people can travel in airplanes all over the world.",
        question: "<b>[Text 3 - Question 2 of 5]</b><br>How did the brothers pay for building their flying machines?",
        options: [
            "Their father gave them a lot of money.",
            "They won a prize.",
            "They used the money from their bicycle repair shop.",
            "The government paid for it."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: They used the money from their bicycle repair shop.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב שהם השתמשו בכסף שהרוויחו מחנות תיקון האופניים שלהם כדי לממן את לימודי התעופה ובניית המכונות המעופפות.",
        tts_text: "Question: How did the brothers pay for building their flying machines? Option 1: Their father gave them a lot of money. Option 2: They won a prize. Option 3: They used the money from their bicycle repair shop. Option 4: The government paid for it."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Wright Brothers</b><br><br>Orville and Wilbur Wright were two brothers who changed the world. They were born in the United States in the 1800s. When they were young boys, their father gave them a small toy helicopter made of cork, bamboo, and paper. This simple toy made them very interested in flying.<br><br>When they grew up, the brothers opened a bicycle repair shop. They were very good at fixing machines. They used the money they made from the bicycle shop to study flying and to build their own flying machines.<br><br>In December 1903, the Wright brothers built the first successful airplane. They tested it on a beach in North Carolina. Their very first flight lasted only 12 seconds, and the airplane flew for just 36 meters. However, it was a huge step for human history. Because of their hard work, today millions of people can travel in airplanes all over the world.",
        question: "<b>[Text 3 - Question 3 of 5]</b><br>When did the first successful airplane flight happen?",
        options: [
            "In the 1800s",
            "In December 1903",
            "When they opened the bicycle shop",
            "Last year"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: In December 1903.</b><br><br><b>הסבר:</b> תאריך הטיסה המוצלחת הראשונה מופיע בתחילת הפסקה השלישית: 'In December 1903, the Wright brothers built the first successful airplane'.",
        tts_text: "Question: When did the first successful airplane flight happen? Option 1: In the 1800s. Option 2: In December 1903. Option 3: When they opened the bicycle shop. Option 4: Last year."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Wright Brothers</b><br><br>Orville and Wilbur Wright were two brothers who changed the world. They were born in the United States in the 1800s. When they were young boys, their father gave them a small toy helicopter made of cork, bamboo, and paper. This simple toy made them very interested in flying.<br><br>When they grew up, the brothers opened a bicycle repair shop. They were very good at fixing machines. They used the money they made from the bicycle shop to study flying and to build their own flying machines.<br><br>In December 1903, the Wright brothers built the first successful airplane. They tested it on a beach in North Carolina. Their very first flight lasted only 12 seconds, and the airplane flew for just 36 meters. However, it was a huge step for human history. Because of their hard work, today millions of people can travel in airplanes all over the world.",
        question: "<b>[Text 3 - Question 4 of 5]</b><br>How long did the very first flight last?",
        options: [
            "12 hours",
            "36 minutes",
            "12 seconds",
            "A few days"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: 12 seconds.</b><br><br><b>הסבר:</b> בפסקה השלישית מצוין אורך הטיסה המדויק: 'Their very first flight lasted only 12 seconds' (הטיסה הראשונה שלהם נמשכה רק 12 שניות).",
        tts_text: "Question: How long did the very first flight last? Option 1: 12 hours. Option 2: 36 minutes. Option 3: 12 seconds. Option 4: A few days."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Wright Brothers</b><br><br>Orville and Wilbur Wright were two brothers who changed the world. They were born in the United States in the 1800s. When they were young boys, their father gave them a small toy helicopter made of cork, bamboo, and paper. This simple toy made them very interested in flying.<br><br>When they grew up, the brothers opened a bicycle repair shop. They were very good at fixing machines. They used the money they made from the bicycle shop to study flying and to build their own flying machines.<br><br>In December 1903, the Wright brothers built the first successful airplane. They tested it on a beach in North Carolina. Their very first flight lasted only 12 seconds, and the airplane flew for just 36 meters. However, it was a huge step for human history. Because of their hard work, today millions of people can travel in airplanes all over the world.",
        question: "<b>[Text 3 - Question 5 of 5]</b><br>What does the word 'successful' mean in the text?",
        options: [
            "Doing something wrong",
            "Achieving a good and wanted result",
            "Failing to fly",
            "Making something broken"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Achieving a good and wanted result.</b><br><br><b>הסבר:</b> המילה 'successful' משמעותה מוצלח/מצליח (להשיג תוצאה טובה ורצויה). זה היה המטוס הראשון שהצליח לעוף כראוי.",
        tts_text: "Question: What does the word successful mean in the text? Option 1: Doing something wrong. Option 2: Achieving a good and wanted result. Option 3: Failing to fly. Option 4: Making something broken."
    },

    // =====================================================================
    // Text 4: The Amazon Rainforest (Questions 16-20)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazon Rainforest</b><br><br>The Amazon Rainforest is the largest tropical rainforest in the world. It is located in South America, mostly in a huge country called Brazil. The Amazon is very important for our planet Earth. <br><br>Many people call the Amazon the \"lungs of the Earth.\" This is because the millions of trees in the forest produce a lot of the clean oxygen that we breathe. Without these trees, the air in the world would be much dirtier. <br><br>The Amazon is also home to millions of different animals, insects, and plants. Some of these living things cannot be found anywhere else in the world! Sadly, the rainforest is in danger today. People are cutting down the trees to make room for big farms and roads. If we do not protect the Amazon, we will lose a very special place.",
        question: "<b>[Text 4 - Question 1 of 5]</b><br>Where is the Amazon Rainforest located?",
        options: [
            "In Africa",
            "In South America",
            "In North America",
            "In Europe"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: In South America.</b><br><br><b>הסבר:</b> בשורה השנייה של הטקסט כתוב: 'It is located in South America, mostly in a huge country called Brazil' (זה ממוקם בדרום אמריקה, בעיקר במדינה ענקית בשם ברזיל).",
        tts_text: "Question: Where is the Amazon Rainforest located? Option 1: In Africa. Option 2: In South America. Option 3: In North America. Option 4: In Europe."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazon Rainforest</b><br><br>The Amazon Rainforest is the largest tropical rainforest in the world. It is located in South America, mostly in a huge country called Brazil. The Amazon is very important for our planet Earth. <br><br>Many people call the Amazon the \"lungs of the Earth.\" This is because the millions of trees in the forest produce a lot of the clean oxygen that we breathe. Without these trees, the air in the world would be much dirtier. <br><br>The Amazon is also home to millions of different animals, insects, and plants. Some of these living things cannot be found anywhere else in the world! Sadly, the rainforest is in danger today. People are cutting down the trees to make room for big farms and roads. If we do not protect the Amazon, we will lose a very special place.",
        question: "<b>[Text 4 - Question 2 of 5]</b><br>Why do people call the Amazon the \"lungs of the Earth\"?",
        options: [
            "Because it looks like a lung from space.",
            "Because it breathes air like a human.",
            "Because its trees produce a lot of the clean oxygen we breathe.",
            "Because it is very green."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because its trees produce a lot of the clean oxygen we breathe.</b><br><br><b>הסבר:</b> בפסקה השנייה מסבירים את הכינוי 'הריאות של כדור הארץ': העצים מייצרים המון חמצן נקי שאנו נושמים.",
        tts_text: "Question: Why do people call the Amazon the lungs of the Earth? Option 1: Because it looks like a lung from space. Option 2: Because it breathes air like a human. Option 3: Because its trees produce a lot of the clean oxygen we breathe. Option 4: Because it is very green."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazon Rainforest</b><br><br>The Amazon Rainforest is the largest tropical rainforest in the world. It is located in South America, mostly in a huge country called Brazil. The Amazon is very important for our planet Earth. <br><br>Many people call the Amazon the \"lungs of the Earth.\" This is because the millions of trees in the forest produce a lot of the clean oxygen that we breathe. Without these trees, the air in the world would be much dirtier. <br><br>The Amazon is also home to millions of different animals, insects, and plants. Some of these living things cannot be found anywhere else in the world! Sadly, the rainforest is in danger today. People are cutting down the trees to make room for big farms and roads. If we do not protect the Amazon, we will lose a very special place.",
        question: "<b>[Text 4 - Question 3 of 5]</b><br>What is special about some of the animals in the Amazon?",
        options: [
            "They are very friendly to humans.",
            "They cannot be found anywhere else in the world.",
            "They do not need oxygen to live.",
            "They only sleep during the day."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They cannot be found anywhere else in the world.</b><br><br><b>הסבר:</b> בפסקה השלישית נאמר על החיות שם: 'Some of these living things cannot be found anywhere else in the world' (לא ניתן למצוא אותן בשום מקום אחר בעולם).",
        tts_text: "Question: What is special about some of the animals in the Amazon? Option 1: They are very friendly to humans. Option 2: They cannot be found anywhere else in the world. Option 3: They do not need oxygen to live. Option 4: They only sleep during the day."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazon Rainforest</b><br><br>The Amazon Rainforest is the largest tropical rainforest in the world. It is located in South America, mostly in a huge country called Brazil. The Amazon is very important for our planet Earth. <br><br>Many people call the Amazon the \"lungs of the Earth.\" This is because the millions of trees in the forest produce a lot of the clean oxygen that we breathe. Without these trees, the air in the world would be much dirtier. <br><br>The Amazon is also home to millions of different animals, insects, and plants. Some of these living things cannot be found anywhere else in the world! Sadly, the rainforest is in danger today. People are cutting down the trees to make room for big farms and roads. If we do not protect the Amazon, we will lose a very special place.",
        question: "<b>[Text 4 - Question 4 of 5]</b><br>Why is the Amazon Rainforest in danger today?",
        options: [
            "Because animals are eating all the trees.",
            "Because people are cutting down trees for farms and roads.",
            "Because the trees are too old.",
            "Because it does not rain enough there."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because people are cutting down trees for farms and roads.</b><br><br><b>הסבר:</b> בסוף הפסקה השלישית מוסבר מקור הסכנה: 'People are cutting down the trees to make room for big farms and roads' (אנשים כורתים את העצים כדי לפנות מקום לחוות גדולות ולכבישים).",
        tts_text: "Question: Why is the Amazon Rainforest in danger today? Option 1: Because animals are eating all the trees. Option 2: Because people are cutting down trees for farms and roads. Option 3: Because the trees are too old. Option 4: Because it does not rain enough there."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>The Amazon Rainforest</b><br><br>The Amazon Rainforest is the largest tropical rainforest in the world. It is located in South America, mostly in a huge country called Brazil. The Amazon is very important for our planet Earth. <br><br>Many people call the Amazon the \"lungs of the Earth.\" This is because the millions of trees in the forest produce a lot of the clean oxygen that we breathe. Without these trees, the air in the world would be much dirtier. <br><br>The Amazon is also home to millions of different animals, insects, and plants. Some of these living things cannot be found anywhere else in the world! Sadly, the rainforest is in danger today. People are cutting down the trees to make room for big farms and roads. If we do not protect the Amazon, we will lose a very special place.",
        question: "<b>[Text 4 - Question 5 of 5]</b><br>What does the word 'protect' mean in the last sentence?",
        options: [
            "To destroy",
            "To keep safe from harm",
            "To cut down",
            "To ignore"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To keep safe from harm.</b><br><br><b>הסבר:</b> המילה 'protect' משמעותה 'להגן' או 'לשמור על משהו בטוח מפני פגיעה'. המשפט אומר שאם לא נגן על האמזונס, נאבד מקום מיוחד.",
        tts_text: "Question: What does the word protect mean in the last sentence? Option 1: To destroy. Option 2: To keep safe from harm. Option 3: To cut down. Option 4: To ignore."
    },

    // =====================================================================
    // Text 5: Playing Video Games (Questions 21-25)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>Playing Video Games</b><br><br>Many teenagers love playing video games in their free time. Parents and teachers often worry that playing too many video games is bad for children. They say it takes time away from homework and reading. However, modern researchers say that playing video games can actually have some wonderful benefits.<br><br>First, some fast action games can help improve hand-eye coordination. This means players get better at using their hands and eyes together quickly. Second, many adventure games require players to solve puzzles and make difficult choices. This can help teenagers think faster and improve their problem-solving skills.<br><br>Finally, multiplayer online games can help teenagers make new friends from all over the world and learn how to work in a team. Of course, it is still very important not to play too much. Playing outside, doing schoolwork, and sleeping well are still the most important things for a healthy life.",
        question: "<b>[Text 5 - Question 1 of 5]</b><br>Why do parents often worry about video games?",
        options: [
            "Because games are too expensive.",
            "Because they think it takes time away from homework and reading.",
            "Because games make the computer hot.",
            "Because games are too difficult for children."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because they think it takes time away from homework and reading.</b><br><br><b>הסבר:</b> בפסקה הראשונה מצוינת סיבת הדאגה של ההורים: 'They say it takes time away from homework and reading' (הם אומרים שזה לוקח זמן משיעורי הבית ומקריאה).",
        tts_text: "Question: Why do parents often worry about video games? Option 1: Because games are too expensive. Option 2: Because they think it takes time away from homework and reading. Option 3: Because games make the computer hot. Option 4: Because games are too difficult for children."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>Playing Video Games</b><br><br>Many teenagers love playing video games in their free time. Parents and teachers often worry that playing too many video games is bad for children. They say it takes time away from homework and reading. However, modern researchers say that playing video games can actually have some wonderful benefits.<br><br>First, some fast action games can help improve hand-eye coordination. This means players get better at using their hands and eyes together quickly. Second, many adventure games require players to solve puzzles and make difficult choices. This can help teenagers think faster and improve their problem-solving skills.<br><br>Finally, multiplayer online games can help teenagers make new friends from all over the world and learn how to work in a team. Of course, it is still very important not to play too much. Playing outside, doing schoolwork, and sleeping well are still the most important things for a healthy life.",
        question: "<b>[Text 5 - Question 2 of 5]</b><br>How can action games help players?",
        options: [
            "They make players read faster.",
            "They improve hand-eye coordination.",
            "They help players sleep better.",
            "They teach players how to cook."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They improve hand-eye coordination.</b><br><br><b>הסבר:</b> לפי הפסקה השנייה: 'some fast action games can help improve hand-eye coordination' (משחקי פעולה מהירים עוזרים לשפר את קשר עין-יד).",
        tts_text: "Question: How can action games help players? Option 1: They make players read faster. Option 2: They improve hand-eye coordination. Option 3: They help players sleep better. Option 4: They teach players how to cook."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>Playing Video Games</b><br><br>Many teenagers love playing video games in their free time. Parents and teachers often worry that playing too many video games is bad for children. They say it takes time away from homework and reading. However, modern researchers say that playing video games can actually have some wonderful benefits.<br><br>First, some fast action games can help improve hand-eye coordination. This means players get better at using their hands and eyes together quickly. Second, many adventure games require players to solve puzzles and make difficult choices. This can help teenagers think faster and improve their problem-solving skills.<br><br>Finally, multiplayer online games can help teenagers make new friends from all over the world and learn how to work in a team. Of course, it is still very important not to play too much. Playing outside, doing schoolwork, and sleeping well are still the most important things for a healthy life.",
        question: "<b>[Text 5 - Question 3 of 5]</b><br>What do adventure games require players to do?",
        options: [
            "Talk to their parents.",
            "Buy new computers.",
            "Solve puzzles and make difficult choices.",
            "Run outside quickly."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Solve puzzles and make difficult choices.</b><br><br><b>הסבר:</b> בפסקה השנייה נאמר על משחקי הרפתקאות: 'many adventure games require players to solve puzzles and make difficult choices' (דורשים מהשחקנים לפתור פאזלים/חידות ולקבל החלטות קשות).",
        tts_text: "Question: What do adventure games require players to do? Option 1: Talk to their parents. Option 2: Buy new computers. Option 3: Solve puzzles and make difficult choices. Option 4: Run outside quickly."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>Playing Video Games</b><br><br>Many teenagers love playing video games in their free time. Parents and teachers often worry that playing too many video games is bad for children. They say it takes time away from homework and reading. However, modern researchers say that playing video games can actually have some wonderful benefits.<br><br>First, some fast action games can help improve hand-eye coordination. This means players get better at using their hands and eyes together quickly. Second, many adventure games require players to solve puzzles and make difficult choices. This can help teenagers think faster and improve their problem-solving skills.<br><br>Finally, multiplayer online games can help teenagers make new friends from all over the world and learn how to work in a team. Of course, it is still very important not to play too much. Playing outside, doing schoolwork, and sleeping well are still the most important things for a healthy life.",
        question: "<b>[Text 5 - Question 4 of 5]</b><br>What is a benefit of multiplayer online games?",
        options: [
            "Players can make new friends and learn teamwork.",
            "Players can get free games.",
            "Players do not need to do homework anymore.",
            "Players sleep more."
        ],
        correctAnswer: 0,
        solution: "<b>התשובה הנכונה היא: Players can make new friends and learn teamwork.</b><br><br><b>הסבר:</b> בפסקה השלישית מוסבר היתרון של משחקי רשת מרובי-שחקנים: 'can help teenagers make new friends... and learn how to work in a team' (לעשות חברים חדשים וללמוד לעבוד בצוות).",
        tts_text: "Question: What is a benefit of multiplayer online games? Option 1: Players can make new friends and learn teamwork. Option 2: Players can get free games. Option 3: Players do not need to do homework anymore. Option 4: Players sleep more."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level A (טקסטים לחטיבה - בסיסי)",
        passage: "<b>Playing Video Games</b><br><br>Many teenagers love playing video games in their free time. Parents and teachers often worry that playing too many video games is bad for children. They say it takes time away from homework and reading. However, modern researchers say that playing video games can actually have some wonderful benefits.<br><br>First, some fast action games can help improve hand-eye coordination. This means players get better at using their hands and eyes together quickly. Second, many adventure games require players to solve puzzles and make difficult choices. This can help teenagers think faster and improve their problem-solving skills.<br><br>Finally, multiplayer online games can help teenagers make new friends from all over the world and learn how to work in a team. Of course, it is still very important not to play too much. Playing outside, doing schoolwork, and sleeping well are still the most important things for a healthy life.",
        question: "<b>[Text 5 - Question 5 of 5]</b><br>What does the writer think about playing video games?",
        options: [
            "They are completely bad and should be stopped.",
            "They are the only thing teenagers should do.",
            "They have some benefits, but a healthy balance with other activities is important.",
            "They are only good for making friends."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: They have some benefits, but a healthy balance with other activities is important.</b><br><br><b>הסבר:</b> הכותב מסכם במשפט האחרון שאמנם למשחקים יש יתרונות, אבל חשוב לא להפריז בהם ('not to play too much') וחשוב לשמור על איזון עם פעילויות כמו משחק בחוץ, שיעורי בית ושינה טובה.",
        tts_text: "Question: What does the writer think about playing video games? Option 1: They are completely bad and should be stopped. Option 2: They are the only thing teenagers should do. Option 3: They have some benefits, but a healthy balance with other activities is important. Option 4: They are only good for making friends."
    },
    // =====================================================================
    // =====================================================================
    // Sub-topic: Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)
    // =====================================================================
    // =====================================================================

    // =====================================================================
    // Text 1: The Great Wall of China (Questions 1-5)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Great Wall of China</b><br><br>The Great Wall of China is one of the most famous and impressive landmarks in the world. It is not just one wall, but a series of many walls and forts built over 2,000 years ago. Different Chinese emperors built these walls to protect their land and their people from enemies coming from the north.<br><br>Building the Great Wall was a very difficult job. Millions of workers, including soldiers and farmers, worked for many years. They used materials like stone, brick, wood, and even packed earth. Today, the wall stretches for over 21,000 kilometers across mountains, deserts, and valleys.<br><br>Although it was built for protection, today the Great Wall is a symbol of Chinese history and culture. Every year, millions of tourists from all over the world travel to China just to walk on this incredible structure. It is so big that people used to believe you could see it from space with the naked eye, but modern astronauts have proved that this is actually a myth.",
        question: "<b>[Text 1 - Question 1 of 5]</b><br>Why was the Great Wall of China originally built?",
        options: [
            "To attract millions of tourists from all over the world.",
            "To protect the Chinese people and their land from enemies.",
            "To create a symbol of Chinese culture.",
            "To provide jobs for millions of farmers."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To protect the Chinese people and their land from enemies.</b><br><br><b>הסבר:</b> בפסקה הראשונה כתוב: 'built these walls to protect their land and their people from enemies' (בנו את החומות הללו כדי להגן על אדמתם ועל עמם מפני אויבים).",
        tts_text: "Question: Why was the Great Wall of China originally built? Option 1: To attract millions of tourists from all over the world. Option 2: To protect the Chinese people and their land from enemies. Option 3: To create a symbol of Chinese culture. Option 4: To provide jobs for millions of farmers."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Great Wall of China</b><br><br>The Great Wall of China is one of the most famous and impressive landmarks in the world. It is not just one wall, but a series of many walls and forts built over 2,000 years ago. Different Chinese emperors built these walls to protect their land and their people from enemies coming from the north.<br><br>Building the Great Wall was a very difficult job. Millions of workers, including soldiers and farmers, worked for many years. They used materials like stone, brick, wood, and even packed earth. Today, the wall stretches for over 21,000 kilometers across mountains, deserts, and valleys.<br><br>Although it was built for protection, today the Great Wall is a symbol of Chinese history and culture. Every year, millions of tourists from all over the world travel to China just to walk on this incredible structure. It is so big that people used to believe you could see it from space with the naked eye, but modern astronauts have proved that this is actually a myth.",
        question: "<b>[Text 1 - Question 2 of 5]</b><br>According to the second paragraph, who built the Great Wall?",
        options: [
            "Only the Chinese emperors.",
            "Tourists from all over the world.",
            "Modern astronauts.",
            "Millions of workers, including soldiers and farmers."
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Millions of workers, including soldiers and farmers.</b><br><br><b>הסבר:</b> בפסקה השנייה מתואר מי בנה את החומה בפועל: 'Millions of workers, including soldiers and farmers' (מיליוני פועלים, כולל חיילים וחקלאים).",
        tts_text: "Question: According to the second paragraph, who built the Great Wall? Option 1: Only the Chinese emperors. Option 2: Tourists from all over the world. Option 3: Modern astronauts. Option 4: Millions of workers, including soldiers and farmers."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Great Wall of China</b><br><br>The Great Wall of China is one of the most famous and impressive landmarks in the world. It is not just one wall, but a series of many walls and forts built over 2,000 years ago. Different Chinese emperors built these walls to protect their land and their people from enemies coming from the north.<br><br>Building the Great Wall was a very difficult job. Millions of workers, including soldiers and farmers, worked for many years. They used materials like stone, brick, wood, and even packed earth. Today, the wall stretches for over 21,000 kilometers across mountains, deserts, and valleys.<br><br>Although it was built for protection, today the Great Wall is a symbol of Chinese history and culture. Every year, millions of tourists from all over the world travel to China just to walk on this incredible structure. It is so big that people used to believe you could see it from space with the naked eye, but modern astronauts have proved that this is actually a myth.",
        question: "<b>[Text 1 - Question 3 of 5]</b><br>Which material is NOT mentioned as being used to build the wall?",
        options: [
            "Stone",
            "Wood",
            "Metal",
            "Brick"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Metal.</b><br><br><b>הסבר:</b> בפסקה השנייה מפורטים החומרים: 'stone, brick, wood, and even packed earth' (אבן, לבנים, עץ ואפילו אדמה דחוסה). מתכת (Metal) לא מוזכרת.",
        tts_text: "Question: Which material is NOT mentioned as being used to build the wall? Option 1: Stone. Option 2: Wood. Option 3: Metal. Option 4: Brick."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Great Wall of China</b><br><br>The Great Wall of China is one of the most famous and impressive landmarks in the world. It is not just one wall, but a series of many walls and forts built over 2,000 years ago. Different Chinese emperors built these walls to protect their land and their people from enemies coming from the north.<br><br>Building the Great Wall was a very difficult job. Millions of workers, including soldiers and farmers, worked for many years. They used materials like stone, brick, wood, and even packed earth. Today, the wall stretches for over 21,000 kilometers across mountains, deserts, and valleys.<br><br>Although it was built for protection, today the Great Wall is a symbol of Chinese history and culture. Every year, millions of tourists from all over the world travel to China just to walk on this incredible structure. It is so big that people used to believe you could see it from space with the naked eye, but modern astronauts have proved that this is actually a myth.",
        question: "<b>[Text 1 - Question 4 of 5]</b><br>What does the text say about seeing the Great Wall from space?",
        options: [
            "It is very easy to see it from space.",
            "Only astronauts can see it from space.",
            "It is actually a myth that you can see it from space with the naked eye.",
            "You need a telescope to see it from space."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: It is actually a myth that you can see it from space with the naked eye.</b><br><br><b>הסבר:</b> המשפט האחרון מבהיר שזו טעות לחשוב שאפשר לראות את החומה מהחלל: 'modern astronauts have proved that this is actually a myth' (אסטרונאוטים מודרניים הוכיחו שזה למעשה מיתוס/אגדה).",
        tts_text: "Question: What does the text say about seeing the Great Wall from space? Option 1: It is very easy to see it from space. Option 2: Only astronauts can see it from space. Option 3: It is actually a myth that you can see it from space with the naked eye. Option 4: You need a telescope to see it from space."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Great Wall of China</b><br><br>The Great Wall of China is one of the most famous and impressive landmarks in the world. It is not just one wall, but a series of many walls and forts built over 2,000 years ago. Different Chinese emperors built these walls to protect their land and their people from enemies coming from the north.<br><br>Building the Great Wall was a very difficult job. Millions of workers, including soldiers and farmers, worked for many years. They used materials like stone, brick, wood, and even packed earth. Today, the wall stretches for over 21,000 kilometers across mountains, deserts, and valleys.<br><br>Although it was built for protection, today the Great Wall is a symbol of Chinese history and culture. Every year, millions of tourists from all over the world travel to China just to walk on this incredible structure. It is so big that people used to believe you could see it from space with the naked eye, but modern astronauts have proved that this is actually a myth.",
        question: "<b>[Text 1 - Question 5 of 5]</b><br>What is the main idea of the third paragraph?",
        options: [
            "How the Great Wall was built using stone and wood.",
            "How the Great Wall has changed from a protective fort into a famous tourist attraction and symbol.",
            "Why the enemies stopped attacking China.",
            "How modern astronauts travel to space."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: How the Great Wall has changed from a protective fort into a famous tourist attraction and symbol.</b><br><br><b>הסבר:</b> הפסקה השלישית מתמקדת במשמעות החומה כיום. אמנם בעבר היא נועדה להגנה, אך היום היא סמל תרבותי ואטרקציה תיירותית המושכת מיליונים.",
        tts_text: "Question: What is the main idea of the third paragraph? Option 1: How the Great Wall was built using stone and wood. Option 2: How the Great Wall has changed from a protective fort into a famous tourist attraction and symbol. Option 3: Why the enemies stopped attacking China. Option 4: How modern astronauts travel to space."
    },

    // =====================================================================
    // Text 2: The Invention of the Internet (Questions 6-10)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Invention of the Internet</b><br><br>Can you imagine a day without checking your phone, watching videos online, or searching for information on Google? Today, the Internet is a normal part of our daily lives, but it wasn't always like this. The story of the Internet began in the 1960s during the Cold War. <br><br>The United States government wanted a secure way for their computers to communicate with each other, even if one computer was destroyed. To solve this problem, scientists created a network called ARPANET. At first, only a few universities and military bases were connected. They used it to share research and send simple messages.<br><br>In the 1990s, a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created a system that made it easy to link documents and websites together using browsers. Thanks to his invention, the Internet became accessible to the public, not just to scientists. Since then, it has grown rapidly, changing the way we learn, work, and communicate forever.",
        question: "<b>[Text 2 - Question 1 of 5]</b><br>Why did the US government want to create the first computer network?",
        options: [
            "To let teenagers watch videos online.",
            "To help people buy things from their homes.",
            "To have a secure way for computers to communicate during the Cold War.",
            "To help Tim Berners-Lee invent the World Wide Web."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To have a secure way for computers to communicate during the Cold War.</b><br><br><b>הסבר:</b> הפסקה השנייה מסבירה את הסיבה ההיסטורית: הממשלה האמריקאית רצתה רשת תקשורת מאובטחת למחשבים שלה במהלך המלחמה הקרה.",
        tts_text: "Question: Why did the US government want to create the first computer network? Option 1: To let teenagers watch videos online. Option 2: To help people buy things from their homes. Option 3: To have a secure way for computers to communicate during the Cold War. Option 4: To help Tim Berners-Lee invent the World Wide Web."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Invention of the Internet</b><br><br>Can you imagine a day without checking your phone, watching videos online, or searching for information on Google? Today, the Internet is a normal part of our daily lives, but it wasn't always like this. The story of the Internet began in the 1960s during the Cold War. <br><br>The United States government wanted a secure way for their computers to communicate with each other, even if one computer was destroyed. To solve this problem, scientists created a network called ARPANET. At first, only a few universities and military bases were connected. They used it to share research and send simple messages.<br><br>In the 1990s, a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created a system that made it easy to link documents and websites together using browsers. Thanks to his invention, the Internet became accessible to the public, not just to scientists. Since then, it has grown rapidly, changing the way we learn, work, and communicate forever.",
        question: "<b>[Text 2 - Question 2 of 5]</b><br>What was ARPANET?",
        options: [
            "A popular social media app.",
            "The first computer network used by the military and universities.",
            "A browser invented by Tim Berners-Lee.",
            "A secret message sent during the Cold War."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The first computer network used by the military and universities.</b><br><br><b>הסבר:</b> הטקסט מגדיר את ARPANET בתור הרשת הראשונה ('created a network called ARPANET') אליה חוברו בהתחלה אוניברסיטאות ובסיסי צבא.",
        tts_text: "Question: What was ARPANET? Option 1: A popular social media app. Option 2: The first computer network used by the military and universities. Option 3: A browser invented by Tim Berners-Lee. Option 4: A secret message sent during the Cold War."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Invention of the Internet</b><br><br>Can you imagine a day without checking your phone, watching videos online, or searching for information on Google? Today, the Internet is a normal part of our daily lives, but it wasn't always like this. The story of the Internet began in the 1960s during the Cold War. <br><br>The United States government wanted a secure way for their computers to communicate with each other, even if one computer was destroyed. To solve this problem, scientists created a network called ARPANET. At first, only a few universities and military bases were connected. They used it to share research and send simple messages.<br><br>In the 1990s, a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created a system that made it easy to link documents and websites together using browsers. Thanks to his invention, the Internet became accessible to the public, not just to scientists. Since then, it has grown rapidly, changing the way we learn, work, and communicate forever.",
        question: "<b>[Text 2 - Question 3 of 5]</b><br>Who was Tim Berners-Lee?",
        options: [
            "An American soldier.",
            "The man who invented the computer.",
            "A British scientist who invented the World Wide Web.",
            "A student who used ARPANET."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: A British scientist who invented the World Wide Web.</b><br><br><b>הסבר:</b> בתחילת הפסקה השלישית מוצג טים ברנרס-לי: 'a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW)'.",
        tts_text: "Question: Who was Tim Berners-Lee? Option 1: An American soldier. Option 2: The man who invented the computer. Option 3: A British scientist who invented the World Wide Web. Option 4: A student who used ARPANET."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Invention of the Internet</b><br><br>Can you imagine a day without checking your phone, watching videos online, or searching for information on Google? Today, the Internet is a normal part of our daily lives, but it wasn't always like this. The story of the Internet began in the 1960s during the Cold War. <br><br>The United States government wanted a secure way for their computers to communicate with each other, even if one computer was destroyed. To solve this problem, scientists created a network called ARPANET. At first, only a few universities and military bases were connected. They used it to share research and send simple messages.<br><br>In the 1990s, a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created a system that made it easy to link documents and websites together using browsers. Thanks to his invention, the Internet became accessible to the public, not just to scientists. Since then, it has grown rapidly, changing the way we learn, work, and communicate forever.",
        question: "<b>[Text 2 - Question 4 of 5]</b><br>What does the word 'accessible' mean in the last paragraph?",
        options: [
            "Easy to get, use, or reach",
            "Very expensive",
            "Hidden and secret",
            "Difficult to understand"
        ],
        correctAnswer: 0,
        solution: "<b>התשובה הנכונה היא: Easy to get, use, or reach.</b><br><br><b>הסבר:</b> המילה accessible פירושה 'נגיש'. בזכות ההמצאה של ה-WWW, האינטרנט הפך נגיש וקל לשימוש עבור הציבור הרחב, ולא רק למדענים.",
        tts_text: "Question: What does the word accessible mean in the last paragraph? Option 1: Easy to get, use, or reach. Option 2: Very expensive. Option 3: Hidden and secret. Option 4: Difficult to understand."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Invention of the Internet</b><br><br>Can you imagine a day without checking your phone, watching videos online, or searching for information on Google? Today, the Internet is a normal part of our daily lives, but it wasn't always like this. The story of the Internet began in the 1960s during the Cold War. <br><br>The United States government wanted a secure way for their computers to communicate with each other, even if one computer was destroyed. To solve this problem, scientists created a network called ARPANET. At first, only a few universities and military bases were connected. They used it to share research and send simple messages.<br><br>In the 1990s, a British computer scientist named Tim Berners-Lee invented the World Wide Web (WWW). He created a system that made it easy to link documents and websites together using browsers. Thanks to his invention, the Internet became accessible to the public, not just to scientists. Since then, it has grown rapidly, changing the way we learn, work, and communicate forever.",
        question: "<b>[Text 2 - Question 5 of 5]</b><br>How did the World Wide Web change the Internet?",
        options: [
            "It made the Internet slower and safer.",
            "It made it possible for the general public to easily use and link websites.",
            "It stopped the military from using computers.",
            "It replaced Google completely."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It made it possible for the general public to easily use and link websites.</b><br><br><b>הסבר:</b> הפסקה האחרונה מסבירה שהמצאת ה-WWW אפשרה קישור קל בין מסמכים ואתרים ('made it easy to link documents and websites') והפכה את האינטרנט לנגיש לציבור הרחב ('accessible to the public').",
        tts_text: "Question: How did the World Wide Web change the Internet? Option 1: It made the Internet slower and safer. Option 2: It made it possible for the general public to easily use and link websites. Option 3: It stopped the military from using computers. Option 4: It replaced Google completely."
    },

    // =====================================================================
    // Text 3: A Good Night's Sleep (Questions 11-15)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>A Good Night's Sleep</b><br><br>Many teenagers love staying up late to watch TV, chat with friends, or scroll through social media. Because they have to wake up early for school the next morning, they often don't get enough sleep. However, medical experts warn that a lack of sleep can have serious negative effects on teenagers' health and daily lives.<br><br>First of all, sleep is essential for the brain. While we sleep, our brains process the information we learned during the day. If a student is tired, it is much harder for them to concentrate in class, solve problems, and remember new facts. Studies show that teenagers who sleep at least 8 to 9 hours a night get better grades in school.<br><br>Furthermore, lack of sleep affects a teenager's mood. Tired teenagers are more likely to feel stressed, angry, or sad. It can also weaken the immune system, making it easier for them to catch a cold. To get a better night's sleep, experts recommend going to bed at the same time every night and putting away all electronic screens at least an hour before bedtime.",
        question: "<b>[Text 3 - Question 1 of 5]</b><br>Why do many teenagers not get enough sleep?",
        options: [
            "Because they have too much homework.",
            "Because they stay up late using screens and have to wake up early for school.",
            "Because they sleep during the day.",
            "Because they have medical problems."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because they stay up late using screens and have to wake up early for school.</b><br><br><b>הסבר:</b> הפסקה הראשונה מסבירה שבני נוער נשארים ערים מאוחר כדי לצפות בטלוויזיה או להיות ברשתות החברתיות, ונאלצים לקום מוקדם לבית הספר.",
        tts_text: "Question: Why do many teenagers not get enough sleep? Option 1: Because they have too much homework. Option 2: Because they stay up late using screens and have to wake up early for school. Option 3: Because they sleep during the day. Option 4: Because they have medical problems."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>A Good Night's Sleep</b><br><br>Many teenagers love staying up late to watch TV, chat with friends, or scroll through social media. Because they have to wake up early for school the next morning, they often don't get enough sleep. However, medical experts warn that a lack of sleep can have serious negative effects on teenagers' health and daily lives.<br><br>First of all, sleep is essential for the brain. While we sleep, our brains process the information we learned during the day. If a student is tired, it is much harder for them to concentrate in class, solve problems, and remember new facts. Studies show that teenagers who sleep at least 8 to 9 hours a night get better grades in school.<br><br>Furthermore, lack of sleep affects a teenager's mood. Tired teenagers are more likely to feel stressed, angry, or sad. It can also weaken the immune system, making it easier for them to catch a cold. To get a better night's sleep, experts recommend going to bed at the same time every night and putting away all electronic screens at least an hour before bedtime.",
        question: "<b>[Text 3 - Question 2 of 5]</b><br>According to the second paragraph, what happens in our brain while we sleep?",
        options: [
            "The brain completely shuts down.",
            "The brain forgets what happened during the day.",
            "The brain processes and organizes the information learned during the day.",
            "The brain prepares us for dreaming."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: The brain processes and organizes the information learned during the day.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב: 'While we sleep, our brains process the information we learned during the day' (בזמן שאנחנו ישנים, המוח שלנו מעבד את המידע שלמדנו במהלך היום).",
        tts_text: "Question: According to the second paragraph, what happens in our brain while we sleep? Option 1: The brain completely shuts down. Option 2: The brain forgets what happened during the day. Option 3: The brain processes and organizes the information learned during the day. Option 4: The brain prepares us for dreaming."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>A Good Night's Sleep</b><br><br>Many teenagers love staying up late to watch TV, chat with friends, or scroll through social media. Because they have to wake up early for school the next morning, they often don't get enough sleep. However, medical experts warn that a lack of sleep can have serious negative effects on teenagers' health and daily lives.<br><br>First of all, sleep is essential for the brain. While we sleep, our brains process the information we learned during the day. If a student is tired, it is much harder for them to concentrate in class, solve problems, and remember new facts. Studies show that teenagers who sleep at least 8 to 9 hours a night get better grades in school.<br><br>Furthermore, lack of sleep affects a teenager's mood. Tired teenagers are more likely to feel stressed, angry, or sad. It can also weaken the immune system, making it easier for them to catch a cold. To get a better night's sleep, experts recommend going to bed at the same time every night and putting away all electronic screens at least an hour before bedtime.",
        question: "<b>[Text 3 - Question 3 of 5]</b><br>How many hours of sleep do teenagers need to help them get better grades?",
        options: [
            "Less than 6 hours",
            "Exactly 7 hours",
            "At least 8 to 9 hours",
            "More than 12 hours"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: At least 8 to 9 hours.</b><br><br><b>הסבר:</b> הנתון מופיע בסוף הפסקה השנייה: 'teenagers who sleep at least 8 to 9 hours a night get better grades in school'.",
        tts_text: "Question: How many hours of sleep do teenagers need to help them get better grades? Option 1: Less than 6 hours. Option 2: Exactly 7 hours. Option 3: At least 8 to 9 hours. Option 4: More than 12 hours."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>A Good Night's Sleep</b><br><br>Many teenagers love staying up late to watch TV, chat with friends, or scroll through social media. Because they have to wake up early for school the next morning, they often don't get enough sleep. However, medical experts warn that a lack of sleep can have serious negative effects on teenagers' health and daily lives.<br><br>First of all, sleep is essential for the brain. While we sleep, our brains process the information we learned during the day. If a student is tired, it is much harder for them to concentrate in class, solve problems, and remember new facts. Studies show that teenagers who sleep at least 8 to 9 hours a night get better grades in school.<br><br>Furthermore, lack of sleep affects a teenager's mood. Tired teenagers are more likely to feel stressed, angry, or sad. It can also weaken the immune system, making it easier for them to catch a cold. To get a better night's sleep, experts recommend going to bed at the same time every night and putting away all electronic screens at least an hour before bedtime.",
        question: "<b>[Text 3 - Question 4 of 5]</b><br>Which of the following is NOT an effect of bad sleep mentioned in the third paragraph?",
        options: [
            "Feeling angry or sad.",
            "Having a weak immune system.",
            "Feeling stressed.",
            "Eating too much junk food."
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Eating too much junk food.</b><br><br><b>הסבר:</b> הפסקה השלישית מזכירה שחוסר שינה גורם למתח, כעס, עצבות ('stressed, angry, or sad') ולמערכת חיסון חלשה יותר ('weaken the immune system'). אכילת ג'אנק פוד לא מוזכרת בטקסט.",
        tts_text: "Question: Which of the following is NOT an effect of bad sleep mentioned in the third paragraph? Option 1: Feeling angry or sad. Option 2: Having a weak immune system. Option 3: Feeling stressed. Option 4: Eating too much junk food."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>A Good Night's Sleep</b><br><br>Many teenagers love staying up late to watch TV, chat with friends, or scroll through social media. Because they have to wake up early for school the next morning, they often don't get enough sleep. However, medical experts warn that a lack of sleep can have serious negative effects on teenagers' health and daily lives.<br><br>First of all, sleep is essential for the brain. While we sleep, our brains process the information we learned during the day. If a student is tired, it is much harder for them to concentrate in class, solve problems, and remember new facts. Studies show that teenagers who sleep at least 8 to 9 hours a night get better grades in school.<br><br>Furthermore, lack of sleep affects a teenager's mood. Tired teenagers are more likely to feel stressed, angry, or sad. It can also weaken the immune system, making it easier for them to catch a cold. To get a better night's sleep, experts recommend going to bed at the same time every night and putting away all electronic screens at least an hour before bedtime.",
        question: "<b>[Text 3 - Question 5 of 5]</b><br>What is one piece of advice experts give for getting a better night's sleep?",
        options: [
            "Drink coffee before bed.",
            "Watch a relaxing movie on your phone.",
            "Put away all electronic screens an hour before sleeping.",
            "Go to bed at a different time every night."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Put away all electronic screens an hour before sleeping.</b><br><br><b>הסבר:</b> המשפט האחרון בטקסט נותן את ההמלצה של המומחים: ללכת לישון באותה שעה ולהרחיק מסכים אלקטרוניים לפחות שעה לפני השינה ('putting away all electronic screens at least an hour before bedtime').",
        tts_text: "Question: What is one piece of advice experts give for getting a better night's sleep? Option 1: Drink coffee before bed. Option 2: Watch a relaxing movie on your phone. Option 3: Put away all electronic screens an hour before sleeping. Option 4: Go to bed at a different time every night."
    },

    // =====================================================================
    // Text 4: Marie Curie - A Scientist (Questions 16-20)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>Marie Curie - A Scientist</b><br><br>Marie Curie is one of the most famous scientists in history. She was born in Poland in 1867. Because she was a woman, she was not allowed to go to the main university in her country. However, Marie was determined to learn. She worked as a teacher to save money and eventually moved to Paris, France, to study physics and mathematics.<br><br>In Paris, she met Pierre Curie, another scientist. They got married and worked together in a small, poor laboratory. Their hard work led to amazing discoveries. Marie and Pierre discovered two new chemical elements: polonium and radium. These elements were radioactive, which means they gave off powerful invisible rays.<br><br>Marie Curie achieved many 'firsts' in her life. In 1903, she became the first woman ever to win a Nobel Prize. A few years later, she won a second Nobel Prize in chemistry, making her the first person ever to win the award twice. Although she faced many difficulties, her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer.",
        question: "<b>[Text 4 - Question 1 of 5]</b><br>Why did Marie Curie move to Paris?",
        options: [
            "Because she wanted to get married to Pierre.",
            "Because she was not allowed to study at the university in Poland.",
            "Because she wanted to teach French.",
            "Because she wanted to find a cure for cancer."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because she was not allowed to study at the university in Poland.</b><br><br><b>הסבר:</b> הפסקה הראשונה מסבירה שמכיוון שהייתה אישה, לא אפשרו לה ללמוד באוניברסיטה המרכזית בפולין, ולכן חסכה כסף ועברה לפריז כדי ללמוד.",
        tts_text: "Question: Why did Marie Curie move to Paris? Option 1: Because she wanted to get married to Pierre. Option 2: Because she was not allowed to study at the university in Poland. Option 3: Because she wanted to teach French. Option 4: Because she wanted to find a cure for cancer."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>Marie Curie - A Scientist</b><br><br>Marie Curie is one of the most famous scientists in history. She was born in Poland in 1867. Because she was a woman, she was not allowed to go to the main university in her country. However, Marie was determined to learn. She worked as a teacher to save money and eventually moved to Paris, France, to study physics and mathematics.<br><br>In Paris, she met Pierre Curie, another scientist. They got married and worked together in a small, poor laboratory. Their hard work led to amazing discoveries. Marie and Pierre discovered two new chemical elements: polonium and radium. These elements were radioactive, which means they gave off powerful invisible rays.<br><br>Marie Curie achieved many 'firsts' in her life. In 1903, she became the first woman ever to win a Nobel Prize. A few years later, she won a second Nobel Prize in chemistry, making her the first person ever to win the award twice. Although she faced many difficulties, her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer.",
        question: "<b>[Text 4 - Question 2 of 5]</b><br>What did Marie and her husband, Pierre, discover together?",
        options: [
            "The Nobel Prize.",
            "A new university in Paris.",
            "A cure for all diseases.",
            "Two new chemical elements: polonium and radium."
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Two new chemical elements: polonium and radium.</b><br><br><b>הסבר:</b> הפסקה השנייה מציינת את התגלית שלהם: 'Marie and Pierre discovered two new chemical elements: polonium and radium'.",
        tts_text: "Question: What did Marie and her husband, Pierre, discover together? Option 1: The Nobel Prize. Option 2: A new university in Paris. Option 3: A cure for all diseases. Option 4: Two new chemical elements: polonium and radium."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>Marie Curie - A Scientist</b><br><br>Marie Curie is one of the most famous scientists in history. She was born in Poland in 1867. Because she was a woman, she was not allowed to go to the main university in her country. However, Marie was determined to learn. She worked as a teacher to save money and eventually moved to Paris, France, to study physics and mathematics.<br><br>In Paris, she met Pierre Curie, another scientist. They got married and worked together in a small, poor laboratory. Their hard work led to amazing discoveries. Marie and Pierre discovered two new chemical elements: polonium and radium. These elements were radioactive, which means they gave off powerful invisible rays.<br><br>Marie Curie achieved many 'firsts' in her life. In 1903, she became the first woman ever to win a Nobel Prize. A few years later, she won a second Nobel Prize in chemistry, making her the first person ever to win the award twice. Although she faced many difficulties, her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer.",
        question: "<b>[Text 4 - Question 3 of 5]</b><br>What does 'radioactive' mean according to the text?",
        options: [
            "It means it is safe to eat.",
            "It means it gives off powerful invisible rays.",
            "It means it can be heard on the radio.",
            "It means it is very heavy."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It means it gives off powerful invisible rays.</b><br><br><b>הסבר:</b> הטקסט מגדיר את המילה מיד לאחר הופעתה: 'radioactive, which means they gave off powerful invisible rays' (רדיואקטיביים, שזה אומר שהם פלטו קרניים בלתי נראות חזקות).",
        tts_text: "Question: What does radioactive mean according to the text? Option 1: It means it is safe to eat. Option 2: It means it gives off powerful invisible rays. Option 3: It means it can be heard on the radio. Option 4: It means it is very heavy."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>Marie Curie - A Scientist</b><br><br>Marie Curie is one of the most famous scientists in history. She was born in Poland in 1867. Because she was a woman, she was not allowed to go to the main university in her country. However, Marie was determined to learn. She worked as a teacher to save money and eventually moved to Paris, France, to study physics and mathematics.<br><br>In Paris, she met Pierre Curie, another scientist. They got married and worked together in a small, poor laboratory. Their hard work led to amazing discoveries. Marie and Pierre discovered two new chemical elements: polonium and radium. These elements were radioactive, which means they gave off powerful invisible rays.<br><br>Marie Curie achieved many 'firsts' in her life. In 1903, she became the first woman ever to win a Nobel Prize. A few years later, she won a second Nobel Prize in chemistry, making her the first person ever to win the award twice. Although she faced many difficulties, her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer.",
        question: "<b>[Text 4 - Question 4 of 5]</b><br>What was so special about Marie Curie winning her second Nobel Prize?",
        options: [
            "She was the youngest person to win it.",
            "She gave the prize money to her husband.",
            "She became the first person ever to win the award twice.",
            "She was the first person to refuse the prize."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: She became the first person ever to win the award twice.</b><br><br><b>הסבר:</b> הפסקה השלישית מציינת את ההישג המיוחד: 'making her the first person ever to win the award twice' (מה שהפך אותה לאדם הראשון אי פעם שזכה בפרס פעמיים).",
        tts_text: "Question: What was so special about Marie Curie winning her second Nobel Prize? Option 1: She was the youngest person to win it. Option 2: She gave the prize money to her husband. Option 3: She became the first person ever to win the award twice. Option 4: She was the first person to refuse the prize."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>Marie Curie - A Scientist</b><br><br>Marie Curie is one of the most famous scientists in history. She was born in Poland in 1867. Because she was a woman, she was not allowed to go to the main university in her country. However, Marie was determined to learn. She worked as a teacher to save money and eventually moved to Paris, France, to study physics and mathematics.<br><br>In Paris, she met Pierre Curie, another scientist. They got married and worked together in a small, poor laboratory. Their hard work led to amazing discoveries. Marie and Pierre discovered two new chemical elements: polonium and radium. These elements were radioactive, which means they gave off powerful invisible rays.<br><br>Marie Curie achieved many 'firsts' in her life. In 1903, she became the first woman ever to win a Nobel Prize. A few years later, she won a second Nobel Prize in chemistry, making her the first person ever to win the award twice. Although she faced many difficulties, her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer.",
        question: "<b>[Text 4 - Question 5 of 5]</b><br>How did Marie Curie's work help people?",
        options: [
            "Her work helped build better universities in Poland.",
            "Her work improved the quality of cameras.",
            "Her discoveries helped modern science and medicine, especially in treating cancer.",
            "She helped scientists learn how to make gold."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Her discoveries helped modern science and medicine, especially in treating cancer.</b><br><br><b>הסבר:</b> המשפט האחרון בטקסט מסכם את תרומתה: 'her discoveries changed modern science and medicine, especially in the treatment of diseases like cancer' (במיוחד בטיפול במחלות כמו סרטן).",
        tts_text: "Question: How did Marie Curie's work help people? Option 1: Her work helped build better universities in Poland. Option 2: Her work improved the quality of cameras. Option 3: Her discoveries helped modern science and medicine, especially in treating cancer. Option 4: She helped scientists learn how to make gold."
    },

    // =====================================================================
    // Text 5: The Plastic Problem (Questions 21-25)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Plastic Problem</b><br><br>Plastic is a material we use every day. It is cheap, light, and very strong. We use it to make bottles, bags, toys, and even parts of cars. However, the same things that make plastic useful also make it a huge problem for our environment. Plastic takes hundreds of years to break down and disappear.<br><br>Because people throw away so much plastic, a lot of it ends up in the oceans. Scientists believe that millions of tons of plastic waste float in the sea. This pollution is very dangerous for marine life. Sea turtles often mistake plastic bags for jellyfish and eat them, which can make them very sick. Birds and fish can also get trapped in plastic rings.<br><br>To solve this problem, many countries are trying to reduce the amount of plastic they use. For example, some supermarkets no longer give out free plastic bags. People are also encouraged to recycle and use reusable water bottles instead of buying new ones. Everyone needs to work together to protect our oceans and our planet.",
        question: "<b>[Text 5 - Question 1 of 5]</b><br>Why is plastic considered a useful material?",
        options: [
            "Because it is expensive and beautiful.",
            "Because it is heavy and sinks in water.",
            "Because it is cheap, light, and strong.",
            "Because it breaks down very quickly in nature."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because it is cheap, light, and strong.</b><br><br><b>הסבר:</b> התכונות החיוביות של הפלסטיק מוזכרות בתחילת הפסקה הראשונה: 'It is cheap, light, and very strong' (הוא זול, קל משקל וחזק מאוד).",
        tts_text: "Question: Why is plastic considered a useful material? Option 1: Because it is expensive and beautiful. Option 2: Because it is heavy and sinks in water. Option 3: Because it is cheap, light, and strong. Option 4: Because it breaks down very quickly in nature."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Plastic Problem</b><br><br>Plastic is a material we use every day. It is cheap, light, and very strong. We use it to make bottles, bags, toys, and even parts of cars. However, the same things that make plastic useful also make it a huge problem for our environment. Plastic takes hundreds of years to break down and disappear.<br><br>Because people throw away so much plastic, a lot of it ends up in the oceans. Scientists believe that millions of tons of plastic waste float in the sea. This pollution is very dangerous for marine life. Sea turtles often mistake plastic bags for jellyfish and eat them, which can make them very sick. Birds and fish can also get trapped in plastic rings.<br><br>To solve this problem, many countries are trying to reduce the amount of plastic they use. For example, some supermarkets no longer give out free plastic bags. People are also encouraged to recycle and use reusable water bottles instead of buying new ones. Everyone needs to work together to protect our oceans and our planet.",
        question: "<b>[Text 5 - Question 2 of 5]</b><br>What makes plastic a huge problem for the environment?",
        options: [
            "It breaks down too fast.",
            "It is too cheap.",
            "It takes hundreds of years to break down and disappear.",
            "It cannot be used to make bottles."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: It takes hundreds of years to break down and disappear.</b><br><br><b>הסבר:</b> בסוף הפסקה הראשונה מוסבר החיסרון הסביבתי של הפלסטיק: הוא עמיד מדי ולוקח לו מאות שנים להתפרק ('takes hundreds of years to break down').",
        tts_text: "Question: What makes plastic a huge problem for the environment? Option 1: It breaks down too fast. Option 2: It is too cheap. Option 3: It takes hundreds of years to break down and disappear. Option 4: It cannot be used to make bottles."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Plastic Problem</b><br><br>Plastic is a material we use every day. It is cheap, light, and very strong. We use it to make bottles, bags, toys, and even parts of cars. However, the same things that make plastic useful also make it a huge problem for our environment. Plastic takes hundreds of years to break down and disappear.<br><br>Because people throw away so much plastic, a lot of it ends up in the oceans. Scientists believe that millions of tons of plastic waste float in the sea. This pollution is very dangerous for marine life. Sea turtles often mistake plastic bags for jellyfish and eat them, which can make them very sick. Birds and fish can also get trapped in plastic rings.<br><br>To solve this problem, many countries are trying to reduce the amount of plastic they use. For example, some supermarkets no longer give out free plastic bags. People are also encouraged to recycle and use reusable water bottles instead of buying new ones. Everyone needs to work together to protect our oceans and our planet.",
        question: "<b>[Text 5 - Question 3 of 5]</b><br>Why do sea turtles eat plastic bags?",
        options: [
            "Because plastic bags are nutritious.",
            "Because they mistake the bags for jellyfish.",
            "Because they like the taste of plastic.",
            "Because the birds feed it to them."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because they mistake the bags for jellyfish.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב במפורש שצבי הים מבלבלים בטעות בין שקיות פלסטיק לבין מדוזות ('mistake plastic bags for jellyfish').",
        tts_text: "Question: Why do sea turtles eat plastic bags? Option 1: Because plastic bags are nutritious. Option 2: Because they mistake the bags for jellyfish. Option 3: Because they like the taste of plastic. Option 4: Because the birds feed it to them."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Plastic Problem</b><br><br>Plastic is a material we use every day. It is cheap, light, and very strong. We use it to make bottles, bags, toys, and even parts of cars. However, the same things that make plastic useful also make it a huge problem for our environment. Plastic takes hundreds of years to break down and disappear.<br><br>Because people throw away so much plastic, a lot of it ends up in the oceans. Scientists believe that millions of tons of plastic waste float in the sea. This pollution is very dangerous for marine life. Sea turtles often mistake plastic bags for jellyfish and eat them, which can make them very sick. Birds and fish can also get trapped in plastic rings.<br><br>To solve this problem, many countries are trying to reduce the amount of plastic they use. For example, some supermarkets no longer give out free plastic bags. People are also encouraged to recycle and use reusable water bottles instead of buying new ones. Everyone needs to work together to protect our oceans and our planet.",
        question: "<b>[Text 5 - Question 4 of 5]</b><br>What is one way countries are trying to solve the plastic problem?",
        options: [
            "By building more supermarkets.",
            "By making plastic even stronger.",
            "By stopping the distribution of free plastic bags in supermarkets.",
            "By putting all marine life in aquariums."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: By stopping the distribution of free plastic bags in supermarkets.</b><br><br><b>הסבר:</b> הפסקה השלישית נותנת דוגמה לפתרון: 'some supermarkets no longer give out free plastic bags' (כמה סופרמרקטים כבר לא מחלקים שקיות פלסטיק בחינם).",
        tts_text: "Question: What is one way countries are trying to solve the plastic problem? Option 1: By building more supermarkets. Option 2: By making plastic even stronger. Option 3: By stopping the distribution of free plastic bags in supermarkets. Option 4: By putting all marine life in aquariums."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Junior High Texts - Level B (טקסטים לחטיבה - מתקדם)",
        passage: "<b>The Plastic Problem</b><br><br>Plastic is a material we use every day. It is cheap, light, and very strong. We use it to make bottles, bags, toys, and even parts of cars. However, the same things that make plastic useful also make it a huge problem for our environment. Plastic takes hundreds of years to break down and disappear.<br><br>Because people throw away so much plastic, a lot of it ends up in the oceans. Scientists believe that millions of tons of plastic waste float in the sea. This pollution is very dangerous for marine life. Sea turtles often mistake plastic bags for jellyfish and eat them, which can make them very sick. Birds and fish can also get trapped in plastic rings.<br><br>To solve this problem, many countries are trying to reduce the amount of plastic they use. For example, some supermarkets no longer give out free plastic bags. People are also encouraged to recycle and use reusable water bottles instead of buying new ones. Everyone needs to work together to protect our oceans and our planet.",
        question: "<b>[Text 5 - Question 5 of 5]</b><br>What does the writer suggest people should use instead of buying new plastic bottles?",
        options: [
            "Glass cups",
            "Reusable water bottles",
            "Paper bags",
            "Nothing at all"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Reusable water bottles.</b><br><br><b>הסבר:</b> בסוף הטקסט, כחלק מהפתרונות לאדם הפשוט, מוצע להשתמש בבקבוקים רב-פעמיים: 'use reusable water bottles instead of buying new ones'.",
        tts_text: "Question: What does the writer suggest people should use instead of buying new plastic bottles? Option 1: Glass cups. Option 2: Reusable water bottles. Option 3: Paper bags. Option 4: Nothing at all."
    },

    // =====================================================================
    // =====================================================================
    // Sub-topic: High School: Module A Practice (רמה 3 יחידות)
    // =====================================================================
    // =====================================================================

    // =====================================================================
    // Text 6: The History of Chocolate (Questions 26-30)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The History of Chocolate</b><br><br>Today, chocolate is a sweet treat that people love all over the world. But did you know that chocolate used to be a bitter drink? Thousands of years ago, the Maya and Aztec people in Central America used cacao beans to make a special, dark drink. They did not add sugar to it. Instead, they mixed the beans with water and hot spices.<br><br>In the 16th century, Spanish explorers traveled to the Americas and tasted this drink. They brought cacao beans back to Europe. However, the Europeans didn't like the bitter taste. They decided to change the recipe by adding sugar, honey, and sometimes milk. This new, sweet version of chocolate quickly became very popular among rich people in Spain and later across Europe.<br><br>It wasn't until the 1800s that a solid chocolate bar was invented. A man named Joseph Fry figured out how to mix cacao powder, sugar, and cocoa butter to create a hard chocolate bar. This invention changed everything. Soon, factories began producing cheap chocolate, and it became a snack that everyone could enjoy, not just the rich.",
        question: "<b>[Text 6 - Question 1 of 5]</b><br>How did the Maya and Aztec people consume chocolate?",
        options: [
            "They ate it as a sweet chocolate bar.",
            "They drank it as a bitter, spicy drink.",
            "They mixed it with milk and sugar.",
            "They only used it as medicine."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They drank it as a bitter, spicy drink.</b><br><br><b>הסבר:</b> בפסקה הראשונה מסופר שבני המאיה והאצטקים עשו מהפולים משקה מר ('a special, dark drink') והוסיפו לו תבלינים חריפים ('hot spices') ללא סוכר.",
        tts_text: "Question: How did the Maya and Aztec people consume chocolate? Option 1: They ate it as a sweet chocolate bar. Option 2: They drank it as a bitter, spicy drink. Option 3: They mixed it with milk and sugar. Option 4: They only used it as medicine."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The History of Chocolate</b><br><br>Today, chocolate is a sweet treat that people love all over the world. But did you know that chocolate used to be a bitter drink? Thousands of years ago, the Maya and Aztec people in Central America used cacao beans to make a special, dark drink. They did not add sugar to it. Instead, they mixed the beans with water and hot spices.<br><br>In the 16th century, Spanish explorers traveled to the Americas and tasted this drink. They brought cacao beans back to Europe. However, the Europeans didn't like the bitter taste. They decided to change the recipe by adding sugar, honey, and sometimes milk. This new, sweet version of chocolate quickly became very popular among rich people in Spain and later across Europe.<br><br>It wasn't until the 1800s that a solid chocolate bar was invented. A man named Joseph Fry figured out how to mix cacao powder, sugar, and cocoa butter to create a hard chocolate bar. This invention changed everything. Soon, factories began producing cheap chocolate, and it became a snack that everyone could enjoy, not just the rich.",
        question: "<b>[Text 6 - Question 2 of 5]</b><br>What did the Europeans do to make the chocolate taste better for them?",
        options: [
            "They added hot spices and water.",
            "They stopped drinking it completely.",
            "They added sugar, honey, and milk.",
            "They baked it in the oven."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: They added sugar, honey, and milk.</b><br><br><b>הסבר:</b> לפי הפסקה השנייה, האירופאים לא אהבו את הטעם המר ולכן שינו את המתכון על ידי הוספת סוכר, דבש ולפעמים חלב ('adding sugar, honey, and sometimes milk').",
        tts_text: "Question: What did the Europeans do to make the chocolate taste better for them? Option 1: They added hot spices and water. Option 2: They stopped drinking it completely. Option 3: They added sugar, honey, and milk. Option 4: They baked it in the oven."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The History of Chocolate</b><br><br>Today, chocolate is a sweet treat that people love all over the world. But did you know that chocolate used to be a bitter drink? Thousands of years ago, the Maya and Aztec people in Central America used cacao beans to make a special, dark drink. They did not add sugar to it. Instead, they mixed the beans with water and hot spices.<br><br>In the 16th century, Spanish explorers traveled to the Americas and tasted this drink. They brought cacao beans back to Europe. However, the Europeans didn't like the bitter taste. They decided to change the recipe by adding sugar, honey, and sometimes milk. This new, sweet version of chocolate quickly became very popular among rich people in Spain and later across Europe.<br><br>It wasn't until the 1800s that a solid chocolate bar was invented. A man named Joseph Fry figured out how to mix cacao powder, sugar, and cocoa butter to create a hard chocolate bar. This invention changed everything. Soon, factories began producing cheap chocolate, and it became a snack that everyone could enjoy, not just the rich.",
        question: "<b>[Text 6 - Question 3 of 5]</b><br>Who was chocolate mostly popular with when it first became sweet in Europe?",
        options: [
            "With children.",
            "With rich people.",
            "With factory workers.",
            "With Spanish explorers only."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: With rich people.</b><br><br><b>הסבר:</b> בסוף הפסקה השנייה כתוב שהגרסה המתוקה והחדשה הפכה לפופולרית מאוד בקרב אנשים עשירים ('very popular among rich people in Spain').",
        tts_text: "Question: Who was chocolate mostly popular with when it first became sweet in Europe? Option 1: With children. Option 2: With rich people. Option 3: With factory workers. Option 4: With Spanish explorers only."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The History of Chocolate</b><br><br>Today, chocolate is a sweet treat that people love all over the world. But did you know that chocolate used to be a bitter drink? Thousands of years ago, the Maya and Aztec people in Central America used cacao beans to make a special, dark drink. They did not add sugar to it. Instead, they mixed the beans with water and hot spices.<br><br>In the 16th century, Spanish explorers traveled to the Americas and tasted this drink. They brought cacao beans back to Europe. However, the Europeans didn't like the bitter taste. They decided to change the recipe by adding sugar, honey, and sometimes milk. This new, sweet version of chocolate quickly became very popular among rich people in Spain and later across Europe.<br><br>It wasn't until the 1800s that a solid chocolate bar was invented. A man named Joseph Fry figured out how to mix cacao powder, sugar, and cocoa butter to create a hard chocolate bar. This invention changed everything. Soon, factories began producing cheap chocolate, and it became a snack that everyone could enjoy, not just the rich.",
        question: "<b>[Text 6 - Question 4 of 5]</b><br>What was Joseph Fry's important invention?",
        options: [
            "He invented the cacao bean.",
            "He invented a solid, hard chocolate bar.",
            "He discovered Central America.",
            "He invented a new way to drink hot chocolate."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: He invented a solid, hard chocolate bar.</b><br><br><b>הסבר:</b> הפסקה השלישית מציגה את ג'וזף פריי בתור האדם שהמציא את טבלת השוקולד המוצקה ('figured out how to mix... to create a hard chocolate bar').",
        tts_text: "Question: What was Joseph Fry's important invention? Option 1: He invented the cacao bean. Option 2: He invented a solid, hard chocolate bar. Option 3: He discovered Central America. Option 4: He invented a new way to drink hot chocolate."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The History of Chocolate</b><br><br>Today, chocolate is a sweet treat that people love all over the world. But did you know that chocolate used to be a bitter drink? Thousands of years ago, the Maya and Aztec people in Central America used cacao beans to make a special, dark drink. They did not add sugar to it. Instead, they mixed the beans with water and hot spices.<br><br>In the 16th century, Spanish explorers traveled to the Americas and tasted this drink. They brought cacao beans back to Europe. However, the Europeans didn't like the bitter taste. They decided to change the recipe by adding sugar, honey, and sometimes milk. This new, sweet version of chocolate quickly became very popular among rich people in Spain and later across Europe.<br><br>It wasn't until the 1800s that a solid chocolate bar was invented. A man named Joseph Fry figured out how to mix cacao powder, sugar, and cocoa butter to create a hard chocolate bar. This invention changed everything. Soon, factories began producing cheap chocolate, and it became a snack that everyone could enjoy, not just the rich.",
        question: "<b>[Text 6 - Question 5 of 5]</b><br>According to the text, why did chocolate become a snack for everyone, not just the rich?",
        options: [
            "Because rich people stopped liking it.",
            "Because cacao beans became healthy.",
            "Because factories started producing cheap chocolate.",
            "Because the government gave it away for free."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because factories started producing cheap chocolate.</b><br><br><b>הסבר:</b> המשפט האחרון בטקסט מסביר את השינוי: בעקבות ההמצאה, מפעלים התחילו לייצר שוקולד זול ('factories began producing cheap chocolate'), מה שהפך אותו לנגיש לכולם, ולא רק לעשירים.",
        tts_text: "Question: According to the text, why did chocolate become a snack for everyone, not just the rich? Option 1: Because rich people stopped liking it. Option 2: Because cacao beans became healthy. Option 3: Because factories started producing cheap chocolate. Option 4: Because the government gave it away for free."
    },

    // =====================================================================
    // Text 7: Dogs - Man's Best Friend (Questions 31-35)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>Dogs: Man's Best Friend</b><br><br>Dogs have been called \"man's best friend\" for hundreds of years. The special relationship between humans and dogs began a very long time ago. Historians believe that humans first domesticated (tamed) wolves over 15,000 years ago. Over time, these tame wolves slowly evolved into the dogs we know today.<br><br>There are many reasons why humans and dogs work so well together. In the past, dogs were mainly used for working. They helped early humans to hunt wild animals, protect their homes from danger, and herd sheep on farms. Dogs have excellent senses of smell and hearing, which made them perfect partners for these difficult tasks.<br><br>Today, although some dogs still work on farms or in the police, most dogs are kept as family pets. Studies show that having a dog can be very good for your health. Playing with a dog can lower stress and make people feel happier. Also, dog owners are usually more active because they have to take their pets for walks every day. This beautiful friendship between humans and dogs continues to grow stronger.",
        question: "<b>[Text 7 - Question 1 of 5]</b><br>When did the relationship between humans and dogs begin?",
        options: [
            "About 100 years ago.",
            "Over 15,000 years ago.",
            "When the first police dogs were trained.",
            "Only recently."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Over 15,000 years ago.</b><br><br><b>הסבר:</b> בפסקה הראשונה כתוב שהיסטוריונים מאמינים שבני אדם בייתו (אילפו) זאבים לראשונה לפני יותר מ-15,000 שנה ('over 15,000 years ago').",
        tts_text: "Question: When did the relationship between humans and dogs begin? Option 1: About 100 years ago. Option 2: Over 15,000 years ago. Option 3: When the first police dogs were trained. Option 4: Only recently."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>Dogs: Man's Best Friend</b><br><br>Dogs have been called \"man's best friend\" for hundreds of years. The special relationship between humans and dogs began a very long time ago. Historians believe that humans first domesticated (tamed) wolves over 15,000 years ago. Over time, these tame wolves slowly evolved into the dogs we know today.<br><br>There are many reasons why humans and dogs work so well together. In the past, dogs were mainly used for working. They helped early humans to hunt wild animals, protect their homes from danger, and herd sheep on farms. Dogs have excellent senses of smell and hearing, which made them perfect partners for these difficult tasks.<br><br>Today, although some dogs still work on farms or in the police, most dogs are kept as family pets. Studies show that having a dog can be very good for your health. Playing with a dog can lower stress and make people feel happier. Also, dog owners are usually more active because they have to take their pets for walks every day. This beautiful friendship between humans and dogs continues to grow stronger.",
        question: "<b>[Text 7 - Question 2 of 5]</b><br>What did early humans use dogs for in the past?",
        options: [
            "To keep them company as family pets.",
            "To hunt, protect homes, and herd sheep.",
            "To play games to lower stress.",
            "To pull cars."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To hunt, protect homes, and herd sheep.</b><br><br><b>הסבר:</b> בפסקה השנייה מפורטים התפקידים של הכלבים בעבר: עזרו לצוד ('hunt'), להגן על הבתים ('protect their homes'), ולרעות צאן ('herd sheep').",
        tts_text: "Question: What did early humans use dogs for in the past? Option 1: To keep them company as family pets. Option 2: To hunt, protect homes, and herd sheep. Option 3: To play games to lower stress. Option 4: To pull cars."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>Dogs: Man's Best Friend</b><br><br>Dogs have been called \"man's best friend\" for hundreds of years. The special relationship between humans and dogs began a very long time ago. Historians believe that humans first domesticated (tamed) wolves over 15,000 years ago. Over time, these tame wolves slowly evolved into the dogs we know today.<br><br>There are many reasons why humans and dogs work so well together. In the past, dogs were mainly used for working. They helped early humans to hunt wild animals, protect their homes from danger, and herd sheep on farms. Dogs have excellent senses of smell and hearing, which made them perfect partners for these difficult tasks.<br><br>Today, although some dogs still work on farms or in the police, most dogs are kept as family pets. Studies show that having a dog can be very good for your health. Playing with a dog can lower stress and make people feel happier. Also, dog owners are usually more active because they have to take their pets for walks every day. This beautiful friendship between humans and dogs continues to grow stronger.",
        question: "<b>[Text 7 - Question 3 of 5]</b><br>Why were dogs 'perfect partners' for working in the past?",
        options: [
            "Because they were very quiet.",
            "Because they did not eat a lot.",
            "Because they had excellent senses of smell and hearing.",
            "Because they evolved from wolves."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because they had excellent senses of smell and hearing.</b><br><br><b>הסבר:</b> בסוף הפסקה השנייה מסבירים שהם היו שותפים מושלמים בזכות חושי הריח והשמיעה המצוינים שלהם ('excellent senses of smell and hearing').",
        tts_text: "Question: Why were dogs perfect partners for working in the past? Option 1: Because they were very quiet. Option 2: Because they did not eat a lot. Option 3: Because they had excellent senses of smell and hearing. Option 4: Because they evolved from wolves."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>Dogs: Man's Best Friend</b><br><br>Dogs have been called \"man's best friend\" for hundreds of years. The special relationship between humans and dogs began a very long time ago. Historians believe that humans first domesticated (tamed) wolves over 15,000 years ago. Over time, these tame wolves slowly evolved into the dogs we know today.<br><br>There are many reasons why humans and dogs work so well together. In the past, dogs were mainly used for working. They helped early humans to hunt wild animals, protect their homes from danger, and herd sheep on farms. Dogs have excellent senses of smell and hearing, which made them perfect partners for these difficult tasks.<br><br>Today, although some dogs still work on farms or in the police, most dogs are kept as family pets. Studies show that having a dog can be very good for your health. Playing with a dog can lower stress and make people feel happier. Also, dog owners are usually more active because they have to take their pets for walks every day. This beautiful friendship between humans and dogs continues to grow stronger.",
        question: "<b>[Text 7 - Question 4 of 5]</b><br>According to the last paragraph, how do dogs help human health today?",
        options: [
            "They catch fish for their owners.",
            "They lower stress and keep owners physically active.",
            "They act as doctors in hospitals.",
            "They clean the house to prevent sickness."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They lower stress and keep owners physically active.</b><br><br><b>הסבר:</b> הפסקה השלישית מציינת שמשחק עם כלב מוריד לחץ ('lower stress') ושהבעלים פעילים יותר גופנית ('more active') כי הם צריכים לצאת איתם לטיולים.",
        tts_text: "Question: According to the last paragraph, how do dogs help human health today? Option 1: They catch fish for their owners. Option 2: They lower stress and keep owners physically active. Option 3: They act as doctors in hospitals. Option 4: They clean the house to prevent sickness."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>Dogs: Man's Best Friend</b><br><br>Dogs have been called \"man's best friend\" for hundreds of years. The special relationship between humans and dogs began a very long time ago. Historians believe that humans first domesticated (tamed) wolves over 15,000 years ago. Over time, these tame wolves slowly evolved into the dogs we know today.<br><br>There are many reasons why humans and dogs work so well together. In the past, dogs were mainly used for working. They helped early humans to hunt wild animals, protect their homes from danger, and herd sheep on farms. Dogs have excellent senses of smell and hearing, which made them perfect partners for these difficult tasks.<br><br>Today, although some dogs still work on farms or in the police, most dogs are kept as family pets. Studies show that having a dog can be very good for your health. Playing with a dog can lower stress and make people feel happier. Also, dog owners are usually more active because they have to take their pets for walks every day. This beautiful friendship between humans and dogs continues to grow stronger.",
        question: "<b>[Text 7 - Question 5 of 5]</b><br>What does the word 'domesticated' mean in the first paragraph?",
        options: [
            "Hunted",
            "Tamed and trained to live with humans",
            "Killed for food",
            "Released into the wild"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Tamed and trained to live with humans.</b><br><br><b>הסבר:</b> המילה 'domesticated' (לַבַּיֵּת) מוסברת מיד לאחריה בסוגריים באמצעות המילה המוכרת יותר (tamed - מאולף). הכוונה היא להפוך חיית בר לחיה שיכולה לחיות עם בני אדם.",
        tts_text: "Question: What does the word domesticated mean in the first paragraph? Option 1: Hunted. Option 2: Tamed and trained to live with humans. Option 3: Killed for food. Option 4: Released into the wild."
    },

    // =====================================================================
    // Text 8: The Importance of Sleep (Questions 36-40)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The Importance of Sleep for Teenagers</b><br><br>Are you feeling tired in class? If the answer is yes, you are not alone. According to scientists, most teenagers do not get enough sleep. A teenager needs between eight and ten hours of sleep every night to stay healthy. However, surveys show that many high school students sleep only six or seven hours.<br><br>There are a few reasons for this problem. First, teenagers have very busy lives. They often have a lot of homework, after-school activities, and part-time jobs. Second, smartphones and social media keep them awake late at night. The blue light from phone screens tricks the brain into thinking it is still daytime, which makes it hard to fall asleep.<br><br>Lack of sleep can be very dangerous. When teenagers don't sleep enough, they find it hard to pay attention in school. It also affects their mood; tired teenagers often feel angry, stressed, or sad. To solve this issue, doctors suggest a simple rule: turn off all electronic devices at least one hour before going to bed. Reading a book or listening to quiet music can help the brain relax and prepare for a good night's sleep.",
        question: "<b>[Text 8 - Question 1 of 5]</b><br>How much sleep does a teenager need every night, according to scientists?",
        options: [
            "Only six or seven hours.",
            "More than twelve hours.",
            "Between eight and ten hours.",
            "Less than six hours."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Between eight and ten hours.</b><br><br><b>הסבר:</b> הנתון מופיע בבירור בפסקה הראשונה: 'A teenager needs between eight and ten hours of sleep every night'. (אמנם בפועל תלמידים ישנים 6-7 שעות, אך השאלה היא על הצורך הרפואי).",
        tts_text: "Question: How much sleep does a teenager need every night, according to scientists? Option 1: Only six or seven hours. Option 2: More than twelve hours. Option 3: Between eight and ten hours. Option 4: Less than six hours."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The Importance of Sleep for Teenagers</b><br><br>Are you feeling tired in class? If the answer is yes, you are not alone. According to scientists, most teenagers do not get enough sleep. A teenager needs between eight and ten hours of sleep every night to stay healthy. However, surveys show that many high school students sleep only six or seven hours.<br><br>There are a few reasons for this problem. First, teenagers have very busy lives. They often have a lot of homework, after-school activities, and part-time jobs. Second, smartphones and social media keep them awake late at night. The blue light from phone screens tricks the brain into thinking it is still daytime, which makes it hard to fall asleep.<br><br>Lack of sleep can be very dangerous. When teenagers don't sleep enough, they find it hard to pay attention in school. It also affects their mood; tired teenagers often feel angry, stressed, or sad. To solve this issue, doctors suggest a simple rule: turn off all electronic devices at least one hour before going to bed. Reading a book or listening to quiet music can help the brain relax and prepare for a good night's sleep.",
        question: "<b>[Text 8 - Question 2 of 5]</b><br>What does the blue light from phone screens do to the brain?",
        options: [
            "It makes the brain smarter.",
            "It tricks the brain into thinking it is daytime.",
            "It helps the brain relax.",
            "It puts the brain to sleep immediately."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It tricks the brain into thinking it is daytime.</b><br><br><b>הסבר:</b> בפסקה השנייה מתואר כיצד האור הכחול מטעה את המוח: 'tricks the brain into thinking it is still daytime' (גורם למוח לחשוב שעדיין שעות היום).",
        tts_text: "Question: What does the blue light from phone screens do to the brain? Option 1: It makes the brain smarter. Option 2: It tricks the brain into thinking it is daytime. Option 3: It helps the brain relax. Option 4: It puts the brain to sleep immediately."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The Importance of Sleep for Teenagers</b><br><br>Are you feeling tired in class? If the answer is yes, you are not alone. According to scientists, most teenagers do not get enough sleep. A teenager needs between eight and ten hours of sleep every night to stay healthy. However, surveys show that many high school students sleep only six or seven hours.<br><br>There are a few reasons for this problem. First, teenagers have very busy lives. They often have a lot of homework, after-school activities, and part-time jobs. Second, smartphones and social media keep them awake late at night. The blue light from phone screens tricks the brain into thinking it is still daytime, which makes it hard to fall asleep.<br><br>Lack of sleep can be very dangerous. When teenagers don't sleep enough, they find it hard to pay attention in school. It also affects their mood; tired teenagers often feel angry, stressed, or sad. To solve this issue, doctors suggest a simple rule: turn off all electronic devices at least one hour before going to bed. Reading a book or listening to quiet music can help the brain relax and prepare for a good night's sleep.",
        question: "<b>[Text 8 - Question 3 of 5]</b><br>Which of the following is given as a reason why teenagers are so busy?",
        options: [
            "They spend too much time eating.",
            "They have a lot of homework and after-school activities.",
            "They go to school during the night.",
            "They travel to different cities."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They have a lot of homework and after-school activities.</b><br><br><b>הסבר:</b> בפסקה השנייה הכותב מונה את הסיבות ללוח הזמנים העמוס של בני הנוער: 'a lot of homework, after-school activities, and part-time jobs'.",
        tts_text: "Question: Which of the following is given as a reason why teenagers are so busy? Option 1: They spend too much time eating. Option 2: They have a lot of homework and after-school activities. Option 3: They go to school during the night. Option 4: They travel to different cities."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The Importance of Sleep for Teenagers</b><br><br>Are you feeling tired in class? If the answer is yes, you are not alone. According to scientists, most teenagers do not get enough sleep. A teenager needs between eight and ten hours of sleep every night to stay healthy. However, surveys show that many high school students sleep only six or seven hours.<br><br>There are a few reasons for this problem. First, teenagers have very busy lives. They often have a lot of homework, after-school activities, and part-time jobs. Second, smartphones and social media keep them awake late at night. The blue light from phone screens tricks the brain into thinking it is still daytime, which makes it hard to fall asleep.<br><br>Lack of sleep can be very dangerous. When teenagers don't sleep enough, they find it hard to pay attention in school. It also affects their mood; tired teenagers often feel angry, stressed, or sad. To solve this issue, doctors suggest a simple rule: turn off all electronic devices at least one hour before going to bed. Reading a book or listening to quiet music can help the brain relax and prepare for a good night's sleep.",
        question: "<b>[Text 8 - Question 4 of 5]</b><br>How can lack of sleep affect a teenager's mood?",
        options: [
            "It makes them feel extremely happy.",
            "It helps them stay calm during tests.",
            "It often makes them feel angry, stressed, or sad.",
            "It makes them forget their friends."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: It often makes them feel angry, stressed, or sad.</b><br><br><b>הסבר:</b> בפסקה השלישית מוצגות ההשלכות על מצב הרוח: 'tired teenagers often feel angry, stressed, or sad' (מתבגרים עייפים לעיתים קרובות מרגישים כעס, לחץ או עצב).",
        tts_text: "Question: How can lack of sleep affect a teenager's mood? Option 1: It makes them feel extremely happy. Option 2: It helps them stay calm during tests. Option 3: It often makes them feel angry, stressed, or sad. Option 4: It makes them forget their friends."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The Importance of Sleep for Teenagers</b><br><br>Are you feeling tired in class? If the answer is yes, you are not alone. According to scientists, most teenagers do not get enough sleep. A teenager needs between eight and ten hours of sleep every night to stay healthy. However, surveys show that many high school students sleep only six or seven hours.<br><br>There are a few reasons for this problem. First, teenagers have very busy lives. They often have a lot of homework, after-school activities, and part-time jobs. Second, smartphones and social media keep them awake late at night. The blue light from phone screens tricks the brain into thinking it is still daytime, which makes it hard to fall asleep.<br><br>Lack of sleep can be very dangerous. When teenagers don't sleep enough, they find it hard to pay attention in school. It also affects their mood; tired teenagers often feel angry, stressed, or sad. To solve this issue, doctors suggest a simple rule: turn off all electronic devices at least one hour before going to bed. Reading a book or listening to quiet music can help the brain relax and prepare for a good night's sleep.",
        question: "<b>[Text 8 - Question 5 of 5]</b><br>What solution do doctors suggest for falling asleep easier?",
        options: [
            "Eating a big meal before bed.",
            "Watching an action movie.",
            "Turning off electronic devices an hour before bed and reading a book.",
            "Doing homework until midnight."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Turning off electronic devices an hour before bed and reading a book.</b><br><br><b>הסבר:</b> הפתרון (solution) מופיע בסוף הטקסט: 'turn off all electronic devices at least one hour before going to bed. Reading a book...'.",
        tts_text: "Question: What solution do doctors suggest for falling asleep easier? Option 1: Eating a big meal before bed. Option 2: Watching an action movie. Option 3: Turning off electronic devices an hour before bed and reading a book. Option 4: Doing homework until midnight."
    },

    // =====================================================================
    // Text 9: A Special Museum (Questions 41-45)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>A Special Museum</b><br><br>If you travel to Paris, France, you will probably visit the Louvre. The Louvre is one of the biggest and most famous art museums in the world. Originally, it was not built as a museum. In the 12th century, it was a fortress built to protect the city. Later, it became a royal palace where the kings of France lived. It was finally opened to the public as a museum in 1793.<br><br>Today, the Louvre contains thousands of beautiful paintings, sculptures, and historical objects. The most famous painting in the museum is the Mona Lisa, painted by the Italian artist Leonardo da Vinci. Millions of people come to the museum every year just to see her mysterious smile. <br><br>The museum is so large that you cannot see everything in one day. In fact, experts say that if you look at each piece of art for only 30 seconds, it would take you about 100 days to see the whole collection! That is why it is highly recommended to plan your visit and decide which artworks you want to see before you enter.",
        question: "<b>[Text 9 - Question 1 of 5]</b><br>What was the Louvre originally built as in the 12th century?",
        options: [
            "A large art museum.",
            "A fortress to protect the city.",
            "A hospital.",
            "A famous school."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: A fortress to protect the city.</b><br><br><b>הסבר:</b> הפסקה הראשונה מספרת על ההיסטוריה של המבנה: במקור (originally), במאה ה-12, הוא נבנה כמצודה להגנה על העיר ('a fortress built to protect the city').",
        tts_text: "Question: What was the Louvre originally built as in the 12th century? Option 1: A large art museum. Option 2: A fortress to protect the city. Option 3: A hospital. Option 4: A famous school."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>A Special Museum</b><br><br>If you travel to Paris, France, you will probably visit the Louvre. The Louvre is one of the biggest and most famous art museums in the world. Originally, it was not built as a museum. In the 12th century, it was a fortress built to protect the city. Later, it became a royal palace where the kings of France lived. It was finally opened to the public as a museum in 1793.<br><br>Today, the Louvre contains thousands of beautiful paintings, sculptures, and historical objects. The most famous painting in the museum is the Mona Lisa, painted by the Italian artist Leonardo da Vinci. Millions of people come to the museum every year just to see her mysterious smile. <br><br>The museum is so large that you cannot see everything in one day. In fact, experts say that if you look at each piece of art for only 30 seconds, it would take you about 100 days to see the whole collection! That is why it is highly recommended to plan your visit and decide which artworks you want to see before you enter.",
        question: "<b>[Text 9 - Question 2 of 5]</b><br>When did the Louvre become an open museum for the public?",
        options: [
            "In the 12th century.",
            "In 1793.",
            "100 days ago.",
            "When Leonardo da Vinci was alive."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: In 1793.</b><br><br><b>הסבר:</b> המשפט האחרון בפסקה הראשונה מציין: 'It was finally opened to the public as a museum in 1793' (הוא נפתח סוף סוף לציבור כמוזיאון בשנת 1793).",
        tts_text: "Question: When did the Louvre become an open museum for the public? Option 1: In the 12th century. Option 2: In 1793. Option 3: 100 days ago. Option 4: When Leonardo da Vinci was alive."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>A Special Museum</b><br><br>If you travel to Paris, France, you will probably visit the Louvre. The Louvre is one of the biggest and most famous art museums in the world. Originally, it was not built as a museum. In the 12th century, it was a fortress built to protect the city. Later, it became a royal palace where the kings of France lived. It was finally opened to the public as a museum in 1793.<br><br>Today, the Louvre contains thousands of beautiful paintings, sculptures, and historical objects. The most famous painting in the museum is the Mona Lisa, painted by the Italian artist Leonardo da Vinci. Millions of people come to the museum every year just to see her mysterious smile. <br><br>The museum is so large that you cannot see everything in one day. In fact, experts say that if you look at each piece of art for only 30 seconds, it would take you about 100 days to see the whole collection! That is why it is highly recommended to plan your visit and decide which artworks you want to see before you enter.",
        question: "<b>[Text 9 - Question 3 of 5]</b><br>Why do millions of people come to the museum every year according to paragraph 2?",
        options: [
            "To meet the king of France.",
            "To see the famous Mona Lisa painting.",
            "To learn how to paint like Leonardo da Vinci.",
            "To look at the building from the outside."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To see the famous Mona Lisa painting.</b><br><br><b>הסבר:</b> בפסקה השנייה נכתב: 'Millions of people come to the museum every year just to see her mysterious smile' (מיליוני אנשים באים למוזיאון בכל שנה רק כדי לראות את החיוך המסתורי שלה - של המונה ליזה).",
        tts_text: "Question: Why do millions of people come to the museum every year according to paragraph 2? Option 1: To meet the king of France. Option 2: To see the famous Mona Lisa painting. Option 3: To learn how to paint like Leonardo da Vinci. Option 4: To look at the building from the outside."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>A Special Museum</b><br><br>If you travel to Paris, France, you will probably visit the Louvre. The Louvre is one of the biggest and most famous art museums in the world. Originally, it was not built as a museum. In the 12th century, it was a fortress built to protect the city. Later, it became a royal palace where the kings of France lived. It was finally opened to the public as a museum in 1793.<br><br>Today, the Louvre contains thousands of beautiful paintings, sculptures, and historical objects. The most famous painting in the museum is the Mona Lisa, painted by the Italian artist Leonardo da Vinci. Millions of people come to the museum every year just to see her mysterious smile. <br><br>The museum is so large that you cannot see everything in one day. In fact, experts say that if you look at each piece of art for only 30 seconds, it would take you about 100 days to see the whole collection! That is why it is highly recommended to plan your visit and decide which artworks you want to see before you enter.",
        question: "<b>[Text 9 - Question 4 of 5]</b><br>How long would it take to see the whole collection if you looked at each piece for 30 seconds?",
        options: [
            "One day.",
            "About 100 days.",
            "30 days.",
            "One year."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: About 100 days.</b><br><br><b>הסבר:</b> בפסקה השלישית מובא הנתון: 'it would take you about 100 days to see the whole collection!' (ייקח לכם בערך 100 ימים לראות את כל האוסף).",
        tts_text: "Question: How long would it take to see the whole collection if you looked at each piece for 30 seconds? Option 1: One day. Option 2: About 100 days. Option 3: 30 days. Option 4: One year."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>A Special Museum</b><br><br>If you travel to Paris, France, you will probably visit the Louvre. The Louvre is one of the biggest and most famous art museums in the world. Originally, it was not built as a museum. In the 12th century, it was a fortress built to protect the city. Later, it became a royal palace where the kings of France lived. It was finally opened to the public as a museum in 1793.<br><br>Today, the Louvre contains thousands of beautiful paintings, sculptures, and historical objects. The most famous painting in the museum is the Mona Lisa, painted by the Italian artist Leonardo da Vinci. Millions of people come to the museum every year just to see her mysterious smile. <br><br>The museum is so large that you cannot see everything in one day. In fact, experts say that if you look at each piece of art for only 30 seconds, it would take you about 100 days to see the whole collection! That is why it is highly recommended to plan your visit and decide which artworks you want to see before you enter.",
        question: "<b>[Text 9 - Question 5 of 5]</b><br>What does the writer recommend visitors do before entering the museum?",
        options: [
            "Buy a camera.",
            "Plan their visit and choose which artworks they want to see.",
            "Eat a big meal.",
            "Talk to an expert about the Mona Lisa."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Plan their visit and choose which artworks they want to see.</b><br><br><b>הסבר:</b> המשפט האחרון בטקסט מספק עצה מעשית למבקרים בגלל גודלו העצום של המוזיאון: 'highly recommended to plan your visit and decide which artworks you want to see' (מומלץ מאוד לתכנן את הביקור ולהחליט אילו יצירות אמנות תרצו לראות).",
        tts_text: "Question: What does the writer recommend visitors do before entering the museum? Option 1: Buy a camera. Option 2: Plan their visit and choose which artworks they want to see. Option 3: Eat a big meal. Option 4: Talk to an expert about the Mona Lisa."
    },

    // =====================================================================
    // Text 10: The First Moon Landing (Questions 46-50)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The First Moon Landing</b><br><br>On July 20, 1969, an amazing event happened. For the first time in history, humans walked on the moon. The American space mission was called Apollo 11. Three brave astronauts were chosen for this mission: Neil Armstrong, Buzz Aldrin, and Michael Collins.<br><br>The journey from Earth to the moon took four days. When they arrived, Collins stayed inside the main spaceship to pilot it around the moon. Armstrong and Aldrin went down to the surface in a smaller module called the 'Eagle.' Millions of people on Earth watched the event live on their black-and-white televisions.<br><br>When Neil Armstrong stepped onto the moon, he said his famous words: \"That's one small step for man, one giant leap for mankind.\" The astronauts spent about two hours walking on the moon's surface. They collected rocks to bring back to scientists on Earth and planted the American flag. This mission proved that humans could achieve things that once seemed impossible.",
        question: "<b>[Text 10 - Question 1 of 5]</b><br>When did the first humans walk on the moon?",
        options: [
            "In 1959",
            "On July 20, 1969",
            "Four days ago",
            "In 1996"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: On July 20, 1969.</b><br><br><b>הסבר:</b> התאריך ההיסטורי מופיע במשפט הראשון של הטקסט: 'On July 20, 1969, an amazing event happened. For the first time... humans walked on the moon'.",
        tts_text: "Question: When did the first humans walk on the moon? Option 1: In 1959. Option 2: On July 20, 1969. Option 3: Four days ago. Option 4: In 1996."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The First Moon Landing</b><br><br>On July 20, 1969, an amazing event happened. For the first time in history, humans walked on the moon. The American space mission was called Apollo 11. Three brave astronauts were chosen for this mission: Neil Armstrong, Buzz Aldrin, and Michael Collins.<br><br>The journey from Earth to the moon took four days. When they arrived, Collins stayed inside the main spaceship to pilot it around the moon. Armstrong and Aldrin went down to the surface in a smaller module called the 'Eagle.' Millions of people on Earth watched the event live on their black-and-white televisions.<br><br>When Neil Armstrong stepped onto the moon, he said his famous words: \"That's one small step for man, one giant leap for mankind.\" The astronauts spent about two hours walking on the moon's surface. They collected rocks to bring back to scientists on Earth and planted the American flag. This mission proved that humans could achieve things that once seemed impossible.",
        question: "<b>[Text 10 - Question 2 of 5]</b><br>Which astronaut did NOT walk on the moon during this mission?",
        options: [
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins",
            "All of them walked on the moon."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Michael Collins.</b><br><br><b>הסבר:</b> הפסקה השנייה מסבירה את החלוקה בתפקידים: מייקל קולינס נשאר בחללית האם ('Collins stayed inside the main spaceship'), בעוד שארמסטרונג ואלדרין ירדו לפני השטח.",
        tts_text: "Question: Which astronaut did NOT walk on the moon during this mission? Option 1: Neil Armstrong. Option 2: Buzz Aldrin. Option 3: Michael Collins. Option 4: All of them walked on the moon."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The First Moon Landing</b><br><br>On July 20, 1969, an amazing event happened. For the first time in history, humans walked on the moon. The American space mission was called Apollo 11. Three brave astronauts were chosen for this mission: Neil Armstrong, Buzz Aldrin, and Michael Collins.<br><br>The journey from Earth to the moon took four days. When they arrived, Collins stayed inside the main spaceship to pilot it around the moon. Armstrong and Aldrin went down to the surface in a smaller module called the 'Eagle.' Millions of people on Earth watched the event live on their black-and-white televisions.<br><br>When Neil Armstrong stepped onto the moon, he said his famous words: \"That's one small step for man, one giant leap for mankind.\" The astronauts spent about two hours walking on the moon's surface. They collected rocks to bring back to scientists on Earth and planted the American flag. This mission proved that humans could achieve things that once seemed impossible.",
        question: "<b>[Text 10 - Question 3 of 5]</b><br>How long did it take the astronauts to travel from Earth to the moon?",
        options: [
            "Two hours",
            "One day",
            "Four days",
            "One month"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Four days.</b><br><br><b>הסבר:</b> המשפט הראשון בפסקה השנייה עונה על כך: 'The journey from Earth to the moon took four days' (המסע מכדור הארץ לירח לקח ארבעה ימים).",
        tts_text: "Question: How long did it take the astronauts to travel from Earth to the moon? Option 1: Two hours. Option 2: One day. Option 3: Four days. Option 4: One month."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The First Moon Landing</b><br><br>On July 20, 1969, an amazing event happened. For the first time in history, humans walked on the moon. The American space mission was called Apollo 11. Three brave astronauts were chosen for this mission: Neil Armstrong, Buzz Aldrin, and Michael Collins.<br><br>The journey from Earth to the moon took four days. When they arrived, Collins stayed inside the main spaceship to pilot it around the moon. Armstrong and Aldrin went down to the surface in a smaller module called the 'Eagle.' Millions of people on Earth watched the event live on their black-and-white televisions.<br><br>When Neil Armstrong stepped onto the moon, he said his famous words: \"That's one small step for man, one giant leap for mankind.\" The astronauts spent about two hours walking on the moon's surface. They collected rocks to bring back to scientists on Earth and planted the American flag. This mission proved that humans could achieve things that once seemed impossible.",
        question: "<b>[Text 10 - Question 4 of 5]</b><br>What did the astronauts bring back from the moon?",
        options: [
            "A black-and-white television.",
            "Rocks for the scientists to study.",
            "An American flag.",
            "A piece of the module 'Eagle'."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Rocks for the scientists to study.</b><br><br><b>הסבר:</b> הפסקה השלישית מתארת את הפעולות שלהם על הירח: 'They collected rocks to bring back to scientists on Earth' (הם אספו סלעים כדי להביא בחזרה למדענים).",
        tts_text: "Question: What did the astronauts bring back from the moon? Option 1: A black-and-white television. Option 2: Rocks for the scientists to study. Option 3: An American flag. Option 4: A piece of the module Eagle."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module A Practice (רמה 3 יחידות)",
        passage: "<b>The First Moon Landing</b><br><br>On July 20, 1969, an amazing event happened. For the first time in history, humans walked on the moon. The American space mission was called Apollo 11. Three brave astronauts were chosen for this mission: Neil Armstrong, Buzz Aldrin, and Michael Collins.<br><br>The journey from Earth to the moon took four days. When they arrived, Collins stayed inside the main spaceship to pilot it around the moon. Armstrong and Aldrin went down to the surface in a smaller module called the 'Eagle.' Millions of people on Earth watched the event live on their black-and-white televisions.<br><br>When Neil Armstrong stepped onto the moon, he said his famous words: \"That's one small step for man, one giant leap for mankind.\" The astronauts spent about two hours walking on the moon's surface. They collected rocks to bring back to scientists on Earth and planted the American flag. This mission proved that humans could achieve things that once seemed impossible.",
        question: "<b>[Text 10 - Question 5 of 5]</b><br>What did the Apollo 11 mission prove to the world?",
        options: [
            "That the moon is made of cheese.",
            "That humans could achieve things that seemed impossible.",
            "That traveling in space takes only a few hours.",
            "That black-and-white TVs are better than color TVs."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: That humans could achieve things that seemed impossible.</b><br><br><b>הסבר:</b> המשפט החותם של הטקסט מציג את ההישג הגדול: 'This mission proved that humans could achieve things that once seemed impossible' (המשימה הזו הוכיחה שבני אדם יכולים להשיג דברים שפעם נראו בלתי אפשריים).",
        tts_text: "Question: What did the Apollo 11 mission prove to the world? Option 1: That the moon is made of cheese. Option 2: That humans could achieve things that seemed impossible. Option 3: That traveling in space takes only a few hours. Option 4: That black-and-white TVs are better than color TVs."
    },
    // =====================================================================
    // =====================================================================
    // Sub-topic: High School: Module C Practice (רמה 3-4 יחידות)
    // =====================================================================
    // =====================================================================

    // =====================================================================
    // Text 1: The Power of Placebos (Module C)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Power of Placebos</b><br><br>Doctors have long known about a fascinating medical phenomenon called the placebo effect. A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients. However, patients who take it often feel better simply because they believe they are receiving real medicine.<br><br>When a doctor gives a patient a pill and tells them it will cure their headache, the patient's brain expects the pain to go away. This expectation is incredibly powerful. Scientists have discovered that when people believe they are being treated, their brains release endorphins. Endorphins are the body's natural painkillers. So, even though the pill itself does nothing, the brain creates a real physical reaction that stops the pain.<br><br>The placebo effect is not just in the patient's imagination; it causes actual changes in the body. Today, medical researchers must use placebos when testing new drugs. To prove that a new medicine really works, it must cure more people than a placebo does. This helps doctors ensure that the new drug is truly effective.",
        question: "<b>[Text 1 - Question 1 of 5]</b><br>What is a placebo according to the first paragraph?",
        options: [
            "A powerful medical drug for headaches.",
            "A fake treatment with no real medical ingredients.",
            "A doctor who studies the brain.",
            "A rare medical disease."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: A fake treatment with no real medical ingredients.</b><br><br><b>הסבר:</b> בפסקה הראשונה מופיעה ההגדרה המדויקת של פלצבו: 'A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients' (טיפול מזויף, כמו גלולת סוכר, שאין בה מרכיבים רפואיים אמיתיים).",
        tts_text: "Question: What is a placebo according to the first paragraph? Option 1: A powerful medical drug for headaches. Option 2: A fake treatment with no real medical ingredients. Option 3: A doctor who studies the brain. Option 4: A rare medical disease."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Power of Placebos</b><br><br>Doctors have long known about a fascinating medical phenomenon called the placebo effect. A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients. However, patients who take it often feel better simply because they believe they are receiving real medicine.<br><br>When a doctor gives a patient a pill and tells them it will cure their headache, the patient's brain expects the pain to go away. This expectation is incredibly powerful. Scientists have discovered that when people believe they are being treated, their brains release endorphins. Endorphins are the body's natural painkillers. So, even though the pill itself does nothing, the brain creates a real physical reaction that stops the pain.<br><br>The placebo effect is not just in the patient's imagination; it causes actual changes in the body. Today, medical researchers must use placebos when testing new drugs. To prove that a new medicine really works, it must cure more people than a placebo does. This helps doctors ensure that the new drug is truly effective.",
        question: "<b>[Text 1 - Question 2 of 5]</b><br>Why do patients often feel better after taking a placebo?",
        options: [
            "Because the sugar pill has secret medicine in it.",
            "Because they believe they are receiving real medicine.",
            "Because the doctor gives them a massage.",
            "Because they sleep better at night."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because they believe they are receiving real medicine.</b><br><br><b>הסבר:</b> בסוף הפסקה הראשונה כתוב: 'patients who take it often feel better simply because they believe they are receiving real medicine' (פשוט מכיוון שהם מאמינים שהם מקבלים תרופה אמיתית). האמונה היא שמרפאה אותם.",
        tts_text: "Question: Why do patients often feel better after taking a placebo? Option 1: Because the sugar pill has secret medicine in it. Option 2: Because they believe they are receiving real medicine. Option 3: Because the doctor gives them a massage. Option 4: Because they sleep better at night."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Power of Placebos</b><br><br>Doctors have long known about a fascinating medical phenomenon called the placebo effect. A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients. However, patients who take it often feel better simply because they believe they are receiving real medicine.<br><br>When a doctor gives a patient a pill and tells them it will cure their headache, the patient's brain expects the pain to go away. This expectation is incredibly powerful. Scientists have discovered that when people believe they are being treated, their brains release endorphins. Endorphins are the body's natural painkillers. So, even though the pill itself does nothing, the brain creates a real physical reaction that stops the pain.<br><br>The placebo effect is not just in the patient's imagination; it causes actual changes in the body. Today, medical researchers must use placebos when testing new drugs. To prove that a new medicine really works, it must cure more people than a placebo does. This helps doctors ensure that the new drug is truly effective.",
        question: "<b>[Text 1 - Question 3 of 5]</b><br>What are endorphins according to the second paragraph?",
        options: [
            "Fake sugar pills.",
            "The body's natural painkillers.",
            "A type of headache.",
            "New drugs tested by researchers."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The body's natural painkillers.</b><br><br><b>הסבר:</b> הפסקה השנייה מגדירה את המילה מיד לאחר הופעתה: 'Endorphins are the body's natural painkillers' (משככי הכאבים הטבעיים של הגוף).",
        tts_text: "Question: What are endorphins according to the second paragraph? Option 1: Fake sugar pills. Option 2: The body's natural painkillers. Option 3: A type of headache. Option 4: New drugs tested by researchers."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Power of Placebos</b><br><br>Doctors have long known about a fascinating medical phenomenon called the placebo effect. A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients. However, patients who take it often feel better simply because they believe they are receiving real medicine.<br><br>When a doctor gives a patient a pill and tells them it will cure their headache, the patient's brain expects the pain to go away. This expectation is incredibly powerful. Scientists have discovered that when people believe they are being treated, their brains release endorphins. Endorphins are the body's natural painkillers. So, even though the pill itself does nothing, the brain creates a real physical reaction that stops the pain.<br><br>The placebo effect is not just in the patient's imagination; it causes actual changes in the body. Today, medical researchers must use placebos when testing new drugs. To prove that a new medicine really works, it must cure more people than a placebo does. This helps doctors ensure that the new drug is truly effective.",
        question: "<b>[Text 1 - Question 4 of 5]</b><br>Why do medical researchers use placebos when testing new drugs?",
        options: [
            "To save money on expensive medicines.",
            "To give patients something sweet to eat.",
            "To prove that the new medicine works better than the placebo.",
            "To make the patients fall asleep."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To prove that the new medicine works better than the placebo.</b><br><br><b>הסבר:</b> בפסקה השלישית מוסבר מדוע חוקרים משתמשים בפלצבו: 'To prove that a new medicine really works, it must cure more people than a placebo does' (כדי להוכיח שתרופה חדשה באמת עובדת, היא חייבת לרפא יותר אנשים מאשר שפלצבו מרפא).",
        tts_text: "Question: Why do medical researchers use placebos when testing new drugs? Option 1: To save money on expensive medicines. Option 2: To give patients something sweet to eat. Option 3: To prove that the new medicine works better than the placebo. Option 4: To make the patients fall asleep."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Power of Placebos</b><br><br>Doctors have long known about a fascinating medical phenomenon called the placebo effect. A placebo is a fake treatment, such as a sugar pill, that has no real medical ingredients. However, patients who take it often feel better simply because they believe they are receiving real medicine.<br><br>When a doctor gives a patient a pill and tells them it will cure their headache, the patient's brain expects the pain to go away. This expectation is incredibly powerful. Scientists have discovered that when people believe they are being treated, their brains release endorphins. Endorphins are the body's natural painkillers. So, even though the pill itself does nothing, the brain creates a real physical reaction that stops the pain.<br><br>The placebo effect is not just in the patient's imagination; it causes actual changes in the body. Today, medical researchers must use placebos when testing new drugs. To prove that a new medicine really works, it must cure more people than a placebo does. This helps doctors ensure that the new drug is truly effective.",
        question: "<b>[Text 1 - Question 5 of 5]</b><br>What does the word 'effective' mean in the last sentence?",
        options: [
            "Dangerous",
            "Successful in producing the wanted result",
            "Expensive",
            "Fake"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Successful in producing the wanted result.</b><br><br><b>הסבר:</b> המילה 'effective' (יעיל / אפקטיבי) משמעותה שמשהו מצליח לייצר את התוצאה הרצויה. הרופאים רוצים לוודא שהתרופה החדשה אכן עושה את העבודה שלה.",
        tts_text: "Question: What does the word effective mean in the last sentence? Option 1: Dangerous. Option 2: Successful in producing the wanted result. Option 3: Expensive. Option 4: Fake."
    },

    // =====================================================================
    // Text 2: Vertical Farming (Module C)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>Vertical Farming</b><br><br>By the year 2050, the Earth's population is expected to reach nearly 10 billion people. To feed everyone, we will need to produce much more food. However, there is a big problem: there is not enough traditional farmland left. One innovative solution to this growing problem is vertical farming.<br><br>Instead of growing crops in wide, open fields, vertical farming involves growing plants in stacked layers inside tall buildings. These indoor farms use special LED lights instead of the sun. Because the plants are grown indoors, farmers can control the temperature and humidity perfectly. This means crops can be grown all year round, regardless of the weather outside.<br><br>Vertical farming has many advantages. It uses up to 90% less water than traditional farming because the water is recycled and used again. Also, since the plants are grown inside, there are no bugs. Therefore, farmers do not need to use toxic chemicals (pesticides) to protect the crops. While building these indoor farms is currently very expensive, experts believe that vertical farming will be a key part of feeding the future world.",
        question: "<b>[Text 2 - Question 1 of 5]</b><br>According to the first paragraph, why will we need a new way to grow food by 2050?",
        options: [
            "Because people will stop eating meat.",
            "Because the sun will not be hot enough.",
            "Because the population will grow to 10 billion and there isn't enough farmland left.",
            "Because farmers want to work inside buildings."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because the population will grow to 10 billion and there isn't enough farmland left.</b><br><br><b>הסבר:</b> הפסקה הראשונה מציגה את הבעיה: האוכלוסייה תגיע ל-10 מיליארד ואין מספיק אדמות חקלאיות מסורתיות שנותרו ('not enough traditional farmland left').",
        tts_text: "Question: According to the first paragraph, why will we need a new way to grow food by 2050? Option 1: Because people will stop eating meat. Option 2: Because the sun will not be hot enough. Option 3: Because the population will grow to 10 billion and there isn't enough farmland left. Option 4: Because farmers want to work inside buildings."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>Vertical Farming</b><br><br>By the year 2050, the Earth's population is expected to reach nearly 10 billion people. To feed everyone, we will need to produce much more food. However, there is a big problem: there is not enough traditional farmland left. One innovative solution to this growing problem is vertical farming.<br><br>Instead of growing crops in wide, open fields, vertical farming involves growing plants in stacked layers inside tall buildings. These indoor farms use special LED lights instead of the sun. Because the plants are grown indoors, farmers can control the temperature and humidity perfectly. This means crops can be grown all year round, regardless of the weather outside.<br><br>Vertical farming has many advantages. It uses up to 90% less water than traditional farming because the water is recycled and used again. Also, since the plants are grown inside, there are no bugs. Therefore, farmers do not need to use toxic chemicals (pesticides) to protect the crops. While building these indoor farms is currently very expensive, experts believe that vertical farming will be a key part of feeding the future world.",
        question: "<b>[Text 2 - Question 2 of 5]</b><br>What replaces the sun in vertical farming?",
        options: [
            "Large windows",
            "Special LED lights",
            "Fire",
            "Recycled water"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Special LED lights.</b><br><br><b>הסבר:</b> בפסקה השנייה נאמר: 'These indoor farms use special LED lights instead of the sun' (החוות המקורות האלו משתמשות בנורות לד מיוחדות במקום בשמש).",
        tts_text: "Question: What replaces the sun in vertical farming? Option 1: Large windows. Option 2: Special LED lights. Option 3: Fire. Option 4: Recycled water."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>Vertical Farming</b><br><br>By the year 2050, the Earth's population is expected to reach nearly 10 billion people. To feed everyone, we will need to produce much more food. However, there is a big problem: there is not enough traditional farmland left. One innovative solution to this growing problem is vertical farming.<br><br>Instead of growing crops in wide, open fields, vertical farming involves growing plants in stacked layers inside tall buildings. These indoor farms use special LED lights instead of the sun. Because the plants are grown indoors, farmers can control the temperature and humidity perfectly. This means crops can be grown all year round, regardless of the weather outside.<br><br>Vertical farming has many advantages. It uses up to 90% less water than traditional farming because the water is recycled and used again. Also, since the plants are grown inside, there are no bugs. Therefore, farmers do not need to use toxic chemicals (pesticides) to protect the crops. While building these indoor farms is currently very expensive, experts believe that vertical farming will be a key part of feeding the future world.",
        question: "<b>[Text 2 - Question 3 of 5]</b><br>Why don't farmers need to use toxic chemicals (pesticides) in vertical farms?",
        options: [
            "Because the chemicals are too expensive.",
            "Because the crops are grown inside where there are no bugs.",
            "Because the LED lights kill all the bugs.",
            "Because vertical farms only grow flowers."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because the crops are grown inside where there are no bugs.</b><br><br><b>הסבר:</b> בפסקה השלישית מוסבר היתרון: בגלל שהצמחים גדלים בפנים, אין חרקים ('there are no bugs'), ולכן אין צורך להשתמש בכימיקלים רעילים (חומרי הדברה).",
        tts_text: "Question: Why don't farmers need to use toxic chemicals (pesticides) in vertical farms? Option 1: Because the chemicals are too expensive. Option 2: Because the crops are grown inside where there are no bugs. Option 3: Because the LED lights kill all the bugs. Option 4: Because vertical farms only grow flowers."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>Vertical Farming</b><br><br>By the year 2050, the Earth's population is expected to reach nearly 10 billion people. To feed everyone, we will need to produce much more food. However, there is a big problem: there is not enough traditional farmland left. One innovative solution to this growing problem is vertical farming.<br><br>Instead of growing crops in wide, open fields, vertical farming involves growing plants in stacked layers inside tall buildings. These indoor farms use special LED lights instead of the sun. Because the plants are grown indoors, farmers can control the temperature and humidity perfectly. This means crops can be grown all year round, regardless of the weather outside.<br><br>Vertical farming has many advantages. It uses up to 90% less water than traditional farming because the water is recycled and used again. Also, since the plants are grown inside, there are no bugs. Therefore, farmers do not need to use toxic chemicals (pesticides) to protect the crops. While building these indoor farms is currently very expensive, experts believe that vertical farming will be a key part of feeding the future world.",
        question: "<b>[Text 2 - Question 4 of 5]</b><br>What is one disadvantage (negative point) of vertical farming mentioned in the text?",
        options: [
            "It uses too much water.",
            "It can only grow food during the summer.",
            "It attracts too many bugs.",
            "Building the indoor farms is currently very expensive."
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Building the indoor farms is currently very expensive.</b><br><br><b>הסבר:</b> המילה 'While' מציגה ניגוד (חיסרון) בסוף הטקסט: 'While building these indoor farms is currently very expensive...' (בעוד שבניית החוות הפנימיות האלה יקרה מאוד כרגע...).",
        tts_text: "Question: What is one disadvantage of vertical farming mentioned in the text? Option 1: It uses too much water. Option 2: It can only grow food during the summer. Option 3: It attracts too many bugs. Option 4: Building the indoor farms is currently very expensive."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>Vertical Farming</b><br><br>By the year 2050, the Earth's population is expected to reach nearly 10 billion people. To feed everyone, we will need to produce much more food. However, there is a big problem: there is not enough traditional farmland left. One innovative solution to this growing problem is vertical farming.<br><br>Instead of growing crops in wide, open fields, vertical farming involves growing plants in stacked layers inside tall buildings. These indoor farms use special LED lights instead of the sun. Because the plants are grown indoors, farmers can control the temperature and humidity perfectly. This means crops can be grown all year round, regardless of the weather outside.<br><br>Vertical farming has many advantages. It uses up to 90% less water than traditional farming because the water is recycled and used again. Also, since the plants are grown inside, there are no bugs. Therefore, farmers do not need to use toxic chemicals (pesticides) to protect the crops. While building these indoor farms is currently very expensive, experts believe that vertical farming will be a key part of feeding the future world.",
        question: "<b>[Text 2 - Question 5 of 5]</b><br>What does the word 'innovative' mean in paragraph 1?",
        options: [
            "Boring and old.",
            "New, creative, and advanced.",
            "Dangerous to the environment.",
            "Very cheap."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: New, creative, and advanced.</b><br><br><b>הסבר:</b> המילה 'innovative' (חדשני) מתארת פתרון שהוא יצירתי, חדש ומתקדם. פתרון שמביא רעיון מחוץ לקופסה לבעיית המחסור בקרקעות.",
        tts_text: "Question: What does the word innovative mean in paragraph 1? Option 1: Boring and old. Option 2: New, creative, and advanced. Option 3: Dangerous to the environment. Option 4: Very cheap."
    },

    // =====================================================================
    // Text 3: The Psychology of Color (Module C)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Psychology of Color</b><br><br>Have you ever noticed that fast-food restaurants often use red and yellow in their logos? This is not a coincidence. Psychologists have found that colors can strongly influence our moods, feelings, and even our physical reactions. This field of study is known as color psychology, and it is widely used in marketing and design.<br><br>Different colors send different messages to our brains. For example, the color red is known to grab attention and increase our heart rate. It also makes people feel hungry, which is exactly why fast-food companies use it. On the other hand, the color blue has a calming effect. It can lower a person's blood pressure and make them feel relaxed. This is why many hospitals and bedrooms are painted in light shades of blue or green.<br><br>However, the meaning of a color can change depending on a person's culture. In Western cultures, white is associated with purity and weddings. But in some Eastern cultures, white is the color of mourning and is worn at funerals. Therefore, global companies must be very careful when choosing colors for their products in different countries.",
        question: "<b>[Text 3 - Question 1 of 5]</b><br>Why do fast-food restaurants use the color red in their logos?",
        options: [
            "Because red is a cheap color to print.",
            "Because red increases heart rate and makes people feel hungry.",
            "Because red is the favorite color of most psychologists.",
            "Because red lowers blood pressure."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because red increases heart rate and makes people feel hungry.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב במפורש שהצבע האדום תופס תשומת לב, מגביר דופק ועושה אנשים רעבים ('makes people feel hungry'), וזו הסיבה שחברות מזון מהיר משתמשות בו.",
        tts_text: "Question: Why do fast-food restaurants use the color red in their logos? Option 1: Because red is a cheap color to print. Option 2: Because red increases heart rate and makes people feel hungry. Option 3: Because red is the favorite color of most psychologists. Option 4: Because red lowers blood pressure."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Psychology of Color</b><br><br>Have you ever noticed that fast-food restaurants often use red and yellow in their logos? This is not a coincidence. Psychologists have found that colors can strongly influence our moods, feelings, and even our physical reactions. This field of study is known as color psychology, and it is widely used in marketing and design.<br><br>Different colors send different messages to our brains. For example, the color red is known to grab attention and increase our heart rate. It also makes people feel hungry, which is exactly why fast-food companies use it. On the other hand, the color blue has a calming effect. It can lower a person's blood pressure and make them feel relaxed. This is why many hospitals and bedrooms are painted in light shades of blue or green.<br><br>However, the meaning of a color can change depending on a person's culture. In Western cultures, white is associated with purity and weddings. But in some Eastern cultures, white is the color of mourning and is worn at funerals. Therefore, global companies must be very careful when choosing colors for their products in different countries.",
        question: "<b>[Text 3 - Question 2 of 5]</b><br>According to the text, why are hospitals often painted blue or green?",
        options: [
            "Because these colors look clean.",
            "Because these colors are easy to wash.",
            "Because they have a calming effect and make people feel relaxed.",
            "Because these are the only colors allowed by law."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because they have a calming effect and make people feel relaxed.</b><br><br><b>הסבר:</b> בפסקה השנייה נאמר שהצבע הכחול משרה רוגע ויכול להוריד לחץ דם, וזו הסיבה שמשתמשים בכחול ובירוק בבתי חולים ('This is why many hospitals...').",
        tts_text: "Question: According to the text, why are hospitals often painted blue or green? Option 1: Because these colors look clean. Option 2: Because these colors are easy to wash. Option 3: Because they have a calming effect and make people feel relaxed. Option 4: Because these are the only colors allowed by law."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Psychology of Color</b><br><br>Have you ever noticed that fast-food restaurants often use red and yellow in their logos? This is not a coincidence. Psychologists have found that colors can strongly influence our moods, feelings, and even our physical reactions. This field of study is known as color psychology, and it is widely used in marketing and design.<br><br>Different colors send different messages to our brains. For example, the color red is known to grab attention and increase our heart rate. It also makes people feel hungry, which is exactly why fast-food companies use it. On the other hand, the color blue has a calming effect. It can lower a person's blood pressure and make them feel relaxed. This is why many hospitals and bedrooms are painted in light shades of blue or green.<br><br>However, the meaning of a color can change depending on a person's culture. In Western cultures, white is associated with purity and weddings. But in some Eastern cultures, white is the color of mourning and is worn at funerals. Therefore, global companies must be very careful when choosing colors for their products in different countries.",
        question: "<b>[Text 3 - Question 3 of 5]</b><br>What does the author mean by the phrase 'This is not a coincidence' in the first paragraph?",
        options: [
            "It is a random mistake.",
            "It was done on purpose for a specific reason.",
            "It is illegal to use those colors.",
            "No one knows why it happens."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It was done on purpose for a specific reason.</b><br><br><b>הסבר:</b> הביטוי 'This is not a coincidence' (זה לא צירוף מקרים) משמעו שהדבר נעשה בכוונה תחילה ומתוך תכנון.",
        tts_text: "Question: What does the author mean by the phrase 'This is not a coincidence' in the first paragraph? Option 1: It is a random mistake. Option 2: It was done on purpose for a specific reason. Option 3: It is illegal to use those colors. Option 4: No one knows why it happens."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Psychology of Color</b><br><br>Have you ever noticed that fast-food restaurants often use red and yellow in their logos? This is not a coincidence. Psychologists have found that colors can strongly influence our moods, feelings, and even our physical reactions. This field of study is known as color psychology, and it is widely used in marketing and design.<br><br>Different colors send different messages to our brains. For example, the color red is known to grab attention and increase our heart rate. It also makes people feel hungry, which is exactly why fast-food companies use it. On the other hand, the color blue has a calming effect. It can lower a person's blood pressure and make them feel relaxed. This is why many hospitals and bedrooms are painted in light shades of blue or green.<br><br>However, the meaning of a color can change depending on a person's culture. In Western cultures, white is associated with purity and weddings. But in some Eastern cultures, white is the color of mourning and is worn at funerals. Therefore, global companies must be very careful when choosing colors for their products in different countries.",
        question: "<b>[Text 3 - Question 4 of 5]</b><br>How do feelings about the color white show that color psychology is complicated?",
        options: [
            "White is not considered a real color by scientists.",
            "White makes people hungry in every country.",
            "White means something happy (weddings) in Western cultures, but something sad (funerals) in Eastern cultures.",
            "White is always associated with hospitals."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: White means something happy in Western cultures, but something sad in Eastern cultures.</b><br><br><b>הסבר:</b> הפסקה השלישית ממחישה את ההבדלים התרבותיים בעזרת הצבע הלבן: במערב הוא מסמל חתונות וטוהר, ובמזרח הוא צבע של אבל ולוויות ('mourning').",
        tts_text: "Question: How do feelings about the color white show that color psychology is complicated? Option 1: White is not considered a real color by scientists. Option 2: White makes people hungry in every country. Option 3: White means something happy in Western cultures, but something sad in Eastern cultures. Option 4: White is always associated with hospitals."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Psychology of Color</b><br><br>Have you ever noticed that fast-food restaurants often use red and yellow in their logos? This is not a coincidence. Psychologists have found that colors can strongly influence our moods, feelings, and even our physical reactions. This field of study is known as color psychology, and it is widely used in marketing and design.<br><br>Different colors send different messages to our brains. For example, the color red is known to grab attention and increase our heart rate. It also makes people feel hungry, which is exactly why fast-food companies use it. On the other hand, the color blue has a calming effect. It can lower a person's blood pressure and make them feel relaxed. This is why many hospitals and bedrooms are painted in light shades of blue or green.<br><br>However, the meaning of a color can change depending on a person's culture. In Western cultures, white is associated with purity and weddings. But in some Eastern cultures, white is the color of mourning and is worn at funerals. Therefore, global companies must be very careful when choosing colors for their products in different countries.",
        question: "<b>[Text 3 - Question 5 of 5]</b><br>What is the main idea of the text?",
        options: [
            "Colors have a strong psychological and physical impact on people, but their meanings can change across cultures.",
            "Fast-food restaurants are trying to trick people into eating more.",
            "Blue is the best color to paint a bedroom.",
            "Psychologists should choose the colors for all international companies."
        ],
        correctAnswer: 0,
        solution: "<b>התשובה הנכונה היא: Colors have a strong psychological and physical impact on people, but their meanings can change across cultures.</b><br><br><b>הסבר:</b> רעיון מרכזי צריך לכלול את הנושא הראשי (פסיכולוגיה של צבעים והשפעתם הפיזית/נפשית) ואת ההסתייגות שהובאה בסוף (ההבדלים בין תרבויות). תשובה זו מכסה את שניהם.",
        tts_text: "Question: What is the main idea of the text? Option 1: Colors have a strong psychological and physical impact on people, but their meanings can change across cultures. Option 2: Fast-food restaurants are trying to trick people into eating more. Option 3: Blue is the best color to paint a bedroom. Option 4: Psychologists should choose the colors for all international companies."
    },

    // =====================================================================
    // Text 4: Digital Nomads (Module C)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Rise of Digital Nomads</b><br><br>In the past, having a job usually meant waking up early, driving to an office, and sitting at a desk from nine to five. Today, modern technology has created a completely new type of worker: the digital nomad. Digital nomads are people who work online while traveling the world. As long as they have a laptop and a good internet connection, their \"office\" can be a coffee shop in Paris, a beach in Thailand, or a mountain cabin in Peru.<br><br>This lifestyle has become very popular, especially among young professionals. The main advantage is freedom. Digital nomads can choose when and where they work. They don't have to deal with long daily commutes or strict office rules. In addition, many companies like hiring remote workers because it saves them money. They don't need to rent large office spaces or pay for electricity and coffee for their employees.<br><br>However, the digital nomad lifestyle is not always a permanent vacation. It can be difficult to focus on work when you are surrounded by tourists and beautiful beaches. Furthermore, moving from place to place can be exhausting, and many digital nomads report feeling lonely because they miss their family and close friends back home. Despite these challenges, the number of digital nomads continues to grow every year.",
        question: "<b>[Text 4 - Question 1 of 5]</b><br>What defines a 'digital nomad' according to the text?",
        options: [
            "A person who sells computers around the world.",
            "Someone who works online while traveling to different places.",
            "A tourist who does not have a job.",
            "A boss who manages a large office."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Someone who works online while traveling to different places.</b><br><br><b>הסבר:</b> בפסקה הראשונה ההגדרה ברורה: 'Digital nomads are people who work online while traveling the world' (נוודים דיגיטליים הם אנשים שעובדים ברשת בזמן שהם מטיילים בעולם).",
        tts_text: "Question: What defines a 'digital nomad' according to the text? Option 1: A person who sells computers around the world. Option 2: Someone who works online while traveling to different places. Option 3: A tourist who does not have a job. Option 4: A boss who manages a large office."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Rise of Digital Nomads</b><br><br>In the past, having a job usually meant waking up early, driving to an office, and sitting at a desk from nine to five. Today, modern technology has created a completely new type of worker: the digital nomad. Digital nomads are people who work online while traveling the world. As long as they have a laptop and a good internet connection, their \"office\" can be a coffee shop in Paris, a beach in Thailand, or a mountain cabin in Peru.<br><br>This lifestyle has become very popular, especially among young professionals. The main advantage is freedom. Digital nomads can choose when and where they work. They don't have to deal with long daily commutes or strict office rules. In addition, many companies like hiring remote workers because it saves them money. They don't need to rent large office spaces or pay for electricity and coffee for their employees.<br><br>However, the digital nomad lifestyle is not always a permanent vacation. It can be difficult to focus on work when you are surrounded by tourists and beautiful beaches. Furthermore, moving from place to place can be exhausting, and many digital nomads report feeling lonely because they miss their family and close friends back home. Despite these challenges, the number of digital nomads continues to grow every year.",
        question: "<b>[Text 4 - Question 2 of 5]</b><br>What are the two basic things a digital nomad needs to work?",
        options: [
            "A car and an office.",
            "A coffee shop and a beach.",
            "A laptop and a good internet connection.",
            "A lot of money and free time."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: A laptop and a good internet connection.</b><br><br><b>הסבר:</b> בסוף הפסקה הראשונה מצוין התנאי היחיד לעבודה שלהם: 'As long as they have a laptop and a good internet connection' (כל עוד יש להם מחשב נייד וחיבור אינטרנט טוב).",
        tts_text: "Question: What are the two basic things a digital nomad needs to work? Option 1: A car and an office. Option 2: A coffee shop and a beach. Option 3: A laptop and a good internet connection. Option 4: A lot of money and free time."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Rise of Digital Nomads</b><br><br>In the past, having a job usually meant waking up early, driving to an office, and sitting at a desk from nine to five. Today, modern technology has created a completely new type of worker: the digital nomad. Digital nomads are people who work online while traveling the world. As long as they have a laptop and a good internet connection, their \"office\" can be a coffee shop in Paris, a beach in Thailand, or a mountain cabin in Peru.<br><br>This lifestyle has become very popular, especially among young professionals. The main advantage is freedom. Digital nomads can choose when and where they work. They don't have to deal with long daily commutes or strict office rules. In addition, many companies like hiring remote workers because it saves them money. They don't need to rent large office spaces or pay for electricity and coffee for their employees.<br><br>However, the digital nomad lifestyle is not always a permanent vacation. It can be difficult to focus on work when you are surrounded by tourists and beautiful beaches. Furthermore, moving from place to place can be exhausting, and many digital nomads report feeling lonely because they miss their family and close friends back home. Despite these challenges, the number of digital nomads continues to grow every year.",
        question: "<b>[Text 4 - Question 3 of 5]</b><br>Why do many companies like to hire 'remote workers' (people who work from outside the office)?",
        options: [
            "Because remote workers are usually smarter.",
            "Because it saves the company money on renting office space and electricity.",
            "Because remote workers travel to Paris.",
            "Because they work longer hours."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because it saves the company money on renting office space and electricity.</b><br><br><b>הסבר:</b> בפסקה השנייה כתוב: 'saves them money. They don't need to rent large office spaces or pay for electricity...' (זה חוסך להם כסף. הם לא צריכים לשכור משרדים גדולים או לשלם על חשמל).",
        tts_text: "Question: Why do many companies like to hire remote workers? Option 1: Because remote workers are usually smarter. Option 2: Because it saves the company money on renting office space and electricity. Option 3: Because remote workers travel to Paris. Option 4: Because they work longer hours."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Rise of Digital Nomads</b><br><br>In the past, having a job usually meant waking up early, driving to an office, and sitting at a desk from nine to five. Today, modern technology has created a completely new type of worker: the digital nomad. Digital nomads are people who work online while traveling the world. As long as they have a laptop and a good internet connection, their \"office\" can be a coffee shop in Paris, a beach in Thailand, or a mountain cabin in Peru.<br><br>This lifestyle has become very popular, especially among young professionals. The main advantage is freedom. Digital nomads can choose when and where they work. They don't have to deal with long daily commutes or strict office rules. In addition, many companies like hiring remote workers because it saves them money. They don't need to rent large office spaces or pay for electricity and coffee for their employees.<br><br>However, the digital nomad lifestyle is not always a permanent vacation. It can be difficult to focus on work when you are surrounded by tourists and beautiful beaches. Furthermore, moving from place to place can be exhausting, and many digital nomads report feeling lonely because they miss their family and close friends back home. Despite these challenges, the number of digital nomads continues to grow every year.",
        question: "<b>[Text 4 - Question 4 of 5]</b><br>According to the final paragraph, what is one negative aspect (disadvantage) of being a digital nomad?",
        options: [
            "They don't make enough money to buy a laptop.",
            "They often feel lonely and miss their family and friends.",
            "They are forced to work from nine to five.",
            "They have to follow strict office rules."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They often feel lonely and miss their family and friends.</b><br><br><b>הסבר:</b> הפסקה השלישית מציגה את החסרונות ('However...'). אחד מהם הוא הבדידות: 'many digital nomads report feeling lonely because they miss their family...' (נוודים רבים מדווחים על תחושת בדידות כי הם מתגעגעים למשפחתם).",
        tts_text: "Question: According to the final paragraph, what is one negative aspect of being a digital nomad? Option 1: They don't make enough money to buy a laptop. Option 2: They often feel lonely and miss their family and friends. Option 3: They are forced to work from nine to five. Option 4: They have to follow strict office rules."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Rise of Digital Nomads</b><br><br>In the past, having a job usually meant waking up early, driving to an office, and sitting at a desk from nine to five. Today, modern technology has created a completely new type of worker: the digital nomad. Digital nomads are people who work online while traveling the world. As long as they have a laptop and a good internet connection, their \"office\" can be a coffee shop in Paris, a beach in Thailand, or a mountain cabin in Peru.<br><br>This lifestyle has become very popular, especially among young professionals. The main advantage is freedom. Digital nomads can choose when and where they work. They don't have to deal with long daily commutes or strict office rules. In addition, many companies like hiring remote workers because it saves them money. They don't need to rent large office spaces or pay for electricity and coffee for their employees.<br><br>However, the digital nomad lifestyle is not always a permanent vacation. It can be difficult to focus on work when you are surrounded by tourists and beautiful beaches. Furthermore, moving from place to place can be exhausting, and many digital nomads report feeling lonely because they miss their family and close friends back home. Despite these challenges, the number of digital nomads continues to grow every year.",
        question: "<b>[Text 4 - Question 5 of 5]</b><br>What does the word 'commutes' mean in paragraph 2? ('They don't have to deal with long daily commutes...')",
        options: [
            "Arguments with the boss.",
            "Journeys traveled regularly between home and work.",
            "Computer problems.",
            "Expensive coffee breaks."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Journeys traveled regularly between home and work.</b><br><br><b>הסבר:</b> המילה 'commute' פירושה 'נסיעה לעבודה' (הדרך הלוך ושוב מהבית למשרד). נוודים דיגיטליים לא צריכים לבזבז זמן בנסיעות יומיות ארוכות.",
        tts_text: "Question: What does the word commutes mean in paragraph 2? Option 1: Arguments with the boss. Option 2: Journeys traveled regularly between home and work. Option 3: Computer problems. Option 4: Expensive coffee breaks."
    },

    // =====================================================================
    // Text 5: The Mystery of Sleepwalking (Module C)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Mystery of Sleepwalking</b><br><br>Sleepwalking is a sleep disorder that has puzzled scientists and doctors for centuries. It occurs when a person gets out of bed and walks around while they are still asleep. This usually happens during the deepest stage of sleep, mostly in the first few hours of the night. Sleepwalkers may do simple things like sitting up in bed, but they can also perform complex activities like cooking a meal or even driving a car.<br><br>Why do people sleepwalk? The exact cause is still a mystery, but researchers know that certain factors can trigger it. Stress, extreme tiredness, and a lack of sleep are the most common reasons. In addition, genetics play a big role. If a child's parents were sleepwalkers, there is a high chance the child will sleepwalk too. It is much more common in children than in adults, and most kids simply outgrow it as they get older.<br><br>There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack. Doctors say this is absolutely false. While waking a sleepwalker is not dangerous, it can make them feel very confused and scared. The best thing to do if you find someone sleepwalking is to gently guide them back to their bed so they don't get hurt.",
        question: "<b>[Text 5 - Question 1 of 5]</b><br>When does sleepwalking usually happen?",
        options: [
            "Only when the person is having a bad dream.",
            "In the morning just before waking up.",
            "During the deepest stage of sleep, in the first few hours of the night.",
            "Only when a person sleeps during the day."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: During the deepest stage of sleep, in the first few hours of the night.</b><br><br><b>הסבר:</b> בפסקה הראשונה נאמר במפורש: 'This usually happens during the deepest stage of sleep, mostly in the first few hours of the night' (זה בדרך כלל קורה בשלב העמוק ביותר של השינה, לרוב בשעות הראשונות של הלילה).",
        tts_text: "Question: When does sleepwalking usually happen? Option 1: Only when the person is having a bad dream. Option 2: In the morning just before waking up. Option 3: During the deepest stage of sleep, in the first few hours of the night. Option 4: Only when a person sleeps during the day."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Mystery of Sleepwalking</b><br><br>Sleepwalking is a sleep disorder that has puzzled scientists and doctors for centuries. It occurs when a person gets out of bed and walks around while they are still asleep. This usually happens during the deepest stage of sleep, mostly in the first few hours of the night. Sleepwalkers may do simple things like sitting up in bed, but they can also perform complex activities like cooking a meal or even driving a car.<br><br>Why do people sleepwalk? The exact cause is still a mystery, but researchers know that certain factors can trigger it. Stress, extreme tiredness, and a lack of sleep are the most common reasons. In addition, genetics play a big role. If a child's parents were sleepwalkers, there is a high chance the child will sleepwalk too. It is much more common in children than in adults, and most kids simply outgrow it as they get older.<br><br>There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack. Doctors say this is absolutely false. While waking a sleepwalker is not dangerous, it can make them feel very confused and scared. The best thing to do if you find someone sleepwalking is to gently guide them back to their bed so they don't get hurt.",
        question: "<b>[Text 5 - Question 2 of 5]</b><br>Which of the following is NOT mentioned as a reason why people might sleepwalk?",
        options: [
            "Lack of sleep",
            "Eating too much before bed",
            "Stress",
            "Genetics (having parents who sleepwalked)"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Eating too much before bed.</b><br><br><b>הסבר:</b> בפסקה השנייה מוזכרים הגורמים: מתח (Stress), עייפות וחסך בשינה (lack of sleep), וגנטיקה (Genetics). אכילה מרובה לפני השינה לא מוזכרת בטקסט.",
        tts_text: "Question: Which of the following is NOT mentioned as a reason why people might sleepwalk? Option 1: Lack of sleep. Option 2: Eating too much before bed. Option 3: Stress. Option 4: Genetics."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Mystery of Sleepwalking</b><br><br>Sleepwalking is a sleep disorder that has puzzled scientists and doctors for centuries. It occurs when a person gets out of bed and walks around while they are still asleep. This usually happens during the deepest stage of sleep, mostly in the first few hours of the night. Sleepwalkers may do simple things like sitting up in bed, but they can also perform complex activities like cooking a meal or even driving a car.<br><br>Why do people sleepwalk? The exact cause is still a mystery, but researchers know that certain factors can trigger it. Stress, extreme tiredness, and a lack of sleep are the most common reasons. In addition, genetics play a big role. If a child's parents were sleepwalkers, there is a high chance the child will sleepwalk too. It is much more common in children than in adults, and most kids simply outgrow it as they get older.<br><br>There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack. Doctors say this is absolutely false. While waking a sleepwalker is not dangerous, it can make them feel very confused and scared. The best thing to do if you find someone sleepwalking is to gently guide them back to their bed so they don't get hurt.",
        question: "<b>[Text 5 - Question 3 of 5]</b><br>What does it mean when the text says children 'outgrow' sleepwalking?",
        options: [
            "They grow too tall to sleepwalk.",
            "They stop sleepwalking as they get older.",
            "They walk outside their homes.",
            "They teach their parents how to sleepwalk."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They stop sleepwalking as they get older.</b><br><br><b>הסבר:</b> הפועל 'outgrow' באנגלית משמעו 'להיגמל ממשהו כשמתבגרים'. הילדים מפסיקים ללכת מתוך שינה כשהם גדלים.",
        tts_text: "Question: What does it mean when the text says children outgrow sleepwalking? Option 1: They grow too tall to sleepwalk. Option 2: They stop sleepwalking as they get older. Option 3: They walk outside their homes. Option 4: They teach their parents how to sleepwalk."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Mystery of Sleepwalking</b><br><br>Sleepwalking is a sleep disorder that has puzzled scientists and doctors for centuries. It occurs when a person gets out of bed and walks around while they are still asleep. This usually happens during the deepest stage of sleep, mostly in the first few hours of the night. Sleepwalkers may do simple things like sitting up in bed, but they can also perform complex activities like cooking a meal or even driving a car.<br><br>Why do people sleepwalk? The exact cause is still a mystery, but researchers know that certain factors can trigger it. Stress, extreme tiredness, and a lack of sleep are the most common reasons. In addition, genetics play a big role. If a child's parents were sleepwalkers, there is a high chance the child will sleepwalk too. It is much more common in children than in adults, and most kids simply outgrow it as they get older.<br><br>There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack. Doctors say this is absolutely false. While waking a sleepwalker is not dangerous, it can make them feel very confused and scared. The best thing to do if you find someone sleepwalking is to gently guide them back to their bed so they don't get hurt.",
        question: "<b>[Text 5 - Question 4 of 5]</b><br>What is the popular myth about sleepwalkers mentioned in the third paragraph?",
        options: [
            "That they always have their eyes closed.",
            "That waking them up can give them a heart attack.",
            "That they are looking for food.",
            "That they remember everything they did."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: That waking them up can give them a heart attack.</b><br><br><b>הסבר:</b> הפסקה השלישית מציגה מיתוס (אמונה טפלה שגויה): 'There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack' (שיש סכנה להתקף לב אם מעירים אותם).",
        tts_text: "Question: What is the popular myth about sleepwalkers mentioned in the third paragraph? Option 1: That they always have their eyes closed. Option 2: That waking them up can give them a heart attack. Option 3: That they are looking for food. Option 4: That they remember everything they did."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module C Practice (רמה 3-4 יחידות)",
        passage: "<b>The Mystery of Sleepwalking</b><br><br>Sleepwalking is a sleep disorder that has puzzled scientists and doctors for centuries. It occurs when a person gets out of bed and walks around while they are still asleep. This usually happens during the deepest stage of sleep, mostly in the first few hours of the night. Sleepwalkers may do simple things like sitting up in bed, but they can also perform complex activities like cooking a meal or even driving a car.<br><br>Why do people sleepwalk? The exact cause is still a mystery, but researchers know that certain factors can trigger it. Stress, extreme tiredness, and a lack of sleep are the most common reasons. In addition, genetics play a big role. If a child's parents were sleepwalkers, there is a high chance the child will sleepwalk too. It is much more common in children than in adults, and most kids simply outgrow it as they get older.<br><br>There is a popular myth that you should never wake up a sleepwalker because it might give them a heart attack. Doctors say this is absolutely false. While waking a sleepwalker is not dangerous, it can make them feel very confused and scared. The best thing to do if you find someone sleepwalking is to gently guide them back to their bed so they don't get hurt.",
        question: "<b>[Text 5 - Question 5 of 5]</b><br>What do doctors recommend you do if you see someone sleepwalking?",
        options: [
            "Yell their name to wake them up quickly.",
            "Take a picture of them.",
            "Gently guide them back to their bed so they are safe.",
            "Give them a glass of cold water."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Gently guide them back to their bed so they are safe.</b><br><br><b>הסבר:</b> המשפט האחרון מציע פתרון מעשי: 'The best thing to do... is to gently guide them back to their bed so they don't get hurt' (להדריך אותם בעדינות בחזרה למיטה).",
        tts_text: "Question: What do doctors recommend you do if you see someone sleepwalking? Option 1: Yell their name to wake them up quickly. Option 2: Take a picture of them. Option 3: Gently guide them back to their bed so they are safe. Option 4: Give them a glass of cold water."
    },

    // =====================================================================
    // =====================================================================
    // Sub-topic: High School: Module E Practice (רמה 4-5 יחידות)
    // =====================================================================
    // =====================================================================

    // =====================================================================
    // Text 6: Biomimicry: Innovation Inspired by Nature (Module E)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>Biomimicry: Innovation Inspired by Nature</b><br><br>For centuries, human engineers have struggled to solve complex design problems. Recently, however, they have begun looking to the ultimate problem-solver for inspiration: nature. This approach, known as biomimicry, involves studying nature's models and imitating their designs to solve human challenges. Nature, through millions of years of evolution, has already developed highly efficient and sustainable mechanisms. By observing these natural blueprints, scientists can create technology that is both innovative and eco-friendly.<br><br>A classic example of biomimicry is the invention of Velcro. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the woods. Upon returning, he noticed that his dog's fur was covered in small, prickly burrs from plants. Curious, he examined the burrs under a microscope and discovered they had hundreds of tiny hooks that easily caught on anything with loops, like fur or clothing. Inspired by this natural mechanism, he invented Velcro, a fastener used worldwide today in everything from shoes to spacesuits.<br><br>Another remarkable achievement of biomimicry is the design of Japan's Shinkansen Bullet Train. Initially, the high-speed train created a thunderous \"boom\" sound when exiting tunnels, causing a massive noise pollution problem for nearby residents. The chief engineer, an avid birdwatcher, redesigned the nose of the train to mimic the beak of the kingfisher—a bird that dives into water with barely a splash. The new design not only eliminated the noise problem but also made the train 10% faster and 15% more energy-efficient. Ultimately, biomimicry proves that the answers to our modern problems may have been existing in the natural world all along.",
        question: "<b>[Text 6 - Question 1 of 5]</b><br>What is the fundamental definition of 'biomimicry' as presented in the first paragraph?",
        options: [
            "The process of preserving natural habitats from technological destruction.",
            "The practice of studying nature's models and imitating their designs to solve human challenges.",
            "A biological process that takes millions of years of evolution.",
            "The creation of eco-friendly materials using only natural plant fibers."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The practice of studying nature's models and imitating their designs to solve human challenges.</b><br><br><b>הסבר:</b> מציאת הגדרה מדויקת (Module E skill). בפסקה הראשונה נכתב: 'involves studying nature's models and imitating their designs to solve human challenges' (כרוך בחקר המודלים של הטבע וחיקוי העיצובים שלהם לפתרון אתגרים אנושיים).",
        tts_text: "Question: What is the fundamental definition of biomimicry as presented in the first paragraph? Option 1: The process of preserving natural habitats from technological destruction. Option 2: The practice of studying nature's models and imitating their designs to solve human challenges. Option 3: A biological process that takes millions of years of evolution. Option 4: The creation of eco-friendly materials using only natural plant fibers."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>Biomimicry: Innovation Inspired by Nature</b><br><br>For centuries, human engineers have struggled to solve complex design problems. Recently, however, they have begun looking to the ultimate problem-solver for inspiration: nature. This approach, known as biomimicry, involves studying nature's models and imitating their designs to solve human challenges. Nature, through millions of years of evolution, has already developed highly efficient and sustainable mechanisms. By observing these natural blueprints, scientists can create technology that is both innovative and eco-friendly.<br><br>A classic example of biomimicry is the invention of Velcro. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the woods. Upon returning, he noticed that his dog's fur was covered in small, prickly burrs from plants. Curious, he examined the burrs under a microscope and discovered they had hundreds of tiny hooks that easily caught on anything with loops, like fur or clothing. Inspired by this natural mechanism, he invented Velcro, a fastener used worldwide today in everything from shoes to spacesuits.<br><br>Another remarkable achievement of biomimicry is the design of Japan's Shinkansen Bullet Train. Initially, the high-speed train created a thunderous \"boom\" sound when exiting tunnels, causing a massive noise pollution problem for nearby residents. The chief engineer, an avid birdwatcher, redesigned the nose of the train to mimic the beak of the kingfisher—a bird that dives into water with barely a splash. The new design not only eliminated the noise problem but also made the train 10% faster and 15% more energy-efficient. Ultimately, biomimicry proves that the answers to our modern problems may have been existing in the natural world all along.",
        question: "<b>[Text 6 - Question 2 of 5]</b><br>What natural mechanism inspired George de Mestral to invent Velcro?",
        options: [
            "The way a dog's fur grows.",
            "The tiny hooks on plant burrs that catch onto loops.",
            "The microscope he used in his laboratory.",
            "The beak of a kingfisher."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The tiny hooks on plant burrs that catch onto loops.</b><br><br><b>הסבר:</b> בפסקה השנייה מתואר כיצד בחן את הקוצים/קרסים של הצמח (burrs) שנדבקו לפרוות כלבו, וגילה שיש להם קרסים זעירים ('tiny hooks') שנתפסים בלולאות ('loops'). זהו המנגנון שהיווה השראה לולקרו (סקוצ').",
        tts_text: "Question: What natural mechanism inspired George de Mestral to invent Velcro? Option 1: The way a dog's fur grows. Option 2: The tiny hooks on plant burrs that catch onto loops. Option 3: The microscope he used in his laboratory. Option 4: The beak of a kingfisher."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>Biomimicry: Innovation Inspired by Nature</b><br><br>For centuries, human engineers have struggled to solve complex design problems. Recently, however, they have begun looking to the ultimate problem-solver for inspiration: nature. This approach, known as biomimicry, involves studying nature's models and imitating their designs to solve human challenges. Nature, through millions of years of evolution, has already developed highly efficient and sustainable mechanisms. By observing these natural blueprints, scientists can create technology that is both innovative and eco-friendly.<br><br>A classic example of biomimicry is the invention of Velcro. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the woods. Upon returning, he noticed that his dog's fur was covered in small, prickly burrs from plants. Curious, he examined the burrs under a microscope and discovered they had hundreds of tiny hooks that easily caught on anything with loops, like fur or clothing. Inspired by this natural mechanism, he invented Velcro, a fastener used worldwide today in everything from shoes to spacesuits.<br><br>Another remarkable achievement of biomimicry is the design of Japan's Shinkansen Bullet Train. Initially, the high-speed train created a thunderous \"boom\" sound when exiting tunnels, causing a massive noise pollution problem for nearby residents. The chief engineer, an avid birdwatcher, redesigned the nose of the train to mimic the beak of the kingfisher—a bird that dives into water with barely a splash. The new design not only eliminated the noise problem but also made the train 10% faster and 15% more energy-efficient. Ultimately, biomimicry proves that the answers to our modern problems may have been existing in the natural world all along.",
        question: "<b>[Text 6 - Question 3 of 5]</b><br>What primary problem did the engineers of the Shinkansen Bullet Train face before the redesign?",
        options: [
            "The train was not energy-efficient enough.",
            "The train created a massive noise pollution problem when exiting tunnels.",
            "The train could not go fast enough.",
            "The train was too heavy to travel through water."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The train created a massive noise pollution problem when exiting tunnels.</b><br><br><b>הסבר:</b> בפסקה השלישית מובאת הבעיה המקורית: הרכבת יצרה קול נפץ אדיר ביציאה ממנהרות ('created a thunderous boom sound... causing a massive noise pollution problem').",
        tts_text: "Question: What primary problem did the engineers of the Shinkansen Bullet Train face before the redesign? Option 1: The train was not energy-efficient enough. Option 2: The train created a massive noise pollution problem when exiting tunnels. Option 3: The train could not go fast enough. Option 4: The train was too heavy to travel through water."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>Biomimicry: Innovation Inspired by Nature</b><br><br>For centuries, human engineers have struggled to solve complex design problems. Recently, however, they have begun looking to the ultimate problem-solver for inspiration: nature. This approach, known as biomimicry, involves studying nature's models and imitating their designs to solve human challenges. Nature, through millions of years of evolution, has already developed highly efficient and sustainable mechanisms. By observing these natural blueprints, scientists can create technology that is both innovative and eco-friendly.<br><br>A classic example of biomimicry is the invention of Velcro. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the woods. Upon returning, he noticed that his dog's fur was covered in small, prickly burrs from plants. Curious, he examined the burrs under a microscope and discovered they had hundreds of tiny hooks that easily caught on anything with loops, like fur or clothing. Inspired by this natural mechanism, he invented Velcro, a fastener used worldwide today in everything from shoes to spacesuits.<br><br>Another remarkable achievement of biomimicry is the design of Japan's Shinkansen Bullet Train. Initially, the high-speed train created a thunderous \"boom\" sound when exiting tunnels, causing a massive noise pollution problem for nearby residents. The chief engineer, an avid birdwatcher, redesigned the nose of the train to mimic the beak of the kingfisher—a bird that dives into water with barely a splash. The new design not only eliminated the noise problem but also made the train 10% faster and 15% more energy-efficient. Ultimately, biomimicry proves that the answers to our modern problems may have been existing in the natural world all along.",
        question: "<b>[Text 6 - Question 4 of 5]</b><br>What does the word 'mimic' mean in the context of the third paragraph?",
        options: [
            "To destroy",
            "To ignore",
            "To imitate or copy closely",
            "To hunt"
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To imitate or copy closely.</b><br><br><b>הסבר:</b> שאלת אוצר מילים מקושר הקשר. הפועל to mimic (לחקות) משמעו להעתיק צורה או התנהגות של משהו אחר. המהנדס עיצב את הרכבת כך שתחקה את מקור הציפור.",
        tts_text: "Question: What does the word mimic mean in the context of the third paragraph? Option 1: To destroy. Option 2: To ignore. Option 3: To imitate or copy closely. Option 4: To hunt."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>Biomimicry: Innovation Inspired by Nature</b><br><br>For centuries, human engineers have struggled to solve complex design problems. Recently, however, they have begun looking to the ultimate problem-solver for inspiration: nature. This approach, known as biomimicry, involves studying nature's models and imitating their designs to solve human challenges. Nature, through millions of years of evolution, has already developed highly efficient and sustainable mechanisms. By observing these natural blueprints, scientists can create technology that is both innovative and eco-friendly.<br><br>A classic example of biomimicry is the invention of Velcro. In 1941, a Swiss engineer named George de Mestral took his dog for a walk in the woods. Upon returning, he noticed that his dog's fur was covered in small, prickly burrs from plants. Curious, he examined the burrs under a microscope and discovered they had hundreds of tiny hooks that easily caught on anything with loops, like fur or clothing. Inspired by this natural mechanism, he invented Velcro, a fastener used worldwide today in everything from shoes to spacesuits.<br><br>Another remarkable achievement of biomimicry is the design of Japan's Shinkansen Bullet Train. Initially, the high-speed train created a thunderous \"boom\" sound when exiting tunnels, causing a massive noise pollution problem for nearby residents. The chief engineer, an avid birdwatcher, redesigned the nose of the train to mimic the beak of the kingfisher—a bird that dives into water with barely a splash. The new design not only eliminated the noise problem but also made the train 10% faster and 15% more energy-efficient. Ultimately, biomimicry proves that the answers to our modern problems may have been existing in the natural world all along.",
        question: "<b>[Text 6 - Question 5 of 5]</b><br>What is the author's primary purpose in writing this article?",
        options: [
            "To warn people about the dangers of high-speed trains.",
            "To explain the concept of biomimicry and provide successful examples of it.",
            "To prove that human engineers are not very smart.",
            "To promote a new type of Velcro."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To explain the concept of biomimicry and provide successful examples of it.</b><br><br><b>הסבר:</b> מטרת הכותב (Author's Purpose) היא להסביר מהי 'ביומימיקרי' (פסקה 1) ואז לתת לה שתי דוגמאות מנצחות (פסקה 2 על ולקרו, ופסקה 3 על רכבת הקליע), כדי להראות את חשיבותה.",
        tts_text: "Question: What is the author's primary purpose in writing this article? Option 1: To warn people about the dangers of high-speed trains. Option 2: To explain the concept of biomimicry and provide successful examples of it. Option 3: To prove that human engineers are not very smart. Option 4: To promote a new type of Velcro."
    },

    // =====================================================================
    // Text 7: The Paradox of Choice (Module E)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Paradox of Choice</b><br><br>In modern consumer societies, freedom is often associated with having a wide variety of choices. Walk into any supermarket, and you will find dozens of types of cereal, toothpaste, and shampoo. While common logic suggests that more options lead to greater satisfaction, psychologist Barry Schwartz argues the exact opposite. In his influential theory, \"The Paradox of Choice,\" Schwartz explains that an abundance of options actually causes anxiety, decision paralysis, and dissatisfaction.<br><br>According to Schwartz, when faced with too many choices, people spend an excessive amount of time weighing the pros and cons of each option. This leads to \"decision paralysis,\" where the fear of making the wrong choice makes it nearly impossible to choose at all. Even when a choice is finally made, people often feel less satisfied with it. They suffer from \"opportunity cost\"—the lingering regret of giving up all the other attractive alternatives they didn't choose.<br><br>To combat this modern dilemma, psychologists suggest a shift in mindset. Instead of trying to be \"maximizers\" who exhaustively search for the absolute best option, people should aim to be \"satisficers.\" A satisficer settles for something that is \"good enough\" and meets their basic criteria, without worrying about what they might have missed. By intentionally limiting our choices, we can significantly increase our overall happiness and peace of mind.",
        question: "<b>[Text 7 - Question 1 of 5]</b><br>What is the common logical assumption about choices mentioned in the first paragraph?",
        options: [
            "That having many choices causes extreme anxiety.",
            "That people should avoid supermarkets with too many products.",
            "That having more options leads to greater satisfaction.",
            "That psychologists should decide what people buy."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: That having more options leads to greater satisfaction.</b><br><br><b>הסבר:</b> בפסקה 1 מובאת ההנחה הרווחת: 'common logic suggests that more options lead to greater satisfaction' (ההיגיון הבריא מרמז שיותר אפשרויות מובילות לשביעות רצון גדולה יותר). שוורץ, לעומת זאת, טוען את ההפך.",
        tts_text: "Question: What is the common logical assumption about choices mentioned in the first paragraph? Option 1: That having many choices causes extreme anxiety. Option 2: That people should avoid supermarkets with too many products. Option 3: That having more options leads to greater satisfaction. Option 4: That psychologists should decide what people buy."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Paradox of Choice</b><br><br>In modern consumer societies, freedom is often associated with having a wide variety of choices. Walk into any supermarket, and you will find dozens of types of cereal, toothpaste, and shampoo. While common logic suggests that more options lead to greater satisfaction, psychologist Barry Schwartz argues the exact opposite. In his influential theory, \"The Paradox of Choice,\" Schwartz explains that an abundance of options actually causes anxiety, decision paralysis, and dissatisfaction.<br><br>According to Schwartz, when faced with too many choices, people spend an excessive amount of time weighing the pros and cons of each option. This leads to \"decision paralysis,\" where the fear of making the wrong choice makes it nearly impossible to choose at all. Even when a choice is finally made, people often feel less satisfied with it. They suffer from \"opportunity cost\"—the lingering regret of giving up all the other attractive alternatives they didn't choose.<br><br>To combat this modern dilemma, psychologists suggest a shift in mindset. Instead of trying to be \"maximizers\" who exhaustively search for the absolute best option, people should aim to be \"satisficers.\" A satisficer settles for something that is \"good enough\" and meets their basic criteria, without worrying about what they might have missed. By intentionally limiting our choices, we can significantly increase our overall happiness and peace of mind.",
        question: "<b>[Text 7 - Question 2 of 5]</b><br>According to the second paragraph, what causes 'decision paralysis'?",
        options: [
            "Not having enough money to buy the product.",
            "The fear of making the wrong choice when faced with too many options.",
            "The store closing before the decision is made.",
            "Being forced to be a 'maximizer'."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The fear of making the wrong choice when faced with too many options.</b><br><br><b>הסבר:</b> בפסקה 2 מוגדר המונח: 'decision paralysis, where the fear of making the wrong choice makes it nearly impossible to choose at all' (שיתוק החלטה, מצב שבו הפחד מלעשות את הבחירה הלא נכונה מקשה מאוד להחליט).",
        tts_text: "Question: According to the second paragraph, what causes decision paralysis? Option 1: Not having enough money to buy the product. Option 2: The fear of making the wrong choice when faced with too many options. Option 3: The store closing before the decision is made. Option 4: Being forced to be a maximizer."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Paradox of Choice</b><br><br>In modern consumer societies, freedom is often associated with having a wide variety of choices. Walk into any supermarket, and you will find dozens of types of cereal, toothpaste, and shampoo. While common logic suggests that more options lead to greater satisfaction, psychologist Barry Schwartz argues the exact opposite. In his influential theory, \"The Paradox of Choice,\" Schwartz explains that an abundance of options actually causes anxiety, decision paralysis, and dissatisfaction.<br><br>According to Schwartz, when faced with too many choices, people spend an excessive amount of time weighing the pros and cons of each option. This leads to \"decision paralysis,\" where the fear of making the wrong choice makes it nearly impossible to choose at all. Even when a choice is finally made, people often feel less satisfied with it. They suffer from \"opportunity cost\"—the lingering regret of giving up all the other attractive alternatives they didn't choose.<br><br>To combat this modern dilemma, psychologists suggest a shift in mindset. Instead of trying to be \"maximizers\" who exhaustively search for the absolute best option, people should aim to be \"satisficers.\" A satisficer settles for something that is \"good enough\" and meets their basic criteria, without worrying about what they might have missed. By intentionally limiting our choices, we can significantly increase our overall happiness and peace of mind.",
        question: "<b>[Text 7 - Question 3 of 5]</b><br>What does 'opportunity cost' mean in the context of the text?",
        options: [
            "The high financial price of buying too many items.",
            "The regret and dissatisfaction of giving up the other attractive options you didn't pick.",
            "The time it takes to drive to a big supermarket.",
            "The cost of hiring a psychologist to help you decide."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The regret and dissatisfaction of giving up the other attractive options you didn't pick.</b><br><br><b>הסבר:</b> הטקסט מגדיר 'opportunity cost' (עלות חלופית) כ-'the lingering regret of giving up all the other attractive alternatives they didn't choose' (החרטה המתמשכת על הוויתור על כל החלופות האטרקטיביות האחרות שלא בחרו).",
        tts_text: "Question: What does opportunity cost mean in the context of the text? Option 1: The high financial price of buying too many items. Option 2: The regret and dissatisfaction of giving up the other attractive options you didn't pick. Option 3: The time it takes to drive to a big supermarket. Option 4: The cost of hiring a psychologist to help you decide."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Paradox of Choice</b><br><br>In modern consumer societies, freedom is often associated with having a wide variety of choices. Walk into any supermarket, and you will find dozens of types of cereal, toothpaste, and shampoo. While common logic suggests that more options lead to greater satisfaction, psychologist Barry Schwartz argues the exact opposite. In his influential theory, \"The Paradox of Choice,\" Schwartz explains that an abundance of options actually causes anxiety, decision paralysis, and dissatisfaction.<br><br>According to Schwartz, when faced with too many choices, people spend an excessive amount of time weighing the pros and cons of each option. This leads to \"decision paralysis,\" where the fear of making the wrong choice makes it nearly impossible to choose at all. Even when a choice is finally made, people often feel less satisfied with it. They suffer from \"opportunity cost\"—the lingering regret of giving up all the other attractive alternatives they didn't choose.<br><br>To combat this modern dilemma, psychologists suggest a shift in mindset. Instead of trying to be \"maximizers\" who exhaustively search for the absolute best option, people should aim to be \"satisficers.\" A satisficer settles for something that is \"good enough\" and meets their basic criteria, without worrying about what they might have missed. By intentionally limiting our choices, we can significantly increase our overall happiness and peace of mind.",
        question: "<b>[Text 7 - Question 4 of 5]</b><br>What characterizes a 'satisficer' according to the final paragraph?",
        options: [
            "They search exhaustively until they find the absolute best option.",
            "They settle for a choice that is 'good enough' and meets their basic needs.",
            "They buy everything in the store to avoid making a choice.",
            "They always suffer from decision paralysis."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They settle for a choice that is 'good enough' and meets their basic needs.</b><br><br><b>הסבר:</b> בפסקה השלישית מוסבר: 'A satisficer settles for something that is \"good enough\" and meets their basic criteria' (אדם שמסתפק במשהו שהוא 'טוב מספיק' ועונה על הקריטריונים הבסיסיים שלו, מבלי לחפש את המושלם).",
        tts_text: "Question: What characterizes a satisficer according to the final paragraph? Option 1: They search exhaustively until they find the absolute best option. Option 2: They settle for a choice that is 'good enough' and meets their basic needs. Option 3: They buy everything in the store to avoid making a choice. Option 4: They always suffer from decision paralysis."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Paradox of Choice</b><br><br>In modern consumer societies, freedom is often associated with having a wide variety of choices. Walk into any supermarket, and you will find dozens of types of cereal, toothpaste, and shampoo. While common logic suggests that more options lead to greater satisfaction, psychologist Barry Schwartz argues the exact opposite. In his influential theory, \"The Paradox of Choice,\" Schwartz explains that an abundance of options actually causes anxiety, decision paralysis, and dissatisfaction.<br><br>According to Schwartz, when faced with too many choices, people spend an excessive amount of time weighing the pros and cons of each option. This leads to \"decision paralysis,\" where the fear of making the wrong choice makes it nearly impossible to choose at all. Even when a choice is finally made, people often feel less satisfied with it. They suffer from \"opportunity cost\"—the lingering regret of giving up all the other attractive alternatives they didn't choose.<br><br>To combat this modern dilemma, psychologists suggest a shift in mindset. Instead of trying to be \"maximizers\" who exhaustively search for the absolute best option, people should aim to be \"satisficers.\" A satisficer settles for something that is \"good enough\" and meets their basic criteria, without worrying about what they might have missed. By intentionally limiting our choices, we can significantly increase our overall happiness and peace of mind.",
        question: "<b>[Text 7 - Question 5 of 5]</b><br>What does the word 'abundance' mean in the first paragraph?",
        options: [
            "A lack of something",
            "A very large quantity of something",
            "A psychological disease",
            "A type of supermarket"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: A very large quantity of something.</b><br><br><b>הסבר:</b> המילה abundance פירושה שפע / כמות עצומה. שפע של אפשרויות ('abundance of options') גורם לחרדה על פי התאוריה המרכזית בטקסט.",
        tts_text: "Question: What does the word abundance mean in the first paragraph? Option 1: A lack of something. Option 2: A very large quantity of something. Option 3: A psychological disease. Option 4: A type of supermarket."
    },

    // =====================================================================
    // Text 8: The Ethics of Artificial Intelligence (Module E)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Ethics of Artificial Intelligence</b><br><br>As Artificial Intelligence (AI) becomes increasingly integrated into our daily lives, it brings forth profound ethical dilemmas. AI systems are no longer just playing chess or recommending movies; they are now making critical decisions in sensitive areas such as criminal justice, loan approvals, and medical diagnoses. The primary concern among ethicists is that these powerful algorithms, designed by humans, can inherit and amplify human biases.<br><br>Machine learning models are trained on vast amounts of historical data. If this historical data contains societal prejudices—such as racial or gender bias—the AI will inevitably learn and reproduce these prejudices in its decisions. For instance, an AI used for hiring might reject female candidates if it was trained on data from a company that historically hired mostly men. This creates a dangerous scenario where discrimination is hidden behind a facade of objective, mathematical perfection.<br><br>To mitigate these risks, researchers are advocating for the development of \"Explainable AI\" (XAI). Currently, many algorithms act as \"black boxes,\" meaning even their creators cannot fully explain how they arrive at a specific conclusion. XAI aims to make the decision-making process transparent and understandable to humans. Furthermore, ensuring that programming teams are diverse can help catch potential biases before an algorithm is deployed to the public. Ultimately, technology is only as fair as the people who create it.",
        question: "<b>[Text 8 - Question 1 of 5]</b><br>According to the first paragraph, why are ethicists primarily concerned about AI?",
        options: [
            "Because AI might become smarter than humans and take over the world.",
            "Because AI is not good enough at playing chess yet.",
            "Because AI systems are making critical decisions and can inherit and amplify human biases.",
            "Because AI algorithms cost too much money to develop."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because AI systems are making critical decisions and can inherit and amplify human biases.</b><br><br><b>הסבר:</b> הפסקה הראשונה מציגה את הבעיה: ה-AI מקבל החלטות קריטיות (רפואה, משפט) ויש חשש שאותם אלגוריתמים ירשו ויעצימו הטיות ודעות קדומות אנושיות ('inherit and amplify human biases').",
        tts_text: "Question: According to the first paragraph, why are ethicists primarily concerned about AI? Option 1: Because AI might become smarter than humans and take over the world. Option 2: Because AI is not good enough at playing chess yet. Option 3: Because AI systems are making critical decisions and can inherit and amplify human biases. Option 4: Because AI algorithms cost too much money to develop."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Ethics of Artificial Intelligence</b><br><br>As Artificial Intelligence (AI) becomes increasingly integrated into our daily lives, it brings forth profound ethical dilemmas. AI systems are no longer just playing chess or recommending movies; they are now making critical decisions in sensitive areas such as criminal justice, loan approvals, and medical diagnoses. The primary concern among ethicists is that these powerful algorithms, designed by humans, can inherit and amplify human biases.<br><br>Machine learning models are trained on vast amounts of historical data. If this historical data contains societal prejudices—such as racial or gender bias—the AI will inevitably learn and reproduce these prejudices in its decisions. For instance, an AI used for hiring might reject female candidates if it was trained on data from a company that historically hired mostly men. This creates a dangerous scenario where discrimination is hidden behind a facade of objective, mathematical perfection.<br><br>To mitigate these risks, researchers are advocating for the development of \"Explainable AI\" (XAI). Currently, many algorithms act as \"black boxes,\" meaning even their creators cannot fully explain how they arrive at a specific conclusion. XAI aims to make the decision-making process transparent and understandable to humans. Furthermore, ensuring that programming teams are diverse can help catch potential biases before an algorithm is deployed to the public. Ultimately, technology is only as fair as the people who create it.",
        question: "<b>[Text 8 - Question 2 of 5]</b><br>Why might an AI system used for hiring make biased decisions against women?",
        options: [
            "Because AI machines naturally dislike women.",
            "Because women do not apply for jobs in technology.",
            "Because it was trained on historical data from a company that previously hired mostly men.",
            "Because the creators programmed the AI to be evil."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Because it was trained on historical data from a company that previously hired mostly men.</b><br><br><b>הסבר:</b> הפסקה השנייה מספקת את הדוגמה הזו בדיוק: 'might reject female candidates if it was trained on data from a company that historically hired mostly men' (ה-AI לומד מההיסטוריה. אם ההיסטוריה הייתה מפלה, ה-AI ילמד להפלות).",
        tts_text: "Question: Why might an AI system used for hiring make biased decisions against women? Option 1: Because AI machines naturally dislike women. Option 2: Because women do not apply for jobs in technology. Option 3: Because it was trained on historical data from a company that previously hired mostly men. Option 4: Because the creators programmed the AI to be evil."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Ethics of Artificial Intelligence</b><br><br>As Artificial Intelligence (AI) becomes increasingly integrated into our daily lives, it brings forth profound ethical dilemmas. AI systems are no longer just playing chess or recommending movies; they are now making critical decisions in sensitive areas such as criminal justice, loan approvals, and medical diagnoses. The primary concern among ethicists is that these powerful algorithms, designed by humans, can inherit and amplify human biases.<br><br>Machine learning models are trained on vast amounts of historical data. If this historical data contains societal prejudices—such as racial or gender bias—the AI will inevitably learn and reproduce these prejudices in its decisions. For instance, an AI used for hiring might reject female candidates if it was trained on data from a company that historically hired mostly men. This creates a dangerous scenario where discrimination is hidden behind a facade of objective, mathematical perfection.<br><br>To mitigate these risks, researchers are advocating for the development of \"Explainable AI\" (XAI). Currently, many algorithms act as \"black boxes,\" meaning even their creators cannot fully explain how they arrive at a specific conclusion. XAI aims to make the decision-making process transparent and understandable to humans. Furthermore, ensuring that programming teams are diverse can help catch potential biases before an algorithm is deployed to the public. Ultimately, technology is only as fair as the people who create it.",
        question: "<b>[Text 8 - Question 3 of 5]</b><br>What does the term 'black box' refer to in the third paragraph?",
        options: [
            "A physical black computer used by researchers.",
            "An algorithm whose decision-making process is hidden or cannot be fully explained, even by its creators.",
            "A box where programmers keep their historical data.",
            "A tool used to stop discrimination in the workplace."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: An algorithm whose decision-making process is hidden or cannot be fully explained...</b><br><br><b>הסבר:</b> הטקסט מגדיר 'קופסאות שחורות' כך: 'meaning even their creators cannot fully explain how they arrive at a specific conclusion' (אפילו היוצרים שלהן לא מסוגלים להסביר במלואו איך התוכנה הגיעה למסקנה).",
        tts_text: "Question: What does the term black box refer to in the third paragraph? Option 1: A physical black computer used by researchers. Option 2: An algorithm whose decision-making process is hidden or cannot be fully explained, even by its creators. Option 3: A box where programmers keep their historical data. Option 4: A tool used to stop discrimination in the workplace."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Ethics of Artificial Intelligence</b><br><br>As Artificial Intelligence (AI) becomes increasingly integrated into our daily lives, it brings forth profound ethical dilemmas. AI systems are no longer just playing chess or recommending movies; they are now making critical decisions in sensitive areas such as criminal justice, loan approvals, and medical diagnoses. The primary concern among ethicists is that these powerful algorithms, designed by humans, can inherit and amplify human biases.<br><br>Machine learning models are trained on vast amounts of historical data. If this historical data contains societal prejudices—such as racial or gender bias—the AI will inevitably learn and reproduce these prejudices in its decisions. For instance, an AI used for hiring might reject female candidates if it was trained on data from a company that historically hired mostly men. This creates a dangerous scenario where discrimination is hidden behind a facade of objective, mathematical perfection.<br><br>To mitigate these risks, researchers are advocating for the development of \"Explainable AI\" (XAI). Currently, many algorithms act as \"black boxes,\" meaning even their creators cannot fully explain how they arrive at a specific conclusion. XAI aims to make the decision-making process transparent and understandable to humans. Furthermore, ensuring that programming teams are diverse can help catch potential biases before an algorithm is deployed to the public. Ultimately, technology is only as fair as the people who create it.",
        question: "<b>[Text 8 - Question 4 of 5]</b><br>What does the author suggest to help solve the problem of AI bias?",
        options: [
            "Stop using AI completely.",
            "Only use AI for playing chess.",
            "Develop 'Explainable AI' and ensure programming teams are diverse.",
            "Let machines build themselves without human interference."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Develop 'Explainable AI' and ensure programming teams are diverse.</b><br><br><b>הסבר:</b> הפסקה השלישית מציעה את הפתרונות: חוקרים מקדמים פיתוח של AI הניתן להסבר (XAI) וממליצים על צוותי תכנות מגוונים ('ensuring that programming teams are diverse').",
        tts_text: "Question: What does the author suggest to help solve the problem of AI bias? Option 1: Stop using AI completely. Option 2: Only use AI for playing chess. Option 3: Develop Explainable AI and ensure programming teams are diverse. Option 4: Let machines build themselves without human interference."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Ethics of Artificial Intelligence</b><br><br>As Artificial Intelligence (AI) becomes increasingly integrated into our daily lives, it brings forth profound ethical dilemmas. AI systems are no longer just playing chess or recommending movies; they are now making critical decisions in sensitive areas such as criminal justice, loan approvals, and medical diagnoses. The primary concern among ethicists is that these powerful algorithms, designed by humans, can inherit and amplify human biases.<br><br>Machine learning models are trained on vast amounts of historical data. If this historical data contains societal prejudices—such as racial or gender bias—the AI will inevitably learn and reproduce these prejudices in its decisions. For instance, an AI used for hiring might reject female candidates if it was trained on data from a company that historically hired mostly men. This creates a dangerous scenario where discrimination is hidden behind a facade of objective, mathematical perfection.<br><br>To mitigate these risks, researchers are advocating for the development of \"Explainable AI\" (XAI). Currently, many algorithms act as \"black boxes,\" meaning even their creators cannot fully explain how they arrive at a specific conclusion. XAI aims to make the decision-making process transparent and understandable to humans. Furthermore, ensuring that programming teams are diverse can help catch potential biases before an algorithm is deployed to the public. Ultimately, technology is only as fair as the people who create it.",
        question: "<b>[Text 8 - Question 5 of 5]</b><br>What does the word 'mitigate' mean in the last paragraph? ('To mitigate these risks...')",
        options: [
            "To ignore completely",
            "To make something less severe, harmful, or painful",
            "To increase the danger",
            "To celebrate an achievement"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To make something less severe, harmful, or painful.</b><br><br><b>הסבר:</b> המילה mitigate היא מילת מפתח ברמת 5 יחידות שפירושה 'למתן' או 'להפחית' (סיכון, נזק, כאב). כדי למתן את הסיכונים של האפליה, החוקרים דורשים שקיפות.",
        tts_text: "Question: What does the word mitigate mean in the last paragraph? Option 1: To ignore completely. Option 2: To make something less severe, harmful, or painful. Option 3: To increase the danger. Option 4: To celebrate an achievement."
    },

    // =====================================================================
    // Text 9: The Impact of Microplastics on Ecosystems (Module E)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Impact of Microplastics on Ecosystems</b><br><br>For decades, environmentalists have warned the public about the dangers of plastic waste in our oceans. Images of sea turtles tangled in plastic bags are well-known. However, an even more insidious threat has emerged: microplastics. Microplastics are tiny fragments of plastic, less than 5 millimeters in length. They are created when larger plastic debris degrades over time due to sun exposure and wave action, or they are intentionally manufactured as microbeads for cosmetic products.<br><br>Because of their microscopic size, these particles easily bypass water filtration systems and end up in rivers and oceans. Once in the marine environment, they are ingested by a wide range of organisms, from plankton to large fish. The ingestion of microplastics can block digestive tracts, reduce the urge to eat, and alter feeding behavior, all of which lower growth and reproductive rates. Furthermore, microplastics act like sponges, absorbing toxic chemicals from the surrounding water. When marine animals consume these toxic particles, the chemicals enter their tissues.<br><br>The presence of microplastics is not limited to the ocean. Recent scientific studies have detected these particles in drinking water, soil, and even the air we breathe. Consequently, microplastics are entering the human food chain. While the long-term health effects on humans are still being investigated, the sheer volume of microplastics in our environment highlights an urgent need for global policy changes regarding plastic production and waste management.",
        question: "<b>[Text 9 - Question 1 of 5]</b><br>How are microplastics created according to the first paragraph?",
        options: [
            "They are created only when fish eat large plastics.",
            "They fall from the atmosphere during rainstorms.",
            "They are created when larger plastics degrade, or they are manufactured as microbeads for cosmetics.",
            "They are naturally occurring elements in the ocean."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: They are created when larger plastics degrade, or they are manufactured...</b><br><br><b>הסבר:</b> הטקסט מפרט שני מקורות: שחיקה של פלסטיק גדול על ידי השמש והגלים, או ייצור מכוון של 'מיקרו-חרוזים' למוצרי קוסמטיקה.",
        tts_text: "Question: How are microplastics created according to the first paragraph? Option 1: They are created only when fish eat large plastics. Option 2: They fall from the atmosphere during rainstorms. Option 3: They are created when larger plastics degrade, or they are manufactured as microbeads for cosmetics. Option 4: They are naturally occurring elements in the ocean."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Impact of Microplastics on Ecosystems</b><br><br>For decades, environmentalists have warned the public about the dangers of plastic waste in our oceans. Images of sea turtles tangled in plastic bags are well-known. However, an even more insidious threat has emerged: microplastics. Microplastics are tiny fragments of plastic, less than 5 millimeters in length. They are created when larger plastic debris degrades over time due to sun exposure and wave action, or they are intentionally manufactured as microbeads for cosmetic products.<br><br>Because of their microscopic size, these particles easily bypass water filtration systems and end up in rivers and oceans. Once in the marine environment, they are ingested by a wide range of organisms, from plankton to large fish. The ingestion of microplastics can block digestive tracts, reduce the urge to eat, and alter feeding behavior, all of which lower growth and reproductive rates. Furthermore, microplastics act like sponges, absorbing toxic chemicals from the surrounding water. When marine animals consume these toxic particles, the chemicals enter their tissues.<br><br>The presence of microplastics is not limited to the ocean. Recent scientific studies have detected these particles in drinking water, soil, and even the air we breathe. Consequently, microplastics are entering the human food chain. While the long-term health effects on humans are still being investigated, the sheer volume of microplastics in our environment highlights an urgent need for global policy changes regarding plastic production and waste management.",
        question: "<b>[Text 9 - Question 2 of 5]</b><br>Why do microplastics end up in rivers and oceans so easily?",
        options: [
            "Because people throw them directly into the sea.",
            "Because their microscopic size allows them to bypass water filtration systems.",
            "Because animals carry them there.",
            "Because cosmetic products dissolve them into water."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because their microscopic size allows them to bypass water filtration systems.</b><br><br><b>הסבר:</b> תחילת הפסקה השנייה קובעת שעקב גודלם הזעיר הם עוקפים (bypass) את מערכות סינון המים ולכן מגיעים לאוקיינוסים.",
        tts_text: "Question: Why do microplastics end up in rivers and oceans so easily? Option 1: Because people throw them directly into the sea. Option 2: Because their microscopic size allows them to bypass water filtration systems. Option 3: Because animals carry them there. Option 4: Because cosmetic products dissolve them into water."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Impact of Microplastics on Ecosystems</b><br><br>For decades, environmentalists have warned the public about the dangers of plastic waste in our oceans. Images of sea turtles tangled in plastic bags are well-known. However, an even more insidious threat has emerged: microplastics. Microplastics are tiny fragments of plastic, less than 5 millimeters in length. They are created when larger plastic debris degrades over time due to sun exposure and wave action, or they are intentionally manufactured as microbeads for cosmetic products.<br><br>Because of their microscopic size, these particles easily bypass water filtration systems and end up in rivers and oceans. Once in the marine environment, they are ingested by a wide range of organisms, from plankton to large fish. The ingestion of microplastics can block digestive tracts, reduce the urge to eat, and alter feeding behavior, all of which lower growth and reproductive rates. Furthermore, microplastics act like sponges, absorbing toxic chemicals from the surrounding water. When marine animals consume these toxic particles, the chemicals enter their tissues.<br><br>The presence of microplastics is not limited to the ocean. Recent scientific studies have detected these particles in drinking water, soil, and even the air we breathe. Consequently, microplastics are entering the human food chain. While the long-term health effects on humans are still being investigated, the sheer volume of microplastics in our environment highlights an urgent need for global policy changes regarding plastic production and waste management.",
        question: "<b>[Text 9 - Question 3 of 5]</b><br>What additional danger do microplastics pose, besides physically blocking an animal's digestive tract?",
        options: [
            "They make the water too hot for the fish.",
            "They act like sponges, absorbing toxic chemicals that enter the animal's tissues when eaten.",
            "They destroy coral reefs directly.",
            "They stop fishermen from catching fish."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They act like sponges, absorbing toxic chemicals...</b><br><br><b>הסבר:</b> בסוף הפסקה השנייה מתואר החיסרון הכפול: לא רק סתימת מעיים, אלא גם ספיגת רעלים מהמים והחדרתם לגוף החיה ('absorbing toxic chemicals from the surrounding water').",
        tts_text: "Question: What additional danger do microplastics pose, besides physically blocking an animal's digestive tract? Option 1: They make the water too hot for the fish. Option 2: They act like sponges, absorbing toxic chemicals that enter the animal's tissues when eaten. Option 3: They destroy coral reefs directly. Option 4: They stop fishermen from catching fish."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Impact of Microplastics on Ecosystems</b><br><br>For decades, environmentalists have warned the public about the dangers of plastic waste in our oceans. Images of sea turtles tangled in plastic bags are well-known. However, an even more insidious threat has emerged: microplastics. Microplastics are tiny fragments of plastic, less than 5 millimeters in length. They are created when larger plastic debris degrades over time due to sun exposure and wave action, or they are intentionally manufactured as microbeads for cosmetic products.<br><br>Because of their microscopic size, these particles easily bypass water filtration systems and end up in rivers and oceans. Once in the marine environment, they are ingested by a wide range of organisms, from plankton to large fish. The ingestion of microplastics can block digestive tracts, reduce the urge to eat, and alter feeding behavior, all of which lower growth and reproductive rates. Furthermore, microplastics act like sponges, absorbing toxic chemicals from the surrounding water. When marine animals consume these toxic particles, the chemicals enter their tissues.<br><br>The presence of microplastics is not limited to the ocean. Recent scientific studies have detected these particles in drinking water, soil, and even the air we breathe. Consequently, microplastics are entering the human food chain. While the long-term health effects on humans are still being investigated, the sheer volume of microplastics in our environment highlights an urgent need for global policy changes regarding plastic production and waste management.",
        question: "<b>[Text 9 - Question 4 of 5]</b><br>What does the author state regarding the effect of microplastics on human health?",
        options: [
            "They are completely harmless to humans.",
            "The long-term health effects are still being investigated by scientists.",
            "They are known to cause immediate death.",
            "They only affect humans who eat large amounts of fish."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The long-term health effects are still being investigated by scientists.</b><br><br><b>הסבר:</b> בפסקה השלישית והאחרונה מובהר כי ההשפעות ארוכות הטווח על בני אדם עדיין נבדקות ונחקרות ('While the long-term health effects on humans are still being investigated').",
        tts_text: "Question: What does the author state regarding the effect of microplastics on human health? Option 1: They are completely harmless to humans. Option 2: The long-term health effects are still being investigated by scientists. Option 3: They are known to cause immediate death. Option 4: They only affect humans who eat large amounts of fish."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Impact of Microplastics on Ecosystems</b><br><br>For decades, environmentalists have warned the public about the dangers of plastic waste in our oceans. Images of sea turtles tangled in plastic bags are well-known. However, an even more insidious threat has emerged: microplastics. Microplastics are tiny fragments of plastic, less than 5 millimeters in length. They are created when larger plastic debris degrades over time due to sun exposure and wave action, or they are intentionally manufactured as microbeads for cosmetic products.<br><br>Because of their microscopic size, these particles easily bypass water filtration systems and end up in rivers and oceans. Once in the marine environment, they are ingested by a wide range of organisms, from plankton to large fish. The ingestion of microplastics can block digestive tracts, reduce the urge to eat, and alter feeding behavior, all of which lower growth and reproductive rates. Furthermore, microplastics act like sponges, absorbing toxic chemicals from the surrounding water. When marine animals consume these toxic particles, the chemicals enter their tissues.<br><br>The presence of microplastics is not limited to the ocean. Recent scientific studies have detected these particles in drinking water, soil, and even the air we breathe. Consequently, microplastics are entering the human food chain. While the long-term health effects on humans are still being investigated, the sheer volume of microplastics in our environment highlights an urgent need for global policy changes regarding plastic production and waste management.",
        question: "<b>[Text 9 - Question 5 of 5]</b><br>What does the word 'insidious' mean in the first paragraph? ('an even more insidious threat has emerged')",
        options: [
            "Loud and obvious",
            "Developing gradually without being noticed, but causing great harm",
            "Helpful to the environment",
            "Made of high-quality plastic"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Developing gradually without being noticed, but causing great harm.</b><br><br><b>הסבר:</b> מילה קלאסית לרמת 5 יחידות! insidious משמעה 'חתרני' / מזיק בסתר. בניגוד לשקית פלסטיק ענקית שבולטת לעין, המיקרו-פלסטיק הוא איום סמוי שמתפתח בהדרגה וקשה להבחין בו, אך הוא הרסני במיוחד.",
        tts_text: "Question: What does the word insidious mean in the first paragraph? Option 1: Loud and obvious. Option 2: Developing gradually without being noticed, but causing great harm. Option 3: Helpful to the environment. Option 4: Made of high-quality plastic."
    },

    // =====================================================================
    // Text 10: The Evolution of Language in the Digital Age (Module E)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Evolution of Language in the Digital Age</b><br><br>The advent of the internet and digital communication has revolutionized not only how we interact but also the English language itself. Traditionalists often lament the decline of formal grammar and the rise of internet slang, arguing that text messaging and social media are ruining literacy. They point to the overuse of acronyms like \"LOL\" (laugh out loud) and the neglect of proper punctuation as evidence that the younger generation is losing the ability to write correctly.<br><br>However, many modern linguists view this phenomenon quite differently. Rather than witnessing the destruction of language, they argue that we are observing a natural linguistic evolution. Digital communication is simply a new, informal dialect adapted specifically for speed and efficiency on keyboards and touchscreens. Just as spoken language differs from written essays, texting has its own unique set of rules and syntax designed to mimic the rapid, back-and-forth nature of face-to-face conversation.<br><br>A prime example of this adaptation is the use of emojis. Critics initially dismissed emojis as a juvenile regression to picture-writing. Yet, researchers suggest that emojis play a crucial role in digital text: they substitute for the tone of voice, facial expressions, and body language that are missing in written messages. By adding emotional context, emojis prevent misunderstandings and enrich digital conversations. Therefore, the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world.",
        question: "<b>[Text 10 - Question 1 of 5]</b><br>How do traditionalists view the impact of digital communication on language?",
        options: [
            "They believe it makes communication faster and more efficient.",
            "They think it is ruining literacy and formal grammar.",
            "They argue that acronyms make writing more professional.",
            "They believe it is returning language to a purer state."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They think it is ruining literacy and formal grammar.</b><br><br><b>הסבר:</b> הפסקה הראשונה מציגה את עמדת השמרנים (traditionalists) שמקוננים על התדרדרות הדקדוק וטוענים שהודעות הורסות את האוריינות (היכולת לקרוא ולכתוב כראוי).",
        tts_text: "Question: How do traditionalists view the impact of digital communication on language? Option 1: They believe it makes communication faster and more efficient. Option 2: They think it is ruining literacy and formal grammar. Option 3: They argue that acronyms make writing more professional. Option 4: They believe it is returning language to a purer state."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Evolution of Language in the Digital Age</b><br><br>The advent of the internet and digital communication has revolutionized not only how we interact but also the English language itself. Traditionalists often lament the decline of formal grammar and the rise of internet slang, arguing that text messaging and social media are ruining literacy. They point to the overuse of acronyms like \"LOL\" (laugh out loud) and the neglect of proper punctuation as evidence that the younger generation is losing the ability to write correctly.<br><br>However, many modern linguists view this phenomenon quite differently. Rather than witnessing the destruction of language, they argue that we are observing a natural linguistic evolution. Digital communication is simply a new, informal dialect adapted specifically for speed and efficiency on keyboards and touchscreens. Just as spoken language differs from written essays, texting has its own unique set of rules and syntax designed to mimic the rapid, back-and-forth nature of face-to-face conversation.<br><br>A prime example of this adaptation is the use of emojis. Critics initially dismissed emojis as a juvenile regression to picture-writing. Yet, researchers suggest that emojis play a crucial role in digital text: they substitute for the tone of voice, facial expressions, and body language that are missing in written messages. By adding emotional context, emojis prevent misunderstandings and enrich digital conversations. Therefore, the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world.",
        question: "<b>[Text 10 - Question 2 of 5]</b><br>How do modern linguists explain the use of internet slang and texting?",
        options: [
            "As a lazy habit caused by too much screen time.",
            "As proof that schools are failing to teach grammar.",
            "As a new, informal dialect adapted for speed and to mimic spoken conversation.",
            "As a temporary trend that will disappear soon."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: As a new, informal dialect adapted for speed and to mimic spoken conversation.</b><br><br><b>הסבר:</b> בניגוד לשמרנים, בפסקה 2 הבלשנים (linguists) טוענים שהשפה פשוט מתפתחת. זהו ניב (dialect) חדש שמיועד למהירות ונועד לחקות את הקצב המהיר של שיחה פנים-אל-פנים.",
        tts_text: "Question: How do modern linguists explain the use of internet slang and texting? Option 1: As a lazy habit caused by too much screen time. Option 2: As proof that schools are failing to teach grammar. Option 3: As a new, informal dialect adapted for speed and to mimic spoken conversation. Option 4: As a temporary trend that will disappear soon."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Evolution of Language in the Digital Age</b><br><br>The advent of the internet and digital communication has revolutionized not only how we interact but also the English language itself. Traditionalists often lament the decline of formal grammar and the rise of internet slang, arguing that text messaging and social media are ruining literacy. They point to the overuse of acronyms like \"LOL\" (laugh out loud) and the neglect of proper punctuation as evidence that the younger generation is losing the ability to write correctly.<br><br>However, many modern linguists view this phenomenon quite differently. Rather than witnessing the destruction of language, they argue that we are observing a natural linguistic evolution. Digital communication is simply a new, informal dialect adapted specifically for speed and efficiency on keyboards and touchscreens. Just as spoken language differs from written essays, texting has its own unique set of rules and syntax designed to mimic the rapid, back-and-forth nature of face-to-face conversation.<br><br>A prime example of this adaptation is the use of emojis. Critics initially dismissed emojis as a juvenile regression to picture-writing. Yet, researchers suggest that emojis play a crucial role in digital text: they substitute for the tone of voice, facial expressions, and body language that are missing in written messages. By adding emotional context, emojis prevent misunderstandings and enrich digital conversations. Therefore, the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world.",
        question: "<b>[Text 10 - Question 3 of 5]</b><br>What crucial role do emojis play in digital communication according to researchers?",
        options: [
            "They make texts look more colorful and fun for children.",
            "They substitute for the tone of voice and body language missing in text.",
            "They replace difficult English vocabulary words.",
            "They hide the fact that a person doesn't know how to spell."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They substitute for the tone of voice and body language missing in text.</b><br><br><b>הסבר:</b> הפסקה השלישית מסבירה כי האמוג'ים מפצים על החסרונות של טקסט כתוב, על ידי הוספת הקשר רגשי ('emotional context') ותחליף לשפת הגוף וטון הדיבור.",
        tts_text: "Question: What crucial role do emojis play in digital communication according to researchers? Option 1: They make texts look more colorful and fun for children. Option 2: They substitute for the tone of voice and body language missing in text. Option 3: They replace difficult English vocabulary words. Option 4: They hide the fact that a person doesn't know how to spell."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Evolution of Language in the Digital Age</b><br><br>The advent of the internet and digital communication has revolutionized not only how we interact but also the English language itself. Traditionalists often lament the decline of formal grammar and the rise of internet slang, arguing that text messaging and social media are ruining literacy. They point to the overuse of acronyms like \"LOL\" (laugh out loud) and the neglect of proper punctuation as evidence that the younger generation is losing the ability to write correctly.<br><br>However, many modern linguists view this phenomenon quite differently. Rather than witnessing the destruction of language, they argue that we are observing a natural linguistic evolution. Digital communication is simply a new, informal dialect adapted specifically for speed and efficiency on keyboards and touchscreens. Just as spoken language differs from written essays, texting has its own unique set of rules and syntax designed to mimic the rapid, back-and-forth nature of face-to-face conversation.<br><br>A prime example of this adaptation is the use of emojis. Critics initially dismissed emojis as a juvenile regression to picture-writing. Yet, researchers suggest that emojis play a crucial role in digital text: they substitute for the tone of voice, facial expressions, and body language that are missing in written messages. By adding emotional context, emojis prevent misunderstandings and enrich digital conversations. Therefore, the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world.",
        question: "<b>[Text 10 - Question 4 of 5]</b><br>What is the author's overall conclusion about the effect of the digital age on language?",
        options: [
            "It is completely destroying the English language.",
            "It is expanding our linguistic toolkit to fit a fast-paced world.",
            "It proves that picture-writing is better than words.",
            "It shows that face-to-face conversation is no longer needed."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It is expanding our linguistic toolkit to fit a fast-paced world.</b><br><br><b>הסבר:</b> המשפט החותם של המאמר מציג את מסקנת הכותב: 'the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world' (העידן הדיגיטלי אינו מדרדר את השפה, הוא מרחיב את ארגז הכלים שלה בהתאם לקצב החיים המהיר).",
        tts_text: "Question: What is the author's overall conclusion about the effect of the digital age on language? Option 1: It is completely destroying the English language. Option 2: It is expanding our linguistic toolkit to fit a fast-paced world. Option 3: It proves that picture-writing is better than words. Option 4: It shows that face-to-face conversation is no longer needed."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module E Practice (רמה 4-5 יחידות)",
        passage: "<b>The Evolution of Language in the Digital Age</b><br><br>The advent of the internet and digital communication has revolutionized not only how we interact but also the English language itself. Traditionalists often lament the decline of formal grammar and the rise of internet slang, arguing that text messaging and social media are ruining literacy. They point to the overuse of acronyms like \"LOL\" (laugh out loud) and the neglect of proper punctuation as evidence that the younger generation is losing the ability to write correctly.<br><br>However, many modern linguists view this phenomenon quite differently. Rather than witnessing the destruction of language, they argue that we are observing a natural linguistic evolution. Digital communication is simply a new, informal dialect adapted specifically for speed and efficiency on keyboards and touchscreens. Just as spoken language differs from written essays, texting has its own unique set of rules and syntax designed to mimic the rapid, back-and-forth nature of face-to-face conversation.<br><br>A prime example of this adaptation is the use of emojis. Critics initially dismissed emojis as a juvenile regression to picture-writing. Yet, researchers suggest that emojis play a crucial role in digital text: they substitute for the tone of voice, facial expressions, and body language that are missing in written messages. By adding emotional context, emojis prevent misunderstandings and enrich digital conversations. Therefore, the digital age is not degrading our language; it is expanding our linguistic toolkit to meet the demands of a fast-paced world.",
        question: "<b>[Text 10 - Question 5 of 5]</b><br>What does the word 'lament' mean in the first paragraph? ('Traditionalists often lament the decline...')",
        options: [
            "To celebrate or enjoy something.",
            "To express sorrow, regret, or complaint about something.",
            "To completely ignore a problem.",
            "To write a formal essay."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: To express sorrow, regret, or complaint about something.</b><br><br><b>הסבר:</b> מילת מפתח ב-5 יחידות! המילה lament משמעה לקונן, להצטער או להתלונן על משהו שאבד (כאן: השמרנים מקוננים על הידרדרות הדקדוק).",
        tts_text: "Question: What does the word lament mean in the first paragraph? Option 1: To celebrate or enjoy something. Option 2: To express sorrow, regret, or complaint about something. Option 3: To completely ignore a problem. Option 4: To write a formal essay."
    },
    // =====================================================================
    // =====================================================================
    // Sub-topic: High School: Module G Practice (רמה 5 יחידות)
    // =====================================================================
    // =====================================================================

    // =====================================================================
    // Text 1: The Dunning-Kruger Effect (Module G)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Dunning-Kruger Effect</b><br><br>In 1999, psychologists David Dunning and Justin Kruger published a groundbreaking paper detailing a cognitive bias wherein individuals with low ability at a given task overestimate their competence. This phenomenon, appropriately named the Dunning-Kruger effect, occurs because incompetent people lack the self-awareness necessary to recognize their own ineptitude. Consequently, they possess an illusory superiority, rating their abilities far above average.<br><br>Conversely, the researchers discovered that highly competent individuals often underestimate their relative competence. Because they find tasks relatively easy to complete, they erroneously assume that others find the same tasks equally simple. Therefore, they tend to attribute their success to a general simplicity of the task rather than their exceptional skill. This leads to a situation where the most knowledgeable people are plagued by self-doubt—a condition closely related to the \"imposter syndrome.\"<br><br>The implications of this cognitive bias are profound and far-reaching, particularly in democratic societies. If a large portion of the electorate suffers from the Dunning-Kruger effect regarding complex economic or scientific policies, they may confidently support misguided decisions. To counter this, educational systems must not only impart knowledge but also teach critical thinking and intellectual humility, encouraging individuals to constantly question the limits of their own understanding.",
        question: "<b>[Text 1 - Question 1 of 5]</b><br>What is the fundamental premise of the Dunning-Kruger effect as described in the first paragraph?",
        options: [
            "Highly intelligent people always pretend to know less than they actually do.",
            "Individuals with low ability lack the self-awareness to realize their incompetence, leading them to overestimate their skills.",
            "Psychologists often overestimate the cognitive abilities of the general public.",
            "People usually underestimate their abilities when learning a completely new task."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Individuals with low ability lack the self-awareness to realize their incompetence...</b><br><br><b>הסבר:</b> הפסקה הראשונה מגדירה את האפקט: אנשים עם יכולת נמוכה מעריכים את עצמם יתר על המידה ('overestimate their competence') כי חסרה להם המודעות העצמית להכיר בחוסר הכישרון שלהם ('ineptitude').",
        tts_text: "Question: What is the fundamental premise of the Dunning-Kruger effect as described in the first paragraph? Option 1: Highly intelligent people always pretend to know less than they actually do. Option 2: Individuals with low ability lack the self-awareness to realize their incompetence, leading them to overestimate their skills. Option 3: Psychologists often overestimate the cognitive abilities of the general public. Option 4: People usually underestimate their abilities when learning a completely new task."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Dunning-Kruger Effect</b><br><br>In 1999, psychologists David Dunning and Justin Kruger published a groundbreaking paper detailing a cognitive bias wherein individuals with low ability at a given task overestimate their competence. This phenomenon, appropriately named the Dunning-Kruger effect, occurs because incompetent people lack the self-awareness necessary to recognize their own ineptitude. Consequently, they possess an illusory superiority, rating their abilities far above average.<br><br>Conversely, the researchers discovered that highly competent individuals often underestimate their relative competence. Because they find tasks relatively easy to complete, they erroneously assume that others find the same tasks equally simple. Therefore, they tend to attribute their success to a general simplicity of the task rather than their exceptional skill. This leads to a situation where the most knowledgeable people are plagued by self-doubt—a condition closely related to the \"imposter syndrome.\"<br><br>The implications of this cognitive bias are profound and far-reaching, particularly in democratic societies. If a large portion of the electorate suffers from the Dunning-Kruger effect regarding complex economic or scientific policies, they may confidently support misguided decisions. To counter this, educational systems must not only impart knowledge but also teach critical thinking and intellectual humility, encouraging individuals to constantly question the limits of their own understanding.",
        question: "<b>[Text 1 - Question 2 of 5]</b><br>According to the second paragraph, why do highly competent individuals often underestimate themselves?",
        options: [
            "Because they suffer from clinical depression.",
            "Because they mistakenly assume that if a task is easy for them, it must be easy for everyone else.",
            "Because society constantly criticizes their exceptional skills.",
            "Because they want to make incompetent people feel better about themselves."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Because they mistakenly assume that if a task is easy for them, it must be easy for everyone else.</b><br><br><b>הסבר:</b> בפסקה השנייה נכתב כי אנשים מוכשרים מניחים בטעות ('erroneously assume') שאם משימה היא קלה להם, היא בטח פשוטה באותה מידה גם לאחרים, ולכן אינם מעריכים את ייחודם.",
        tts_text: "Question: According to the second paragraph, why do highly competent individuals often underestimate themselves? Option 1: Because they suffer from clinical depression. Option 2: Because they mistakenly assume that if a task is easy for them, it must be easy for everyone else. Option 3: Because society constantly criticizes their exceptional skills. Option 4: Because they want to make incompetent people feel better about themselves."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Dunning-Kruger Effect</b><br><br>In 1999, psychologists David Dunning and Justin Kruger published a groundbreaking paper detailing a cognitive bias wherein individuals with low ability at a given task overestimate their competence. This phenomenon, appropriately named the Dunning-Kruger effect, occurs because incompetent people lack the self-awareness necessary to recognize their own ineptitude. Consequently, they possess an illusory superiority, rating their abilities far above average.<br><br>Conversely, the researchers discovered that highly competent individuals often underestimate their relative competence. Because they find tasks relatively easy to complete, they erroneously assume that others find the same tasks equally simple. Therefore, they tend to attribute their success to a general simplicity of the task rather than their exceptional skill. This leads to a situation where the most knowledgeable people are plagued by self-doubt—a condition closely related to the \"imposter syndrome.\"<br><br>The implications of this cognitive bias are profound and far-reaching, particularly in democratic societies. If a large portion of the electorate suffers from the Dunning-Kruger effect regarding complex economic or scientific policies, they may confidently support misguided decisions. To counter this, educational systems must not only impart knowledge but also teach critical thinking and intellectual humility, encouraging individuals to constantly question the limits of their own understanding.",
        question: "<b>[Text 1 - Question 3 of 5]</b><br>What does the word 'implications' mean in the final paragraph? ('The implications of this cognitive bias are profound...')",
        options: [
            "The historical origins",
            "The possible future effects or consequences",
            "The medical treatments",
            "The mathematical equations"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The possible future effects or consequences.</b><br><br><b>הסבר:</b> המילה 'implications' מתורגמת ל'השלכות' או מסקנות עתידיות הנובעות ממצב מסוים. הכותב דן בהשלכות ההרסניות שיכולות להיות לאפקט הזה על קבלת החלטות בחברה דמוקרטית.",
        tts_text: "Question: What does the word implications mean in the final paragraph? Option 1: The historical origins. Option 2: The possible future effects or consequences. Option 3: The medical treatments. Option 4: The mathematical equations."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Dunning-Kruger Effect</b><br><br>In 1999, psychologists David Dunning and Justin Kruger published a groundbreaking paper detailing a cognitive bias wherein individuals with low ability at a given task overestimate their competence. This phenomenon, appropriately named the Dunning-Kruger effect, occurs because incompetent people lack the self-awareness necessary to recognize their own ineptitude. Consequently, they possess an illusory superiority, rating their abilities far above average.<br><br>Conversely, the researchers discovered that highly competent individuals often underestimate their relative competence. Because they find tasks relatively easy to complete, they erroneously assume that others find the same tasks equally simple. Therefore, they tend to attribute their success to a general simplicity of the task rather than their exceptional skill. This leads to a situation where the most knowledgeable people are plagued by self-doubt—a condition closely related to the \"imposter syndrome.\"<br><br>The implications of this cognitive bias are profound and far-reaching, particularly in democratic societies. If a large portion of the electorate suffers from the Dunning-Kruger effect regarding complex economic or scientific policies, they may confidently support misguided decisions. To counter this, educational systems must not only impart knowledge but also teach critical thinking and intellectual humility, encouraging individuals to constantly question the limits of their own understanding.",
        question: "<b>[Text 1 - Question 4 of 5]</b><br>What potential danger in a democratic society is highlighted by the author in the third paragraph?",
        options: [
            "Politicians might become too humble to make decisions.",
            "The educational system might collapse due to a lack of funding.",
            "Voters who overestimate their understanding of complex issues might support bad or misguided policies.",
            "Competent individuals might overthrow the government out of frustration."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Voters who overestimate their understanding of complex issues might support bad or misguided policies.</b><br><br><b>הסבר:</b> בפסקה השלישית מוצגת הסכנה (ההשלכה) העיקרית: 'If a large portion of the electorate (הבוחרים) suffers from the Dunning-Kruger effect... they may confidently support misguided decisions' (הם עלולים לתמוך בביטחון עצמי בהחלטות שגויות בגלל ביטחון היתר שלהם בנושאים שהם לא באמת מבינים).",
        tts_text: "Question: What potential danger in a democratic society is highlighted by the author in the third paragraph? Option 1: Politicians might become too humble to make decisions. Option 2: The educational system might collapse due to a lack of funding. Option 3: Voters who overestimate their understanding of complex issues might support bad or misguided policies. Option 4: Competent individuals might overthrow the government out of frustration."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Dunning-Kruger Effect</b><br><br>In 1999, psychologists David Dunning and Justin Kruger published a groundbreaking paper detailing a cognitive bias wherein individuals with low ability at a given task overestimate their competence. This phenomenon, appropriately named the Dunning-Kruger effect, occurs because incompetent people lack the self-awareness necessary to recognize their own ineptitude. Consequently, they possess an illusory superiority, rating their abilities far above average.<br><br>Conversely, the researchers discovered that highly competent individuals often underestimate their relative competence. Because they find tasks relatively easy to complete, they erroneously assume that others find the same tasks equally simple. Therefore, they tend to attribute their success to a general simplicity of the task rather than their exceptional skill. This leads to a situation where the most knowledgeable people are plagued by self-doubt—a condition closely related to the \"imposter syndrome.\"<br><br>The implications of this cognitive bias are profound and far-reaching, particularly in democratic societies. If a large portion of the electorate suffers from the Dunning-Kruger effect regarding complex economic or scientific policies, they may confidently support misguided decisions. To counter this, educational systems must not only impart knowledge but also teach critical thinking and intellectual humility, encouraging individuals to constantly question the limits of their own understanding.",
        question: "<b>[Text 1 - Question 5 of 5]</b><br>What solution does the author propose to combat the Dunning-Kruger effect?",
        options: [
            "Banning the electorate from voting on scientific matters.",
            "Educating people to practice intellectual humility and critical thinking.",
            "Rewarding highly competent individuals with higher salaries.",
            "Ignoring the cognitive bias completely."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Educating people to practice intellectual humility and critical thinking.</b><br><br><b>הסבר:</b> בסוף הפסקה האחרונה, תחת הפועל 'To counter this' (כדי להתמודד עם זה), הכותב ממליץ למערכות החינוך ללמד חשיבה ביקורתית וענווה אינטלקטואלית ('teach critical thinking and intellectual humility').",
        tts_text: "Question: What solution does the author propose to combat the Dunning-Kruger effect? Option 1: Banning the electorate from voting on scientific matters. Option 2: Educating people to practice intellectual humility and critical thinking. Option 3: Rewarding highly competent individuals with higher salaries. Option 4: Ignoring the cognitive bias completely."
    },

    // =====================================================================
    // Text 2: The Illusion of Multitasking (Module G)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Illusion of Multitasking</b><br><br>In today's fast-paced corporate world, the ability to multitask is often lauded as a highly desirable skill. Job descriptions frequently list multitasking as a prerequisite, and employees boast about their capacity to juggle emails, phone calls, and complex projects simultaneously. However, neuroscientists have consistently debunked the myth of multitasking. They assert that the human brain is not wired to process multiple attention-demanding tasks concurrently. What we perceive as multitasking is, in reality, \"task-switching\"—the brain rapidly shifting its focus back and forth between different activities.<br><br>This constant task-switching exacts a severe cognitive toll. Every time the brain shifts focus, it requires a brief period to reorient itself to the new context. Over the course of a day, these \"switch costs\" accumulate, leading to a significant decrease in overall productivity. Researchers estimate that chronic multitaskers can lose up to 40% of their productive time. Furthermore, the quality of work inevitably deteriorates. When attention is fractured, individuals are more prone to making errors and overlooking crucial details.<br><br>Beyond the loss of efficiency, chronic multitasking has been linked to elevated stress levels. The continuous barrage of stimuli triggers the release of cortisol, keeping the individual in a perpetual state of heightened alertness. To foster a healthier and more productive work environment, experts advocate for \"monotasking.\" By deliberately dedicating uninterrupted blocks of time to a single task, individuals can achieve a state of \"flow,\" characterized by deep immersion and optimal performance. In essence, doing less simultaneously allows us to accomplish more.",
        question: "<b>[Text 2 - Question 1 of 5]</b><br>What does the author suggest about multitasking in the first paragraph?",
        options: [
            "It is a highly efficient way for employees to manage complex projects.",
            "It is a myth; the human brain actually engages in rapid task-switching.",
            "It is a skill that only neuroscientists have mastered.",
            "It is the only way to survive in the modern corporate world."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It is a myth; the human brain actually engages in rapid task-switching.</b><br><br><b>הסבר:</b> למרות שעולם העסקים מהלל (laud) את ריבוי המשימות, הכותב מציין שחוקרי מוח הפריכו את המיתוס ('debunked the myth') וטוענים שהמוח למעשה עובר במהירות ממשימה למשימה ('task-switching').",
        tts_text: "Question: What does the author suggest about multitasking in the first paragraph? Option 1: It is a highly efficient way for employees to manage complex projects. Option 2: It is a myth; the human brain actually engages in rapid task-switching. Option 3: It is a skill that only neuroscientists have mastered. Option 4: It is the only way to survive in the modern corporate world."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Illusion of Multitasking</b><br><br>In today's fast-paced corporate world, the ability to multitask is often lauded as a highly desirable skill. Job descriptions frequently list multitasking as a prerequisite, and employees boast about their capacity to juggle emails, phone calls, and complex projects simultaneously. However, neuroscientists have consistently debunked the myth of multitasking. They assert that the human brain is not wired to process multiple attention-demanding tasks concurrently. What we perceive as multitasking is, in reality, \"task-switching\"—the brain rapidly shifting its focus back and forth between different activities.<br><br>This constant task-switching exacts a severe cognitive toll. Every time the brain shifts focus, it requires a brief period to reorient itself to the new context. Over the course of a day, these \"switch costs\" accumulate, leading to a significant decrease in overall productivity. Researchers estimate that chronic multitaskers can lose up to 40% of their productive time. Furthermore, the quality of work inevitably deteriorates. When attention is fractured, individuals are more prone to making errors and overlooking crucial details.<br><br>Beyond the loss of efficiency, chronic multitasking has been linked to elevated stress levels. The continuous barrage of stimuli triggers the release of cortisol, keeping the individual in a perpetual state of heightened alertness. To foster a healthier and more productive work environment, experts advocate for \"monotasking.\" By deliberately dedicating uninterrupted blocks of time to a single task, individuals can achieve a state of \"flow,\" characterized by deep immersion and optimal performance. In essence, doing less simultaneously allows us to accomplish more.",
        question: "<b>[Text 2 - Question 2 of 5]</b><br>What are 'switch costs' as explained in the second paragraph?",
        options: [
            "The financial costs of buying new technology for an office.",
            "The penalties employees face when they make errors.",
            "The time and cognitive energy the brain loses when it reorients itself to a new task.",
            "The time it takes to commute between home and work."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: The time and cognitive energy the brain loses when it reorients itself to a new task.</b><br><br><b>הסבר:</b> הפסקה השנייה מסבירה ש'עלויות המעבר' (switch costs) הן פרק הזמן והמאמץ שהמוח דורש כדי להתכוונן מחדש להקשר החדש ('requires a brief period to reorient itself') בכל פעם שהוא קופץ למשימה אחרת.",
        tts_text: "Question: What are switch costs as explained in the second paragraph? Option 1: The financial costs of buying new technology for an office. Option 2: The penalties employees face when they make errors. Option 3: The time and cognitive energy the brain loses when it reorients itself to a new task. Option 4: The time it takes to commute between home and work."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Illusion of Multitasking</b><br><br>In today's fast-paced corporate world, the ability to multitask is often lauded as a highly desirable skill. Job descriptions frequently list multitasking as a prerequisite, and employees boast about their capacity to juggle emails, phone calls, and complex projects simultaneously. However, neuroscientists have consistently debunked the myth of multitasking. They assert that the human brain is not wired to process multiple attention-demanding tasks concurrently. What we perceive as multitasking is, in reality, \"task-switching\"—the brain rapidly shifting its focus back and forth between different activities.<br><br>This constant task-switching exacts a severe cognitive toll. Every time the brain shifts focus, it requires a brief period to reorient itself to the new context. Over the course of a day, these \"switch costs\" accumulate, leading to a significant decrease in overall productivity. Researchers estimate that chronic multitaskers can lose up to 40% of their productive time. Furthermore, the quality of work inevitably deteriorates. When attention is fractured, individuals are more prone to making errors and overlooking crucial details.<br><br>Beyond the loss of efficiency, chronic multitasking has been linked to elevated stress levels. The continuous barrage of stimuli triggers the release of cortisol, keeping the individual in a perpetual state of heightened alertness. To foster a healthier and more productive work environment, experts advocate for \"monotasking.\" By deliberately dedicating uninterrupted blocks of time to a single task, individuals can achieve a state of \"flow,\" characterized by deep immersion and optimal performance. In essence, doing less simultaneously allows us to accomplish more.",
        question: "<b>[Text 2 - Question 3 of 5]</b><br>Which of the following is an outcome of fractured attention during work?",
        options: [
            "A state of deep immersion and optimal performance.",
            "A decrease in the release of cortisol.",
            "An increased likelihood of making errors and missing important details.",
            "A faster ability to read emails."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: An increased likelihood of making errors and missing important details.</b><br><br><b>הסבר:</b> בסוף הפסקה השנייה נאמר שכאשר תשומת הלב מפוצלת (fractured), אנשים נוטים יותר לעשות טעויות ולהתעלם מפרטים קריטיים ('more prone to making errors and overlooking crucial details').",
        tts_text: "Question: Which of the following is an outcome of fractured attention during work? Option 1: A state of deep immersion and optimal performance. Option 2: A decrease in the release of cortisol. Option 3: An increased likelihood of making errors and missing important details. Option 4: A faster ability to read emails."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Illusion of Multitasking</b><br><br>In today's fast-paced corporate world, the ability to multitask is often lauded as a highly desirable skill. Job descriptions frequently list multitasking as a prerequisite, and employees boast about their capacity to juggle emails, phone calls, and complex projects simultaneously. However, neuroscientists have consistently debunked the myth of multitasking. They assert that the human brain is not wired to process multiple attention-demanding tasks concurrently. What we perceive as multitasking is, in reality, \"task-switching\"—the brain rapidly shifting its focus back and forth between different activities.<br><br>This constant task-switching exacts a severe cognitive toll. Every time the brain shifts focus, it requires a brief period to reorient itself to the new context. Over the course of a day, these \"switch costs\" accumulate, leading to a significant decrease in overall productivity. Researchers estimate that chronic multitaskers can lose up to 40% of their productive time. Furthermore, the quality of work inevitably deteriorates. When attention is fractured, individuals are more prone to making errors and overlooking crucial details.<br><br>Beyond the loss of efficiency, chronic multitasking has been linked to elevated stress levels. The continuous barrage of stimuli triggers the release of cortisol, keeping the individual in a perpetual state of heightened alertness. To foster a healthier and more productive work environment, experts advocate for \"monotasking.\" By deliberately dedicating uninterrupted blocks of time to a single task, individuals can achieve a state of \"flow,\" characterized by deep immersion and optimal performance. In essence, doing less simultaneously allows us to accomplish more.",
        question: "<b>[Text 2 - Question 4 of 5]</b><br>What solution do experts advocate to counter the negative effects of multitasking?",
        options: [
            "Taking more breaks throughout the day.",
            "Drinking more coffee to handle the heightened alertness.",
            "Practicing 'monotasking' by dedicating uninterrupted time to a single task.",
            "Using advanced AI software to filter emails."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Practicing 'monotasking' by dedicating uninterrupted time to a single task.</b><br><br><b>הסבר:</b> בפסקה השלישית והאחרונה מציעים המומחים פתרון: 'advocate for monotasking' - ביצוע משימה אחת (מונו-טאסקינג) תוך הקדשת גושי זמן ללא הפרעות ('uninterrupted blocks of time').",
        tts_text: "Question: What solution do experts advocate to counter the negative effects of multitasking? Option 1: Taking more breaks throughout the day. Option 2: Drinking more coffee to handle the heightened alertness. Option 3: Practicing monotasking by dedicating uninterrupted time to a single task. Option 4: Using advanced AI software to filter emails."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Illusion of Multitasking</b><br><br>In today's fast-paced corporate world, the ability to multitask is often lauded as a highly desirable skill. Job descriptions frequently list multitasking as a prerequisite, and employees boast about their capacity to juggle emails, phone calls, and complex projects simultaneously. However, neuroscientists have consistently debunked the myth of multitasking. They assert that the human brain is not wired to process multiple attention-demanding tasks concurrently. What we perceive as multitasking is, in reality, \"task-switching\"—the brain rapidly shifting its focus back and forth between different activities.<br><br>This constant task-switching exacts a severe cognitive toll. Every time the brain shifts focus, it requires a brief period to reorient itself to the new context. Over the course of a day, these \"switch costs\" accumulate, leading to a significant decrease in overall productivity. Researchers estimate that chronic multitaskers can lose up to 40% of their productive time. Furthermore, the quality of work inevitably deteriorates. When attention is fractured, individuals are more prone to making errors and overlooking crucial details.<br><br>Beyond the loss of efficiency, chronic multitasking has been linked to elevated stress levels. The continuous barrage of stimuli triggers the release of cortisol, keeping the individual in a perpetual state of heightened alertness. To foster a healthier and more productive work environment, experts advocate for \"monotasking.\" By deliberately dedicating uninterrupted blocks of time to a single task, individuals can achieve a state of \"flow,\" characterized by deep immersion and optimal performance. In essence, doing less simultaneously allows us to accomplish more.",
        question: "<b>[Text 2 - Question 5 of 5]</b><br>What is the author's primary tone when discussing the corporate world's view on multitasking?",
        options: [
            "Enthusiastic and supportive",
            "Critical and skeptical",
            "Indifferent",
            "Humorous"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Critical and skeptical.</b><br><br><b>הסבר:</b> מיומנות Module G (קביעת נימת הכותב / Tone). הכותב פותח בתיאור איך עולם התאגידים משבח (lauded) את היכולת הזו, אך מיד תוקף אותה באמצעות מדעני המוח המפריכים את ה'מיתוס'. לאורך כל הטקסט ניכרת ביקורתיות רבה על הנזקים הקוגניטיביים והנפשיים של 'מולטי-טאסקינג'.",
        tts_text: "Question: What is the author's primary tone when discussing the corporate world's view on multitasking? Option 1: Enthusiastic and supportive. Option 2: Critical and skeptical. Option 3: Indifferent. Option 4: Humorous."
    },

    // =====================================================================
    // Text 3: The Architecture of the Future (Module G)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Architecture of the Future</b><br><br>As rapid urbanization pushes cities to their spatial limits, architects are increasingly turning their gaze upwards, envisioning towering structures known as 'plyscrapers.' Unlike the steel and concrete behemoths that defined the 20th-century skyline, plyscrapers are primarily constructed from cross-laminated timber (CLT). CLT is a highly engineered wood product created by gluing together layers of solid wood at right angles. This innovative technique yields a material that rivals the structural strength of traditional steel while weighing significantly less.<br><br>The shift towards timber architecture is largely driven by environmental imperatives. The production of steel and concrete is notoriously carbon-intensive, accounting for nearly 15% of global greenhouse gas emissions. In stark contrast, trees absorb carbon dioxide as they grow. When the timber is harvested and integrated into a building, that carbon remains sequestered within the structure for decades, effectively transforming the skyscraper into a giant carbon sink. Furthermore, CLT panels can be prefabricated in factories, which dramatically reduces construction time, minimizes waste, and lowers noise pollution on-site.<br><br>Despite the undeniable ecological benefits, plyscrapers face several hurdles. The most prominent concern among the public and regulatory bodies is fire safety. Modern architects, however, counter this apprehension by explaining that massive CLT panels behave differently than small pieces of firewood. In the event of a fire, the outer layer of the timber chars, creating a protective barrier that insulates the core and maintains the building's structural integrity. As building codes gradually adapt to this new reality, plyscrapers are poised to redefine the aesthetics and sustainability of the modern metropolis.",
        question: "<b>[Text 3 - Question 1 of 5]</b><br>What distinguishes a 'plyscraper' from a traditional skyscraper?",
        options: [
            "It is built exclusively in rural areas rather than cities.",
            "It is significantly shorter and wider.",
            "It is primarily constructed from cross-laminated timber (CLT) rather than steel and concrete.",
            "It requires twice as long to construct."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: It is primarily constructed from cross-laminated timber (CLT) rather than steel and concrete.</b><br><br><b>הסבר:</b> הפסקה הראשונה מציגה את השוני הברור: בניגוד לענקי הפלדה והבטון (steel and concrete behemoths), גורדי-העץ ('plyscrapers') בנויים מעץ רב-שכבתי מודבק (CLT).",
        tts_text: "Question: What distinguishes a plyscraper from a traditional skyscraper? Option 1: It is built exclusively in rural areas rather than cities. Option 2: It is significantly shorter and wider. Option 3: It is primarily constructed from cross-laminated timber rather than steel and concrete. Option 4: It requires twice as long to construct."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Architecture of the Future</b><br><br>As rapid urbanization pushes cities to their spatial limits, architects are increasingly turning their gaze upwards, envisioning towering structures known as 'plyscrapers.' Unlike the steel and concrete behemoths that defined the 20th-century skyline, plyscrapers are primarily constructed from cross-laminated timber (CLT). CLT is a highly engineered wood product created by gluing together layers of solid wood at right angles. This innovative technique yields a material that rivals the structural strength of traditional steel while weighing significantly less.<br><br>The shift towards timber architecture is largely driven by environmental imperatives. The production of steel and concrete is notoriously carbon-intensive, accounting for nearly 15% of global greenhouse gas emissions. In stark contrast, trees absorb carbon dioxide as they grow. When the timber is harvested and integrated into a building, that carbon remains sequestered within the structure for decades, effectively transforming the skyscraper into a giant carbon sink. Furthermore, CLT panels can be prefabricated in factories, which dramatically reduces construction time, minimizes waste, and lowers noise pollution on-site.<br><br>Despite the undeniable ecological benefits, plyscrapers face several hurdles. The most prominent concern among the public and regulatory bodies is fire safety. Modern architects, however, counter this apprehension by explaining that massive CLT panels behave differently than small pieces of firewood. In the event of a fire, the outer layer of the timber chars, creating a protective barrier that insulates the core and maintains the building's structural integrity. As building codes gradually adapt to this new reality, plyscrapers are poised to redefine the aesthetics and sustainability of the modern metropolis.",
        question: "<b>[Text 3 - Question 2 of 5]</b><br>How does timber architecture help the environment compared to concrete and steel?",
        options: [
            "Timber architecture causes more noise pollution on-site.",
            "Timber absorbs heat better than concrete, preventing global warming.",
            "Timber traps carbon dioxide within the building, whereas concrete production emits a massive amount of greenhouse gases.",
            "Timber is cheaper and easier to find."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Timber traps carbon dioxide within the building, whereas concrete production emits a massive amount of greenhouse gases.</b><br><br><b>הסבר:</b> הפסקה השנייה מסבירה את הניגוד (stark contrast). בטון ופלדה פולטים גזי חממה ('carbon-intensive... accounting for nearly 15%'). עץ, לעומת זאת, כולא בתוכו את הפחמן ('carbon remains sequestered... transforming the skyscraper into a giant carbon sink').",
        tts_text: "Question: How does timber architecture help the environment compared to concrete and steel? Option 1: Timber architecture causes more noise pollution on-site. Option 2: Timber absorbs heat better than concrete, preventing global warming. Option 3: Timber traps carbon dioxide within the building, whereas concrete production emits a massive amount of greenhouse gases. Option 4: Timber is cheaper and easier to find."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Architecture of the Future</b><br><br>As rapid urbanization pushes cities to their spatial limits, architects are increasingly turning their gaze upwards, envisioning towering structures known as 'plyscrapers.' Unlike the steel and concrete behemoths that defined the 20th-century skyline, plyscrapers are primarily constructed from cross-laminated timber (CLT). CLT is a highly engineered wood product created by gluing together layers of solid wood at right angles. This innovative technique yields a material that rivals the structural strength of traditional steel while weighing significantly less.<br><br>The shift towards timber architecture is largely driven by environmental imperatives. The production of steel and concrete is notoriously carbon-intensive, accounting for nearly 15% of global greenhouse gas emissions. In stark contrast, trees absorb carbon dioxide as they grow. When the timber is harvested and integrated into a building, that carbon remains sequestered within the structure for decades, effectively transforming the skyscraper into a giant carbon sink. Furthermore, CLT panels can be prefabricated in factories, which dramatically reduces construction time, minimizes waste, and lowers noise pollution on-site.<br><br>Despite the undeniable ecological benefits, plyscrapers face several hurdles. The most prominent concern among the public and regulatory bodies is fire safety. Modern architects, however, counter this apprehension by explaining that massive CLT panels behave differently than small pieces of firewood. In the event of a fire, the outer layer of the timber chars, creating a protective barrier that insulates the core and maintains the building's structural integrity. As building codes gradually adapt to this new reality, plyscrapers are poised to redefine the aesthetics and sustainability of the modern metropolis.",
        question: "<b>[Text 3 - Question 3 of 5]</b><br>What does the phrase 'carbon sink' in the second paragraph imply?",
        options: [
            "A machine that cleans dirty water in the building.",
            "A reservoir that absorbs and stores carbon dioxide from the atmosphere.",
            "A special type of steel used in new buildings.",
            "A structural weakness in timber."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: A reservoir that absorbs and stores carbon dioxide from the atmosphere.</b><br><br><b>הסבר:</b> מיומנות הסקת משמעות מההקשר. העצים סופגים פחמן דו-חמצני (CO2) כשהם גדלים. כשהעץ הזה הופך לבניין, הפחמן נשאר כלוא בתוכו, ולכן הבניין פועל כמו מאגר ('כיור') הקולט ואוגר את הפחמן ולא משחרר אותו לאוויר.",
        tts_text: "Question: What does the phrase 'carbon sink' in the second paragraph imply? Option 1: A machine that cleans dirty water in the building. Option 2: A reservoir that absorbs and stores carbon dioxide from the atmosphere. Option 3: A special type of steel used in new buildings. Option 4: A structural weakness in timber."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Architecture of the Future</b><br><br>As rapid urbanization pushes cities to their spatial limits, architects are increasingly turning their gaze upwards, envisioning towering structures known as 'plyscrapers.' Unlike the steel and concrete behemoths that defined the 20th-century skyline, plyscrapers are primarily constructed from cross-laminated timber (CLT). CLT is a highly engineered wood product created by gluing together layers of solid wood at right angles. This innovative technique yields a material that rivals the structural strength of traditional steel while weighing significantly less.<br><br>The shift towards timber architecture is largely driven by environmental imperatives. The production of steel and concrete is notoriously carbon-intensive, accounting for nearly 15% of global greenhouse gas emissions. In stark contrast, trees absorb carbon dioxide as they grow. When the timber is harvested and integrated into a building, that carbon remains sequestered within the structure for decades, effectively transforming the skyscraper into a giant carbon sink. Furthermore, CLT panels can be prefabricated in factories, which dramatically reduces construction time, minimizes waste, and lowers noise pollution on-site.<br><br>Despite the undeniable ecological benefits, plyscrapers face several hurdles. The most prominent concern among the public and regulatory bodies is fire safety. Modern architects, however, counter this apprehension by explaining that massive CLT panels behave differently than small pieces of firewood. In the event of a fire, the outer layer of the timber chars, creating a protective barrier that insulates the core and maintains the building's structural integrity. As building codes gradually adapt to this new reality, plyscrapers are poised to redefine the aesthetics and sustainability of the modern metropolis.",
        question: "<b>[Text 3 - Question 4 of 5]</b><br>How do architects respond to the public's primary concern regarding plyscrapers?",
        options: [
            "They install sophisticated sprinkler systems on every floor.",
            "They explain that massive timber chars on the outside during a fire, which actually protects the building's inner structure.",
            "They suggest combining steel with wood to make it completely fireproof.",
            "They admit that fire safety is a major flaw that cannot be fixed."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: They explain that massive timber chars on the outside during a fire, which actually protects the building's inner structure.</b><br><br><b>הסבר:</b> בפסקה השלישית עולה סוגיית השריפה (fire safety). המהנדסים מסבירים שפלטות העץ המסיביות מתפחמות בחלקן החיצוני ('the outer layer of the timber chars'), והשכבה השרופה הזו פועלת כחוצץ המגן על הליבה של העץ ושומר על יציבות המבנה.",
        tts_text: "Question: How do architects respond to the public's primary concern regarding plyscrapers? Option 1: They install sophisticated sprinkler systems on every floor. Option 2: They explain that massive timber chars on the outside during a fire, which actually protects the building's inner structure. Option 3: They suggest combining steel with wood to make it completely fireproof. Option 4: They admit that fire safety is a major flaw that cannot be fixed."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Architecture of the Future</b><br><br>As rapid urbanization pushes cities to their spatial limits, architects are increasingly turning their gaze upwards, envisioning towering structures known as 'plyscrapers.' Unlike the steel and concrete behemoths that defined the 20th-century skyline, plyscrapers are primarily constructed from cross-laminated timber (CLT). CLT is a highly engineered wood product created by gluing together layers of solid wood at right angles. This innovative technique yields a material that rivals the structural strength of traditional steel while weighing significantly less.<br><br>The shift towards timber architecture is largely driven by environmental imperatives. The production of steel and concrete is notoriously carbon-intensive, accounting for nearly 15% of global greenhouse gas emissions. In stark contrast, trees absorb carbon dioxide as they grow. When the timber is harvested and integrated into a building, that carbon remains sequestered within the structure for decades, effectively transforming the skyscraper into a giant carbon sink. Furthermore, CLT panels can be prefabricated in factories, which dramatically reduces construction time, minimizes waste, and lowers noise pollution on-site.<br><br>Despite the undeniable ecological benefits, plyscrapers face several hurdles. The most prominent concern among the public and regulatory bodies is fire safety. Modern architects, however, counter this apprehension by explaining that massive CLT panels behave differently than small pieces of firewood. In the event of a fire, the outer layer of the timber chars, creating a protective barrier that insulates the core and maintains the building's structural integrity. As building codes gradually adapt to this new reality, plyscrapers are poised to redefine the aesthetics and sustainability of the modern metropolis.",
        question: "<b>[Text 3 - Question 5 of 5]</b><br>What does the word 'apprehension' mean in the last paragraph? ('...counter this apprehension by explaining...')",
        options: [
            "Fear or anxiety about something that might happen.",
            "A new architectural design.",
            "Excitement and joy.",
            "A legal document."
        ],
        correctAnswer: 0,
        solution: "<b>התשובה הנכונה היא: Fear or anxiety about something that might happen.</b><br><br><b>הסבר:</b> מילת 5 יחידות קלאסית. apprehension (חשש / דאגה). הציבור מביע חשש משריפה ('concern'), והאדריכלים מגיבים לחשש הזה (counter this apprehension).",
        tts_text: "Question: What does the word apprehension mean in the last paragraph? Option 1: Fear or anxiety about something that might happen. Option 2: A new architectural design. Option 3: Excitement and joy. Option 4: A legal document."
    },

    // =====================================================================
    // Text 4: Universal Basic Income (Module G)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>Universal Basic Income: A Radical Solution?</b><br><br>As globalization and automation disrupt traditional labor markets, economists and policymakers are engaging in heated debates over a seemingly radical socio-economic proposal: Universal Basic Income (UBI). The core concept of UBI dictates that all citizens of a country receive a regular, unconditional sum of money from the government, regardless of their employment status or income level. Proponents argue that this financial safety net is essential in an era where AI threatens to render millions of jobs obsolete.<br><br>Advocates of UBI highlight its potential to eradicate extreme poverty and streamline the notoriously bureaucratic welfare system. Currently, governments spend vast resources trying to determine who is eligible for financial aid, a process often flawed by human error and complex paperwork. A universal system would bypass this bureaucracy entirely. Furthermore, supporters contend that UBI would empower individuals. Freed from the anxiety of basic survival, people might pursue higher education, engage in creative entrepreneurial ventures, or perform unpaid but socially vital work, such as caring for elderly relatives.<br><br>Conversely, critics raise significant concerns regarding the feasibility of UBI. The primary objection is economic: funding a universal stipend would require massive tax increases, potentially stifling economic growth. Moreover, detractors argue that providing \"free money\" could disincentivize work, leading to a shrinking labor force and declining national productivity. While several small-scale trials have been conducted globally with mixed results, the debate remains polarized. Ultimately, whether UBI represents a utopian ideal or an economic disaster is a question that future societies will inevitably have to resolve.",
        question: "<b>[Text 4 - Question 1 of 5]</b><br>What is the fundamental principle of Universal Basic Income (UBI)?",
        options: [
            "Giving money only to people who have lost their jobs to AI.",
            "Providing a regular, unconditional payment from the government to all citizens, regardless of their income or job status.",
            "Replacing all taxes with a single monthly payment to the government.",
            "Paying citizens only if they agree to perform socially vital work."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Providing a regular, unconditional payment from the government to all citizens...</b><br><br><b>הסבר:</b> בפסקה הראשונה מוגדר רעיון הליבה של ה-UBI: 'all citizens of a country receive a regular, unconditional sum of money... regardless of their employment status or income level' (כל האזרחים מקבלים סכום קבוע וללא תנאים... ללא קשר למצב התעסוקה או ההכנסה שלהם).",
        tts_text: "Question: What is the fundamental principle of Universal Basic Income? Option 1: Giving money only to people who have lost their jobs to AI. Option 2: Providing a regular, unconditional payment from the government to all citizens, regardless of their income or job status. Option 3: Replacing all taxes with a single monthly payment to the government. Option 4: Paying citizens only if they agree to perform socially vital work."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>Universal Basic Income: A Radical Solution?</b><br><br>As globalization and automation disrupt traditional labor markets, economists and policymakers are engaging in heated debates over a seemingly radical socio-economic proposal: Universal Basic Income (UBI). The core concept of UBI dictates that all citizens of a country receive a regular, unconditional sum of money from the government, regardless of their employment status or income level. Proponents argue that this financial safety net is essential in an era where AI threatens to render millions of jobs obsolete.<br><br>Advocates of UBI highlight its potential to eradicate extreme poverty and streamline the notoriously bureaucratic welfare system. Currently, governments spend vast resources trying to determine who is eligible for financial aid, a process often flawed by human error and complex paperwork. A universal system would bypass this bureaucracy entirely. Furthermore, supporters contend that UBI would empower individuals. Freed from the anxiety of basic survival, people might pursue higher education, engage in creative entrepreneurial ventures, or perform unpaid but socially vital work, such as caring for elderly relatives.<br><br>Conversely, critics raise significant concerns regarding the feasibility of UBI. The primary objection is economic: funding a universal stipend would require massive tax increases, potentially stifling economic growth. Moreover, detractors argue that providing \"free money\" could disincentivize work, leading to a shrinking labor force and declining national productivity. While several small-scale trials have been conducted globally with mixed results, the debate remains polarized. Ultimately, whether UBI represents a utopian ideal or an economic disaster is a question that future societies will inevitably have to resolve.",
        question: "<b>[Text 4 - Question 2 of 5]</b><br>How would UBI supposedly improve the current welfare system, according to its advocates?",
        options: [
            "It would create more jobs in government offices.",
            "It would require more complex paperwork to ensure fairness.",
            "It would eliminate the bureaucratic and expensive process of determining who is eligible for financial aid.",
            "It would force people on welfare to find jobs faster."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: It would eliminate the bureaucratic and expensive process of determining who is eligible...</b><br><br><b>הסבר:</b> בפסקה השנייה נטען כי כיום הממשלות מבזבזות משאבים רבים על ביורוקרטיה מסורבלת כדי להחליט מי זכאי לקצבה. תוכנית אוניברסלית (בה כולם מקבלים) תעקוף (bypass) לחלוטין את הבירוקרטיה הזו.",
        tts_text: "Question: How would UBI supposedly improve the current welfare system, according to its advocates? Option 1: It would create more jobs in government offices. Option 2: It would require more complex paperwork to ensure fairness. Option 3: It would eliminate the bureaucratic and expensive process of determining who is eligible for financial aid. Option 4: It would force people on welfare to find jobs faster."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>Universal Basic Income: A Radical Solution?</b><br><br>As globalization and automation disrupt traditional labor markets, economists and policymakers are engaging in heated debates over a seemingly radical socio-economic proposal: Universal Basic Income (UBI). The core concept of UBI dictates that all citizens of a country receive a regular, unconditional sum of money from the government, regardless of their employment status or income level. Proponents argue that this financial safety net is essential in an era where AI threatens to render millions of jobs obsolete.<br><br>Advocates of UBI highlight its potential to eradicate extreme poverty and streamline the notoriously bureaucratic welfare system. Currently, governments spend vast resources trying to determine who is eligible for financial aid, a process often flawed by human error and complex paperwork. A universal system would bypass this bureaucracy entirely. Furthermore, supporters contend that UBI would empower individuals. Freed from the anxiety of basic survival, people might pursue higher education, engage in creative entrepreneurial ventures, or perform unpaid but socially vital work, such as caring for elderly relatives.<br><br>Conversely, critics raise significant concerns regarding the feasibility of UBI. The primary objection is economic: funding a universal stipend would require massive tax increases, potentially stifling economic growth. Moreover, detractors argue that providing \"free money\" could disincentivize work, leading to a shrinking labor force and declining national productivity. While several small-scale trials have been conducted globally with mixed results, the debate remains polarized. Ultimately, whether UBI represents a utopian ideal or an economic disaster is a question that future societies will inevitably have to resolve.",
        question: "<b>[Text 4 - Question 3 of 5]</b><br>What does the word 'obsolete' mean in the first paragraph? ('AI threatens to render millions of jobs obsolete.')",
        options: [
            "Highly paid and desirable",
            "No longer used or needed; outdated",
            "Physically dangerous",
            "Filled with bureaucratic errors"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: No longer used or needed; outdated.</b><br><br><b>הסבר:</b> obsolete משמעו 'מיושן' או 'חסר שימוש'. הבינה המלאכותית מאיימת להפוך מיליוני מקצועות למיותרים (הם פשוט ייעלמו מהעולם).",
        tts_text: "Question: What does the word obsolete mean in the first paragraph? Option 1: Highly paid and desirable. Option 2: No longer used or needed; outdated. Option 3: Physically dangerous. Option 4: Filled with bureaucratic errors."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>Universal Basic Income: A Radical Solution?</b><br><br>As globalization and automation disrupt traditional labor markets, economists and policymakers are engaging in heated debates over a seemingly radical socio-economic proposal: Universal Basic Income (UBI). The core concept of UBI dictates that all citizens of a country receive a regular, unconditional sum of money from the government, regardless of their employment status or income level. Proponents argue that this financial safety net is essential in an era where AI threatens to render millions of jobs obsolete.<br><br>Advocates of UBI highlight its potential to eradicate extreme poverty and streamline the notoriously bureaucratic welfare system. Currently, governments spend vast resources trying to determine who is eligible for financial aid, a process often flawed by human error and complex paperwork. A universal system would bypass this bureaucracy entirely. Furthermore, supporters contend that UBI would empower individuals. Freed from the anxiety of basic survival, people might pursue higher education, engage in creative entrepreneurial ventures, or perform unpaid but socially vital work, such as caring for elderly relatives.<br><br>Conversely, critics raise significant concerns regarding the feasibility of UBI. The primary objection is economic: funding a universal stipend would require massive tax increases, potentially stifling economic growth. Moreover, detractors argue that providing \"free money\" could disincentivize work, leading to a shrinking labor force and declining national productivity. While several small-scale trials have been conducted globally with mixed results, the debate remains polarized. Ultimately, whether UBI represents a utopian ideal or an economic disaster is a question that future societies will inevitably have to resolve.",
        question: "<b>[Text 4 - Question 4 of 5]</b><br>What is the primary economic objection to UBI raised by its critics?",
        options: [
            "It would only benefit wealthy people.",
            "It would require immense tax increases, which could hurt economic growth.",
            "It would cause AI to take over even more jobs.",
            "It would force people to work longer hours."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It would require immense tax increases, which could hurt economic growth.</b><br><br><b>הסבר:</b> בפסקה השלישית עולה ההתנגדות הכלכלית המרכזית: מימון הקצבה האוניברסלית ('universal stipend') ידרוש העלאות מס מאסיביות, מה שעלול לחנוק ('stifling') את הצמיחה הכלכלית.",
        tts_text: "Question: What is the primary economic objection to UBI raised by its critics? Option 1: It would only benefit wealthy people. Option 2: It would require immense tax increases, which could hurt economic growth. Option 3: It would cause AI to take over even more jobs. Option 4: It would force people to work longer hours."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>Universal Basic Income: A Radical Solution?</b><br><br>As globalization and automation disrupt traditional labor markets, economists and policymakers are engaging in heated debates over a seemingly radical socio-economic proposal: Universal Basic Income (UBI). The core concept of UBI dictates that all citizens of a country receive a regular, unconditional sum of money from the government, regardless of their employment status or income level. Proponents argue that this financial safety net is essential in an era where AI threatens to render millions of jobs obsolete.<br><br>Advocates of UBI highlight its potential to eradicate extreme poverty and streamline the notoriously bureaucratic welfare system. Currently, governments spend vast resources trying to determine who is eligible for financial aid, a process often flawed by human error and complex paperwork. A universal system would bypass this bureaucracy entirely. Furthermore, supporters contend that UBI would empower individuals. Freed from the anxiety of basic survival, people might pursue higher education, engage in creative entrepreneurial ventures, or perform unpaid but socially vital work, such as caring for elderly relatives.<br><br>Conversely, critics raise significant concerns regarding the feasibility of UBI. The primary objection is economic: funding a universal stipend would require massive tax increases, potentially stifling economic growth. Moreover, detractors argue that providing \"free money\" could disincentivize work, leading to a shrinking labor force and declining national productivity. While several small-scale trials have been conducted globally with mixed results, the debate remains polarized. Ultimately, whether UBI represents a utopian ideal or an economic disaster is a question that future societies will inevitably have to resolve.",
        question: "<b>[Text 4 - Question 5 of 5]</b><br>Which of the following best describes the organization of the text?",
        options: [
            "A chronological history of a socio-economic concept.",
            "An explanation of a new idea followed by a presentation of its supporting arguments and its opposing arguments.",
            "A detailed scientific analysis of artificial intelligence and its flaws.",
            "A biased article strongly supporting the implementation of UBI."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: An explanation of a new idea followed by a presentation of its supporting arguments and its opposing arguments.</b><br><br><b>הסבר:</b> מיומנות Module G (Organization). הטקסט בנוי בצורת 'בעד ונגד'. פסקה 1 מציגה את הרעיון (UBI). פסקה 2 מציגה את טענות התומכים (Advocates). פסקה 3 מציגה את טענות המתנגדים (Critics/detractors) וסיום המסכם את הדילמה (נשאר אובייקטיבי).",
        tts_text: "Question: Which of the following best describes the organization of the text? Option 1: A chronological history of a socio-economic concept. Option 2: An explanation of a new idea followed by a presentation of its supporting arguments and its opposing arguments. Option 3: A detailed scientific analysis of artificial intelligence and its flaws. Option 4: A biased article strongly supporting the implementation of UBI."
    },

    // =====================================================================
    // Text 5: The Epigenetics Revolution (Module G)
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Epigenetics Revolution</b><br><br>For much of the 20th century, biological determinism dominated scientific thought. The prevailing dogma asserted that our DNA was a rigid blueprint—a fixed destiny determining our physical traits, susceptibility to diseases, and even our longevity. However, a revolutionary field known as epigenetics has fundamentally disrupted this classical view. Epigenetics studies how external environmental factors and behaviors can influence gene expression without altering the underlying DNA sequence itself.<br><br>Think of DNA as the hardware of a computer, and the epigenome as the software. The epigenome consists of chemical tags attached to the DNA that act like switches, turning specific genes \"on\" or \"off.\" Scientists have discovered that lifestyle choices such as diet, stress levels, physical exercise, and exposure to pollutants can modify these chemical tags. For example, a diet rich in certain nutrients can silence a gene linked to cancer, while chronic stress might activate a gene responsible for inflammation. This means that while we cannot change the genes we inherited, we have significant agency over how those genes behave.<br><br>Perhaps the most startling revelation of epigenetics is the concept of transgenerational inheritance. Recent studies on trauma survivors indicate that epigenetic changes acquired during a person's lifetime can sometimes be passed down to their offspring. If a grandfather endured severe starvation, the resulting epigenetic adaptations in his cells might predispose his grandchildren to metabolic disorders, even if they grew up in an environment of abundance. This paradigm shift implies that our daily choices not only shape our own biological destiny but also potentially influence the health of generations yet unborn.",
        question: "<b>[Text 5 - Question 1 of 5]</b><br>What was the 'prevailing dogma' (widely accepted belief) in biology during much of the 20th century?",
        options: [
            "That environmental factors control our DNA sequence.",
            "That our DNA is a fixed blueprint that strictly determines our physical traits and health destiny.",
            "That genes can be easily changed by our daily diet.",
            "That the software of the body is more important than the hardware."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: That our DNA is a fixed blueprint that strictly determines our physical traits and health destiny.</b><br><br><b>הסבר:</b> בפסקה הראשונה מוסבר כי בעבר האמינו שה-DNA הוא 'rigid blueprint' (תוכנית אב נוקשה) הקובעת את הגורל שלנו מראש, ואינה ניתנת לשינוי.",
        tts_text: "Question: What was the prevailing dogma in biology during much of the 20th century? Option 1: That environmental factors control our DNA sequence. Option 2: That our DNA is a fixed blueprint that strictly determines our physical traits and health destiny. Option 3: That genes can be easily changed by our daily diet. Option 4: That the software of the body is more important than the hardware."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Epigenetics Revolution</b><br><br>For much of the 20th century, biological determinism dominated scientific thought. The prevailing dogma asserted that our DNA was a rigid blueprint—a fixed destiny determining our physical traits, susceptibility to diseases, and even our longevity. However, a revolutionary field known as epigenetics has fundamentally disrupted this classical view. Epigenetics studies how external environmental factors and behaviors can influence gene expression without altering the underlying DNA sequence itself.<br><br>Think of DNA as the hardware of a computer, and the epigenome as the software. The epigenome consists of chemical tags attached to the DNA that act like switches, turning specific genes \"on\" or \"off.\" Scientists have discovered that lifestyle choices such as diet, stress levels, physical exercise, and exposure to pollutants can modify these chemical tags. For example, a diet rich in certain nutrients can silence a gene linked to cancer, while chronic stress might activate a gene responsible for inflammation. This means that while we cannot change the genes we inherited, we have significant agency over how those genes behave.<br><br>Perhaps the most startling revelation of epigenetics is the concept of transgenerational inheritance. Recent studies on trauma survivors indicate that epigenetic changes acquired during a person's lifetime can sometimes be passed down to their offspring. If a grandfather endured severe starvation, the resulting epigenetic adaptations in his cells might predispose his grandchildren to metabolic disorders, even if they grew up in an environment of abundance. This paradigm shift implies that our daily choices not only shape our own biological destiny but also potentially influence the health of generations yet unborn.",
        question: "<b>[Text 5 - Question 2 of 5]</b><br>How does the author use the metaphor of a computer to explain epigenetics?",
        options: [
            "DNA is like a computer virus, and epigenetics is the antivirus software.",
            "DNA is the hardware (the machine itself), and the epigenome is the software (the instructions that tell the machine what to do).",
            "DNA is the computer's screen, and the epigenome is the keyboard.",
            "The author uses the computer metaphor to prove that humans are actually machines."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: DNA is the hardware, and the epigenome is the software.</b><br><br><b>הסבר:</b> מיומנות הבנת מטאפורות (Metaphors). בפסקה השנייה: 'Think of DNA as the hardware... and the epigenome as the software'. ה-DNA הוא הרכיב הקבוע (חומרה), בעוד האפיגנטיקה קובעת מה מופעל ומה כבוי (תוכנה).",
        tts_text: "Question: How does the author use the metaphor of a computer to explain epigenetics? Option 1: DNA is like a computer virus, and epigenetics is the antivirus software. Option 2: DNA is the hardware, and the epigenome is the software. Option 3: DNA is the computer's screen, and the epigenome is the keyboard. Option 4: The author uses the computer metaphor to prove that humans are actually machines."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Epigenetics Revolution</b><br><br>For much of the 20th century, biological determinism dominated scientific thought. The prevailing dogma asserted that our DNA was a rigid blueprint—a fixed destiny determining our physical traits, susceptibility to diseases, and even our longevity. However, a revolutionary field known as epigenetics has fundamentally disrupted this classical view. Epigenetics studies how external environmental factors and behaviors can influence gene expression without altering the underlying DNA sequence itself.<br><br>Think of DNA as the hardware of a computer, and the epigenome as the software. The epigenome consists of chemical tags attached to the DNA that act like switches, turning specific genes \"on\" or \"off.\" Scientists have discovered that lifestyle choices such as diet, stress levels, physical exercise, and exposure to pollutants can modify these chemical tags. For example, a diet rich in certain nutrients can silence a gene linked to cancer, while chronic stress might activate a gene responsible for inflammation. This means that while we cannot change the genes we inherited, we have significant agency over how those genes behave.<br><br>Perhaps the most startling revelation of epigenetics is the concept of transgenerational inheritance. Recent studies on trauma survivors indicate that epigenetic changes acquired during a person's lifetime can sometimes be passed down to their offspring. If a grandfather endured severe starvation, the resulting epigenetic adaptations in his cells might predispose his grandchildren to metabolic disorders, even if they grew up in an environment of abundance. This paradigm shift implies that our daily choices not only shape our own biological destiny but also potentially influence the health of generations yet unborn.",
        question: "<b>[Text 5 - Question 3 of 5]</b><br>Which of the following is an example of an epigenetic change mentioned in the text?",
        options: [
            "Changing your DNA sequence by undergoing a surgery.",
            "Silencing a cancer-linked gene through a diet rich in specific nutrients.",
            "Inheriting brown eyes from your parents.",
            "Learning how to program computer software."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Silencing a cancer-linked gene through a diet rich in specific nutrients.</b><br><br><b>הסבר:</b> בפסקה השנייה מוצגת דוגמה לשינוי אפיגנטי: השתקת ('silence') גן המקושר לסרטן באמצעות תזונה נכונה. זה משפיע על ביטוי הגן מבלי לשנות את רצף ה-DNA עצמו.",
        tts_text: "Question: Which of the following is an example of an epigenetic change mentioned in the text? Option 1: Changing your DNA sequence by undergoing a surgery. Option 2: Silencing a cancer-linked gene through a diet rich in specific nutrients. Option 3: Inheriting brown eyes from your parents. Option 4: Learning how to program computer software."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Epigenetics Revolution</b><br><br>For much of the 20th century, biological determinism dominated scientific thought. The prevailing dogma asserted that our DNA was a rigid blueprint—a fixed destiny determining our physical traits, susceptibility to diseases, and even our longevity. However, a revolutionary field known as epigenetics has fundamentally disrupted this classical view. Epigenetics studies how external environmental factors and behaviors can influence gene expression without altering the underlying DNA sequence itself.<br><br>Think of DNA as the hardware of a computer, and the epigenome as the software. The epigenome consists of chemical tags attached to the DNA that act like switches, turning specific genes \"on\" or \"off.\" Scientists have discovered that lifestyle choices such as diet, stress levels, physical exercise, and exposure to pollutants can modify these chemical tags. For example, a diet rich in certain nutrients can silence a gene linked to cancer, while chronic stress might activate a gene responsible for inflammation. This means that while we cannot change the genes we inherited, we have significant agency over how those genes behave.<br><br>Perhaps the most startling revelation of epigenetics is the concept of transgenerational inheritance. Recent studies on trauma survivors indicate that epigenetic changes acquired during a person's lifetime can sometimes be passed down to their offspring. If a grandfather endured severe starvation, the resulting epigenetic adaptations in his cells might predispose his grandchildren to metabolic disorders, even if they grew up in an environment of abundance. This paradigm shift implies that our daily choices not only shape our own biological destiny but also potentially influence the health of generations yet unborn.",
        question: "<b>[Text 5 - Question 4 of 5]</b><br>What makes 'transgenerational inheritance' so startling according to the third paragraph?",
        options: [
            "It proves that trauma completely deletes DNA.",
            "It shows that changes caused by a person's environment and lifestyle can be passed on to their future grandchildren.",
            "It means that grandparents always live longer if they experience starvation.",
            "It proves that children always inherit their parents' exact memories."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: It shows that changes caused by a person's environment and lifestyle can be passed on to their future grandchildren.</b><br><br><b>הסבר:</b> התגלית המרעישה (startling revelation) היא שתנאי חיים נרכשים (כמו רעב קיצוני שחווה סבא) יכולים להשאיר חותם (תגיות כימיות) שיעבור בתורשה ('passed down to their offspring') וישפיע על הנכדים.",
        tts_text: "Question: What makes transgenerational inheritance so startling according to the third paragraph? Option 1: It proves that trauma completely deletes DNA. Option 2: It shows that changes caused by a person's environment and lifestyle can be passed on to their future grandchildren. Option 3: It means that grandparents always live longer if they experience starvation. Option 4: It proves that children always inherit their parents' exact memories."
    },
    {
        topic: "reading_comprehension",
        subTopic: "High School: Module G Practice (רמה 5 יחידות)",
        passage: "<b>The Epigenetics Revolution</b><br><br>For much of the 20th century, biological determinism dominated scientific thought. The prevailing dogma asserted that our DNA was a rigid blueprint—a fixed destiny determining our physical traits, susceptibility to diseases, and even our longevity. However, a revolutionary field known as epigenetics has fundamentally disrupted this classical view. Epigenetics studies how external environmental factors and behaviors can influence gene expression without altering the underlying DNA sequence itself.<br><br>Think of DNA as the hardware of a computer, and the epigenome as the software. The epigenome consists of chemical tags attached to the DNA that act like switches, turning specific genes \"on\" or \"off.\" Scientists have discovered that lifestyle choices such as diet, stress levels, physical exercise, and exposure to pollutants can modify these chemical tags. For example, a diet rich in certain nutrients can silence a gene linked to cancer, while chronic stress might activate a gene responsible for inflammation. This means that while we cannot change the genes we inherited, we have significant agency over how those genes behave.<br><br>Perhaps the most startling revelation of epigenetics is the concept of transgenerational inheritance. Recent studies on trauma survivors indicate that epigenetic changes acquired during a person's lifetime can sometimes be passed down to their offspring. If a grandfather endured severe starvation, the resulting epigenetic adaptations in his cells might predispose his grandchildren to metabolic disorders, even if they grew up in an environment of abundance. This paradigm shift implies that our daily choices not only shape our own biological destiny but also potentially influence the health of generations yet unborn.",
        question: "<b>[Text 5 - Question 5 of 5]</b><br>What does the word 'susceptibility' mean in the first paragraph? ('determining our physical traits, susceptibility to diseases...')",
        options: [
            "Immunity or resistance to something.",
            "The state of being easily affected, influenced, or harmed by something.",
            "The medical treatment used to cure a disease.",
            "The process of creating a new virus."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: The state of being easily affected, influenced, or harmed by something.</b><br><br><b>הסבר:</b> המילה susceptibility (רגישות/פגיעות/נטייה) מתארת את הסיכוי שאדם יושפע ממשהו או יחלה במחלה. בעבר חשבו שהרגישות שלנו למחלות קבועה מראש ב-DNA.",
        tts_text: "Question: What does the word susceptibility mean in the first paragraph? Option 1: Immunity or resistance to something. Option 2: The state of being easily affected, influenced, or harmed by something. Option 3: The medical treatment used to cure a disease. Option 4: The process of creating a new virus."
    },

    // =====================================================================
    // =====================================================================
    // Sub-topic: Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)
    // No passage text - theory & practical skills
    // =====================================================================
    // =====================================================================
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "What is the main purpose of the reading strategy called <b>'Skimming'</b>?",
        options: [
            "To read every single word slowly to understand the deepest meaning of the text.",
            "To look for a specific piece of information, like a date or a name.",
            "To read a text quickly to get the general idea (the 'gist') of what it is about.",
            "To find spelling mistakes in a text."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To read a text quickly to get the general idea.</b><br><br><b>הסבר:</b> רפרוף (Skimming) היא טכניקה של קריאה מהירה בה אנו 'קופצים' מעל הטקסט וקוראים רק כותרות, מילים מודגשות ואת המשפטים הראשונים בכל פסקה, כדי להבין על מה מדובר באופן כללי לפני הקריאה המעמיקה.",
        tts_text: "Question: What is the main purpose of the reading strategy called Skimming? Option 1: To read every single word slowly to understand the deepest meaning of the text. Option 2: To look for a specific piece of information, like a date or a name. Option 3: To read a text quickly to get the general idea of what it is about. Option 4: To find spelling mistakes in a text."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "If you are looking at a train schedule to find out what time the train to London leaves, which reading strategy are you using?",
        options: [
            "Skimming",
            "Scanning",
            "Deep reading",
            "Predicting"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Scanning.</b><br><br><b>הסבר:</b> סריקה (Scanning) היא הפעולה של חיפוש נתון ספציפי (שם, תאריך, מספר, שעה) מבלי לקרוא את שאר הטקסט שמסביב. בדיוק כמו חיפוש שעה בלוח רכבות או שם בספר טלפונים.",
        tts_text: "Question: If you are looking at a train schedule to find out what time the train to London leaves, which reading strategy are you using? Option 1: Skimming. Option 2: Scanning. Option 3: Deep reading. Option 4: Predicting."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "Where is the <b>'Main Idea'</b> (Topic Sentence) of a paragraph usually located in academic and informational texts?",
        options: [
            "Hidden in the middle, surrounded by examples.",
            "In the footnotes at the bottom of the page.",
            "Usually in the first or second sentence of the paragraph.",
            "It is never written; you have to guess it."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Usually in the first or second sentence of the paragraph.</b><br><br><b>הסבר:</b> ברוב הטקסטים המדעיים והעיוניים באנגלית, הכותב משתמש במבנה 'דדוקטיבי': הוא מציג את הטענה המרכזית (Topic Sentence) כבר במשפט הראשון, ואז מקדיש את שאר הפסקה להסברים ודוגמאות התומכים בה.",
        tts_text: "Question: Where is the Main Idea or Topic Sentence of a paragraph usually located in academic and informational texts? Option 1: Hidden in the middle, surrounded by examples. Option 2: In the footnotes at the bottom of the page. Option 3: Usually in the first or second sentence of the paragraph. Option 4: It is never written; you have to guess it."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "You encounter a difficult word you don't know: <i>'The king was incredibly <b>benevolent</b>; he gave food to the poor, built hospitals, and never punished anyone unfairly.'</i><br>What strategy helps you guess the meaning of 'benevolent'?",
        options: [
            "Scanning",
            "Using Context Clues (looking at the words and examples around it)",
            "Translation",
            "Skimming"
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Using Context Clues.</b><br><br><b>הסבר:</b> הסקת משמעות מתוך הקשר (Context Clues). גם אם אינכם יודעים ש-benevolent פירושו 'נדיב/טוב לב', ההמשך ('נתן אוכל לעניים, בנה בתי חולים') מספק את ההקשר ומאפשר לכם לנחש שהתכונה חיובית וקשורה לנתינה.",
        tts_text: "Question: You encounter a difficult word you don't know: The king was incredibly benevolent; he gave food to the poor, built hospitals, and never punished anyone unfairly. What strategy helps you guess the meaning of benevolent? Option 1: Scanning. Option 2: Using Context Clues. Option 3: Translation. Option 4: Skimming."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "When a question asks <i>'What can be inferred from paragraph 2?'</i>, what does 'inferred' mean?",
        options: [
            "To copy the exact words from the text.",
            "To find a grammatical error.",
            "To draw a logical conclusion based on hints in the text, even if it is not stated directly.",
            "To translate the paragraph into another language."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: To draw a logical conclusion based on hints in the text...</b><br><br><b>הסבר:</b> הסקת מסקנות (Inference / Reading between the lines). השאלה לא מבקשת שתמצאו ציטוט מדויק, אלא שתבינו את מה שהכותב רמז לו ולא אמר באופן ישיר.",
        tts_text: "Question: When a question asks 'What can be inferred from paragraph 2?', what does inferred mean? Option 1: To copy the exact words from the text. Option 2: To find a grammatical error. Option 3: To draw a logical conclusion based on hints in the text, even if it is not stated directly. Option 4: To translate the paragraph into another language."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "Transition words help us understand the connection between ideas. If a paragraph starts with the word <b>'Furthermore'</b>, what is the author about to do?",
        options: [
            "Introduce an opposing or contrasting idea (like 'but').",
            "Give a summary of the text.",
            "Add more information or an additional point that supports the previous idea.",
            "Show a cause and effect relationship."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: Add more information or an additional point...</b><br><br><b>הסבר:</b> המילים Furthermore, Moreover, In addition (יתרה מכך, בנוסף) הן מילות <b>הוספה</b>. כשהן מופיעות, אנחנו יודעים שהכותב עומד לחזק את הטענה הקודמת בעזרת נימוק או עובדה נוספת.",
        tts_text: "Question: Transition words help us understand the connection between ideas. If a paragraph starts with the word Furthermore, what is the author about to do? Option 1: Introduce an opposing or contrasting idea. Option 2: Give a summary of the text. Option 3: Add more information or an additional point that supports the previous idea. Option 4: Show a cause and effect relationship."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "Which of the following transition words signals a <b>contrast or a change in direction</b> in the text?",
        options: [
            "Therefore",
            "For instance",
            "Consequently",
            "Nevertheless"
        ],
        correctAnswer: 3,
        solution: "<b>התשובה הנכונה היא: Nevertheless.</b><br><br><b>הסבר:</b> Nevertheless (אף על פי כן / עם זאת) היא מילת ניגוד/ויתור שמסמנת לקורא: 'שימו לב, אני עומד להציג מידע שסותר את מה שאמרתי קודם'. ('Therefore' ו-'Consequently' הן מילות תוצאה, 'For instance' היא לדוגמה).",
        tts_text: "Question: Which of the following transition words signals a contrast or a change in direction in the text? Option 1: Therefore. Option 2: For instance. Option 3: Consequently. Option 4: Nevertheless."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "Before you start reading a long, difficult text on a test, what is the best strategy to use?",
        options: [
            "Start translating the text word-by-word using a dictionary.",
            "Read the title, subtitles, look at any pictures/graphs, and read the first and last sentences of the text.",
            "Close your eyes and try to guess the answers.",
            "Read only the middle paragraph because it contains the most information."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: Read the title, subtitles, look at any pictures/graphs, and read the first and last sentences...</b><br><br><b>הסבר:</b> זוהי אסטרטגיית ה-Pre-reading (טרום-קריאה). לפני שצוללים לפרטים הקטנים, חשוב לקבל 'מבט על' בעזרת הכותרות והמשפטים הפותחים, כדי להבין מהו ההקשר הכללי של המאמר. זה חוסך זמן יקר ומונע בלבול.",
        tts_text: "Question: Before you start reading a long, difficult text on a test, what is the best strategy to use? Option 1: Start translating the text word-by-word using a dictionary. Option 2: Read the title, subtitles, look at any pictures/graphs, and read the first and last sentences of the text. Option 3: Close your eyes and try to guess the answers. Option 4: Read only the middle paragraph because it contains the most information."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "In reading comprehension tests, questions often follow the chronological order of the text. If Question 1 is about Paragraph 1, and Question 3 is about Paragraph 4, where will you most likely find the answer to Question 2?",
        options: [
            "In Paragraph 5 or 6.",
            "In Paragraph 2 or 3.",
            "Back in Paragraph 1.",
            "In the title of the text."
        ],
        correctAnswer: 1,
        solution: "<b>התשובה הנכונה היא: In Paragraph 2 or 3.</b><br><br><b>הסבר:</b> מבחני בגרות באנגלית בנויים באופן סדרתי. השאלות עוקבות אחרי התקדמות הטקסט. לכן, אם שאלה 1 עוסקת בפסקה הראשונה, ושאלה 3 בפסקה הרביעית, התשובה לשאלה 2 תסתתר בפסקאות 2 או 3 שבאמצע. זה חוסך חיפוש (Scanning) מיותר לאורך כל הטקסט.",
        tts_text: "Question: In reading comprehension tests, questions often follow the chronological order of the text. If Question 1 is about Paragraph 1, and Question 3 is about Paragraph 4, where will you most likely find the answer to Question 2? Option 1: In Paragraph 5 or 6. Option 2: In Paragraph 2 or 3. Option 3: Back in Paragraph 1. Option 4: In the title of the text."
    },
    {
        topic: "reading_comprehension",
        subTopic: "Reading Strategies (אסטרטגיות קריאה: סריקה, מציאת רעיון מרכזי)",
        question: "When a question asks: <i>'What is the author's tone in the second paragraph?'</i>, what are you looking for?",
        options: [
            "The specific facts and statistics the author presents.",
            "The volume (how loud) the author would speak if reading out loud.",
            "The author's attitude or feeling towards the subject (e.g., critical, enthusiastic, objective, sarcastic).",
            "The grammar rules the author uses."
        ],
        correctAnswer: 2,
        solution: "<b>התשובה הנכונה היא: The author's attitude or feeling towards the subject.</b><br><br><b>הסבר:</b> נימת הכותב (Tone) חושפת את עמדתו. האם הוא אובייקטיבי ומדעי? האם הוא ביקורתי וכועס? האם הוא מתלהב ותומך? אנו מזהים זאת על ידי 'מילות טעם' ושמות תואר שהכותב בוחר (כמו: 'למרבה הצער', 'באופן מדהים', 'כישלון מוחלט').",
        tts_text: "Question: When a question asks: 'What is the author's tone in the second paragraph?', what are you looking for? Option 1: The specific facts and statistics the author presents. Option 2: The volume the author would speak if reading out loud. Option 3: The author's attitude or feeling towards the subject. Option 4: The grammar rules the author uses."
    }
];