import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from './actions';

const initialState = {
    user: {}
};

const useGlobalStateUser = useGlobalHook(React, initialState, actions);

export default useGlobalStateUser;