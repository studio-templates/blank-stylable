import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { BadassComponent } from '../../../badass-component/badass-component';

export default createBoard({
    name: 'BadassComponent',
    Board: () => <BadassComponent />
});
