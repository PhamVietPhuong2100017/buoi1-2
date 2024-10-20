// controllers/UserController.js
import User from '../models/User.js';

// Hiển thị danh sách người dùng
export const listUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('users', { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Thêm người dùng
export const addUser = async (req, res) => {
    if (req.method === 'POST') {
        const { username, password, fullname, address, sex, email } = req.body;
        try {
            await User.create({ username, password, fullname, address, sex, email });
            res.redirect('/users');
        } catch (error) {
            res.status(500).send(error.message);
        }
    } else {
        res.render('add-user');
    }
};

// Xem thông tin người dùng
export const viewUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.render('edit-user', { user });
};

// Cập nhật thông tin người dùng
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, fullname, address, sex, email } = req.body;
    try {
        await User.update({ username, password, fullname, address, sex, email }, { where: { id } });
        res.redirect('/users');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Xóa người dùng
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.redirect('/users');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

