export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16 px-5">
            <p className=" text-lg lg:text-2xl relative">Technical Event Rules: INTRA <span className="absolute right-3"><a download={"Event_Details.pdf"} href="https://docs.google.com/document/d/1sc8Bw8xDUo9IrXUqygTxbImByI3xNGirYsD87VBinM8/edit?usp=drive_link" className="btn bg-pink-red text-black hover:text-white">View PDF</a></span></p>
            <table className="table mb-10 w-full">
                <thead>
                    <tr className="table-row">
                        <th className="table-cell">Event Name</th>
                        <th className="table-cell">Rules</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row">
                        <td className="table-cell">Electrocuted</td>
                        <td className="table-cell">
                            <ul className="list-disc text-white">
                                <li>
                                    Type: Team of 2 members 
                                </li>
                                <li>
                                    Round 1: The prelims A simple electronics related pen and paper test comprising 10 questions, which has to be solved within a stipulated amount of time. 
                                </li>
                                <li>
                                    Round 2: The Mains The top qualifiers of the 1st round will be allowed to play this Round wherein the participants have to bid for the components they need to rig up an incomplete circuit given to them. Bidding points are purely based on the marks one earns in the first round.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">Code Troopers Code Contest</td>
                        <td className="table-cell">
                            <ul className="list-disc text-white">
                                <li>
                                    This is a single round event where the participant has to solve three questions in two hours.
                                </li>
                                <li>
                                    The participants have to be present near the venue 5 mins prior to the start of the event.
                                </li>
                                <li>
                                    Participants have to login to the contest platform with the registered email id.
                                </li>
                                <li>
                                    Participants can bring their own laptop or participate using the computer system provided.
                                </li>
                                <li>
                                Each challenge has a predetermined score.
                                </li>
                                <li>
                                A participant's score depends on the number of test cases a participant's code submission successfully passes.
                                </li>
                                <li>
                                If a participant submits more than one solution per challenge, then the participant's score will reflect the highest score achieved.
                                </li>
                                <li>
                                In a game challenge, the participant's score will reflect the last code submission.
                                </li>
                                <li>
                                Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">Robo Soccer</td>
                        <td className="table-cell">
                            <p>A manually controlled robot, by means of a tethered or wireless interface, must tackle the opponent bot to shove the ball into the opponent's goalpost.</p>
                            <p>Rules:</p>
                            <ol>
                                <li>
                                Game play:
                                <ul className="list-disc text-white">
                                    <li>Each match will be of knockout type, where the winning team progresses to the next round.</li>
                                    <li>Each match shall be of 5 minutes, where each round will be of 2 mins each and a technical timeout of 1 min in between the 2 rounds. </li>
                                    <li>Additional timeout of 1 minute shall be provided on the team's request without deduction of points. If the timeout is to be extended, a deduction of 1 point per minute shall be in force. </li>
                                    <li>A maximum timeout of 1+3 minutes is allowed, beyond which the team is bound to be disqualified.</li>
                                    <li>The ball will not be reset after a goal is scored. Each goal carries one point.</li>
                                    <li>A robot can push or hit the ball, but not withhold/ grab the ball.</li>
                                    <li>Any impairment to the opponent's bot ON PURPOSE, will lead to immediate disqualification, on receival of objection.</li>
                                    <li>In case of a lack of motion from both the bots for 10s, the bots will be reset. Toppled bots can be reset AFTER the indication by the referee. The nature of reset shall be determined by the referee.</li>
                                    <li>A breach of fair play will lead to immediate disqualification.</li>
                                </ul>
                                </li>
                                <li>
                                Robot specifications:
                                <ul className="list-disc text-white">
                                    <li>The robot must be within 30cmx30cmx30cm dimensions.</li>
                                    <li>Bot must weigh within 5kg(+500gm tolerance).</li>
                                    <li>Bot can only be electrically powered. Use of I.C.E. is prohibited.</li>
                                    <li>The voltage between any 2 points on the bot must not exceed 12V DC.</li>
                                    <li>The robot can be wired/wireless.</li>
                                    <li>Moving arms to assist in scoring goals, will not be allowed.</li>
                                    <li>Arms can be provided in a static condition only.</li>
                                    <li>Any parts with intent of damage to opponents will lead to disqualification.</li>
                                    <li>Wires must not restrict the motion to the corners of the arena.</li>
                                </ul>
                                </li>
                                <li>
                                General rules:
                                    <ul className="list-disc text-white">
                                        <li>Only pre-registration is accepted. Spot registration is not allowed.</li>
                                        <li>A team must consist of at least 2 and at most 4 members. </li>
                                        <li>One participant can operate only 1 bot throughout the tournament. Team members may be exchanged, without violating the above rule.</li>
                                        <li>Robots may not be exchanged between teams.</li>
                                        <li>Deliberate interference in the opponent's wireless interface will lead to disqualification. </li>
                                        <li>Accidental interference in radio signals will not pertain to the organizers.</li>
                                        <li>Human interference is not allowed during the duration of the game, without the referee’s consent. Any timeout will be officiated on the referee’s command.</li>
                                        <li>Timeout will be provided to untangle & rectify the bot.</li>
                                        <li>Robots must remain intact until results are announced. </li>
                                        <li>Referee’s judgment is considered to be final and binding.</li>
                                        <li>Scrutiny will be conducted at the beginning of the tournament. Additional scrutiny will be conducted at the referee's discretion.</li>
                                        <li>Arena dimensions: 6’x4’</li>
                                        <li>Entry fees of Rs.300 is to be paid for each bot. </li>
                                    </ul>
                                </li>
                            </ol>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">BGMI</td>
                        <td className="table-cell">
                            <ul className="list-disc text-white">
                                <li>Each team's roster must contain a maximum of 4 players. Three to four people can register.</li>
                                <li>No using of triggers or gaming consoles, using of finger sleeves is allowed.</li>
                                <li>Using iPads/Emulators is not allowed. If a team wants to report a cheat, record the death replay from in-game.</li>
                                <li>Matches will be played in the advance room.</li>
                                <li>The number of finishes will be awarded 1 point each. Position points will be based on the BGIS points table.</li>
                                <li>Total points for the team will be position points + the number of finishes.</li>
                                <li>If found teaming up or using any modification of the BATTLEGROUNDS MOBILE INDIA game client by any player, the team will be disqualified from the tournament.</li>
                                <li>The number of finishes will be given priority if there is a points tiebreaker between the teams.</li>
                                <li>In the first round, Classic Erangle will be played. The top four teams with the highest number of points will move on to the next round. Similarly, the top four teams will continue to move on to the next round till the finals.</li>
                                <li>In the final, two matches will be played and the winner will be decided based on the number of points earned.</li>
                                <li>In the unlikely event of a server crash, the game will be restarted. The decision of the admins/judges is final in all matters.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className=" text-lg lg:text-2xl">Technical Event Rules: INTER</p>
            <table className="table mb-10">
                <thead>
                    <tr className="table-row">
                        <th className="table-cell">Event Name</th>
                        <th className="table-cell">Rules</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row">
                        <td className="table-cell">Tech Pursuit (IT treasure hunt)</td>
                        <td className="table-cell">
                            <ul className="list-disc text-white">
                                <li>
                                Type: Group of 3 Members. 
                                </li>
                                <li>
                                Preliminary Round: A questionnaire related to general knowledge & technology
                                </li>
                                <li>
                                Finale: The final round is an IT treasure hunt where each team has to solve clues which lead the team to the final treasure.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">Paper Presentation</td>
                        <td className="table-cell">
                            <ul className="list-disc text-white">
                                <li>
                                Time limit for the presentation will be 10+2 minutes.  
                                </li>
                                <li>
                                Max Two members
                                </li>
                                <li>
                                The paper must be in IEEE format.
                                </li>
                                <li>
                                Submit paper at <a href="mailto:cocurricular@sode-edu.in">cocurricular@sode-edu.in</a>, by March 16th.
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">Line Follower</td>
                        <td className="table-cell">
                            <p>A competition played by an automated wireless bot which is capable of racing on the given track in the shortest period of time.</p>
                            
                            <ol>
                                <li>
                                Rules and Regulations:
                                <ul className="list-disc text-white">
                                    <li>The competition will consist of 2 rounds.</li>
                                    <li>The first round will be a knockout round, where the qualified bots will reach round 2.</li>
                                    <li>The second round will be the final judgement round where the fastest finisher wins the tournament.</li>
                                    <li>Each round will have different maps (round 2 with a more complex map than that of round 1)</li>
                                    <li>The maps will be disclosed on the day of the event.</li>
                                    <li>All the rounds will have black line/trajectory on white arena.     </li>
                                </ul>
                                </li>
                                <li>
                                General rules:
                                <ul className="list-disc text-white">
                                    <li>The team should contain 2-4 members.</li>
                                    <li>A robot cannot be used by more than one team. </li>
                                    <li>The robot must be prepared by the students and cannot be readymade. </li>
                                    <li>Once a robot has crossed the start line it must remain fully autonomous, else the team will be disqualified.</li>
                                    <li>Participants should arrange their own batteries, and power supply must be on board.</li>
                                    <li>The robot must remain intact until results are announced.</li>
                                    <li>The referee’s judgment is considered final and binding.</li>
                                </ul>
                                </li>
                            </ol>
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td className="table-cell">Robo Race</td>
                        <td className="table-cell">
                            <p>	A manually controlled robot, by means of a tethered or wireless interface, must traverse the given track in the shortest possible time.</p>
                            <p>Rules:</p>
                            
                            <ol>
                                <li>
                                Game play:
                                <ul className="list-disc text-white">
                                    <li>The tournament makes use of tracks with obstacles designed to slow down the racers. There will be 2 tracks, one for the knockout round & the other for the final judgment.</li>
                                    <li>All the bots will have to traverse through the knockout track. The bots which qualify will progress to the next round. </li>
                                    <li>The time taken for a bot to travel from the start to finish will be considered for the final judgement.</li>
                                    <li>There will be checkpoints between each set of obstacles. A player may choose to forego an obstacle and move to the next checkpoint.</li>
                                    <li>A player is entitled to one free skip, and any more skipped obstacles incur a time penalty. The maximum number of skips is limited to 3    (1 without penalty + 2 with penalties).</li>
                                    <li>The robot can go off the bounds of the track only for 5 instances, beyond which a time penalty is applied.</li>
                                    <li>Robots will not be allowed to conduct non-timed trial runs on the track. However, each robot can hold one powered run over one section of the tracks, i.e., between 2 checkpoints.</li>
                                    <li>Each team will be eligible to hold only one run over the track.</li>
                                </ul>
                                </li>
                                <li>
                                Robot specifications:
                                <ul className="list-disc text-white">
                                    <li>The robot must be within 30cmx30cmx30cm dimensions.</li>
                                    <li>Bot must weigh within 3 kg(+500gm tolerance).</li>
                                    <li>Bot can only be electrically powered. Use of I.C.E. is prohibited.</li>
                                    <li>The voltage between any 2 points on the bot must not exceed 12V DC.</li>
                                    <li>The robot can be wired/wireless.</li>
                                    <li>LEGO kit robots are not allowed.</li>
                                </ul>
                                </li>
                                <li>
                                General rules:
                                <ul className="list-disc text-white">
                                <li>Only pre-registration is accepted. Spot registration is not allowed.</li>
                                <li>A team can consist of a maximum of 4 members. </li>
                                <li>No individual may be a part of more than one team.</li>
                                <li>Robots may not be exchanged between teams.</li>
                                <li>Deliberate interference in the opponent's wireless interface will lead to disqualification. </li>
                                <li>Accidental interference in radio signals will not pertain to the organizers.</li>
                                <li>Tugging of wires to direct the bot will lead to penalties being applied.</li>
                                <li>Robots must remain intact until results are announced. </li>
                                <li>Scrutiny will be conducted at the beginning of the tournament. Additional scrutiny will be conducted at the referee's discretion.</li>
                                <li>Referee’s judgment is considered to be final and binding.</li>
                                </ul>
                                </li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}