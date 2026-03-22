const questionsDB = [
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה הבאה הכוללת פתיחת סוגריים כפולה וכינוס:\n\\( 6(x + 2) - 4(2x - 3) = 10 \\)",
        options: ["7", "4", "2", "14"],
        correctAnswer: 0,
        hint: "היזהרו מהסימן לפני הסוגריים השניים. הכפלה של מספר שלילי במספר שלילי נותנת תוצאה חיובית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת הסוגריים הראשונים בעזרת חוק הפילוג. נכפול שש באיקס ושש בשתיים.", math_expression: "6x + 12" },
            { verbal_explanation: "שלב 2: פתיחת הסוגריים השניים. נכפול מינוס ארבע בשני איקס ומינוס ארבע במינוס שלוש.", math_expression: "-8x + 12" },
            { verbal_explanation: "שלב 3: רישום המשוואה המלאה לאחר פתיחת כל הסוגריים.", math_expression: "6x + 12 - 8x + 12 = 10" },
            { verbal_explanation: "שלב 4: כינוס איברים דומים באגף שמאל. איקסים לחוד ומספרים לחוד.", math_expression: "-2x + 24 = 10" },
            { verbal_explanation: "שלב 5: העברת המספר עשרים וארבע לאגף ימין בשינוי סימן למינוס.", math_expression: "-2x = 10 - 24" },
            { verbal_explanation: "שלב 6: חישוב ההפרש באגף ימין.", math_expression: "-2x = -14" },
            { verbal_explanation: "שלב 7: חלוקת שני האגפים במקדם של הנעלם.", math_expression: "x = -14 : -2 \\Rightarrow x = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את משוואת השברים הבאה:\n\\( \\dfrac{3x - 5}{2} - \\dfrac{x + 1}{4} = 3 \\)",
        options: ["4.6", "5", "4", "2.3"],
        correctAnswer: 0,
        hint: "המכנה המשותף הקטן ביותר הוא ארבע. אל תשכחו לכפול גם את המספר שלוש שבאגף ימין בארבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת המכנה המשותף שהוא ארבע והרחבת המונים בהתאם.", math_expression: "2(3x - 5) - 1(x + 1) = 3x4" },
            { verbal_explanation: "שלב 2: ביצוע הכפל באגף ימין.", math_expression: "2(3x - 5) - 1(x + 1) = 12" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים במונים. שימו לב שהמינוס משנה את כל הסימנים במונה השני.", math_expression: "6x - 10 - x - 1 = 12" },
            { verbal_explanation: "שלב 4: כינוס איברים דומים באגף שמאל.", math_expression: "5x - 11 = 12" },
            { verbal_explanation: "שלב 5: העברת המספר אחת עשרה לאגף ימין בסימן פלוס.", math_expression: "5x = 12 + 11" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה במקדם חמש למציאת הערך הסופי.", math_expression: "x = 23 : 5 \\Rightarrow x = 4.6" }
        ],
        final_answer: "4.6"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה הבאה המכילה נעלם בשני האגפים:\n\\( 4(2x - 1) = 2(x + 7) \\)",
        options: ["3", "4", "2", "5"],
        correctAnswer: 0,
        hint: "פתחו קודם את הסוגריים בכל אגף בנפרד לפני שתעבירו אגפים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת אגף שמאל בעזרת חוק הפילוג.", math_expression: "8x - 4" },
            { verbal_explanation: "שלב 2: פתיחת אגף ימין בעזרת חוק הפילוג.", math_expression: "2x + 14" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה החדשה לאחר הפתיחה.", math_expression: "8x - 4 = 2x + 14" },
            { verbal_explanation: "שלב 4: העברת המשתנה שני איקס שמאלה בחיסור והעברת המספר ארבע ימינה בחיבור.", math_expression: "8x - 2x = 14 + 4" },
            { verbal_explanation: "שלב 5: כינוס איברים דומים בכל אגף.", math_expression: "6x = 18" },
            { verbal_explanation: "שלב 6: חלוקה במקדם שש כדי לבודד את הנעלם.", math_expression: "x = 18 : 6 \\Rightarrow x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה בעלת השברים הבאה:\n\\( \\dfrac{2x - 1}{3} - \\dfrac{x + 2}{4} = \\dfrac{x}{6} \\)",
        options: ["10", "4", "אין פתרון", "5"],
        correctAnswer: 0,
        hint: "המכנה המשותף לכל המספרים הוא שתים עשרה. הרחיבו כל שבר לפי הכפולה המתאימה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המכנה המשותף שהוא שתים עשרה.", math_expression: "12" },
            { verbal_explanation: "שלב 2: הכפלת המונה הראשון בארבע, השני בשלוש ואגף ימין בשתיים.", math_expression: "4(2x - 1) - 3(x + 2) = 2x" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים בעזרת חוק הפילוג. שימו לב למינוס לפני השלוש.", math_expression: "8x - 4 - 3x - 6 = 2x" },
            { verbal_explanation: "שלב 4: כינוס איברים דומים באגף שמאל.", math_expression: "5x - 10 = 2x" },
            { verbal_explanation: "שלב 5: העברת שני איקס לשמאל והעברת עשר לימין.", math_expression: "5x - 2x = 10" },
            { verbal_explanation: "שלב 6: כינוס סופי וחלוקה במקדם שלוש.", math_expression: "3x = 10 \\Rightarrow x = 10 : 3" }
        ],
        final_answer: "10 : 3"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה:\n\\( 15 - 3(x - 4) = 2x + 7 \\)",
        options: ["4", "5", "3", "2"],
        correctAnswer: 0,
        hint: "הקפידו על פתיחת הסוגריים בצד שמאל. מכפלת שני מספרים שליליים חיובית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים בעזרת חוק הפילוג.", math_expression: "15 - 3x + 12 = 2x + 7" },
            { verbal_explanation: "שלב 2: כינוס המספרים החופשיים באגף שמאל.", math_expression: "27 - 3x = 2x + 7" },
            { verbal_explanation: "שלב 3: העברת שלושה איקס לאגף ימין בחיבור.", math_expression: "27 = 2x + 3x + 7" },
            { verbal_explanation: "שלב 4: כינוס אגף ימין והעברת המספר שבע שמאלה בחיסור.", math_expression: "27 - 7 = 5x" },
            { verbal_explanation: "שלב 5: חישוב ההפרש.", math_expression: "20 = 5x" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה במקדם חמש.", math_expression: "x = 20 : 5 \\Rightarrow x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את משוואת השברים:\n\\( \\dfrac{x}{2} + \\dfrac{x}{4} + \\dfrac{x}{8} = 7 \\)",
        options: ["8", "4", "16", "14"],
        correctAnswer: 0,
        hint: "המכנה המשותף לכל השברים הוא שמונה. הכפילו את כל איברי המשוואה במספר זה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת כל המשוואה במכנה המשותף שמונה.", math_expression: "4x + 2x + 1x = 7x8" },
            { verbal_explanation: "שלב 2: ביצוע פעולת הכפל באגף ימין.", math_expression: "4x + 2x + x = 56" },
            { verbal_explanation: "שלב 3: חיבור כל המקדמים של הנעלם באגף שמאל.", math_expression: "7x = 56" },
            { verbal_explanation: "שלב 4: חלוקת שני האגפים במקדם שבע.", math_expression: "x = 56 : 7" },
            { verbal_explanation: "שלב 5: מציאת התוצאה הסופית.", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה הבאה שבה הנעלם נמצא במכנה:\n\\( \\dfrac{10}{x} + 2 = 7 \\)",
        options: ["2", "5", "10", "1"],
        correctAnswer: 0,
        hint: "הדרך הפשוטה ביותר היא קודם כל לבודד את השבר על ידי העברת המספר שתיים לאגף ימין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר שתיים לאגף ימין בסימן חיסור.", math_expression: "\\dfrac{10}{x} = 7 - 2" },
            { verbal_explanation: "שלב 2: חישוב ההפרש באגף ימין.", math_expression: "\\dfrac{10}{x} = 5" },
            { verbal_explanation: "שלב 3: הכפלת שני האגפים בנעלם איקס כדי לבטל את השבר.", math_expression: "10 = 5x" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה במקדם חמש.", math_expression: "x = 10 : 5" },
            { verbal_explanation: "שלב 5: מציאת ערכו של הנעלם.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "חקרו את פתרון המשוואה הבאה:\n\\( 3x + 12 = 3(x + 4) \\)",
        options: ["אינסוף פתרונות", "אין פתרון", "0", "4"],
        correctAnswer: 0,
        hint: "פתחו סוגריים ובדקו האם האגפים שווים זה לזה לחלוטין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים באגף ימין בעזרת חוק הפילוג.", math_expression: "3x + 12 = 3x + 12" },
            { verbal_explanation: "שלב 2: העברת כל האיקסים לאגף שמאל וכל המספרים לאגף ימין.", math_expression: "3x - 3x = 12 - 12" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים בכל צד.", math_expression: "0 = 0" },
            { verbal_explanation: "שלב 4: קבלת זהות מתמטית שבה שני האגפים שווים תמיד.", math_expression: "0 = 0" },
            { verbal_explanation: "שלב 5: המסקנה היא שכל מספר שנציב יקיים את המשוואה ולכן יש אינסוף פתרונות.", math_expression: "0 = 0" }
        ],
        final_answer: "אינסוף פתרונות"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה הבאה:\n\\( 10 - 2(x + 1) = 4 \\)",
        options: ["2", "4", "1", "3"],
        correctAnswer: 0,
        hint: "שימו לב שהכופל לפני הסוגריים הוא שלילי, ולכן הוא ישנה את הסימנים של האיברים בפנים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים בעזרת חוק הפילוג תוך הקפדה על סימן המינוס.", math_expression: "10 - 2x - 2 = 4" },
            { verbal_explanation: "שלב 2: כינוס מספרים חופשיים באגף שמאל. עשר פחות שתיים שווה שמונה.", math_expression: "8 - 2x = 4" },
            { verbal_explanation: "שלב 3: העברת המספר שמונה לאגף ימין בשינוי סימן לחיסור.", math_expression: "-2x = 4 - 8" },
            { verbal_explanation: "שלב 4: חישוב ההפרש באגף ימין.", math_expression: "-2x = -4" },
            { verbal_explanation: "שלב 5: חלוקת שני האגפים במינוס שתיים.", math_expression: "x = -4 : -2" },
            { verbal_explanation: "שלב 6: מציאת התוצאה הסופית.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "חקרו את פתרון המשוואה הבאה:\n\\( 2x + 7 = 2x + 10 \\)",
        options: ["אין פתרון", "כל מספר", "0", "3"],
        correctAnswer: 0,
        hint: "נסו לרכז את כל המשתנים באגף אחד ולראות מה מתקבל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המשתנה שני איקס לאגף שמאל בסימן חיסור.", math_expression: "2x - 2x + 7 = 10" },
            { verbal_explanation: "שלב 2: העברת המספר שבע לאגף ימין בסימן חיסור.", math_expression: "2x - 2x = 10 - 7" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים בכל אגף.", math_expression: "0 = 3" },
            { verbal_explanation: "שלב 4: התקבל פסוק שקר מתמטי, אפס אינו שווה לשלוש.", math_expression: "0 = 3" },
            { verbal_explanation: "שלב 5: המסקנה היא שאין אף מספר שיכול לקיים את המשוואה ולכן אין פתרון.", math_expression: "0 = 3" }
        ],
        final_answer: "אין פתרון"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו משוואה הכוללת שברים אלגבריים ואיבר חופשי:\n\\( \\dfrac{x+1}{2} = \\dfrac{x-1}{3} + 1 \\)",
        options: ["1", "3", "5", "0"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא שש. הקפידו להכפיל בו גם את המספר השלם באגף ימין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת כל המשוואה במכנה המשותף שש.", math_expression: "3(x + 1) = 2(x - 1) + 1x6" },
            { verbal_explanation: "שלב 2: ביצוע הכפל עבור המספר השלם.", math_expression: "3(x + 1) = 2(x - 1) + 6" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים בשני האגפים.", math_expression: "3x + 3 = 2x - 2 + 6" },
            { verbal_explanation: "שלב 4: כינוס המספרים באגף ימין.", math_expression: "3x + 3 = 2x + 4" },
            { verbal_explanation: "שלב 5: העברת המשתנה שני איקס לשמאל בחיסור והמספר שלוש לימין בחיסור.", math_expression: "3x - 2x = 4 - 3" },
            { verbal_explanation: "שלב 6: סיכום וקבלת התוצאה הסופית.", math_expression: "x = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "equations_172",
        subTopic: "משוואה בנעלם אחד (עם סוגריים ושברים)",
        question_text: "פתרו את המשוואה המכילה שבר עשרוני:\n\\( 0.25x + 3 = 10 \\)",
        options: ["28", "14", "40", "20"],
        correctAnswer: 0,
        hint: "העבירו את המספר החופשי לאגף ימין, ולאחר מכן חלקו במקדם. חלוקה ברבע שקולה לכפל בארבע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר שלוש לאגף ימין בסימן חיסור.", math_expression: "0.25x = 10 - 3" },
            { verbal_explanation: "שלב 2: חישוב ההפרש.", math_expression: "0.25x = 7" },
            { verbal_explanation: "שלב 3: חלוקת שני האגפים במקדם עשרוני של רבע.", math_expression: "x = 7 : 0.25" },
            { verbal_explanation: "שלב 4: ביצוע החישוב למציאת התוצאה.", math_expression: "x = 28" },
            { verbal_explanation: "שלב 5: סיום התרגיל.", math_expression: "x = 28" }
        ],
        final_answer: "28"
    },// ==========================================
    // תת נושא 2: פתרון משוואה ריבועית (נוסחת שורשים וטרינום) - 12 שאלות
    // ==========================================

    // שאלה מספר 13
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית הבאה על ידי פירוק לטרינום:\n\\( x^{2} - 13x + 42 = 0 \\)",
        options: ["x=6, x=7", "x=-6, x=-7", "x=1, x=42", "אין פתרון"],
        correctAnswer: 0,
        hint: "חפשו שני מספרים שמכפלתם היא ארבעים ושתיים וסכומם הוא מינוס שלוש עשרה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדמי המשוואה הריבועית המסודרת.", math_expression: "a=1, b=-13, c=42" },
            { verbal_explanation: "שלב 2: מציאת שני מספרים שכפלם ארבעים ושתיים וסכומם מינוס שלוש עשרה.", math_expression: "-6, -7" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה בצורה של מכפלת גורמים.", math_expression: "(x - 6)(x - 7) = 0" },
            { verbal_explanation: "שלב 4: כדי שהמכפלה תתאפס, נשווה את הגורם הראשון לאפס ונפתור.", math_expression: "x - 6 = 0 \\Rightarrow x = 6" },
            { verbal_explanation: "שלב 5: נשווה גם את הגורם השני לאפס ונפתור.", math_expression: "x - 7 = 0 \\Rightarrow x = 7" },
            { verbal_explanation: "שלב 6: רישום הפתרונות הסופיים של המשוואה.", math_expression: "x = 6, x = 7" }
        ],
        final_answer: "x=6, x=7"
    },

    // שאלה מספר 14
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הבאה המצריכה פישוט ראשוני:\n\\( 2x^{2} + 4x - 6 = 0 \\)",
        options: ["x=1, x=-3", "x=-1, x=3", "x=1, x=3", "x=0"],
        correctAnswer: 0,
        hint: "לפני שתתחילו לפתור, מומלץ לחלק את כל המשוואה בשתיים כדי להקטין את המקדמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת כל איברי המשוואה בשתיים לפשטות החישוב.", math_expression: "x^{2} + 2x - 3 = 0" },
            { verbal_explanation: "שלב 2: חיפוש שני מספרים לטרינום שכפלם מינוס שלוש וסכומם פלוס שתיים.", math_expression: "3, -1" },
            { verbal_explanation: "שלב 3: רישום הפירוק לגורמים של הטרינום.", math_expression: "(x + 3)(x - 1) = 0" },
            { verbal_explanation: "שלב 4: השוואת הגורם הראשון לאפס וחילוץ הפתרון.", math_expression: "x + 3 = 0 \\Rightarrow x = -3" },
            { verbal_explanation: "שלב 5: השוואת הגורם השני לאפס וחילוץ הפתרון.", math_expression: "x - 1 = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "שלב 6: רישום שני השורשים של המשוואה.", math_expression: "x = 1, x = -3" }
        ],
        final_answer: "x=1, x=-3"
    },

    // שאלה מספר 15
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית המהווה כפל מקוצר:\n\\( x^{2} + 10x + 25 = 0 \\)",
        options: ["x=-5", "x=5", "x=0", "אין פתרון"],
        correctAnswer: 0,
        hint: "נסו לזהות תבנית של כפל מקוצר של ריבוע סכום, מה שמצביע על פתרון יחיד למשוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תבנית כפל מקוצר במשוואה הריבועית.", math_expression: "x^{2} + 2(5)x + 25 = 0" },
            { verbal_explanation: "שלב 2: כתיבת המשוואה כריבוע של סוגריים.", math_expression: "(x + 5)^{2} = 0" },
            { verbal_explanation: "שלב 3: הוצאת שורש משני האגפים. מאחר והאגף הימני הוא אפס, יש פתרון יחיד.", math_expression: "x + 5 = 0" },
            { verbal_explanation: "שלב 4: העברת המספר חמש לאגף ימין בשינוי סימן.", math_expression: "x = -5" },
            { verbal_explanation: "שלב 5: קבלת פתרון יחיד למשוואה הריבועית.", math_expression: "x = -5" }
        ],
        final_answer: "x=-5"
    },

    // שאלה מספר 16
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "חקרו את פתרון המשוואה הריבועית הבאה:\n\\( x^{2} + 2x + 10 = 0 \\)",
        options: ["אין פתרון ממשי", "x=-1", "x=2", "x=0"],
        correctAnswer: 0,
        hint: "חשבו את הדיסקרימיננטה (הביטוי שמתחת לשורש בנוסחה). אם התוצאה שלילית, למשוואה אין פתרון ממשי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדמי המשוואה.", math_expression: "a=1, b=2, c=10" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הדיסקרימיננטה (דלתא).", math_expression: "2^{2} - 4(1)(10)" },
            { verbal_explanation: "שלב 3: ביצוע פעולות החשבון - חזקה וכפל.", math_expression: "4 - 40" },
            { verbal_explanation: "שלב 4: חישוב התוצאה הסופית של דלתא.", math_expression: "-36" },
            { verbal_explanation: "שלב 5: מאחר והמספר קטן מאפס, לא ניתן למצוא לו שורש ממשי.", math_expression: "-36 < 0" },
            { verbal_explanation: "שלב 6: המסקנה היא שאין פתרונות ממשיים למשוואה הריבועית.", math_expression: "אין פתרון ממשי" }
        ],
        final_answer: "אין פתרון ממשי"
    },

    // שאלה מספר 17
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הבאה:\n\\( x^{2} - 7x + 10 = 0 \\)",
        options: ["x=2, x=5", "x=-2, x=-5", "x=1, x=10", "x=0"],
        correctAnswer: 0,
        hint: "מכפלת שני מספרים חיובית אך סכומם שלילי, כלומר שני המספרים בטרינום הם שליליים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חיפוש מספרים שמכפלתם עשר וסכומם מינוס שבע.", math_expression: "-2, -5" },
            { verbal_explanation: "שלב 2: כתיבת הפירוק של הטרינום.", math_expression: "(x - 2)(x - 5) = 0" },
            { verbal_explanation: "שלב 3: השוואת כל סוגריים לאפס בנפרד.", math_expression: "x - 2 = 0, x - 5 = 0" },
            { verbal_explanation: "שלב 4: חילוץ התוצאה הראשונה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: חילוץ התוצאה השנייה.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 6: רישום הפתרון המלא.", math_expression: "x = 2, x = 5" }
        ],
        final_answer: "x=2, x=5"
    },

    // שאלה מספר 18
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הדורשת סידור אגפים תחילה:\n\\( (x+1)(x-2) = 4 \\)",
        options: ["x=3, x=-2", "x=2, x=-1", "x=4, x=0", "אין פתרון"],
        correctAnswer: 0,
        hint: "קודם פתחו את הסוגריים באגף שמאל והעבירו את הארבע שמאלה כדי ליצור משוואה ששווה לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת הסוגריים בעזרת חוק הפילוג המורחב.", math_expression: "x^{2} - 2x + 1x - 2 = 4" },
            { verbal_explanation: "שלב 2: כינוס איברים דומים באגף שמאל.", math_expression: "x^{2} - x - 2 = 4" },
            { verbal_explanation: "שלב 3: העברת המספר ארבע לאגף שמאל בסימן חיסור.", math_expression: "x^{2} - x - 2 - 4 = 0" },
            { verbal_explanation: "שלב 4: כינוס סופי למשוואה הריבועית הסטנדרטית.", math_expression: "x^{2} - x - 6 = 0" },
            { verbal_explanation: "שלב 5: פירוק לטרינום בעזרת המספרים מינוס שלוש ושתיים.", math_expression: "(x - 3)(x + 2) = 0" },
            { verbal_explanation: "שלב 6: מציאת שני הפתרונות של המשוואה.", math_expression: "x = 3, x = -2" }
        ],
        final_answer: "x=3, x=-2"
    },

    // שאלה מספר 19
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית שבה מקדם א בריבוע שלילי:\n\\( -x^{2} + 5x - 4 = 0 \\)",
        options: ["x=1, x=4", "x=-1, x=-4", "x=0", "x=1"],
        correctAnswer: 0,
        hint: "כדי להקל על הפתרון, כפלו את כל המשוואה במינוס אחד כדי להפוך את המקדם של איקס בריבוע לחיובי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת שני אגפי המשוואה במינוס אחד.", math_expression: "x^{2} - 5x + 4 = 0" },
            { verbal_explanation: "שלב 2: מציאת מספרים לטרינום שכפלם ארבע וסכומם מינוס חמש.", math_expression: "-1, -4" },
            { verbal_explanation: "שלב 3: רישום המשוואה כהכפלה של גורמים.", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 4: השוואת הגורם הראשון לאפס.", math_expression: "x - 1 = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "שלב 5: השוואת הגורם השני לאפס.", math_expression: "x - 4 = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 6: רישום פתרון המשוואה.", math_expression: "x = 1, x = 4" }
        ],
        final_answer: "x=1, x=4"
    },

    // שאלה מספר 20
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו משוואה ריבועית עם סידור אגפים:\n\\( x^{2} + 3x = 10 \\)",
        options: ["x=2, x=-5", "x=-2, x=5", "x=1, x=10", "x=0"],
        correctAnswer: 0,
        hint: "העבירו את העשר לאגף שמאל כדי להביא את המשוואה לצורה המסודרת ששווה לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר עשר לאגף שמאל בסימן חיסור.", math_expression: "x^{2} + 3x - 10 = 0" },
            { verbal_explanation: "שלב 2: מציאת מספרים לטרינום שכפלם מינוס עשר וסכומם שלוש.", math_expression: "5, -2" },
            { verbal_explanation: "שלב 3: כתיבת צורת הטרינום.", math_expression: "(x + 5)(x - 2) = 0" },
            { verbal_explanation: "שלב 4: השוואת הסוגריים הראשונים לאפס.", math_expression: "x + 5 = 0 \\Rightarrow x = -5" },
            { verbal_explanation: "שלב 5: השוואת הסוגריים השניים לאפס.", math_expression: "x - 2 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 6: סיום התרגיל והצגת הפתרונות.", math_expression: "x = 2, x = -5" }
        ],
        final_answer: "x=2, x=-5"
    },

    // שאלה מספר 21
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית:\n\\( 3x^{2} - 6x + 3 = 0 \\)",
        options: ["x=1", "x=-1", "x=3", "אין פתרון"],
        correctAnswer: 0,
        hint: "חלקו תחילה את המשוואה במקדם שלוש, וגלו שמדובר במקרה מיוחד של פתרון יחיד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת כל המשוואה בשלוש.", math_expression: "x^{2} - 2x + 1 = 0" },
            { verbal_explanation: "שלב 2: זיהוי תבנית של כפל מקוצר או טרינום עם מספרים זהים.", math_expression: "(x - 1)(x - 1) = 0" },
            { verbal_explanation: "שלב 3: כתיבה כריבוע סכום.", math_expression: "(x - 1)^{2} = 0" },
            { verbal_explanation: "שלב 4: השוואת הגורם היחיד לאפס.", math_expression: "x - 1 = 0" },
            { verbal_explanation: "שלב 5: מציאת הערך היחיד של איקס.", math_expression: "x = 1" }
        ],
        final_answer: "x=1"
    },

    // שאלה מספר 22
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה המצריכה סידור אגפים:\n\\( x^{2} - 2x = 3 \\)",
        options: ["x=3, x=-1", "x=-3, x=1", "x=0", "x=2"],
        correctAnswer: 0,
        hint: "העבירו את השלוש לאגף שמאל והשתמשו בשיטת הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת שלוש שמאלה כדי להשוות את המשוואה לאפס.", math_expression: "x^{2} - 2x - 3 = 0" },
            { verbal_explanation: "שלב 2: מציאת מספרים שמכפלתם מינוס שלוש וסכומם מינוס שתיים.", math_expression: "-3, 1" },
            { verbal_explanation: "שלב 3: פירוק לגורמים על ידי כתיבת הטרינום.", math_expression: "(x - 3)(x + 1) = 0" },
            { verbal_explanation: "שלב 4: חילוץ התשובה מתוך הגורם הראשון.", math_expression: "x - 3 = 0 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 5: חילוץ התשובה מתוך הגורם השני.", math_expression: "x + 1 = 0 \\Rightarrow x = -1" },
            { verbal_explanation: "שלב 6: הפתרון המלא.", math_expression: "x = 3, x = -1" }
        ],
        final_answer: "x=3, x=-1"
    },

    // שאלה מספר 23
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית:\n\\( 2x^{2} - 10x + 12 = 0 \\)",
        options: ["x=2, x=3", "x=4, x=6", "x=1, x=6", "x=0"],
        correctAnswer: 0,
        hint: "חלקו את המשוואה בשתיים כדי להגיע למשוואה פשוטה יותר לפתרון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת כל איברי המשוואה בשתיים.", math_expression: "x^{2} - 5x + 6 = 0" },
            { verbal_explanation: "שלב 2: שימוש בטרינום למציאת מספרים.", math_expression: "-2, -3" },
            { verbal_explanation: "שלב 3: כתיבה כמכפלת סוגריים.", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 4: מציאת השורש הראשון.", math_expression: "x - 2 = 0 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 5: מציאת השורש השני.", math_expression: "x - 3 = 0 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 6: הפתרונות הם שניים ושלוש.", math_expression: "x = 2, x = 3" }
        ],
        final_answer: "x=2, x=3"
    },

    // שאלה מספר 24
    {
        topic: "equations_172",
        subTopic: "פתרון משוואה ריבועית (נוסחת שורשים וטרינום)",
        question_text: "פתרו את המשוואה הריבועית הבאה:\n\\( x^{2} + 8x + 15 = 0 \\)",
        options: ["x=-3, x=-5", "x=3, x=5", "x=-1, x=-15", "x=0"],
        correctAnswer: 0,
        hint: "מצאו שני מספרים חיוביים שמכפלתם חמש עשרה וסכומם שמונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים א, ב, ג של המשוואה.", math_expression: "a=1, b=8, c=15" },
            { verbal_explanation: "שלב 2: פירוק בעזרת טרינום עם המספרים שלוש וחמש.", math_expression: "(x + 3)(x + 5) = 0" },
            { verbal_explanation: "שלב 3: בדיקת איפוס הגורם הראשון.", math_expression: "x + 3 = 0 \\Rightarrow x = -3" },
            { verbal_explanation: "שלב 4: בדיקת איפוס הגורם השני.", math_expression: "x + 5 = 0 \\Rightarrow x = -5" },
            { verbal_explanation: "שלב 5: קבלת קבוצת הפתרון הסופית.", math_expression: "x = -3, x = -5" }
        ],
        final_answer: "x=-3, x=-5"
    },

    // ==========================================
    // תת נושא 3: משוואות חסרות b או c - 12 שאלות
    // ==========================================

    // שאלה מספר 25
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הריבועית החסרה הבאה:\n\\( 5x^{2} - 45 = 0 \\)",
        options: ["x=3, x=-3", "x=9, x=-9", "x=3", "אין פתרון"],
        correctAnswer: 0,
        hint: "במשוואה מסוג זה, בודדו את האיבר הריבועי, חלקו במקדם וחשבו אילו שני מספרים ריבועם שווה לתוצאה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר החופשי ארבעים וחמש לאגף ימין בשינוי סימן.", math_expression: "5x^{2} = 45" },
            { verbal_explanation: "שלב 2: חלוקת שני אגפי המשוואה במקדם חמש.", math_expression: "x^{2} = 45 : 5" },
            { verbal_explanation: "שלב 3: קבלת המשוואה לאחר החלוקה.", math_expression: "x^{2} = 9" },
            { verbal_explanation: "שלב 4: חשיבה אילו מספרים כשנעלה אותם בריבוע יתנו תשע.", math_expression: "x = 3, x = -3" },
            { verbal_explanation: "שלב 5: רישום שתי התוצאות (חיובית ושלילית).", math_expression: "x = 3, x = -3" }
        ],
        final_answer: "x=3, x=-3"
    },

    // שאלה מספר 26
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה שבה חסר האיבר החופשי:\n\\( 6x^{2} + 12x = 0 \\)",
        options: ["x=0, x=-2", "x=0, x=2", "x=2", "x=6"],
        correctAnswer: 0,
        hint: "כאשר חסר האיבר החופשי, ניתן להוציא את הנעלם איקס כגורם משותף מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי גורם משותף מקסימלי לשני האיברים שהוא שישה איקס.", math_expression: "6x(x + 2) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם הראשון שנמצא מחוץ לסוגריים לאפס.", math_expression: "6x = 0" },
            { verbal_explanation: "שלב 3: חלוקה בשש למציאת הפתרון הראשון.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 4: השוואת הביטוי שבתוך הסוגריים לאפס.", math_expression: "x + 2 = 0" },
            { verbal_explanation: "שלב 5: העברת השתיים אגף למציאת הפתרון השני.", math_expression: "x = -2" },
            { verbal_explanation: "שלב 6: רישום קבוצת הפתרונות של המשוואה.", math_expression: "x = 0, x = -2" }
        ],
        final_answer: "x=0, x=-2"
    },

    // שאלה מספר 27
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הבאה:\n\\( x^{2} + 16 = 0 \\)",
        options: ["אין פתרון ממשי", "x=4, x=-4", "x=4", "x=0"],
        correctAnswer: 0,
        hint: "העבירו את המספר שש עשרה לאגף ימין וחשבו האם קיים מספר שריבועו הוא מספר שלילי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר שש עשרה לאגף ימין בשינוי סימן לחיסור.", math_expression: "x^{2} = -16" },
            { verbal_explanation: "שלב 2: ניסיון למצוא מספר שריבועו שלילי.", math_expression: "x^{2} = -16" },
            { verbal_explanation: "שלב 3: הבנה מתמטית שאין מספר ממשי שריבועו הוא מספר שלילי.", math_expression: "-16 < 0" },
            { verbal_explanation: "שלב 4: רישום המסקנה כי לא קיים פתרון למשוואה.", math_expression: "אין מספר כזה" },
            { verbal_explanation: "שלב 5: קביעת התוצאה הסופית של התרגיל.", math_expression: "אין פתרון ממשי" }
        ],
        final_answer: "אין פתרון ממשי"
    },

    // שאלה מספר 28
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הבאה:\n\\( -2x^{2} + 50 = 0 \\)",
        options: ["x=5, x=-5", "x=25", "x=5", "אין פתרון"],
        correctAnswer: 0,
        hint: "העבירו את המספר החמישים אגף וחלקו במינוס שתיים לפני מציאת המספרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר חמישים לאגף ימין בסימן חיסור.", math_expression: "-2x^{2} = -50" },
            { verbal_explanation: "שלב 2: חלוקת שני האגפים במקדם מינוס שתיים.", math_expression: "x^{2} = -50 : -2" },
            { verbal_explanation: "שלב 3: קבלת התוצאה החיובית עשרים וחמש.", math_expression: "x^{2} = 25" },
            { verbal_explanation: "שלב 4: מציאת מספרים שריבועם עשרים וחמש.", math_expression: "x = 5, x = -5" },
            { verbal_explanation: "שלב 5: רישום שתי התוצאות האפשריות.", math_expression: "x = 5, x = -5" }
        ],
        final_answer: "x=5, x=-5"
    },

    // שאלה מספר 29
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה החסרה:\n\\( 4x^{2} - 100x = 0 \\)",
        options: ["x=0, x=25", "x=0, x=-25", "x=25", "x=4"],
        correctAnswer: 0,
        hint: "הוציאו את הגורם המשותף הגדול ביותר האפשרי משני האיברים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת גורם משותף של ארבעה איקס.", math_expression: "4x(x - 25) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם החיצוני לאפס.", math_expression: "4x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 3: השוואת הביטוי בסוגריים לאפס.", math_expression: "x - 25 = 0" },
            { verbal_explanation: "שלב 4: העברת עשרים וחמש לאגף ימין.", math_expression: "x = 25" },
            { verbal_explanation: "שלב 5: סיכום שני הפתרונות.", math_expression: "x = 0, x = 25" }
        ],
        final_answer: "x=0, x=25"
    },

    // שאלה מספר 30
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הריבועית הפשוטה:\n\\( x^{2} = 100 \\)",
        options: ["x=10, x=-10", "10", "50", "אין פתרון"],
        correctAnswer: 0,
        hint: "חשבו אילו שני מספרים יעניקו מאה כשתעלו אותם בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהמשוואה כבר מסודרת ומוכנה לפתרון.", math_expression: "x^{2} = 100" },
            { verbal_explanation: "שלב 2: חשיבה אילו מספרים מקיימים את התנאי.", math_expression: "x = 10, x = -10" },
            { verbal_explanation: "שלב 3: מציאת השורש החיובי.", math_expression: "x = 10" },
            { verbal_explanation: "שלב 4: מציאת השורש השלילי.", math_expression: "x = -10" },
            { verbal_explanation: "שלב 5: איחוד הפתרונות לקבוצת פתרון אחת.", math_expression: "x = 10, x = -10" }
        ],
        final_answer: "x=10, x=-10"
    },

    // שאלה מספר 31
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הבאה:\n\\( 2x^{2} - 32 = 0 \\)",
        options: ["x=4, x=-4", "x=16", "x=8", "0"],
        correctAnswer: 0,
        hint: "העבירו את המספר החופשי לאגף ימין וחלקו את המשוואה בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת שלושים ושתיים לאגף ימין.", math_expression: "2x^{2} = 32" },
            { verbal_explanation: "שלב 2: חלוקת שני אגפי המשוואה בשתיים.", math_expression: "x^{2} = 16" },
            { verbal_explanation: "שלב 3: מציאת מספרים שריבועם שש עשרה.", math_expression: "x = 4, x = -4" },
            { verbal_explanation: "שלב 4: הצגת התשובות בנפרד.", math_expression: "x = 4, x = -4" },
            { verbal_explanation: "שלב 5: סיום התרגיל.", math_expression: "x = 4, x = -4" }
        ],
        final_answer: "x=4, x=-4"
    },

    // שאלה מספר 32
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה החסרה הבאה:\n\\( x^{2} - x = 0 \\)",
        options: ["x=0, x=1", "x=0, x=-1", "x=1", "0"],
        correctAnswer: 0,
        hint: "הוציאו את הנעלם איקס כגורם משותף מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת איקס כגורם משותף משני האיברים.", math_expression: "x(x - 1) = 0" },
            { verbal_explanation: "שלב 2: השוואת איקס לאפס.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 3: השוואת הביטוי איקס פחות אחד לאפס.", math_expression: "x - 1 = 0" },
            { verbal_explanation: "שלב 4: העברת אחד לאגף ימין בחיבור.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 5: סיכום כל השורשים.", math_expression: "x = 0, x = 1" }
        ],
        final_answer: "x=0, x=1"
    },

    // שאלה מספר 33
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה:\n\\( 7x^{2} = 0 \\)",
        options: ["0", "7", "אין פתרון", "1"],
        correctAnswer: 0,
        hint: "מה קורה כאשר מחלקים אפס בכל מספר אחר?",
        solution_steps: [
            { verbal_explanation: "שלב 1: בידוד איקס בריבוע על ידי חלוקת שני האגפים בשבע.", math_expression: "x^{2} = 0 : 7" },
            { verbal_explanation: "שלב 2: חישוב תוצאת החלוקה.", math_expression: "x^{2} = 0" },
            { verbal_explanation: "שלב 3: מציאת מספר שריבועו שווה לאפס.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 4: התוצאה היא מספר יחיד שאינו חיובי ואינו שלילי.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 5: קביעת הפתרון הסופי של המשוואה.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 34
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה הריבועית הבאה הנתונה כמכפלה:\n\\( (x-5)(x+5) = 0 \\)",
        options: ["x=5, x=-5", "x=25", "0", "אין פתרון"],
        correctAnswer: 0,
        hint: "אין צורך לפתוח סוגריים. כשיש מכפלה ששווה לאפס, השוו כל אחד מהגורמים לאפס בנפרד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי תבנית של כפל סוגריים המאופסת.", math_expression: "(x - 5)(x + 5) = 0" },
            { verbal_explanation: "שלב 2: השוואת הסוגריים הראשונים לאפס.", math_expression: "x - 5 = 0" },
            { verbal_explanation: "שלב 3: העברת חמש לאגף ימין למציאת הפתרון הראשון.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 4: השוואת הסוגריים השניים לאפס.", math_expression: "x + 5 = 0" },
            { verbal_explanation: "שלב 5: העברת חמש לאגף ימין למציאת הפתרון השני.", math_expression: "x = -5" },
            { verbal_explanation: "שלב 6: סיכום תוצאות התרגיל.", math_expression: "x = 5, x = -5" }
        ],
        final_answer: "x=5, x=-5"
    },

    // שאלה מספר 35
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו משוואה ריבועית הכוללת שבר:\n\\( \\dfrac{x^{2}}{3} = 27 \\)",
        options: ["x=9, x=-9", "x=3, x=-3", "x=81", "0"],
        correctAnswer: 0,
        hint: "הכפילו תחילה את שני אגפי המשוואה בשלוש כדי לבטל את השבר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכפלת שני אגפי המשוואה בשלוש.", math_expression: "x^{2} = 27(3)" },
            { verbal_explanation: "שלב 2: ביצוע פעולת הכפל באגף ימין.", math_expression: "x^{2} = 81" },
            { verbal_explanation: "שלב 3: חיפוש מספרים שריבועיהם שווים לשמונים ואחת.", math_expression: "x^{2} = 81" },
            { verbal_explanation: "שלב 4: מציאת השורש החיובי.", math_expression: "x = 9" },
            { verbal_explanation: "שלב 5: מציאת השורש השלילי.", math_expression: "x = -9" },
            { verbal_explanation: "שלב 6: רישום הפתרון על שני חלקיו.", math_expression: "x = 9, x = -9" }
        ],
        final_answer: "x=9, x=-9"
    },

    // שאלה מספר 36
    {
        topic: "equations_172",
        subTopic: "משוואות חסרות b או c",
        question_text: "פתרו את המשוואה:\n\\( x^{2} + 10x = 0 \\)",
        options: ["x=0, x=-10", "x=0, x=10", "-10", "0"],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף מחוץ לסוגריים. זכרו שפתרון אחד יהיה אפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הוצאת הנעלם כגורם משותף.", math_expression: "x(x + 10) = 0" },
            { verbal_explanation: "שלב 2: השוואת הגורם החיצוני לאפס לקבלת שורש ראשון.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 3: השוואת הגורם הפנימי לאפס לקבלת שורש שני.", math_expression: "x + 10 = 0" },
            { verbal_explanation: "שלב 4: חילוץ הנעלם מהמשוואה הקטנה.", math_expression: "x = -10" },
            { verbal_explanation: "שלב 5: רישום שני הפתרונות של המשוואה הריבועית.", math_expression: "x = 0, x = -10" }
        ],
        final_answer: "x=0, x=-10"
    }
];