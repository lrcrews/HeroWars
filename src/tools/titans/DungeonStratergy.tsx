import React from 'react';

const DungeonStratergy: React.FC = () => {
  return (
    <div>
      <p className="font-large">If you are not able to get 151 titanite consistently please read the following:</p>
      <ul>
        <li>
          <span className="emphasize">A.</span> In "All Elements" battles start with Mari as your tank. Your lineup
          should be Mari + Supers + Ignis. If you don't have all supers put in Vulcan & Sylvia until you do.
        </li>
        <li>
          <span className="emphasize">B.</span> Always fight titans manually.
        </li>
        <li>
          <span className="emphasize">C.</span> When Mari's health is low sub in Avalon for "All Elements" battles.
        </li>
      </ul>
      <p className="font-large">Fighting Manually</p>
      <p>
        When there is one titan left don't use ultimates (ults), let the basic attacks finish them off. Also if a titan
        is ready to ultimate at the start of a battle, wait until the opponent stops walking in to use them.
      </p>
      <p>
        <span className="emphasize">Avalon:</span> Trigger the shield when ready in all battles.
      </p>
      <p>
        <span className="emphasize">Eden:</span> Try to time ults with the fire mark. It will greatly increase his
        damage output.
      </p>
      <p>
        <span className="emphasize">Ignis:</span> When you have Ignis in battle, when he is ready to ult wait until Eden
        is ready to ultimate. When both are ready trigger Ignis and as soon as you see Eden has the fire mark trigger
        eden ultimate. Don't trigger Ignis ultimate unless you have other titans about to Ult [Araji, Eden, Hyperion,
        Sylvia, Nova, Vulcan, Angus, Molach].
      </p>
      <p>
        <span className="emphasize">Mari:</span> Ult is best timed when the opponents supers are ults are going. It
        reduce the damage. When fighting in all elements use this one when ready because you'll ussually kill the titans
        quickly. In only water try to time it.
      </p>
      <p>
        <span className="emphasize">Sigurd + Nova:</span> Try to time them where you don't use there ults at same time.
        Sigurd will block some of Araji's ult. When that is done trigger nova to stun him and the other back line
        titans.
      </p>
      <div className="tool-data-source font-small">This section based on Assassins discord</div>
    </div>
  );
};
export default DungeonStratergy;
