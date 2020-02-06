import React from 'react';
import { connect } from 'react-redux';
import { updateUser, requestUser } from '../../actions/user_action';
import { closeModal } from '../../actions/modal_actions';
import AvatarIcon from './avatar_icon'


class ProfileSettingsProfile extends React.Component {
    constructor(props) {
        super(props);
        const { currentUser } = this.props;
        this.state = {
            id: currentUser.id,
            full_name: currentUser.full_name,
            username: currentUser.username,
            photo_url: currentUser.photo_url,
            changeAvatar: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { updateUser, closeModal } = this.props;
        updateUser(this.state);
        closeModal();
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    componentDidMount(){
        const { currentUserId, requestUser} = this.props;
        this.props.requestUser(currentUserId);
    }

    render() {
        const { full_name, photo_url, changeAvatar, currentUserId, requestUser } = this.props;

        const avatarRadioInputsClass = changeAvatar ? "" : " hidden";
       
        const avatarKeys = ["flushed", "grin", "frown", "smile"];

        const avatarRadioInputs = avatarKeys.map(key => {
            let input;
            if (key === photo_url) {
                input = <input type="radio" name="avatar" value={`${key}`} id={`${key}`} onChange={this.handleChange("photo_url")} checked />
            } else {
                input = <input type="radio" name="avatar" value={`${key}`} id={`${key}`} onChange={this.handleChange("photo_url")} />
            }

            return (
                <div key={`${key}`}>
                    {input}
                    <label htmlFor={`${key}`}><i className={`fas fa-${key}`}></i></label>
                </div>
            )
        });

        return (
            <div className="profile-settings-profile-container">
                <form onSubmit={this.handleSubmit}>

                    <div className="profile-settings-avatar">
                        <span className="profile-settings-avatar-label">Your avatar</span>
                        <div className="profile-settings-avatar-main">
                            <div className="profile-settings-avatar-main-img-frame" onClick={() => this.setState({ changeAvatar: true })}>
                                <AvatarIcon photo_url={photo_url} />

                            </div>
                            <div className="profile-settings-avatar-main-text">
                                <div className="profile-settings-avatar-main-text-top">
                                    <span onClick={() => this.setState({ changeAvatar: true })}>Change your avatar</span>
                                    <span className={`profile-settings-avatar-radio-inputs${avatarRadioInputsClass}`}>
                                        {avatarRadioInputs}
                                    </span>
                                </div>
                                <span className="profile-settings-avatar-main-text-bottom">Help your teammates recognize you!</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-settings-profile-full-name">
                        <label htmlFor="profileSettingsFullName" className="profile-settings-label">Full name</label>
                        <input type="text" value={currentUser.full_name} id="profileSettingsFullName"
                            onChange={this.handleChange("profileSettingsFullName")} 
                            className="profile-settings-input" 
                            />
                    </div>
                    <div className="profile-settings-profile-username">
                        <label htmlFor="profileSettingsUsername" className="profile-settings-label">Username</label>
                        <input type="text" value={currentUser.username} id="profileSettingsUsername"
                            className="profile-settings-input" />
                    </div>

                    <input type="submit" value="Save Changes" />
                </form>
            </div>
        );
    }
}

const msp = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const currentUser = state.entities.users[currentUserId];
    return {
      currentUser,
      currentUserId
    };
};

const mdp = dispatch => {
   
    return {
        requestUser: (currentUserId) => dispatch(requestUser(currentUserId)),
        updateUser: (currentUser) => dispatch(updateUser(currentUser)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(msp, mdp)(ProfileSettingsProfile);