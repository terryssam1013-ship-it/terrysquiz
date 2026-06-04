// ════════════════════════════════════════════════════════════════
//  테리스 리딩 테스트 데이터 — 동아(윤정미) 3.What a Great Idea
//  변형시험지 1~25번  (족보닷컴 본문 N제 변형, PDF 원문 그대로 전사)
//  엔진: quiz.html?set=donga_yjm_l3_byun1
// ════════════════════════════════════════════════════════════════
window.QUIZ_DATA = {
  PASSAGES: {},   // 이 세트는 문항마다 지문이 달라 passage를 각 문항에 직접 넣음
  CHAPTERS: {
    1: {
      title: "3과 변형 1~25",
      sub: "What a Great Idea · 동아(윤정미) · 객관식22 + 서술형3",
      info: "객관식 22문항 + 서술형 3문항 · 100점",
      db: "/results_reading_donga_yjm_l3_byun1.json",
      q: [
        {
          type: "mc", t: "GR", p: "어법 (괄호 안 적절한 표현)", pts: 4,
          passage: `G: What's your favorite pizza place, Tim?<br>B: Little Italy. I think they have the (A) [best / better] pizza in Seoul.<br>G: Are you sure? You (B) [said / told] the same thing about Joe's Pizza last week. Remember?<br>B: Did I? Well, then, I'm not sure. Let's just (C) [say / to say] that they both have great pizza.`,
          q: "다음 글의 괄호 (A), (B), (C)에서 어법에 맞는 표현으로 가장 적절한 것은?",
          c: [
            "(A) best &nbsp; (B) said &nbsp; (C) say",
            "(A) better &nbsp; (B) said &nbsp; (C) say",
            "(A) best &nbsp; (B) told &nbsp; (C) to say",
            "(A) better &nbsp; (B) told &nbsp; (C) say",
            "(A) best &nbsp; (B) said &nbsp; (C) to say"
          ],
          a: 0,
          expl: "(A) 셋 이상의 대상 중에서 최고임을 나타내므로 최상급 best가 적절하다. (B) 'the same thing'이라는 직접 목적어만 있으므로 said가 적절하다. told는 간접 목적어(사람), 직접 목적어(내용)이 온다. (C) Let's 뒤에는 동사원형이 오므로 say가 적절하다."
        },
        {
          type: "mc", t: "RC", p: "답할 수 있는 질문 고르기", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.<br>People needed a new way to travel, and Karl von Drais invented the first bicycle in Germany in 1817. Drais's bicycle had two wooden wheels but no pedals. How did it move without pedals? Well, riders simply pushed the bicycle forward with their feet.`,
          q: "다음 글을 읽고 답변할 수 있는 질문을 &lt;보기&gt;에서 모두 고른 것은?<br><br>&lt;보기&gt;<br>a. Why did crops fail around the world in 1815?<br>b. Why were many horses killed after the explosion?<br>c. What was the material of the first bicycle's wheels?<br>d. How many miles per hour could the first bicycle travel?",
          c: ["a, b", "a, c", "a, b, c", "b, c, d", "a, b, c, d"],
          a: 2,
          expl: "이 글은 화산 폭발 이후 식량난과 이동수단(말)의 부족이라는 상황이 최초 자전거의 발명으로 이어졌다는 배경을 설명하는 글이다. a. 1815년에 전 세계에서 농작물이 왜 흉작을 겪었나? (화산 폭발로 인한 화산재 때문에) b. 폭발 이후에 왜 많은 말들이 죽었나? (식량난으로 말을 식용으로 사용했기 때문에) c. 최초의 자전거 바퀴는 어떤 재료로 만들어졌나? (나무로 만들어졌다) a, b, c는 모두 답변할 수 있지만 d. 최초의 자전거는 시속 몇 마일까지 달릴 수 있었나?에 대한 정보는 알 수 없다."
        },
        {
          type: "mc", t: "GR", p: "빈칸 (A),(B) 어법", pts: 4,
          passage: `G: Which team will win today, the Reds (A)________ the Blues?<br>B: The Reds. They're (B)________ better team.<br>G: Are you sure? Yun Jihun, their star player, is not playing today.<br>B: I didn't know that. Then, I'm not sure.`,
          q: "다음 글의 빈칸 (A), (B)에 들어갈 말이 바르게 짝지어진 것은?",
          c: [
            "(A) and &nbsp; (B) a",
            "(A) or &nbsp; (B) a",
            "(A) and &nbsp; (B) the",
            "(A) or &nbsp; (B) the",
            "(A) but &nbsp; (B) the"
          ],
          a: 3,
          expl: "(A) 둘 중 하나를 선택하는 상황이므로 or가 적절하다. (B) 두 팀 중 특정한 팀을 비교하여 가리키므로 정관사 the를 사용한다."
        },
        {
          type: "mc", t: "RC", p: "빈칸 추론 (대화)", pts: 4,
          passage: `G: Which team will win today, the Reds or the Blues?<br>B: The Reds. They're the better team.<br>G: Are you sure? Yun Jihun, their star player, is not playing today.<br>B: ________________. Then, I'm not sure.`,
          q: "글의 흐름으로 보아 빈칸에 들어갈 알맞은 말은?",
          c: [
            "I agree with you",
            "I didn't know that",
            "He is a good player",
            "The Reds will win today",
            "I will watch the game now"
          ],
          a: 1,
          expl: "스타플레이어가 출전하지 않는다는 사실을 듣고 확신이 없어졌다고 말하는 맥락이므로 ② '그건 몰랐어'가 가장 적절하다. ① 네 말에 동의해 ③ 그는 훌륭한 선수야 ④ 레즈 팀이 오늘 이길 거야 ⑤ 나는 지금 경기를 볼 거야"
        },
        {
          type: "mc", t: "RC", p: "추론", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.<br>People needed a new way to travel, and Karl von Drais invented the first bicycle in Germany in 1817. Drais's bicycle had two wooden wheels but no pedals. How did it move without pedals? Well, riders simply pushed the bicycle forward with their feet. The present-day bicycle is the result of many inventors' work in the 19th century.`,
          q: "다음 글을 읽고 추론할 수 있는 내용으로 가장 적절한 것은?",
          c: [
            "The first bicycle was made to help farmers grow crops better.",
            "Volcano explosions can change the way people move from place to place.",
            "In 1815, horses were used only for food, not for traveling.",
            "Karl von Drais added pedals to his bicycle to make it move much faster.",
            "People in Germany had more food than people in other parts of the world."
          ],
          a: 1,
          expl: "화산 폭발로 인한 기근 때문에 이동 수단인 말을 식량으로 사용하게 되었고, 이로 인해 자전거라는 새로운 이동 수단이 발명되었다는 흐름을 통해 화산 폭발이 사람들의 이동 방식을 변화시킬 수 있음을 추론할 수 있다. ① 최초의 자전거는 농부들이 농작물을 더 잘 기르도록 돕기 위해 만들어졌다. ③ 1815년에 말은 이동용이 아닌 오로지 식용으로만 사용되었다. ④ 칼 폰 드라이스는 자전거를 훨씬 더 빠르게 움직이게 하려고 페달을 추가했다. ⑤ 독일 사람들은 세계의 다른 지역 사람들보다 더 많은 음식을 가졌다."
        },
        {
          type: "mc", t: "RC", p: "내용 불일치", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.`,
          q: "주어진 글의 내용과 일치하지 않는 것은?",
          c: [
            "Mt. Tambora is a volcano in Indonesia.",
            "The volcanic ash helped crops grow well.",
            "Food shortage occurred globally after 1815.",
            "Horses were a common way to travel at that time.",
            "People ate horses because they lacked other food."
          ],
          a: 1,
          expl: "지문에서 화산재 구름으로 인해 전 세계적으로 농작물이 흉작이었다고 했으므로, 농작물이 잘 자라도록 도왔다는 ②는 글의 내용과 일치하지 않는다. ① 탐보라 산은 인도네시아에 있는 화산이다. ② 화산재는 농작물이 잘 자라도록 도왔다. ③ 1815년 이후 전 세계적으로 식량 부족이 발생했다. ④ 그 당시에 말은 흔한 여행 수단이었다. ⑤ 사람들은 다른 음식이 부족했기 때문에 말을 먹었다."
        },
        {
          type: "sa", p: "배열 영작 (n번째 단어)", pts: 4, sa_text: true,
          passage: `우리말: 그는 읽을 책을 몇 권 가지고 있다.<br>&lt;보기&gt; has / to / read / some / he / books`,
          q: "다음 우리말을 영어로 옮길 때 &lt;보기&gt;의 단어를 모두 사용하여 배열했을 때, <b>여섯 번째에 올 단어</b>를 쓰시오.",
          a: "read",
          accepts: ["read"],
          expl: "주어진 우리말을 영작하면 'He(1) has(2) some(3) books(4) to(5) read(6).'이 된다. 여섯 번째에 올 단어는 read이다. '읽을 책'이라는 의미를 만들기 위해 to부정사의 형용사적 용법이 명사 books 뒤에 위치해야 함에 유의한다."
        },
        {
          type: "mc", t: "RC", p: "어휘 부적절 개수", pts: 4,
          passage: `The first webcam was invented to (A) <u>ignore</u> a coffee pot. In 1991, Dr. Quentin Stafford-Fraser and Dr. Paul Jardetzky were working at a computer lab in England.<br>To work (B) <u>better</u>, they needed lots of coffee. However, there was only one coffee machine in the building. So, they had to make many (C) <u>exciting</u> trips to the empty coffee pot.<br>As a solution, the two researchers set up a camera (D) <u>behind</u> the coffee machine. The camera took pictures of the coffee pot three times a minute. With (E) <u>special</u> software, all the researchers in the building could see the pictures on their local network. No more disappointing trips!`,
          q: "다음 글의 밑줄 친 (A)~(E) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은 모두 몇 개인가?",
          c: ["1개", "2개", "3개", "4개", "5개"],
          a: 2,
          expl: "커피 포트를 지켜보기 위해 웹캠이 발명되었으므로 (A) '무시하다'(ignore)를 '지켜보다'(watch)로 고쳐야 한다. 포트가 비어 있는 것은 실망스러운 일이었으므로 (C) '신나는'(exciting)을 '실망스러운'(disappointing)으로 고쳐야 한다. 카메라는 머신 앞에 설치되었으므로 (D) '뒤에'(behind)를 '앞에'(in front of)로 고쳐야 한다. (B) 더 좋은 (E) 특별한"
        },
        {
          type: "mc", t: "RC", p: "어휘 부적절 (모두 고르기)", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have ⓐ <u>enough</u> food to eat. Surprisingly, this made traveling ⓑ <u>difficult</u>. Why? In those days, people rode horses, but many horses were killed for food.<br>People needed a new way to travel, and Karl von Drais invented the first bicycle in Germany in 1817. Drais's bicycle had two ⓒ <u>plastic</u> wheels but no pedals. How did it move without pedals? Well, riders ⓓ <u>simply</u> pushed the bicycle ⓔ <u>backward</u> with their feet. The present-day bicycle is the result of many inventors' work in the 19th century.`,
          q: "다음 글의 밑줄 친 ⓐ~ⓔ 중, 문맥상 낱말의 쓰임이 적절하지 않은 것을 모두 고르면?",
          c: ["ⓐ, ⓒ", "ⓑ, ⓔ", "ⓒ, ⓓ", "ⓒ, ⓔ", "ⓓ, ⓔ"],
          a: 3,
          expl: "당시 자전거 바퀴는 나무로 만들어졌으므로 ⓒ '플라스틱'(plastic)을 '나무로 된'(wooden)으로 고쳐야 한다. 또한 앞으로 나아가기 위해 자전거를 앞으로 밀었으므로 ⓔ '뒤로'(backward)를 '앞으로'(forward)로 고쳐야 한다. ⓐ 충분한 ⓑ 어려운 ⓓ 단순히"
        },
        {
          type: "mc", t: "RC", p: "문장 삽입", pts: 4,
          passage: `In 1991, Dr. Quentin Stafford-Fraser and Dr. Paul Jardetzky were working at a computer lab in England.`,
          q: "글의 흐름으로 보아, 위 주어진 문장이 들어가기에 가장 적절한 곳은?<br><br>The first webcam was invented to watch a coffee pot. ( ① ) To work better, they needed lots of coffee. ( ② ) However, there was only one coffee machine in the building. ( ③ ) So, they had to make many disappointing trips to the empty coffee pot. ( ④ ) As a solution, the two researchers set up a camera in front of the coffee machine. ( ⑤ ) The camera took pictures of the coffee pot three times a minute.",
          c: ["①", "②", "③", "④", "⑤"],
          a: 0,
          expl: "웹캠 발명의 목적을 말한 도입부 뒤에, 구체적으로 누가 언제 어디서 일했는지 인물과 배경을 소개하는 ①번 위치가 가장 적절하다. 또한 ① 뒤에 이어지는 내용에서 대명사 they가 등장하기 때문에 they가 지칭할 수 있는 대상(두 박사)이 나오는 주어진 문장이 ①에 들어가야 한다."
        },
        {
          type: "sa", p: "배열 영작 (n번째 단어)", pts: 4, sa_text: true,
          passage: `One day, Graham saw some window painters. When they made a mistake, they corrected it by simply painting over it. (A) <u>그다음 날, 그녀는 자신만의 흰색 페인트를 만들었고 그것을 자신의 타이핑 실수를 고치기 위해 사용했습니다.</u> Surprisingly, nobody noticed! Soon, everybody at the bank began using it.<br><br>&lt;조건&gt; 아래 단어를 모두 사용할 것<br>typing / mistakes / correct / paint / white / she / next / used / her / and / own / it / the / to / made / day / her`,
          q: "위 밑줄 친 우리말 (A)와 일치하도록 &lt;조건&gt;에 맞춰 영작했을 때, <b>10번째 올 단어</b>를 쓰시오.",
          a: "and",
          accepts: ["and"],
          expl: "(A)를 영작하면 \"The next day, she made her own white paint and used it to correct her typing mistakes.\"가 된다. 단어 순서는 The(1) next(2) day(3) she(4) made(5) her(6) own(7) white(8) paint(9) and(10) ... 따라서 10번째 단어는 and이다."
        },
        {
          type: "mc", t: "RC", p: "연결어 (A),(B)", pts: 4,
          passage: `The next day, she made her own white paint and used it to correct her typing mistakes. ___(A)___, nobody noticed! ___(B)___, everybody at the bank began using it.`,
          q: "다음 글의 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
          c: [
            "(A) Surprisingly &nbsp; (B) Soon",
            "(A) Surprisingly &nbsp; (B) For example",
            "(A) Therefore &nbsp; (B) Soon",
            "(A) Therefore &nbsp; (B) Instead",
            "(A) For example &nbsp; (B) Instead"
          ],
          a: 0,
          expl: "(A)는 페인트를 썼음에도 아무도 모를 정도로 자연스러웠음을 나타내는 Surprisingly가 적절하다. (B)는 그 이후 시간의 경과를 나타내는 Soon(곧)이 적절하다. ① 놀랍게도, 곧 ② 놀랍게도, 예를 들어 ③ 그러므로, 곧 ④ 그러므로, 대신에 ⑤ 예를 들어, 대신에"
        },
        {
          type: "mc", t: "RC", p: "지칭 대상", pts: 4,
          passage: `The first webcam was invented to watch a coffee pot. In 1991, Dr. Quentin Stafford-Fraser and Dr. Paul Jardetzky were working at a computer lab in England.<br>To work better, ⓐ <u>they</u> needed lots of coffee. However, there was only one coffee machine in the building. So, ⓑ <u>they</u> had to make many disappointing trips to the empty coffee pot.<br>As a solution, ⓒ <u>the two researchers</u> set up ⓓ <u>a camera</u> in front of the coffee machine. ⓔ <u>The camera</u> took pictures of the coffee pot three times a minute. With special software, all the researchers in the building could see the pictures on their local network. No more disappointing trips!`,
          q: "밑줄 친 ⓐ~ⓔ 중 가리키는 대상이 같은 것끼리 묶인 것은?",
          c: ["ⓐ, ⓑ, ⓒ", "ⓐ, ⓒ, ⓔ", "ⓑ, ⓒ, ⓓ", "ⓒ, ⓓ, ⓔ", "ⓓ, ⓔ"],
          a: 0,
          expl: "ⓐ, ⓑ, ⓒ는 모두 영국의 컴퓨터 실험실에서 일하던 두 연구원(Quentin 박사와 Paul 박사)을 가리킨다. ⓓ와 ⓔ는 카메라를 가리킨다."
        },
        {
          type: "mc", t: "RC", p: "답할 수 없는 질문", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.`,
          q: "다음 글을 읽고 답할 수 없는 질문은?",
          c: [
            "Where is Mt. Tambora located?",
            "When did the volcano explode?",
            "What did the ash cloud do to the crops?",
            "What kind of food did the horses eat?",
            "Why did people kill horses for food?"
          ],
          a: 3,
          expl: "본문에는 말이 사람의 식량으로 사용되었다는 내용만 나올 뿐, 말이 어떤 먹이를 먹었는지는 나와 있지 않다. ① 탐보라 산은 어디에 위치하는가? → 인도네시아 ② 화산은 언제 폭발했는가? → 1815년 ③ 화산재 구름이 농작물에 무엇을 했는가? → 전 세계적으로 흉작이 들었다 ⑤ 왜 사람들은 말을 식량으로 죽였는가? → 흉작으로 먹을 것이 부족했기 때문에"
        },
        {
          type: "mc", t: "RC", p: "내용 불일치", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.`,
          q: "Mt. Tambora 폭발에 관한 글의 내용과 일치하지 않는 것은?",
          c: [
            "화산 폭발은 1815년에 인도네시아에서 일어났다.",
            "화산재 구름 때문에 전 세계 농작물이 피해를 입었다.",
            "농작물 피해로 인해 사람들은 식량 부족을 겪었다.",
            "말이 식량으로 쓰이면서 이동 수단이 부족해졌다.",
            "화산 폭발 직후에 사람들은 더 많은 말을 키우기 시작했다."
          ],
          a: 4,
          expl: "이 글은 1815년 인도네시아의 Tambora라는 화산이 폭발하면서 화산재로 인해 세계적으로 농작물이 피해를 입어 사람들이 식량 부족을 겪었다는 내용을 서술하고 있다. 그 당시에 사람들은 이동 수단인 말들을 식량으로 쓰기 위해 죽였다는 내용이 이어지고 있으므로 ⑤ 화산 폭발 직후에 사람들은 더 많은 말을 키우기 시작했다는 내용은 일치하지 않는다."
        },
        {
          type: "mc", t: "RC", p: "대화 내용 불일치", pts: 4,
          passage: `B: What movie will we watch tomorrow?<br>G: How about Magic Island?<br>B: Are you sure? You said you wanted to watch Love in Seoul.<br>G: I changed my mind. Magic Island looks more fun.<br>B: OK. Let's watch Magic Island, then.`,
          q: "다음 대화의 내용과 일치하지 않는 것을 고르시오.",
          c: [
            "They are planning to watch a movie tomorrow.",
            "Magic Island is the only movie they can watch.",
            "The girl previously liked 'Love in Seoul'.",
            "The girl thinks Magic Island will be more interesting.",
            "The boy agrees to watch Magic Island."
          ],
          a: 1,
          expl: "'Magic Island'와 'Love in Seoul' 두 영화가 언급되었으므로 'Magic Island'가 유일한 영화라는 ②는 일치하지 않는다. ① 그들은 내일 영화를 볼 계획이다 ② 매직 아일랜드는 그들이 볼 수 있는 유일한 영화이다 ③ 소녀는 이전에 '러브 인 서울'을 좋아했다 ④ 소녀는 매직 아일랜드가 더 재미있을 것이라고 생각한다 ⑤ 소년은 매직 아일랜드를 보는 것에 동의한다"
        },
        {
          type: "mc", t: "RC", p: "요약문 빈칸", pts: 4,
          passage: `At that time, people had to retype the whole page when they made even a small mistake. Graham was a bad typist, so she needed a solution. One day, Graham saw some window painters. When they made a mistake, they corrected it by simply painting over it.`,
          q: "다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 ⓐ, ⓑ에 들어갈 말로 가장 적절한 것은?<br><br>Graham found a way to ⓐ_________ her typing errors by ⓑ_________ how painters fixed their mistakes.",
          c: [
            "ⓐ fix &nbsp; ⓑ watching",
            "ⓐ repeat &nbsp; ⓑ ignoring",
            "ⓐ hide &nbsp; ⓑ helping",
            "ⓐ make &nbsp; ⓑ painting",
            "ⓐ delete &nbsp; ⓑ calling"
          ],
          a: 0,
          expl: "도장공들이 실수를 고치는 것을 지켜봄(watching)으로써 자신의 타자 오류를 고칠(fix) 방법을 찾았다는 내용이 적절하다. ② 반복하다 - 무시하는 것 ③ 숨기다 - 돕는 것 ④ 만들다 - 칠하는 것 ⑤ 삭제하다 - 부르는 것"
        },
        {
          type: "mc", t: "RC", p: "제목", pts: 4,
          passage: `Whiteout was invented by Bette Graham. In 1956, Graham was working at a bank in Texas, USA. At that time, people had to retype the whole page when they made even a small mistake. Graham was a bad typist, so she needed a solution.<br>One day, Graham saw some window painters. When they made a mistake, they corrected it by simply painting over it. The next day, she made her own white paint and used it to correct her typing mistakes. Surprisingly, nobody noticed! Soon, everybody at the bank began using it.`,
          q: "다음 글의 제목으로 가장 적절한 것은?",
          c: [
            "Life as a Bank Worker in Texas",
            "Why Retyping a Page is Important",
            "A Small Paint Idea That Solved a Big Problem",
            "How to Paint Windows Without Making Mistakes",
            "The Secret of Success for the Best Typist"
          ],
          a: 2,
          expl: "페인트칠을 하는 모습에서 얻은 작은 아이디어가 타자 실수라는 큰 문제를 해결하게 된 과정을 설명하고 있으므로 제목으로 가장 적절한 것은 ③이다. ① 텍사스 은행원으로서의 삶 ② 페이지를 다시 치는 것이 중요한 이유 ③ 큰 문제를 해결한 작은 페인트 아이디어 ④ 실수 없이 창문을 칠하는 방법 ⑤ 최고 타이피스트의 성공 비결"
        },
        {
          type: "mc", t: "GR", p: "어법 (밑줄 부적절)", pts: 4,
          passage: `As a solution, the two researchers ⓐ <u>set up</u> a camera in front of the coffee machine. The camera ⓑ <u>took</u> pictures of the coffee pot three times a minute. With special software, all the researchers in the building ⓒ <u>could see</u> the pictures on ⓓ <u>its</u> local network. No more ⓔ <u>disappointing</u> trips!`,
          q: "다음 글의 밑줄 친 ⓐ~ⓔ 중 어법상 적절하지 않은 것은?",
          c: ["ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ"],
          a: 3,
          expl: "ⓓ의 대명사는 앞에 나온 'all the researchers'를 가리키므로 단수 소유격인 its가 아니라 복수 소유격인 their로 고쳐야 한다."
        },
        {
          type: "mc", t: "RC", p: "밑줄 함축 의미", pts: 4,
          passage: `One day, Graham saw some window painters. When they made a mistake, they corrected it by simply painting over it. The next day, she <u>made her own white paint</u> and used it to correct her typing mistakes. Surprisingly, nobody noticed! Soon, everybody at the bank began using it.`,
          q: "다음 글의 흐름상 밑줄 친 <b>made her own white paint</b>가 의미하는 바로 가장 적절한 것은?",
          c: [
            "She started a new hobby",
            "She became a professional painter",
            "She bought white paint at a store",
            "She created a way to cover her errors",
            "She painted the bank windows white the next day"
          ],
          a: 3,
          expl: "도색공들에게서 얻은 영감을 바탕으로 실수를 덮을 수 있는 자신만의 도구(수정액)를 제작했음을 의미한다. 따라서 ④ '그녀는 자신의 오류를 덮을 방법을 만들었다'가 정답이다. ① 그녀는 새로운 취미를 시작했다 ② 그녀는 전문 화가가 되었다 ③ 그녀는 가게에서 흰색 페인트를 샀다 ⑤ 그녀는 다음 날 은행 창문을 흰색으로 칠했다."
        },
        {
          type: "mc", t: "RC", p: "빈칸 추론 (대화)", pts: 4,
          passage: `G: What's your favorite pizza place, Tim?<br>B: Little Italy. I think they have the best pizza in Seoul.<br>G: Are you sure? You said the same thing about Joe's Pizza last week. Remember?<br>B: Did I? Well, then, ________________________. Let's just say that they both have great pizza.`,
          q: "주어진 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
          c: [
            "I am right",
            "I hate pizza",
            "I can't decide",
            "I love Joe's more",
            "Little Italy is bad"
          ],
          a: 2,
          expl: "소년이 지난주에는 다른 피자집이 최고라고 했는데 소녀가 소년이 이야기했던 것을 기억하고 되묻는 상황이다. 뒤이어 두 곳 다 훌륭하다고 하고 있으므로 확신을 하지 못하는 표현이 나온다. ③ '결정할 수 없어'가 가장 적절하다. ① 내가 맞아 ② 기억나 ④ 조의 피자를 더 사랑해 ⑤ 리틀 이태리는 나빠"
        },
        {
          type: "sa", p: "배열 영작 (n번째 단어)", pts: 4, sa_text: true,
          passage: `G: Look at this program, Liam. This Saturday is Science Day, and there are lots of interesting activities.<br>B: You mean April 21?<br>G: Yes. All the activities look fun, and they're all free.<br>B: All of them? Are you sure?<br>G: Yes, I'm quite sure. I saw it on the poster. (A) <u>어쨌든, 당신은 어느 것에 관심이 있나요?</u><br><br>&lt;조건&gt; 아래 단어를 모두 사용할 것<br>interested / which / Anyway, / in / are / you / ones`,
          q: "위 밑줄 친 우리말 (A)와 일치하도록 &lt;조건&gt;에 맞춰 영작했을 때, <b>5번째 올 단어</b>를 쓰시오.",
          a: "you",
          accepts: ["you"],
          expl: "주어진 우리말을 영작하면 \"Anyway, which ones are you interested in?\"이다. 단어 순서는 Anyway(1) which(2) ones(3) are(4) you(5) interested(6) in(7). 따라서 5번째 단어는 you이다."
        },
        {
          type: "mc", t: "RC", p: "요지", pts: 4,
          passage: `The first webcam was invented to watch a coffee pot. In 1991, Dr. Quentin Stafford-Fraser and Dr. Paul Jardetzky were working at a computer lab in England. To work better, they needed lots of coffee. However, there was only one coffee machine in the building. So, they had to make many disappointing trips to the empty coffee pot.`,
          q: "다음 글의 요지로 가장 적절한 것은?",
          c: [
            "Scientists often work better when they have enough coffee.",
            "Working in a big building can make people feel tired.",
            "A small inconvenience can be the start of a new invention.",
            "Computer labs in England have the best coffee machines.",
            "It is important to have many coffee pots in an office."
          ],
          a: 2,
          expl: "커피포트가 비어 있는지를 확인해야 했던 사소한 불편함이 웹캠이라는 새로운 발명으로 이어졌다는 맥락이므로 ③ '작은 불편함이 새로운 발명의 시작이 될 수 있다'가 요지로 가장 적절하다. ① 과학자들은 커피가 충분할 때 종종 일을 더 잘한다 ② 큰 건물에서 일하는 것은 사람들을 피곤하게 만들 수 있다 ④ 영국의 컴퓨터 실험실은 최고의 커피 머신을 가지고 있다 ⑤ 사무실에 많은 커피포트를 두는 것이 중요하다"
        },
        {
          type: "mc", t: "RC", p: "빈칸 추론", pts: 4,
          passage: `Mt. Tambora, a volcano in Indonesia, exploded in 1815. The explosion created a huge cloud of ash, so crops failed around the world. As a result, people didn't have enough food to eat. Surprisingly, this made traveling difficult. Why? In those days, people rode horses, but many horses were killed for food.<br>____________________, and Karl von Drais invented the first bicycle in Germany in 1817. Drais's bicycle had two wooden wheels but no pedals. How did it move without pedals? Well, riders simply pushed the bicycle forward with their feet. The present-day bicycle is the result of many inventors' work in the 19th century.`,
          q: "주어진 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
          c: [
            "food was enough",
            "horses were healthy",
            "people liked walking",
            "the volcano explosion stopped",
            "people needed a new way to travel"
          ],
          a: 4,
          expl: "화산 폭발로 인해 식량이 부족해지고 말이 식량으로 사용되면서 이동이 어려워진 상황을 설명하고 있다. 이에 따라 새로운 이동 수단이 필요해져 자전거가 발명되었다는 흐름이 자연스럽다. 따라서 정답은 ⑤ '사람들은 새로운 이동 수단이 필요했다'이다. ① 식량은 충분했다 ② 말들은 건강했다 ③ 사람들은 걷는 것을 좋아했다 ④ 화산 폭발이 멈췄다"
        },
        {
          type: "mc", t: "RC", p: "밑줄 함축 의미", pts: 4,
          passage: `One day, Graham saw some window painters. When they made a mistake, they corrected it by simply painting over it. The next day, she made her own white paint and used it to correct her typing mistakes. Surprisingly, nobody noticed! <u>Soon, everybody at the bank began using it.</u>`,
          q: "밑줄 친 <b>Soon, everybody at the bank began using it</b>이 다음 글에서 의미하는 바로 가장 적절한 것은?",
          c: [
            "It was a very useful invention",
            "The paint was very colorful",
            "People at the bank were lazy",
            "Everyone wanted to be a painter",
            "She sold the paint for a lot of money"
          ],
          a: 0,
          expl: "모든 직원이 사용하기 시작했다는 것은 그 발명품이 타자 실수를 고치는 데 매우 실용적이고 유용했음을 의미한다. 따라서 ① '그것은 매우 유용한 발명품이었다'가 정답이다. ② 페인트는 매우 다채로웠다 ③ 은행 사람들은 게을렀다 ④ 모두가 도색공이 되고 싶어 했다 ⑤ 그녀는 그 페인트를 큰돈을 받고 팔았다."
        }
      ]
    }
  }
};
