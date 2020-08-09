import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { PageHead } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <PageHead>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar para a home" />
          </Link>
          <img src={logoImg} alt="Proffy-Logo" />
        </div>

        <div className="header-content">
          <strong>{title}</strong>
          {description && <p>{description}</p>}

          {children}
        </div>
      </header>
    </PageHead>
  );
};

export default PageHeader;
