import React from 'react';
import PageAccessValidator from 'components/PageAccessValidator';
import BooksFormPage from 'pages/BooksForm';
import PageContainer from 'components/PageContainer';

const BooksForm = () => (
    <PageAccessValidator>
        <PageContainer>
            <BooksFormPage />
        </PageContainer>
    </PageAccessValidator>
);

export default BooksForm;