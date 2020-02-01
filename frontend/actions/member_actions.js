import * as MemberAPIUtil from '../util/member_api_util';

export const RECEIVE_ALL_MEMBERS = 'RECEIVE_ALL_MEMBERS';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const receiveMembers = (members) => {
  return {
    type: RECEIVE_ALL_MEMBERS,
    members
  };
};

export const receiveMember = ({member}) => {
    return {
      type: RECEIVE_MEMBER,
      member
    };
};

export const removeMember = (memberId, teamId) => {
    return {
      type: REMOVE_MEMBER,
      memberId,
      teamId
    };
};

export const requestAllMembers = (teamId) => dispatch => {

  return MemberAPIUtil.fetchAllMembers(teamId).then(members => (
    dispatch(receiveMembers(members))
  ));
};

export const requestMember = (id, teamId) => dispatch => {
    
    return MemberAPIUtil.fetchSingleMember(id, teamId).then(payload => (
       dispatch(receiveMember(payload))
    ));
};

export const createMember = (member, teamId) => dispatch => {

    return MemberAPIUtil.createMember(member, teamId).then(payload => (
        dispatch(receiveMember(payload))
    ));
  
};


export const deleteMember = (memberId, teamId) => dispatch => {
  return MemberAPIUtil.deleteMember(memberId, teamId).then(member => (
    dispatch(removeMember(memberId, teamId))));
};
