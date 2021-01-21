import React from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMemory } from '../../../redux/actionTypes'
import { setMemoryById } from '../../../redux/actionTypes'

const Post = (props) => {
  const { id, message, title, creator, image, createdAt } = props
  const initial = creator.charAt(0)
  // console.log(initial);
  //   console.log(id, message, title, creator);
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const dispatch = useDispatch()
  const memories = useSelector((state) => state.memoryReducer.memories)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const editMem = (id) => {
    let memory = memories.map((mem) => mem._id === id && mem)
    memory = memory.filter((mem) => mem !== false)
    console.log(memory)

    dispatch(setMemoryById(memory))
  }
  const deleteMem = (id) => {
    // console.log(id);
    dispatch(deleteMemory(id))
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {initial.toUpperCase()}
          </Avatar>
        }
        action={
          <ButtonGroup>
            <IconButton onClick={() => editMem(id)} aria-label='settings'>
              <EditIcon color='primary' />
            </IconButton>
            <IconButton onClick={() => deleteMem(id)} aria-label='settings'>
              <DeleteIcon color='secondary' />
            </IconButton>
          </ButtonGroup>
        }
        title={title}
        subheader={<Moment format='DD-MM-YYYY'>{createdAt}</Moment>}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  )
}

export default Post
