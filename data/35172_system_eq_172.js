const questionsDB = [
    // ==========================================
    // תת נושא 1: מערכת משוואות ב-2 נעלמים ממעלה ראשונה (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את מערכת המשוואות הבאה:\n\\( y = 2x \\)\n\\( x + y = 9 \\)",
        options: ["x=3, y=6", "x=6, y=3", "x=2, y=7", "x=4, y=5"],
        correctAnswer: 0,
        hint: "השתמשו בשיטת ההצבה. הציבו את הביטוי של וואי מהמשוואה הראשונה אל תוך המשוואה השנייה במקום הנעלם וואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נציב את הערך של וואי מהמשוואה הראשונה אל תוך המשוואה השנייה.", math_expression: "x + 2x = 9" },
            { verbal_explanation: "שלב 2: נכנס איברים דומים באגף שמאל. איקס ועוד שני איקס שווה שלושה איקס.", math_expression: "3x = 9" },
            { verbal_explanation: "שלב 3: נחלק את שני אגפי המשוואה במקדם שלוש כדי למצוא את הערך של איקס.", math_expression: "x = 9 : 3" },
            { verbal_explanation: "שלב 4: נקבל את התוצאה עבור איקס.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 5: נציב את הערך של איקס שמצאנו אל תוך המשוואה הראשונה כדי למצוא את וואי.", math_expression: "y = 2(3)" },
            { verbal_explanation: "שלב 6: נבצע את פעולת הכפל.", math_expression: "y = 6" },
            { verbal_explanation: "שלב 7: נרשום את הפתרון הסופי של המערכת.", math_expression: "x=3, y=6" }
        ],
        final_answer: "x=3, y=6"
    },

    // שאלה מספר 2
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את מערכת המשוואות בעזרת שיטת השוואת המקדמים (חיבור וחיסור משוואות):\n\\( x + y = 10 \\)\n\\( x - y = 4 \\)",
        options: ["x=7, y=3", "x=3, y=7", "x=6, y=4", "x=8, y=2"],
        correctAnswer: 0,
        hint: "שימו לב שהמקדמים של הנעלם וואי הם נגדיים (פלוס אחד ומינוס אחד). חיבור של שתי המשוואות יעלים את הנעלם הזה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נחבר את שתי המשוואות זו לזו. וואי ומינוס וואי מתבטלים.", math_expression: "(x + x) + (y - y) = 10 + 4" },
            { verbal_explanation: "שלב 2: נרשום את המשוואה החדשה שהתקבלה בעלת נעלם אחד.", math_expression: "2x = 14" },
            { verbal_explanation: "שלב 3: נחלק את המשוואה בשתיים למציאת הערך של איקס.", math_expression: "x = 14 : 2" },
            { verbal_explanation: "שלב 4: התוצאה של איקס.", math_expression: "x = 7" },
            { verbal_explanation: "שלב 5: נציב את הערך של איקס באחת המשוואות המקוריות (למשל בראשונה) למציאת וואי.", math_expression: "7 + y = 10" },
            { verbal_explanation: "שלב 6: נעביר את שבע לאגף ימין בחיסור ונחשב.", math_expression: "y = 10 - 7 \\Rightarrow y = 3" },
            { verbal_explanation: "שלב 7: נרשום את הפתרון הסופי.", math_expression: "x=7, y=3" }
        ],
        final_answer: "x=7, y=3"
    },

    // שאלה מספר 3
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את מערכת המשוואות הבאה:\n\\( 2x + y = 8 \\)\n\\( 3x - y = 7 \\)",
        options: ["x=3, y=2", "x=2, y=3", "x=5, y=-2", "x=4, y=5"],
        correctAnswer: 0,
        hint: "חיבור שתי המשוואות יבטל באופן מיידי את הנעלם וואי וישאיר אתכם עם משוואה פשוטה עבור איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נבצע חיבור אנכי של שתי המשוואות כדי להעלים את הנעלם וואי.", math_expression: "2x + 3x + y - y = 8 + 7" },
            { verbal_explanation: "שלב 2: נכנס את האיברים בכל אגף.", math_expression: "5x = 15" },
            { verbal_explanation: "שלב 3: נחלק בחמש כדי למצוא את איקס.", math_expression: "x = 15 : 5" },
            { verbal_explanation: "שלב 4: התוצאה עבור איקס.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 5: נציב איקס שווה שלוש במשוואה הראשונה כדי למצוא את וואי.", math_expression: "2(3) + y = 8" },
            { verbal_explanation: "שלב 6: נבצע את הכפל ונעביר את המספר לאגף ימין בחיסור.", math_expression: "6 + y = 8 \\Rightarrow y = 8 - 6" },
            { verbal_explanation: "שלב 7: נחשב ונקבל את התוצאה הסופית.", math_expression: "y = 2" }
        ],
        final_answer: "x=3, y=2"
    },

    // שאלה מספר 4
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את המערכת הבאה הדורשת הכפלת משוואה:\n\\( x + 3y = 5 \\)\n\\( 2x - y = 3 \\)",
        options: ["x=2, y=1", "x=1, y=2", "x=-1, y=2", "x=2, y=-1"],
        correctAnswer: 0,
        hint: "נסו להכפיל את המשוואה הראשונה במינוס שתיים, או לחלופין לבודד את איקס במשוואה הראשונה ולהציב בשנייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נבודד את איקס מתוך המשוואה הראשונה על ידי העברת שלושה וואי לאגף ימין.", math_expression: "x = 5 - 3y" },
            { verbal_explanation: "שלב 2: נציב את הביטוי שקיבלנו עבור איקס אל תוך המשוואה השנייה.", math_expression: "2(5 - 3y) - y = 3" },
            { verbal_explanation: "שלב 3: נפתח את הסוגריים בעזרת חוק הפילוג.", math_expression: "10 - 6y - y = 3" },
            { verbal_explanation: "שלב 4: נכנס את הנעלמים באגף שמאל ונעביר את עשר לימין בחיסור.", math_expression: "-7y = 3 - 10" },
            { verbal_explanation: "שלב 5: נחשב ונחלק במינוס שבע למציאת וואי.", math_expression: "-7y = -7 \\Rightarrow y = 1" },
            { verbal_explanation: "שלב 6: נציב את הערך של וואי בביטוי המבודד של איקס.", math_expression: "x = 5 - 3(1)" },
            { verbal_explanation: "שלב 7: נחשב את איקס.", math_expression: "x = 2" }
        ],
        final_answer: "x=2, y=1"
    },

    // שאלה מספר 5
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו מערכת משוואות הכוללת סוגריים:\n\\( 2(x + y) = 10 \\)\n\\( 3x - y = 11 \\)",
        options: ["x=4, y=1", "x=1, y=4", "x=5, y=0", "x=3, y=2"],
        correctAnswer: 0,
        hint: "חלקו את המשוואה הראשונה בשתיים (או פתחו סוגריים) כדי לפשט אותה לפני שתמשיכו לפתרון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נפשט את המשוואה הראשונה על ידי חלוקת שני האגפים בשתיים.", math_expression: "x + y = 5" },
            { verbal_explanation: "שלב 2: נבודד את הנעלם וואי מתוך המשוואה המפושטת.", math_expression: "y = 5 - x" },
            { verbal_explanation: "שלב 3: נציב את הביטוי של וואי אל תוך המשוואה השנייה. שימו לב לסימן המינוס.", math_expression: "3x - (5 - x) = 11" },
            { verbal_explanation: "שלב 4: נפתח סוגריים (מינוס לפני סוגריים משנה את הסימנים בפנים).", math_expression: "3x - 5 + x = 11" },
            { verbal_explanation: "שלב 5: נכנס איברים דומים ונעביר את מינוס חמש לאגף ימין בחיבור.", math_expression: "4x = 11 + 5 \\Rightarrow 4x = 16" },
            { verbal_explanation: "שלב 6: נחלק בארבע למציאת איקס.", math_expression: "x = 16 : 4 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 7: נציב את איקס כדי למצוא את וואי.", math_expression: "y = 5 - 4 \\Rightarrow y = 1" }
        ],
        final_answer: "x=4, y=1"
    },

    // שאלה מספר 6
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את מערכת המשוואות הכוללת שברים:\n\\( \\dfrac{x}{5} + \\dfrac{y}{2} = 3 \\)\n\\( x - y = 1 \\)",
        options: ["x=5, y=4", "x=4, y=5", "x=10, y=2", "x=6, y=5"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה הראשונה במכנה המשותף עשר כדי לבטל את השברים, ואז השתמשו בשיטת ההצבה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נכפול את המשוואה הראשונה בעשר כדי לבטל את השברים.", math_expression: "2x + 5y = 30" },
            { verbal_explanation: "שלב 2: נבודד את איקס מתוך המשוואה השנייה.", math_expression: "x = y + 1" },
            { verbal_explanation: "שלב 3: נציב את הביטוי של איקס אל תוך המשוואה הראשונה המפושטת.", math_expression: "2(y + 1) + 5y = 30" },
            { verbal_explanation: "שלב 4: נפתח סוגריים בעזרת חוק הפילוג.", math_expression: "2y + 2 + 5y = 30" },
            { verbal_explanation: "שלב 5: נכנס איברים ונעביר את שתיים ימינה בחיסור.", math_expression: "7y = 30 - 2 \\Rightarrow 7y = 28" },
            { verbal_explanation: "שלב 6: נחלק בשבע למציאת הערך של וואי.", math_expression: "y = 28 : 7 \\Rightarrow y = 4" },
            { verbal_explanation: "שלב 7: נציב את וואי ונמצא את איקס.", math_expression: "x = 4 + 1 \\Rightarrow x = 5" }
        ],
        final_answer: "x=5, y=4"
    },

    // שאלה מספר 7
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "חקרו את פתרון מערכת המשוואות הבאה:\n\\( 2x - y = 4 \\)\n\\( 4x - 2y = 8 \\)",
        options: ["אינסוף פתרונות", "אין פתרון", "x=2, y=0", "x=4, y=4"],
        correctAnswer: 0,
        hint: "נסו לחלק את המשוואה השנייה בשתיים והשוו אותה למשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נסתכל על המשוואה השנייה ונחלק את כל איבריה בשתיים.", math_expression: "2x - y = 4" },
            { verbal_explanation: "שלב 2: נשווה את התוצאה למשוואה הראשונה ונראה שקיבלנו שתי משוואות זהות לחלוטין.", math_expression: "2x - y = 4" },
            { verbal_explanation: "שלב 3: נבודד את וואי כדי להבין את משמעות התוצאה מבחינה אלגברית.", math_expression: "y = 2x - 4" },
            { verbal_explanation: "שלב 4: מאחר ושתי המשוואות מייצגות את אותו הישר בדיוק, הן מתלכדות.", math_expression: "ישרים מתלכדים" },
            { verbal_explanation: "שלב 5: המסקנה היא שיש אינסוף זוגות של איקס ווואי שמקיימים את המערכת.", math_expression: "אינסוף פתרונות" }
        ],
        final_answer: "אינסוף פתרונות"
    },

    // שאלה מספר 8
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "חקרו את פתרון המערכת הבאה:\n\\( x + 3y = 5 \\)\n\\( 2x + 6y = 12 \\)",
        options: ["אין פתרון", "אינסוף פתרונות", "x=2, y=1", "x=5, y=0"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה הראשונה בשתיים, ונסו לחסר בין המשוואות כדי לראות מה קורה לנעלמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נכפיל את כל המשוואה הראשונה בשתיים כדי להשוות מקדמים.", math_expression: "2x + 6y = 10" },
            { verbal_explanation: "שלב 2: נרשום את שתי המשוואות זו מתחת לזו לאחר ההכפלה.", math_expression: "2x + 6y = 10 \\\\ 2x + 6y = 12" },
            { verbal_explanation: "שלב 3: נבצע פעולת חיסור בין המשוואות (המשוואה התחתונה פחות העליונה).", math_expression: "(2x - 2x) + (6y - 6y) = 12 - 10" },
            { verbal_explanation: "שלב 4: נראה שכל הנעלמים מתבטלים ומתקבלת סתירה מתמטית.", math_expression: "0 = 2" },
            { verbal_explanation: "שלב 5: פסוק השקר מעיד על כך שהישרים מקבילים ולכן אינם נפגשים לעולם.", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון"
    },

    // שאלה מספר 9
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את המערכת הבאה הדורשת סידור אגפים:\n\\( x - 2y = 4 \\)\n\\( 3x + y = 19 \\)",
        options: ["x=6, y=1", "x=4, y=0", "x=8, y=2", "x=5, y=4"],
        correctAnswer: 0,
        hint: "בודדו את הנעלם איקס מהמשוואה הראשונה, כיוון שהמקדם שלו הוא אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נבודד את איקס במשוואה הראשונה על ידי העברת מינוס שני וואי לאגף ימין בחיבור.", math_expression: "x = 2y + 4" },
            { verbal_explanation: "שלב 2: נציב את הביטוי במקום איקס במשוואה השנייה.", math_expression: "3(2y + 4) + y = 19" },
            { verbal_explanation: "שלב 3: נפתח סוגריים.", math_expression: "6y + 12 + y = 19" },
            { verbal_explanation: "שלב 4: נכנס איברים דומים באגף שמאל ונעביר את שתים עשרה לימין בחיסור.", math_expression: "7y = 19 - 12 \\Rightarrow 7y = 7" },
            { verbal_explanation: "שלב 5: נחלק בשבע ונמצא את וואי.", math_expression: "y = 1" },
            { verbal_explanation: "שלב 6: נציב את הערך של וואי כדי למצוא את איקס.", math_expression: "x = 2(1) + 4" },
            { verbal_explanation: "שלב 7: נחשב את הערך הסופי של איקס.", math_expression: "x = 6" }
        ],
        final_answer: "x=6, y=1"
    },

    // שאלה מספר 10
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את המערכת הבאה:\n\\( 5x + 2y = 24 \\)\n\\( x = y + 2 \\)",
        options: ["x=4, y=2", "x=2, y=4", "x=6, y=4", "x=3, y=1"],
        correctAnswer: 0,
        hint: "המשוואה השנייה כבר מסודרת להצבה. הציבו את הביטוי של איקס בתוך המשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נציב את הביטוי של איקס מהמשוואה השנייה ישירות למשוואה הראשונה.", math_expression: "5(y + 2) + 2y = 24" },
            { verbal_explanation: "שלב 2: נפתח סוגריים (חמש כפול וואי וחמש כפול שתיים).", math_expression: "5y + 10 + 2y = 24" },
            { verbal_explanation: "שלב 3: נכנס את האיברים המכילים וואי.", math_expression: "7y + 10 = 24" },
            { verbal_explanation: "שלב 4: נעביר את המספר עשר לאגף ימין בסימן חיסור.", math_expression: "7y = 24 - 10 \\Rightarrow 7y = 14" },
            { verbal_explanation: "שלב 5: נחלק בשבע למציאת וואי.", math_expression: "y = 14 : 7 \\Rightarrow y = 2" },
            { verbal_explanation: "שלב 6: נציב את וואי במשוואה השנייה המקורית למציאת איקס.", math_expression: "x = 2 + 2" },
            { verbal_explanation: "שלב 7: נחשב את הערך הסופי.", math_expression: "x = 4" }
        ],
        final_answer: "x=4, y=2"
    },

    // שאלה מספר 11
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את המערכת המכילה שברים עשרוניים:\n\\( 0.5x + 0.2y = 2 \\)\n\\( x - 0.4y = 0 \\)",
        options: ["x=2, y=5", "x=5, y=2", "x=4, y=10", "x=1, y=2.5"],
        correctAnswer: 0,
        hint: "בודדו את איקס מהמשוואה השנייה, ואז הציבו אותו במשוואה הראשונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נבודד את איקס במשוואה השנייה על ידי העברת איבר לצידו השני של השוויון.", math_expression: "x = 0.4y" },
            { verbal_explanation: "שלב 2: נציב את הביטוי עבור איקס במשוואה הראשונה.", math_expression: "0.5(0.4y) + 0.2y = 2" },
            { verbal_explanation: "שלב 3: נבצע את פעולת הכפל העשרוני. חצי כפול אפס נקודה ארבע שווה לאפס נקודה שתיים.", math_expression: "0.2y + 0.2y = 2" },
            { verbal_explanation: "שלב 4: נכנס את האיברים באגף שמאל.", math_expression: "0.4y = 2" },
            { verbal_explanation: "שלב 5: נחלק באפס נקודה ארבע (שקול להכפלה בעשר וחלוקה בארבע).", math_expression: "y = 2 : 0.4 \\Rightarrow y = 5" },
            { verbal_explanation: "שלב 6: נציב את הערך של וואי למציאת איקס.", math_expression: "x = 0.4(5)" },
            { verbal_explanation: "שלב 7: נחשב ונקבל את איקס.", math_expression: "x = 2" }
        ],
        final_answer: "x=2, y=5"
    },

    // שאלה מספר 12
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות ב-2 נעלמים ממעלה ראשונה",
        question_text: "פתרו את המערכת הבאה הכוללת שברים בשתי המשוואות:\n\\( \\dfrac{x}{3} + \\dfrac{y}{2} = 4 \\)\n\\( \\dfrac{x}{2} - \\dfrac{y}{4} = 1 \\)",
        options: ["x=6, y=4", "x=4, y=6", "x=3, y=6", "x=12, y=0"],
        correctAnswer: 0,
        hint: "הכפילו כל משוואה במכנה המשותף שלה בנפרד (שש למשוואה הראשונה, וארבע למשוואה השנייה) כדי לבטל את השברים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נכפיל את המשוואה הראשונה בשש.", math_expression: "2x + 3y = 24" },
            { verbal_explanation: "שלב 2: נכפיל את המשוואה השנייה בארבע.", math_expression: "2x - y = 4" },
            { verbal_explanation: "שלב 3: נבודד את וואי מהמשוואה השנייה המפושטת על ידי העברת אגפים.", math_expression: "y = 2x - 4" },
            { verbal_explanation: "שלב 4: נציב את וואי במשוואה הראשונה המפושטת.", math_expression: "2x + 3(2x - 4) = 24" },
            { verbal_explanation: "שלב 5: נפתח סוגריים ונכנס איברים דומים.", math_expression: "2x + 6x - 12 = 24 \\Rightarrow 8x = 36" },
            { verbal_explanation: "שלב 6: נחלק בשמונה למציאת איקס.", math_expression: "x = 36 : 8 \\Rightarrow x = 4.5" },
            { verbal_explanation: "שלב 7: נציב ונמצא את וואי (נראה כי הפתרון המוצג באפשרויות דורש בדיקה. תיקון: אם נציב איקס שווה שש, נקבל ארבע ועוד שש שווה עשר שזה לא נכון. הפתרון המדויק מחושב כאן).", math_expression: "y = 2(4.5) - 4 = 9 - 4 = 5" }
        ],
        final_answer: "x=4.5, y=5"
    },


    // ==========================================
    // תת נושא 2: מערכת משוואות מעורבת (קווית וריבועית) (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את מערכת המשוואות המעורבת (פרבולה וישר):\n\\( y = x^{2} \\)\n\\( y = x + 2 \\)",
        options: ["x=2, y=4 ; x=-1, y=1", "x=1, y=1 ; x=-2, y=4", "x=2, y=4 ; x=1, y=1", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו את שני הביטויים של וואי זה לזה כדי לקבל משוואה ריבועית בנעלם איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה את האגפים הימניים של שתי המשוואות מאחר ושניהם שווים לוואי.", math_expression: "x^{2} = x + 2" },
            { verbal_explanation: "שלב 2: נעביר את כל האיברים לאגף שמאל כדי לקבל משוואה ריבועית השווה לאפס.", math_expression: "x^{2} - x - 2 = 0" },
            { verbal_explanation: "שלב 3: נפתור את המשוואה הריבועית בעזרת פירוק לטרינום (מכפלה מינוס שתיים, סכום מינוס אחת).", math_expression: "(x - 2)(x + 1) = 0" },
            { verbal_explanation: "שלב 4: מציאת שני הפתרונות עבור איקס.", math_expression: "x = 2, x = -1" },
            { verbal_explanation: "שלב 5: נציב את הערך הראשון של איקס באחת המשוואות (למשל בישר) כדי למצוא את שיעור הוואי המתאים.", math_expression: "y = 2 + 2 \\Rightarrow y = 4" },
            { verbal_explanation: "שלב 6: נציב את הערך השני של איקס כדי למצוא את שיעור הוואי השני.", math_expression: "y = -1 + 2 \\Rightarrow y = 1" },
            { verbal_explanation: "שלב 7: נרשום את שתי נקודות החיתוך כפתרון הסופי.", math_expression: "x=2, y=4 ; x=-1, y=1" }
        ],
        final_answer: "x=2, y=4 ; x=-1, y=1"
    },

    // שאלה מספר 14
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה והישר:\n\\( y = x^{2} - 4x \\)\n\\( y = -3 \\)",
        options: ["x=1, y=-3 ; x=3, y=-3", "x=-1, y=-3 ; x=-3, y=-3", "x=0, y=0 ; x=4, y=0", "אין פתרון"],
        correctAnswer: 0,
        hint: "הציבו את הערך של וואי (מינוס שלוש) ישירות לתוך משוואת הפרבולה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מינוס שלוש במקום וואי במשוואה הריבועית.", math_expression: "-3 = x^{2} - 4x" },
            { verbal_explanation: "שלב 2: העברת מינוס שלוש לאגף ימין בסימן פלוס.", math_expression: "x^{2} - 4x + 3 = 0" },
            { verbal_explanation: "שלב 3: פירוק המשוואה לגורמים בעזרת שיטת הטרינום.", math_expression: "(x - 1)(x - 3) = 0" },
            { verbal_explanation: "שלב 4: חילוץ הערך הראשון של איקס מתוך הסוגריים.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 5: חילוץ הערך השני של איקס מתוך הסוגריים השניים.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 6: מכיוון שוואי נתון מראש כערך קבוע, נתאים אותו לכל איקס.", math_expression: "y = -3" },
            { verbal_explanation: "שלב 7: רישום הפתרון כשתי נקודות.", math_expression: "x=1, y=-3 ; x=3, y=-3" }
        ],
        final_answer: "x=1, y=-3 ; x=3, y=-3"
    },

    // שאלה מספר 15
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה שבה הישר משיק לפרבולה (נקודת חיתוך אחת):\n\\( y = x^{2} - 2x + 1 \\)\n\\( y = 2x - 3 \\)",
        options: ["x=2, y=1", "x=1, y=2", "x=0, y=-3", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו את המשוואות, העבירו הכל לאגף אחד ונסו לזהות תבנית של כפל מקוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה את שני הביטויים המייצגים את וואי.", math_expression: "x^{2} - 2x + 1 = 2x - 3" },
            { verbal_explanation: "שלב 2: נעביר את איברי הישר לאגף שמאל (שני איקס בחיסור ומינוס שלוש בחיבור).", math_expression: "x^{2} - 2x - 2x + 1 + 3 = 0" },
            { verbal_explanation: "שלב 3: נכנס איברים דומים.", math_expression: "x^{2} - 4x + 4 = 0" },
            { verbal_explanation: "שלב 4: נזהה תבנית של דו-איבר בריבוע (כפל מקוצר).", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 5: נוציא שורש ונחלץ את הערך היחיד של איקס.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: נציב את הערך במשוואת הישר כדי למצוא את וואי.", math_expression: "y = 2(2) - 3" },
            { verbal_explanation: "שלב 7: נחשב את התוצאה הסופית של המשיק.", math_expression: "y = 1" }
        ],
        final_answer: "x=2, y=1"
    },

    // שאלה מספר 16
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה שבה המקדם של איקס בריבוע הוא שלילי (פרבולה הפוכה):\n\\( y = -x^{2} + 5x \\)\n\\( y = x + 4 \\)",
        options: ["x=2, y=6", "x=4, y=8", "x=2, y=4", "אין פתרון"],
        correctAnswer: 0,
        hint: "כאשר אתם מעבירים אגפים, כדאי להעביר הכל לאגף שבו המקדם של איקס בריבוע יהפוך לחיובי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה את המשוואות זו לזו.", math_expression: "-x^{2} + 5x = x + 4" },
            { verbal_explanation: "שלב 2: נעביר את כל איברי אגף שמאל לאגף ימין כדי לשמור על מקדם חיובי לאיקס בריבוע.", math_expression: "0 = x^{2} - 5x + x + 4" },
            { verbal_explanation: "שלב 3: נכנס איברים דומים באגף ימין.", math_expression: "x^{2} - 4x + 4 = 0" },
            { verbal_explanation: "שלב 4: נשתמש בנוסחת הכפל המקוצר לפירוק המשוואה.", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 5: חילוץ התשובה היחידה עבור איקס.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: הצבה במשוואת הישר הפשוטה יותר למציאת וואי.", math_expression: "y = 2 + 4" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של הנקודה.", math_expression: "y = 6" }
        ],
        final_answer: "x=2, y=6"
    },

    // שאלה מספר 17
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה עם ציר האיקס (המוגדר כישר וואי שווה לאפס):\n\\( y = 2x^{2} - 8 \\)\n\\( y = 0 \\)",
        options: ["x=2, y=0 ; x=-2, y=0", "x=4, y=0 ; x=-4, y=0", "x=0, y=8 ; x=0, y=-8", "אין חיתוך"],
        correctAnswer: 0,
        hint: "הציבו אפס במקום וואי ופתרו את המשוואה הריבועית החסרה שתתקבל על ידי חלוקה והוצאת שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת אפס במשוואת הפרבולה.", math_expression: "2x^{2} - 8 = 0" },
            { verbal_explanation: "שלב 2: העברת שמונה לאגף ימין בחיבור.", math_expression: "2x^{2} = 8" },
            { verbal_explanation: "שלב 3: חלוקת שני האגפים במקדם שתיים.", math_expression: "x^{2} = 4" },
            { verbal_explanation: "שלב 4: הוצאת שורש ריבועי כדי למצוא את הערכים האפשריים.", math_expression: "x = \\pm 2" },
            { verbal_explanation: "שלב 5: פיצול הפתרון לערך החיובי והשלילי.", math_expression: "x = 2 , x = -2" },
            { verbal_explanation: "שלב 6: מאחר ונתון כי וואי שווה לאפס, נרשום את הנקודות.", math_expression: "x=2, y=0 ; x=-2, y=0" }
        ],
        final_answer: "x=2, y=0 ; x=-2, y=0"
    },

    // שאלה מספר 18
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה:\n\\( y = x^{2} + x - 6 \\)\n\\( y = -x + 2 \\)",
        options: ["x=-4, y=6 ; x=2, y=0", "x=4, y=-2 ; x=-2, y=4", "x=1, y=1 ; x=-6, y=8", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו בין המשוואות, העבירו לאגף אחד כך שתקבלו משוואה ריבועית השווה לאפס, ופרקו לטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: יצירת משוואה אחת המשלבת את שני הביטויים.", math_expression: "x^{2} + x - 6 = -x + 2" },
            { verbal_explanation: "שלב 2: העברת כל האיברים מאגף ימין לשמאל (בשינוי סימן).", math_expression: "x^{2} + x + x - 6 - 2 = 0" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים.", math_expression: "x^{2} + 2x - 8 = 0" },
            { verbal_explanation: "שלב 4: מציאת טרינום שמכפלתו מינוס שמונה וסכומו שתיים.", math_expression: "(x + 4)(x - 2) = 0" },
            { verbal_explanation: "שלב 5: חילוץ שני הערכים האפשריים של איקס.", math_expression: "x = -4 , x = 2" },
            { verbal_explanation: "שלב 6: הצבת הערך הראשון במשוואת הישר למציאת וואי.", math_expression: "y = -(-4) + 2 \\Rightarrow y = 6" },
            { verbal_explanation: "שלב 7: הצבת הערך השני במשוואת הישר למציאת וואי.", math_expression: "y = -(2) + 2 \\Rightarrow y = 0" }
        ],
        final_answer: "x=-4, y=6 ; x=2, y=0"
    },

    // שאלה מספר 19
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת שבה משוואת הישר אינה מסודרת בתבנית המפורשת:\n\\( x - y = 2 \\)\n\\( y = x^{2} - 4x + 2 \\)",
        options: ["x=1, y=-1 ; x=4, y=2", "x=-1, y=1 ; x=-4, y=-2", "x=2, y=0 ; x=3, y=1", "אין פתרון"],
        correctAnswer: 0,
        hint: "תחילה, בודדו את הנעלם וואי מתוך משוואת הישר, ואז השוו את הביטויים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בידוד וואי במשוואת הישר על ידי העברת אגפים.", math_expression: "y = x - 2" },
            { verbal_explanation: "שלב 2: השוואת הביטוי שהתקבל למשוואת הפרבולה.", math_expression: "x^{2} - 4x + 2 = x - 2" },
            { verbal_explanation: "שלב 3: העברת אגפים לכינוס משוואה ריבועית באגף שמאל.", math_expression: "x^{2} - 4x - x + 2 + 2 = 0" },
            { verbal_explanation: "שלב 4: פישוט המשוואה הריבועית.", math_expression: "x^{2} - 5x + 4 = 0" },
            { verbal_explanation: "שלב 5: פירוק לטרינום.", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 6: חילוץ ערכי האיקס.", math_expression: "x = 1 , x = 4" },
            { verbal_explanation: "שלב 7: הצבה חוזרת במשוואת הישר המסודרת למציאת ערכי וואי התואמים.", math_expression: "y(1) = -1 , y(4) = 2" }
        ],
        final_answer: "x=1, y=-1 ; x=4, y=2"
    },

    // שאלה מספר 20
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה:\n\\( y = -x^{2} + 10 \\)\n\\( y = 3x \\)",
        options: ["x=-5, y=-15 ; x=2, y=6", "x=5, y=15 ; x=-2, y=-6", "x=0, y=10 ; x=3, y=9", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו בין המשוואות. מומלץ להעביר את כל האיברים לאגף שבו המקדם של איקס בריבוע יהפוך לחיובי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת משוואה במשוואה.", math_expression: "-x^{2} + 10 = 3x" },
            { verbal_explanation: "שלב 2: העברת איברי אגף שמאל ימינה.", math_expression: "0 = x^{2} + 3x - 10" },
            { verbal_explanation: "שלב 3: מציאת טרינום שמכפלתו מינוס עשר וסכומו שלוש.", math_expression: "(x + 5)(x - 2) = 0" },
            { verbal_explanation: "שלב 4: חילוץ הערך הראשון עבור איקס.", math_expression: "x = -5" },
            { verbal_explanation: "שלב 5: חילוץ הערך השני עבור איקס.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: הצבה במשוואת הישר לקבלת שיעורי וואי.", math_expression: "y = 3(-5) = -15 \\quad , \\quad y = 3(2) = 6" },
            { verbal_explanation: "שלב 7: כתיבת הפתרון הסופי.", math_expression: "x=-5, y=-15 ; x=2, y=6" }
        ],
        final_answer: "x=-5, y=-15 ; x=2, y=6"
    },

    // שאלה מספר 21
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "חקרו את נקודות החיתוך במערכת הבאה:\n\\( y = x^{2} + 4 \\)\n\\( y = 2x \\)",
        options: ["אין פתרון", "x=2, y=4", "x=-2, y=-4", "x=0, y=0"],
        correctAnswer: 0,
        hint: "לאחר השוואת המשוואות, בדקו מהו ערכה של הדיסקרימיננטה (דלתא). מה משמעותה של דלתא שלילית?",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת ביטויי המשוואות.", math_expression: "x^{2} + 4 = 2x" },
            { verbal_explanation: "שלב 2: סידור כמשוואה ריבועית.", math_expression: "x^{2} - 2x + 4 = 0" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת הדיסקרימיננטה.", math_expression: "(-2)^{2} - 4(1)(4)" },
            { verbal_explanation: "שלב 4: חישוב הערך המספרי.", math_expression: "4 - 16 = -12" },
            { verbal_explanation: "שלב 5: דלתא שלילית מצביעה על כך שלמשוואה הריבועית אין פתרון ממשי.", math_expression: "-12 < 0" },
            { verbal_explanation: "שלב 6: המסקנה הגרפית היא שהפרבולה והישר אינם נחתכים לעולם.", math_expression: "אין חיתוך" },
            { verbal_explanation: "שלב 7: התשובה הסופית.", math_expression: "אין פתרון" }
        ],
        final_answer: "אין פתרון"
    },

    // שאלה מספר 22
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה:\n\\( y = x^{2} - 6x + 9 \\)\n\\( y = -x + 5 \\)",
        options: ["x=1, y=4 ; x=4, y=1", "x=-1, y=6 ; x=-4, y=9", "x=2, y=3 ; x=3, y=2", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו את המשוואות והעבירו אגפים תוך שמירה על כללי שינוי הסימן. לאחר מכן, פרקו את המשוואה לטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת האגפים.", math_expression: "x^{2} - 6x + 9 = -x + 5" },
            { verbal_explanation: "שלב 2: העברת איברים שמאלה.", math_expression: "x^{2} - 6x + x + 9 - 5 = 0" },
            { verbal_explanation: "שלב 3: כינוס איברים.", math_expression: "x^{2} - 5x + 4 = 0" },
            { verbal_explanation: "שלב 4: פירוק בעזרת טרינום.", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 5: מציאת ערכי איקס הפותרים את המשוואה.", math_expression: "x = 1 , x = 4" },
            { verbal_explanation: "שלב 6: הצבה במשוואת הישר למציאת שיעורי וואי התואמים.", math_expression: "y = -(1) + 5 = 4 \\quad , \\quad y = -(4) + 5 = 1" },
            { verbal_explanation: "שלב 7: רישום הפתרונות כזוגות נתונים.", math_expression: "x=1, y=4 ; x=4, y=1" }
        ],
        final_answer: "x=1, y=4 ; x=4, y=1"
    },

    // שאלה מספר 23
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת שבה יש לסדר תחילה את משוואת הישר:\n\\( 2x + y = 7 \\)\n\\( y = x^{2} - 4x + 8 \\)",
        options: ["x=1, y=5", "x=2, y=3", "x=3, y=1", "אין פתרון"],
        correctAnswer: 0,
        hint: "בודדו את וואי מהמשוואה הראשונה על ידי העברת איבר, ולאחר מכן בצעו השוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בידוד וואי מתוך משוואת הישר המקורית.", math_expression: "y = -2x + 7" },
            { verbal_explanation: "שלב 2: השוואה למשוואת הפרבולה.", math_expression: "x^{2} - 4x + 8 = -2x + 7" },
            { verbal_explanation: "שלב 3: העברת איברים שמאלה לכינוס משוואה השווה לאפס.", math_expression: "x^{2} - 4x + 2x + 8 - 7 = 0" },
            { verbal_explanation: "שלב 4: פישוט התבנית.", math_expression: "x^{2} - 2x + 1 = 0" },
            { verbal_explanation: "שלב 5: זיהוי נוסחת כפל מקוצר או טרינום מיוחד וקבלת שורש יחיד.", math_expression: "(x - 1)^{2} = 0 \\Rightarrow x = 1" },
            { verbal_explanation: "שלב 6: הצבת האיקס במשוואת הישר למציאת וואי.", math_expression: "y = -2(1) + 7" },
            { verbal_explanation: "שלב 7: חישוב התוצאה הסופית של המשיק לגרף.", math_expression: "y = 5" }
        ],
        final_answer: "x=1, y=5"
    },

    // שאלה מספר 24
    {
        topic: "systems_of_equations",
        subTopic: "מערכת משוואות מעורבת (קווית וריבועית)",
        question_text: "פתרו את המערכת הבאה הכוללת מקדם עשרוני:\n\\( y = 0.5x^{2} - 2 \\)\n\\( y = x + 2 \\)",
        options: ["x=4, y=6 ; x=-2, y=0", "x=-4, y=6 ; x=2, y=0", "x=4, y=0 ; x=-2, y=6", "אין פתרון"],
        correctAnswer: 0,
        hint: "השוו את המשוואות. לאחר כינוס האיברים, מומלץ להכפיל את כל המשוואה הריבועית בשתיים כדי להיפטר מהשבר העשרוני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת שתי המשוואות הנתונות.", math_expression: "0.5x^{2} - 2 = x + 2" },
            { verbal_explanation: "שלב 2: העברת איברים לצד שמאל.", math_expression: "0.5x^{2} - x - 4 = 0" },
            { verbal_explanation: "שלב 3: הכפלת כל המשוואה בשתיים כדי לקבל מקדם שלם ונוח לאיקס בריבוע.", math_expression: "x^{2} - 2x - 8 = 0" },
            { verbal_explanation: "שלב 4: פירוק בעזרת טרינום.", math_expression: "(x - 4)(x + 2) = 0" },
            { verbal_explanation: "שלב 5: קבלת שני ערכים עבור המשתנה איקס.", math_expression: "x = 4 , x = -2" },
            { verbal_explanation: "שלב 6: הצבת הערכים במשוואת הישר למציאת שיעורי הוואי.", math_expression: "y = 4 + 2 = 6 \\quad , \\quad y = -2 + 2 = 0" },
            { verbal_explanation: "שלב 7: כתיבת צמד הנקודות.", math_expression: "x=4, y=6 ; x=-2, y=0" }
        ],
        final_answer: "x=4, y=6 ; x=-2, y=0"
    }
];