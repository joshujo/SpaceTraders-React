import { useState } from 'react';
import infopanel from '../ApiCalls/infopanel';

function InfoPanel() {
    const token = sessionStorage.getItem('token');
    const data = infopanel('token');
}