import React, { Fragment, ReactFragment, ReactNode } from 'react';

import { Titan } from '../../models/titan';

const WarStrategy: React.FC = () => {
  const moloch = Titan.MOLOCH();
  // const vulcan = Titan.VULCAN();
  const ignis = Titan.IGNIS();
  const araji = Titan.ARAJI();

  const sigurd = Titan.SIGURD();
  const nova = Titan.NOVA();
  const mairi = Titan.MAIRI();
  const hyperion = Titan.HYPERION();

  const angus = Titan.ANGUS();
  // const sylva = Titan.SYLVA();
  const avalon = Titan.AVALON();
  const eden = Titan.EDEN();

  const superTitanLine = (): ReactFragment => {
    return (
      <Fragment>
        <li className="titan">
          <img src={hyperion.imagePath} alt={hyperion.name} title={hyperion.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={eden.imagePath} alt={eden.name} title={eden.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={araji.imagePath} alt={araji.name} title={araji.name} className="titan-avatar" />
        </li>
      </Fragment>
    );
  };

  const molochAngusLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={moloch.imagePath} alt={moloch.name} title={moloch.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const angusNovaLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={nova.imagePath} alt={nova.name} title={nova.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const novaIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={nova.imagePath} alt={nova.name} title={nova.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const molochNovaLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={nova.imagePath} alt={nova.name} title={nova.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={moloch.imagePath} alt={moloch.name} title={moloch.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const molochIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={moloch.imagePath} alt={moloch.name} title={moloch.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdNovaLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={nova.imagePath} alt={nova.name} title={nova.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const molochAvalonLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={avalon.imagePath} alt={avalon.name} title={avalon.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={moloch.imagePath} alt={moloch.name} title={moloch.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdMolochLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={moloch.imagePath} alt={moloch.name} title={moloch.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdAvalonLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={avalon.imagePath} alt={avalon.name} title={avalon.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdMairiLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={mairi.imagePath} alt={mairi.name} title={mairi.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const angusMairiLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={mairi.imagePath} alt={mairi.name} title={mairi.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const sigurdAngusLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={sigurd.imagePath} alt={sigurd.name} title={sigurd.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const angusIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const angusAvalonLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={avalon.imagePath} alt={avalon.name} title={avalon.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={angus.imagePath} alt={angus.name} title={angus.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const mairiIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={mairi.imagePath} alt={mairi.name} title={mairi.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const avalonIgnisLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        <li className="titan">
          <img src={ignis.imagePath} alt={ignis.name} title={ignis.name} className="titan-avatar" />
        </li>
        {superTitanLine()}
        <li className="titan">
          <img src={avalon.imagePath} alt={avalon.name} title={avalon.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const avalonMairiLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={mairi.imagePath} alt={mairi.name} title={mairi.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={avalon.imagePath} alt={avalon.name} title={avalon.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  const novaMairiLine = (): ReactNode => {
    return (
      <ul className="titan-line">
        {superTitanLine()}
        <li className="titan">
          <img src={mairi.imagePath} alt={mairi.name} title={mairi.name} className="titan-avatar" />
        </li>
        <li className="titan">
          <img src={nova.imagePath} alt={nova.name} title={nova.name} className="titan-avatar" />
        </li>
      </ul>
    );
  };

  return (
    <div>
      <p className="font-large">Auto-attack strategy assuming max (or same) level</p>
      <table className="tool-table">
        <thead>
          <tr>
            <th>Their Team</th>
            <th>Your Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{molochAngusLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {novaIgnisLine()}
            </td>
          </tr>
          <tr>
            <td>{molochNovaLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {molochNovaLine()}
            </td>
          </tr>
          <tr>
            <td>{molochIgnisLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{molochAvalonLine()}</td>
            <td>{angusNovaLine()}</td>
          </tr>
          <tr>
            <td>{sigurdMolochLine()}</td>
            <td>{angusNovaLine()}</td>
          </tr>
          <tr>
            <td>{sigurdAvalonLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {sigurdNovaLine()}
            </td>
          </tr>
          <tr>
            <td>{sigurdMairiLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{sigurdNovaLine()}</td>
            <td>{angusNovaLine()}</td>
          </tr>
          <tr>
            <td>{sigurdIgnisLine()}</td>
            <td>
              {molochNovaLine()}
              <div className="seperator">- or -</div>
              {angusMairiLine()}
            </td>
          </tr>
          <tr>
            <td>{sigurdAngusLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {sigurdNovaLine()}
            </td>
          </tr>
          <tr>
            <td>{angusNovaLine()}</td>
            <td>{angusNovaLine()}</td>
          </tr>
          <tr>
            <td>{angusIgnisLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {sigurdNovaLine()}
            </td>
          </tr>
          <tr>
            <td>{angusAvalonLine()}</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {sigurdNovaLine()}
            </td>
          </tr>
          <tr>
            <td>{mairiIgnisLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{avalonIgnisLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{avalonMairiLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{novaMairiLine()}</td>
            <td>{sigurdNovaLine()}</td>
          </tr>
          <tr>
            <td>{novaIgnisLine()}</td>
            <td>
              {molochNovaLine()}
              <div className="seperator">- or -</div>
              {novaIgnisLine()}
            </td>
          </tr>
          <tr>
            <td>other</td>
            <td>
              {angusNovaLine()}
              <div className="seperator">- or -</div>
              {sigurdNovaLine()}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tool-data-source font-small">
        This section based on Assassins discord (post from another guild though?)
      </div>
    </div>
  );
};
export default WarStrategy;
