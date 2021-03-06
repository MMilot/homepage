import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Прийдешня мультиплеєрна модифікація до Grand Theft Auto: San Andreas, яка буде повністю зворотно сумісною з існуючою мультіплеєрною модифікацією, відомою як <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>Це означає, що існуючий клієнт SA:MP і всі скрипти будуть працювати з open.mp, а також багато помилок в серверній частині мультиплеєра будуть виправлені без необхідності для хаков і тимчасових рішень.</p>
    <p>
      Якщо Ви зацікавлені новинами про публічний реліз або хочете внести свій внесок у розвиток проекту, перейдіть на <a href="https://www.burgershot.gg/showthread.php?tid=99">цю сторінку форуму</a> для вивчення подальшої інформації.
    </p>
    <h1>
      <FAQLink>FAQ</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Що таке open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) - мультиплеєрний мод, що розробляється в якості заміни San Andreas Multiplayer, створений у відповідь на проблеми з оновленнями і розробкою SA:MP. Він повністю сумісний, що дозволяє існуючим гравцям з клієнтом SA:MP грати на серверах OMP разом з гравцями, які використовують клієнт OMP, і при цьому, на відміну від свого аналогу, забезпечувати вихід оновлень.</p>
    <hr />
    <h2>Це форк?</h2>
    <p>Ні, це повне переписування з нуля, при якому враховуються знання та досвід, накопичені за десятиліття. Спроби створити форк SA:MP мали місце раніше, але ми переконані, що у них у всіх були дві основні проблеми:</p>
    <ol>
      <li>Вони всі були засновані на злитому коді SA:MP. Автори тих модів не мали законного права використовувати код SA:MP, і були свідомо беззахисні, як з моральної, так і з юридичної точки зору. Ми категорично відмовляємося використовувати цей код. Це злегка ускладнює процес розробки, але в довгостроковій перспективі це правильне рішення.</li>
      <li>Вони намагалися заново винайти занадто багато всього і відразу, додаючи нові скриптові мови, видаляючи функціонал і додаючи новий, або ж просто змінюючи що-небудь несумісним чином. Це не дозволяло серверам з великою кодовою базою і великою кількістю гравців здійснити перехід, тому що для цього їм потрібно переписати частину свого коду (якщо не весь код) - це потенційно витратна справа. Ми збираємося з часом додавати новий функціонал та змінювати існуючий, але також зосереджуємося на підтримці існуючих серверів, дозволяючи їм використовувати наш код без потреби змінювати свій.</li>
    </ol>
    <hr />
    <h2>З якою метою ви це робите?</h2>
    <p>Незважаючи на численні спроби підштовхнути вперед розвиток SA:MP офіційно (у вигляді порад, прохань і пропозицій допомогти з боку команди бета-тестерів), а також прохань спільноти зробити хоч щось нове, не було абсолютно ніякого прогресу в роботі над модом. Було широко поширена думка, що причиною цьому відсутність інтересу з боку розробників мода, що само по собі не проблема, але не було жодного поступу. Замість того, щоб передати розробку мода зацікавленим в цьому людям, засновник просто хотів піти і тягнути все за собою в прірву, при цьому затягуючи процес якомога довше для мінімізації зусиль. Також деякі стверджують, що причина цього - пасивний дохід, але немає ніяких доказів цієї версії. Незважаючи на великий інтерес і велике, злагоджене співтовариство, він був переконаний, що моду залишилося всього 1-2 роки, і що співтовариство, яке вклало багато старань, щоб зробити SA:MP таким, яким він є зараз, не заслуговує подальшого розвитку.</p>
    <br />
    <p>Ми не згодні.</p>
    <hr />
    <h2>Якщо це "Open" Multiplayer (переклад: "Відкритий Мультіплеер"), це буде проект з відкритим вихідним кодом?</h2>
    <p>Так, незабаром, такий наш план. Поки ж ми намагаємося забезпечити відкритість в плані зворотнього зв'язку і прозорості процесу розробки (що само по собі вже прогрес) і перейти до відкриття вихідного коду, коли це буде можливо, як тільки будуть вирішені інші значні проблеми і вдасться домогтися стабільного процесу розробки.</p>
    <hr />
    <h2>Як я можу допомогти?</h2>
    <p>Слідкуйте за форумом. У нас є тема спеціально для цих цілей і ми будемо оновлювати її, як тільки з'явиться більше роботи. Незважаючи на те, що про проект стало відомо трохи раніше, ніж планувалося, ми вже на шляху до першого релізу, але це не означає, що допомога не вітається. Заздалегідь дякуємо за то, що цікавитеся і вірите в успіх проекту:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Тема про те, як можна допомогти (англ.)</u>
    </a>
    <hr />
    <h2>Що таке burgershot.gg?</h2>
    <p>burgershot.gg - це ігровий форум, і нічого більше. Багато людей пов'язані і з OMP, і з цим сайтом, а також деякий прогрес в розробці OMP публікується там, але це два незалежних один від одного проекту. У OMP немає свого форуму, але OMP не є власністю burgershot. Як тільки сайт OMP буде введений в дію, мод і burgershot можна буде відокремити один від одного (приблизно так само, як розробка SA: MP колись базувалася на GTAForums, поки у мода з'явився власний сайт).</p>
    <hr />
    <h2>Чому не "OpenMP"?</h2>
    <p>
      <a href="https://ru.wikipedia.org/wiki/OpenMP">Open Multiprocessing</a> - це "OpenMP", наш проект - "open.mp". Це дві абсолютно різні речі.
    </p>
  </div>
);
